// On-page SEO audit of every indexable built page, following docs/content-system/ONPAGE-CHECKLIST.md
// (based on Semrush's on-page SEO checklist). Run after a build:
//   npm run build && npm run onpage            # all pages → docs/data/onpage/latest.json + summary
//   npm run onpage -- /blog/saas-product-redesign/   # one page, printed
//   npm run onpage -- --include-noindex        # also audit noindex pages (automatic while SITE.launched is false)
// Also exports the layout-aware block checks (Google patent US12393768B2) that seo-check.mjs reuses.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import matter from "gray-matter";

const OUT = "out";
const read = (f) => JSON.parse(fs.readFileSync(f, "utf8"));
const lc = (s = "") => s.toLowerCase().replace(/\s+/g, " ").trim();
const jsonFiles = (dir) => fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"));
const mdFiles = (dir) => fs.readdirSync(dir).filter((x) => x.endsWith(".md") && !x.startsWith("_"));
const slugify = (s = "") => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// ---------- which noindex pages to audit ----------
// Pre-launch (lib/site.ts `launched: false`) every page is noindex (lib/seo.ts: `noindex || !SITE.launched`),
// so the audits would see nothing. Then — or with --include-noindex — they also audit noindex pages,
// except the ones that are noindex by design (same rules as the app's `noindex:` props).
export const SITE_LAUNCHED = !/\blaunched:\s*false\b/.test(fs.readFileSync("lib/site.ts", "utf8"));
export const INCLUDE_NOINDEX = !SITE_LAUNCHED || process.argv.includes("--include-noindex");
// service slug → pillar slug, from content/pillars.ts (category → pillar), as lib/content.ts servicePath
const PILLARS = [...fs.readFileSync("content/pillars.ts", "utf8").matchAll(/^\s{4}slug:\s*"([^"]+)",\s*\n\s{4}category:\s*"([^"]+)"[\s\S]*?^\s{4}anchor:\s*"([^"]+)"/gm)].map((m) => ({ slug: m[1], category: m[2], anchor: m[3] }));
export const servicePath = (slug, category) => { const p = PILLARS.find((x) => x.category === category); return p ? `/services/${p.slug}/${slug}/` : `/services/${slug}/`; };
const SERVICES = jsonFiles("content/services").map((f) => ({ slug: f.slice(0, -5), ...read(`content/services/${f}`) }));
const noindexByDesign = (() => {
  const set = new Set(["/404/", "/_not-found/"]);
  for (const f of mdFiles("content/pages")) if (matter(fs.readFileSync(`content/pages/${f}`, "utf8")).data.noindex) set.add(`/${f.slice(0, -3)}/`);
  const posts = mdFiles("content/blog").map((f) => matter(fs.readFileSync(`content/blog/${f}`, "utf8")).data).filter((d) => !d.draft);
  const authorsWithPosts = new Set(posts.flatMap((d) => [slugify(d.author ?? "Design Team"), ...(Array.isArray(d.contributors) ? d.contributors : ["umar-sarwar"])]));
  const catsWithPosts = new Set(posts.map((d) => SERVICES.find((s) => s.slug === d.services?.[0])?.category).filter(Boolean).map((c) => slugify(c)));
  if (!posts.length) ["/blog/", "/blog/author/", "/blog/category/"].forEach((r) => set.add(r));
  if (!jsonFiles("content/industries").length) set.add("/industries/");
  if (!jsonFiles("content/locations").some((f) => !read(`content/locations/${f}`).draft)) set.add("/location/");
  return (route) => set.has(route) || /\/__empty\/$/.test(route)
    || (/^\/blog\/author\/[^/]+\/$/.test(route) && !authorsWithPosts.has(route.split("/")[3]))
    || (/^\/blog\/category\/[^/]+\/$/.test(route) && !catsWithPosts.has(route.split("/")[3]));
})();
/** route like "/about/" (or "/about"); html is the built page */
export const shouldAudit = (route, html) => {
  if (!/<meta name="robots" content="noindex/.test(html)) return true;
  return INCLUDE_NOINDEX && !noindexByDesign(route.endsWith("/") ? route : route + "/");
};

// ---------- tiny HTML tree (no dependencies) for layout-aware block checks ----------
const VOID = new Set("area base br col embed hr img input link meta param source track wbr".split(" "));
export function parseHtml(html) {
  const root = { tag: "#root", attrs: {}, children: [], parent: null, start: 0, end: html.length };
  let cur = root, m;
  const re = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>|[^<]+|</g;
  while ((m = re.exec(html))) {
    if (m[0].startsWith("<!--")) continue;
    if (!m[2]) { cur.children.push({ text: m[0] }); continue; }
    const tag = m[2].toLowerCase();
    if (m[1]) {
      let n = cur; while (n !== root && n.tag !== tag) n = n.parent;
      if (n !== root) { n.end = m.index + m[0].length; cur = n.parent; }
      continue;
    }
    const attrs = {};
    for (const a of m[3].matchAll(/([^\s=/"']+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>"']+)))?/g)) attrs[a[1].toLowerCase()] = a[2] ?? a[3] ?? a[4] ?? "";
    const el = { tag, attrs, children: [], parent: cur, start: m.index, end: m.index + m[0].length };
    cur.children.push(el);
    if (tag === "script" || tag === "style") { const c = html.indexOf(`</${tag}`, re.lastIndex); el.end = c < 0 ? html.length : html.indexOf(">", c) + 1; re.lastIndex = el.end; continue; }
    if (!VOID.has(tag) && !/\/\s*$/.test(m[3])) cur = el;
  }
  return root;
}
const elems = (n, out = []) => { for (const c of n.children ?? []) if (c.tag) { out.push(c); elems(c, out); } return out; };
const kids = (n) => (n.children ?? []).filter((c) => c.tag);
const prevEl = (n) => { const k = n.parent ? kids(n.parent) : []; return k[k.indexOf(n) - 1]; };
const nextEl = (n) => { const k = n.parent ? kids(n.parent) : []; return k[k.indexOf(n) + 1]; };
const closest = (n, f) => { for (let x = n; x && x.tag !== "#root"; x = x.parent) if (f(x)) return x; return null; };
const cls = (n) => ` ${n.attrs?.class ?? ""} `;
const hasCls = (n, re) => re.test(n.attrs?.class ?? "");
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&rsquo;/g, "'").replace(/&[a-z#0-9]+;/g, " ");
export const textOf = (n) => decode(n.text !== undefined ? n.text : n.tag === "script" || n.tag === "style" ? "" : (n.children ?? []).map(textOf).join(" ")).replace(/\s+/g, " ").trim();
const wc = (t) => (t.match(/[A-Za-z0-9][A-Za-z0-9'’-]*/g) || []).length;
const ariaHidden = (n) => n.attrs?.["aria-hidden"] === "true";
const STOP = new Set("about above after again also among around because been before being below between both but could does doing down during each every from further have having here into just more most much once only other over same should some such than that their them then there these they this those through under until very were what when where which while will with within without would your yours its".split(" "));
const contentWords = (t) => new Set((t.toLowerCase().match(/[a-z]{4,}/g) || []).filter((w) => !STOP.has(w)).map((w) => w.replace(/(ies|es|s)$/, "")));
const svgCache = new Map();
const svgHasText = (src) => {
  const f = path.join("public", decodeURI(src.split(/[?#]/)[0]));
  if (!svgCache.has(f)) svgCache.set(f, fs.existsSync(f) && /<text\b/.test(fs.readFileSync(f, "utf8")));
  return svgCache.get(f);
};
const short = (s, n = 50) => (s.length > n ? s.slice(0, n - 1) + "…" : s);

/**
 * Layout-aware block checks on a page's <main> (Google patent US12393768B2: the page is read as typed blocks
 * — header, paragraph, list, table, image, caption — in order, with font/bold, image–text fit and the relation
 * of adjacent blocks). Returns [{ id, ok, msg }]; `html` is the full page, offsets are byte-based.
 */
export function layoutChecks(html) {
  const root = parseHtml(html);
  const main = elems(root).find((n) => n.tag === "main") ?? root;
  const all = elems(main);
  const out = [];
  const add = (id, bad, msg) => out.push({ id, ok: bad.length === 0, msg: `${msg} (${bad.length}${bad.length ? ": " + bad.slice(0, 4).join("; ") + (bad.length > 4 ? "; …" : "") : ""})` });
  const tagIs = (...t) => (n) => t.includes(n.tag);

  // a. heading levels only step down one at a time (h1→h2→h3)
  const heads = all.filter((n) => /^h[1-6]$/.test(n.tag));
  const skips = [];
  heads.forEach((h, i) => { if (i && +h.tag[1] > +heads[i - 1].tag[1] + 1) skips.push(`${heads[i - 1].tag}→${h.tag} "${short(textOf(h), 40)}"`); });
  add("heading-skip", skips, "headings never skip a level downward (h1→h3, h2→h4)");

  // b. tables: caption, header cells with scope, introduced by a paragraph right before them
  const tables = all.filter(tagIs("table"));
  const badT = [], lone = [];
  for (const t of tables) {
    const miss = [!kids(t).some(tagIs("caption")) && "no <caption>", !elems(t).some((n) => n.tag === "th" && n.attrs.scope) && "no th[scope]"].filter(Boolean);
    if (miss.length) badT.push(`table "${short(textOf(t), 40)}": ${miss.join(", ")}`);
    let x = t; while (x.parent && !prevEl(x) && ["div", "figure"].includes(x.parent.tag)) x = x.parent;
    let p = prevEl(x); while (p && ["div", "section", "header"].includes(p.tag) && kids(p).length) p = kids(p).at(-1);
    if (p?.tag !== "p") lone.push(`table "${short(textOf(t), 40)}" after <${p?.tag ?? "nothing"}>`);
  }
  add("table-structure", badT, "every table has a <caption> and th[scope] header cells");
  add("table-intro", lone, "every table directly follows a <p> that introduces it");

  // c. nothing important behind a click or collapsed by CSS
  const hidden = [
    ...all.filter((n) => n.tag === "details" && !hasCls(n, /ptoc|hdr__/) && !("open" in n.attrs)).map((n) => `closed <details class="${n.attrs.class ?? ""}"> "${short(textOf(n), 40)}"`),
    ...all.filter((n) => "hidden" in n.attrs && textOf(n)).map((n) => `[hidden] <${n.tag}> "${short(textOf(n), 40)}"`),
  ];
  add("no-hidden-content", hidden, "no main content behind a click or collapsed by CSS: only open FAQs and navigation");

  // d. SVG images that carry words need an always-visible text version next to them
  const noTextVersion = [];
  for (const img of all.filter((n) => n.tag === "img" && /\.svg(?:[?#]|$)/.test(n.attrs.src ?? ""))) {
    if (!svgHasText(img.attrs.src)) continue;
    // a post cover only repeats the post title, which is the H1 or card title right next to it
    if (/\/cover\.svg(?:[?#]|$)/.test(img.attrs.src)) continue;
    const fig = closest(img, tagIs("figure"));
    const isTv = (n) => n && hasCls(n, /(^|\s)(astext|img-text)(\s|$)/);
    let ok = !!fig && elems(fig).some(isTv);
    for (let x = img; !ok && x && x.tag !== "#root"; x = x.parent) { if (isTv(nextEl(x))) ok = true; if (x === fig) break; }
    if (!ok) noTextVersion.push(img.attrs.src);
  }
  add("svg-text-version", noTextVersion, "every SVG with <text> has a visible text version (.astext/.img-text) in or right after its figure");

  // e. a figure's caption and its image alt describe the same thing
  const misfit = [];
  for (const fig of all.filter(tagIs("figure"))) {
    const img = elems(fig).find(tagIs("img")), cap = elems(fig).find(tagIs("figcaption"));
    if (!img || !cap) continue;
    const a = contentWords(img.attrs.alt ?? ""), c = contentWords(textOf(cap));
    if (![...a].some((w) => c.has(w))) misfit.push(`${img.attrs.src}`);
  }
  add("caption-alt-fit", misfit, "every figcaption shares a content word with its image alt");

  // f. the first real paragraph sits close to the H1
  const h1 = all.find(tagIs("h1"));
  if (h1) {
    const p = all.find((n) => n.tag === "p" && n.start >= h1.end && wc(textOf(n)) >= 15);
    const dist = p ? Buffer.byteLength(html.slice(h1.end, p.start)) : Infinity;
    out.push({ id: "h1-distance", ok: dist <= 3000, msg: `first paragraph of ≥ 15 words within 3,000 bytes of the H1 (is ${p ? dist.toLocaleString("en") : "none"})` });
  }

  // g. process / steps blocks are ordered lists
  const isStep = (n) => !/^(h[1-6]|p|span|a|li|strong)$/.test(n.tag ?? "") && /process|steps/i.test(`${n.attrs?.class ?? ""} ${n.attrs?.id ?? ""}`);
  const stepBlocks = all.filter((n) => isStep(n) && !closest(n.parent, isStep));
  add("steps-ol", stepBlocks.filter((n) => !elems(n).some(tagIs("ol"))).map((n) => `<${n.tag}${n.attrs.id ? "#" + n.attrs.id : ""} class="${n.attrs.class ?? ""}">`), "every process/steps block uses an <ol>");

  // h. aria-hidden duplicates must not carry meaning (alt text, bold, heading text)
  const headTexts = new Set(all.filter((n) => (n.tag === "h2" || n.tag === "h3") && !closest(n, ariaHidden)).map((n) => textOf(n).toLowerCase()));
  const dup = [];
  for (const n of all.filter((x) => ariaHidden(x) && !closest(x.parent, ariaHidden))) {
    const t = textOf(n).toLowerCase();
    if (elems(n).some((x) => x.tag === "img" && (x.attrs.alt ?? "").trim())) dup.push(`<${n.tag}> has <img alt>`);
    else if (elems(n).some(tagIs("strong", "b"))) dup.push(`<${n.tag}> has <strong> "${short(t, 30)}"`);
    else if (t && headTexts.has(t)) dup.push(`<${n.tag}> repeats heading "${short(t, 30)}"`);
  }
  add("duplicate-aria-hidden", dup, "aria-hidden blocks carry no alt text, bold or heading text");
  return out;
}

// target keyword per route, from content
const KW = { "/": "ui ux design services" };
// services live at /services/<slug>/ or, inside a pillar, /services/<pillar>/<slug>/ (lib/content.ts servicePath)
for (const s of SERVICES) KW[servicePath(s.slug, s.category)] = lc(s.keywords?.[0] ?? s.anchor);
for (const p of PILLARS) KW[`/services/${p.slug}/`] = lc(p.anchor);
for (const f of fs.readdirSync("content/industries").filter((x) => x.endsWith(".json") && !x.startsWith("_"))) KW[`/industries/${f.slice(0, -5)}/`] = lc(read(`content/industries/${f}`).anchor);
for (const f of fs.readdirSync("content/locations").filter((x) => x.endsWith(".json") && !x.startsWith("_"))) { const d = read(`content/locations/${f}`); KW[`/location/${f.slice(0, -5)}/`] = lc(d.keyword ?? d.anchor); }
for (const f of fs.readdirSync("content/blog").filter((x) => x.endsWith(".md") && !x.startsWith("_"))) { const d = matter(fs.readFileSync(`content/blog/${f}`, "utf8")).data; if (d.keyword) KW[`/blog/${f.slice(0, -3)}/`] = lc(d.keyword); }

// entities, attributes and keyword volume per route (blog: content brief; others: page "semantic" block)
const ENT = {}, ATTR = {}, VOL = {};
const semEnt = (d) => d.semantic?.entities ?? d.mentions ?? [];
for (const s of SERVICES) ENT[servicePath(s.slug, s.category)] = semEnt(s);
for (const dir of ["industries", "locations"]) for (const f of fs.readdirSync(`content/${dir}`).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) ENT[`/${dir === "locations" ? "location" : dir}/${f.slice(0, -5)}/`] = semEnt(read(`content/${dir}/${f}`));
for (const f of fs.readdirSync("content/briefs").filter((x) => /^[^.]+\.json$/.test(x))) {
  const b = read(`content/briefs/${f}`), r = `/blog/${b.slug ?? f.slice(0, -5)}/`;
  ENT[r] = b.entities ?? []; ATTR[r] = b.attributes ?? []; VOL[r] = b.volume;
}
// an entity counts as covered when its name, or the short form in its brackets, appears in the text
const entityForms = (e) => { const m = e.match(/^(.*?)\s*\(([^)]+)\)\s*$/); return (m ? [m[1], m[2]] : [e]).map((x) => norm(x)).filter((x) => x.length > 1); };
const countIn = (text, form) => text.split(form).length - 1;

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&rsquo;/g, "'").replace(/&[a-z#0-9]+;/g, " ").replace(/\s+/g, " ").trim();
const words = (t) => (t.match(/[A-Za-z0-9][A-Za-z0-9'’-]*/g) || []).length;
// hyphen/space variants count as the same word: "e-commerce" = "ecommerce" = "e commerce"
const norm = (s = "") => lc(s).replace(/(?<=[a-z0-9])[-‐‑](?=[a-z0-9])/g, "");
const compact = (s = "") => norm(s).replace(/[\s-]+/g, "");
// keyword match that tolerates word order inside the title/H1 (all words present) and exact phrase
const has = (text, kw) => { const t = norm(text), k = norm(kw), tc = compact(text); return t.includes(k) || tc.includes(compact(kw)) || k.split(" ").filter((w) => w.length > 2).every((w) => t.includes(w) || tc.includes(w)); };

// run only when executed directly (seo-check.mjs imports the layout checks above)
if (import.meta.url === pathToFileURL(path.resolve(process.argv[1] ?? "")).href) {
const only = process.argv.slice(2).find((a) => !a.startsWith("--"));
// inbound internal links per route
const pages = walk(OUT).filter((f) => f.endsWith("index.html")).map((file) => ({ file, route: "/" + path.relative(OUT, path.dirname(file)).replace(/\\/g, "/") + (path.dirname(file) === OUT ? "" : "/"), html: fs.readFileSync(file, "utf8") })).filter((p) => shouldAudit(p.route, p.html));
const inbound = {};
for (const p of pages) {
  const main = p.html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "";
  for (const [, href] of main.matchAll(/href="(\/[^"#?]*)/g)) if (href !== p.route) (inbound[href] ??= new Set()).add(p.route);
}

const results = [];
for (const p of pages.filter((x) => !only || x.route === only)) {
  const kw = KW[p.route];
  const h = p.html;
  const main = h.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? h;
  const title = h.match(/<title>([^<]*)<\/title>/)?.[1]?.replace(/&amp;/g, "&") ?? "";
  const desc = h.match(/<meta name="description" content="([^"]*)"/)?.[1]?.replace(/&amp;/g, "&") ?? "";
  const h1 = strip(main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "");
  const h2s = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => strip(m[1]));
  const body = strip(main);
  const first100 = body.split(" ").slice(0, 160).join(" ");
  const imgs = [...main.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((m) => { try { const d = JSON.parse(m[1]); return [d, ...(d["@graph"] ?? [])]; } catch { return []; } }).map((d) => d["@type"]).flat().filter(Boolean);
  const internalOut = new Set([...main.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]).filter((x) => x !== p.route)).size;
  const externalOut = [...main.matchAll(/href="(https?:\/\/(?!ui-ux\.agency)[^"]+)"/g)].length;
  const slugWords = p.route.split("/").filter(Boolean).pop()?.split("-").length ?? 0;
  const isBlog = p.route.startsWith("/blog/") && KW[p.route];
  // archives, listings and legal pages are judged on meta/links only, not on content depth
  const isContent = p.route === "/" || /^\/(services\/([^/]+\/)?|industries\/|location\/|case-studies\/)[^/]+\/$/.test(p.route) || !!isBlog || p.route === "/about/";
  const checks = [];
  const add = (id, ok, msg, weight = 1) => checks.push({ id, ok, msg, weight });
  if (kw) {
    add("title-keyword", has(title, kw), `title contains "${kw}"`, 2);
    const kw0 = norm(kw).split(" ")[0], at = norm(title).indexOf(kw0);
    add("title-keyword-early", at > -1 && at < 25, "keyword starts in the first ~25 chars of the title");
    add("h1-keyword", has(h1, kw), `H1 contains "${kw}"`, 2);
    add("desc-keyword", has(desc, kw), "meta description contains the keyword");
    add("first-100-words", has(first100, kw), "keyword appears near the top of the page (first ~100 words)");
    // primary keyword in every meta surface: title, description, meta keywords (first), Open Graph
    const ogTitle = h.match(/<meta property="og:title" content="([^"]*)"/)?.[1]?.replace(/&amp;/g, "&") ?? "";
    const ogDesc = h.match(/<meta property="og:description" content="([^"]*)"/)?.[1]?.replace(/&amp;/g, "&") ?? "";
    const metaKw = (h.match(/<meta name="keywords" content="([^"]*)"/)?.[1] ?? "").replace(/&amp;/g, "&").split(",")[0] ?? "";
    add("meta-keywords-keyword", norm(metaKw) === norm(kw), `meta keywords start with "${kw}" (first is "${metaKw}")`);
    add("og-keyword", has(ogTitle, kw) && has(ogDesc, kw), "og:title and og:description contain the keyword");
    if (isBlog && VOL[p.route] !== undefined) add("keyword-volume", Number(VOL[p.route]) > 0, `keyword has search volume (brief: ${VOL[p.route]})`);
    // entity salience (proxy for Google NLP salience): the keyword's entity leads the page, and related entities/attributes are covered
    const ents = ENT[p.route] ?? [];
    if (isContent && ents.length) {
      const text = norm(body), lead = norm(body.slice(body.indexOf(h1) + h1.length).split(" ").slice(0, 60).join(" "));
      const covered = ents.filter((e) => entityForms(e).some((f) => text.includes(f)));
      const kwCount = countIn(text, norm(kw));
      // rivals: related entities that are not part of the keyword itself (e.g. the city on a location page)
      const kwWords = new Set(norm(kw).split(" "));
      const rivals = ents.filter((e) => !entityForms(e).some((f) => f.split(" ").every((w) => kwWords.has(w)))).map((e) => Math.max(...entityForms(e).map((f) => countIn(text, f))));
      const h2Share = h2s.length ? h2s.filter((x) => has(x, kw) || norm(kw).split(" ").filter((w) => w.length > 3).some((w) => norm(x).includes(w))).length / h2s.length : 0;
      const salience = Math.round(25 * +has(h1, kw) + 25 * +has(lead, kw) + 25 * Math.min(1, h2Share / 0.4) + 25 * +(kwCount >= Math.max(0, ...rivals) * 0.5));
      add("entity-coverage", covered.length / ents.length >= 0.8, `≥ 80% of related entities in the text (${covered.length}/${ents.length}${covered.length < ents.length ? "; missing: " + ents.filter((e) => !covered.includes(e)).slice(0, 5).join(", ") : ""})`, 2);
      add("entity-salience", salience >= 75, `central entity salience ≥ 75 (is ${salience}: H1 ${+has(h1, kw)}, lead ${+has(lead, kw)}, H2 share ${Math.round(h2Share * 100)}%, keyword ${kwCount}× vs top related entity ${Math.max(0, ...rivals)}×)`, 2);
      const attrs = ATTR[p.route] ?? [];
      if (attrs.length) {
        const hitA = attrs.filter((a) => { const ws = norm(a.split("(")[0]).split(" ").filter((w) => w.length > 3); return ws.filter((w) => text.includes(w.replace(/s$/, ""))).length >= Math.ceil(ws.length * 0.6); });
        add("attribute-coverage", hitA.length / attrs.length >= 0.7, `≥ 70% of brief attributes covered (${hitA.length}/${attrs.length})`);
      }
    }
    if (p.route !== "/") add("slug-keyword", norm(kw).split(" ").filter((w) => w.length > 3).some((w) => compact(p.route).includes(w)), "URL slug carries the keyword");
  }
  add("title-length", title.length >= 30 && title.length <= 60, `title 30–60 chars (is ${title.length})`);
  add("desc-length", desc.length >= 120 && desc.length <= 158, `meta description 120–158 chars (is ${desc.length})`);
  add("one-h1", (main.match(/<h1[\s>]/g) || []).length === 1, "exactly one H1");
  if (isContent) add("h2-structure", h2s.length >= 3, `≥ 3 H2 sections (has ${h2s.length})`);
  add("slug-short", slugWords <= 6, `slug ≤ 6 words (has ${slugWords})`);
  if (isContent) add("content-depth", words(body) >= (isBlog ? 1200 : 600), `${isBlog ? "≥ 1,200" : "≥ 600"} words of content (has ${words(body)})`, 2);
  add("internal-out", internalOut >= (isContent ? 5 : 3), `≥ ${isContent ? 5 : 3} internal links out (has ${internalOut})`);
  add("internal-in", (inbound[p.route]?.size ?? 0) >= (p.route === "/" ? 0 : 3), `≥ 3 pages link here (has ${inbound[p.route]?.size ?? 0})`, 2);
  if (isBlog) add("external-sources", externalOut >= 2, `≥ 2 external sources (has ${externalOut})`);
  add("img-alt", imgs.every((i) => /\balt="[^"]+"/.test(i) || /aria-hidden|role="presentation"|alt=""/.test(i)), "every content image has alt text");
  if (isContent) add("visuals", imgs.length >= (isBlog ? 3 : 1), `${isBlog ? "≥ 3" : "≥ 1"} images (has ${imgs.length})`);
  add("schema", ld.length > 0, `structured data present (${[...new Set(ld)].join(", ") || "none"})`);
  if (isBlog) add("schema-article", ld.includes("BlogPosting"), "BlogPosting schema");
  if (isBlog || /^\/(services\/([^/]+\/)?|industries\/|location\/)[^/]+\/$/.test(p.route)) add("faq", ld.includes("FAQPage") || /faq/i.test(h2s.join(" ")), "FAQ section / FAQPage schema");
  // layout-aware document understanding (Google patent US12393768B2): visible blocks, clear block types,
  // images next to the text they explain, tables introduced by text, nothing important behind a click
  if (isContent) {
    // explanatory images only (in-article visuals, case-study screens, location illustrations);
    // covers, logos, team photos and card thumbnails are not explanatory blocks
    const figs = [...main.matchAll(/<img\b[^>]*>/g)].filter((m) => /src="\/(blog\/[^"]+\/(?!cover)|work\/[^"]+\/(?!cover)|locations\/|images\/services\/[^"]+\.svg)/.test(m[0]) && !/<a\b(?:(?!<\/a>)[\s\S])*$/.test(main.slice(Math.max(0, m.index - 600), m.index)));
    const bare = figs.filter((m) => { const before = main.slice(Math.max(0, m.index - 400), m.index), after = main.slice(m.index, m.index + 600); return !(/<figure[^>]*>(?:(?!<\/figure>)[\s\S])*$/.test(before) && /<figcaption/.test(after)); });
    add("figure-caption", bare.length === 0, `every content image sits in <figure> with a <figcaption> (${bare.length} without)`);
    const h2Next = [...main.matchAll(/<\/h2>\s*(?:<\/div>\s*)?<([a-z0-9]+)/g)].map((m) => m[1]);
    const badH2 = h2Next.filter((t) => ["img", "figure", "picture", "svg", "video"].includes(t)).length;
    add("h2-then-text", badH2 === 0, `every H2 is followed by text, not an image (${badH2} not)`);
    const longBodies = [...main.matchAll(/class="semv__more-body"[^>]*>([\s\S]*?)<\/div>/g)].filter((m) => words(strip(m[1])) > 90).length;
    add("section-body-short", longBodies === 0, `section detail text ≤ 90 words, entity-dense, no filler (${longBodies} longer)`);
    // block-tree checks: heading levels, table structure, hidden/collapsed blocks, SVG text versions,
    // caption–alt fit, H1-to-paragraph distance, ordered steps, aria-hidden duplicates
    for (const c of layoutChecks(h)) add(c.id, c.ok, c.msg, c.id === "no-hidden-content" ? 2 : 1);
  }
  add("canonical", /<link rel="canonical"/.test(h), "canonical tag");
  add("og-image", /property="og:image"/.test(h), "Open Graph image");
  const total = checks.reduce((s, c) => s + c.weight, 0), got = checks.filter((c) => c.ok).reduce((s, c) => s + c.weight, 0);
  results.push({ type: isBlog ? "blog" : isContent ? "content" : "archive", route: p.route, keyword: kw ?? null, score: Math.round((got / total) * 100), failed: checks.filter((c) => !c.ok).map((c) => `${c.id}: ${c.msg}`), title, h1, words: words(body) });
}
results.sort((a, b) => a.score - b.score);
if (only) { console.log(JSON.stringify(results[0] ?? { error: "route not found or noindex" }, null, 2)); process.exit(0); }
fs.mkdirSync("docs/data/onpage", { recursive: true });
fs.writeFileSync("docs/data/onpage/latest.json", JSON.stringify({ generated: new Date().toISOString(), pages: results }, null, 1) + "\n");
const avg = Math.round(results.reduce((s, r) => s + r.score, 0) / results.length);
console.log(`On-page audit: ${results.length} pages · average score ${avg}/100\n`);
for (const r of results.slice(0, 25)) console.log(`${String(r.score).padStart(3)}  ${r.route}${r.failed.length ? "\n      - " + r.failed.join("\n      - ") : ""}`);
const fails = {};
for (const r of results) for (const f of r.failed) { const id = f.split(":")[0]; fails[id] = (fails[id] ?? 0) + 1; }
console.log(`\nFailed checks (pages):${INCLUDE_NOINDEX ? " [noindex pages included" + (SITE_LAUNCHED ? "" : ": site not launched") + "]" : ""}\n` + Object.entries(fails).sort((a, b) => b[1] - a[1]).map(([id, n]) => `  ${String(n).padStart(3)}  ${id}`).join("\n"));
}
