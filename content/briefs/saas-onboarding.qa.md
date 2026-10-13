# QA report: saas-onboarding (loop 1, 2026-10-13)

Post: content/blog/saas-onboarding.md · Brief: content/briefs/saas-onboarding.json · Images: public/blog/saas-onboarding/ (7 SVG)
Judged against the 2026-10-13 owner Eleken-voice rule (concrete opening, short paragraphs, question H2s, soft mid-post CTAs, Bottom line before FAQs, 2,000–2,600 words).
Facts and honesty (items 2–3) are left to the fact-checker.

Word count (markdown body, links unwrapped, image alt removed): open text 2,398 (2,181 without FAQs); with the always-visible text panels 2,770. Open text is inside the owner's 2,000–2,600 range.

## Summary

| # | Check | Result |
|---|---|---|
| 1 | Intent and cannibalisation | PASS |
| 4 | Semantic SEO | FIX (F1–F7) |
| 5 | Internal links | PASS (6), FIX (F11) |
| 6 | Images | PASS |
| 6b | Duplication | PASS |
| 7 | Readability | FIX (F8, F9) |
| 7a | Competitor originality | PASS (numeric overlap could not be computed) |
| 7b | Silo and leads | PASS (note on the TradeZella link) |
| 7c | Variety | PASS |
| 7d | Semantic completeness | FAIL (G1–G3) |
| 7e | On-page checklist | FIX (F12; score 95, `internal-in` fails) |
| 8 | Build, seo:check, lint | PASS |

## 1. Intent and cannibalisation: PASS

- Keyword "saas onboarding" (Ahrefs 1,000 / KD 6, orchestrator-accepted source) is informational and planning-stage. The post is a designer's guide, which matches MOFU.
- No other blog post exists in content/blog. The hub (saas-onboarding-design) owns "SaaS onboarding design". The post uses that phrase only as the hub anchor (L48), and it does not re-answer the hub's 6-part list, 4-step process table, tours-vs-tasks table, mistakes cards or cost section. Its 4-step mention at L272 is the leadAngle summary.

## 4. Semantic SEO: FIX

