# Fact-check: /industries/enterprise/ (content/industries/enterprise.json)

Date: 2026-10-16. Brief: content/briefs/industry-enterprise.json. Checked by: fact-checker.

**Method.** WebFetch failed with `getaddrinfo ENOTFOUND` for every host (csrc.nist.gov, datatracker.ietf.org, census.gov, okta.com). There was no shell, so I couldn't use curl. Each claim was verified with a WebSearch limited to the source's own domain. The results returned the cited URL along with snippets that support the claim. The page has **no external links**: every source is cited in plain text. So there was no link-load check, and each named attribution was checked against the document it names.

## Claims

| # | Location | Claim | Verdict | Source |
|---|---|---|---|---|
| 1 | challenges[0] | NIST defines RBAC as access authorizations attached to roles, not individuals | TRUE (paraphrase of the two CSRC glossary definitions: "access authorizations a user receives based on … a given role" and "permitted actions … identified with roles rather than with individual subject identities") | https://csrc.nist.gov/glossary/term/role_based_access_control |
| 2 | challenges[1] | IBM Carbon data tables offer sortable headers, expandable rows and batch actions | TRUE | https://carbondesignsystem.com/components/data-table/usage/ |
| 3 | challenges[1] | Salesforce lightning-datatable, built on the SLDS data table blueprint, is not supported on mobile | TRUE ("lightning-datatable isn't supported on mobile devices"; it "implements styling from data tables in the Lightning Design System") | https://developer.salesforce.com/docs/platform/lightning-component-reference/guide/lightning-datatable.html ; https://developer.salesforce.com/docs/platform/mobile-offline/guide/considerations-base-components-support.html |
| 4 | challenges[2] | SOC 2 = System and Organization Controls attestation by an independent CPA firm, against the AICPA Trust Services Criteria | TRUE (SOC 2 examinations are performed under attestation standard AT-C 205 and cover security, availability, processing integrity, confidentiality, privacy) | https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services ; https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022 |
| 5 | challenges[2] | Security is required | TRUE, secondary sources only. The security criteria are the "common criteria" that every SOC 2 covers. AICPA pages confirm the other categories are optional, but no AICPA text with "required" came back in search. | https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022 ; https://secureframe.com/hub/soc-2/common-criteria |
| 6 | faqs[3] | Type 1 covers control design at a point in time; Type 2 covers operating effectiveness over a period of time | TRUE (no period length given, as the brief requires) | https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services ; https://www.aicpa-cima.com/professional-insights/video/maintaining-high-standards-for-soc-engagements |
| 7 | challenges[3] | Revised Section 508 Standards "in effect since January 18, 2018" | **WRONG (wording)**. The final rule was published January 18, 2017 and took effect March 20, 2017. Compliance was required from January 18, 2018. | https://www.access-board.gov/ict/ ; https://www.access-board.gov/ict/ict-final-rule.pdf |
| 8 | challenges[3], faqs[2] | Revised 508 incorporates WCAG 2.0 Level A and AA; issued by the US Access Board | TRUE | https://www.section508.gov/develop/applicability-conformance/ ; https://www.access-board.gov/ict/ |
| 9 | challenges[3] | Vendors document conformance in an ACR "built on the VPAT" | **WRONG (overstated)**. Section508.gov says the VPAT is the most common way to build an ACR but is optional. | https://www.section508.gov/sell/acr-vpat-faq/ |
| 10 | challenges[3] | ADA Title II rule sets WCAG 2.1 AA for state and local government websites and apps | TRUE. No dates are used. ada.gov hosts the 2026 interim final rule (assets/pdfs/2026-ifr.pdf), but I couldn't read its dates, so leaving dates out is correct. | https://www.ada.gov/resources/2024-03-08-web-rule/ |
| 11 | challenges[4], stats[2] | Census Bureau, May 2026: 37% of US firms with 250+ employees use AI | TRUE (Census story of May 26, 2026, BTOS, December 2025 to May 2026) | https://www.census.gov/library/stories/2026/05/ai-use-businesses.html |
| 12 | challenges[5], stats[3] | Okta Businesses at Work 2025: 2024 global average of 101 apps per company | TRUE (infographic: "global average for 2024 is 101 apps") | https://www.okta.com/sites/default/files/2025-03/Businesses-at-Work-Infographic.pdf ; https://www.okta.com/newsroom/articles/businesses-at-work-2025/ |
| 13 | solutions[2] | SCIM = System for Cross-domain Identity Management, RFC 7644, September 2015 | TRUE (published 2015-09-25, Proposed Standard; later updated by RFC 9865) | https://www.rfc-editor.org/info/rfc7644/ |
| 14 | solutions[3] | WCAG 2.2 SC 2.5.8 sets a 24 × 24 CSS pixel minimum at AA; Focus Not Obscured; Accessible Authentication 3.3.8 | TRUE (2.5.8 has spacing and other exceptions; "minimum" is fair) | https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html ; https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ |
| 15 | faqs[2] | WCAG 2.2 a W3C Recommendation on October 5, 2023, 9 new SC over 2.1; 2.2 conformance = 2.1 and 2.0 conformance | TRUE (W3C notes that 4.1.1 Parsing was removed and is handled by errata to 2.0/2.1) | https://www.w3.org/WAI/news/2023-10-05/wcag22rec/ ; https://www.w3.org/TR/WCAG22/ |
| 16 | solutions[4], faqs[1] | NIST AI RMF 1.0, January 26, 2023, voluntary, functions Govern, Map, Measure, Manage; GenAI Profile NIST-AI-600-1, July 26, 2024 | TRUE. Note: NIST's page says AI RMF 1.0 is now being revised. The dated statements stay true. | https://www.nist.gov/itl/ai-risk-management-framework ; https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence |
| 17 | stats[0] | 200+ digital products designed | TRUE (confirmed company fact) | RULES.md; content/home.ts |
| 18 | stats[1], benefits[1] | Mass Media Co.: order processing efficiency +30%; error rate "2+, reduced from 25%"; digital marketing company; one B2B platform; "order work was spread across tools that did not talk to each other" | TRUE (word for word; never called an enterprise client) | content/case-studies/mass-media-co.md |
| 19 | solutions[1] | MMC "a single dashboard now covers open tasks, sales operations, recent tasks and how work flows for each client" | TRUE (word for word) | content/case-studies/mass-media-co.md |
| 20 | solutions[0] | Digno score computed at three levels: organization, department, individual employee | TRUE. No revenue, profit or ROI is cited. | content/case-studies/digno.md |
| 21 | solutions[4] | Sources, confidence cues, inline edit, regenerate, undo; approval steps, activity log, easy stop button for agents | TRUE | content/services/ai-ux-design-agency.json |
| 22 | solutions[5] | Phases behind feature flags, beta group first, in-app announcements, short tour, optional switch back during beta | TRUE | content/services/saas-product-redesign.json |
| 23 | solutions[5] | "Adoption rate, task time, error rate, training time and support tickets are agreed at kick-off" | **WRONG**. The hub says "We agree 2 or 3 metrics at kick-off … and compare them before and after launch". Five metrics contradicts that. | content/services/saas-design-agency.json FAQ |
| 24 | benefits[0] | Designs checked for build effort with tkxel engineers; annotated Figma files, components, specs; designer joins sprint reviews until live | TRUE | content/home.ts whyUs + FAQ; about.md |
| 25 | benefits[2] | Title "Tested with every role"; "those testers come from several roles, so an approver, an admin and an operator each try the flow" | **UNVERIFIABLE**. No site page says we recruit testers from every role. The site states only "tested with 5 to 8 real users before engineering starts". | content/home.ts; about.md |
| 26 | benefits[3] | Mutual NDA before the first detailed call; work in your Figma, Jira or Linear | TRUE | mvp-design-agency.json FAQ; saas-design-agency.json FAQ |
| 27 | benefits[3] | "All design files, research and components belong to your company from day one of the engagement" | **WRONG**. The hub says "All Figma files, components and research notes transfer to your company when the project ends." | content/services/saas-design-agency.json FAQ |
| 28 | process[*].timeline | 1–2, 2–4, 2–6, 1–4 weeks | TRUE | content/services/saas-design-agency.json steps |
| 29 | process[0] | "interview 6 to 10 users across roles"; "A stakeholder map covers product, IT, security and procurement" | **WRONG**. The hub's published count is "6 to 10 customers and churned users", so the page changes who is interviewed. No site step includes a stakeholder map. "Review support tickets" comes from the redesign hub's 2-week audit, not this 1–2 week step. | content/services/saas-design-agency.json; saas-product-redesign.json |
| 30 | process[1] | "Clickable wireframes are tested with each role, so an approver and an admin both finish their tasks before visual design starts" | **UNVERIFIABLE**. The hub says "redesign the riskiest flows first … test them as clickable wireframes". "With each role" and the guaranteed outcome are not on the site. | content/services/saas-design-agency.json |
| 31 | process[2], process[3] | Component library reused in every sprint; design QA on built screens; beta and phased release; before/after metrics; embedded team later | TRUE | saas-design-agency.json; saas-product-redesign.json; hire-ui-ux-designers.json |
| 32 | faqs[4] | Bold: "Employees adopt a redesigned enterprise tool when they keep their legacy workflow during a beta and switch over one area at a time." Body: "Change management starts in research: the power users … join the beta group first, and their feedback decides what changes" | **UNVERIFIABLE**. The causal claim has no source. The hub does not say power users join first or that research starts change management. The hub says a beta group "uses each new area first; we fix issues before the full release". | content/services/saas-product-redesign.json |
| 33 | faqs[5] | $40,000–$180,000 full SaaS product; $50,000–$200,000 phased redesign over 8–20 weeks; AI UX $25,000–$90,000; embedded team $15,000–$40,000 per month | TRUE | saas-design-agency.json; saas-product-redesign.json; ai-ux-design-agency.json; hire-ui-ux-designers.json; ui-ux-design-cost.json |
| 34 | faqs[5] | "The number of roles, workflows and platforms sets the final price" | **WRONG**. "Workflows" is not one of the 6 price factors in the linked cost guide (user roles, platforms, research depth, design system scope, AI and data complexity, …). | content/services/ui-ux-design-cost.json |
| 35 | cta | 45-minute product review by a senior designer, three changes | TRUE | content/home.ts ctaBand |
| 36 | faqs[2], solutions[3], bullets, process[2] | We design and annotate to WCAG 2.2 AA; your team or an auditor completes the ACR | TRUE as positioning. This matches fintech.json and healthcare.json. No service JSON states it (orchestrator note). The page never says we issue VPATs/ACRs or certify. | content/industries/fintech.json; healthcare.json |
| 37 | Honesty | No SOC 2 held, no VPAT/ACR issued, no certification, no ISO 27001/CMMI/"WCAG/AAA Achieved", no enterprise/Fortune 500/federal clients, no local office, no Apex HCM/Fortna/ToolsGroup | TRUE (none present) | RULES.md; brief honesty list |

