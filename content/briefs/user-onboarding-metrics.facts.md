# Fact-check: user-onboarding-metrics

> **Loop 1 below is SUPERSEDED by Loop 2 (end of file).** Kept for the record only.

Post: `content/blog/user-onboarding-metrics.md` (draft, 2026-10-24). Checked 2026-10-24.

**Method note.** WebFetch failed with `getaddrinfo ENOTFOUND` for every external host (research.google.com, library.gv.com, support.google.com, www.nngroup.com). I verified each source with a domain-restricted WebSearch that returned the exact URL the post uses plus supporting snippets. For library.gv.com the search returned the post's path with a Medium `?gi=` tracking parameter, which I treat as the same URL. Site facts were checked against the repo files named in each row.

## Claims

| # | Claim (line) | Verdict | Source / evidence |
|---|---|---|---|
| 1 | HEART = Happiness, Engagement, Adoption, Retention, Task success; "five categories of user-centered metrics"; 2010 Google paper by Kerry Rodden, Hilary Hutchinson and Xin Fu (L93) | TRUE | https://research.google.com/pubs/archive/36299.pdf (title "Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications", CHI 2010; returned by a search limited to research.google.com). Link resolves in search. |
| 2 | The GV Library article advises choosing only the most important categories for your project, not all five (L93) | TRUE (paraphrase) | https://library.gv.com/how-to-choose-the-right-ux-metrics-for-your-product-5f46359ab5be (Kerry Rodden). The article says you don't need to use all five categories and should pick the ones that fit your project. An exact-phrase search for "most important for your project" returned nothing, so keep this as a paraphrase and never put it in quotation marks. |
| 3 | The paper's Goals-Signals-Metrics process runs in that order (L95) | TRUE | 36299.pdf (goals, then signals, then metrics). |
| 4 | NPS and CSAT belong under Happiness (L99, FAQ L253 "HEART files both under Happiness") | TRUE | 36299.pdf (Happiness covers attitudinal survey measures such as satisfaction). The GV article gives net promoter score as a Happiness example. |
| 5 | Author's HEART chain: the goal, signal and metric; "I lean on Adoption, Task success and Retention"; narrowed to 3 numbers (L93–97) | TRUE (method) | Stated as the author's method. The count of 3 (activation, time to value, first-week retention) matches L97. |
| 6 | GA4 funnel exploration: closed means users must start at the first step; open means they can join at any step (L123) | TRUE | https://support.google.com/analytics/answer/9327974?hl=en: "in a closed funnel, users must enter the funnel in the first step"; open funnels "insert the user in the funnel with their first qualifying action". |
| 7 | GA4: "A user who misses a step falls out of the funnel and is not counted in any later step." (L123) | TRUE | Same page: "If the user misses a step, they fall out of the funnel and aren't counted in any subsequent steps." The post's sentence is close to Google's wording, but the link credits the source, so it is acceptable. |
| 8 | Mixpanel, Amplitude and GA4 build funnels; Microsoft Clarity adds session recordings (L125, FAQ L249) | TRUE | Common product capabilities; Clarity recordings confirmed at https://learn.microsoft.com/en-us/clarity/session-recordings/recordings-overview. |
| 9 | FAQ: "Onboarding tools such as Appcues, Userpilot or Pendo report on their own guides and checklists, not on the screens underneath." (L249) | WRONG | Pendo's support docs say Pages and Features are tagged in the app's own UI and analyzed retroactively (https://support.pendo.io/hc/en-us/articles/360061487572-Low-code-tracking-versus-Track-Events). Userpilot sells product analytics with funnels, retention and session replay (https://userpilot.com/product/product-analytics/). Fix F1. |
| 10 | NN/g lists analytics among the quantitative research methods, "the methods that put a number on a product's usability" (L152) | TRUE | https://www.nngroup.com/articles/quantitative-user-research-methods/ ("Quantitative User-Research Methodologies: An Overview"). It lists web/app analytics and says quantitative methods put a numeric value on a product's usability. It also pairs analytics with qualitative research for the "why", which supports "where users leave, not why". |
| 11 | "I watch 10 to 20 session recordings" (L152) | TRUE (method) | First-person method, not a study figure. |
| 12 | "In week 1 we read this same funnel … review recordings … In week 2 we interview 5 to 8 people who signed up recently, some activated and some lost." (L156) | TRUE | saas-onboarding-design.json L58–59: step 1 is Funnel review (1 week) and step 2 is User interviews (1 week) with 5 to 8 recent sign-ups, activated and lost. Week 2 follows from the order of the steps and their 1-week lengths. |
| 13 | "Our onboarding process runs 4 steps over 3 to 6 weeks, and in its last week we help your team set up a split test where traffic allows and compare activation from before the release with activation after it." (L235) | TRUE | Hub L56 ("4 steps over 3 to 6 weeks"). L61: the "Release and measure (1 week)" step will "help set up an A/B test where possible and compare activation before and after". |
| 14 | "That backward walk is how SaaS onboarding design starts at ui-ux.agency" (L28) | WRONG (overstated) | The hub's first step is a funnel review of drop-off "from sign-up to first value" (L58). Walking backward from trial-to-paid conversion is the author's method, and no site page says the service does it. Fix F2. |
| 15 | "ui-ux.agency, the design arm of tkxel … a team with 200+ products designed since 2017" (L28) | TRUE | about.md L9 ("Our designers have worked on more than 200 digital products since 2017"); home.ts L24–25. Stated as a team figure, not about the author. |
| 16 | "The day-7 return rate we track in onboarding projects, a session exactly 7 days after sign-up, is the stricter member of the first-week retention family." (L83) | WRONG | The hub FAQ (L99) names "day-7 return rate" but does not define it. No site file gives "a session exactly 7 days after sign-up". The brief's line 446 wrongly calls that the hub's definition (stale record). The definition also falls outside the post's own window: if the sign-up day is day 1 (the table's "days 2 to 7"), a session 7 days after sign-up lands on day 8, which is outside first-week retention, so it cannot be its "stricter member". Fix F3, together with F4. |
| 17 | First-week retention window: table/SVG "Days 2 to 7 after sign-up" (L77, comparison SVG) vs. prose "any session after the sign-up day, up to 7 days out" (L176) | WRONG (internal conflict) | Counting the sign-up day as day 0, "up to 7 days out" covers days 1–7. The table's "days 2 to 7 after sign-up" leaves out day 1. The two definitions disagree. Fix F4. |
| 18 | TradeZella: case study lists "hard to learn" among four UX problems, with new users taking long to get productive (L168) | TRUE | tradezella.md L39 ("four UX problems") and L42 ("Hard to learn. New users took long to get productive."). This is in The challenge section, so it was the starting point, which matches "started from". |
| 19 | TradeZella: "later reported 25% higher user retention, a result of the full product work rather than of onboarding alone" (L168) | WRONG | tradezella.md L13/L105: +25% user retention after the dashboard redesign. The five redesigned areas (L50–84) include no onboarding work, and the frontmatter `services` has no saas-onboarding-design. "Rather than of onboarding alone" implies onboarding work played a part, which the case study never claims. Fix F5. |
| 20 | "User onboarding metrics prove nothing on a plain before-and-after chart" (L215) | WRONG (contradicts hub) | The hub's Release-and-measure step (L61) and FAQ (L99) compare activation "before and after", and the post itself sells that step at L235. An absolute "prove nothing" rules out a method we sell (lesson 2026-10-16). Fix F6. |
| 21 | "a handful of accounts that took 4 days drag it far above…" (L164) | UNVERIFIABLE (unlabeled number) | This is a general statement, not inside a "Say…" example, so "4 days" reads as an observed figure without a source. Fix F7. |
| 22 | Illustrative numbers: invoicing scenario (L26, "in this example"), 1,000/10%/50/40% (L131, "Say"), 10 minutes / 2 days (L166, "Say"), cohort SVG ("Illustrative timeline, no real data") | TRUE | Each is labeled as hypothetical or illustrative. Arithmetic checks: 1,000 × 10% = 100 and 50 × 40% = 20. |
| 23 | Exactly 6 metrics: title, metaTitle, description, takeaway 1, H2 1 bold (lists 6), H2 2 bold, tree SVG (6 nodes below the root), comparison SVG (6 rows, title "The 6 metrics, side by side"), cover ("6 NUMBERS") | TRUE | Counted in every place listed. "Four numbers stay off the list" (L85) names 4 items, and HEART narrows the list to 3 (L97). |
| 24 | Tree SVG / panel: time to value points to "empty state, first task and invite flow" vs. comparison table "Empty state, imports and integrations" (and "first task" belongs to activation rate in the table) | WRONG (internal conflict) | Two graphics in the same post send the same metric to different screens. The prose at L168 names empty state, import, integration and invite. Fix F8. |
| 25 | Formulas/windows stated as the author's method: sign-up completion, setup completion, step drop-off ((n − n+1) ÷ n), activation rate, time to value as median + P90 + share never reached; step metrics use step entrants and cohort metrics use all sign-ups (L70–81, L164) | TRUE (method) | Written as "I count…" or as a stated formula, and internally consistent. Minor note: the "share who never got there" (L75) needs the whole sign-up cohort as its denominator, not "users who reached first value". The orchestrator may add "(the never-reached share uses all new sign-ups)", but this is not blocking. |
| 26 | Cohort-age logic: "read the grid by sign-up week, and only after the 7-day window has closed for the last user in it" (L197); FAQ "readable 7 days after that week ends" (L257) | TRUE | Every member of the cohort is at least N days old at read time (lesson 2026-10-14). "Wait" is framed as method. |
| 27 | A/B, holdout, cohort statements: no statistics; "Small B2B trials rarely have the traffic for an A/B test" (L233) | TRUE (judgement) | No figures or vendor benchmarks are used. The brief's rejected vendor benchmarks (Mixpanel 36%, 80% in 3 days, Userpilot 37.5%) are absent. |
| 28 | Author ahmad-ullah | TRUE | home.ts L203: Ahmad Ullah, "Principal UX Designer". The post gives no title, and the metrics/UX topic fits the role. authors.json bio is empty, so no first-person experience claim may rely on it, and none does. |
| 29 | Internal links: /blog/saas-onboarding/#where-does-saas-onboarding-end, /blog/onboarding-kyc-process-flow/#how-do-you-measure-drop-off-in-the-kyc-onboarding-flow, /blog/user-onboarding-automation/#how-do-you-measure-user-onboarding-automation, hub #how-does-the-saas-onboarding-design-process-work | TRUE | The H2s exist at saas-onboarding.md L84, onboarding-kyc-process-flow.md L220, user-onboarding-automation.md L268 and hub L54. |
| 30 | TradeZella as a DOWN link | NOTE | tradezella.md `services` does not include saas-onboarding-design (RULES: DOWN links go to case studies that used that service). The post does not call it onboarding work, so this is not a fact failure, but the link-builder/QA should confirm the exception is wanted. |

