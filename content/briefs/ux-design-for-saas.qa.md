# QA: ux-design-for-saas

Post: `content/blog/ux-design-for-saas.md` (faizan-khan, Comparison, TOFU, hub saas-design-agency). Checked 2026-10-21. The fixes were tested in the scratch copy `sx-qa` (draft: false) and then applied to the post: 38 exact old → new replacements in `sx-tools/fixes.py` / `fixes.json` (each one must match exactly once). After applying, the post is byte-identical to the tested copy, apart from `draft: true`. The shared `out/` was not touched.

## Gates (scratch copy, after all fixes)

- `SHOW_DRAFTS=1 npm run build`: exit 0.
- `npm run seo:check`: 0 errors and 13 warnings (pre-existing, on other pages). The feed validator reports 1 error, `qa is "pending"`, which is expected for a draft. With `qa: pass` set in the scratch copy only, it reports 0 errors.
- `npm run lint`: 0 errors and 2 warnings (pre-existing).
- `npm run onpage -- /blog/ux-design-for-saas/`: 100, nothing failed. Entity salience is 100 (keyword 20× against the top rival "settings" at 18×; before the fixes it was 19×). Entity coverage is 26/27; the only missing entity is IBM Carbon, which was de-linked on purpose.
- `node scripts/semantic-score.mjs ux-design-for-saas`: 94 (≥ 85). The only ✗ is facts (0.1/100 words). That check is a regex for a number followed by a unit word, and this method post has no sourced numbers to add. Do not bolt units onto sentences to pass it (content-qa lesson 2026-10-14).
- Built HTML: 0 `&lt;`. The FAQPage schema holds the 5 answers and nothing else. 6 figures, 6 figcaptions. Description 143 chars, metaTitle 52, title 62.

## Checklist

| # | Item | Result | Notes |
|---|---|---|---|
| 1 | Intent & cannibalisation | PASS | No title, H1, keyword or metaTitle in `content/` targets the keyword. 5-gram overlap: saas-homepage-design 0.74%, saas-onboarding 0.18%, onboarding-kyc-process-flow 0.20%, the other posts ≤ 0.31%. After the fixes, no post, `content/industries/*.json`, service JSON, pillars.ts, home.ts, pages or case study shares an 8-gram with the post. The fixes removed 8-grams shared with enterprise.json, the hub, homepage, kyc, product-discovery, mvp, fintech and the case studies. |
| 4 | Semantic SEO | FIX → PASS | Two bold answers were 31 words; both now ≤ 30 (Q4, Q5). Two sentences of 33–35 words were split (Q7, Q12). The opener shape was rewritten (see 7c). No banned phrases, hedges, serial commas, British spellings or "the hub". Abbreviations are expanded. Boolean FAQs open with Yes/No. FAQs are 38–43 words. Keyword density is 1.29% (10 uses in 3,095 open words). |
| 5 | Internal links | FIX → PASS | 9 body links (was 10). Digno was de-linked under the 1–2 case-study rule, and its facts stay as plain text (supported by digno.md l.63, 77–79). The hub is linked at about word 40 and again in the closing (#fragment exists). There is 1 cross-hub link (onboarding hub) and the pillar link. Anchors vary. |
| 5a | Named sources linked | PASS | All 8 named sources are linked. The uncredited NN/g dashboard definition was rewritten in our own words (F5). The notifications framework is written as the author's method, and NN/g is not named there. |
| 6 | Images | PASS | 5 SVGs + cover exist. Rendered at 760px: no text below 12.6px and no out-of-bounds text. The overlap flags are line-pair heuristics; the triage grid reads cleanly by eye. Spelling checked. Brand palette. No third-party assets. |
| 6b | Duplication / panel ⊇ image | FIX → PASS | (a) The dashboard panel now covers the weak side ("12 equal metric cards"). (b) The plan-limit panel names the red Limit reached banner and the "Ask your admin to upgrade" button. (c) The "Metric to pull" column was dropped from the triage panel and its intro, which now point to the surface map and explain R/A/G. FAQ 5 now says "surface-map metric" (Q14). |
| 7 | Readability | FIX → PASS | Paragraphs ≤ 4 sentences after the merge. 3 sentences are over 30 words; 2 of them are scorer artefacts (list, table). |
| 7-len | Length | NOT MET (non-blocking) | Open text is 3,095 words (3,057 before; the fact-check rewrites add about 40). Full body with panels: 3,726. No stage-setting sentence can be cut without losing a brief module, a bridge or a lead-in to an image or table. |
| 7a | Competitor originality | PASS | Fetched with curl: saasui.design/blog/saas-ux-design 0.03%; its permissions, billing, usage-limit and settings posts 0.00%; b2b-saas-design 0.03%; heymarvin 0.00%. None of the DO-NOT-MIRROR phrases appear. The one 5-gram shared with the settings post ("ask the user to type the") was reworded. Their heading orders are principle-led and pattern-led; ours goes surface by surface. All 8 serpGaps are covered. |
| 7a' | Sister site | PASS | /services/saas-ux-design/ 0.10% and /industries/saas/ 0.26%. The only shared 5-grams are standard expansions (WCAG, SOC 2, SCIM, SaaS). Neither page targets "ux design for saas" (titles: "SaaS UX Design Services…" and "SaaS UI UX Design Agency…"). |
| 7b | Silo & leads | PASS | services[0] = saas-design-agency, TOFU, service-support 4. The lead angle lands at the end of the roles section and in the triage closing, with no hard sell. |
| 7c | Variety | FIX → PASS | The opener "When I review … software as a service (SaaS) products" repeated the shape of saas-onboarding (same author, "When I review a software as a service (SaaS) product…"). It was rewritten as a customer-first sentence (Q1). There is no "Bottom line", and no H2 definition. The meta ending is unique among the last 3 posts and has no consultation ask. |
| 7d | Completeness | FIX → PASS | The intro promises weak vs strong "for each" surface, but settings had no weak version. One sentence was added (Q8). |
| 7e | On-page | PASS | 100. Manual items are met: figure captions, table intros, h2-then-text, no hidden content, no skipped heading levels. |
| 8 | Build | PASS | See gates. |
| Legal | AB 2863 / FTC | PASS after F1–F3 | Checked against the AB 2863 digest (the same text as leginfo; leginfo itself is behind a Cloudflare challenge): "contracts entered into, amended, or extended on or after July 1, 2025" and the same-medium rule. FTC: vacated July 8, 2025, ANPRM March 2026, consistent with /blog/saas-homepage-design/. The brief's legal lines (eav, serpGap, outline, FAQ, LEGAL FRAME l.483) were updated so they no longer tie online cancel to July 2025. |

## Fact-check merge (F1–F17)

- Applied as written: F1, F2, F4, F5, F6, F8, F9, F11, F13, F15, F16, F17, and F10 (merged into the rewritten WCAG paragraph, with "against WCAG 2.2" in place of "against 2.5.8" to keep the entity).
- Changed:
  - F3: shortened ("a same-medium rule for contracts from July 1, 2025") so the FAQ stays at 41 words.
  - F7: the Digno link was dropped, and the old third sentence was cut.
  - F12: split into 2 sentences.
  - F14: split, so that "That review" still follows the security review, and the Section 508 sentence now closes the paragraph.

## Guidance for the writer

- Facts density (semantic ✗, non-blocking): do not pad. If a sourced number exists later (for example, a support-ticket share from a case study), add it with its unit.
- Length: if the owner wants about 2,700 open words, the next cut is the hypernym sentence in H2 1 ("In-product UX is still user experience design…", 13 words). Rerun the lexical check after cutting it.

VERDICT: PASS
