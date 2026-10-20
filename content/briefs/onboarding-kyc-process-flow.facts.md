# Fact-check: onboarding-kyc-process-flow

Checked 2026-10-20 against `content/blog/onboarding-kyc-process-flow.md` (draft, qa: pending), its 6 SVGs, `content/home.ts`, `content/authors.json`, `content/pages/about.md`, `content/services/saas-onboarding-design.json` and `content/industries/fintech.json`.

**Method.** WebFetch failed with `getaddrinfo ENOTFOUND` on every host tried (law.cornell.edu, ofac.treasury.gov, fincen.gov, consumerfinance.gov). I verified with WebSearch instead, mostly limited to the source's own domain (nist.gov, w3.org, ofac.treasury.gov, fdic.gov, fincen.gov plus law-firm and SBA mirrors of the FinCEN order). Each external link below counts as "loads" only because a search returned that exact host and path. The eCFR link could not be loaded from this container. The orchestrator gave me the text of 31 CFR 1020.220(a)(2)(ii) from law.cornell.edu: "within a reasonable time after the account is opened".

## Claims

| # | Line | Claim | Verdict | Source |
|---|---|---|---|---|
| 1 | 26, takeaway 2 | The CIP rule (31 CFR 1020.220) asks a US bank for name, date of birth, address and an identification number before an account opens | TRUE | 1020.220(a)(2)(i) "prior to opening an account". https://www.law.cornell.edu/cfr/text/31/1020.220 and https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.220. Both were returned by search; eCFR is blocked from this IP. |
| 2 | 64 | For a US person, the identification number is a TIN, which for most consumers is the SSN | TRUE | 1020.220(a)(2)(i)(A)(4)(i): "For a U.S. person, a taxpayer identification number". Same URLs. |
| 3 | 64 | Each bank keeps a written, risk-based identity program inside its AML program | TRUE | 1020.220(a)(1) written CIP, part of the AML program under 31 U.S.C. 5318(h); (a)(2) procedures "based on the bank's assessment of the relevant risks". |
| 4 | 87 | Notice of the identity requirements is required before an account opens, and the rule offers sample text headed "Important Information About Procedures for Opening a New Account" | TRUE | 1020.220(a)(5)(ii)–(iii). Search returned the regulation's notice paragraph and the permissive sample language. |
| 5 | 97, FAQ 267 | Documentary verification (unexpired government photo ID) and non-documentary verification (consumer reporting agency, public database) are both allowed, so no selfie is required by the rule | TRUE | 1020.220(a)(2)(ii)(A)–(B). |
| 6 | 153 | The rule does not require every check to finish before opening; it expects verification within a reasonable time after the account is opened, under risk-based procedures | TRUE | 1020.220(a)(2)(ii), law.cornell.edu text given by the orchestrator. The bank rule says "after the account is opened" and the post keeps that wording. |
| 7 | 89 | Reg DD account disclosures go out before the account opens; 12 CFR 1030.4 gives an account opened online no later mailing window | TRUE | 1030.4(a)(1)(i) and (a)(1)(ii): the 10-business-day option does not apply when a consumer who is not present uses electronic means. https://www.consumerfinance.gov/rules-policy/regulations/1030/4/ (exact URL returned by search). |
| 8 | 89, field card | Reg DD allows electronic disclosures only under E-SIGN Act consent rules, so consent comes before the first disclosure | TRUE | 1030.3(a): electronic form "subject to compliance with the consumer consent and other applicable provisions of the [E-Sign Act]". The only exceptions are 1030.4(a)(2) and 1030.8, which the post's flow does not use. https://www.consumerfinance.gov/rules-policy/regulations/1030/3/. Wording confirmed by search and the Fed's Consumer Compliance Outlook, not loaded directly. |
| 9 | 28 | FDIC 2023 household survey: 48.3% of banked US households used mobile banking as their primary access method | TRUE | FDIC press release, Nov 12, 2024: "Nearly half of banked households (48.3 percent) used mobile banking as their primary method". https://www.fdic.gov/news/press-releases/2024/fdic-survey-finds-96-percent-us-households-were-banked-2023 (exact URL returned by search). The base (banked households) is kept correctly. |
| 10 | 91 | WCAG 2.2 SC 3.3.7 Redundant Entry is Level A and expects auto-fill or selection of information already entered in the same process | TRUE | https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html |
| 11 | 91 | "Its security exception covers re-asking for a value such as the SSN." | WRONG (overstated) | The exception reads "the information is required to ensure the security of the content". W3C's example is a password, not an SSN. Whether an SSN re-ask qualifies depends on why it is asked. Fix F4. |
| 12 | 91 | The criterion does not reach a return visit in a later session | TRUE | Understanding 3.3.7: no requirement to store information between sessions; a process does not continue after the user closes a session or navigates away. |
| 13 | FAQ 271 | "Keep what they entered, as WCAG 2.2 SC 3.3.7 Redundant Entry expects." (answer to "save … and finish it later") | WRONG | This contradicts claim 12 and the body. 3.3.7 does not cover saving between sessions. Fix F5. |
| 14 | 91 link | `https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry` | UNVERIFIABLE (URL form) | Search returns only the `.html` path. Per the lesson on path differences, use the URL the search returned. Fix F9. |
| 15 | 99 | "Banks and vendors often cite" NIST's guidelines | UNVERIFIABLE | No source measures how often banks or vendors cite NIST. Fix F1. |
| 16 | 99 | NIST SP 800-63-4 was final in July 2025 and supersedes SP 800-63-3 | TRUE | CSRC lists SP 800-63-4 final as 07/31/2025 and states it supersedes SP 800-63-3. https://csrc.nist.gov/pubs/sp/800/63/4/final (exact URL returned). Note: the 800-63-3 page dates the change August 1, 2025. "July 2025" names the publication and is correct. |
| 17 | 99 | SP 800-63A-4 covers identity proofing; IAL2 proofing can run remotely | TRUE | https://pages.nist.gov/800-63-4/sp800-63a/ial/: IAL2 allows remote unattended, remote attended and on-site proofing. |
| 18 | 99 | Remote unattended proofing is fully automated, with no proofing agent, on devices the provider does not control | TRUE | SP 800-63A-4 definition: "completely automated, and interaction with a proofing agent or trusted referee is not required"; "location and devices … are not controlled by the CSP". |
| 19 | 99 | NIST writes for federal agencies, so it is a reference model, not a bank rule | TRUE | SP 800-63-4 scope covers federal agencies; nothing in 1020.220 incorporates it. |
| 20 | 101 | Revision 4 adds controls for injection attacks and forged media | TRUE | NIST's summary of changes: "controls for addressing injection attacks and forged media (e.g., 'deep fakes')". https://pages.nist.gov/800-63-4/ |
| 21 | 101 | "That threat is why vendors add a selfie and liveness check" | UNVERIFIABLE (motive claim) | No source gives vendors' reasons. Selfie matching was in use before the Rev. 4 forged-media controls. Fix F2. |
| 22 | 126 | OFAC Sanctions List Search uses fuzzy logic on names, with a slider that sets how close a match must be | TRUE | FAQ 246: fuzzy logic on the name field only, exact matches "when the match threshold slider bar is set to 100%". https://ofac.treasury.gov/faqs/246 (exact URL returned). |
| 23 | 126 | The threshold is a compliance decision | TRUE | OFAC FAQ 250: OFAC does not recommend a threshold; users set it from their own risk assessment. |
| 24 | 204–206 | The CDD rule (a BSA rule) has banks identify and verify beneficial owners of legal entity customers | TRUE | 31 CFR 1010.230(a)–(b). https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-B/section-1010.230 |
| 25 | 206 | On Feb 13, 2026 FinCEN issued Order FIN-2026-R001, "Exceptive Relief from Requirement to Identify and Verify Beneficial Owners at Each Account Opening" | TRUE | https://www.fincen.gov/system/files/2026-02/FinCEN-Order-CCDExceptiveRelief.pdf (search returns the PDF with this title). Date and number are confirmed by FinCEN's news release, SBA Advocacy (Feb 18, 2026) and Cleary Gottlieb. |
| 26 | 208 | A bank can limit owner verification to 3 moments: first account opening, reason to doubt information already held, and points its risk-based ongoing due diligence sets | TRUE | The order's three circumstances as summarized by FinCEN's release and commentary (Mayer Brown, NetBankAudit). |
| 27 | 208 | A returning LLC can confirm the owners on file instead of retyping them if the bank adopts the relief; it is the bank's call | TRUE | The order is optional ("within the discretion of the covered financial institution"). Institutions relying on earlier information must keep records of customer "certifications or confirmations (whether oral or in writing)". |
| 28 | 213 | Owner invite: "because owners type their own SSN and capture their own ID" | WRONG (rule implied) | 1010.230(b)(1) takes the beneficial-ownership certification "from the individual opening the account on behalf of the legal entity customer". No rule requires each owner to enter their own data. This is a design choice. Fix F6. |
| 29 | 249 | FFIEC BSA/AML Examination Manual updated its CIP section in February 2021 and guides examiners without setting new requirements | TRUE | NCUA release, Feb 25, 2021: four sections updated including CIP; "The Manual itself does not establish requirements for banks". https://ncua.gov/newsroom/press-release/2021/federal-and-state-regulators-release-updates-bsaaml-examination-manual (exact URL returned). |
| 30 | 170 | NIST Rev. 4 integrates syncable authenticators such as synced passkeys | TRUE | NIST summary of changes: "integrates syncable authenticators (e.g., synced passkeys)". |
| 31 | 170 | WCAG 2.2 SC 3.3.8 Accessible Authentication (Minimum), Level AA, rules out a login that depends on recalling a password or retyping a code with no paste or password-manager option | TRUE | https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html. Recall and transcription are cognitive function tests; paste and password managers are qualifying mechanisms (F109). The post scopes this to login, which matches the criterion's scope. |
| 32 | 147 | "Manual review is the outcome most products leave as a blank screen." | UNVERIFIABLE | No source; a frequency claim about "most products". Fix F3. |
| 33 | 236 | "Your own baseline from the first 2 weeks of logging is the number to beat" (feeds time in pending and time to funded account) | WRONG (method) | Applicants who start late in the 2-week window cannot have reached a decision or a first deposit yet, so time-in-pending and time-to-funded figures are cut short (cohort-age rule). Fix F7. |
| 34 | 30 | Author: "principal user experience (UX) designer" | TRUE | `content/home.ts:203` "Principal UX Designer" (spelled out, not upgraded). authors.json bio is empty, and the post makes no first-person experience claims beyond method. |
| 35 | 30 | ui-ux.agency, tkxel's design team, has designed 200+ products since 2017 | TRUE | about.md "more than 200 digital products since 2017"; RULES.md confirmed facts. |
| 36 | 118 | "We don't pick the vendor or set risk rules"; screens work within the vendor SDK | TRUE | fintech.json line 87, word for word. |
| 37 | 147 | "we redesign sign-up, setup and the review states so new users reach their first result, and we compare activation before and after" | TRUE | Hub hero ("We redesign sign-up, setup … so trial users reach their first result"), hub step 4 ("compare activation before and after"), fintech.json line 87 (the "we're reviewing" state). |
| 38 | 251 | Annotated Figma files mark each regulated screen, "such as the identity notice, consent and disclosures", so compliance and counsel "can sign off on one file" | WRONG (noun added) | fintech.json line 129 lists "(disclosure, consent, risk text)" and says "review one file". "Identity notice" is not in that list. Sign-off is supported by line 163. Fix F8. |
| 39 | 251 | Onboarding redesign: 3 to 6 weeks across 4 steps, from funnel review to release and measurement | TRUE | saas-onboarding-design.json, process answer and steps 1 and 4. |
| 40 | FAQ 275 | "Our designs go to compliance review in annotated files; we don't give legal advice." | TRUE | fintech.json sourceContext and line 163. |
| 41 | 66, field-reasons SVG | Hypothetical neobank example is labeled and internally consistent | TRUE | Labeled "hypothetical" in the prose, alt, caption and the SVG badge "Hypothetical neobank". Fields and steps (2, 3) match the swimlane panel and the SVG. |
| 42 | 168 | Link to /blog/user-onboarding-automation/ "covers when a message should come from a person instead" | TRUE | That post: "what to automate and what to keep human"; "I route a moment to a person in 3 cases". |
| 43 | SVGs | Timing words in the SVGs match the rule text | TRUE | Swimlane: CIP notice at step 1, consent at step 2, disclosures before "Account opened." at step 7. Ops-vs-product: "Consent and disclosure screens placed before opening" matches 1030.4(a)(1)(ii) for online opening. Field card: "E-SIGN Act, via Regulation DD" matches 1030.3(a). No SVG states a CIP verification deadline. ID-capture "Step 4 of 9" matches the panel. Outcome SVG matches its table on every row. |
| 44 | 172–176, 236 | Back-office charts "usually" stop at account created; published abandonment rates come from vendor surveys | Editorial (no figure) | Author framing with no number. Accepted as opinion. |

