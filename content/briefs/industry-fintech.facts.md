# Fact-check: /industries/fintech/ (content/industries/fintech.json)

Checked 2026-10-16 against brief `content/briefs/industry-fintech.json`, RULES.md honesty rules, `content/case-studies/tradezella.md`, `content/case-studies/anyday-app.md`, `content/services/*.json`, `content/home.ts`, `content/pages/about.md`.

Method: WebFetch failed with `ENOTFOUND` for every host (fdic.gov, consumerfinance.gov, ecfr.gov, accessibility.com, adatitleiii.com). No shell was available. Every external claim was checked with WebSearch limited to the primary domain. Each claim's source URL came back as a result, and its snippets carried the figure. The page itself has **no external links**: sources are named in text only (FDIC survey, CFPB spotlight, 31 CFR 1020.220, NIST, PCI DSS, FINRA, SEC). That meets the "named" part of the RULES "named, real, linkable source" rule.

## Claims

| # | Location | Claim | Verdict | Source |
|---|---|---|---|---|
| 1 | stats[3] | 48.3% of banked US households used mobile banking as their primary access method in 2023 (FDIC survey) | TRUE | https://www.fdic.gov/news/press-releases/2024/fdic-survey-finds-96-percent-us-households-were-banked-2023 ; appendix tables https://www.fdic.gov/household-survey/2023-fdic-national-survey-unbanked-and-underbanked-households-appendix-tables ("All" row 48.3%) |
| 2 | challenges[0] | CIP rule (31 CFR 1020.220) has US banks collect name, address, date of birth and an identification number before opening an account | TRUE (date of birth is "for an individual"; TIN/credit-card exceptions exist, and "at a minimum … prior to opening an account" matches) | https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1020/subpart-B/section-1020.220 ; https://www.law.cornell.edu/cfr/text/31/1020.220 |
| 3 | challenges[0] | Fintechs that work with partner banks run similar checks; document capture, selfie/liveness and manual review add waits | TRUE (general industry description, no figure) | — |
| 4 | challenges[2] | FINRA Rule 2210 requires broker-dealer communications (websites, apps, social posts) to be fair and balanced; bars promissory or exaggerated claims | TRUE | Rule 2210(d)(1)(A)/(B); https://www.finra.org/rules-guidance/notices/13-23 ; https://www.finra.org/rules-guidance/key-topics/social-media |
| 5 | challenges[2] | "…fair and balanced, **so** a risk disclosure belongs where the decision happens, not behind a footer link" | WRONG (framing) | The placement rule is 2210(d)(1)(C): a legend or footnote is allowed "only in the event that such placement would not inhibit an investor's understanding". FINRA also allows hyperlinks for added explanation (Reg. Notice 13-23; FINRA 2210 fundamentals deck https://www.finra.org/sites/default/files/2022-10/2022_Ad_Reg_Rule_2210.pdf). "Not behind a footer link" is our design advice, not a requirement that follows from "fair and balanced". |
| 6 | challenges[3] | TradeZella's old interface hid the metrics traders care about most under clutter; the redesign put net daily P&L in a single glance | TRUE | tradezella.md ("hidden under clutter"; "One look tells a trader if a day made or lost money") |
| 7 | challenges[4] | CFPB estimated about 37% of the US population, more than 98 million users, interacted with a bank chatbot in 2022 | TRUE | https://files.consumerfinance.gov/f/documents/cfpb_chatbot-issue-spotlight_2023-06.pdf ("over 98 million users (approximately 37% of the U.S. population)") ; press release https://www.consumerfinance.gov/about-us/newsroom/cfpb-issue-spotlight-analyzes-artificial-intelligence-chatbots-in-banking/ |
| 8 | challenges[4], faqs[2] | June 2023 issue spotlight warns of wrong answers, privacy risks and "doom loops" with no route to a person | TRUE | same PDF + https://www.consumerfinance.gov/data-research/research-reports/chatbots-in-consumer-finance/chatbots-in-consumer-finance/ |
| 9 | challenges[5] | In March 2022 DOJ said the ADA applies to web content of businesses open to the public and named WCAG as helpful guidance | TRUE. The guidance is still live on ada.gov as of this run. The 11 documents DOJ withdrew on March 19, 2025 were 5 COVID-era Q&As, the "Reaching Out" training series and hotel, gas-station and retail guidance, not the web guidance. | https://www.ada.gov/resources/web-guidance/ ; https://www.justice.gov/archives/opa/pr/justice-department-issues-web-accessibility-guidance-under-americans-disabilities-act ; withdrawal coverage https://www.disabilityscoop.com/2025/03/20/trump-administration-withdraws-ada-guidance/31368/ |
| 10 | challenges[5] | WCAG 2.2 SC 2.5.8 sets a 24×24 CSS pixel minimum for tap targets (AA) | TRUE (SC has spacing/inline exceptions; "minimum" is fine) | https://www.w3.org/TR/WCAG22/ |
| 11 | challenges[6] | WCAG 2.2 adds SC 3.3.8 Accessible Authentication (Minimum) at AA; no step can demand recalling a password or transcribing a code unless an alternative or a helper such as paste or a password manager works | TRUE. The object recognition and personal content exceptions do not apply to recall or transcription, so the narrowed sentence is accurate. | https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html |
| 12 | challenges[6] | Passkeys, "which NIST SP 800-63-4 (final, 2025) covers as syncable authenticators" | WRONG (scope) | SP 800-63B-4 defines syncable authenticators as authenticators whose keys can be cloned/exported to a sync fabric. Device-bound passkeys are not syncable; only synced passkeys are. Final July 2025 is TRUE. https://pages.nist.gov/800-63-4/sp800-63b/syncable/ ; https://pages.nist.gov/800-63-4/ |
| 13 | solutions[1] | PCI DSS v4.0.1 governs payment-page scripts under requirements 6.4.3 and 11.6.1, mandatory since March 31, 2025 | TRUE. PCI SSC: "became effective as of 31 March 2025". v4.0.1 is still the only active version; the June 2026 RFC is only about a possible revision. | https://blog.pcisecuritystandards.org/coffee-with-the-council-podcast-guidance-for-pci-dss-e-commerce-requirements-effective-after-31-march-2025 ; https://blog.pcisecuritystandards.org/just-published-pci-dss-v4-0-1 ; https://blog.pcisecuritystandards.org/request-for-comments-pci-data-security-standard-pci-dss-v4.0.1 |
| 14 | solutions[1] | Card fields in the processor's hosted form with few third-party scripts nearby | TRUE (design advice). Note: since January 2025, SAQ A merchants no longer attest to 6.4.3/11.6.1 but meet an eligibility criterion instead. The requirements remain in the standard, so the sentence holds. | https://blog.pcisecuritystandards.org/important-updates-announced-for-merchants-validating-to-self-assessment-questionnaire-a |
| 15 | solutions[2] | Never color alone, WCAG SC 1.4.1 | TRUE (1.4.1 Use of Color, Level A) | https://www.w3.org/TR/WCAG22/ |
| 16 | solutions[2] | In our TradeZella redesign, win-rate and profit-factor widgets sit on a dashboard each trader arranges | TRUE | tradezella.md ("win rate and profit factor into compact widgets"; "Each trader picks and arranges the widgets") |
| 17 | solutions[3] | Our AI UX design agency team prototypes these with real model output | TRUE | ai-ux-design-agency.json l.56/68 ("real or recorded model responses"); home.ts process step 2 |
| 18 | solutions[4] | CFPB finalized the Personal Financial Data Rights rule (Section 1033) in October 2024 and reopened it for reconsideration in August 2025 | OUTDATED (true but incomplete status). Final rule announced October 22, 2024; ANPR published August 22, 2025 (90 FR 40986). Since October 29, 2025 a federal court (E.D. Ky.) has barred the CFPB from enforcing the rule until the reconsideration ends. As of August–October 2026 no new proposed rule has been published; the reconsideration is listed on the CFPB's August 2026 regulatory agenda. | https://www.federalregister.gov/documents/2025/08/22/2025-16139/personal-financial-data-rights-reconsideration ; https://www.consumerfinance.gov/rules-policy/rules-under-development/personal-financial-data-rights-reconsideration/ ; https://www.mvalaw.com/data-points/cfpb-enjoined-from-enforcing-personal-financial-data-rights-rule-1033 ; https://www.cozen.com/news-resources/publications/2026/section-1033-compliance-date-open-banking-rule-enjoined-and-under-reconsideration ; https://www.federalregister.gov/documents/2026/08/14/2026-16613/regulatory-agenda |
| 19 | solutions[5] | SOC 2 reports test the AICPA Trust Services Criteria: security required; availability, processing integrity, confidentiality, privacy optional; the auditor attests | TRUE. The AICPA's 2017 TSC lists the 5 categories. The common criteria (security) apply to every SOC 2 examination and the other 4 are chosen per scope (AICPA page does not use the word "optional"; secondary sources do). A CPA firm attests. | https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022 ; https://secureframe.com/hub/soc-2/trust-services-criteria |
| 20 | solutions[6], faqs[3] | Products sold to federal agencies need Section 508; its web standard is WCAG 2.0 Level AA, so WCAG 2.2 AA starts from a higher bar | TRUE (E205.4 incorporates WCAG 2.0 A/AA; W3C errata treat 4.1.1 as always satisfied, so 2.2 AA content conforms to 2.0 AA) | https://www.access-board.gov/ict/ ; https://www.section508.gov/develop/applicability-conformance/ |
| 21 | solutions[6] | GDPR only "if you also sell in the EU" | TRUE (US-market rule) | RULES.md |
| 22 | faqs[1] | SEC withdrew its 2023 predictive data analytics proposal for broker-dealers and advisers on June 12, 2025 | TRUE (proposed July 26, 2023, S7-12-23; withdrawal dated June 12, 2025, published FR June 17, 2025) | https://www.sec.gov/rules-regulations/2025/06/s7-12-23 ; https://www.federalregister.gov/documents/2025/06/17/2025-11110/withdrawal-of-proposed-regulatory-actions |
| 23 | faqs[1] | "decide compliance under rules from the SEC, FINRA and PCI DSS" | WRONG (minor) | PCI DSS is an industry standard from the PCI Security Standards Council, enforced through card brands and acquirers, not "rules from" a regulator. https://www.pcisecuritystandards.org/ |
| 24 | abstract | "Rules such as the Customer Identification Program and FINRA Rule 2210 shape **each** flow" | WRONG (scope) | FINRA Rule 2210 binds FINRA member broker-dealers only; CIP binds banks (and parallel rules other covered institutions). Neither shapes every fintech flow, e.g. an earned wage payout app. Sources as rows 2 and 4. |
| 25 | faqs[4] | TradeZella: SaaS trading journal and analytics product; 40% more user interaction, 25% boost in retention, 30% more new customers after its web and mobile redesign | TRUE (word-level match to results; no broker/regulated framing; no KYC/compliance/AI implication) | tradezella.md frontmatter + results table |
| 26 | faqs[4] | Anyday App payout redesign for XTM Inc. gives hourly staff earned wage access the same day; automated payouts save 14 hours per week; business clients rose 20% | TRUE ("wages they have already earned right away", title "pays workers the same day", "14 hrs saved per week with automated payouts", "20% rise in business clients") | anyday-app.md |
| 27 | stats[0–2] | +40% user interaction after the TradeZella dashboard redesign; +25% user retention; 14 hrs saved per week with automated payouts in the Anyday App | TRUE | tradezella.md, anyday-app.md |
| 28 | benefits[2] | "TradeZella **reported** a 25% boost in user retention after its web and mobile redesign" | WRONG (attribution) | tradezella.md is our case study and does not say TradeZella reported the figure. Keep the figure and drop "reported". |
| 29 | faqs[2] | Neither of our fintech case studies included an AI feature | TRUE | both case-study files (no AI feature) |
| 30 | faqs[5] | MVP design $15,000–$50,000; AI UX design $25,000–$90,000; SaaS product design $40,000–$180,000; SaaS product redesign $50,000–$200,000; no separate fintech price | TRUE | mvp-design-agency.json l.11, ai-ux-design-agency.json l.11, saas-design-agency.json l.11, saas-product-redesign.json l.11, ui-ux-design-cost.json rows l.48–80 |
| 31 | faqs[5] | Every quote arrives as a fixed-scope proposal | TRUE | home.ts l.194 ("Published price ranges and fixed-scope proposals") |
| 32 | cta | A 45-minute product review; a senior designer walks through it | TRUE (home.ts ctaBand l.75). The page's "tells you which fixes to make first" is narrower than home.ts's "names the three changes with the biggest effect", and it is consistent with it. |
| 33 | benefits[4], process[4] | Designers work beside tkxel engineers, who check build effort before a screen reaches you; tkxel can build it; designers stay in your sprints until launch | TRUE | about.md l.23; home.ts l.107, l.191 |
| 34 | process timelines | 1–2 / 2–4 / 2–6 / 1–2 weeks / through launch; 5 to 8 target users before engineering starts; AI prototypes use real or recorded model output | TRUE | home.ts l.80–110; ai-ux-design-agency.json l.56 |
| 35 | process[3] | TradeZella's redesign was tested with traders before it went live | TRUE | tradezella.md ("traders tested it before it went live") |
| 36 | process[0] | "We ask your risk and compliance leads to join the first session." | UNVERIFIABLE (site) | No site page (home.ts, about.md, service JSON) states this process step. Rewrite as advice to the reader (lesson 2026-10-06). |
| 37 | faqs[3] | "Each flow **is checked** for contrast, focus order, chart summaries a screen reader can announce, target size and accessible login before handoff." | UNVERIFIABLE (site) | No site page states an accessibility check step before handoff. The only accessibility process claim is in chatbot-ui-design.json l.102 (chat windows). Rephrase as the design target. |
| 38 | benefits[3], process[0], process[4] deliverables | We annotate each regulated screen; "regulated-screen inventory"; "Annotated review file" deliverables | UNVERIFIABLE (site): owner to confirm | home.ts l.243 supports "annotated Figma files" for developers only. The compliance-review file and the regulated-screen inventory are new fintech deliverables that no site page lists, and the brief marks them as "method claim only". Anchor them to the home.ts wording (replacement below), or the owner confirms they are offered. |
| 39 | intro | "We design and test those paths before anything else." | TRUE | home.ts step 2 ("We design the riskiest flows first and test them as clickable prototypes") |
| 40 | solutionsIntro | "seven areas" | TRUE (7 solution cards) | fintech.json solutions[] |
| 41 | honesty | No invented clients, testimonials, awards, offices; Fintua/RCN not named; Anyday quote not used; no KYC/PCI/SOC 2/AI work implied for TradeZella or Anyday | TRUE | grep of fintech.json |

## Replacements (exact)

**F1, challenges[2].body (row 5).** Replace the whole body with:
> FINRA Rule 2210 requires broker-dealer communications, including websites, apps and social posts, to be fair and balanced, and it allows a legend or footnote only when that placement does not inhibit an investor's understanding. The rule also bars promissory or exaggerated claims. Design job: put the risk disclosure where the decision happens and give compliance one screen-by-screen review file.

(57 words; within the 50–70 range.)

**F2, challenges[6].body (row 12).** Replace the last sentence:
> Design job: pasteable one-time codes and passkeys, which the National Institute of Standards and Technology (NIST) SP 800-63-4 (final, 2025) covers as syncable authenticators.

with:
> Design job: pasteable one-time codes and passkeys; the National Institute of Standards and Technology (NIST) SP 800-63-4 (final, 2025) covers synced passkeys as syncable authenticators.

**F3, solutions[4].body (row 18).** Replace the second sentence:
> The CFPB finalized its Personal Financial Data Rights rule (Section 1033) in October 2024 and reopened it for reconsideration in August 2025, so we design to the principle rather than one rule text.

with:
> The CFPB finalized its Personal Financial Data Rights rule (Section 1033) in October 2024, reopened it for reconsideration in August 2025, and a federal court has barred its enforcement until that review ends, so we design to the principle rather than one rule text.

(The body grows by 10 words to about 66, still under the 70-word cap. Re-confirm the status on publish day.)

**F4, faqs[1].a (row 23).** Replace:
> Your compliance team, counsel and auditors decide compliance under rules from the Securities and Exchange Commission (SEC), FINRA and PCI DSS.

with:
> Your compliance team, counsel and auditors decide compliance under Securities and Exchange Commission (SEC) and FINRA rules and the PCI DSS standard.

**F5, abstract (row 24).** Replace the last sentence:
> Rules such as the Customer Identification Program and Financial Industry Regulatory Authority (FINRA) Rule 2210 shape each flow from the first sketch.

with:
> Rules such as the Customer Identification Program and Financial Industry Regulatory Authority (FINRA) Rule 2210 shape the flows they cover from the first sketch.

**F6, benefits[2].body (row 28).** Replace:
> TradeZella reported a 25% boost in user retention after its web and mobile redesign.

with:
> TradeZella saw a 25% boost in user retention after its web and mobile redesign.

**F7, process[0].body (row 36).** Replace:
> We ask your risk and compliance leads to join the first session.

with:
> Bring your risk and compliance leads to the first session.

**F8, faqs[3].a (row 37).** Replace:
> Each flow is checked for contrast, focus order, chart summaries a screen reader can announce, target size and accessible login before handoff.

with:
> We design each flow to that target: contrast, focus order, chart summaries a screen reader can announce, target size and accessible login.

**F9, benefits[3].body (row 38).** Replace:
> We annotate each regulated screen (disclosure, consent, risk text), so your compliance team and counsel review one file instead of a folder of screenshots.

with:
> Our annotated Figma files mark each regulated screen (disclosure, consent, risk text), so your compliance team and counsel review one file instead of a folder of screenshots.

In process[0] and process[4], keep the deliverables "regulated-screen inventory" and "Annotated review file" only if the owner confirms they are offered. Otherwise use the home.ts deliverables: process[0] "Research findings, priority list" and process[4] "Dev-ready specs, design QA". In that case, process[4].body becomes:
> Your compliance team or counsel signs off on the annotated Figma files, we revise the screens, and our designers stay in your sprints until launch, or tkxel engineers build it with us.

## Notes for the orchestrator (not page blockers)

- `content/home.ts` l.227 shows a trust badge `{ badge: "WCAG", label: "WCAG/AAA Achieved" }`. No site page or case study supports a WCAG AAA conformance claim, and this fintech page targets AA. It reads as a certification-style claim (RULES.md honesty). The owner should confirm or remove it.
- The page has no outbound citations. If QA wants a linkable source on-page, the primary URLs in rows 1, 7, 2, 18 and 22 were all returned by domain-limited searches this run.
- Re-check row 18 (1033) on publish day. A proposed rule was at OIRA review in August 2026 and could publish at any time.

VERDICT: FAIL