## Exact replacements

**F1: challenges[3].body** (claims 7 and 9). Replace the whole body with:

> Federal procurement follows the US Access Board's Revised Section 508 Standards, required since January 18, 2018, which incorporate WCAG 2.0 A and AA. Vendors document conformance in an Accessibility Conformance Report (ACR), usually built on the VPAT (Voluntary Product Accessibility Template). The Americans with Disabilities Act (ADA) Title II rule sets WCAG 2.1 AA for state and local government websites and apps.

**F2: solutions[5].body, second sentence** (claim 23). Replace "Adoption rate, task time, error rate, training time and support tickets are agreed at kick-off and compared before and after the rollout." with:

> Two or three metrics, chosen from adoption rate, task time, error rate, training time and support tickets, are agreed at kick-off and compared before and after the rollout.

**F3: benefits[2]** (claim 25). Change the title "Tested with every role" to `Tested with real users`. Replace the body with:

> Every flow that carries risk is tested with 5 to 8 real users before engineering starts. On enterprise software, the most useful test group mixes roles, such as an approver, an admin and an operator, not only end users.

**F4: benefits[3].body, second sentence** (claim 27). Replace "All design files, research and components belong to your company from day one of the engagement." with:

> All Figma files, components and research notes transfer to your company when the project ends.

