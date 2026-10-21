# Fact-check: ux-design-for-saas (loop 1)

Post: `content/blog/ux-design-for-saas.md` (author `faizan-khan`, dated 2026-10-21) · Checked 2026-10-21

**Method.** WebFetch failed with `getaddrinfo ENOTFOUND` for every host tried (csrc.nist.gov, www.nngroup.com, www.w3.org, leginfo.legislature.ca.gov, www.ftc.gov). Every external claim below was verified with **domain-restricted WebSearch** (allowed_domains = the source's own domain), which returned the exact post URL plus quoted text. Two items also used an exact-phrase search without a domain filter, and the cited page was the top hit (marked "exact-phrase"). Site facts were read directly from the repo files named in each row.

**Overlap rule.** Every replacement below paraphrases site wording, so no run of 8 or more words is copied from service JSON, `pillars.ts`, `home.ts`, `about.md` or a case-study file. Where the post already copies 8+ words from a site file, that row is listed as an overlap fix.

## Claims

| # | Line | Claim | Verdict | Source |
|---|---|---|---|---|
| 1 | 26 | The SaaS design agency hub lists six parts. After removing sign-up/onboarding, four of the remaining five are screens used after week one, and the fifth is a design system | TRUE | `content/services/saas-design-agency.json` l.40–47 |
| 2 | 28 | The ui-ux.agency team at tkxel has designed 200+ products since 2017 (a team fact, not the author's) | TRUE | `content/pages/about.md` l.9; RULES.md honesty line |
| 3 | 28 | "I'm one of its senior product designers" | UNVERIFIABLE | `content/home.ts` l.206: Faizan Khan is "Sr. Product Designer", and he is the only person with that title (l.203–207), so the plural "one of its" is a headcount claim → **F4** |
| 4 | 66 | "A dashboard is a set of data visualizations in a single-page view, built to give at-a-glance information people can act on quickly" | TRUE in content, but UNATTRIBUTED | This is a near-verbatim copy of NN/g's definition ("A collection of data visualizations, presented in a single-page view that imparts at-a-glance information on which users can act quickly"), found by an nngroup.com-restricted search of https://www.nngroup.com/articles/dashboards-preattentive/. The link was removed in link-building, so the sentence now uses NN/g's wording with no credit → **F5** |
| 5 | 66 | Length and position (bar/line charts) are processed preattentively | TRUE | Same NN/g article: dashboards should "use length and 2D position", and these are preattentive attributes (nngroup.com search) |
| 6 | 84 | The TradeZella case study describes a busy interface that hid the metrics traders cared about most | TRUE | `content/case-studies/tradezella.md` l.41 |
| 7 | 84 | We pulled win rate and profit factor into compact widgets and let each trader pick and arrange their own | TRUE (overlap) | tradezella.md l.62, l.82. The post copies an 11-word run from l.62 → **F6** |
| 8 | 84 | Whole web and mobile redesign, dashboard analytics the main focus; "TradeZella reports" 40% more user interaction and 25% higher retention | TRUE figures, WRONG attribution | tradezella.md l.12–13, 46, 104–105. Our own case study publishes these results; the client does not. "TradeZella reports" credits the client → **F6** |
| 9 | 92 | The NIST glossary describes RBAC as permissions attached to roles rather than individual identities, and roles can inherit permissions through a hierarchy | TRUE | https://csrc.nist.gov/glossary/term/role_based_access_control (csrc.nist.gov search): "permitted actions on resources are identified with roles rather than with individual subject identities … Role permissions may be inherited through a role hierarchy" |
| 10 | 113 | "Digno's three-level scores show **role-level views** at product scale" | WRONG | digno.md l.75–79 gives organization, department and individual *levels* (scopes of one score). Nowhere does the case study describe roles, permissions or which role sees which view → **F7** |
| 11 | 113 | Digno computes one score at organization, department and individual level. My Digno Score explains the factors. Org overview, department pages and the personal page each serve one level | TRUE | digno.md l.63, 75–79, 83, 87 |
| 12 | 115 | Roles and settings work: admin, member and guest views, permissions, integrations and audit logs. We agree on 2 or 3 metrics at kick-off | TRUE (overlap) | saas-design-agency.json l.45, l.98. The post copies a 10-word run from l.45 → **F8** |
| 13 | 119 | Bold: the tables' jobs include "act on many rows at once" | WRONG (narrowed) | NN/g's 4th task is "take action on records", covering both single-record and batch actions (https://www.nngroup.com/articles/data-tables/, nngroup.com search). The bold also drops "add" from task 3 → **F9** |
| 14 | 121 | NN/g's data-tables article names these four tasks and says tables suit comparison because two data points are seen without holding them in working memory | TRUE | https://www.nngroup.com/articles/data-tables/ ("Data Tables: Four Major User Tasks"): adjacent data points are easy to compare because users don't "hold information in working memory" (nngroup.com search) |
| 15 | 134 | Batch toolbar on selection; leave batch mode by canceling or deselecting | TRUE (author method) | Written as "In my tables" (method), so no source is needed. The Carbon citation was removed per brief l.389 |
| 16 | 136 | WCAG 2.2 SC 2.5.8 sets pointer targets at Level AA to at least 24 × 24 CSS pixels, or enough spacing around smaller ones, with listed exceptions | TRUE | https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html (w3.org search): AA, 24 by 24 CSS px, five exceptions including Spacing (24 px circle test) |
| 17 | 136 | "Row actions and icon buttons in dense tables are where WCAG 2.2 targets fail first" | UNVERIFIABLE | No source ranks where 2.5.8 failures occur first → **F10** |
| 18 | 138 | Mass Media Co.: order work spread across tools that did not talk to each other; new order screen combines services, channels and data products, and the estimated cost updates as items are added | TRUE (overlap, modifiers dropped) | mass-media-co.md l.33, l.92. Two runs of 8+ words are copied, and "data processing services" / "digital channels" lost their qualifiers → **F11** |
| 19 | 138 | For the whole platform revamp, the case study reports order processing efficiency up 30% and an error rate of 2+, reduced from 25% | TRUE | mass-media-co.md l.12–13, 104–105. Framed as the project's published result, not tied to one surface |
| 20 | 146 | Jakob Nielsen (NN/g) moves advanced or rarely used options to a secondary screen; designs with more than 2 disclosure levels usually have low usability because users get lost moving between levels | TRUE | https://www.nngroup.com/articles/progressive-disclosure/ (nngroup.com search + exact-phrase): "designs that go beyond 2 disclosure levels typically have low usability because users often get lost when moving between the levels". Author confirmed as Nielsen (2006) via a repost found by exact-phrase search |
| 21 | 160 | "Our plans-and-billing work **treats** upgrade prompts, usage limits, invoices and the cancellation flow **as one path**" | UNVERIFIABLE | Hub l.46 *lists* these items. No site page says the work treats them as one path, so this is a process claim → **F12** |
| 22 | 181 | AB 2863 amended the California Automatic Renewal Law for contracts entered into, amended or extended on or after July 1, 2025 | TRUE | https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB2863 (leginfo search): "apply its provisions to contracts entered into, amended, or extended on or after July 1, 2025". Chaptered Ch. 515, Stats. 2024 |
| 23 | 181 | "A consumer who accepted the offer online must be able to cancel online, and cancellation must be available in the same medium used to sign up" | TRUE text, WRONG framing | BPC §17602 (leginfo search): the ability to cancel "shall be available to the consumer in the same medium that the consumer used in the transaction that resulted in the activation". The **same-medium** rule is new in AB 2863. The **online-cancel** right is older: SB 313 (2017) and AB 390 (in force July 1, 2022), per leginfo AB 390/SB 313 "Today's Law" pages and law-firm alerts (Cooley, Pillsbury). Placed right after the July 2025 sentence, it reads as new → **F2** |
| 24 | 19 | Takeaway: the amended ARL "lets consumers who signed up online cancel online, for contracts from July 1, 2025" | WRONG | See #23. Online cancel for online sign-ups predates AB 2863. Tying it to the July 1, 2025 date implies earlier contracts lacked it → **F1** |
| 25 | 278 | FAQ: the amended ARL "requires online cancellation when the customer signed up online, for contracts entered into, amended or extended from July 1, 2025" | WRONG | Same as #24 → **F3** |
| 26 | 183, 278 | The Eighth Circuit vacated the FTC click-to-cancel rule on July 8, 2025, as the FTC recounts in its March 2026 ANPRM | TRUE | https://www.ftc.gov/system/files/ftc_gov/pdf/p064202negativeoptionruleanprm.pdf (ftc.gov search, PDF titled "Negative Option Rule: Advance Notice of Proposed …"): "On July 8, 2025, shortly before businesses would need to comply with all parts of the Rule, the United States Court of Appeals for the Eighth Circuit vacated the amended Rule". FTC press release 2026/03 confirms a March 2026 ANPRM. Consistent with `/blog/saas-homepage-design/` l.133 (March 11, 2026 ANPRM). The post makes no claim about current rulemaking status |
| 27 | 183 | ROSCA still applies; FTC reads it as requiring clear terms, express informed consent and an easy way to stop the recurring charge | TRUE | https://www.ftc.gov/business-guidance/blog/2019/03/recipe-rosca-violation (ftc.gov search): disclose all material terms before obtaining billing information; express informed consent before charging; simple mechanism to stop recurring charges. Note: "clear terms" drops the "before billing information" timing. Acceptable in prose, but don't reuse it as an SVG label (see 2026-10-17 lesson) |
| 28 | 191 | NN/g's guidelines for empty states in complex applications give a blank container 3 jobs: system status, learning the feature, a shortcut into the main task | TRUE | https://www.nngroup.com/articles/empty-state-interface-design/ ("Designing Empty States in Complex Applications: 3 Guidelines"): communicate system status, increase learnability, provide direct pathways to key tasks (nngroup.com search) |
| 29 | 191 | "Most advice stops at the first-run screen, but a returning user meets **more** empty states than a new one" | UNVERIFIABLE | No source. A new user's product is mostly empty, so the comparison is doubtful → **F13** |
| 30 | 206 | Never show "no results" while data is loading | TRUE (author method) | Consistent with the NN/g empty-states article ("No records" shown while loading misleads users) |
| 31 | 216 | TradeZella mentor mode compares cumulative P&L of every mentee in one view; MMC task cards name owner, due date and progress; Digno personal page tracks the score over time | TRUE | tradezella.md l.70; mass-media-co.md l.67; digno.md l.63 |
| 32 | 228 | "Enterprise buyers add a security review of SSO, SCIM provisioning, audit logs, SOC 2 evidence **and Section 508 conformance**" | WRONG | `content/industries/enterprise.json` l.64, l.91: the security review covers SSO, MFA, role changes, audit log and SOC 2. l.68: Section 508 is a **federal procurement** accessibility rule, documented in an ACR/VPAT, and is not part of a security review → **F14** |
| 33 | 258 | In our SaaS product design work, onboarding, a dashboard, billing or a single workflow are common starting points | TRUE (overlap) | `content/pillars.ts` l.179. The post copies a 12-word run → **F15** |
| 34 | 258 | The hub's six product parts (anchor to #what-does-our-saas-design-agency-deliver) | TRUE | saas-design-agency.json l.38–49 (H2 text slugs to that id) |
| 35 | 266 | Subscription software adds trials, seats, roles, usage limits, plan upgrade, invoices | TRUE | saas-design-agency.json l.25 (paraphrased, no 8-word run) |
| 36 | 270 | One surface can be a project; a dashboard, billing or a single workflow are common starting points | TRUE (overlap) | pillars.ts l.179. The post copies an 11-word run → **F16** |
| 37 | 274 | Digno shows one score at organization, department and individual level, each with its own view | TRUE | digno.md l.75–79, 83, 87 |
| 38 | 282 | We usually agree on activation rate, time to first value and trial-to-paid conversion at kick-off; compare before and after | TRUE (overlap) | saas-design-agency.json l.98. The post copies a 9-word run → **F17** |
| 39 | SVGs | All text in `public/blog/ux-design-for-saas/*.svg` (surface map, dashboard teardown, role lens, plan limit, triage grid, cover) | TRUE | Every `<text>`/`<title>` matches the post's own text panels. No statistics, regulations or client names. Advisory (layout, not fact): the triage-grid SVG has no "Metric to pull" column, but its text panel and the visuals.json marker (l.19) both include one. The alt text correctly leaves it out |

**Links.** All 8 external URLs were returned by domain-restricted searches on their own hosts, with matching host and path: NIST glossary, NN/g data tables, NN/g progressive disclosure, NN/g empty states, W3C Understanding 2.5.8, leginfo AB 2863 bill text, FTC ANPRM PDF and FTC ROSCA blog. Every remaining NN/g mention (l.121, 146, 191) has a link. No NN/g name is left unlinked. The NN/g *wording* left without credit is on l.66 (#4).

**Honesty.** No invented clients, testimonials, awards, certifications, team members or offices. Apex HCM, Fortna and ToolsGroup are not mentioned. All three case studies list `saas-design-agency` in `services`. Every case result is framed as a whole-project result (TradeZella's attribution is fixed in F6). Author-practice sentences use "I/my". The only biography claim is the plural title (F4). `authors.json` has an empty bio for faizan-khan, and the post claims no personal history.

## Fixes (exact replacements)

**F1 (line 19, takeaway 4)**: replace with:
`  - "California's Automatic Renewal Law, amended by AB 2863 for contracts from July 1, 2025, requires cancellation in the same medium the consumer used to sign up."`

**F2 (line 181, second sentence)**: replace "A consumer who accepted the offer online must be able to cancel online, and cancellation must be available in the same medium used to sign up." with:
"The law already lets a consumer who accepted the offer online cancel online, and the amendment adds that cancellation must be available in the same medium the consumer used to sign up."

**F3 (line 278, first sentence of FAQ answer)**: replace with:
"For consumer subscriptions, California's Automatic Renewal Law lets people who signed up online cancel online, and AB 2863 adds a same-medium cancellation rule for contracts entered into, amended or extended from July 1, 2025."
(Keep the second sentence, "The FTC's click-to-cancel rule was vacated in July 2025, but ROSCA still applies.", unchanged.)

**F4 (line 28)**: replace "and I'm one of its senior product designers." with:
"and I work on that team as a senior product designer."

**F5 (line 66, first sentence)**: replace with an own-words definition, so NN/g's wording is not used uncredited and no external link is added:
"A dashboard gathers the charts and numbers a person checks most often onto one screen, so status reads at a glance and the next step comes quickly."

**F6 (line 84, sentences 3–4)**: replace "We pulled ratios … their own. Across the whole … higher user retention." with:
"We moved ratios like win rate and profit factor into small widgets and let each trader choose and arrange their own. Across the whole web and mobile redesign, with dashboard analytics as its main focus, the TradeZella case study reports 40% more user interaction and 25% higher user retention."

**F7 (line 113, first sentence)**: replace with:
"[Digno's three-level scores](/case-studies/digno/) show one score with a separate view for each level."

**F8 (line 115, second sentence)**: replace with:
"That gap is the roles and settings work our team designs: views for admins, members and guests, plus permissions, integrations and audit logs."

**F9 (line 119, bold answer, 28 words)**: replace with:
"**SaaS data tables work when they support four jobs: find records, compare them, view, edit or add one row and act on one record or many at once.**"

**F10 (line 136, second sentence)**: replace with:
"In dense tables I check row actions and icon buttons against 2.5.8 before anything else."

**F11 (line 138, sentences 2–3)**: replace "Order work had been spread … as items are added." with:
"Order work used to be spread over several disconnected tools. On the new order screen, one order can mix data processing services and digital channels with data products, and the cost estimate refreshes with each added item."

**F12 (line 160, third sentence)**: replace with:
"I design upgrade prompts, usage limits, invoices and the cancellation flow as one path, because the customer walks it as one; all four belong to the plans-and-billing part of our SaaS design work."

**F13 (line 191, third sentence)**: replace "Most advice stops at the first-run screen, but a returning user meets more empty states than a new one: a filter that matches nothing, records someone deleted, a sync that failed." with:
"Empty states are not only a first-run problem: a returning user meets them too, in a filter that matches nothing, records someone deleted or a sync that failed."

**F14 (line 228, first sentence)**: replace with:
"Enterprise buyers add a security review of SSO, System for Cross-domain Identity Management (SCIM) provisioning, audit logs and System and Organization Controls 2 (SOC 2) evidence, and federal buyers also ask for Section 508 conformance."

**F15 (line 258, second sentence)**: replace with:
"In our [SaaS product design](/services/saas-products/) work, common first projects are onboarding, a dashboard, billing or one workflow."

**F16 (line 270, second sentence)**: replace with:
"One surface can be a project on its own; a dashboard, billing or one workflow often comes first."

**F17 (line 282, first sentence)**: replace with:
"Pick 2 or 3 metrics before work starts; at kick-off we usually settle on time to first value, activation rate and trial-to-paid conversion."

**Notes for the orchestrator**
- Lines 181 and 278 also feed the brief's LEGAL FRAME (brief l.483). If the brief outline or any takeaway draft repeats "online cancel … for contracts from July 1, 2025", update it to the same-medium framing.
- Triage-grid SVG: add the "Metric to pull" column, or drop it from the text panel and visuals marker, so image and panel match (layout rule, not a fact failure).

VERDICT: FAIL
