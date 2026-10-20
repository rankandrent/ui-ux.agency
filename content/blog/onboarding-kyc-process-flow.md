---
title: "Onboarding KYC process flow: a flow chart for digital account opening"
metaTitle: "Onboarding KYC Process Flow: A Flow Chart, Screen by Screen"
description: "Onboarding KYC process flow for fintech product teams: chart all 9 steps from sign-up to funded account, with the pending, retry and manual review screens."
date: 2026-10-20
updated: 2026-10-20
contributors: [umar-sarwar]
author: ahmad-ullah
type: Article
services: [saas-onboarding-design]
industries: [fintech]
tags: [onboarding kyc process flow, kyc onboarding process flow chart, banking client onboarding process flow chart, bank customer onboarding process flow, client onboarding kyc process flow, digital customer onboarding]
keyword: "onboarding kyc process flow"
funnel: tofu
takeaways:
  - "Chart the flow in 2 lanes: the screens your customer sees on top and the bank's checks underneath."
  - "The US Customer Identification Program asks for name, date of birth, address and an identification number before an account opens."
  - "After the automated checks the flow splits 4 ways (approved, step-up, manual review, declined), and each outcome needs its own screen."
  - "The chart ends at the first funded account, because approval alone gives the customer nothing to use."
  - "Compliance sets the rules, the identity vendor runs the checks and design owns order, copy, states and accessibility."
draft: true
qa: pending
---

Know your customer (KYC) rules arrive as legal text, so when I chart an onboarding KYC process flow, I put the screens your customer sees on top and the bank's checks underneath, on one page. Take the Customer Identification Program (CIP) rule at [31 CFR 1020.220](https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.220). It asks a US bank for a name, a date of birth, an address and an identification number before an account opens. <!-- source: https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.220 -->

