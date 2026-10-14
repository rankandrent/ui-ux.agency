# Fact-check: saas-onboarding (loop 4, semantic SEO pass)

Post: `content/blog/saas-onboarding.md` (author `faizan-khan`, updated 2026-10-14) · Checked 2026-10-14

**Scope:** every new or changed sentence after today's semantic SEO pass, checked against RULES.md "Voice: first person" and "Semantic SEO framework". The loop-3 fixes F1 (line 26), F2 (line 36) and F3 (line 293) are applied word for word.

**Baseline:** there was no shell, so I could not run `git diff HEAD~3`. I used the last build, `.next/server/app/blog/saas-onboarding.rsc` (BlogPosting `dateModified` 2026-10-13, which is the pre-first-person text), and compared it with the current markdown sentence by sentence. The orchestrator should confirm with `git diff HEAD~3 -- content/blog/saas-onboarding.md`.

**Web access:** WebFetch returned ENOTFOUND for docs.aws.amazon.com and learn.microsoft.com. I verified both through domain-restricted WebSearch, which returned the exact URLs with supporting text (lesson 2026-10-05, method).

## Changed or new sentences

| # | Line | Claim (shortened) | Verdict | Source / evidence |
|---|---|---|---|---|
| 1 | 26 | "the first number I check in its SaaS onboarding is the minutes…" | TRUE | Loop-3 F1, pasted word for word |
| 2 | 34 | "After 6 minutes, nothing they came for has happened, and that's where a trial quietly ends." | TRUE (labelled hypothetical) | The log ends at 6:10 and is labelled "a hypothetical B2B trial". Same claim as the pre-rewrite "Six minutes in…" |
| 3 | 36 | "Our onboarding work starts the same way: we watch new-user session recordings and measure drop-off…" | TRUE | Loop-3 F2. Hub step "Funnel review (1 week)" |
| 4 | 36 | "Everything between that form and the first result worth a second visit is new user onboarding." | TRUE | Definition, consistent with line 40 |
| 5 | 40 | Definition sentence (bold) | TRUE (unchanged) | Agrees with the hub abstract. It does not reuse the hub's definition sentence, as the brief requires |
| 6 | 42 | "I mean the first minutes and days a new user spends in subscription software: sign-up, account setup, team invites, empty states and guidance toward the first result." | TRUE | Hub `abstract`, nearly word for word ("first minutes and days a new user spends in subscription software: sign-up, account setup, invites, empty states and guidance toward the first result") |
| 7 | 48 | "So our SaaS onboarding design work redesigns sign-up, setup and empty states…" | TRUE | Hub scope (loop 2 F3). "So" is editorial |
| 8 | 50 | AWS SaaS Lens: "tenant onboarding" provisions a new tenant's resources and creates the tenant admin in an identity provider; engineering owns it | TRUE | [SaaS Lens, Tenant Onboarding](https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/tenant-onboarding.html): onboarding orchestrates provisioning of what a new tenant needs, a registration service creates the tenant and then a user in Amazon Cognito who "represents the administrator for the new tenant", and dedicated resources are provisioned before activation. The link loads (search returns the exact URL). The new wording is more precise than the old "provisioning infrastructure and identity" |
| 9 | 56 | "B2B SaaS customer onboarding opens the customer lifecycle on two tracks with two owners…" | **WRONG (hedge dropped)** | The baseline said "usually runs on two tracks". Without "usually", the sentence says every B2B product has a CSM track. That contradicts the bold answer two lines up ("most B2B SaaS products need both"), the FAQ ("Most B2B products need both") and the post's own self-serve path. See F1 |
| 10 | 80 | "I'd design them as guided setup screens, data import first, so a call is optional." | TRUE | Author's method/advice. No fact claimed |
| 11 | 86 | "Product onboarding ends at the activation event…" | TRUE | Same claim as before. Only the subject changed |
| 12 | 88 | "such as the first 7 days"; "come back for another session 7 days later" | TRUE | Example window and definition ("a week later" became "7 days later"). Same meaning |
| 13 | 90 | "Some teams call the activation event the aha moment **because it predicts retention**; I don't, because analytics can log an action, not a feeling." | **WRONG (reason misattributed)** | The term names the user's realization of value, not a prediction: Amplitude, ["The 'Aha' Moment"](https://amplitude.com/blog/aha-moment): the moment a user "grasps and internalizes the core value"; Appcues, [aha moment examples](https://www.appcues.com/blog/aha-moment-examples), separates the aha moment (the realization) from activation (the measurable behavior). The post's own second clause ("not a feeling") depends on that meaning. See F2 |
| 14 | 90 | "Keep the activation window shorter than your free trial length…"; "Freemium onboarding has no trial clock, but I'd set the same window." | TRUE | Advice / method |
| 15 | 92 | Slack / Cold Start Problem quote; "Here's how I'd look for your own threshold in 3 steps…" | TRUE (unchanged) | Loop 1. Still advice, not attributed to Slack (lesson 2026-10-13) |
| 16 | 94 | "In Mixpanel or Amplitude, split the last 90 days of sign-ups into users still active after 30 days and users who left." | **WRONG (method cannot be run as written)** | Mixpanel and Amplitude both support cohorts, so the tool claim is TRUE. However, users who signed up in the last 30 days of that 90-day window cannot yet be "still active after 30 days", so a third of the cohort would be counted as "left" or could not be classified. The baseline's "last quarter's sign-ups" did not tie the window to today. See F3 |
| 17 | 95 | "Compare what each group did in its first 7 days." | TRUE | Method ("first week" became "first 7 days") |
| 18 | 98 | "I'd pick 'first meeting booked by someone else through your link'" | TRUE | Inside the labelled "Say you run a scheduling SaaS" example. Appcues also names Calendly's first booking as its aha example, so the pick is reasonable |
| 19 | 102 | "The onboarding process runs in five stages…" | TRUE (unchanged) | — |
| 20 | 128 | "My rule for required fields on the sign-up form: short forms, single sign-on and clear plan choices that don't block the first session." | TRUE (hub-sourced method), wording note | Hub parts list, "Sign-up": "Short forms, single sign-on and clear plan choices that do not block the first session." The brief's EAV adds "(no sourced field count)", and the post gives no general count. Wording note (not blocking): the brief's attribute label "required fields on the sign-up form" was pasted in as the lead-in, so SSO and plan choice read as "fields". Optional F6 below |
| 21 | 128 | "Against the 7 fields in my opening log, the scheduler needs 1 field: a work email, or a Google or Microsoft sign-in." | TRUE (both numbers inside labelled hypotheticals) | 7 fields = the hypothetical log at line 28. 1 field = the hypothetical scheduler, which matches the sort's Keep now step "create an account with work email or SSO". This is not a general statistic, and it is not presented as one. Note: a sign-in button is not a field (covered by optional F6) |
| 22 | 136 | "In self-serve trial onboarding, I ask only the setup questions the product needs now; the rest moves later…" | TRUE | Method. Consistent with the four tests |
| 23 | 140 | "…with sample data and templates that cut the path to first value." | TRUE | Method. Matches the pattern list and the empty-state anatomy |
| 24 | 144, 146 | "1 step left to finish"; "in-app onboarding splits at the team invite" | TRUE | Hypothetical scheduler / admin-member section |
| 25 | 152 | Bowling Alley Framework, "a product-led growth (PLG) model for user adoption" | TRUE | ProductLed URL slug is `user-adoption-framework-bowling-alley` (loop 1) |
| 26 | 161 | "with 11 steps before the first booking: 4 steps stay, 5 steps move later and 2 steps go… from 11 steps to 4." | TRUE | astext list: Keep 4, Move later 5 (all after first booking or at upgrade), Cut 2 = 11. Before first value: 4 |
| 27 | 175, 177 | "When I move those 5 steps later, I don't hide them…"; "Our design team rebuilds exactly that flow." | TRUE | Method / hub scope |
| 28 | 187 | "**Onboarding checklist:** helps when it ends at activation after 3–5 steps" | **UNVERIFIABLE as a general rule; also ambiguous** | The 3–5 range has no source in the post or the brief (brief line 241 is an outline instruction, not a source). The other bullets in this list state conditions, not numbers, so "after 3–5 steps" reads as a general best practice. The new word order also says activation comes "after 3–5 steps", not that the checklist has 3–5 items. Audit item 7 ("A 3–5 item checklist ending at activation") is the author's own audit criterion, so it can stay. See F4 |
| 29 | 191–193 | Notion / Appcues GoodUX, SaaSFrame, NN/g empty states | TRUE (unchanged) | Loop 1. The removed lead-in had no fact |
| 30 | 206 | "I favor a guided first task over a product tour and its tooltips, because users remember their own first result." | TRUE (stated preference, unchanged reasoning) | Same reasoning accepted in loop 3, now shorter |
| 31 | 210, 212 | "A B2B product needs two onboarding paths…"; roles set the number of paths | TRUE (unchanged) | — |
| 32 | 215 | "in enterprise SaaS onboarding, members who sign in through the company's identity provider, or join via a verified email domain, skip a separate sign-up" | TRUE | Same claim as before, narrowed to enterprise |
| 33 | 234 | "A drip fixed at 1 day, 3 days and 7 days after sign-up ignores where the user stopped." | TRUE (illustrative schedule) | Example of a fixed schedule, the same as the baseline's "day-1, day-3, day-7 drip". No claim that this schedule is a standard or performs any particular way |
| 34 | 234 | "For the scheduler, follow-up onboarding emails bring inactive trial users back to the next step, starting 24 hours after sign-up." | TRUE (inside the labelled scheduler example) | "For the scheduler" scopes it. 24 hours matches table row 1 ("No calendar 24 hours after sign-up") |
| 35 | 253–258 | "Here's how I run the audit in 4 steps"; "Capture the run with Microsoft Clarity session recordings or a screen recorder." | TRUE | [Clarity, Session recordings](https://clarity.microsoft.com/session-recordings) and [clarity.microsoft.com](https://clarity.microsoft.com/) ("Free Heatmaps & Session Recordings"). Caveat for the writer (not blocking): Clarity records only where its tag is installed, and in regions that require consent it does not record full replays until consent is given, so "a screen recorder" remains the fallback the sentence already offers |
| 36 | 272 | "rerun the audit after 7 days of new sign-ups" | TRUE | Advice ("a week" became "7 days") |
| 37 | 276–281 | "Trial onboarding needs design work…"; tools "handle checklists, tours and in-app messages well"; "need user experience design" | TRUE | Same claims as loops 1–3 |
| 38 | 283 | "Our onboarding redesign runs in 4 steps over 3 to 6 weeks. A funnel review takes 1 week, and interviews with 5 to 8 users who signed up recently take 1 week. A redesign and prototype tested with new users takes 1–3 weeks, then release and measurement take 1 week." | TRUE (new per-step durations checked) | Hub process: "Funnel review (1 week)", "User interviews (1 week)… 5 to 8 recent sign-ups", "Redesign and prototype (1–3 weeks)… test the prototype with new users", "Release and measure (1 week)". The steps add up to 4–6 weeks, inside the hub's "3 to 6 weeks" (the hub's own figures; nothing new added) |
| 39 | 283 | $15,000 to $45,000; cost anchor link; three success metrics | TRUE (unchanged) | Hub cost FAQ |
| 40 | 285 | "A product in that state needs a phased SaaS product redesign…"; TradeZella | TRUE | tradezella.md (loop 2). Only the lead-in wording changed |
| 41 | 289–293 | Bottom line; "move or cut 1 step…" | TRUE | Loop-3 F3, applied |
| 42 | 299 | "In-app onboarding should take…"; "In the hypothetical scheduler, that path is 4 steps long." | TRUE | Matches the sort (Keep now = 4) |
| 43 | 303 | "No universal activation rate benchmark exists…"; Userpilot 2024, 37.5%, 62 B2B companies, vendor-data caveat | TRUE (figures unchanged) | Loop 1. "Universal" keeps the sentence consistent with the vendor benchmark that follows |
| 44 | 307–315 | Remaining FAQ answers | TRUE (unchanged facts) | "I'd send…" is method |

