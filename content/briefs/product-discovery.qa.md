# QA report: product-discovery (loop 1, 2026-10-15)

Post: `content/blog/product-discovery.md` (draft). Brief: `content/briefs/product-discovery.json`.
Build checks ran in a scratch copy (`SHOW_DRAFTS=1`, hard-linked node_modules), so the shared `out/` was not touched.
The 26 exact FIXes in F-list below were scripted (each old string had to match exactly once), applied to the scratch copy, rebuilt and re-scored, then applied to the repo. The repo files are byte-identical to the verified scratch copy.

## Gate results

| Gate | Before fixes | After fixes (repo state now) |
|---|---|---|
| `SHOW_DRAFTS=1 npm run build` | 0 errors | 0 errors |
| `npm run seo:check` | 0 errors, 1 warning (`table-intro` on this post) | 0 errors, 0 warnings |
| `npm run lint` | 0 errors (1 pre-existing warning in scripts/onpage-audit.mjs) | same |
| `npm run onpage -- /blog/product-discovery/` | **98, failed: `table-intro`** (2 astext tables after a `<figure>`) | **100, failed: none** |
| `node scripts/semantic-score.mjs product-discovery` | 100/100 | 100/100 (facts 1.2/100 words; the script's real threshold is 1.2 although its message prints "≥ 1.0") |

## Checklist

| # | Item | Result | Notes |
|---|---|---|---|
| 1 | Intent & cannibalisation | PASS | Informational "product discovery" (Ahrefs 1,300, orchestrator-accepted source, recorded in the brief). No other page in `content/` targets it. The hub owns "AI product discovery workshop"; the post used that phrase as plain text once (L214) after the link builder removed the link → FIXED (F13). |
| 4 | Semantic SEO | FIX → fixed | All bold answers are one sentence, ≤ 30 words (max 30 after fixes). Density 1.3% open text / 1.6% incl. panels. Abbreviations expanded on first open-text use (SaaS, AI, UX, NN/g, SVPG, PM, B2B, PAIR, CCPA, CPRA, HIPAA, NIST, AI RMF). Boolean H3/FAQ start with No. No banned phrases or hedges. Title 66, metaTitle 56, description 153 (built HTML), ending on the next step "Get the free checklist." Keyword sentences read naturally. `vs` hits all have a head noun (trade-off, choice) or are a table caption. Fixes: the definition bold answer lacked the keyword (F4); the two-week bold answer read as a comma list with no subject (F14); 2 serial commas against house style (F6, F10). |
| 5 | Internal links | PASS (exception) | 6 body links, all targets built; hub early (intro, ~word 150) and late (cost fragment `#how-much-does-an-ai-product-discovery-workshop-cost` exists); 1 cross-hub link (design sprint); anchors varied. 6 is below the TOFU 8–12 range; the exception is recorded in `related.internalCountException` (new silo, no siblings, no industry pages), same as earlier precedents. |
| 6 | Images | PASS after fixes | 7 SVGs exist, landscape, brand palette, Plus Jakarta Sans, every text ≥ 20px (labels) / 26px (body), 38–40 KB each. Rendered at 1440 (760px column, scale 0.633: 20px → 12.7px) and 390. The cover text stays inside the 16:9 mobile crop. No third-party assets. Spelling checked label by label. Fixes: the four-risks SVG draws an owner per risk that its text panel left out (F5). The stage strip said "many user stories", which in an agile post reads as backlog items → "many user needs" in SVG and panel (F7). The exit-gate chip contradicted the example (see 7d) → SVG chip + panel reworded (F18). |
| 6b | Duplication | PASS | Each image's items appear once in its always-visible panel. Open prose explains how to use each image and does not relist it. The worked-example table has no image. |
| 7 | Readability / US English | PASS after fixes | US spelling throughout (seo:check US English ✓). One 5-sentence paragraph (L262) → split (F16). 5-gram overlap: saas-onboarding 0.2%, hub page 0.9%, design-sprint hub 0.4% (all < 12%). |
| 7a | Competitor originality | PASS | Atlassian `beats` page fetched with curl (WebFetch gave ENOTFOUND). 5-gram overlap 0.05% (2 shared grams, both "Jira Product Discovery is Atlassian's"). Its H2s (challenges / dynamic product discovery / leadership / "In conclusion") are not mirrored. All 7 serpGaps are covered: AI checks, risks mapped to AI, phase vs continuous, day plan, worked AI example, exit gate, in-house vs partner. |
| 7b | Silo & leads | PASS | services[0] = ai-product-discovery-workshop (right hub). TOFU fits the SERP; service-support 3 ≥ 3. The "new silo starts BOFU + MOFU" deviation is recorded in funnelWhy. leadAngle delivered: L214 pain line, L303 hub facts + price link, closing checklist → workshop. No hard sell. |
| 7c | Variety | PASS (note) | Differs from the last 3 site-wide fingerprints in ≥ 4 dimensions. Note: the intro device (hypothetical + `>` blockquote log) repeats saas-onboarding's timed blockquote log, and the closing used the same "My recommendation:" label → reworded (F20). Lesson filed for the researcher/writer. |
| 7d | Semantic completeness | FIX → fixed | Gaps closed by exact inserts: Jira Product Discovery sentence in the agile H2 (brief point, F8); when continuous discovery alone fits (serpGap 3, F9); a concrete example under "Cost of a wrong answer" (F11). Logic contradictions fixed: intro "Two kills" vs a log with 1 kill + 1 park (F1, F2); the takeaway and bold answer "12-check gate" vs "AI lane applies only to AI features" (F17, F19); the gate rule "a no goes back to a test, not to the trash" vs the example's killed auto-replies (F18, prose + panel + SVG chip); "the last section of this guide" pointed at a section followed by 2 others (F15); the intro's contents order did not match the body (F3); intro "Nobody can access the scanned leases" vs body "scanned images, permission unclear" (F1). |
| 7e | On-page checklist | PASS after fixes | Score 100, nothing failed. Manual items: E-E-A-T (author Ahmad Ullah = Principal UX Designer, home.ts; contributor; 5 external sources); snippets ≤ 30 words; FAQ JSON-LD answers hold only their answer; DOM order = reading order (answer before the inline CTA form); captions share nouns with the alt text; every table has an intro `<p>` + caption + th[scope]. |
| 8 | Build | PASS | See the gate table. |

## FIXes applied (exact old → new, now in the repo)

All in `content/blog/product-discovery.md` unless noted.
- F1 L29 `Nobody can access the scanned leases yet.` → `The leases are scanned images, and nobody has confirmed permission to process them.`
- F2 L32 `Two kills and one narrow build is a strong result. I'd rather kill two ideas in the first 5 days than ship one nobody trusts.` → `One kill, one parked idea and one narrow build is a strong result. I'd rather set two ideas aside on paper than ship one nobody trusts.`
- F3 L34 `the agile fit, a two-week plan, the extra AI checks our [AI product discovery workshop](…) runs, and an exit-gate checklist.` → `the agile fit, the extra AI checks our [AI product discovery workshop](…) runs, a two-week plan and an exit-gate checklist.`
- F4 L38 `**Discovery is [the work…` → `**Product discovery is [the work…`
- F5 risks panel: intro `This table lists each risk with its owner, question, cheapest test and AI twist.` + caption `…by owner, question, cheapest test and AI twist` + an Owner column (PM / Designer / Engineering / PM, as drawn in the SVG).
- F6 L80 `test the riskiest assumptions, and decide.**` → `test the riskiest assumptions and decide.**`
- F7 stage panel + `product-discovery-process-stages.svg`: `many user stories` → `many user needs`.
- F8 L150 append after `…rather than a Scrum rule.`: `A tool such as Jira Product Discovery can hold that board's ideas and scores, but the tool does not run the discovery.`
- F9 after the three phase bullets, new paragraph: `Continuous discovery alone fits a live product whose trio already spends 30 minutes with customers every week.`
- F10 L180 `are you allowed to use it, and is it labeled?` → `are you allowed to use it and is it labeled?`
- F11 L194 append: `In maintenance triage, a missed urgent leak harms the tenant, so staff confirm or change every suggested urgency.`
- F12 AI-checks panel: intro `This table lists the evidence that passes each AI check and who answers it.` before its `Table:` line.
- F13 L214 `Our AI product discovery workshop runs these checks` → `Our AI discovery workshop runs these checks`.
- F14 L218 bold → `**To do product discovery in two weeks, split 10 days of work into five blocks (frame, listen, check risks, test and decide) and close each with one written output.**` (29 words).
- F15 L234 `the last section of this guide covers when that makes sense.` → `the in-house or partner section below covers when that makes sense.`
- F16 L262 `Try the grid on your own shortlist…` moved to its own paragraph (the paragraph had 5 sentences).
- F17 L266 bold → `**A product discovery checklist is an exit gate: 8 yes/no checks grouped by risk, plus 4 for an AI feature, that must pass before an idea enters the delivery backlog.**` (30 words).
- F18 L268 `An unknown counts as a no, and a no sends the idea back to a test, not to the trash.` → `An unknown counts as a no, and every unknown goes back to a test rather than to the trash. A check that a test failed sends the idea to change or stop, as the auto-replies showed.`; panel rule `unknown = no; a no goes back to a test.` → `unknown = no; retest every unknown.`; `product-discovery-checklist.svg` chip `Unknown = no; a no goes back to a test` → `Unknown = no; retest every unknown` (middle-anchored and shorter, so it still fits; re-rendered).
- F19 takeaway 5 → `After a discovery phase, an idea enters the delivery backlog only through an exit gate of 8 checks, plus 4 for AI, and an unknown counts as a no.`
- F20 L313 `My recommendation: book a weekly customer slot of 30 minutes before the phase ends, so…` → `Before your phase ends, I'd book a weekly customer slot of 30 minutes, so the gate opens onto a habit instead of a handoff.`

## Merge notes with the fact-checker (`product-discovery.facts.md`)

The fact-checker's F-numbers are a separate list. Four of its fixes overlap mine, which are already applied:
- facts F1 (L32): **skip**. QA F2 already fixes the kill count and the "first 5 days" claim.
- facts F2 (L34): its old sentence has changed (QA F3). Apply it as: `The guide below covers the definition, the four risks, the stages, the agile fit, the extra checks an AI feature needs, a two-week plan and an exit-gate checklist. Our [AI product discovery workshop](/services/ai-products/ai-product-discovery-workshop/) ranks AI use cases by user value, data readiness, cost and risk of wrong answers.` This keeps the body order and drops the serial comma.
- facts F4 (takeaway 5) and facts F18 (L266 bold): **skip**. QA F19 and F17 say the same thing.
- facts F15 (L214): apply with `Our AI discovery workshop scores each AI use case…`, not `Our AI product discovery workshop…`. The brief allows the hub head phrase only as anchor text.
- facts F8 (L150 last sentence) and F13 (L194): their old strings still match. QA F8 and F11 only appended text after them.
After applying the fact-checker's fixes, rerun `node scripts/semantic-score.mjs product-discovery`: facts density sits at the 1.2 threshold, so do not delete numbers with units.

## Length decision (~3,600 scorer words)

No trim. The open text (panels and alt text stripped) is about 3,200 words, and RULES/ONPAGE set no word cap. The length comes from the brief's 10 content H2s, and the AI section (≈ 560 words) is the main SERP gap. Every section passes the completeness check, and repetition is low (the hub and other posts are under 1%). Cutting to 2,600 would remove brief points or serpGaps. If the owner still wants it shorter, the only cuts that lose nothing are restated workshop facts. FAQ 2's final clause repeats "1 to 2 weeks" from L162 and L303 (about 10 words). FAQ 3's "for about 2 hours a day" is the 4th mention (6 words).

## Orchestrator items (not post defects)

- backlinkSuggestions (publish day): #1 hub `sections[0]` → post (required), **pending**. #2 pillar FAQ / sections[0] → `#what-changes-in-product-discovery-for-ai-features` (required), **pending**. #3 design-sprint `answer` → `#how-long-should-a-product-discovery-phase-last` (optional), **needs a decision**. Today `grep -rln "/blog/product-discovery/" content/` returns only the post itself.
- The template's TOFU CTA (`app/blog/[slug]/page.tsx` L93–94) offers "the UI/UX design readiness checklist … before any AI product discovery workshop project". The post and the description promise "the free product discovery checklist". The 12 checks are on the page, so "Copy" still works. The emailed asset is a different checklist, though, so the CTA title or the asset should match.
- Site-wide: the FAQPage JSON-LD stores apostrophes as the literal `&#39;` (also 31× in saas-onboarding), which is a template escaping bug.
- `scripts/semantic-score.mjs` L124 tests `>= 1.2` but prints "(≥ 1.0)".

## Guidance for the writer

No open gaps remain after the applied fixes. Lessons for the writer, designer, link builder and researcher are in their learnings files.

## FAIL list (loop 1, all resolved by the applied FIXes)
1. onpage `table-intro` failed (owner rule) → F5, F12.
2. Internal contradictions: kill count, the 12-check gate vs the AI-only lane, the gate rule vs the killed idea, the "last section" pointer → F1, F2, F15, F17–F19.
3. A text panel missed the image's owner labels → F5.
4. Completeness gaps (Jira sentence, continuous fit, wrong-answer example) → F8, F9, F11.

VERDICT: PASS