- Bold answer under every content H2: PASS. All 11 are one sentence of 17–29 words.
- Density: 21 exact "SaaS onboarding" uses in 2,398 open words = 1.75% word share. PASS.
- Entities: 25/25 brief entities appear in open text, and every brief n-gram appears at least once. Attribute coverage passes the onpage script, but "day-7 return rate" is never explained (see G2).
- Abbreviations: SaaS, B2B (L26), CSM (L56), SSO (L76; L72 is inside the panel), AWS (L50), PLG (L144), NN/g (L184) and UX (L242) are all expanded on first open use. PASS.
- Boolean FAQs: "Do you need…" and "Is SaaS onboarding…" both start with "No." PASS.
- Banned phrases and hedges (might/may/could/perhaps): 0 hits. PASS.
- `vs` grep: only L52, the H2 "User vs customer onboarding: which are you fixing?", which has the head-noun frame. PASS. Digit-start grep: 0. HTML comments: 0. "Why/Because" check: no Why H2s.
- Meta, measured on the built HTML: title/H1 67 chars; metaTitle 59; description 157, ending in a next step that matches the funnel CTA ("Then book a free consultation."); first meta keyword "saas onboarding"; og:title and og:description carry the keyword. PASS.
- Keyword sentences: L26 "a hypothetical … (SaaS) trial and its SaaS onboarding log" is an ordinary noun compound (the writer's 10-13 lesson gives it as the good example). PASS. The H1 and the bold answers read naturally.
- Logic and grammar FIXes:

**F1 (L98, process bold answer).** Stage 5 sits after the finish line, so it cannot "shorten time to first value". Sign-up also cannot "get cut". Replace:
`**The SaaS onboarding process runs in five stages, from sign-up to a second-session prompt, and each stage either shortens time to first value or gets cut.**`
with
`**The SaaS onboarding process runs in five stages: four lead to the activation event, a fifth brings the user back, and any step serving neither gets cut.**` (27 words)

**F2 (L82, "Where does it end" bold answer).** "Every screen before it is onboarding" conflicts with the post's own definition (L40, "plus the nudges that bring them back for a second session") and with stage 5, which the flow image draws after the finish line. Replace:
`**SaaS onboarding ends at the activation event: the first action that predicts a user will stay, so every screen before it is onboarding and is judged by it.**`
with
`**SaaS onboarding ends at the activation event, the first action that predicts a user will stay, and every screen before it is judged by whether users get there.**` (28 words)
Then add as the first sentence of L86: `Only one stage comes after it: the prompt that brings an activated user back for a second session.`

**F3 (L278, Bottom line).** "cuts every step that doesn't lead to it" contradicts the post's own method, where 5 of 11 steps move later rather than being cut (L149, L166, sort image). "Fix the screens first, then the guidance, then the emails" also contradicts the audit rule "fix the earliest failing stage first" (L240, L261, audit image header): a failing checklist (stage 4, guidance) comes before a failing member path (stage 5, screens). Replace L278 with:
`**Good SaaS onboarding starts from the activation event and moves or cuts every step that doesn't lead to it.** Fix the earliest stage that fails, and inside that stage fix the screens before the guidance and the emails.`

**F4 (L272, dangling participle; repeats the 10-08 lesson).** ", judged by activation rate…" attaches to the price, not to the work. Replace:
`Here's [what an onboarding redesign costs](/services/saas-products/saas-onboarding-design/#how-much-does-saas-onboarding-design-cost): $15,000 to $45,000, judged by activation rate, time to first value and day-7 return rate.`
with
`Here's [what an onboarding redesign costs](/services/saas-products/saas-onboarding-design/#how-much-does-saas-onboarding-design-cost): $15,000 to $45,000. We judge the work by activation rate, time to first value and day-7 return rate.`

**F5 (L56, n-gram sentence contradicts the table under it).** The table gives customer onboarding one owner (the CSM), so "customer onboarding usually has two owners" reads as false. Replace:
`B2B SaaS customer onboarding usually has two owners: the product team and a customer success manager (CSM), who runs kickoff, training and go-live.`
with
`B2B SaaS customer onboarding usually runs on two tracks with two owners: the product team's screens and a customer success manager (CSM), who runs kickoff, training and go-live.`

**F6 (L138, n-gram sentence contradicts the swimlane and the post's own definitions).** The swimlane splits at the team invite after first value, not "after setup". The admin/member split is also in-product user onboarding, not the CS-led customer track. Replace:
`In a B2B product, the SaaS customer onboarding process flow splits into two tracks after setup. Sketch your five stages and write the drop-off number under each.`
with
`In a B2B product, the SaaS customer onboarding process flow runs beside these five stages, and the in-app path itself splits at the team invite: admins finish setup, invited members skip it. Sketch your five stages and write the drop-off number under each.`

**F7 (L302, FAQ 5, universal claim).** L54 says "most B2B SaaS products need both". Replace `B2B products need both, with the handoff screens designed.` with `Most B2B products need both, with the handoff screens designed.`

## 5. Internal links: PASS (count), FIX (F11)

- 6 contextual links, inside the link builder's MOFU range of 6–10: hub (L48, about word 220, early), hub#cost (L272, near the end), /case-studies/tradezella/, /services/saas-products/saas-product-redesign/ (the one cross-hub link), /services/saas-products/ (pillar), /contact/. Anchors vary.
- Every target exists in the drafts build, and the `id="how-much-does-saas-onboarding-design-cost"` fragment is present on the hub.
- The hub cap of 2 is respected. The brief's "required" #tours and #process links were dropped by the link builder under the cap. That is accepted, because L197 covers tours vs tasks in one sentence and L272 gives the process in hub facts.

**F11 (L280, CTA wording).** The contact form has no file upload, only a description textarea (components/forms/LeadForm.tsx L92), so the reader cannot send a recording as such. Replace `[send us the recording](/contact/)` with `[send us a link to the recording](/contact/)`.

## 6. Images: PASS

- All 6 inline images plus the cover exist (5–9 KB SVG each). Each inline image is a `figure` with a `figcaption`, sits right after the paragraph it explains, and has descriptive alt text whose caption names the same thing.
- I served a SHOW_DRAFTS build from a scratch copy, hid fixed and sticky elements with `visibility: hidden` and scrolled each image into view.
  - Desktop 1440: inline images render at 540px for an 800 viewBox (×0.675), so 26px text renders at about 17.6px.
  - Mobile 390: inline images render at 354px (×0.44), so text renders at about 11.5px. That is acceptable, because the ≥ 12px rule is for desktop.
  - The cover renders 1224×466 at 1440 and 354×199 (object-fit: cover) at 390. The centred title is not cropped at 390.
- Spelling: every SVG label was checked, with no errors. There are no third-party logos or brand assets; Notion and Slack appear only in text.
- Image logic:
  - The straight-line sort comes to 4 + 5 + 2 = 11, matching L152 and the caption.
  - In the swimlane, the invite comes after first value, matching L205.
  - The flow image puts the finish line between stages 4 and 5. F1 and F2 align the prose to this.

## 6b. Duplication: PASS

Each of the 5 image+panel pairs is consistent: every image label is in its panel and every panel item is in the image, with none dropped. The open prose does not list the same items a third time; L76 names the bridge screens once as the section's key fact.

## 7. Readability: FIX

- US English (favor, personalizing, behavior). Paragraphs are 1–4 sentences except one:

**F8 (L78, 5 sentences).** Replace `Self-serve trial? Read on. Kickoff call for every account? Jump to admins and members.` with `Self-serve trial? Read on. If every account starts with a kickoff call, jump to admins and members.`

**F9 (FAQ 1, L286).** The answer opens with a subjectless fragment, which fails as a standalone snippet. Replace `As long as it takes a new user to reach your activation event, and not one screen longer.` with `SaaS onboarding should take as long as a new user needs to reach your activation event, and not one screen longer.`

**F10 (L274, tense).** "When we redesigned…, 'no onboarding guide' sat beside…" places the problem during the redesign. Replace `When we redesigned [the TradeZella trading journal](/case-studies/tradezella/), "no onboarding guide" sat beside a crowded interface and web and mobile apps that behaved differently.` with `Before we redesigned [the TradeZella trading journal](/case-studies/tradezella/), "no onboarding guide" sat on its problem list beside a crowded interface and web and mobile apps that behaved differently.` (Fact-checker: confirm against tradezella.md.)

- 5-gram overlap:
  - Hub: 1.2%. The shared 5-grams are hub facts (prices, weeks, metric names, "the design team of tkxel").
  - Pillar: 0.2%. Saas-product-redesign hub: 0.0%. About: 0.4%. Home: 0.1%. All are below 12%.
  - No other post exists in content/blog on this site. The fingerprint posts belong to the sister site and are not in this repo, so post-to-post overlap could not be computed.

## 7a. Competitor originality: PASS (numeric overlap not computable)

- `beats` = appcues.com/blog/saas-user-onboarding. WebFetch returned ENOTFOUND, both for that URL and for its current URL (/blog/crm-software-user-onboarding, "SaaS Onboarding Examples: Lessons from 20+ Top Products", June 2026).
- According to the search snippets, the beats page is a product-by-product roundup of 8 flows (Asana, HubSpot, Notion…). The post's structure (definition → vs → end point → flow → method → patterns → roles → emails → audit → routing) does not mirror it.
- One example is shared: Notion. It appears once, inside the pattern section, cited to a different Appcues page (GoodUX) and described as a pattern. That is allowed by the brief and not mirrored.
- All 7 serpGaps are covered with substance: design work behind the flow; user vs customer onboarding plus the handoff; choosing the activation event from retained cohorts; admin/member, invite timing and SSO; email-to-step mapping; when an overlay cannot help; the benchmark caveat.

## 7b. Silo and leads: PASS

- services[0] = saas-onboarding-design, the correct hub. funnel = mofu, which matches the planning-stage SERP. serviceSupport 4 meets the MOFU minimum of 4.
- The MOFU template finds no case study for this hub, so it falls back to the consultation CTA ("Want senior designers to handle this for you? … $15,000–$45,000"). It does not render a misleading "see how we did this" block.
- The leadAngle is delivered without a hard sell: the pain CTA at L168, the routing and hub facts at L272, and the stopwatch/recording close at L280. "free consultation" appears once in the body.
- Note: the DOWN link goes to TradeZella, a saas-product-redesign case study, not one for this hub. RULES.md expects case studies of the same service. It is used only where the post routes to the sibling service and quotes only the problem statement, as the writer's 10-13 lesson says. This is accepted, but the owner should know.

## 7c. Variety: PASS

The intro is a timed first-run log, which is new against every fingerprint. The CTA angle (stopwatch, then the recording) is new, and the visual types (split card with bridge, three-lane sort, anatomy, swimlane, stage audit grid) are new. Only the type "Guide" repeats. No reused intro or closing; the about.md offer clause is not used.

## 7d. Semantic completeness: FAIL

Three gaps; see the writer guidance. Every other H2 follows answer → detail → example → next step. The intro promises match the body, and each takeaway is backed by a section once F3 is applied.

**F13 (routing omission, L269–270).** Audit items 9–10 (invites after first value, members skip setup) fit neither routing bullet, although both are screen and flow problems. Replace:
`- **Failures in sign-up, setup or empty states:** the screens need redesigning, and no overlay fixes that.`
with
`- **Failures in sign-up, setup, empty states or the member path:** the screens and flows need redesigning, and no overlay fixes that.`

## 7e. On-page checklist: FIX

The draft build is noindex, so `npm run onpage -- /blog/saas-onboarding/` returns "route not found or noindex". I ran the script on a scratch copy of the SHOW_DRAFTS build with only the robots meta stripped from this page.

- Score **95**. Failed: `internal-in: ≥ 3 pages link here (has 0)`.
- keyword-volume, meta-keywords-keyword, og-keyword, title/desc/h1-keyword, entity-coverage, attribute-coverage, entity-salience, no-hidden-content, figure-caption, h2-then-text and table-intro all pass.
- Manual items:
  - E-E-A-T: faizan-khan with umar-sarwar, LinkedIn profiles present.
  - Snippets: bold answers ≤ 30 words.
  - External sources: 5, all linked.
  - Images: under 10 KB each.
  - The keyword is in 9 of 12 H2s.

**F12 (orchestrator, before publish).** Apply the brief's backlinkSuggestions to clear `internal-in`. Status of each:

1. Hub `sections[0].body` (content/services/saas-onboarding-design.json). **Not applied.** After "SaaS onboarding design removes those obstacles and puts the first real result in front of the user." add: `Our guide to <a href="/blog/saas-onboarding/">how SaaS onboarding works from sign-up to first value</a> walks through the same path screen by screen.`
2. Hub FAQ "How do you measure SaaS onboarding success?" (optional in the brief). **Not applied.** New answer: `<p>By activation rate, time to first value and day-7 return rate, each measured before and after the new onboarding ships. Here is how to <a href="/blog/saas-onboarding/#where-does-saas-onboarding-end">choose the activation event</a> those numbers depend on.</p>` The `#where-does-saas-onboarding-end` id exists in the built page. Optional is not a skip: apply it or record the reason.
3. content/pillars.ts saas-products `sections[0].body`. **Not applied.** After "Products that lose trial users in the first days get <a …>SaaS onboarding design</a>." add: `Our <a href="/blog/saas-onboarding/">SaaS onboarding guide</a> includes a 12-point audit to find where they drop off.`

Check: `grep -rln "/blog/saas-onboarding/" content/ | grep -v briefs` currently lists only the post itself.

## 8. Build: PASS

- `SHOW_DRAFTS=1 npm run build`: exit 0.
- `npm run seo:check`: 53 pages, 0 errors, 0 warnings.
- `npm run lint`: exit 0. The jsx-ast-utils "TSNonNullExpression" messages are tool notices, not errors.
- Housekeeping: during this run another agent rebuilt the shared `out/` without SHOW_DRAFTS, so `out/` now holds the production build and has no `out/blog/saas-onboarding/index.html`. My image and onpage checks used my scratch copy of the drafts build.

## Guidance for the writer

- **G1 [H2 "What does the SaaS onboarding process look like?" → the five H3s, L118–136]**
  - What is missing: each H3 is 1–2 sentences. H3 5 has one sentence, and H3 4 opens with a fragment ("A real task with real or sample data, not a menu tour."). None gives the why or an example, so the headings are thin under the owner's completeness rule.
  - What to add: to each H3, one "why" clause and one concrete line from the post's own scheduling SaaS. Do not restate the stage metrics; the image and its panel carry those.
    - Sign-up: every required field is one more chance to quit. The scheduler asks only for a work email or Google/Microsoft sign-in.
    - Welcome question: "What will you book first: sales calls, interviews or support sessions?" preloads the matching meeting type.
    - Essential setup: the calendar connection stays because booking cannot work without it. Availability starts from default hours.
    - First-value task: make it a full sentence. Say why a guided task beats a tour (the user ends with their own result). Example: the booking link arrives pre-copied with a preview of the booking page.
    - Second-session prompt: say why activation alone does not make a habit. Example: on return, the user sees the booked meeting and one next step. Do not reuse the email table's invite row.
  - Target length: 35–45 words per H3 (about +130 words).
- **G2 [H2 "Where does SaaS onboarding end?", L84]**
  - What is missing: "day-7 return rate" is a brief attribute and one of the hub's three metrics, yet the open text never says what it is. It appears only in L272 and in the panels.
  - What to add: after the time-to-first-value sentence, `**Day-7 return rate** is the share of new sign-ups who come back for another session a week later; it shows whether first value turned into a habit.` Keep the hub's metric name exactly.
  - Target length: 1 sentence, about 25 words.
- **G3 [H2 "How do you cut a SaaS onboarding flow to a straight line?", L146–150]**
  - What is missing: the bold answer and the image use three labels (keep, later, cut), but the three tests only lead to "stays" or "later". No test tells the reader when to cut, though 2 of the 11 example steps are cut.
  - What to add: change the lead-in to "Run four tests on every step:" and add a fourth bullet: `- **Does it help the user at any point before upgrade?** If not, cut it, the way an intro video or a job-title field only sales reads gets cut.`
  - Target length: 1 bullet, about 20 words.

Word budget: G1–G3 add about 175 words, which takes open text from 2,398 to about 2,575. That is under the 2,600 cap, so trim nothing that the fact-checker fixed.

## FAIL list

- G1: process H3s are thin (completeness).
- G2: day-7 return rate is never explained in open text (attribute without substance).
- G3: there is no "cut" test in the straight-line method (the framework is incomplete).

FIX list for the orchestrator: F1–F13 above. F12 must be applied before publish to clear onpage `internal-in`.

VERDICT: FAIL
