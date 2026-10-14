#!/usr/bin/env node
/**
 * Blog opportunity scoring (after US11468139B2, "Content opportunity scoring and automation").
 *
 * 1. Research: for every service hub, pull matching keywords from Ahrefs (volume, KD, CPC,
 *    parent topic, traffic potential, intent) into a small data warehouse (cached per day).
 * 2. Categorize: one parent topic = one category = one possible post. Keywords a service page
 *    already owns (clusters.json), rejected topics and published posts are removed.
 * 3. Opportunity matrix (Fig. 3): per category — keyword count, summed volume, traffic potential,
 *    average KD and CPC, plus SERP strength of the top 10 (average DR, UR, referring domains).
 * 4. Rankings matrix (Fig. 4): which domains rank in each category's top 10 and where
 *    ui-ux.agency ranks (100 = not ranking), so gaps where strong sites are absent stand out.
 * 5. Score: high demand and buyer value (CPC) where competition is weak, weighted by how much
 *    the hub is worth to the business. Each category also gets a content format and an
 *    expected monthly traffic, which the ledger later compares with real clicks.
 *
 * Output: docs/content-system/blog-opportunities.json and blog-opportunities.md (sorted, best first).
 * Usage:  node scripts/blog-opportunities.mjs [--serp N] [--refresh]
 *         --serp N   SERP-check the top N categories (default 25)
 *         --refresh  ignore today's cache and call the API again
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const DOCS = path.join(ROOT, "docs/content-system");
const WAREHOUSE = path.join(DOCS, "warehouse");
const SITE = "ui-ux.agency";
const KEY = process.env.AHREFS_API_KEY;
const args = process.argv.slice(2);
const SERP_N = Number(args[args.indexOf("--serp") + 1]) || 25;
const REFRESH = args.includes("--refresh");
const today = new Date().toISOString().slice(0, 10);

/** Business value of each hub category (AI and SaaS buyers are the site's focus). */
const HUB_WEIGHT = { "AI products": 1.25, "SaaS products": 1.2, "Startups & product": 1.0, "Hiring & pricing": 0.9 };
/** Click-through share a page gets around position 3, used for expected traffic. */
const EXPECTED_CTR = 0.3;

const readJson = (f) => JSON.parse(fs.readFileSync(f, "utf8"));
const norm = (s) => s.toLowerCase().replace(/\s+/g, " ").trim();

if (!KEY) {
  console.error("AHREFS_API_KEY is not set: add it as an environment variable (never in the repo).");
  process.exit(1);
}

