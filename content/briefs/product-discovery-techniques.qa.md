# QA: product-discovery-techniques

Post: content/blog/product-discovery-techniques.md (route /blog/product-discovery-techniques/). QA run 2026-10-23.
Scratch build: /tmp/claude-0/-home-user/fe69f371-e23c-50e5-9047-e154a04e6691/scratchpad/pdt-qa (draft: false; shared out/ untouched).
The 41 fixes below (QA Q1–Q26 merged with fact-check F1–F9) were scripted as exact old → new replacements. Each must match once. They were tested in scratch and then applied to the post, which now matches the tested copy byte for byte. Script: /tmp/claude-0/-home-user/fe69f371-e23c-50e5-9047-e154a04e6691/scratchpad/pdt-fixes.py

| # | Check | Before fixes | After fixes |
|---|---|---|---|
| 1 | Intent & cannibalisation | PASS. MOFU methods intent. No other page targets the keyword. "product discovery process" is used 0× and the sibling is linked rather than restated. | PASS |
| 4 | Semantic SEO | FIX. 3 n-grams were missing (riskiest assumption, usability risk, feasibility risk) plus the entity "assumption testing". The description ended on a payoff, not a reader step. Rivals beat the keyword in the full text (AI 16, prototype 15 vs keyword 12). | PASS. Keyword 15×, density 1.07% (open text 1.3%). Rivals: AI 14, interview 13, prototype 12, model 11. Bold answers are 26–30 words and FAQs 34–40 words. No banned words, hedges or serial commas. US spelling. Description is 150 chars and ends "Fill in a test card before you run one." |
| 5 | Internal links | PASS. 9 in-body links, all targets built, hub in L28 and near the end, anchors varied, 1 cross-hub link (design sprint). | PASS |
| 6 | Images | FIX. Panels did not cover the image labels (ladder tags, test-card stamp and header, scatter ring/arrow/"Relative, not measured"). The matrix intro claimed the image shows sample/output/pass. | PASS. All 6 images load. Min font is 20 → 12.7px at 760px. Palette and font follow the brand. |
| 6b | Duplication | FIX. L222 repeated tray 4's outputs a third time. | PASS |
| 7 | Readability / overlap | FIX. 17 shared 8-grams with /blog/product-discovery/ (OST sentence, HIPAA/CCPA expansion, deliverables) and the HIPAA 8-gram with healthcare.json and 2 location JSONs. | PASS. 0 shared 8-grams with any post, industry, service, location, case study, pages or content/*.ts. 5-gram vs sibling 1.3%. Every paragraph ≤ 4 sentences. |
| 7a | Competitors | PASS. usertesting.com 0.00%, plane.so 0.00%, productboard 0.00% (5-gram, curl). plane.so groups methods into 8 purpose buckets. Our risk order is Cagan's from SVPG, and plane's examples, time, sample and pass data are not mirrored. | PASS |
| 7b | Silo & leads | PASS. services[0] is the hub, MOFU, service-support 4, lead angle delivered at the end of H2 6 and in H2 9 with no hard sell and no price in the body. | PASS |
| 7c | Variety | PASS. Checklist type with no "Step N:", no definition H2, no "Bottom line", wrong-instrument intro, no credential-shape intro. | PASS |
| 7d | Completeness | FAIL. Workshop "4 of the 14" count (fact-check F8), value-ladder logic (F3), Torres named without a link, OST source not linked. | PASS |
| 7e | On-page | 100 | 100, failed [] |
| — | Sister site | FIX. 2 shared 8-grams with uiuxdesignservices.us/blog/is-discovery-phase-worth-it/ (the Cagan four-risk sentence). | PASS. Max 5-gram 0.11%, 0 shared 8-grams. No heading shape matches. |
| 8 | Build | build OK. seo:check 0 errors. Lint 0 errors (1 pre-existing warning in scripts/onpage-audit.mjs). The feed validator's single error is the expected `qa: pending` and clears with `qa: pass`. semantic 100. | Same. semantic 100 (3,585 words). No "&lt;" in the built HTML. |

Publish-day items for the orchestrator: the 3 required backlinkSuggestions (hub JSON, product-discovery.md, mass-media-co.md) are not applied yet. The Mass Media fragment #which-techniques-test-value-risk-before-anything-is-built still matches H2 2. Also update the brief records named in facts.md F8g.

VERDICT: PASS (after the applied fixes)