**Links:** no external or internal link was added, removed or retargeted. AWS SaaS Lens, a16z, ProductLed, NN/g and Userpilot all match the loop-1 URLs, and the AWS URL was confirmed again in this run.

**Honesty:** there are no invented clients, results, quotes, anecdotes, team members, offices or certifications. Faizan Khan's bio in authors.json is still empty, and the post claims no personal history for him. Every "we" sentence maps to the hub process or tradezella.md. Apex HCM, Fortna and ToolsGroup are not mentioned.

## Fixes (exact replacements)

**F1, line 56** (claim 9). Replace the first sentence with:

> B2B SaaS customer onboarding usually opens the customer lifecycle on two tracks with two owners: the product team's screens and a customer success manager (CSM), who runs kickoff, training and go-live.

Keep "Yet the product must still work for the 20th invited member, who never joins that call." unchanged.

**F2, line 90** (claim 13). Replace the second sentence with:

> Some teams call the activation event the aha moment, the point where a user grasps the product's value; I don't, because analytics can log an action, not a feeling.

**F3, line 94** (claim 16). Replace step 1 with:

> 1. In Mixpanel or Amplitude, take 90 days of sign-ups that are at least 30 days old and split them into users still active after 30 days and users who left.

**F4, line 187** (claim 28). Replace the bullet with:

> - **Onboarding checklist:** helps when it ends at the activation event, and I cap mine at 3–5 items; backfires with "watch a video" filler.

This makes 3–5 the author's own limit (method), which is allowed under "Voice: first person", and matches audit item 7.

**F6 (optional, wording only, does not affect the verdict), line 128** (claims 20–21). If the orchestrator wants SSO not to read as a "field":

> Every required field is one more chance to quit. My rule for the sign-up form: short forms, single sign-on and clear plan choices that don't block the first session. Against the 7 fields in my opening log, the scheduler asks for 1 field, a work email, or offers Google or Microsoft sign-in instead.

The middle sentence keeps the hub's wording word for word. Do not add a general field count: the brief records "no sourced field count".

VERDICT: FAIL
