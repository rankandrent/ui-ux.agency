# Fact-check: user-onboarding-automation

Checked 2026-10-16 against `content/blog/user-onboarding-automation.md` (draft, qa: pending), the text of all 7 SVGs in `public/blog/user-onboarding-automation/`, the brief, `content/services/saas-onboarding-design.json`, `content/services/chatbot-ui-design.json`, `content/home.ts`, `content/pages/about.md`, `terms.md`, `thank-you.md` and `components/forms/LeadForm.tsx`.

**Method note:** WebFetch failed with `getaddrinfo ENOTFOUND` for ftc.gov, support.google.com, w3.org and nngroup.com. I verified every source with WebSearch restricted to the source's domain, checking that the post's exact URL (host + path) came back. Every external URL in the post was returned by its own domain's search: FTC guide, `support.google.com/mail/answer/81126`, `support.google.com/mail/answer/14229414`, both W3C Understanding pages, the NN/g article, the TechTarget definition and the Braze docs page. I could not load any page directly, so I cannot confirm that each one returns 200 to a browser. QA's link check should confirm that.

**Brief status notes checked (lesson 2026-10-12):** the link-builder's "verified" notes were right on the URLs. One status hid a problem: "the 2-day figure appears as '48 hours' in Google's enforcement wording" was marked verified, but the post still says "within 2 days" (see F2).

## Claims