async function ahrefs(endpoint, params) {
  const url = `https://api.ahrefs.com/v3/${endpoint}?${new URLSearchParams(params)}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${KEY}`, Accept: "application/json" } });
    if (res.ok) return res.json();
    if (res.status === 429) { await new Promise((r) => setTimeout(r, 2000 * (attempt + 1))); continue; }
    throw new Error(`${endpoint} ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  throw new Error(`${endpoint}: rate limited`);
}

/** Day cache, so re-runs on the same day cost no API units. */
function cached(name, fn) {
  fs.mkdirSync(WAREHOUSE, { recursive: true });
  const file = path.join(WAREHOUSE, `${today}-${name}.json`);
  if (!REFRESH && fs.existsSync(file)) return Promise.resolve(readJson(file));
  return fn().then((data) => (fs.writeFileSync(file, JSON.stringify(data, null, 1)), data));
}

// ---------- inputs ----------
const services = fs.readdirSync(path.join(ROOT, "content/services"))
  .filter((f) => f.endsWith(".json") && !f.startsWith("_"))
  .map((f) => ({ slug: f.replace(/\.json$/, ""), ...readJson(path.join(ROOT, "content/services", f)) }));
const clusters = readJson(path.join(DOCS, "clusters.json"));
const ledger = readJson(path.join(DOCS, "ledger.json"));

// keywords a page already owns: service keywords, cluster keywords, rejected topics, published posts
const owned = new Set();
for (const s of services) for (const k of [...(s.keywords ?? []), s.centralEntity, s.anchor, s.title].filter(Boolean)) owned.add(norm(k));
for (const c of clusters.clusters ?? []) {
  owned.add(norm(c.parentTopic));
  for (const k of c.keywords ?? []) owned.add(norm(String(k).replace(/\s*\(.*$/, "")));
}
const rejected = new Set((clusters.rejected ?? []).map((r) => norm(String(r.keyword).replace(/\s*\(.*$/, ""))));
const published = (ledger.posts ?? []).map((p) => ({ slug: p.slug, keyword: norm(p.keyword ?? "") }));
const publishedKw = new Set(published.map((p) => p.keyword));

/** Commercial "hire us" queries belong to service pages, not to the blog. */
const SERVICE_INTENT = /\b(agency|agencies|company|companies|firm|services?|hire|freelancer|consultant|near me|jobs?|salary|course|certification|tool|software|app|template|figma|download|free)\b/;

/** Relevance ("hide generic/uncategorized"): our readers are founders and product teams buying design,
 * not job seekers or people designing physical goods, so career and off-industry queries are hidden. */
const OFF_AUDIENCE = /\b(become|becoming|career|careers|jobs?|salary|salaries|resume|cv|portfolio|portfolios|interview|course|courses|bootcamp|degree|internship|intern|remote|plastic|industrial|furniture|jewel\w*|fashion|woocommerce|shopify|wordpress|game|games|3d|logo|print|packaging|automotive|toy|toys|reddit|wiki|pdf|book|books|youtube|junior|senior|staff|principal|lead|intern|entry level|prestashop|magento|opencart|label|labels|t-?shirt|shirt|merch|sticker|mug)\b/;

/** Format by query pattern: the SERP shows which content type people want for each. */
function formatOf(kw) {
  if (/\bvs\.?\b|versus|difference/.test(kw)) return "comparison (side-by-side table + verdict)";
  if (/cost|price|pricing|budget|rates?\b/.test(kw)) return "cost breakdown (price table by scope)";
  if (/checklist/.test(kw)) return "checklist (numbered audit + downloadable table)";
  if (/examples?|inspiration|showcase/.test(kw)) return "examples gallery (annotated screens)";
  if (/best practices|tips|mistakes|principles|rules/.test(kw)) return "best practices (numbered list with before/after)";
  if (/how to|process|steps|guide/.test(kw)) return "step-by-step guide (ordered steps + worked example)";
  if (/^what is|what are|meaning|definition/.test(kw)) return "definition guide (what, why, how, examples)";
  return "complete guide (definition, process, examples, checklist)";
}

// ---------- 1. research ----------
/** Extra topic seeds per hub: the informational questions its buyers search before they hire. */
const BLOG_SEEDS = {
  "ai-ux-design-agency": ["ai ux design", "ai interface design", "ai product design"],
  "chatbot-ui-design": ["chatbot ui", "chatbot design", "conversational ui"],
  "ai-product-discovery-workshop": ["product discovery", "ai use cases"],
  "saas-design-agency": ["saas ux", "saas design", "saas dashboard design"],
  "saas-onboarding-design": ["user onboarding", "onboarding flow"],
  "saas-product-redesign": ["product redesign", "app redesign"],
  "mvp-design-agency": ["mvp design", "minimum viable product"],
  "product-design-agency": ["product design process", "digital product design"],
  "design-sprint": ["design sprint"],
  "hire-ui-ux-designers": ["hire ux designer"],
  "ui-ux-design-cost": ["app design cost", "website design cost"],
};
console.log(`Researching ${services.length} hubs…`);
const research = {};
for (const s of services) {
  // hiring/pricing hubs: seed with the buyer's query ("hire product designer"), not the bare job title,
  // which returns job-seeker searches
  const main = s.category === "Hiring & pricing" ? (s.keywords?.[0] ?? s.title) : (s.centralEntity ?? s.keywords?.[0] ?? s.title);
  const seeds = [...new Set([main, ...(BLOG_SEEDS[s.slug] ?? [])].map(norm))];
  const keywords = [];
  for (const seed of seeds) {
    const d = await cached(`terms-${seed.replace(/[^a-z0-9]+/g, "-")}`, () =>
      ahrefs("keywords-explorer/matching-terms", {
        country: "us", keywords: seed, terms: "all", limit: "60", order_by: "volume:desc",
        select: "keyword,volume,difficulty,cpc,parent_topic,traffic_potential,intents",
      }),
    );
    keywords.push(...(d.keywords ?? []));
  }
  research[s.slug] = { seeds, keywords };
}

// ---------- 2. categorize ----------
const categories = new Map();
for (const s of services) {
  for (const k of research[s.slug].keywords) {
    const kw = norm(k.keyword);
    // measured keywords only: no KD or parent topic means Ahrefs has no reliable data for it
    if (!k.volume || k.volume < 30 || k.difficulty == null || !k.parent_topic) continue;
    const serviceIntent = s.category === "Hiring & pricing" ? /\b(agency|agencies|company|companies|near me|jobs?|tool|software|app|template|figma|free)\b/ : SERVICE_INTENT;
    if (owned.has(kw) || rejected.has(kw) || serviceIntent.test(kw) || OFF_AUDIENCE.test(kw)) continue;
    const topic = norm(k.parent_topic ?? kw);
    if (owned.has(topic) || rejected.has(topic) || serviceIntent.test(topic) || OFF_AUDIENCE.test(topic)) continue;
    const c = categories.get(topic) ?? { topic, hub: s.slug, hubCategory: s.category, keywords: [] };
    if (!c.keywords.some((x) => x.keyword === kw)) c.keywords.push({ keyword: kw, volume: k.volume, kd: k.difficulty, cpc: k.cpc, tp: k.traffic_potential });
    categories.set(topic, c);
  }
}

// ---------- 3. opportunity matrix ----------
const avg = (xs) => { const v = xs.filter((x) => x != null); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null; };
let rows = [...categories.values()].map((c) => {
  c.keywords.sort((a, b) => b.volume - a.volume);
  const main = c.keywords[0];
  const sumVolume = c.keywords.reduce((a, k) => a + k.volume, 0);
  const tp = Math.max(...c.keywords.map((k) => k.tp ?? 0), main.volume);
  const kd = avg(c.keywords.map((k) => k.kd)) ?? 30;
  const cpc = (avg(c.keywords.map((k) => k.cpc)) ?? 0) / 100; // Ahrefs CPC is in cents
  const done = publishedKw.has(c.topic) || c.keywords.some((k) => publishedKw.has(k.keyword));
  return { ...c, main: main.keyword, count: c.keywords.length, sumVolume, trafficPotential: tp, avgKd: Math.round(kd), avgCpc: +cpc.toFixed(2), done };
}).filter((r) => !r.done);

function score(r) {
  const demand = Math.log10(1 + r.trafficPotential) / 4; // 10k TP ≈ 1
  const ease = 1 - Math.min(r.avgKd, 90) / 100;
  const value = 1 + Math.min(r.avgCpc, 30) / 30; // buyer value from CPC, ×1–2
  const serp = r.serp ? r.serp.ease : 1;
  const hub = HUB_WEIGHT[r.hubCategory] ?? 1;
  return Math.round(100 * demand * ease * value * serp * hub * 10) / 10;
}
rows.forEach((r) => (r.score = score(r)));
rows.sort((a, b) => b.score - a.score);

// ---------- 4. SERP strength + rankings matrix for the top categories ----------
console.log(`SERP-checking the top ${Math.min(SERP_N, rows.length)} of ${rows.length} categories…`);
for (const r of rows.slice(0, SERP_N)) {
  const serp = await cached(`serp-${r.main.replace(/[^a-z0-9]+/g, "-")}`, () =>
    ahrefs("serp-overview/serp-overview", {
      country: "us", keyword: r.main, top_positions: "10",
      select: "position,url,title,domain_rating,url_rating,refdomains,type",
    }),
  );
  const organic = (serp.positions ?? []).filter((p) => p.url && (p.type ?? []).includes("organic")).slice(0, 10);
  const domain = (u) => new URL(u).hostname.replace(/^www\./, "");
  const dr = avg(organic.map((p) => p.domain_rating)) ?? 50;
  const rd = avg(organic.map((p) => p.refdomains)) ?? 20;
  const weak = organic.filter((p) => (p.domain_rating ?? 100) < 40 || (p.refdomains ?? 99) < 3).length;
  const ours = organic.find((p) => domain(p.url) === SITE);
  // ease 0.5–1.2: weak top-10 pages and low DR make it easier to break in
  const ease = Math.max(0.5, Math.min(1.2, 1.2 - dr / 200 - Math.min(rd, 200) / 800 + weak * 0.04));
  r.serp = {
    avgDr: Math.round(dr), avgRefdomains: Math.round(rd), weakResults: weak, ease: +ease.toFixed(2),
    ourPosition: ours?.position ?? 100,
    top: organic.map((p) => ({ pos: p.position, domain: domain(p.url), dr: p.domain_rating, rd: p.refdomains, title: p.title })),
  };
  r.score = score(r);
}
rows.sort((a, b) => b.score - a.score);

// competitors = domains that appear most often across the checked SERPs
const seen = new Map();
for (const r of rows) for (const t of r.serp?.top ?? []) seen.set(t.domain, (seen.get(t.domain) ?? 0) + 1);
const competitors = [...seen.entries()].filter(([d]) => d !== SITE && !/youtube|reddit|linkedin|medium|wikipedia|quora/.test(d))
  .sort((a, b) => b[1] - a[1]).slice(0, 6).map(([d]) => d);
for (const r of rows) {
  if (!r.serp) continue;
  r.serp.matrix = Object.fromEntries([SITE, ...competitors].map((d) => [d, r.serp.top.find((t) => t.domain === d)?.pos ?? 100]));
}

// ---------- 5. format + expected traffic ----------
for (const r of rows) {
  r.format = formatOf(r.main);
  r.expectedMonthlyTraffic = Math.round(r.trafficPotential * EXPECTED_CTR);
}

const out = {
  note: "Blog opportunity scores (patent US11468139B2 method). Higher score = more demand and buyer value where competition is weak. The content pipeline publishes from the top; re-run weekly, and after each post compare expectedMonthlyTraffic with real clicks to tune the weights.",
  generated: today, site: SITE, weights: { HUB_WEIGHT, EXPECTED_CTR }, competitors,
  opportunities: rows.map(({ keywords, ...r }) => ({ ...r, keywords: keywords.slice(0, 8) })),
};
fs.writeFileSync(path.join(DOCS, "blog-opportunities.json"), JSON.stringify(out, null, 2) + "\n");

// Fig. 3 + Fig. 4 as a readable table
const md = [
  `# Blog opportunities — ${today}`,
  "",
  "Generated by `node scripts/blog-opportunities.mjs`. Score = demand (traffic potential) × ease (KD, SERP strength) × buyer value (CPC) × hub weight.",
  "",
  "## Opportunity matrix",
  "",
  "| # | Topic (parent) | Hub | Score | Keywords | Volume | Traffic potential | Avg KD | Avg CPC | Top-10 avg DR | Weak results | Format |",
  "|---|---|---|---|---|---|---|---|---|---|---|---|",
  ...rows.slice(0, 40).map((r, i) => `| ${i + 1} | ${r.main} | ${r.hub} | ${r.score} | ${r.count} | ${r.sumVolume} | ${r.trafficPotential} | ${r.avgKd} | $${r.avgCpc} | ${r.serp?.avgDr ?? "–"} | ${r.serp?.weakResults ?? "–"} | ${r.format.split(" (")[0]} |`),
  "",
  "## Rankings matrix (position in the top 10; 100 = not ranking)",
  "",
  `| Topic | ${[SITE, ...competitors].join(" | ")} |`,
  `|---|${[SITE, ...competitors].map(() => "---").join("|")}|`,
  ...rows.filter((r) => r.serp).map((r) => `| ${r.main} | ${Object.values(r.serp.matrix).join(" | ")} |`),
  "",
];
fs.writeFileSync(path.join(DOCS, "blog-opportunities.md"), md.join("\n"));
console.log(`\nTop 10 of ${rows.length} blog opportunities:`);
for (const r of rows.slice(0, 10)) console.log(`  ${String(r.score).padStart(5)}  ${r.main}  [${r.hub}] vol ${r.sumVolume} TP ${r.trafficPotential} KD ${r.avgKd} CPC $${r.avgCpc} DR ${r.serp?.avgDr ?? "-"} → ${r.format.split(" (")[0]}`);
