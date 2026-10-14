# Fact-check: saas-onboarding (loop 3, first-person rewrite)

Post: `content/blog/saas-onboarding.md` (author `faizan-khan`, updated 2026-10-14) · Checked 2026-10-14

**Scope:** This loop checks the rewrite into Faizan Khan's first person, against the owner rule in RULES.md ("Voice: first person") and the fact-checker lesson dated 2026-10-14. It covers two things: (1) every "I/we" sentence, and (2) whether any fact, number, quote or link verified in loops 1–2 changed meaning.

**Baseline used:** I had no shell in this run, so I could not run `git diff HEAD`. As the baseline I used the last build of the post, `.next/server/app/blog/saas-onboarding.rsc`. Its `dateModified` is 2026-10-13, and it already contains the loop-2 fixes F5 and F6. I compared that text with the current markdown sentence by sentence. The orchestrator should confirm with `git diff HEAD -- content/blog/saas-onboarding.md` that HEAD matches this build.

**Site sources for "I/we" claims:** `content/authors.json` (faizan-khan: `bio: ""`, `expertise: []`, `yearsExperience: null`), `content/home.ts` (Faizan Khan, "Sr. Product Designer"; "200+ Digital products designed"; "Product design since 2017"; "the UI UX design team of tkxel"), `content/pages/about.md` line 9 ("Our designers have worked on more than 200 digital products since 2017"), `content/services/saas-onboarding-design.json` (step "Funnel review (1 week)": "We measure drop-off from sign-up to first value in your analytics and watch new-user session recordings.") and `content/case-studies/tradezella.md`.

## 1. Unchanged facts, numbers, quotes and links

| Item | Line | Changed? | Verdict |
|---|---|---|---|
| AWS SaaS Lens "tenant onboarding" link and sentence | 50 | Wording only ("So when a team says…, I first ask…"). Link and definition are identical | TRUE (loop 1) |
| Andrew Chen / Stewart Butterfield quote, 2,000 messages, 93%, a16z link | 92 | Identical | TRUE (loop 1) |
| Sentence after the Slack quote | 92 | "Look for your own threshold by comparing…" became "Here's how I'd look for your own threshold, comparing users who stayed with users who left". It is still advice and hypothetical ("I'd"), and it is not attributed to Slack, so lesson 2026-10-13 is still met | TRUE |
| Wes Bush Bowling Alley Framework, ProductLed link, bumpers | 152 | Identical | TRUE (loop 1) |
| Appcues GoodUX / Notion description, SaaSFrame | 191 | Identical | TRUE (loop 1) |
| NN/g empty-state guidelines and link | 193 | Identical. Only the lead-in "Empty states deserve a closer look." was removed | TRUE (loop 1) |
| Userpilot 2024 benchmark, 37.5%, 62 B2B companies, vendor-data caveat, link | 303 | Figures and caveat identical. "Treat it…" became "I treat it as a sanity check and compare a product's own rate…", which is method | TRUE (loop 1) |
| Hub figures: 4 steps, 5 to 8 sign-ups, 3 to 6 weeks, $15,000–$45,000, three success metrics, cost anchor link | 283 | Identical | TRUE (loop 2) |
| TradeZella sentence, case-study link, product-redesign and SaaS product design links | 285 | Identical except the last clause, "start there" → "I'd start there" | TRUE (loop 2) |
| CTA: "send us a link to the recording", free consultation, "A senior designer replies within one business day." | 291 | Identical | TRUE (loop 2) |
| Day-7 definition, four tests, 11-step sort (4/5/2), process H3 examples, email table, 12-point audit | 88, 154–171, 238–268 | Facts identical. Verbs changed to "I…" | TRUE (loop 2) |
| "Later doesn't mean hidden" | 175 | Became "When I move a step later, I don't hide it: it becomes a settings placeholder, a checklist item or a prompt at first use." Same three outcomes | TRUE |
| Removed sentences ("Teams usually patch the top two layers first.", "Self-serve trial? Read on.") | 48, 82 | Removed. No fact is lost | n/a |

No external or internal link was added, removed or retargeted.

## 2. Every first-person sentence

