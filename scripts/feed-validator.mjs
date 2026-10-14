#!/usr/bin/env node
/**
 * Blog feed validator (the "daily QA" step of US11468139B2): every published post must be
 * complete before it ships — no blank title, summary or metadata, a cover image, a hub, a date,
 * and both review gates passed. Drafts are skipped. Exits 1 on any error.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dir = path.join(ROOT, "content/blog");
const errors = [];
let checked = 0;

for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".md"))) {
  const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
  if (data.draft) continue;
  checked++;
  const need = {
    title: data.title, description: data.description, metaTitle: data.metaTitle ?? data.title,
    date: data.date, image: data.image, hub: data.services?.[0],
  };
  for (const [k, v] of Object.entries(need)) if (!v || !String(v).trim()) errors.push(`${f}: blank ${k}`);
  if (data.qa !== "pass") errors.push(`${f}: qa is "${data.qa ?? "missing"}", must be "pass" before publishing`);
  if (data.image && !fs.existsSync(path.join(ROOT, "public", data.image))) errors.push(`${f}: image ${data.image} not found`);
  if (/<!--\s*(visual|link|source):/.test(content)) errors.push(`${f}: unresolved visual/link/source marker`);
  if (data.services?.[0] && !fs.existsSync(path.join(ROOT, "content/services", `${data.services[0]}.json`))) errors.push(`${f}: hub ${data.services[0]} does not exist`);
}

for (const e of errors) console.log(`✗ ${e}`);
console.log(`feed validator: ${checked} published posts · ${errors.length} errors`);
process.exit(errors.length ? 1 : 0);
