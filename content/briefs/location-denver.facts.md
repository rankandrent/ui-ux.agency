# Fact-check: /location/ux-agency-denver/ (content/locations/ux-agency-denver.json)

Date: 2026-10-16. Brief: content/briefs/location-denver.json.
Method: WebFetch failed with `ENOTFOUND` on every host (leg.colorado.gov, coag.gov, dre.colorado.gov, finnegan.com, courtlistener.com). No shell/curl in this run. I verified with WebSearch (domain-limited where possible) and read the site's own files (service JSON, case studies, about.md, home.ts).
Line numbers below refer to content/locations/ux-agency-denver.json.

## Claims

| # | Line | Claim | Verdict | Source |
|---|---|---|---|---|
| 1 | 25 | "We have no Denver office; the one office is in Reston, Virginia." | WRONG (scope) | about.md l.9 gives Reston as the HQ of **tkxel**. tkxel also lists Lahore, Dammam and Lisbon (The Manifest directory; LUMS 2021 Lahore office tour: https://lums.edu.pk/news/tkxel-conducts-virtual-recruitment-drive). The rule in RULES.md "Sister site" holds only when scoped to ui-ux.agency. See F1. |
| 2 | 25, 220–222 | Denver is 2 hours behind ET all year | TRUE | https://www.timeanddate.com/worldclock/usa/denver ; https://www.timeanddate.com/time/change/usa/denver |
| 3 | 25, 340 | Risky flows tested with 5 to 8 real users as clickable prototypes | TRUE | about.md "How we work" step 2 |
| 4 | 113 | ui-ux.agency is the design team of tkxel; designs checked for build effort; 200+ products since 2017 | TRUE | about.md l.9, l.23; home.ts l.24–25, l.240; RULES confirmed facts |
| 5 | 113 | "we stay through the build to answer their questions" | TRUE | about.md step 3; saas-design-agency.json step 4 |
| 6 | 118 | CBRE 2025: 116,970 tech specialists, 13th largest market | TRUE (secondary: Mile High CRE reporting CBRE) | https://milehighcre.com/cbres-annual-scoring-tech-talent-ranks-denver-14th-overall/ |
| 7 | 122 | CBRE 2025 ranks Denver 14th; tech 6.8% of employment vs 5.3% top-50 average | TRUE (same source) | same |
| 8 | 122 | CBRE 2026 places Denver 16th | TRUE (secondary) | https://milehighcre.com/denver-remains-major-tech-hub-as-colorado-springs-ranks-among-top-emerging-markets/ ; https://www.cbre.com/insights/books/scoring-tech-talent-2026 |
| 9 | 122 | Links `milehighcre.com/?p=57101` and `?p=62070` | UNVERIFIABLE | Search returns only the slug URLs in rows 6 and 8, and I could not confirm which post IDs the shortlinks resolve to. See F2. |
| 10 | 122 | May 2025: computer and math jobs in the metro paid a mean of $62.33 an hour | TRUE | BLS "Occupational Employment and Wages in Denver-Aurora-Centennial — May 2025" (released August 5, 2026): computer and mathematical $62.33 vs $57.73 US, 5.4% vs 3.4% |
| 11 | 122 | Link `bls.gov/regions/mountain-plains/news-release/2026/occupationalemploymentandwages_denver_20260805.htm` | UNVERIFIABLE | Search returns only `https://www.bls.gov/regions/mountain-plains/news-release/occupationalemploymentandwages_denver.htm`. The dated archive pattern exists (`/news-release/2026/countyemploymentandwages_colorado_20260904.htm`), and the release date of August 5, 2026 matches, but the dated Denver URL never came back. See F3. |
| 12 | 126 | OEDIT: software and IT = 10% of state employment, 20% of state GDP | TRUE | OEDIT FY 2026 Performance Plan: https://spl.cde.state.co.us/artemis/govserials/gov3423internet/gov3423202526internet.pdf ("software and IT account for 10% of Colorado's employment and 20% of its GDP") |
| 13 | 126 | "with 47,000+ jobs added in 5 years" | UNVERIFIABLE (time frame) | The OEDIT snippet cuts off at "adding more than 47,000 new jobs over the…", so the time frame is not readable. CTA's 2025 Tech Report gives 47,440 for 2018–23 (another source). See F4. |
| 14 | 130 | Colorado Startup Week, 15th year, September 14–18, 2026, metro Denver, free, 10,000+ expected participants, 200+ community events | TRUE | https://coloradobiz.com/colorado-startup-week-15th-year-ai-denver/ ; https://jakejabscenter.org/event/colorado-startup-week-2026/ ; https://www.costartupweek.com/about . The 2025 rename from Denver Startup Week is not stated on the page, so no claim to check (https://gazette.com/2025/09/12/denver-startup-week-now-colorado-startup-week/ confirms it). Started 2012, so 2026 = 15th. |
| 15 | 134 | Techstars founded in Boulder in 2006; first accelerator program there in summer 2007 | TRUE | https://www.techstars.com/about (timeline: incorporated November 2006; "hosts its first accelerator program in Boulder, Colorado" summer 2007) |
| 16 | 134 | Link `https://techstars.com/about` | UNVERIFIABLE (host) | Search returns `https://www.techstars.com/about`. See F5. |
| 17 | 141 | "From January 1, 2027, Colorado's SB 26-189 turns four duties into interface work: notice, an explanation after an adverse outcome, human review and data correction." | TRUE | The deployer duties start January 1, 2027 (the bill page says the act's effective date is 05/14/2026, but duties apply from 2027; coag.gov/ai: "goes into effect January 1, 2027"). "From" correctly refers to when the duties apply, not to signing. https://leg.colorado.gov/bills/sb26-189 ; https://coag.gov/ai/ |
| 18 | 151 | Scope: "automated decision-making technology that materially influences consequential decisions, such as employment, housing, lending or insurance" | TRUE | Bill summary: "consequential decision" = access to, eligibility for, or compensation related to education, employment, housing, financial or lending services, insurance, health-care services, or essential government services and public benefits. "Covered ADMT" = ADMT "used to materially influence a consequential decision". All four "such as" items are on the statutory list ("lending" is short for "financial or lending services"). |
| 19 | 156 | Notice: "A clear disclosure at the point where the automated tool shapes the decision." | WRONG (timing) | Fiscal note / bill summary: notice comes **before** a deployer uses the covered ADMT to materially influence the decision. "At the point where" could be read as at or after use. See F6. |
| 20 | 161 | Explanation within 30 days, plain language, the tool's role | TRUE | Fiscal note (https://leg.colorado.gov/bill_files/115880/download): plain-language explanation of the decision and the ADMT's role within 30 calendar days of an adverse outcome. "On screen or by email" is a design choice in a "what the user must see" column, which is acceptable. |
| 21 | 166 | Human review: "A way to request meaningful human review and reconsideration, with its status." | WRONG (missing qualifier, invented duty) | The act grants meaningful human review and reconsideration after an adverse outcome only "to the extent commercially reasonable" (enrolled text, per leg.colorado.gov search summary; the AG pre-rulemaking paper asks what "commercially reasonable" means). "With its status" is not a statutory duty but sits in the "What the user must see" column. See F7. |
| 22 | 171 | Correction of factually incorrect personal data the tool used | TRUE | Bill summary: right to correct "factually incorrect personal data" used by a covered ADMT (enrolled text also covers materially inaccurate data). |
| 23 | 175 | Records kept 3 years | TRUE | Bill summary: developers and deployers keep compliance records for at least three years. |
| 24 | 181–182 | Developer documentation to deployers includes human-review instructions | TRUE | Bill summary: technical documentation incl. intended uses, training-data categories, known limitations, instructions for meaningful human review. |
| 25 | 199–216 | 4 steps and their week ranges (1–2, 1–4, 1–3, 1–4) | TRUE | ai-ux-design-agency.json steps (1–2, 1–3, 1–3, 1–2); saas-design-agency.json steps (1–2, 2–4, 2–6, build support 1–4). Each page range is within the union of the hub ranges. |
| 26 | 203, 211 | Use-case ranking by user value, data readiness and risk; 5 to 8 users in Maze or on video calls; real or recorded LLM output | TRUE | ai-product-discovery-workshop.json abstract; ai-ux-design-agency.json steps 3–4 and tools FAQ; product-design-agency.json FAQ (Maze) |
| 27 | 222 | "Dedicated designers have at least 4 hours of overlap with US Eastern time, and many teams choose full overlap." | WRONG (wording, worst case) | hire-ui-ux-designers.json l.217: "Every designer overlaps at least 4 hours with US Eastern time, and many teams choose full overlap." Coordinator rule: the wording must be exactly "at least 4 hours with US Eastern time". Worst case: if the 4 hours are 9 a.m.–1 p.m. ET, only 11 a.m.–1 p.m. ET (9–11 a.m. Denver) falls inside a 9-to-5 Denver day, so as little as 2 hours. The example table's 1 p.m. and 3 p.m. Denver rows (3 and 5 p.m. ET) are not covered in that case. See F8. |
| 28 | 230–234 | Clock conversions 8→10, 10→12, 1→3, 3→5 | TRUE | 2-hour offset (row 2) |
| 29 | 255–260 | Prices and timelines: $8,000–$20,000 / 1–2 wk; $25,000–$90,000 / 4–10 wk; $15,000–$60,000 / 3–8 wk; $15,000–$45,000 / 3–6 wk; $40,000–$180,000 / 6–16 wk; $15,000–$50,000 / 4–8 wk | TRUE | priceRange and abstract of ai-product-discovery-workshop, ai-ux-design-agency, chatbot-ui-design, saas-onboarding-design, saas-design-agency, mvp-design-agency .json |
| 30 | 292 | "two AI products built from zero and two SaaS redesigns" | TRUE | vocable.md and digno.md ("idea to product"); tradezella.md and mass-media-co.md (services: saas-product-redesign) |
| 31 | 292 | "None of these clients is in Colorado" | UNVERIFIABLE | No case-study file gives a client location. Public data is mixed (TradeZella is "remote-first"; Mass Media Co. could not be identified). See F9. |
| 32 | 292 | "each figure comes from the client's case study page" | TRUE | the four .md files |
| 33 | 296 | Vocable: idea to MVP; OpenAI, Google, Anthropic and Meta models; workflow efficiency +35% | TRUE | vocable.md l.7, l.29, l.47, l.101 |
| 34 | 300 | Digno: HR tech SaaS; AI engine bands Poor to Pro; requirements from stakeholders and end users pinned down the scoring formula; revenue 5x | TRUE | digno.md l.25, l.41 (Our approach, so produced by the work), l.104. "In our view…" is labelled opinion; the page does not say Digno is covered by the law. |
| 35 | 304 | TradeZella: web and mobile redesign around how traders review their own results; +40% interaction, +25% retention | TRUE | tradezella.md l.50, l.104–105 |
| 36 | 308 | Mass Media Co.: B2B platform revamp; +30% order processing efficiency; error rate down from 25% | TRUE | mass-media-co.md l.79, l.98, l.104–105 |
| 37 | 325 | Senior designers; a single dedicated designer gets a weekly design-lead review | TRUE | hire-ui-ux-designers.json l.29, l.184, l.213 |
| 38 | 330 | "designers have at least 4 hours of overlap with US Eastern time" | WRONG (wording) | as row 27. See F10. |
| 39 | 335 | "Every engagement has a published range, and every proposal has a fixed scope." | TRUE | about.md step 4 (word for word) |
| 40 | 345 | Your engineers, or tkxel engineers when you need development as well | TRUE | about.md l.23; home.ts l.172 |
| 41 | 353 | "No. Our team works remotely with US clients, and our only office is in Reston, Virginia." | WRONG (scope) | as row 1. "Our" here can be read as including tkxel. See F11. |
| 42 | 353–354 | Design sprint can run on-site with travel; remote at lower end, on-site at upper end of $12,000–$25,000 | TRUE | design-sprint.json l.11, l.90 |
| 43 | 354 | A senior designer replies within one business day, ET | TRUE | about.md l.38; RULES US market (ET) |
| 44 | 363 | Ranges start at $8,000 for a one-week AI discovery workshop and reach $200,000 for a large SaaS product redesign; MVP $15,000–$50,000 | TRUE | ai-product-discovery-workshop.json l.87 ("one-week workshop … near $8,000"); saas-product-redesign.json l.11, l.91; mvp-design-agency.json l.11 |
| 45 | 367 | Single designer possible with weekly design-lead review; teams of 2 to 5 cost $15,000–$40,000/month; month to month, 30 days notice | TRUE | hire-ui-ux-designers.json l.24, l.203, l.213, l.221. The price is tied to "teams of 2 to 5" exactly as the hub has it, and no single-designer price is implied. |
| 46 | 371 | "The law was signed in May 2026" | TRUE | Signed May 14, 2026, Chapter 131 (leg.colorado.gov bill page; governor's release https://governorsoffice.colorado.gov/governor/news/governor-polis-signs-bills-law-making-colorado-even-better-place-do-business-breaking-down). Some law-firm summaries say May 20, but the official record says May 14. |
| 47 | 371 | "replaced SB 24-205, whose duties never took effect" | TRUE | coag.gov/ai: SB 26-189 "repeals and reenacts" the 2024 Act. SB 24-205's duties were delayed to June 30, 2026, and it was replaced on May 14, 2026, before that date. |
| 48 | 371 | "and is enforced by the Colorado Attorney General" | OUTDATED (status incomplete) | The AG does enforce it under the Colorado Consumer Protection Act (fiscal note). However, in xAI LLC v. Weiser, No. 1:26-cv-01515 (D. Colo.), the April 27, 2026 stipulated order bars the AG from starting enforcement of SB 24-205 "or any legislation amending" it until rulemaking is complete and the court rules on xAI's preliminary-injunction motion (fiscal note, https://leg.colorado.gov/bill_files/115880/download). The case is still pending. AG rulemaking: draft rules filed August 11, 2026; interim draft October 6, 2026; comments close October 26, 2026 (https://coag.gov/ai/). See F12. |
| 49 | 371 | "We design the notice, explanation and correction flows the law describes, plus the request path for an AI feature that needs human review, then test them with users." | TRUE | ai-ux-design-agency.json (review and correction patterns, tested with 5 to 8 users) |
| 50 | 375 | Colorado Privacy Act: applies once a company meets thresholds such as 100,000+ consumers in a year; in force since July 1, 2023; rights to access, correct, delete | WRONG (incomplete scope, minor wording) | coag.gov CPA page (https://coag.gov/resources/colorado-privacy-act/): consumer = Colorado resident; 100,000 consumers in a **calendar** year, or 25,000+ with revenue from data sales; effective July 1, 2023. The biometric amendment (HB 24-1130, in force July 1, 2025) applies regardless of those thresholds (Sidley, https://datamatters.sidley.com/2025/01/09/colorado-finalizes-privacy-act-rules-key-updates-for-businesses/; secondary), so "once your company meets its thresholds" is too broad. See F13. |
| 51 | 379 | Denver and Eastern change clocks on the same dates, next on November 1, 2026 | TRUE | https://www.timeanddate.com/time/change/usa/denver (DST ends Sunday November 1, 2026, 2:00 a.m. local) |
| 52 | 379 | "so the 2-hour gap never shifts" | WRONG (minor) | Each zone changes at 2:00 a.m. local, so for 2 hours on the changeover nights the gap is 1 hour (November) or 3 hours (March). Working hours are not affected. See F14. |
| 53 | 383 | Dedicated designers start within 1 to 2 weeks of the first call; the AI workshop fills 1 to 2 weeks and ends with a tested concept and a scoped plan | TRUE | hire-ui-ux-designers.json l.113; ai-product-discovery-workshop.json l.7 |
| 54 | 10, 22 | Meta/hero: "2-hour time gap", "published prices", "real case studies", "tested prototypes" | TRUE | rows 2, 29, 30–36, 3 |
| 55 | — | ADA / Section 508 / WCAG lines | N/A | The page has no accessibility-standard claim, so coordinator item (3) does not apply. |
| 56 | — | Honesty: no Denver office, team, clients, hours, events attended or designer locations; no remote-work claim about the case studies; no link to uiuxdesignservices.us; no sister-site city named | TRUE | full-file read. The page publishes no working hours and no "X hours with Denver" promise. |

## Exact replacements

**F1 (line 25, abstract):** replace "We have no Denver office; the one office is in Reston, Virginia." with:
"ui-ux.agency has no Denver office; its only office is in Reston, Virginia."

**F2 (line 122):** replace `https://milehighcre.com/?p=57101` with `https://milehighcre.com/cbres-annual-scoring-tech-talent-ranks-denver-14th-overall/` and `https://milehighcre.com/?p=62070` with `https://milehighcre.com/denver-remains-major-tech-hub-as-colorado-springs-ranks-among-top-emerging-markets/`. Keep the anchors.

**F3 (line 122):** the orchestrator should run `curl -sSI` on the dated BLS URL. If it returns 200 and the title "Occupational Employment and Wages in Denver-Aurora-Centennial — May 2025", keep it. Otherwise use `https://www.bls.gov/regions/mountain-plains/news-release/occupationalemploymentandwages_denver.htm`. The undated URL changes with the next release, so the dated one is preferred if it loads.

**F4 (line 126):** replace "with 47,000+ jobs added in 5 years." with:
"with more than 47,000 new jobs added."

**F5 (line 134):** replace `https://techstars.com/about` with `https://www.techstars.com/about`.

**F6 (line 156), column 2:** replace with:
"A clear disclosure, before the automated tool is used, that it will shape the decision."

**F7 (lines 166–167):** replace column 2 with:
"After an adverse outcome, a way to request meaningful human review and reconsideration, which the law requires to the extent commercially reasonable."
Replace column 3 with:
"A human-review request flow with status tracking, plus an admin queue for reviewers."

**F8 (line 222, H2 5 answer, after the bold):** replace "Dedicated designers have at least 4 hours of overlap with US Eastern time, and many teams choose full overlap. The example table shows how the clocks line up." with:
"Every dedicated designer overlaps at least 4 hours with US Eastern time, and many teams choose full overlap. If those 4 hours run 9 a.m.–1 p.m. ET, only 9–11 a.m. falls inside a 9-to-5 Denver day, so agree the shared hours first; the example table shows how the clocks line up."

**F9 (line 292):** replace "None of these clients is in Colorado, and each figure comes from the client's case study page." with:
"We do not present any of these clients as Colorado clients, and each figure comes from the client's case study page."

**F10 (line 330):** replace with:
"Denver is 2 hours behind ET, every dedicated designer overlaps at least 4 hours with US Eastern time, and comments run async in Figma."

**F11 (line 353, bold):** replace with:
"<strong>No. Our team works remotely with US clients, and ui-ux.agency's only office is in Reston, Virginia.</strong>"
Keep the second sentence as it is.

**F12 (line 371, FAQ answer):** replace the whole answer with:
"<p>Yes. We design the notice, explanation and correction flows the law describes, plus the request path for an AI feature that needs human review, then test them with users. Signed on May 14, 2026, the law replaced SB 24-205, whose duties never took effect. The Colorado Attorney General enforces it, but under an April 27, 2026 federal court order in xAI v. Weiser, the office will not start enforcement until its rules are final and the court rules on a preliminary injunction. Your counsel confirms whether a feature is covered.</p>"
(About 80 words, over the 25–45-word FAQ target. If QA needs it shorter, drop the first sentence's "then test them with users" before you drop the court-order sentence. The court-order sentence is required.)

**F13 (line 375):** replace the answer with:
"<p>Yes, if your company meets one of its thresholds, such as processing personal data of 100,000 or more Colorado consumers in a calendar year; its biometric-data rules apply regardless of size. The law has applied since July 1, 2023, and gives people rights to access, correct and delete their data, so consent and data-request screens belong in the design.</p>"

**F14 (line 379):** replace "so the 2-hour gap never shifts." with:
"so the 2-hour gap stays the same in working hours all year."

## Notes for the orchestrator

- Brief eav row "Colorado AI law" (location-denver.json l.151) and leadAngle say "from January 1, 2027 … human review on request", but neither has the "commercially reasonable" qualifier or the xAI v. Weiser stay. These are stale records; the page's next rewrite should follow F7/F12, not the brief.
- Brief l.136/242/275 paraphrase the hire FAQ as "overlaps at least 4 hours with US Eastern time" (correct) and "at least 4 hours of Eastern Time overlap" (not exact wording). Use the hire FAQ wording.
- A Colorado Division of Real Estate summary (dre.colorado.gov/sb26-189-summary) says the bill "was vetoed". This contradicts the official bill page, which shows it signed. Do not cite that page.
- Re-check the xAI v. Weiser docket (https://www.courtlistener.com/docket/73171074/x-ai-llc-v-weiser/) and coag.gov/ai before publishing. The AG comment period closes October 26, 2026, and a later order or final rules would change F12.

VERDICT: FAIL