**F5: process[0].body** (claim 29). Replace with:

> We read your analytics, watch session recordings and interview 6 to 10 customers and churned users. Map the stakeholders in product, IT, security and procurement as well, because each of them can stop a rollout.

**F6: process[1].body** (claim 30). Replace with:

> The role-permission matrix gets signed off, then the riskiest workflow steps are redesigned first and tested as clickable wireframes before visual design starts. Include an approver and an admin among the testers.

**F7: faqs[4].a** (claim 32). Replace the whole answer with (bold is 27 words; answer is about 70 words; it keeps the "change management" n-gram and the deep link):

> <strong>We ship a redesigned enterprise tool one area at a time, with the old view still available during the beta, so employees switch over step by step.</strong> Change management runs through that beta: a small group tries each new area first, and we fix issues before the full release. Put the power users who rely on shortcuts and saved views in that group. Our <a href="/services/saas-products/saas-product-redesign/#how-does-our-saas-product-redesign-avoid-a-big-bang-launch">phased redesign of a legacy tool</a> follows the same order.

**F8: faqs[5].a, third sentence** (claim 34). Replace "The number of roles, workflows and platforms sets the final price." with:

> The number of user roles and platforms, research depth and design system scope set the final price.

## Notes for the orchestrator (not failures)

- Brief `sources` Okta URL `https://okta.com/blog/2025/03/businesses-at-work-2025` was not returned by search. Okta's own pages for the figure are `/newsroom/articles/businesses-at-work-2025/` and the 2025-03 infographic PDF. This is a stale record and does not affect the page, which has no link.
- Census URL host: the search returns `www.census.gov`, while the brief has `census.gov`. This doesn't affect the page.
- NIST says AI RMF 1.0 is being revised. Re-check claim 16 when the revision ships.
- SOC 2 "security is required" (claim 5) rests on secondary sources plus AICPA's "optional categories" pages. Re-open the AICPA 2017 TSC PDF when fetch works.
- The fixed rail H2 "Enterprise software UI UX case studies" plus `industries: [enterprise]` on mass-media-co.md and digno.md labels the *software*, not the client. The page copy itself never calls MMC or Digno enterprise clients. Keep it that way in any rail card text.
- WCAG 2.2 AA design/annotation is a site claim only on industry pages, not on any service JSON (claim 36). Consider adding it to saas-design-agency.json if the owner confirms it.
- Brief's sister check is still unverified (DNS).

VERDICT: FAIL
