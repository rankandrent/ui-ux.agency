# Fact-check: ux-design-san-diego (content/locations/ux-design-san-diego.json)

Date: October 16, 2026. Checker: fact-checker. Brief: content/briefs/location-san-diego.json.

Method: WebFetch failed with `getaddrinfo ENOTFOUND` for every external host (sandiegobusiness.org, genengnews.com, today.ucsd.edu, evonexus.org, biocom.org, w3.org, fda.gov, timeanddate.com; web.archive.org refused). No shell was available, so curl could not be used. Every external claim below was checked with domain-limited WebSearch: the cited URL had to come back as a top result with snippets that carry the figure. Site claims were checked word for word against content/services/*.json, content/case-studies/*.md, content/pages/about.md, terms.md and content/home.ts.

## Claims table

| # | Location in page | Claim (as written) | Verdict | Source |
|---|---|---|---|---|
| 1 | sections[1].items[0] (Software and SaaS) | EDC "counts 28,617 software jobs across 2,949 establishments, about one in six innovation economy jobs" | OUTDATED (undated) | https://www.sandiegobusiness.org/about-the-region/software/ : the figures are on the page, but the page has no data year and search metadata puts it at about 554 days old (around April 2025). The newer EDC region page (https://www.sandiegobusiness.org/about-the-region/) gives "more than 3,100 software establishments", which conflicts with 2,949. I could not find the source year for 28,617 or for "one in six". |
| 2 | sections[1].items[2] (Cybersecurity) | 2025 study by EDC and Cyber Center of Excellence: 14,875 jobs, 1,350 establishments, $4.3 billion regional economic impact | TRUE | https://www.sandiegobusiness.org/blog/study-san-diegos-4-3b-cyber-cluster-expands-amid-tech-contraction/ (posted November 2025): "14,875 jobs across 1,350 establishments"; "$4.3 billion regional economic impact" (that figure includes indirect effects; the page says "regional economic impact", which matches). |
| 3 | sections[1].items[1] (Life sciences) | Biocom California counted 61,866 San Diego life sciences jobs at the end of 2025, down 2.55% | TRUE | GEN, June 24, 2026, https://www.genengnews.com/topics/translational-medicine/california-still-golden-despite-job-losses-industry-group/ : the San Diego region "shrank to 61,866 jobs by the end of 2025, down 2.55%". Biocom's own report page, https://www.biocom.org/news/eir/, gives 61,866 *direct* jobs in 2025 (155,621 total). Note: the prior Biocom fact sheet gave 71,448 for 2024, and that series is not comparable. Optional precision: "61,866 direct San Diego life sciences jobs". |
| 4 | sections[1].items[1] | Link text "Biocom California" points to GEN | TRUE (attribution OK) | GEN reports the Biocom figure, and the sentence names Biocom as the counter. Optional: link "Biocom California" to https://www.biocom.org/news/eir/ and keep the 2.55% sourced to GEN. |
| 5 | sections[1].items[1] | "Patient records bring in the Health Insurance Portability and Accountability Act (HIPAA)" | WRONG (overbroad) | HHS Privacy Rule summary, https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html : the rule applies to covered entities (health plans, clearinghouses, providers who transmit health information electronically) and binds their business associates. Not every patient record falls under HIPAA. |
| 6 | sections[1].items[3] (Research spinouts) | UC San Diego won nearly $1.8 billion in research awards in fiscal year 2026 | TRUE | https://today.ucsd.edu/story/uc-san-diegos-fy26-awards-reflect-larger-grants-in-a-more-competitive-landscape : FY26 awards totaled "nearly $1.8 billion". (An earlier version of the story said the total was "pending final research gift totals"; "nearly" covers that.) |
| 7 | sections[1].items[3] | EvoNexus, "the incubator of the nonprofit CommNexus, gives startups space and services free of charge" | OUTDATED / WRONG | https://evonexus.org/application/ and https://evonexus.org/incubation/ : "EvoNexus acquires 1% equity (1% fully diluted capitalization) from your company in the form of COMMON STOCK upon acceptance". Benefits: "up to two years of rent-free residency". https://evonexus.org/evonexus-reduces-startup-equity-requirement-from-4-5-to-1-upon-admission/ (2019): the stake went from 4–5% (2018) to 1%. "Free of charge" with no equity has not been true since 2018. |
| 8 | sections[1].items[3] link | https://evonexus.org/evonexus-tech-incubator-welcomes-new-class-of-software-hardware-and-life-science-startups/ | UNVERIFIABLE + stale | The search returns this release at a different path, `https://evonexus.org/news/evonexus-tech-incubator-welcomes-new-class-of-software-hardware-and-life-science-startups/`. It is a July 25, 2017 release from before the equity policy, so it cannot support a present-tense terms claim. Replace with https://evonexus.org/application/. |
| 9 | sections[1].items[3] | "A lab result becomes a startup's minimum viable product (MVP) once first users finish one task in a clickable prototype." | WRONG (definition) | content/services/mvp-design-agency.json abstract defines the MVP as "the smallest version of a product that real users can try". The hub treats the clickable prototype as the design deliverable, not as the MVP itself. |
| 10 | sections[5].answer | San Diego is on PT, 3 hours behind ET all year; 1 p.m. ET = 10 a.m. PT | TRUE | timeanddate.com 2026 DST pages (https://www.timeanddate.com/news/time/usa-canada-end-dst-2026.html): California and the Eastern zone both change clocks. Arithmetic checked for all four table rows (11→8, 1→10, 3→noon, 5→2). Caveat: each zone switches at 2 a.m. local time, so for 3 overnight hours on each switch Sunday the gap is 2 or 4 hours. That never touches business hours, so no change is required. |
| 11 | sections[5].h3s[0] | Both zones switch on the same dates; the gap stays 3 hours after DST ends on November 1, 2026 | TRUE | timeanddate.com: DST ends Sunday, November 1, 2026, 2:00 a.m. local, in both zones (November 1, 2026 is the first Sunday of November). The Sunshine Protection Act passed the House on July 14, 2026 (308–117), but the Senate has not voted (https://en.wikipedia.org/wiki/Sunshine_Protection_Act; WTTW, July 27, 2026). Under current law the change happens as stated. Re-check if the Senate acts before November 1. |
| 12 | sections[5].h3s[0] | "For dedicated designers, the time overlap with the US Eastern workday is at least 4 hours" | WRONG (not the hub's wording) | content/services/hire-ui-ux-designers.json FAQ: "Every designer overlaps at least 4 hours with US Eastern time". The hub never says "workday", so use the hub's own phrase. |
| 13 | sections[8].body | "each designer shares at least 4 hours with the US Eastern workday" | WRONG (same as #12) | Same hire-page FAQ. |
| 14 | sections[3].rows | Prices and timelines for 7 engagements | TRUE | ai-product-discovery-workshop.json $8,000–$20,000, 1–2 weeks; mvp-design-agency.json $15,000–$50,000, 4–8 weeks; saas-onboarding-design.json $15,000–$45,000, 3–6 weeks; ai-ux-design-agency.json $25,000–$90,000, 4–10 weeks; saas-design-agency.json $40,000–$180,000, 6–16 weeks; saas-product-redesign.json $50,000–$200,000, "8–20 weeks in phases" (line 71) and "ships in phases over 8 to 20 weeks"; hire-ui-ux-designers.json $15,000–$40,000 per month, starts in 1–2 weeks. All match exactly. |
| 15 | sections[3].answer, metaDescription, priceRange | $8,000 to $200,000 per project; $15,000–$40,000 per month; "seven engagements"; "from $8,000" | TRUE | Minimum and maximum of the rows above; the table has 7 rows. |
| 16 | sections[3].h3s[0] | User roles, platforms and AI features named as main price factors; every proposal has a fixed scope; free consultation comes before any proposal | TRUE | ai-ux-design-agency.json ("number of AI features, user groups and platforms"), saas-design-agency.json ("Scope, number of user roles and platforms"), mvp-design-agency.json ("user types and platforms has the biggest effect"); about.md "every proposal has a fixed scope"; terms.md "Every engagement starts with a free consultation and a written proposal". The form asks for a product *link*, which fits a text-only description field. |
| 17 | sections[2].items[0] | Remote AI product discovery workshop in Figma and FigJam | TRUE | ai-product-discovery-workshop.json FAQ: "Most workshops run remotely in Figma and FigJam". |
| 18 | sections[2].items[1] | "MVP design turns it into a clickable product for users and investors" | WRONG (deliverable) | mvp-design-agency.json hero sub: "a clickable prototype in 4 to 8 weeks: enough to test with real users, pitch to investors and hand to developers". The deliverable is a prototype, not a product. |
| 19 | sections[2].items[2–5] | Onboarding "from sign-up to first result"; AI UX or chatbot UI design; phased redesign "one area at a time"; dedicated designers monthly | TRUE | saas-onboarding-design.json abstract; about.md lists chatbot UI design; saas-product-redesign.json step "We redesign one area at a time"; hire-ui-ux-designers.json. |
| 20 | sections[4].items[1] | "Every project starts with interviews, analytics or support data" | TRUE | about.md line 27 (word for word). |
| 21 | sections[4].items[3] | AI prototypes show real or recorded model responses, mistakes included | TRUE | ai-ux-design-agency.json step 3: "real or recorded model responses, so testers react to genuine mistakes". |
| 22 | sections[4].items[4] | "Between 5 and 8 target users test the prototype in remote Maze sessions" | WRONG (overstated) | about.md: risky flows tested with 5 to 8 real users. Maze appears only in ai-ux-design-agency.json FAQ ("Maze for remote tests"), and the page's own FAQ says "often run in Maze". The step states Maze as fixed for every project. |
| 23 | sections[4].items[4] | Figma handoff with a component library; designers answer build questions in sprints | TRUE | home.ts FAQ ("annotated Figma files, components and specs, and our designers join your sprint reviews"); saas-design-agency.json build support step. |
| 24 | sections[4].items[0] | "We agree on goals and success metrics, then get access to your analytics and support data." | TRUE (scoped) | home.ts step 1 ("read your analytics"); saas-design-agency.json ties screens to a KPI; about.md (support data). No hub names a "kickoff" step, but nothing here adds a deliverable. |
| 25 | sections[0].body | "Our designers have worked on 200+ digital products since 2017." | TRUE | about.md; RULES.md confirmed company fact. |
| 26 | sections[0].body | "Engineers receive annotated design files, a component library and answers during every sprint." | TRUE | home.ts FAQ. |
| 27 | sections[0].body | "tkxel's only office is in Reston" | WRONG | tkxel lists offices in Reston (US HQ), Lahore, Dammam and Lisbon (https://tkxel.com/services/, https://tkxel.com/contact-us/). RULES.md allows only "our only office is Reston, VA", scoped to ui-ux.agency. |
| 28 | sections[9].faqs[0] | "tkxel's one office is in Reston, Virginia" | WRONG | Same as #27. |
| 29 | abstract | "Our one office is in Reston, Virginia, and we have no San Diego office." | TRUE (per RULES.md) | RULES.md Honesty and Sister site; terms.md address. Owner note below. |
| 30 | sections[9].faqs[0] | Team works remotely with US companies | TRUE | RULES.md Sister site honesty line. |
| 31 | sections[6].answer | "None of these clients is in San Diego" | UNVERIFIABLE | No case-study file states a client location, so the site cannot prove a negative about where each client is. The honesty requirement is to not claim them as San Diego clients. |
| 32 | sections[6].items[0] Vocable | Idea to MVP; one editor, switch between OpenAI, Google, Anthropic and Meta models without opening another tab; overall workflow efficiency +35% | TRUE | content/case-studies/vocable.md lines 7, 12, 47. |
| 33 | sections[6].items[1] Digno | Scores on finished tasks, consistency and engagement; four bands Poor to Pro; overall revenue 5x | TRUE | content/case-studies/digno.md lines 13, 25. |
| 34 | sections[6].items[2] TradeZella | Crowded dashboards redrawn around metrics traders check most, web and mobile, tested before launch; 40% more user interaction; 25% boost in retention | TRUE | content/case-studies/tradezella.md lines 12–13, 41, 90, 92. |
| 35 | sections[6].items[3] Mass Media Co. | "Separate tools for audience data, orders and campaigns became one B2B platform for web and mobile"; order processing efficiency +30%; error rate 25% → 2+ | Figures TRUE; first clause WRONG | mass-media-co.md: "MMC's order work was spread across tools that did not talk to each other". The description says "separate order tools". The file never says audience data and campaigns ran in separate tools; the *new* platform covers audience data, orders and campaigns (title). Figures match lines 12–13. |
| 36 | sections[7].h3s[1] | Remote sprints at the lower end of $12,000–$25,000; on-site with travel near the top | TRUE | design-sprint.json line 90. |
| 37 | sections[8] | $15,000–$40,000 per month; start within 1 to 2 weeks; one person or 2 to 5; month to month, 30 days notice; design lead reviews weekly | TRUE | hire-ui-ux-designers.json abstract, FAQs ("A single dedicated designer is possible; we still include a weekly review by a design lead"; "month to month with 30 days notice"). |
| 38 | sections[9].faqs[2] | "A senior team usually starts within 1 to 2 weeks of a signed proposal." | TRUE (site inconsistency noted) | product-design-agency.json FAQ: "Most projects start within 1 to 2 weeks of a signed proposal"; saas-design-agency.json "full senior team in 1 to 2 weeks". home.ts FAQ says instead "1 to 2 weeks after the first call". Orchestrator: reconcile home.ts with the hubs. |
| 39 | sections[9].faqs[3] | 5 to 8 target users, clickable prototypes, remote sessions, often in Maze | TRUE | about.md; ai-ux-design-agency.json FAQ. |
| 40 | sections[9].faqs[4] | tkxel is a software engineering company; design only or design and development | TRUE | about.md lines 9, 23. |
| 41 | sections[9].faqs[1] | Regulatory team decides whether HIPAA or FDA SaMD rules apply | TRUE | FDA SaMD page (IMDRF definition: software for medical purposes that performs them without being part of a hardware medical device), https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd. FDA Digital Health FAQ: software must meet the device definition in FD&C Act 201(h). The page gives no legal advice. |
| 42 | sections[9].faqs[5] | WCAG 2.2 AA; W3C Recommendation on October 5, 2023 | TRUE | https://www.w3.org/WAI/news/2023-10-05/wcag22rec/ ; https://www.w3.org/standards/history/WCAG22/ |
| 43 | sections[9].faqs[5] | "US teams use it to meet Americans with Disabilities Act (ADA) and Section 508 expectations." | WRONG (imprecise legal frame) | The Section 508 standards incorporate WCAG 2.0 Level A and AA (E205.4, 702.10.1; https://www.section508.gov/develop/applicability-conformance/). The DOJ ADA Title II rule (2024) requires WCAG 2.1 AA; an April 2026 interim final rule moved its compliance dates to April 26, 2027 and April 26, 2028. WCAG 2.2 says "Content that conforms to WCAG 2.2 also conforms to WCAG 2.0 and WCAG 2.1" (https://www.w3.org/TR/WCAG22/), apart from 4.1.1 Parsing, which may still need testing. The sentence implies that the laws name WCAG 2.2. |
| 44 | hero.sub, summary, metaDescription | Senior designers; video calls and shared Figma files; prototypes tested with users | TRUE | about.md, home.ts. |
| 45 | whole page | No fixed review window, no hours promise, no San Diego office, team or clients claimed | TRUE | The page has no "9 a.m.–2 p.m. PT" window, and its time table is labeled "Example". Reply time "within one business day, ET" matches about.md plus the RULES.md ET convention. |

## Exact replacements (for every row not TRUE)

**F1 (#1, Software and SaaS card body).** Replace the first sentence. The other sentences stay.
> The <a href="https://www.sandiegobusiness.org/about-the-region/">San Diego Regional Economic Development Corporation (EDC)</a> counted more than 3,100 software establishments in the region as of October 2026.

If the orchestrator cannot open that page before publishing, remove the numbers instead:
> The <a href="https://www.sandiegobusiness.org/about-the-region/software/">San Diego Regional Economic Development Corporation (EDC)</a> profiles software as one of the region's core industries.

Do not keep 28,617, 2,949, $165,492 or "one in six", because their data year is unknown. Update the brief's sector-map visual text ("Software and SaaS: 28,617 jobs") the same way.

**F2 (#5, Life sciences card, third sentence):**
> Patient records bring in the Health Insurance Portability and Accountability Act (HIPAA) when a covered health care provider, health plan or their business associate handles them; your regulatory team decides which rules apply.

**F3 (#7, #8, Research spinouts card, EvoNexus clause and link):** replace from ", and <a …EvoNexus</a>…" to "free of charge." with:
> , and the nonprofit incubator <a href="https://evonexus.org/application/">EvoNexus</a> gives accepted startups up to two years of rent-free residency and mentorship for 1% common equity.

**F4 (#9, Research spinouts card, last sentence):**
> MVP design turns a lab result into the smallest version of a product that real users can try, starting with a clickable prototype tested with 5 to 8 target users.

**F5 (#12, sections[5].h3s[0] second sentence):**
> For dedicated designers, every designer overlaps at least 4 hours with US Eastern time, and written comments cover the rest.

**F6 (#13, sections[8].body, fourth sentence):**
> A design lead reviews the work weekly, and every designer overlaps at least 4 hours with US Eastern time.

**F7 (#18, sections[2].items[1]):**
> A funded startup concept and no product yet: <a href="/services/startups/mvp-design-agency/">MVP design</a> turns it into a clickable prototype you can test with users and show investors.

**F8 (#22, sections[4].items[4] first sentence):**
> Between 5 and 8 target users test the prototype in remote sessions, often run in Maze.

**F9 (#27, sections[0].body last sentence):**
> ui-ux.agency's only office is in Reston, Virginia; we have no San Diego office or local team.

**F10 (#28, FAQ "Is ui-ux.agency a San Diego company?", first two sentences):**
> No. We are the design team of tkxel, a software engineering company headquartered in Reston, Virginia, and Reston is our only office.

**F11 (#31, sections[6].answer second sentence):**
> We do not claim any of these clients as San Diego clients; the cards show the design work, not a local track record.

**F12 (#35, Mass Media Co. card first sentence):**
> Order work spread across separate tools became one B2B platform for audience data, orders and campaigns, on web and mobile.

**F13 (#43, FAQ "Which accessibility standard…", second sentence):**
> The W3C states that content conforming to WCAG 2.2 also conforms to WCAG 2.0 and 2.1, the versions referenced by the Section 508 standards and the Americans with Disabilities Act (ADA) Title II rule.

## Notes for the orchestrator

- Owner question: tkxel lists offices in Lahore, Dammam and Lisbon as well as Reston. RULES.md says the only real office is Reston, VA, which holds for ui-ux.agency as stated. But about.md says our designers "sit next to tkxel's engineers". Ask the owner to confirm that "our only office is in Reston" is accurate for the design team, not only for the US entity.
- Site inconsistency: home.ts FAQ says "Most projects start 1 to 2 weeks after the first call", while product-design-agency.json says "within 1 to 2 weeks of a signed proposal". The page follows the hub.
- Stale brief records: the brief's eav and externalSources still give the 28,617/2,949/$165,492/"one in six" figures and "EvoNexus … free of charge", and visuals[1].text has "28,617 jobs". The brief's eav "every dedicated designer overlaps at least 4 hours with US Eastern time" is the correct wording; the page drifted from it.
- Semantic entities: if F3 lands, EvoNexus stays in the page. If F1's removal fallback is used, the EDC entity still appears.
- DST: re-check the Sunshine Protection Act's Senate status if this page publishes after October 2026 but before November 1.

VERDICT: FAIL