| # | Claim (line) | Verdict | Source |
|---|---|---|---|
| 1 | "we've designed 200+ products since 2017" (L30) | TRUE | RULES.md confirmed facts; about.md "more than 200 digital products since 2017" |
| 2 | "We're the design team of tkxel" (L30) | TRUE | home.ts FAQ "the UI UX design team of tkxel" |
| 3 | Talha Saleem, senior UI and UX designer (L30) | TRUE | home.ts team: "Senior UI/UX Designer" |
| 4 | "our SaaS onboarding design work starts with the screens, not the messages" (L30) | WRONG (process order not on hub) | Hub step 1 is "Funnel review: We measure drop-off … and watch new-user session recordings"; the hub's 6 parts include lifecycle emails. See F1 |
| 5 | "In a product-led growth model, most trial users never talk to anyone" (L46) | UNVERIFIABLE (unsourced "most") | No source. See F3 |
| 6 | "we redesign sign-up, setup, empty states and in-app guidance as one job" (L46) | TRUE | Hub hero sub: "We redesign sign-up, setup, empty states and in-app guidance" |
| 7 | Decision matrix: 10 moments in 4 quadrants (L59, SVG, text panel) | TRUE (internal) | Count: 3 + 2 + 2 + 3 = 10; SVG and panel match quadrant for quadrant |
| 8 | "Every quadrant except keep human still uses automation" (L56) | TRUE (internal) | Assist card: "A rule flags them" |
| 9 | Rule blueprint: 6 parts, example values (L79–101, SVG) | TRUE (internal, labeled hypothetical; cap labeled "a team choice and not a benchmark") | SVG text = panel text |
| 10 | Userpilot docs: segments from user data, company data and event conditions, used as audiences for flows (L109) | TRUE (plain text, no link) | https://docs.userpilot.com/users-companies/segments ; https://docs.userpilot.com/in-app-engagement/flows/getting-started/flow-settings |
| 11 | "Most in-app engagement for user onboarding fails for a timing reason, not a copy reason." (L115) | UNVERIFIABLE (unsourced "most") | No source. See F4 |
| 12 | NN/g splits proactive help into push and pull revelations (L115) | TRUE | https://www.nngroup.com/articles/help-and-documentation/ ("proactive help can be further divided into two categories of push and pull revelations") |
| 13 | Push revelations "appear regardless of what the user is doing, such as tips at launch, and users often ignore them"; pull revelations are contextual and tied to the current task (L115) | UNVERIFIABLE for "users often ignore them" on the linked page | The linked page's search results confirmed the definition and the launch-tips example. "Often ignored" came back only in a summary that mixed several nngroup.com articles (onboarding-tutorials, ui-accelerators), so it is not tied to the linked page (lesson 2026-10-07). See F5 |
| 14 | "In our onboarding work, we rate a product tour's effect on activation as small and a guided first task's as direct" (L124) | TRUE | Hub table row "Effect on activation: Small / Direct" |
| 15 | WCAG 2.2 AA as "the standard I use as the US frame for the ADA and Section 508" (L126) | TRUE as phrased (author's practice) | Caveat for the orchestrator: Section 508 incorporates WCAG 2.0 AA, and the DOJ ADA Title II rule adopts WCAG 2.1 AA. The sentence claims only the author's practice, so it stands. Do not let it be shortened to "ADA requires WCAG 2.2" |
| 16 | SC 1.4.13: a tooltip "must be dismissible without moving the pointer or focus, and hoverable … persistent until the trigger is removed, the user dismisses it or its information is no longer valid" (L128) | WRONG (drops the SC's exceptions and condition) | https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html. Dismissible applies "unless the additional content communicates an input error or does not obscure or replace other content". Hoverable applies "if pointer hover can trigger" the content. Level AA confirmed. Persistent wording TRUE. See F6 |
| 17 | SC 2.4.11 Focus Not Obscured (Minimum): a focused control "must not be entirely hidden by author-created content, such as a tour popover or a sticky banner" (L129) | TRUE | https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html (Level AA; sticky content and F110 sticky header/footer failure) |
| 18 | "Our onboarding redesigns cover in-app guidance together with the screens beneath it." (L131) | TRUE | Hub hero sub |
| 19 | Channel table timings "24 hours or more", "the same error for 10 minutes" (L155–156, channel SVG); ladder rung 2 "within 10 minutes" (L185, ladder SVG) | WRONG (author's timings shown as fixed rules, not labeled) | L139 labels only the 24-hour email as "an example timing". The 10-minute stuck signal has no label in the table, the ladder or either SVG. See F7 |
| 20 | "These emails answer to 2 US rule sets" (L163). The second one is Gmail's sender guidelines | WRONG | Gmail's guidelines are a mailbox provider's policy, not a US rule set. See F8 |
| 21 | CAN-SPAM Act of 2003, full name (L163) | TRUE | https://www.ftc.gov/legal-library/browse/statutes/controlling-assault-non-solicited-pornography-marketing-act-2003-can-spam-act |
| 22 | "The CAN-SPAM Act sorts an email by its primary purpose." (L163) | TRUE | https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business |
| 23 | "The FTC compliance guide covers any message whose primary purpose is the commercial advertisement or promotion of a product or service" (L163) | WRONG (wording) | The law covers these messages, and the guide explains the law. The statutory phrase is "commercial advertisement or promotion of a commercial product or service". See F9 |
| 24 | Commercial email needs a working opt-out; opt-out honored within 10 business days (L163) | TRUE | FTC guide ("honor a recipient's opt-out request within 10 business days"); FTC 2008 rule kept 10 days |
| 25 | "which is 2 weeks of working days" (L163) | TRUE | Arithmetic: 10 business days = 2 five-day working weeks |
| 26 | Gmail bulk sender: "close to 5,000 or more messages to personal Gmail accounts in 24 hours", status permanent (L165) | TRUE | https://support.google.com/mail/answer/14229414?hl=en ("Senders who meet the above criteria at least once are permanently considered bulk senders") |
| 27 | Bulk senders set up SPF, DKIM and DMARC (L165) | TRUE | https://support.google.com/mail/answer/81126?hl=en |
| 28 | One-click unsubscribe on marketing and subscribed messages (L165) | TRUE | 81126: "Marketing messages and subscribed messages must support one-click unsubscribe". FAQ: transactional mail excluded |
| 29 | "…and process it within 2 days" (L165) | OUTDATED (wording, source) | No Google page returned "2 days". Google's current wording is 48 hours. The subscription guidelines say "Process and honor unsubscribe requests within 48 hours" (https://support.google.com/mail/answer/15263077); the FAQ calls 48 hours a recommendation. See F2 |
| 30 | Spam rate in Postmaster Tools below 0.3% (L165; holdout table L274; holdout SVG "Gmail's 0.3% ceiling") | TRUE | 81126 / 14229414 (keep below 0.3%, aim for under 0.1%) |
| 31 | "Gmail stepped up enforcement in November 2025, including rejections for mail that fails these rules." (L165) | TRUE | 14229414: "Starting November 2025, Gmail is ramping up its enforcement on non-compliant traffic … temporary and permanent rejections" |
| 32 | One-click unsubscribe means less reason to report spam (L167) | TRUE | 14229414: unwanted messages without one-click unsubscribe "are more likely to be reported as spam" |
| 33 | GDPR adds consent rules if you sell in the EU (L167) | TRUE (one clause, as the brief allows) | — |
| 34 | TechTarget PQL definition (L173) | TRUE (paraphrase, not quoted) | https://www.techtarget.com/enterprise-software/definition/product-qualified-lead-PQL ("experienced value … free trial, use of a limited feature model or other types of first-hand experience") |
| 35 | PQL threshold "3 users invited and 2 reports shared within 14 days" (L173) | TRUE (labeled "An illustrative threshold") | — |
| 36 | Admins are the usual handoff candidates "since invited members land in a workspace someone already set up" (L175) | TRUE (reasoning) | Hub FAQ: "since the admin has already set up the account" |
| 37 | Handoff ladder: 5 rungs, owners, note fields (L184–190, SVG) | TRUE (internal) except the unlabeled 10-minute timing | SVG text = panel text; rung 3 labeled illustrative. See F7 |
| 38 | Google PAIR Mental Models: onboard in stages; can do / can't do / how it is likely to change / how to improve it; mismatched mental models lead to unmet expectations, frustration, misuse and product abandonment (L202) | TRUE | https://pair.withgoogle.com/chapter/mental-models/ |
| 39 | "In our chatbot UI design work, we add a visible handoff option after two failed turns. The chat history is passed along so users never repeat themselves." (L204) | TRUE (word for word, both parts unhedged) | chatbot-ui-design.json mistake card "No escape" + deliverable "Human handoff" |
| 40 | "In our onboarding projects, we talk to 5 to 8 recent sign-ups, both activated and lost, about what they expected. We test the prototype with new users too." (L216) | TRUE | Hub steps 2 and 3 |
| 41 | Step 6: "give each batch 14 days so its effect stays readable" (L217) | WRONG | It conflicts with the post's own Braze citation (L252: "at least 1 month, because shorter windows fluctuate"). It also breaks the cohort-age rule: users who join on day 13 of a batch cannot be read at 14 days (lesson 2026-10-14). See F10 |
| 42 | Rule sheet orientation: "One row holds one rule, and its last column asks whether the rule is patching a screen" (L219); text panel header "Column" (L232) and "each column of the rule sheet" (L228); "Fill in one row per live rule" (L246); SVG subtitle "9 columns, 2 example rules, room for yours", SVG header cell "Column", SVG `<title>` "one row per rule, with a patch-or-fix column" | WRONG (internal) | SVG geometry: 9 field rows (y 188–695, row lines at 254/320/357/394/460/526/563/629), rule columns at x 196/576, and 4 blank columns at x 1022/1050.5/1079/1107.5. The graphic is one column per rule with a patch-or-fix row, which matches the caption (L224) and L222. See F11 |
| 43 | "4 blank columns for yours", "9 fields as rows", "2 hypothetical rules" (L222) | TRUE | SVG geometry above |
| 44 | Braze global control group of 1% to 15% of users who receive no campaigns (L252) | TRUE | https://www.braze.com/docs/user_guide/audience/global_control_group (integer 1–15 inclusive). Caveat: Braze still sends API campaigns to the control group and allows tag-based exclusions. The post's "receive no campaigns" is Braze's own headline wording, so it stands |
| 45 | "Its documentation suggests reading results over at least 1 month, because shorter windows fluctuate." (L252) | TRUE | Same Braze docs page, troubleshooting: over short periods metrics "can fluctuate day to day or week to week"; review "over the course of at least one month". The "fluctuate" sentence is on the docs page, not on the resources article |
| 46 | "I'd hold out 10% of users and read lift from the holdout, never from a before-and-after chart." (L252) followed by "In our onboarding projects, we help set up an A/B test where possible and compare activation before and after." (L254) | WRONG (contradicts our own hub method) | Hub step 4: "help set up an A/B test where possible and compare activation before and after"; hub FAQ: metrics "each measured before and after". The author rejects a method the hub sells two lines later (lesson 2026-10-05, rubric vs our own claims). See F12 |
| 47 | Holdout SVG: "Illustrative: no real data", no axis numbers (L257, SVG) | TRUE | SVG text has no numeric ticks |
| 48 | "the 3 metrics we track in our onboarding projects: activation rate, time to first value and day-7 return rate" (L280) | TRUE | Hub FAQ "How do you measure SaaS onboarding success?" |
| 49 | "These 5 failure modes cover most of the damage" (L286) | UNVERIFIABLE (unsourced "most") | No source. See F13 |
| 50 | "That's the screen-first work described at the top of this guide." (L294) | WRONG (follows from #4) | See F1 |
| 51 | "In our services, an onboarding redesign runs in 4 steps over 3 to 6 weeks … $15,000–$45,000" (L294) | TRUE | Hub: "runs in 4 steps over 3 to 6 weeks"; "costs $15,000 to $45,000 and takes 3 to 6 weeks"; priceRange. Correctly scoped to "our services" (hub's own process and price) |
| 52 | "We design onboarding that your team builds in code or in tools such as Appcues, Userpilot or Pendo." (L294) | TRUE (word for word) | Hub FAQ |
| 53 | "We judge it by the 3 outcome metrics above." (L294) | TRUE | Hub FAQ |
| 54 | "our wider SaaS product design practice" (L296) | TRUE | content/pillars.ts slug `saas-products` |
| 55 | "book a free consultation … You'll hear back from a senior designer within one business day, Eastern Time (ET)." (L302) | TRUE | about.md "A senior designer replies within one business day"; thank-you.md; terms.md "free consultation"; ET per the RULES.md US-market rule. "bring the screen behind it" means bringing it to the call, not uploading a file, so the LeadForm (text field only) is not a blocker |
| 56 | FAQ 2: tools let a product team change guidance without a release (L314) | TRUE (general; tools are no-code builders) | — |
| 57 | FAQ 4: an email that mainly helps a customer use an account they signed up for "can be" transactional or relationship content; an upgrade pitch can make it commercial and then it needs an opt-out; setup help at the top (L322) | TRUE (hedged) | FTC guide: five transactional/relationship categories, including delivering goods or services the recipient already agreed to receive. Commercial if the subject line suggests an ad or the transactional content "does not appear mainly at the beginning". The "setup help at the top" method matches the placement test. The counsel line is present |
| 58 | Hypothetical labels: intro product (L26, "hypothetical" in the first sentence), "In this example" (L28, L124), "That's an example timing" (L139), "illustrative threshold" (L173), rung 3 (L186), "hypothetical rules" (L222, L230), "illustrative … no real data" (L257, L263) | TRUE | — |
| 59 | Do-not-use list (75% churn, MRR 34%, 10x–50x, carousel seconds, Braze 20%, Appcues "a day", Userpilot 37.5%, PQL rates, frequency-cap benchmarks) | TRUE (none used) | Brief notes |
| 60 | Honesty: no clients, case-study results, testimonials, awards, local office or invented team roles | TRUE | No case-study mentions; no Apex HCM / Fortna / ToolsGroup; first-person "I" sentences are method, and "we" sentences trace to hub/chatbot JSON |

## Fixes (exact replacement text)

**F1 (L30 and L294, process order).**
- L30, replace "That second case is why our [SaaS onboarding design](/services/saas-products/saas-onboarding-design/) work starts with the screens, not the messages." with:
  > That second case is why our [SaaS onboarding design](/services/saas-products/saas-onboarding-design/) work redesigns the screens and the guidance on top of them together.
- L294, replace "That's the screen-first work described at the top of this guide." with:
  > That's the redesign work described at the top of this guide.

  (Hub hero: "We redesign sign-up, setup, empty states and in-app guidance".)

**F2 (L165, Gmail unsubscribe timing).** Replace "They offer one-click unsubscribe on marketing and subscribed messages and process it within 2 days." with:
> They offer one-click unsubscribe on marketing and subscribed messages, and Google's subscription guidelines ask senders to honor unsubscribe requests within 48 hours.

(Plain-text attribution. If the link-builder adds a link, it should go to https://support.google.com/mail/answer/15263077, not 81126.)

**F3 (L46).** Replace "In a product-led growth model, most trial users never talk to anyone, so these rules carry most of the guidance." with:
> In a product-led growth model, a trial user can reach first value without talking to anyone, so these rules carry much of the guidance.

**F4 (L115; keeps the brief's n-gram).** Replace "Most in-app engagement for user onboarding fails for a timing reason, not a copy reason." with:
> When in-app engagement for user onboarding fails, I check the timing before the copy.

**F5 (L115, NN/g).** Replace "Push revelations appear regardless of what the user is doing, such as tips at launch, and users often ignore them. Pull revelations are contextual and tied to the task the user is working on right now." with:
> Push revelations appear whether or not they relate to the user's current task, such as tips shown when an app launches. Pull revelations are contextual and relate to the task the user is working on right now.

**F6 (L128, SC 1.4.13).** Replace the bullet text after the link with:
> a tooltip must be dismissible without moving the pointer or focus, unless it reports an input error or covers no other content. If hover shows it, it must be hoverable. It must stay persistent until the trigger is removed, the user dismisses it or its information is no longer valid.

**F7 (L142 and L178, unlabeled 10-minute timings).** I left the SVGs alone. The figure lead-ins carry the label:
- L142, replace with:
  > The relay below passes each user between channels by state, using example timings rather than benchmarks, with one shared gate that stops every channel once the step is done.
- L178, replace with:
  > The ladder below climbs from automation alone to a person, with the owner of each rung; the timings on rungs 2 and 3 are examples, not benchmarks.

**F8 (L163).** Replace "These emails answer to 2 US rule sets." with:
> These emails answer to 2 rule sets: a US law and Gmail's sender policy.

**F9 (L163, FTC).** Replace "The [Federal Trade Commission (FTC) compliance guide](…) covers any message whose primary purpose is the commercial advertisement or promotion of a product or service." with (same URL):
> The [Federal Trade Commission (FTC) compliance guide](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business) explains that the law covers any email whose primary purpose is the commercial advertisement or promotion of a commercial product or service.

**F10 (L217, step 6).** Replace with:
> 6. **Release in stages behind a holdout group**, a few rules at a time. I keep each batch live for at least 1 month before adding the next, and I read activation only for users who signed up at least 14 days earlier.

**F11 (rule sheet orientation, post + SVG).**
- L219, replace "One row holds one rule, and its last column asks whether the rule is patching a screen." with:
  > One column holds one rule, and its last row asks whether the rule is patching a screen.
- L228, replace "This table shows each column of the rule sheet with two hypothetical rules filled in." with:
  > This table shows each field of the rule sheet with two hypothetical rules filled in.
- L232 table header: change `| Column | Rule 1: warehouse reminder | Rule 2: chart builder help |` to `| Field | Rule 1: warehouse reminder | Rule 2: chart builder help |`
- L246, replace "Fill in one row per live rule and count the patches." with:
  > Fill in one column per live rule and count the patches.
- `onboarding-automation-rule-sheet.svg` (for the visual designer/orchestrator; three text nodes, same positions):
  - `<title>`: `Onboarding automation rule sheet: one column per rule, with a patch-or-fix row`
  - subtitle text (x=64, y=124): `9 fields, 2 example rules, room for yours`
  - header cell (x=78, y=173): `Field`

**F12 (L252, contradiction with our hub).** Replace "In the hypothetical analytics product, I'd hold out 10% of users and read lift from the holdout, never from a before-and-after chart." with:
> In the hypothetical analytics product, I'd hold out 10% of users and read the rules' lift from the holdout, not from a before-and-after chart alone.

(L254 stays as is: it is the hub's step 4 word for word.)

**F13 (L286).** Replace "These 5 failure modes cover most of the damage:" with:
> These are the 5 failure modes I check for first:

## Notes for the orchestrator

- No hub inconsistency found: the post's hub figures (4 steps, 3 to 6 weeks, $15,000–$45,000, 5 to 8 recent sign-ups, tools sentence, 3 outcome metrics) match `saas-onboarding-design.json` word for word or nearly so, and each is credited to "our services / our onboarding projects". The chatbot handoff matches `chatbot-ui-design.json`.
- The FAQ 4 transactional reading ("can be transactional or relationship content") is an inference from the FTC's category list, not a sentence in the guide. The hedge and the counsel line make it acceptable. Do not let QA drop "can be".
- The brief's EAV line "process it within 2 days" (Gmail sender requirements) is stale. Correct it in the brief so the next writer does not reuse it.

VERDICT: FAIL
