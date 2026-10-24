# Fact-check: user-onboarding-metrics

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

VERDICT: FAIL
