# Fact-check: saas-onboarding (loop 2)

Post: `content/blog/saas-onboarding.md` · Brief: `content/briefs/saas-onboarding.json` · Checked 2026-10-13

**Scope:** Loop 2 covers two things: whether the loop-1 fixes F1–F4 landed, and every new or changed sentence from the writer's and QA's edits. These are the day-7 definition, the five process H3s, the fourth "cut" test, the Bottom line, the TradeZella sentence and the closing CTA. No external links or sourced figures changed since loop 1. The links to AWS, a16z, ProductLed, NN/g and Userpilot, and the Slack 93% and Userpilot 37.5% / 62 B2B figures, keep their loop-1 verdicts (TRUE). See loop 1 for the sources. I checked the site claims against `content/services/saas-onboarding-design.json`, `content/case-studies/tradezella.md`, `content/pages/about.md`, `content/pages/thank-you.md`, `content/pages/terms.md` and `components/forms/LeadForm.tsx`.

## Loop-1 fixes

| Fix | Line | Landed? | Notes |
|---|---|---|---|
| F1 Slack threshold paragraph | 88 | YES, word for word | The paraphrase has no quotation marks. "Look for your own threshold by comparing users who stayed with users who left" is advice to the reader, not a claim about Slack |
| F2 session-recordings sentence | 36 | YES, word for word | Matches hub step 1, "Funnel review": "We measure drop-off from sign-up to first value … and watch new-user session recordings." |
| F3 hub-link sentence | 48 | YES, word for word | Matches hub scope "sign-up, setup, empty states and in-app guidance" |
| F4 closing CTA | 281 | YES, adapted | "send us **a link to** the recording" is more accurate than my wording. The contact form (`LeadForm.tsx`) has a text field ("description") and no file upload, so a link is the only way to send a recording. "free consultation" (terms.md, thank-you.md) and "A senior designer replies within one business day." (about.md line 38, word for word) are both TRUE |

## New or changed claims

| # | Line | Claim | Verdict | Source / evidence |
|---|---|---|---|---|
| 1 | 84 | Day-7 return rate = share of new sign-ups who come back for another session a week later; shows whether first value turned into a habit | TRUE (definition) | The hub names day-7 return rate as one of three success metrics (hub FAQ "How do you measure SaaS onboarding success?"). The post's definition is the standard day-7 retention definition, and the post does not attribute it to the hub. "Habit" is an editorial reading with no figure attached, so it is acceptable |
| 2 | 98 | "four lead to the activation event, a fifth brings the user back, and any step serving neither gets cut" | WRONG (contradicts the post) | The post's own method (lines 142, 149–150, 162, 167) has three outcomes: keep, **move later**, cut. Verify email, set availability, photo/logo, invite teammates and payment card serve neither the four pre-activation stages nor the return prompt. The sort moves them later and does not cut them, and line 167 says "'Later' doesn't mean hidden". See F5 |
| 3 | 118–136 | Five process H3s with a hypothetical scheduling SaaS (work-email or Google/Microsoft sign-in, a welcome question that preloads a meeting type, calendar kept, default hours, pre-copied booking link, return dashboard) | TRUE (illustrative, internally consistent) | No figures and no third-party claims. Each detail matches the sort panel (lines 161–163), the activation event (line 94) and the email table (lines 232–235). One example: "starts availability from default hours" = "set availability (default hours in settings)" under Move later. "Where security allows, verify email after first value" is hedged advice and matches "verify email (after the first booking)" |
| 4 | 136 | "Activation proves the product worked once; it doesn't build a habit." | TRUE (editorial) | Consistent with line 86 and with the stage-5 metric |
| 5 | 148–151 | Four tests sort each step: break without it → stays; default can stand in → later; better moment → later; no help before upgrade → cut | WRONG (the post's own worked example fails test 1) | I ran all 11 sorted steps through the four tests. "Say what you'll book first" is in **Keep now**, but the product does not break without it. Test 2 then applies: a default meeting type can stand in, so the tests send it to Move later. "Share your booking link" also does not "break" the product, but first value depends on it. Stage 2 (line 124) and audit item 3 keep the welcome question because it "changes what the user sees next", and test 1 does not cover that reason. The other 9 steps sort correctly: account and calendar stay; verify email, availability, photo/logo, invites and payment move later; job title/company size and intro video are cut. See F6 |
| 6 | 153 | 11 steps: four stay, five move later, two go | TRUE | The panel lists 4 + 5 + 2 = 11 |
| 7 | 279 | Bottom line: start from the activation event, move or cut every step that doesn't lead to it; fix the earliest failing stage, screens before guidance and emails | TRUE (consistent with the post) | Matches the audit rule (lines 241–243, 262), the three-layer model (lines 44–48) and the tool section (lines 266–271) |
| 8 | 275 | "Before we redesigned the TradeZella trading journal, 'no onboarding guide' sat on its problem list beside a crowded interface and web and mobile apps that behaved differently." | TRUE | tradezella.md "Why the old experience held traders back": "No onboarding guide.", "A busy, crowded interface.", "Web and mobile did not behave the same way." "We redesigned TradeZella's trading journal dashboards for web and mobile" (description). The sentence uses "beside", which does not claim these were the only problems (the list also has "Hard to learn"). There is no result figure, and it is not presented as onboarding-design work. The case study's `services` includes saas-product-redesign, which matches the link |
| 9 | 275 | "That's a job for a phased SaaS product redesign" | TRUE (unchanged from loop 1) | saas-product-redesign.json: "A phased redesign of a live product". This describes the service, not TradeZella's project |
| 10 | 281 | "send us a link to the recording for a free consultation. A senior designer replies within one business day." | TRUE | about.md line 38; terms.md "Every engagement starts with a free consultation"; the LeadForm description field accepts a link |

## Fixes (exact replacements)

**F5, line 98** (claim 2). Replace the bold answer with:

> **The SaaS onboarding process runs in five stages: four lead to the activation event, a fifth brings the user back, and every other step moves later or gets cut.**

(29 words, one sentence. It matches the keep / move later / cut sort and line 167.)

**F6, line 148** (claim 5). Replace the first test bullet with:

> - **Does first value need it, or does it change the next screen?** It stays, because the first result depends on it.

(After this change, all 11 steps sort as the panel shows: account, welcome question, which changes the next screen (line 124), calendar and booking link stay. The other three tests are unchanged. The SVG `straight-line-sort.svg` does not need to change, because its keep/later/cut columns already match.)

## Honesty check

- No invented clients, testimonials, awards, certifications, team members or local offices. The Apex HCM, Fortna and ToolsGroup clients are not mentioned.
- The new TradeZella sentence uses only facts from tradezella.md and quotes no result figures.
- The CTA uses about.md wording exactly. "onboarding designers" (loop-1 F4) is gone.
- The hub figures (4 steps, 5 to 8 sign-ups, 3 to 6 weeks, $15,000–$45,000, the three metrics) still match the hub.

VERDICT: FAIL