## Fixes (exact replacement text)

All replacements are new wording. None reuses an 8-word run from the hub JSON, tradezella.md, about.md or sibling posts.

**F1 (L249, FAQ "Which tools track user onboarding analytics?", third sentence).** Replace
"Onboarding tools such as Appcues, Userpilot or Pendo report on their own guides and checklists, not on the screens underneath."
with
"Onboarding tools such as Appcues, Userpilot or Pendo report on their own guides and checklists; Pendo and Userpilot also include product analytics, so confirm which events a tool captures before you read a funnel from it."

**F2 (L28, first sentence).** Replace
"That backward walk is how [SaaS onboarding design](/services/saas-products/saas-onboarding-design/) starts at [ui-ux.agency, the design arm of tkxel](/about/), a team with 200+ products designed since 2017."
with
"A funnel review in this spirit is the first step of [SaaS onboarding design](/services/saas-products/saas-onboarding-design/) at [ui-ux.agency, the design arm of tkxel](/about/), a team with 200+ products designed since 2017."

**F3 (L83, second sentence).** Replace
"The day-7 return rate we track in onboarding projects, a session exactly 7 days after sign-up, is the stricter member of the first-week retention family."
with
"Our onboarding projects also report a day-7 return rate; I read it as a session on day 7 itself, so it is the stricter member of the first-week retention family."

