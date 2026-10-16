# QA report: user-onboarding-automation (loop 1, 2026-10-16)

Post: `content/blog/user-onboarding-automation.md` (draft, `qa: pending`, not touched). Brief: `content/briefs/user-onboarding-automation.json`. Visuals: `public/blog/user-onboarding-automation/` + `.visuals.json`.
All builds ran in scratch copies (tar of the repo + `cp -al node_modules`), so the shared `out/` was not touched. The 29 QA FIXes below were scripted (each old string had to match exactly once), applied to the scratch copy, rebuilt and re-scored, then applied to the repo. The repo post and rule-sheet SVG are byte-identical to the verified scratch copy. The fact-checker's 13 fixes (`.facts.md`) were tested on a second scratch copy on top of mine. They are NOT applied in the repo; the orchestrator applies them (see Merge notes).

## Gate results

| Gate | Before fixes | After QA fixes (repo now) | After QA + fact-check fixes (scratch only) |
|---|---|---|---|
| `SHOW_DRAFTS=1 npm run build` | 0 errors | 0 errors | 0 errors |
| `npm run seo:check` | 0 errors, 0 warnings; feed 0 errors | same | same |
| `npm run lint` | 0 errors (1 pre-existing warning, scripts/onpage-audit.mjs L77) | same | same |
| `npm run onpage -- /blog/user-onboarding-automation/` | 100, failed: none | 100, failed: none | 100, failed: none |
| `node scripts/semantic-score.mjs user-onboarding-automation` | 100/100 | 100/100 (facts 1.3/100 words) | 100/100 |

## Checklist

