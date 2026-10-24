# QA: user-onboarding-metrics

Checked 2026-10-24 on `content/blog/user-onboarding-metrics.md`. Scratch build used `draft: false` at /tmp/claude-0/-home-user/fe69f371-e23c-50e5-9047-e154a04e6691/scratchpad/uom-qa; the shared `out/` was not touched. The 24 fixes below (my Q/D fixes plus the merged F1–F8 from facts.md) were scripted as exact replacements, each required to match once, tested in scratch, then applied to the post. Script: /tmp/claude-0/-home-user/fe69f371-e23c-50e5-9047-e154a04e6691/scratchpad/tools/fixes.py. Backup of the pre-fix post: /tmp/claude-0/-home-user/fe69f371-e23c-50e5-9047-e154a04e6691/scratchpad/uom-pre-apply-backup.md.

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Intent and cannibalisation | PASS | Informational/TOFU, set from a SERP of listicles. No other title, H1, keyword or metaTitle in content/ targets "onboarding metrics". Sibling 8-gram overlap is 0 after Q9. |
| 4 | Semantic SEO | PASS after fixes | Bold answers are 26–30 words, one sentence each. FAQs are 36–45 words, with Yes/No openers on boolean questions. Keyword count is 16 in 3,163 open words (1.52%). Title 66, metaTitle 56, description 158 on the built HTML (D1 makes it end on a reader step and stay unique). Expansions fixed: KPIs (Q3), UX before its first use (Q4). Serial comma in the tree alt removed (Q2). No banned phrases or hedges, no literal `&lt;`, no comments. Note: HEART appears in its H2 and bold answer before the expansion in the section's first sentence. I accepted this as the name of a framework. |
| 5 | Internal links | PASS | 8 links: the hub (intro and closing #process), /about/, 3 same-silo siblings, TradeZella and the pillar. Every target and fragment exists in the built HTML. Anchors are varied. |
| 6 | Images | PASS, pending 2 redraws | 5 SVGs plus the cover, 1200×750 canvas, smallest text 20px (12.7px rendered at 760px). Plus Jakarta Sans, blue palette. The panels now match the images: comparison (4 drawn columns plus the level legend), diagnosis (3 drawn columns), 2×2 (axes named, Q7). The tree SVG (time to value screens) and the comparison SVG (retention window) must be redrawn with the strings below. |
| 6b | Duplication | PASS after fixes | Formula/screen and "Confirm with" moved to open tables that the images do not draw (Q5, Q6). The quadrant cell repeat in prose was removed (Q8). |
| 7 | Readability | PASS | No paragraph over 4 sentences after the merge. US spelling. Highest 5-gram overlap with any post is 0.40%, and 0 shared 8-grams with any post, service, industry, location, case study or about.md after Q1 and Q9. |
| 7a | Competitor | PASS | `beats` usermaven URL returns 308 to /blog/user-onboarding-kpis ("12 must-track user onboarding KPIs", same topic). 5-gram overlap is 0.00% with it and with chameleon, appcues and mixpanel. No numbered list or early/late split. Its extra metrics (churn, feature adoption, MAU) are now named as out of scope (Q10). All serpGaps are covered. |
| 7b | Silo and leads | PASS | services[0] = saas-onboarding-design. One pillar link, no other silo's posts. TOFU with support 4. Lead angle delivered at H2 5 (weeks 1–2) and in the closing. |
| 7c | Variety | PASS | Backward-trace intro. Q1 removed the "Say you run a … software as a service (SaaS) product for US …" shape it shared with product-discovery-techniques. Tree, cards, map, 2×2 and timeline visuals. Closing is the proof section, with no "Bottom line". |
| 7d | Completeness | PASS after fixes | Every H2 has an answer, detail, example and a bridge. All brief questions are answered. Q15 corrects the intro's "Every number below depends on" the activation event (sign-up completion and step drop-off do not). |
| 7e | On-page | PASS | `npm run onpage -- /blog/user-onboarding-metrics/`: 100, failed []. Semantic score 94 (facts 0.6/100 words is the only ✗). |
| 8 | Build | PASS | SHOW_DRAFTS build exit 0. seo:check 0 errors. Feed validator shows 1 expected error with `qa: pending` and 0 with `qa: pass` in scratch. Lint 0 errors. |

Rival entities (body including panels): keyword 16, first-week retention 14, activation rate 14, time to value 12, cohort 9, drop-off 16 (trimmed by Q13 and Q14). The bare stems "activation" (44) and "retention" (21) are counted inside the metric names. Sister site: the sitemap (83 URLs) has no onboarding, metrics or analytics page.

## Fixes applied
Q1 intro shape · F2 merged (hub step 1 wording) · Q2 alt · F8 tree panel · Q3 KPIs · Q5 comparison panel + open formula/screen table (incl. F4 and F8 cells, never-reached share denominator) · F3 · Q10 · Q4a/b · Q6a/b diagnosis panel + confirm table · Q14 caption · F7 · F5 · F4 prose (changed to keep the retention/first week skip-gram) · Q7 · Q8 · F6 · Q9 · F1 merged (≤ 45 words, no repeat of the L125 tools sentence) · Q13 · Q15 · D1.

VERDICT: PASS
