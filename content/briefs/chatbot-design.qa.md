# QA: chatbot-design

Checked 2026-10-19 by content-qa. Scratch build: /tmp/claude-0/-home-user/fe69f371-e23c-50e5-9047-e154a04e6691/scratchpad/chat-qa (draft:false, SHOW_DRAFTS=1); shared `out/` untouched.
The 27 fixes below (19 QA + 8 merged fact-check) were tested together in scratch, then applied to the post. The post now matches the tested copy byte for byte, apart from `draft`.

## Results

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Intent and cannibalization | PASS | TOFU how-to. Only the hub phrases appear in the 2 hub anchors (L30, FAQ cost). No other `content/` page targets "chatbot design". |
| 4 | Semantic SEO | PASS after fixes | Bold answers are 24–30 words, one sentence each. Density 0.97% (15×). All 17 n-grams used. Abbreviations expanded; W3C added by FIX. No hedges or banned words. Boolean FAQ starts "Yes.". Title 56, H1 65, description 152 characters. |
| 4a | onpage attribute-coverage | FIX → PASS | Before: 98, attribute-coverage 8/12 (owner rule FAIL). After F1a–c: 100, 11/12. |
| 5 | Internal links | PASS (exception) | 5 links to 4 pages. Accepted: the silo has no sibling posts, no case study covers chatbot work, the hub cap is 2 and the cross-service cap is 1. /contact/ stays out for a TOFU post (brief + RULES step 6). Same precedent as product-discovery and usability-testing. |
| 5a | Named sources linked (lesson 2026-10-19) | FIX → PASS | Google errors guidance, the PAIR chapter, Microsoft 2018 guidelines and SC 4.1.3 were named but not linked. Links added (F7a–c, F4). |
| 5b | backlinkSuggestions | PENDING (orchestrator, publish day) | All 3 required suggestions (hub JSON L25, pillars.ts L92, ai-ux JSON L42) not applied yet. Each `old` string matches exactly once. Suggestions 4 and 5 are skipped with reasons. |
| 6 | Images | PASS | 4 SVGs + cover in `out/`. At 760px the minimum font renders at 12.7px. Brand palette and Plus Jakarta Sans. The 390px cover is not cropped. Alt and caption share their subject, and all examples are labeled hypothetical or example data. |
| 6b | Panel ⊇ image | PASS | Every SVG label is in its astext panel, including reply states in 2 rows, scorecard columns, job card fields and the chat-or-screen example line. |
| 7 | Readability | PASS after fixes | One paragraph had 5 sentences (L167–168 glued), split by F2. 5-gram overlap with other posts is ≤ 0.45% and shared 8-grams are now 0: the credential sentence, PAIR and "result that counts as a pass" were removed. US spelling. No serial commas. |
| 7a | Competitor (IBM, beats) | PASS | curl 200. 5-gram overlap 0.20%. Heading order differs (IBM: definition → UI vs UX → principles → terms → use cases → personality → repair). All 10 serpGaps are covered. |
| 7b | Silo and leads | PASS | services[0] chatbot-ui-design, TOFU, service-support 4. Lead angle at the end of Step 5 and Step 8, no hard sell. |
| 7c | Variety | PASS | Checklist type, 8 Step H2s each with a gate line, 8-gate closing H2, no "Bottom line", 4 visuals. Description ends "then pass a gate at each step." (count 1; the 3 newest end "Then book a free consultation."). Intro credential shape removed (F3). |
| 7d | Completeness | PASS after fixes | Every step runs bold answer → detail → example → gate → bridge. Logic fixes: reply states "one next action" vs "Wait or retry" (F9), Gate 6 vs Q4-No guided bot (F10), FAQ 3 "each principle maps to a gate" was false (F8c). |
| 7e | On-page | PASS | Score 100, failed []. Built HTML has 0 `&lt;`, 0 hidden details, 5 figures and 5 figcaptions. FAQPage answers hold only their answers. |
| 8 | Build | PASS | Build 0. seo:check 0 errors (feed-validator error is the expected `qa: pending`; with `qa: pass` it reports 0). Lint 0 errors (1 pre-existing warning in scripts/onpage-audit.mjs). |
| — | Sister site | PASS | No chatbot pages. Overlap with saas-ux-design, industries/saas, digital-product-design, startups, dashboard and the saas-product-redesign blog is ≤ 0.11%. |
| — | Semantic score | PASS | 94 before, 94 after (≥ 85). Facts density miss accepted. |
| — | Length | NOTE | 3,104 open words (3,709 with panels). FAQ trims (−45) were offset by the sourced fact-check rewrites. Every brief module is kept. |

## Fact-check merge notes
FC-F1, F3, F5, F7, F8 and F10 were applied as written. FC-F2 was changed: "On our chatbot UI design page" put a hub phrase outside an anchor, so it now reads "Our published pricing puts a support widget with 20 to 30 intents on one website at the low end of the range." FC-F4 was applied and merged with QA F2 (paragraph split). FC-F6 was split into 2 sentences (it was 50 words) and W3C was expanded. FC-F9 drops "wrong ones included", because the previous sentence already says it, and is merged with the QA scorecard lead-in. The stale brief FAQ line (~320) is fixed.

## Guidance for the writer
No open gaps after the applied fixes.

VERDICT: PASS