**F4 (first-week retention window, in 4 places, all using the sign-up day as day 1).**
- L77, table Window cell: replace "Days 2 to 7 after sign-up." with "Days 2 to 7, with the sign-up day as day 1."
- L176, first sentence: replace "I count retention in the first week as any session after the sign-up day, up to 7 days out." with "I count first-week retention as any session on days 2 to 7, with the sign-up day as day 1."
- Comparison SVG, retention row Window text (two `<text>` lines at x=560, y=658 / y=687): line 1 "Days 2 to 7, with", line 2 "sign-up as day 1".
- Comparison SVG `aria-label`: replace "window days 2 to 7 after sign-up" with "window days 2 to 7, with sign-up as day 1".
- Stale records for the orchestrator: `content/briefs/user-onboarding-metrics.visuals.json` line 3 (holds the old comparison wording) and `content/briefs/user-onboarding-metrics.json` lines 112 and 446 ("a session 7 days later" / "a session 7 days after sign-up" presented as the hub's definition; the hub gives none).

**F5 (L168, last sentence).** Replace
"The whole web and mobile redesign, centered on dashboard analytics, later reported 25% higher user retention, a result of the full product work rather than of onboarding alone."
with
"The whole web and mobile redesign, centered on dashboard analytics, later reported 25% higher user retention; the case study credits that figure to the full redesign and reports no onboarding result."

**F6 (L215, first sentence).** Replace
"User onboarding metrics prove nothing on a plain before-and-after chart, because it mixes the redesign with everything else that changed: a new ad channel, a holiday week or a pricing update."
with
"A plain before-and-after chart cannot prove on its own that user onboarding metrics moved because of the redesign, since it mixes the redesign with everything else that changed: a new ad channel, a holiday week or a pricing update."
(The next sentence, "When I have to use one, …", stays as is and now reads correctly.)

**F7 (L164, second sentence).** Replace
"The average misleads, because a handful of accounts that took 4 days drag it far above what a typical user went through."
with
"The average misleads, because a handful of accounts that take several days drag it far above what a typical user went through."

**F8 (time-to-value screens, make the tree and table agree with the prose at L168).**
- L47 text panel: replace "**Time to value.** Screens: empty state, first task and invite flow." with "**Time to value.** Screens: empty state, imports, integrations and invites."
- L75 table "Screen it points to" cell: replace "Empty state, imports and integrations." with "Empty state, imports, integrations and invites."
- Tree SVG (`<text>` at x=620, y=574 / y=604): line 1 "Screens: empty state, imports,", line 2 "integrations and invites". In `aria-label`, replace "Screens: empty state, first task and invite flow." with "Screens: empty state, imports, integrations and invites."
- Check `visuals.json` line 3 for the old tree string as well.

## Honesty check

- No invented clients, testimonials, awards, certifications or team members. TradeZella is the only client named, and its facts come from tradezella.md, with F5 fixing the credit attribution.
- No local office claims. No vendor benchmark numbers.
- Every "we" sentence maps to a hub step (L156, L235) except L83 (F3) and L28 (F2).
- The "200+ since 2017" figure is a team figure, as required.

VERDICT: FAIL (loop 1, superseded)

---

# Loop 2 (2026-10-24)

Scope: only text that changed after loop 1 (QA edits, as applied in the post at the time of checking), the regenerated tree and comparison SVGs, and the 3 backlink sentences. Unchanged text keeps its loop 1 verdict. WebFetch still fails with `ENOTFOUND` for every external host, so the Pendo and Userpilot checks used domain-restricted WebSearch (method lesson 2026-10-05). Line numbers refer to the current post.

## Loop 1 items

| Item | Status | Evidence |
|---|---|---|
| F1 tools FAQ (L279, shortened by QA): "Onboarding tools Appcues, Userpilot and Pendo report on their own guides; Pendo and Userpilot also offer product analytics, so check which events each one captures." | RESOLVED, TRUE | Pendo: https://www.pendo.io/product/analytics/ and https://support.pendo.io/hc/en-us/articles/22172817933595-Understand-user-behavior-with-reports (funnel and retention reports). Userpilot: https://userpilot.com/product/product-analytics/ and https://docs.userpilot.com/product-analytics/reports/funnels (funnels, retention cohorts; Growth tier and up, which "also offer" does not contradict). |
| F2 (L28): "A funnel review of drop-off from sign-up to first value is the first step of SaaS onboarding design at ui-ux.agency…" | RESOLVED, TRUE | Hub L58: step 1 "Funnel review (1 week)", "We measure drop-off from sign-up to first value". The longest shared run is 6 words, under the 8-word limit. |
| F3 (L98): day-7 return rate read "as a session on day 7 itself… the stricter member of the first-week retention family" | RESOLVED inside the post, TRUE | Hub FAQ L99 names the metric with no definition. Day 7 falls inside the post's days 2–7 window, so "stricter member" holds. A conflict with a sibling page remains; see F10. |
| F4 window wording | RESOLVED, TRUE | Prose L206 "any session on days 2 to 7, with the sign-up day as day 1"; comparison table L79 "Days 2 to 7, with sign-up as day 1."; formula table L94 "a session on days 2 to 7 ÷ all new sign-ups"; comparison SVG text lines "Days 2 to 7, with" / "sign-up as day 1"; aria-label "window days 2 to 7, with sign-up as day 1". All agree. Also consistent: L52 "read within 7 days of sign-up", FAQ L287 "the return metric needs the same wait", and the 2×2 title. |
| F5 (L198) TradeZella credit | RESOLVED, TRUE | tradezella.md L4/L35/L46/L100/L105: web and mobile, dashboard analytics as the main focus, results table "after the dashboard redesign", +25% retention. Services list has no onboarding work. |
| F6 (L245) before-and-after | RESOLVED, TRUE | Pasted as written. No longer rules out the hub's L61 step. |
| F7 (L194) "several days" | RESOLVED, TRUE | No unlabeled figure remains. |
| F8 time-to-value screens | RESOLVED, TRUE | Panel L47, formula table L92, tree SVG text (x=620, y=574/604: "Screens: empty state, imports," / "integrations and invites") and tree aria-label all read "empty state, imports, integrations and invites". This matches the prose at L198 (empty state, import step, integration, invite). |

## Changed text and graphics (new in loop 2)

| # | Claim (line) | Verdict | Source / evidence |
|---|---|---|---|
| 31 | New intro (L26): invoicing tool for US contractors, SaaS, trial-to-paid slipping for 2 monthly cohorts, traced to activation, then setup completion, then step 3 CSV import "in this example" | TRUE (labeled hypothetical) | "Picture…" and "in this example" mark it as illustrative. US frame (RULES "US market"). The trace order (activation → setup completion → one step) matches the tree: setup completion sits under activation and step drop-off under setup completion. |
| 32 | L28: "Activation rate, time to value and the activation window behind setup completion depend on one earlier decision" (the activation event) | TRUE (internal) | Activation rate's end event and time to value's end event are both the activation event (event table L134: first_value_reached = "the activation event"). Setup completion's window is "the activation window" (L75). |
| 33 | L60: onboarding KPIs (key performance indicators) and other labels | TRUE | Correct expansion. No figures. |
| 34 | L102: churn rate, feature adoption and monthly active users are "staples of vendor lists" and "describe the product after the first week" | TRUE (judgement) | Editorial scoping, with no figures or named vendor. |
| 35 | Formula and screen table (L85–94), moved out of the panel | TRUE (method), consistent | Time to value formula now uses "all new sign-ups" for the never-reached share, which resolves the loop 1 row 25 note. Activation rate points to "First task and empty state". The tree draws activation rate as an inner node with no screen chip, so the two do not conflict. The 2×2 sends "returned, did not activate" to "setup wizard and empty state", which matches the activation and setup rows. |
| 36 | Comparison table (L72–79) and comparison SVG | TRUE, consistent | All 6 rows (denominator, window, events) match cell for cell between the panel table, the SVG `<text>` nodes and the aria-label. Level legend (2: activation and retention; 3: sign-up, setup, time to value; 4: step drop-off) matches the tree's indentation (x=124 / 164 / 204). |
| 37 | Tree SVG regenerated | TRUE, consistent | 6 nodes under the gray root. Screens: sign-up form; setup wizard; single setup step losing the most users; empty state, imports, integrations and invites; second-session prompt. These match the panel L42–48 and the formula table. Its "Screen: setup wizard" is consistent with table "Setup wizard."; sign-up completion's chip "sign-up form" is a subset of the table's "Sign-up form, single sign-on buttons and email verification" (not a conflict). |
| 38 | "Confirm with" table (L173–182), moved out of the panel | TRUE (method) | Each row maps to a pattern in the diagnosis table (L158–165). Same 6 patterns, same order. |
| 39 | 2×2 session-recording step (L227): "I filter session recordings to this group to see which step stops them" | TRUE (method) | First-person method. Consistent with L169 (10 to 20 recordings) and the hub's step 1 recordings. 2×2 SVG quadrants checked by coordinates: top row = Returned (y=262 label), left column = did not activate (x=376 label). Each quadrant's text matches the panel table L218–221. |
| 40 | Closing (L265): "takes 3 to 6 weeks across 4 steps, and in its final week we help your team set up a split test where traffic allows and compare activation from before the release with activation after it" | TRUE | Hub L56 "4 steps over 3 to 6 weeks". L61 "Release and measure (1 week)" is the 4th and last step: "help set up an A/B test where possible and compare activation before and after". "Final week" follows from the step order and its 1-week length. No 8-word overlap. |
| 41 | New description (L4) | TRUE | "6 definitions and the events behind them", then the tree down to a screen. Matches the body. |

## Backlinks into this post

| # | Sentence | Verdict | Evidence |
|---|---|---|---|
| 42 | `content/services/saas-onboarding-design.json` L99 FAQ "How do you measure SaaS onboarding success?": "…how to trace a weak number back to the screen behind it" | TRUE | That is the post's thesis (L26, H2 1, tree, formula table). |
| 43 | `content/blog/saas-onboarding.md` L88: "For the full set of six, see each metric's formula, window and the screen it points to" | TRUE as a link sentence, but see F10 | The post gives all 6 formulas and screens (L87–94) and all 6 windows (L72–79). However, the sentence just before it in the same paragraph defines day-7 return rate as a session "7 days later". Under the post's convention (sign-up day = day 1), that lands on day 8, outside the first-week window the post calls this metric's "family" (L98). A reader who follows this link meets two definitions. |
| 44 | `content/blog/user-onboarding-automation.md` L302: "activation rate, time to first value and day-7 return rate (formulas and windows for all three)" | WRONG (overstated) | Activation rate and time to value each have a formula and a window (L75–78, L92–93). Day-7 return rate appears only in L98 as a one-day window ("a session on day 7 itself"), with no formula in either table. "Formulas … for all three" is not met. See F11. |

## Loop 2 fixes (exact replacement text)

**F10 (`content/blog/saas-onboarding.md` L88, third sentence; the post needs no change).** Replace
"**Day-7 return rate** is the share of new sign-ups who come back for another session 7 days later; it shows whether first value turned into a habit."
with
"**Day-7 return rate** is the share of new sign-ups who come back for another session on day 7, counting the sign-up day as day 1; it shows whether first value turned into a habit."
Stale record: `content/briefs/user-onboarding-metrics.json` L334–335 and L446 still carry "7 days later" as saas-onboarding's definition.

**F11 (`content/blog/user-onboarding-automation.md` L302, link text only).** Replace
"([formulas and windows for all three](/blog/user-onboarding-metrics/#how-do-the-6-user-onboarding-metrics-compare))"
with
"([definitions and windows for all three](/blog/user-onboarding-metrics/#how-do-the-6-user-onboarding-metrics-compare))"
(The anchor is right. The day-7 line, L98, sits inside that H2.)

**Stale record (no change to the post):** `content/briefs/user-onboarding-metrics.visuals.json` line 3 still lists the tree leaf as "empty state, first task and invite flow". Update it to "empty state, imports, integrations and invites" so a re-render does not bring back F8.

## Honesty check (loop 2)

- No new clients, results, testimonials, awards, certifications, team members or offices.
- Every "we/our" sentence maps to the hub: L28 → step 1; L98 → FAQ L99; L186 → steps 1–2; L265 → L56 and L61.
- "200+ since 2017" stays a team figure.

The post itself passes. F10 and F11 are one-line edits in sibling files that link to it.

VERDICT: FAIL