## Fixes (exact replacements)

**F1 (line 99, claim 15).** Replace
"Banks and vendors often cite the National Institute of Standards and Technology (NIST) digital identity guidelines, [NIST SP 800-63-4](https://csrc.nist.gov/pubs/sp/800/63/4/final), final in July 2025 and superseding SP 800-63-3."
with
"The National Institute of Standards and Technology (NIST) publishes digital identity guidelines, [NIST SP 800-63-4](https://csrc.nist.gov/pubs/sp/800/63/4/final), final in July 2025 and superseding SP 800-63-3."

**F2 (line 101, claim 21).** Replace
"That threat is why vendors add a selfie and liveness check, and why the screen explains it in one line: "We match your face to your ID so no one else can open an account in your name.""
with
"A liveness check on the selfie is one control against that threat. When your flow includes it, the screen explains it in one line: "We match your face to your ID so no one else can open an account in your name.""

**F3 (line 147, claim 32).** Replace
"Manual review is the outcome most products leave as a blank screen."
with
"Manual review is the outcome I design most carefully, because the customer waits there with nothing to do."

**F4 (line 91, claim 11).** Replace
"Its security exception covers re-asking for a value such as the SSN."
with
"The criterion makes an exception when re-entry is required for security, so a security re-check of a value such as the SSN can still ask again."

