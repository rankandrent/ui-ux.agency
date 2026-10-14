#!/usr/bin/env node
/**
 * Sister-site guard (owner rule 2026-10-14): ui-ux.agency never builds a city page for a city that
 * uiuxdesignservices.us (same owner) already covers, so the two sites never compete for the same
 * local keywords.
 *
 *   node scripts/sister-guard.mjs --list            refresh docs/content-system/sister-site.json, print cities
 *   node scripts/sister-guard.mjs "<city|keyword>"  exit 1 = BLOCKED (sister owns the city), 0 = free
 *
 * If the sister sitemap cannot be fetched, the last saved list is used (and still blocks).
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const FILE = path.join(ROOT, "docs/content-system/sister-site.json");
const SISTER = "uiuxdesignservices.us";
const arg = process.argv.slice(2).join(" ").trim();

/** Alias → canonical city name */
const ALIASES = {
  nyc: "new york", "new york city": "new york", manhattan: "new york", brooklyn: "new york",
  sf: "san francisco", "bay area": "san francisco", "silicon valley": "san francisco",
  la: "los angeles", dc: "washington dc", "washington d.c.": "washington dc", "washington dc": "washington dc", washington: "washington dc",
  philly: "philadelphia", "st. louis": "st louis", "saint louis": "st louis",
};
const ALIAS_RE = new RegExp(`(^| )(${Object.keys(ALIASES).sort((x, y) => y.length - x.length).map((a) => a.replace(".", "\\.")).join("|")})(?= |$)`, "g");
/** Normalize a city or keyword in ONE pass, so "washington dc" is not expanded twice. */
const canon = (s) => s.toLowerCase().replace(/[^a-z0-9. ]+/g, " ").replace(/\s+/g, " ").trim().replace(ALIAS_RE, (_, pre, a) => `${pre}${ALIASES[a]}`);
/** "ux-design-agency-new-york" / "st-louis-ux-design-agency" → "new york" / "st louis" */
const cityFromSlug = (slug) => slug.replace(/-/g, " ").replace(/\b(ui|ux|design|designer|designers|agency|agencies|company|companies|services?|studio|firm|product|in)\b/g, " ").replace(/\s+/g, " ").trim();

async function refresh() {
  try {
    const res = await fetch(`https://${SISTER}/sitemap.xml`, { signal: AbortSignal.timeout(20000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const urls = [...xml.matchAll(/<loc>([^<]*\/location\/[^<]+\/)<\/loc>/g)].map((m) => m[1]);
    const cities = [...new Set(urls.map((u) => canon(cityFromSlug(u.split("/location/")[1].replace(/\/$/, "")))))].filter(Boolean).sort();
    const data = { note: "Cities the sister site uiuxdesignservices.us covers. ui-ux.agency must not build city pages for these (scripts/sister-guard.mjs).", domain: SISTER, checked: new Date().toISOString().slice(0, 10), cities, urls };
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2) + "\n");
    return data;
  } catch (e) {
    if (fs.existsSync(FILE)) { console.error(`sister-guard: fetch failed (${e.message}); using saved list`); return JSON.parse(fs.readFileSync(FILE, "utf8")); }
    console.error(`sister-guard: fetch failed (${e.message}) and no saved list — blocking to be safe`);
    process.exit(1);
  }
}

const data = await refresh();
if (!arg || arg === "--list") {
  console.log(`${SISTER} covers ${data.cities.length} cities (checked ${data.checked}):\n  ${data.cities.join("\n  ")}`);
  process.exit(0);
}
const q = canon(arg);
const hit = data.cities.find((c) => new RegExp(`(^| )${c.replace(/\./g, "\\.")}( |$)`).test(q));
if (hit) { console.log(`BLOCKED: "${arg}" → ${hit} is covered by ${SISTER}`); process.exit(1); }
console.log(`FREE: "${arg}" is not covered by ${SISTER}`);