| # | Line | Sentence (shortened) | Type | Verdict | Source / evidence |
|---|---|---|---|---|---|
| 1 | 26 | "When I look at a SaaS trial, I judge its SaaS onboarding by **one number**: the minutes a new user spends before getting anything they came for." | Judgement, but states a measure | **WRONG (contradicts the post and the hub)** | The post's own success measures are three numbers (line 88; audit item 12). Line 283 says "We judge the work by activation rate, time to first value and day-7 return rate", and the hub FAQ also gives three metrics. The pre-rewrite text made no "one number" claim ("Picture a hypothetical … SaaS onboarding log, timed with a stopwatch"). See F1 |
| 2 | 26 | "So I time a fresh sign-up with a stopwatch. Here's a hypothetical business-to-business (B2B) trial:" | Method + labelled hypothetical | TRUE | The log below is still labelled hypothetical, and no client or result is claimed. This matches the post's own audit step 1 |
| 3 | 36 | "At ui-ux.agency, the design team of tkxel, our designers have worked on more than 200 digital products since 2017." | Company fact | TRUE (unchanged) | about.md line 9 word for word; home.ts lines 24–25, 240; RULES.md confirmed facts |
| 4 | 36 | "**Our team starts** in the same place: we watch new-user session recordings and measure drop-off from sign-up to first value." | "We" process claim | **WRONG (scope widened)** | Before the rewrite: "Our onboarding work starts the same way". The source is the onboarding hub's step 1 only ("Funnel review (1 week)"). "Our team starts" follows a sentence about all 200+ products, so it reads as the whole agency's starting point on every project. No site page says that. See F2 |
| 5 | 36 | "Below: … how I cut steps…" | Method | TRUE | — |
| 6 | 42 | "When I say onboarding, I don't mean a welcome email or a kickoff call. I mean a user onboarding flow…" | Definition / judgement | TRUE | — |
| 7 | 48 | "I start with the screens underneath, because they decide the outcome. That's why our SaaS onboarding design work redesigns sign-up, setup and empty states…" | Method + hub scope | TRUE | Hub scope "sign-up, setup, empty states and in-app guidance" (loop-2 F3). The "why" link from the author's habit to the service scope is editorial |
| 8 | 50, 80, 82 | "I first ask which layer they mean"; "I'd design those screens so a call is optional"; "my audit below covers screens" | Method / advice | TRUE | — |
| 9 | 90 | "Some teams call the activation event the aha moment; I don't, because unlike a feeling, it is something analytics can log." | Judgement | TRUE | Same reasoning as before, now in the author's own stance |
| 10 | 92, 98 | "Here's how I'd look for your own threshold…"; "I'd pick 'first meeting booked…'" | Hypothetical advice | TRUE | Inside the labelled "Say you run a scheduling SaaS" example |
| 11 | 104 | "I measure drop-off per onboarding step to find the stage that loses people." | Method | TRUE | Habitual method with no result claimed. Matches hub step 1 |
| 12 | 128–140 | "so I limit the sign-up flow…"; "I'd verify email after first value"; "I ask only for what first value needs"; "I'd give the user a real task…" | Method / advice | TRUE | Same content as loop 2, claim 3 |
| 13 | 154, 175 | "I run four tests on every step"; "When I move a step later, I don't hide it…" | Method | TRUE | — |
| 14 | 206 | "For the first session, I favor a guided first task over a product tour: users remember their own first result, not the tooltips they clicked past." | Judgement | TRUE (unchanged reasoning) | Same claim as before the rewrite, now as a preference |
| 15 | 228, 234, 247 | "My quickest test…"; "I prefer a behavior-triggered email"; "I treat that as a design spec" | Method / judgement | TRUE | — |
| 16 | 253 | "To me, good user onboarding UX … is mostly subtraction… Here's how I run the audit:" | Judgement / method | TRUE | — |
| 17 | 278 | "…and we design for them too. But a tool sits on top of your screens, so I read an audit this way:" | "We" capability (unchanged) + method | TRUE (unchanged) | "we design for them too" is identical to the pre-rewrite text and was accepted in loops 1–2 |
| 18 | 283 | "Our onboarding redesign runs in 4 steps… We judge the work by…" | "We" process | TRUE (unchanged) | Hub process and FAQ |
| 19 | 285 | "Before we redesigned the TradeZella trading journal…"; "I'd start there." | Case study + advice | TRUE | tradezella.md (loop 2, claim 8) |
| 20 | 289 | "I'd fix the earliest stage that fails, and inside that stage fix the screens before the guidance and the emails." | Advice | TRUE | Same as before |
| 21 | 293 | "My recommendation: before you add another tooltip or email, **cut** one step between sign-up and your activation event." | Recommendation (new) | **WRONG (drops an outcome of the post's own sort)** | The post's method has three outcomes: keep, move later and cut (lines 102, 150, 157–159). The bold line just above says "moves or cuts every step". In a flow where every non-essential step only needs moving (all five Move-later steps in the worked example), "cut one step" sends the reader to the wrong outcome. This is the same mistake as loop-2 F5. See F3 |
| 22 | 299, 303, 311 | FAQ: "I measure time to first value in minutes…"; "I treat it as a sanity check…"; "I'd send one behavior-triggered email…" | Method / advice | TRUE | — |

Honesty: there are no first-person anecdotes, clients, quotes, results or "a founder told me" stories. Faizan Khan's bio, expertise and years of experience are empty in authors.json, and the post makes no claim about his personal history, years of experience or past projects. That is correct. Only home.ts's title "Sr. Product Designer" is available, and the post does not restate it. The Apex HCM, Fortna and ToolsGroup clients are not mentioned, and no local office is claimed.

## Fixes (exact replacements)

**F1, line 26** (claim 1). Replace the first sentence with:

> When I look at a software as a service (SaaS) trial, the first number I check in its SaaS onboarding is the minutes a new user spends before getting anything they came for.

Keep "So I time a fresh sign-up with a stopwatch. Here's a hypothetical business-to-business (B2B) trial:" unchanged. The keyword "SaaS onboarding" stays in the first 60 words.

**F2, line 36** (claim 4). Replace the second sentence with:

> Our onboarding work starts the same way: we watch new-user session recordings and measure drop-off from sign-up to first value.

This is the pre-rewrite wording, and it ties the claim to hub step 1, "Funnel review".

**F3, line 293** (claim 21). Replace with:

> My recommendation: before you add another tooltip or email, move or cut one step between sign-up and your activation event.

This matches the bold Bottom line ("moves or cuts") and the keep / move later / cut sort.

VERDICT: FAIL
