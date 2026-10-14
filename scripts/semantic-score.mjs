#!/usr/bin/env node
/**
 * Semantic SEO score for a blog post (Koray Tuğberk GÜBÜR's framework), measured against its brief.
 *
 *   node scripts/semantic-score.mjs <slug> [--strict]
 *
 * Checks (visible text only — frontmatter, image lines and HTML tags are removed):
 *  entities     share of brief `entities` mentioned (≥ 85%)
 *  attributes   share of brief `eav` / `attributes` whose attribute appears (≥ 75%)
 *  values       EAV values that appear next to their attribute (≥ 60%) — attributes need concrete values
 *  ngrams       share of brief `ngrams` used verbatim (≥ 80%), none stuffed (> 1.5% of words)
 *  skipgrams    each brief skip-gram pair ["a","b"] co-occurs within 8 words at least once (≥ 80%)
 *  lexical      synonyms / hypernyms / hyponyms / meronyms from `lexical` used (≥ 60%)
 *  salience     central entity in H1, first 100 words, ≥ 50% of H2s or their first sentence
 *  subjects     ≤ 12% of sentences start with a bare pronoun (It/This/That/They/These/Those)
 *  sentences    average 11–20 words; ≤ 8% of sentences over 30 words
 *  facts        ≥ 1.0 concrete numbers (with unit or %) per 100 words
 *  questions    ≥ 60% of H2s phrased as a question
 * Score = weighted pass share, 0–100. The content pipeline requires ≥ 85 before publishing.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const slug = process.argv[2];
const strict = process.argv.includes("--strict");
if (!slug) { console.error("usage: node scripts/semantic-score.mjs <slug> [--strict]"); process.exit(2); }

const { data, content } = matter(fs.readFileSync(path.join(ROOT, "content/blog", `${slug}.md`), "utf8"));
const briefFile = path.join(ROOT, "content/briefs", `${slug}.json`);
const brief = fs.existsSync(briefFile) ? JSON.parse(fs.readFileSync(briefFile, "utf8")) : {};

const lower = (s) => s.toLowerCase();
const strip = (s) => s
  .replace(/^!\[.*$/gm, "")                 // image lines
  .replace(/<details[^>]*>|<\/details>|<summary>[\s\S]*?<\/summary>/g, "")
  .replace(/<[^>]+>/g, " ")
  .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")  // links → anchor text
  .replace(/[*_`>#|]/g, " ");
const h1 = data.title ?? "";
const h2s = [...content.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
const body = strip(content);
const text = lower(body).replace(/\s+/g, " ");
const words = text.match(/[a-z0-9][a-z0-9'’-]*/g) ?? [];
const sentences = body.replace(/\n+/g, " ").split(/(?<=[.!?])\s+(?=[A-Z"“(])/).map((s) => s.trim()).filter((s) => s.split(/\s+/).length >= 3);
const has = (t, p) => lower(t).includes(lower(p));
const count = (p) => text.split(lower(p)).length - 1;
const central = brief.centralEntity ?? brief.keyword ?? h1;

const results = [];
const add = (id, weight, pass, detail) => results.push({ id, weight, pass, detail });
const pct = (a, b) => (b ? Math.round((100 * a) / b) : 100);

// entities
const ents = brief.entities ?? [];
// "Mixpanel / Amplitude" or "Appcues, Userpilot, Pendo" count when any of the names appears
const entHit = ents.filter((e) => e.replace(/\s*\(.*?\)\s*/g, "").split(/\s*[\/,]\s*/).some((part) => part.trim() && has(text, part.trim())));
add("entities", 2, entHit.length >= ents.length * 0.85, `${entHit.length}/${ents.length} brief entities${ents.length > entHit.length ? `; missing: ${ents.filter((e) => !entHit.includes(e)).slice(0, 6).join(", ")}` : ""}`);

// attributes and values (EAV)
const eav = brief.eav ?? (brief.attributes ?? []).map((a) => ({ attribute: a.replace(/\s*\(.*?\)\s*/g, "").trim() }));
const attrHit = eav.filter((x) => has(text, x.attribute));
add("attributes", 2, attrHit.length >= eav.length * 0.75, `${attrHit.length}/${eav.length} attributes${eav.length > attrHit.length ? `; missing: ${eav.filter((x) => !attrHit.includes(x)).slice(0, 5).map((x) => x.attribute).join(", ")}` : ""}`);
const withVal = eav.filter((x) => x.value);
if (withVal.length) {
  const near = withVal.filter((x) => sentences.some((s) => has(s, x.attribute) && has(s, String(x.value).split(/[ ,;]/)[0])));
  add("values", 1, near.length >= withVal.length * 0.6, `${near.length}/${withVal.length} attributes stated with their value in the same sentence`);
}

// n-grams
const ngrams = brief.ngrams ?? [];
const ngHit = ngrams.filter((n) => count(n) > 0);
const stuffed = ngrams.filter((n) => (count(n) * n.split(" ").length) / words.length > 0.015);
add("ngrams", 2, ngHit.length >= ngrams.length * 0.8 && !stuffed.length, `${ngHit.length}/${ngrams.length} n-grams used${stuffed.length ? `; STUFFED (>1.5%): ${stuffed.join(", ")}` : ""}${ngrams.length > ngHit.length ? `; missing: ${ngrams.filter((n) => !ngHit.includes(n)).slice(0, 6).join(", ")}` : ""}`);

// skip-grams: both terms within an 8-word window
const skip = brief.skipgrams ?? [];
const within = (a, b, win = 8) => {
  const A = lower(a).split(" "), B = lower(b).split(" ");
  const at = (t) => words.map((_, i) => (t.every((w, j) => words[i + j]?.startsWith(w.replace(/s$/, ""))) ? i : -1)).filter((i) => i >= 0);
  const ia = at(A), ib = at(B);
  return ia.some((i) => ib.some((j) => Math.abs(i - j) <= win && i !== j));
};
if (skip.length) {
  const skHit = skip.filter(([a, b]) => within(a, b));
  add("skipgrams", 2, skHit.length >= skip.length * 0.8, `${skHit.length}/${skip.length} skip-grams co-occur within 8 words${skip.length > skHit.length ? `; missing: ${skip.filter((p) => !skHit.includes(p)).slice(0, 5).map((p) => p.join(" … ")).join("; ")}` : ""}`);
} else add("skipgrams", 2, false, "brief has no `skipgrams` — the researcher must add 8–15 pairs");

// lexical relations
const lex = Object.values(brief.lexical ?? {}).flat();
if (lex.length) {
  const lxHit = lex.filter((t) => has(text, t));
  add("lexical", 1, lxHit.length >= lex.length * 0.6, `${lxHit.length}/${lex.length} synonyms/hypernyms/hyponyms/meronyms used`);
} else add("lexical", 1, false, "brief has no `lexical` relations — the researcher must add them");

// salience of the central entity
const first100 = words.slice(0, 100).join(" ");
const sections = content.split(/^## .+$/m).slice(1);
const h2Lead = h2s.filter((h, i) => has(h, central) || has(strip(sections[i] ?? "").split(/(?<=[.!?])\s/)[0] ?? "", central)).length;
add("salience", 2, has(h1, central) && has(first100, central) && h2Lead >= h2s.length * 0.5, `"${central}": H1 ${has(h1, central) ? "✓" : "✗"}, first 100 words ${has(first100, central) ? "✓" : "✗"}, H2/first sentence ${h2Lead}/${h2s.length}`);

// sentence subjects and length
const pron = sentences.filter((s) => /^(It|This|That|They|These|Those)\b/.test(s));
add("subjects", 1, pron.length <= sentences.length * 0.12, `${pct(pron.length, sentences.length)}% of sentences start with a bare pronoun (≤ 12%)${pron.length ? `; e.g. "${pron[0].slice(0, 70)}…"` : ""}`);
const lens = sentences.map((s) => s.split(/\s+/).length);
const avg = lens.reduce((a, b) => a + b, 0) / (lens.length || 1);
const long = lens.filter((l) => l > 30).length;
add("sentences", 1, avg >= 11 && avg <= 20 && long <= lens.length * 0.08, `average ${avg.toFixed(1)} words (11–20); ${long} over 30 words (≤ 8%)`);

// fact density
const facts = (body.match(/\b\d[\d,.]*\s?(%|percent|minutes?|hours?|days?|weeks?|months?|steps?|users?|seconds?|fields?|\$|x\b)|\$\s?\d[\d,.]*/gi) ?? []).length;
add("facts", 1, facts / words.length * 100 >= 1.2, `${(facts / words.length * 100).toFixed(1)} numbers with units per 100 words (≥ 1.0)`);

// question headings
const q = h2s.filter((h) => /\?$/.test(h) || /^(what|how|why|when|which|who|where|is|are|do|does|can|should)\b/i.test(h));
add("questions", 1, q.length >= h2s.length * 0.6, `${q.length}/${h2s.length} H2s are questions`);

const total = results.reduce((a, r) => a + r.weight, 0);
const score = Math.round((100 * results.reduce((a, r) => a + (r.pass ? r.weight : 0), 0)) / total);
console.log(`semantic score: ${slug} = ${score}/100  (${words.length} words, ${sentences.length} sentences)`);
for (const r of results) console.log(`  ${r.pass ? "✓" : "✗"} ${r.id.padEnd(10)} ${r.detail}`);
process.exit(strict && score < 85 ? 1 : 0);