On screen, that one sentence of regulation becomes 4 fields, 1 notice and at least 1 wait the customer can see. Many people will meet those screens on a phone: the [Federal Deposit Insurance Corporation (FDIC) 2023 household survey](https://fdic.gov/household-survey/2023-fdic-national-survey-unbanked-and-underbanked-households-report) found that 48.3% of banked US households used mobile banking as their primary way to reach their accounts. <!-- source: https://fdic.gov/household-survey/2023-fdic-national-survey-unbanked-and-underbanked-households-report -->

I write as principal user experience (UX) designer for [ui-ux.agency, tkxel's design team](/about/), which has designed 200+ products since 2017. This post covers the customer lane: screens, waits, copy and the events you log. Your compliance team and counsel own the rules, and our [SaaS onboarding design](/services/saas-products/saas-onboarding-design/) <!-- link: service page, required, first UP link --> work shapes the screens that sit on top of them.

## How does an onboarding KYC process flow run, end to end?

**An onboarding KYC process flow runs in 9 steps from the first screen to a funded account, and one decision point after the checks splits it 4 ways.**

The KYC onboarding process flow chart below is a swimlane flow chart with 2 lanes. The top lane holds the screens. The bottom lane holds the checks your bank or partner bank runs, and every check needs a visible state above it, even when that state only says "We're checking your details."

<!-- visual: Wide two-lane swimlane flow chart. Top lane label "What the customer sees" with 9 screen tiles; bottom lane label "What the bank checks" with the matching check tiles; dashed connectors between lanes; a decision diamond at step 5 fanning to 4 outcome chips (approved, step-up, manual review, declined) at step 6; finish flag "first funded account" on step 8; step 9 drawn faded after the flag as background monitoring. File onboarding-kyc-process-flow-swimlane.svg -->

![Two-lane swimlane flow chart of an onboarding KYC process flow with 9 customer screens on top, the bank's matching checks below, 4 outcomes after the automated checks and a finish flag at the first funded account](/blog/onboarding-kyc-process-flow/onboarding-kyc-process-flow-swimlane.svg "Onboarding KYC process flow as a two-lane swimlane flow chart: 9 customer screens above the bank's checks, ending at the first funded account")

<details class="astext"><summary>Show as text</summary>

Top lane: what the customer sees. Bottom lane: what the bank or partner bank checks.

1. **Notice and eligibility.** Screen: welcome with the CIP notice. Check: the bank's eligibility rules.
2. **Contact and consent.** Screen: email, phone and electronic-delivery consent. Check: contact confirmed and consent recorded.
3. **Identity details.** Screen: identity form with name, date of birth, address and Social Security number. Check: identity data captured.
4. **Document and selfie capture, when required.** Screen: document capture screen and selfie and liveness step. Check: document authenticity and face match.
5. **Automated checks.** Screen: "We're checking your details." Check: identity verification, sanctions screening and fraud signals.
6. **Outcome.** Screen: approved, step-up, manual review or declined. Check: decision rules and the manual review queue.
7. **Disclosures and credentials.** Screen: account agreement, disclosures and passkey setup. Check: account opened.
8. **Funding.** Screen: funding screen. Check: first deposit posted. Finish line: first funded account.
9. **Ongoing monitoring.** Screen: none until the bank needs updated details. Check: ongoing due diligence.

</details>

I end the chart at the first funded account, not at "approved." An approved account with no first deposit has given the customer nothing to use yet, so the finish flag sits on step 8 and step 9 runs in the background.

People often ask for the five stages of onboarding. Read the 9 steps as apply (steps 1–3), verify (4–5), decide (6), open (7) and fund (8). The same two lanes work for neobank onboarding, brokerage account opening or card program onboarding; only the rules in the bottom lane change. The first 3 steps are where the customer types, so start with what the rules ask for.

## What does the KYC process flow collect, and in what order?

**An onboarding KYC process flow for a US consumer collects name, date of birth, address and an identification number, and I order screens easy first, document last.**

For a US person, the identification number is a taxpayer identification number (TIN), which for most consumers is the Social Security number (SSN). The rule also has each bank keep a written, risk-based identity program inside its anti-money laundering (AML) program, and that program decides anything beyond the minimum. <!-- source: https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.220 -->

In a bank customer onboarding process flow for consumer checking account opening, those points become the identity form. Say you run a hypothetical neobank that opens checking accounts through a partner bank. Its field card tags every field with the rule behind it and the line the customer reads.

<!-- visual: Stacked mobile form mock for a hypothetical neobank checking account with 6 fields; each field has a margin tag naming the rule (identity rule, E-SIGN Act via Regulation DD, product) and the one-line reason shown under the field. File onboarding-kyc-process-flow-field-reasons.svg -->

![Mobile identity form for a hypothetical neobank with margin tags naming the rule behind each field and the one-line reason the customer reads](/blog/onboarding-kyc-process-flow/onboarding-kyc-process-flow-field-reasons.svg "Identity form field card for a hypothetical neobank: the rule behind each field and the reason line the customer reads")

<details class="astext"><summary>Show as text</summary>

The card below lists each field of the hypothetical neobank's flow with its rule, its step and the reason line under the field.

Table: Identity form fields with the rule, step and reason line for each

| Field | Rule | Step | Reason line shown |
|---|---|---|---|
| Legal name | Identity rule. | Step 3. | "We confirm who opens each account." |
| Date of birth | Identity rule. | Step 3. | "Used to confirm your identity." |
| Street address | Identity rule. | Step 3. | "Where you live, not a P.O. box." |
| SSN | Identity rule (TIN for a US person). | Step 3. | "Needed to verify you. We show only the last 4 digits." |
| Email and phone | Product. | Step 2. | "So we can send your status and account documents." |
| E-delivery consent | E-SIGN Act, via Regulation DD. | Step 2. | "Lets us send account documents electronically." |

</details>

The CIP notice comes first. The rule requires notice of the identity requirements before an account opens and offers sample text headed "Important Information About Procedures for Opening a New Account." <!-- source: https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.220 --> I place it as a short, readable screen or an inline block on step 1, never as a buried link.

Regulation DD account disclosures go out before the account opens, and [12 CFR 1030.4](https://www.consumerfinance.gov/rules-policy/regulations/1030/4/) gives an account opened online no later mailing window. <!-- source: https://www.consumerfinance.gov/rules-policy/regulations/1030/4/ --> Electronic delivery is subject to the consent rules of the Electronic Signatures in Global and National Commerce (E-SIGN) Act under [12 CFR 1030.3](https://www.consumerfinance.gov/rules-policy/regulations/1030/3/). So E-SIGN Act consent gets its own consent screen in step 2, before the first disclosure is sent.

Easy fields go first and the photo identification (ID) document last, with a progress bar and save and resume between steps. When a customer returns, Web Content Accessibility Guidelines (WCAG) 2.2 success criterion (SC) 3.3.7 [Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html), a Level A criterion, expects the form to bring back what they already typed. Its security exception lets a masked SSN field stay masked. Typed data is the quick part; the camera step needs more design care.

## Where do document capture and the selfie fit in the flow?

**In an onboarding KYC process flow, document capture and a selfie or liveness check follow the typed details, and only when risk rules or the identity vendor call for them.**

The identity rule allows documentary verification, such as an unexpired government photo ID, and non-documentary verification, such as checking details against a consumer reporting agency or a public database. <!-- source: https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.220 --> Which method runs for which customer is a risk decision for compliance.

Banks and vendors often cite the National Institute of Standards and Technology (NIST) digital identity guidelines, [NIST SP 800-63-4](https://csrc.nist.gov/pubs/sp/800/63/4/final), final in July 2025 and superseding SP 800-63-3. <!-- source: https://csrc.nist.gov/pubs/sp/800/63/4/final --> Its SP 800-63A-4 volume covers identity proofing, and identity assurance level 2 (IAL2) proofing can run remotely. [Remote unattended proofing](https://pages.nist.gov/800-63-4/sp800-63a/proofing/) is fully automated, with no proofing agent, on devices the provider does not control. NIST writes for federal agencies, so treat it as the reference model, not a bank rule.

[Revision 4 adds controls](https://pages.nist.gov/800-63-4-Implementation-Resources/) for injection attacks and forged media. That threat is why vendors add a selfie and liveness check, and why the screen explains it in one line: "We match your face to your ID so no one else can open an account in your name."

<!-- visual: Phone frame of the hypothetical neobank's ID capture step (step 4 of 9) with 6 numbered callouts: frame guide, glare and blur warning, retake with reason, accepted ID types, "No camera? Use another way" link, progress and save. File onboarding-kyc-process-flow-id-capture.svg -->

![Annotated phone screen of an ID document capture step with 6 numbered callouts for frame guide, glare warning, retake, accepted ID types, a no-camera path and progress with save](/blog/onboarding-kyc-process-flow/onboarding-kyc-process-flow-id-capture.svg "Annotated ID document capture screen: 6 callouts from the frame guide to the no-camera path and save")

<details class="astext"><summary>Show as text</summary>

1. **Frame guide:** corners show where the card's edges go.
2. **Glare and blur warning:** appears before the photo is taken, not after an upload fails.
3. **Retake:** one tap, with the reason the last photo failed.
4. **Accepted ID types:** listed before the camera opens.
5. **"No camera? Use another way":** the alternative path compliance approves.
6. **Progress and save:** step 4 of 9, with save and resume.

</details>

Callout 5 is the accessibility line of the identity verification flow. Some people have no working camera and some cannot pass a face match, so compliance and the vendor choose the alternative and the design puts it on the capture screen, not in a help article.

Capture runs inside your vendor's software development kit (SDK), so the design works within what the identity verification vendor SDK lets you change. We don't pick the vendor or set risk rules. Once the data and images are in, the checks run and the flow splits.

## How does the KYC flow branch after the checks?

**After the automated checks, the onboarding KYC process flow splits into 4 outcomes: approved, step-up, manual review or declined, each with its own screen and one next action.**

The check lane runs identity verification against data sources, fraud signals and Office of Foreign Assets Control sanctions screening (OFAC screening, for short). Higher-risk customers move to enhanced due diligence (EDD) under the bank's procedures. The rules belong to the bank; the design job is the screen each result lands on.

Sanctions checks are one reason a legitimate customer lands in review. [OFAC's Sanctions List Search](https://ofac.treasury.gov/sanctions-list-search-tool) uses fuzzy logic on names, with a slider that sets how close a match must be. <!-- source: https://ofac.treasury.gov/sanctions-list-search-tool --> A near match on a common name can trigger review, and where the threshold sits is a compliance decision, never the designer's.

<!-- visual: Outcome map, not a yes/no diamond chain. One "automated checks" node splits into 4 cards (approved, step-up, manual review, declined); each card shows the screen headline, the customer's next action and who owns its rules. File onboarding-kyc-process-flow-outcomes.svg -->

![Outcome map where one automated check node splits into 4 cards for approved, step-up, manual review and declined, each with a headline, next action and rule owner](/blog/onboarding-kyc-process-flow/onboarding-kyc-process-flow-outcomes.svg "KYC outcome map: approved, step-up, manual review and declined, each with its headline, next action and owner")

<details class="astext"><summary>Show as text</summary>

The table compares the 4 outcomes by the headline the customer reads, the action offered and who sets the rules behind it.

Table: KYC outcomes with headline, next action and rule owner

| Outcome | Headline | Next action | Who sets the rules |
|---|---|---|---|
| Approved | "Your account is ready to open." | Review disclosures and set up sign-in. | Compliance sets approval rules; product writes the copy. |
| Step-up | "One more check: a photo of your ID." | Capture a document or answer extra questions. | Compliance and the vendor set triggers; product designs the request. |
| Manual review | "We're reviewing your details." | Watch the status page for an update. | Operations sets review timing; product shows it. |
| Declined | "We can't open this account right now." | Use the contact route or read any required notice. | Counsel and compliance set the wording rules; product keeps the tone plain. |

</details>

The decline screen needs a next step too: a contact route and any notice your counsel requires. I keep the tone plain and leave out reasons unless counsel approves the wording.

Does your current flow send every non-approval to one "Something went wrong" screen? That gap is the kind of work we take on: we redesign sign-up, setup and the review states so new users reach their first result, and we compare activation before and after. Manual review is the outcome most products leave as a blank screen.

## What should the customer see while KYC review is pending?

**While KYC review is pending, the customer sees what is being checked, how long it usually takes from your own data, what happens next and how they will hear back.**

Nothing they entered should be lost, and every message links to the verification status screen. Timing is a compliance question first: the identity rule does not demand that every check finish before the account opens, but it does expect verification within a reasonable time, under risk-based procedures. <!-- source: https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.220 -->

Whether your program opens an account before checks finish is for compliance and your partner bank to decide. If it does, the screen states the limits plainly, such as "Deposits are on hold until we finish checking your details." The tracker below keeps timing as placeholders, because the only honest numbers come from your own review queue.

The table pairs each pending status with the screen copy and the message that goes out.

Table: Pending status tracker with screen copy and notifications

| Status | Screen copy | Notification |
|---|---|---|
| Submitted | "We're checking your details. This usually takes [your median review time]." | Confirmation email with a status link. |
| Past the usual time | "Still checking. Nothing is needed from you yet." | Status email at [your chosen point]. |
| Needs more information | "We need one more document to finish." | Email and push with a link to the exact step. |
| Decided | Approved or declined screen from the outcome map. | Email with the result and the next action. |

Status changes reach the customer by email, text message or push. Our guide to [automated onboarding emails](/blog/user-onboarding-automation/) <!-- link: sideways, same silo --> covers when a message should come from a person instead.

After approval come the disclosures, passkey setup and the funding screen. NIST's Revision 4 integrates syncable authenticators such as synced passkeys, and WCAG 2.2 SC 3.3.8 Accessible Authentication (Minimum), at Level AA, rules out a login that depends on recalling a password or retyping a code with no paste or password-manager option. None of these states shows up on the chart most banks already have.

## What a banking client onboarding process flow chart misses

**A banking client onboarding process flow chart usually maps checks, approvals and systems, and leaves out the screens, waits, exits and re-entry points a customer meets.**

Back-office templates are written for operations staff, so they stop at "account created." The product version runs to the funded account and adds the events a product team measures.

<!-- visual: The same 5 steps drawn twice side by side. Left: a plain back-office chart (boxes, approvals, systems) ending at "account created". Right: the product version with highlighted additions: pending state, decline exit, save-and-resume re-entry, event pins and the consent screen, ending at "first funded account". File onboarding-kyc-process-flow-ops-vs-product.svg -->

![Side-by-side comparison of a back-office onboarding chart ending at account created and a product chart that adds waits, exits, re-entry points, events and disclosures and ends at the first funded account](/blog/onboarding-kyc-process-flow/onboarding-kyc-process-flow-ops-vs-product.svg "Back-office onboarding chart vs product chart: what the product version adds, from waits and exits to the first funded account")

<details class="astext"><summary>Show as text</summary>

The table compares what a back-office chart shows with what the product chart adds.

Table: Back-office chart compared with the product chart

| Element | Back-office chart | Product chart |
|---|---|---|
| Steps | Checks, approvals and systems. | The same checks plus the screen above each one. |
| Waits | Not shown. | Pending status with timing from your own data. |
| Exits | A "rejected" box. | A decline screen with a next step. |
| Re-entry | Not shown. | Save and resume plus return links for step-up requests. |
| Events | Not shown. | One analytics event per step. |
| Disclosures | A compliance task. | Consent and disclosure screens placed before opening. |
| End point | Account created. | First funded account. |

</details>

Both charts earn their place. A back-office chart documents a compliance workflow, and the product chart documents a digital account opening flow. Operations and compliance own the bottom lane, while product owns the top lane.

Disagreements show up where the lanes meet: a check with no screen above it, or a screen promising timing the review queue cannot keep. Digital customer onboarding works when both teams read the same two-lane chart. Business accounts raise the stakes, because they add more people to verify.

## Client onboarding KYC process flow for business accounts

**The client onboarding KYC process flow for a business adds the legal entity's details and its beneficial owners, whom the bank verifies under the customer due diligence (CDD) rule.**

The CDD rule (31 CFR 1010.230) has banks identify and verify the beneficial owners of legal entity customers, one of the Bank Secrecy Act (BSA) rules. On February 13, 2026, the Financial Crimes Enforcement Network (FinCEN) issued [Order FIN-2026-R001](https://www.fincen.gov/system/files/2026-02/FinCEN-Order-CCDExceptiveRelief.pdf), "Exceptive Relief from Requirement to Identify and Verify Beneficial Owners at Each Account Opening." <!-- source: https://www.fincen.gov/system/files/2026-02/FinCEN-Order-CCDExceptiveRelief.pdf -->

Under that order, a bank can limit owner verification to 3 moments: the business's first account opening, cases where it has reason to doubt information it already holds and points its risk-based ongoing due diligence sets. For your flow, a returning limited liability company (LLC) opening a second account can confirm the owners on file instead of retyping them, if your bank adopts the relief. That is the bank's call, so design both paths.

Business account onboarding, also called know your business (KYB), needs three patterns that a consumer flow never uses:

- **Owner list:** each beneficial owner appears as a row with a status, so the applicant sees who is done.
- **Owner invite:** each owner gets a link to finish their own identity step, because owners type their own SSN and capture their own ID.
- **Pending tracker:** the beneficial owner form shows which person is still outstanding, so the application never stalls silently.

Whatever the account type, you only know the flow works if you log each step.

## How do you measure drop-off in the KYC onboarding flow?

**Measure the KYC onboarding flow by logging one event per step, then tracking step completion, ID retry rate, manual review rate, time in pending and time to funded account.**

In user onboarding for a money product, the activation event is the first funded account, so time to funded account is the number I watch first. If your team has not agreed on that event yet, see how to [choose the activation event](/blog/saas-onboarding/#where-does-saas-onboarding-end) <!-- link: sideways, same silo --> before you log anything.

The table maps each step's event to the metric it feeds.

Table: KYC onboarding events and the metrics they feed

| Step | Event to log | Metric it feeds |
|---|---|---|
| Identity details | Identity form submitted. | Step completion. |
| Document capture | Capture retried, with the failure reason. | ID retry rate. |
| Outcome | Outcome recorded as approved, step-up, review or declined. | Manual review rate. |
| Pending | Review started and review decided, each with a timestamp. | Time in pending. |
| Funding | First deposit posted. | Time to funded account. |

I leave benchmark values out on purpose, because published abandonment rates come from vendor surveys with different methods. Your own baseline from the first 2 weeks of logging is the number to beat, compared before and after each change. Numbers show where people stop; the compliance review decides what you can change.

## How do you turn the flow chart into signed-off screens?

**Turn the flow chart into screens by annotating each regulated screen in one shared design file, agreeing who owns each decision and testing the prototype with users before compliance review.**

I agree on ownership before the first wireframe:

- **Compliance team, BSA officer and partner bank:** rules, thresholds, notices and decline wording, because they answer to examiners.
- **Identity vendor:** the SDK, capture, liveness and match scores, because its models run the checks.
- **Product and design:** order, copy, states and accessibility, because those decide whether people finish.
- **Engineering:** the events in the measurement table, because without them nobody sees drop-off.

Compliance reads screens the way examiners read programs. The [Federal Financial Institutions Examination Council (FFIEC) BSA/AML Examination Manual](https://ncua.gov/newsroom/press-release/2021/federal-and-state-regulators-release-updates-bsaaml-examination-manual) updated its customer identification section in February 2021, and it guides examiners without setting new requirements. <!-- source: https://ncua.gov/newsroom/press-release/2021/federal-and-state-regulators-release-updates-bsaaml-examination-manual -->

In our [fintech UX design](/industries/fintech/) <!-- link: industry page, once --> work, annotated Figma files mark each regulated screen, such as the identity notice, consent and disclosures, so your compliance team and counsel can sign off on one file. To [redesign the sign-up and review screens with our team](/services/saas-products/saas-onboarding-design/#how-does-the-saas-onboarding-design-process-work) <!-- link: service page process section, required, second UP link -->, plan on 3 to 6 weeks across 4 steps, from funnel review to release and measurement.

I'd draw your own two-lane chart before anyone opens a design file, because every empty box in the top lane is a screen your customers will otherwise meet as a blank.

## FAQs

### What are the steps involved in the bank client onboarding process?

The KYC onboarding process flow chart above has 9 steps: notice and eligibility, contact and consent, identity details, document and selfie capture, automated checks, an outcome, disclosures and credentials, funding and ongoing monitoring. Banks group them differently, but data always precedes the decision.

### What is the difference between KYC and CIP?

KYC is the broad practice of knowing who a customer is and what risk they bring. The Customer Identification Program is the specific US rule for collecting and verifying identity at account opening. Customer due diligence and enhanced due diligence continue after it.

### Does a KYC flow need a selfie or liveness check?

No, the federal identity rule itself does not require one, because it allows documentary and non-documentary verification. Banks and identity vendors add a selfie and liveness step when their risk rules call for it. The design then explains the step and offers an alternative path.

### Can customers save a KYC application and finish it later?

Yes, and the design should make that easy. Keep what they entered, as WCAG 2.2 SC 3.3.7 Redundant Entry expects. Re-ask only what security requires, such as a masked Social Security number, and send a link back to the exact step.

### Who decides the KYC rules, the designer or the compliance team?

Compliance, the BSA officer and the partner bank decide rules, thresholds and notices, and the identity vendor supplies capture and checks. The designer decides order, copy, states and accessibility. Our designs go to compliance review in annotated files; we don't give legal advice.