| # | Item | Result | Notes |
|---|---|---|---|
| 1 | Intent & cannibalisation | PASS | Commercial-investigation/how-to "user onboarding automation" (Ahrefs 100, orchestrator-accepted source). No other title, H1, keyword or metaTitle in `content/` targets it. The post rules out employee onboarding, financial-services client onboarding and tenant provisioning in H2 1. 5-gram overlap: saas-onboarding 0.62%, product-discovery 0.32%, hub JSON 1.33%. It does not redefine SaaS onboarding or the activation event, and it links the sibling for both. |
| 4 | Semantic SEO | PASS after fixes | Every H2 has a one-sentence bold answer of 27–30 words. The keyword is in the title (69), metaTitle (59, keyword first), description (156 on the built HTML, ending on "Then book a free consultation." = MOFU CTA), first meta keyword, H1 and first 60 words. Density 0.93% (14 uses × 3 / 4,456 words). That sits at the low edge of "about 1–2%" but inside the brief's 11–15 uses, and onpage passes. Abbreviations are expanded on first open-text use. Boolean FAQs start with No. No banned phrases and no might/may/could/perhaps. The keyword+noun hits ("user onboarding automation rule") are a standard compound ("automation rule"), not a stacked location keyword, so they pass. There are no `vs` hits in prose, no digit-led sentences and no HTML comments. |
| 5 | Internal links | PASS | 7 body links to 6 targets, all built, both fragments exist: hub (intro, about word 150), sibling, sibling#emails, chatbot hub (the 1 cross-hub link), hub#cost (the late UP link), pillar, /contact/. Anchors are varied. The second Bottom-line hub link was dropped for the 2-link hub cap (recorded in `related.droppedInternalMarkers`). External links went from 9 to 5 after F1–F4 (the cap fallback). |
| 6 | Images | PASS after fix | 6 inline SVGs + cover exist in `public/` and in the build. Landscape 1200×750, brand palette, embedded Plus Jakarta Sans, min text 20px (12.7px at the 760px column). Cover: no text clipped at 390 (16:9) or 1440. Alt texts are meaningful, and captions share nouns with the alt. No third-party assets. Spelling was checked label by label. Every tree/flow path was walked (matrix axes and quadrants are consistent). Fix F11: the rule-sheet subtitle said "9 columns" and its header said "Column", though the sheet draws 9 field rows and one column per rule. |
| 6b | Duplication / image vs panel | PASS | Each image has an always-visible `astext` panel, and the labels were ticked off one by one. Matrix, blueprint, relay, ladder and rule sheet match their panels. The holdout image leaves out the panel's "What it tells you" column (the panel is a superset). Per the orchestrator this is accepted. All 6 rows and warning signs are present, so no item is dropped or changed. Open prose does not relist image items. |
| 7 | Readability / US English | PASS after fixes | 11 open-text paragraphs had 5–8 sentences. All were split at existing sentence boundaries (F15–F25, F27), and the counter now reports 0. Filler "which is 2 weeks of working days" was removed (F13). A run-on "…by product; pause any rule…" was split (F14). US spelling passes (seo:check, SVGs). No reused intro or closing. |
| 7a | Competitor originality | PASS (note) | `beats` (moxo.com/blog/user-onboarding-automation) now **301s to /blog/top-onboarding-automation-software**, an employee-onboarding software listicle (Rippling, BambooHR, Workday…). Fetched with curl: 5-gram overlap 0.00%, and its heading order (15 tools, feature comparison, checklist) is not mirrored. The figure is not comparable because the page changed topic (researcher lesson filed). All 8 serpGaps are covered with substance: disambiguation (H2 1), the vendor-neutral automate/assist/human rule (H2 2), rule anatomy + missing events (H2 3), handoff design with PQL and note (H2 6), holdout + rule metrics (H2 9), CAN-SPAM/Gmail/WCAG (H2 4–5), failure modes (H2 10), PAIR + AI handoff (H2 7). |
| 7b | Silo & leads | PASS | services[0] = saas-onboarding-design (right hub). MOFU matches the SERP (how-to/tool-planning); service-support 4 ≥ MOFU minimum 4. The template CTA: `relatedCaseStudies()` returns none for this hub, so the MOFU branch falls back to "Want senior designers to handle this for you? … Get a free consultation" (checked in the built HTML). That matches the closing ("book a free consultation"). It promises no case study. leadAngle is delivered in H2 10 (patch column → hub facts + #cost link) and the Bottom line, plus a soft mid-post line at the end of H2 4. No hard sell. |
| 7c | Variety | PASS | Compared with fingerprints (saas-onboarding, product-discovery, mobile-app-design-agency-vs-freelancer). The misfiring-rule intro is a new style. H2 frames, section order, visual types (matrix, blueprint, relay, ladder, rule sheet, holdout) and CTA angle (patch list → consultation) all differ; only type "Guide" repeats. The closing reply-time line is the site-standard offer wording, not a reused closing. |
| 7d | Semantic completeness | PASS after fixes | Every H2 runs bold → how/why → example/number/step, and every section ends with a next step or bridge. Brief questions, entities (25/25), n-grams (16/16), skip-grams (14/14) and lexical items (26/28) are covered. The NN/g mobile-tutorial study was dropped, which the brief allows when unconfirmed. Logic contradictions fixed: "never from a before-and-after chart" vs the hub's "compare activation before and after" (F5 + F28); the 7-day retire rule for "every guide" vs the checklist "visible for the whole trial" (F6); rule-sheet row/column orientation in prose, panel and SVG (F7–F12, F29). The intro's promise list matches the body, and each takeaway maps to a section. |
| 7e | On-page checklist | PASS | Score 100, nothing failed (keyword-volume, meta-keywords-keyword, og-keyword, entity coverage/salience, no-hidden-content, figure-caption, h2-then-text, table-intro all pass). Manual items: FAQPage JSON-LD holds only each answer; the DOM order puts the answer before the inline CTA; tables have an intro `<p>` + `Table:` caption; steps are `ol`; no skipped heading levels; `<strong>` only on answers and list labels; first-person voice by Talha Saleem (home.ts: Senior UI/UX Designer). |
| 8 | Build | PASS | See the gate table. |

## FIXes applied by QA (exact old → new, now in the repo)

All in `content/blog/user-onboarding-automation.md` unless noted. Script: each old string had to match exactly once.
- F1 (ext. cap) `Nielsen Norman Group (NN/g) splits proactive help into [push and pull revelations](https://www.nngroup.com/articles/help-and-documentation/).` → `In its article on help and documentation, Nielsen Norman Group (NN/g) splits proactive help into push and pull revelations.`
- F2 (ext. cap) `- **[SC 2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html):** a control that receives keyboard focus` → `- **SC 2.4.11 Focus Not Obscured (Minimum):** in the W3C's Understanding WCAG 2.2 notes, a control that receives keyboard focus`
- F3 (ext. cap) `A bulk sender sends [close to 5,000 or more messages to personal Gmail accounts](https://support.google.com/mail/answer/14229414?hl=en) in 24 hours, and that status is permanent once reached.` → `Google's sender guidelines FAQ defines a bulk sender as one that sends close to 5,000 or more messages to personal Gmail accounts in 24 hours, and that status is permanent once reached.`
- F4 (ext. cap) `[TechTarget defines a PQL](https://www.techtarget.com/…/product-qualified-lead-PQL) as a person` → `TechTarget defines a PQL as a person`
- F5 `read lift from the holdout, never from a before-and-after chart.` → `read lift from the holdout, not from a before-and-after chart alone.` (then F28)
- F6 `In this example, it stops after the user succeeds, after a number of dismissals your team picks, or 7 days after the guide first appears.` → `In this example, a tooltip or tour stops after the user succeeds, after a number of dismissals your team picks, or 7 days after it first appears; the checklist retires at activation.`
- F7 `One row holds one rule, and its last column asks whether the rule is patching a screen.` → `Each rule fills one column, and its last row asks whether the rule is patching a screen.`
- F8 `Fill in one row per live rule and count the patches.` → `Fill in one column per live rule and count the patches.`
- F9 panel intro `This table shows each column of the rule sheet…` → `This table shows each field of the rule sheet…`
- F10 panel header `| Column | Rule 1: …` → `| Field | Rule 1: …`
- F11 `onboarding-automation-rule-sheet.svg`: subtitle `9 columns, 2 example rules, room for yours` → `9 fields, 2 example rules, room for yours`; header cell `Column` → `Field` (re-rendered, fits)
- F12 same SVG aria-label `worksheet with nine columns,` → `worksheet with nine fields as rows,` (and the same alt in `.visuals.json`)
- F13 `You must honor an opt-out request within 10 business days, which is 2 weeks of working days.` → `You must honor an opt-out request within 10 business days.`
- F14 `…because they vary by product; pause any rule whose dismissals or complaints climb.` → `…because they vary by product. Pause any rule whose dismissals or complaints climb.`
- F15–F25, F27 paragraph splits (a blank line inserted at an existing sentence boundary): after "…not the setup screen." (L28), "…since 2017." (L30), "…the user's pace." (L105), "…Mixpanel or Amplitude." (L107), "…by its primary purpose." and "…within 10 business days." (L163), "…permanent once reached." (L165), "…first-hand experience." (L173), "…in 30 seconds." (L194), "…windows fluctuate." (L252), "…at the top of this guide." (L294), "…again within 14 days." (L280)
- F28 (merge with fact-check F12) `read lift from the holdout, not from a before-and-after chart alone.` → `read the rules' lift from the holdout, not from a before-and-after chart alone.`
- F29 (merge with fact-check F11) SVG `<title>` `…one row per rule, with a patch-or-fix column` → `…one column per rule, with a patch-or-fix row`

## Merge notes with the fact-checker (`user-onboarding-automation.facts.md`, VERDICT: FAIL)

Tested together on scratch copy `qa-fc`: all 13 fact-check fixes match exactly once on the post as it is now, and build, seo:check, lint, onpage 100 and semantic 100 stay green.
- **Skip (already applied by QA):** F11, all parts. The L219 wording differs ("Each rule fills one column, and its last row asks…"), so FC's old string no longer matches; the meaning is the same. L228, L232, L246, SVG subtitle, header and `<title>` are done. F12 is applied as FC's exact text (via F5 + F28).
- **Apply as-is (old strings still match):** F1 (L30 and L294), F2 (48 hours), F3, F4, F5, F6, F7, F8, F9, F10, F13.
- FC claim 25 ("2 weeks of working days" TRUE) is moot: QA removed it as filler (F13).
- FC's brief note: correct the brief EAV "process it within 2 days" → 48 hours.

## Orchestrator items (publish day)

- `backlinkSuggestions` status. #1 (hub FAQ "Can onboarding tools like Appcues or Userpilot be used?" → "which onboarding moments to automate") is required and NOT yet applied: add it on publish day. #2 (saas-onboarding.md L280 bullet → "how to design user onboarding automation") is required and NOT yet applied: add it on publish day. Neither can go live before the post, or it becomes a broken link. #3 (chatbot hub mistake card) is skip, per the brief (cross-silo).
- Researcher: replace the stale `beats` URL (it redirects to another topic).

## Guidance for the writer (non-blocking, optional polish)

- [H2 5 relay panel row 3 / H2 6 ladder rung 2] The relay sends anyone "stuck on the same error for 10 minutes" to **a person**, while the ladder's rung 2 sends the same signal to "a help-center article or chat" and only high-fit admins to a CSM. Make rung 2 read "a help-center article and a chat with support appear…" (panel + SVG; the designer redraws the line), so a person is always one click away, as the relay says. About 10 words.
- [FAQ "How does CAN-SPAM treat onboarding emails?"] Optional: add one FTC-sourced sentence from the brief EAV: "A subject line that reads like an ad can also make the email commercial." About 15 words.
- [Density] At 0.93%, one more natural use of "user onboarding automation" (for example in the H2 8 lead sentence) would bring it to about 1%. Optional.

## Lessons filed
- `learnings/semantic-content-writer.md`: paragraph sentence cap, never/every vs hub, row/column orientation, padded unit facts.
- `learnings/content-visual-designer.md`: transposed-sheet orientation words across subtitle/header/title/aria-label/alt.
- `learnings/content-link-builder.md`: apply the external-cap fallback yourself.
- `learnings/seo-keyword-researcher.md`: `curl -I` the `beats` URL for redirects.
- `learnings/content-qa.md`: rerun the paragraph counter after fixes; test the combined FC + QA fix set; check `beats` redirects.

VERDICT: PASS

# QA loop 2 re-check (2026-10-16, after fact-check F1–F10 and F13 were applied)

Scope: structure/layout, bold answers, paragraph lengths, image lead-ins, contradictions, US spelling and links. The gates ran on a fresh scratch copy (`scratchpad/qa-l2`, tar + `cp -al node_modules`), so the shared `out/` was not touched.

| Check | Result | Notes |
|---|---|---|
| Bold answers | PASS | 11 H2s, each one sentence, 22–30 words. |
| Paragraphs ≤ 4 sentences | PASS after fix | L181 had 5 sentences after the merge. QA fix L2-F1 split it (below). The counter now reports 0. |
| Image lead-ins | PASS | All 6 figures have their lead-in sentence directly above them (L63, L88, L150, L194 = FC F7 text, L240, L277). Every `astext` panel and table has its intro + `Table:` line. |
| Contradictions | PASS | Rule sheet orientation (column per rule / row per field) is consistent across the prose (L237, L264), the panel header "Field", the alt and the title. The holdout wording (L272) is consistent with hub L274. Step 6 (1 month, 14-day cohorts) agrees with Braze L270 and the outcome reads at L300. CAN-SPAM L171–L173 agrees with FAQ 4. The 48-hour Gmail unsubscribe (L179) is consistent. The relay/ladder 10-minute note from loop 1 stays non-blocking. |
| US spelling | PASS | No British forms in the post; seo:check US English passes. |
| Links | PASS | Unchanged from loop 1: 7 internal body links (hub, sibling, sibling#emails, chatbot hub, hub#cost, pillar, /contact/). The external links are the FTC, Gmail sender guidelines, the WCAG 1.4.13 page, PAIR and Braze (5). |
| Gates | PASS | `SHOW_DRAFTS=1 npm run build` 0 errors; `seo:check` 0 errors, 0 warnings, feed 0 errors; `lint` 0 errors (pre-existing warning onpage-audit.mjs L77); `onpage` 100, failed none; `semantic-score` 100/100. |

## Fix applied by QA in loop 2

- L2-F1 (L181, paragraph cap): `That protects the password resets and invites that must arrive. A user who` → `That protects the password resets and invites that must arrive.` + blank line + `A user who` (split at the existing sentence boundary; no wording changed).

VERDICT: PASS
