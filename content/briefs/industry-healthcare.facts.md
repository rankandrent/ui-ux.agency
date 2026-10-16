# Fact-check: content/industries/healthcare.json (industry-healthcare)

Checked 2026-10-16 by fact-checker. Brief: `content/briefs/industry-healthcare.json`.

**Method.** WebFetch failed with `getaddrinfo ENOTFOUND` for healthit.gov, www.healthit.gov and www.ama-assn.org, and there was no shell for curl. Every external claim was checked with WebSearch, limited to the primary domain where possible (healthit.gov, ama-assn.org, fda.gov, hhs.gov, ftc.gov, w3.org, access-board.gov, section508.gov). The page has no external links, so no link needed to load. The only links are internal (`/services/...`, `/case-studies/elia-wellness/`), and each target exists in `content/`. Site facts were checked against `content/home.ts`, `content/pages/about.md`, `content/services/*.json`, `content/locations/*.json` and `content/case-studies/elia-wellness.md`.

## Claims

| # | Field | Claim (short) | Verdict | Source |
|---|---|---|---|---|
| 1 | stats[0] | 65% of US individuals were offered and accessed an online medical record or patient portal in 2024 (ASTP/ONC Data Brief 77) | TRUE | ASTP Data Brief No. 77, July 2025: "65% of individuals nationally … were offered and accessed their online medical records or patient portal". https://www.healthit.gov/wp-content/uploads/2025/07/2024-HINTS-Patient-Access-DB77_508.pdf ; https://healthit.gov/data/data-briefs/individuals-access-and-use-patient-portals-and-smartphone-health-apps-2024/ |
| 2 | stats[1] | 59% had more than one portal in 2024; only 7% used an app to combine them | TRUE (with a note) | Same brief: "more than half of individuals nationally (59%) had multiple online medical records or patient portals in 2024"; the data-brief page says "less than 1 in 10 individuals used an app to combine medical information from different patient portals". One snippet worded the 7% as "using a portal organizing…". The full PDF could not be opened to settle the exact wording, but both readings fit "used an app to combine them". |
| 3 | stats[2] | 66% of physicians in an AMA survey used health AI in 2024, up from 38% in 2023 | **OUTDATED** | The 2024 figure is correct (https://www.ama-assn.org/practice-management/digital-health/2-3-physicians-are-using-health-ai-78-2023). However, the AMA's March 2026 survey (1,692 physicians, fielded January 15 to February 2, 2026) reports "more than four in five physicians (81 percent) use AI in their practices, more than double the 2023 rate (38 percent)": https://www.ama-assn.org/press-center/ama-press-releases/ama-ai-usage-among-doctors-doubles-confidence-technology-grows ; https://www.ama-assn.org/practice-management/digital-health/more-80-physicians-use-ai-professionally-ama-survey . RULES require facts to be current. |
| 4 | stats[3] | 45.9/100 average SUS from 870 US physicians for their EHRs (Mayo Clinic Proceedings, 2019) | TRUE | Melnick et al., Mayo Clin Proc 2019, doi:10.1016/j.mayocp.2019.09.024; PubMed https://pubmed.ncbi.nlm.nih.gov/31735343/ (mean SUS 45.9 ± 21.9; 870 of 1,250 completed the subsurvey) |
| 5 | challenges[0] | ASTP/ONC data show caregiver proxy access "rising between 2020 and 2024" (no number) | TRUE | DB77 summary: share of individuals who accessed the record of someone they care for rose from 24% (2020) to 51% (2024). The page states no figure, so the unconfirmed base of the 51% does not matter. |
| 6 | challenges[1] bold | "Clinicians judge a new tool by the clicks it adds to a clinical workflow they already rate poorly." | **UNVERIFIABLE** | "Rate poorly" is supported by Melnick (SUS 45.9). "Judge a new tool by the clicks it adds" is a general claim about clinicians with no source. |
| 7 | challenges[1] | 2019 Mayo Clinic Proceedings, 870 US physicians, SUS 45.9/100, each 1-point gain linked to about 3% lower odds of burnout; correlation, not cause | TRUE | PubMed 31735343: OR 0.97 (95% CI 0.97–0.98) per 1-point SUS increase; cross-sectional, and the authors say causation cannot be determined. |
| 8 | challenges[1] | "We time each task in the current workflow before we add a single screen to it." | **UNVERIFIABLE** (site capability) | No service page or step mentions timing tasks. The nearest site steps are ai-ux-design-agency.json step 1 ("We interview users and map every point where the model reads data…") and this page's own process step 1 ("We map each user role…"). |
| 9 | challenges[2] | AMA 2024 survey: top requirements were a designated feedback channel (88%), data privacy assurances (87%) and EHR integration (84%) | TRUE (with a note) | AMA press release on the 2024 survey: https://www.ama-assn.org/press-center/ama-press-releases/ama-physician-enthusiasm-grows-health-care-ai . One AMA article on the same survey gives 85% for privacy; the press release gives 87%. The page correctly names the year 2024. The brief's source `physician-ai-sentiment-report.pdf` is now the **2026** report, which does not show these percentages (stale brief record). |
| 10 | challenges[3] | HIPAA minimum necessary standard shapes how much each role's view shows | TRUE | 45 CFR 164.502(b), 164.514(d) (role-based access is part of minimum-necessary policies); HHS OCR minimum necessary guidance |
| 11 | challenges[3] | "Wellness apps outside HIPAA still fall under the FTC Health Breach Notification Rule, amended effective July 29, 2024." | **WRONG** (overstated scope) | The amendments took effect July 29, 2024 (TRUE). The rule covers vendors of personal health records and PHR related entities, and the FTC says it applies to "most health apps and similar technologies" not covered by HIPAA, not to every wellness app: https://www.ftc.gov/news-events/news/press-releases/2024/04/ftc-finalizes-changes-health-breach-notification-rule ; https://www.ftc.gov/business-guidance/resources/complying-ftcs-health-breach-notification-rule-0 |
| 12 | challenges[3] | FDA general wellness guidance, reissued January 2026, keeps disease names and "abnormal" labels out (sensor-based products) | TRUE | General Wellness: Policy for Low Risk Devices, reissued January 6, 2026, supersedes September 27, 2019 (https://www.fda.gov/media/90652/download). King & Spalding and the FDA town hall (https://www.fda.gov/media/99809/download): a notification may suggest evaluation by a health care professional, but it may not name a disease, label a value abnormal or diagnostic, or give clinical thresholds. Counsel deferral is present. |
| 13 | challenges[4] | App-based access to online medical records rose from 38% in 2020 to 57% in 2024 (ASTP/ONC) | TRUE | DB77: "App-based access to online medical records increased from 38% in 2020 to 57% in 2024." |
| 14 | solutions[0] | FDA CDS guidance "revised January 6, 2026" | **OUTDATED** | FDA reissued the guidance on **January 29, 2026**, and that version supersedes the January 6, 2026 version (minor correction on pp. 13–14): https://www.fda.gov/media/109618/download ; https://www.fda.gov/medical-devices/medical-devices-news-and-events/town-hall-clinical-decision-support-software-final-guidance-03112026 |
| 15 | solutions[0] | Four non-device criteria in section 520(o)(1)(E) of the FD&C Act; one is that the HCP can independently review the basis | TRUE | https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-decision-support-software (criterion 4). Counsel deferral is present. |
| 16 | solutions[1] | Patient-facing AI gets no CDS exclusion, because the criteria cover only software that supports HCPs | TRUE | FD&C Act 520(o)(1)(E)(ii) (criterion 3: "supporting or providing recommendations to a health care professional"). The 2026 guidance says FDA's digital health policies still apply to device functions for patients or caregivers. Counsel deferral is present. |
| 17 | solutions[2] | FDA final PCCP guidance lets makers of AI-enabled device software describe planned model changes in advance (no date stated) | TRUE | https://www.fda.gov/media/187905/download ; FDA AI-SaMD hub. FDA pages give conflicting dates (webinar: issued December 4, 2024; digital health guidance table: 08/18/2025), so stating no date is correct. |
| 18 | solutions[2] | HTI-1 asks certified health IT to show source attributes for predictive decision support; HTI-5 would remove that requirement and is not final | TRUE (re-check at publish) | 45 CFR 170.315(b)(11) (31 source attributes for predictive DSIs; 13 for evidence-based): https://healthit.gov/test-method/decision-support-interventions . HTI-5 NPRM: 90 FR 60970, December 29, 2025, comments closed February 27, 2026: https://healthit.gov/regulations/hti-rules/hti-5-proposed-rule/ . No final rule was found in two extended searches on 2026-10-16, although the Unified Agenda target (August 2026) has passed. The orchestrator should confirm on federalregister.gov on the publish day. |
| 19 | solutions[3] | PHI-free notification text, masking, timeouts; "These patterns support a HIPAA or FTC program; on their own, they do not make an app compliant." | **FAIL: no counsel deferral** | The facts are fine. The owner rule says every HIPAA answer defers to the client's counsel, and this card is the only HIPAA/FTC block that does not. |
| 20 | solutions[4] | HHS OCR has published guidance on audio-only telehealth under HIPAA | TRUE (but **no counsel deferral**) | https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-audio-telehealth/index.html (June 13, 2022) |
| 21 | solutions[5] | WCAG 2.2 criteria: 2.5.8 Target Size (Minimum) 24×24 CSS px; 3.3.8 Accessible Authentication (Minimum); 2.4.11 Focus Not Obscured (Minimum); 3.2.6 Consistent Help; all new in 2.2; 2.2 conformance also conforms to 2.1 and 2.0 | TRUE | https://www.w3.org/TR/WCAG22/ ; https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ (3.2.6 is Level A, so it falls within AA; "same order relative to other page content"). W3C WCAG 2 Overview: 2.2 is backwards compatible, and 4.1.1 is obsolete. |
| 22 | solutions[5] bold / hero sub | "Our design system builds WCAG 2.2 AA into every component" / "every screen is built to WCAG 2.2 AA" | **WRONG** (capability wording) | No site page claims a WCAG 2.2 AA design system or that we "build" screens. product-design-agency.json says "accessibility built in" to final screens. Brief note: "stay silent on whether we build". Designers design to a level; conformance belongs to the built content. (Side note for the orchestrator: `content/home.ts:227` shows a badge "WCAG/AAA Achieved", which no page supports. Out of scope here, but worth an audit.) |
| 23 | process[3] | Handoff includes "a WCAG 2.2 AA checklist per component" | **WRONG** (deliverable not on site) | ai-ux-design-agency.json step 4 hands over "specs, components and a pattern guide". No service lists a WCAG checklist. |
| 24 | process[1], process[3] | Durations "Flows and patterns (2–3 weeks)", "Handoff (1 week)" | **WRONG** (do not match hub) | The brief says the steps follow ai-ux-design-agency.json: 1–2 / 1–3 / 1–3 / 1–2 weeks (4–10 weeks total, which FAQ 6 also states). This page's 2–3 and 1-week figures appear in no service JSON. Steps 1 and 3 match. "5 to 8 target users" matches. |
| 25 | benefits[0] | AI UX service: input, output, review and correction patterns; prototypes with real or recorded model output | TRUE | ai-ux-design-agency.json steps 2–3 |
| 26 | benefits[1] | SaaS design tied to activation, retention, expansion | TRUE | saas-design-agency.json abstract ("ties every screen to a KPI such as activation rate, retention or expansion revenue") |
| 27 | benefits[2] | Elia Wellness: platform for adults over 50; website, web app, mobile app; seven dimensions in one score; badges and bucket-list rewards; community feed; tablet questionnaire with big tap areas and simple rating scales; registrations grew 40% | TRUE | content/case-studies/elia-wellness.md (About, scope of work, sections and outcome). No quote, no "30+" score, no HIPAA/FDA/clinician/testing claim. Honesty rules are met. |
| 28 | benefits[3] | "Senior designers work remotely with US teams in ET and Pacific Time (PT) hours" | **UNVERIFIABLE** (site capability) | No site page says designers work PT hours. ux-agency-minneapolis.json says: "Every designer overlaps at least 4 hours with US Eastern time." |
| 29 | benefits[3] | Only office in Reston, VA; 200+ products since 2017 | TRUE | RULES.md confirmed company facts |
| 30 | abstract | ui-ux.agency, part of tkxel | TRUE | home.ts FAQ ("the UI UX design team of tkxel") |
| 31 | cta | A senior designer replies within one business day (ET) | TRUE | about.md line 38; ET per US-market rule |
| 32 | faqs[0] | HIPAA compliance = safeguards, risk analysis, BAAs; HHS OCR treats a cloud provider storing ePHI as a business associate even when encrypted | TRUE | https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html ; FAQ https://www.hhs.gov/hipaa/for-professionals/faq/if-a-csp-stores-only-encrypted-ephi-and-does-not-have-a-decryption-key-is-it-a-hipaa-business-associate/index.html |
| 33 | faqs[0] | HIPAA Security Rule update proposed January 6, 2025, not final | TRUE | HHS NPRM fact sheet https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/factsheet/index.html (published in the FR January 6, 2025). Still not final as of September 2026, and the Unified Agenda target is now July 2027 (HIPAA Journal, pact-one.com). Counsel deferral is present. |
| 34 | faqs[1] | Device if intended use meets the definition and no exclusion applies; 520(o)(1)(E) four criteria for clinician CDS; patient-facing tools get no exclusion; wellness-only products can fall under general wellness policy | TRUE | FDA CDS guidance (January 29, 2026 version); General Wellness guidance (January 6, 2026). Counsel deferral is present. |
| 35 | faqs[2] | HHS Section 504 rule: WCAG 2.1 AA for HHS-funded recipients; IFR announced May 7, 2026 moved compliance to May 11, 2027 (15+ employees) and May 10, 2028 (smaller) | TRUE | https://public-inspection.federalregister.gov/2026-09266.pdf (on public inspection May 7, 2026); https://www.federalregister.gov/documents/2026/05/11/2026-09266/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web (published May 11, 2026, 91 FR 25496). The standard is unchanged at WCAG 2.1 AA. "Announced May 7" is accurate. |
| 36 | faqs[2] | Section 508 uses WCAG 2.0 AA for federal technology | TRUE | https://www.access-board.gov/ict/ (E205.4, E207.2 incorporate WCAG 2.0 Level A and AA); https://www.section508.gov/develop/applicability-conformance/ |
| 37 | faqs[2] | ADA Title II reaches public hospitals run by state and local governments | TRUE | 28 CFR part 35 (Title II covers all services of state and local governments, including public hospitals) |
| 38 | faqs[3] | HBNR "covers health apps and connected devices that HIPAA does not"; since July 29, 2024 an unauthorized disclosure counts as a breach; notice within 60 calendar days; FTC Act and CCPA/CPRA "apply too"; GDPR only if you sell in the EU | **WRONG** (scope overstated, same as #11) | The dates, the unauthorized-disclosure rule and the 60 calendar days are TRUE (FTC final rule and business guidance above). "Covers health apps … that HIPAA does not" drops the FTC's "most". CCPA/CPRA apply only to businesses that meet its thresholds, so "apply too" overstates. Counsel deferral is present. |
| 39 | faqs[4] | Cures Act rules let patients send records to apps they choose | TRUE | ONC Cures Act Final Rule (45 CFR 170.315(g)(10)); HHS access-right guidance |
| 40 | faqs[4] | "Certified health IT must offer a standardized FHIR API that each patient app connects to" | **WRONG** (wording) | 170.315(g)(10) requires a standardized API for patient and population services that apps *can* use. It does not say each patient app connects through it. |
| 41 | faqs[4] | Information blocking actors: providers, certified health IT developers, HINs/HIEs | TRUE | https://www.healthit.gov/topic/information-blocking (45 CFR part 171) |
| 42 | faqs[4] | HHS OCR: a provider cannot refuse access only because an app does not encrypt data at rest; HIPAA stops protecting data once it reaches a non-covered app | TRUE | https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access-right-health-apps-apis/index.html ("…or because the app does not encrypt the individual's data when at rest"; "no longer subject to the protections of the HIPAA Rules"). Counsel deferral is present. |
| 43 | faqs[5] | MVP $15,000–$50,000 / 4–8 weeks; AI UX $25,000–$90,000 / 4–10 weeks; SaaS $40,000–$180,000 / 6–16 weeks | TRUE | mvp-design-agency.json, ai-ux-design-agency.json, saas-design-agency.json (`priceRange`, abstracts) |
| 44 | faqs[5] | "The number of user types and platforms moves the price most" (stated for all three services) | **WRONG** (over-generalized) | Only mvp-design-agency.json says user types and platforms have "the biggest effect on price". ai-ux-design-agency.json: "the number of AI features, user groups and platforms". saas-design-agency.json: "Scope, number of user roles and platforms set the final price." |
| 45 | faqs[5] | First call followed by a fixed-scope proposal; anchor `#which-factors-change-ui-ux-design-cost` exists | TRUE | ui-ux-design-cost.json h2 "Which factors change UI UX design cost?" and its 3-step estimate ("to a written, fixed-scope proposal"); about.md item 4 |

## Exact replacements

**F1, stats[2] (#3, OUTDATED).** Replace the whole stat object with:
```json
{ "value": "81%", "label": "of physicians in a 2026 American Medical Association (AMA) survey use AI in their practices, up from 38% in 2023" }
```
Keep challenges[2] as it is. It correctly dates the 88/87/84% figures to "the AMA's 2024 physician survey".

**F2, challenges[1] bold (#6) and last sentence (#8).** Replace
`<strong>Clinicians judge a new tool by the clicks it adds to a clinical workflow they already rate poorly.</strong>`
with
`<strong>A new clinical tool adds its clicks to a clinical workflow that clinicians already rate poorly.</strong>`
and replace
`We time each task in the current workflow before we add a single screen to it.`
with
`So our first step maps the current workflow and each user role before we add a single screen to it.`

**F3, challenges[3] (#11).** Replace
`Wellness apps outside HIPAA still fall under the Federal Trade Commission (FTC) Health Breach Notification Rule, amended effective July 29, 2024.`
with
`Wellness apps outside HIPAA can still fall under the Federal Trade Commission (FTC) Health Breach Notification Rule, which the FTC says applies to most health apps; its amendments took effect July 29, 2024.`

**F4, solutions[0] (#14, OUTDATED).** Replace
`FDA's clinical decision support (CDS) guidance, revised January 6, 2026, explains`
with
`FDA's clinical decision support (CDS) guidance, revised in January 2026, explains`

**F5, solutions[3] (#19, counsel deferral).** Replace
`These patterns support a HIPAA or FTC program; on their own, they do not make an app compliant.`
with
`These patterns support a HIPAA or FTC program but do not make an app compliant; your regulatory counsel decides what that program needs.`
(Detail text becomes about 71 words, which is under the 90-word cap.)

**F6, solutions[4] (#20, counsel deferral).** Replace
`The Department of Health and Human Services Office for Civil Rights (HHS OCR) has published guidance on audio-only telehealth under HIPAA.`
with
`The Department of Health and Human Services Office for Civil Rights (HHS OCR) has published guidance on audio-only telehealth under HIPAA; your regulatory counsel confirms how it applies to your app.`
Keep the HHS OCR expansion here, because this card renders before FAQ 1, which uses the short form.

**F7, hero.sub and solutions[5] (#22).** In hero.sub replace `and every screen is built to WCAG 2.2 AA (Web Content Accessibility Guidelines).` with `and every screen is designed to WCAG 2.2 AA (Web Content Accessibility Guidelines).`
In solutions[5] replace
`<strong>Our design system builds WCAG 2.2 AA into every component, so accessibility work does not restart on each new screen.</strong>`
with
`<strong>We design every component to WCAG 2.2 AA, so accessibility work does not restart on each new screen.</strong>`

**F8, process[3] (#23).** Replace the body with
`You get specs, components and a digital health UX pattern guide your engineers and quality team can use.`

**F9, process durations (#24).** Change `"Flows and patterns (2–3 weeks)"` to `"Flows and patterns (1–3 weeks)"` and `"Handoff (1 week)"` to `"Handoff (1–2 weeks)"`. The four steps then total 4–10 weeks, which matches ai-ux-design-agency.json and FAQ 6.

**F10, benefits[3] (#28).** Replace
`<strong>Senior designers work remotely with US teams in ET and Pacific Time (PT) hours, and our only office is in Reston, VA.</strong>`
with
`<strong>Senior designers work remotely with US teams, every designer overlaps at least 4 hours with ET, and our only office is in Reston, VA.</strong>`
(ET is already expanded in the CTA band, which renders before benefits. The overlap fact comes from ux-agency-minneapolis.json.)

**F11, faqs[3] (#38).** Replace
`Yes. The FTC Health Breach Notification Rule covers health apps and connected devices that HIPAA does not, and since`
with
`Yes. The FTC Health Breach Notification Rule covers most health apps and connected devices that HIPAA does not, and since`
and replace
`The FTC Act and state laws such as California's Consumer Privacy Act and Privacy Rights Act (CCPA/CPRA) apply too,`
with
`The FTC Act can apply too, and so can state laws such as California's Consumer Privacy Act and Privacy Rights Act (CCPA/CPRA) once a business meets their thresholds,`

**F12, faqs[4] (#40).** Replace
`Certified health IT must offer a standardized FHIR API that each patient app connects to (FHIR is Fast Healthcare Interoperability Resources),`
with
`Certified health IT must offer a standardized FHIR API that patient apps can connect to (FHIR is Fast Healthcare Interoperability Resources),`

**F13, faqs[5] (#44).** Replace
`The number of user types and platforms moves the price most; see`
with
`In all three, the number of user types and platforms moves the price, and AI UX design also counts AI features; see`

## Stale records for the orchestrator (brief, not the page)

- `industry-healthcare.json` → `eav` / `sources`: `https://www.ama-assn.org/system/files/physician-ai-sentiment-report.pdf` is now the March 2026 report. It does not carry 88/87/84%. Cite the 2024 press release instead (`/press-center/ama-press-releases/ama-physician-enthusiasm-grows-health-care-ai`).
- `notes`: "the 81% '2026 AMA' figure seen only on textbookofdigitalhealth.com" is no longer true. The figure is on ama-assn.org (press release "AI usage among doctors doubles…").
- `eav` CDS rows: "revised January 6, 2026" should read "issued January 6, 2026, reissued January 29, 2026".
- DB77 PDF: the search returns `https://www.healthit.gov/wp-content/uploads/2025/07/2024-HINTS-Patient-Access-DB77_508.pdf` as well as the brief's `/sites/default/files/2025-06/` path. The page has no link, so this does not matter now, but use the wp-content path if a link is ever added.
- `content/home.ts:227` badge "WCAG/AAA Achieved" has no support anywhere on the site (site-audit item).

VERDICT: FAIL
