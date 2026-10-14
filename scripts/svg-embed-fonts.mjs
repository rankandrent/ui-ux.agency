#!/usr/bin/env node
/**
 * Embeds the site font (Plus Jakarta Sans 500/700/800, OFL) into blog infographics.
 * An SVG shown through <img> cannot load the page's web fonts, so without this its text falls
 * back to Arial. Only the weights an SVG actually uses are embedded; re-running is safe.
 * Usage: node scripts/svg-embed-fonts.mjs [dir ...]   (default: public/blog)
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const FONT_DIR = path.join(ROOT, "assets/fonts");
const WEIGHTS = [500, 700, 800];
const MARK = "<!--svg-fonts-->";
const dirs = process.argv.slice(2).length ? process.argv.slice(2) : ["public/blog"];

const face = Object.fromEntries(WEIGHTS.map((w) => {
  const b64 = fs.readFileSync(path.join(FONT_DIR, `plus-jakarta-sans-latin-${w}-normal.woff2`)).toString("base64");
  return [w, `@font-face{font-family:'Plus Jakarta Sans';font-weight:${w};src:url(data:font/woff2;base64,${b64}) format('woff2')}`];
}));

/** Map any requested weight to the nearest embedded one. */
const nearest = (w) => WEIGHTS.reduce((a, b) => (Math.abs(b - w) < Math.abs(a - w) ? b : a));

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : e.name.endsWith(".svg") ? [path.join(dir, e.name)] : [],
  );
}

let changed = 0;
for (const dir of dirs) {
  const abs = path.resolve(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs)) {
    let svg = fs.readFileSync(file, "utf8");
    // drop a previous embed so the weights always match the current text
    svg = svg.replace(new RegExp(`${MARK}<style>[\\s\\S]*?</style>`), "");
    if (!/<text[\s>]/.test(svg) || !/Jakarta/.test(svg)) { fs.writeFileSync(file, svg); continue; }
    const used = new Set([...svg.matchAll(/font-weight(?:=|:\s*)["']?(\d{3}|bold|normal)/g)]
      .map((m) => (m[1] === "bold" ? 700 : m[1] === "normal" ? 500 : nearest(Number(m[1])))));
    if (!used.size) used.add(500);
    const style = `${MARK}<style>${[...used].sort().map((w) => face[w]).join("")}</style>`;
    const out = svg.replace(/(<svg\b[^>]*>)/, `$1${style}`);
    fs.writeFileSync(file, out);
    changed++;
  }
}
console.log(`svg-embed-fonts: ${changed} SVG${changed === 1 ? "" : "s"} carry Plus Jakarta Sans`);