**F5 (FAQ line 271, claim 13).** Replace
"Keep what they entered, as WCAG 2.2 SC 3.3.7 Redundant Entry expects."
with
"Keep what they entered between visits as a product decision, because WCAG 2.2 SC 3.3.7 Redundant Entry covers re-entry only within one process, not a return in a later session."

**F6 (line 213, claim 28).** Replace
"- **Owner invite:** each owner gets a link to finish their own identity step, because owners type their own SSN and capture their own ID."
with
"- **Owner invite:** each owner gets a link to finish their own identity step, so owners can type their own SSN and capture their own ID when your bank's procedures ask for that."

**F7 (line 236, claim 33).** Replace
"Your own baseline from the first 2 weeks of logging is the number to beat, compared before and after each change."
with
"Your own baseline is the number to beat: take applications started in the first 2 weeks of logging, read them once each has had time to reach a decision and a first deposit, and compare before and after each change."

**F8 (line 251, claim 38).** Replace
"In our [fintech UX design](/industries/fintech/) work, annotated Figma files mark each regulated screen, such as the identity notice, consent and disclosures, so your compliance team and counsel can sign off on one file."
with
"In our [fintech UX design](/industries/fintech/) work, annotated Figma files mark each regulated screen (disclosure, consent, risk text), so your compliance team and counsel review one file instead of a folder of screenshots."

**F9 (line 91 link, claim 14).** Change the link URL from `https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry` to `https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html`. Also update `content/briefs/onboarding-kyc-process-flow.json` line 361, which holds the same extensionless URL.

## Honesty

- No clients, case studies, testimonials, awards, certifications or results are named. No local office is claimed.
- Author title matches home.ts. The company facts (tkxel, 200+, 2017) match about.md and RULES.md.
- Every "we" sentence traces to saas-onboarding-design.json or fintech.json. The exception was "identity notice" (F8).
- No SVG needs a change, so there are no stale visuals.json strings.

VERDICT: FAIL
