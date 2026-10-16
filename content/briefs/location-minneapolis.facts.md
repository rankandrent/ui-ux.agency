# Fact-check: ux-agency-minneapolis (location page)

Checked: 2026-10-16. File: `content/locations/ux-agency-minneapolis.json`. Brief: `content/briefs/location-minneapolis.json`.

Method: there was no shell, so curl could not be used. WebFetch returned `ENOTFOUND` for careerforce.mn.gov, mn.gov, krocnews.com, businesswire.com, fortune.com and medicalalley.org. External facts were verified with WebSearch, mostly limited to the source's domain, and I accepted a source only when the exact URL came back with snippets that support the figure. Internal facts were checked word for word against `content/case-studies/*.md`, `content/services/*.json`, `content/pages/about.md` and `content/home.ts`.

## External claims

| # | Claim (page location) | Verdict | Source | Note |
|---|---|---|---|---|
| E1 | Nearly 110,000 IT workers in Minnesota in 2024, about 1 in 25 jobs (tech table row 1; section answer) | TRUE | https://careerforce.mn.gov/careerforce-blog/may-technology-month ; https://careerforce.mn.gov/industry/information-technology/information-technology | The search returned the exact URL with the text "nearly 110,000 IT workers in 2024, about one in every 25 jobs in the state". |
| E2 | Average full-time, year-round wage $108,800 (row 1) | TRUE | same | Snippet: "$108,800 for a full-time, year-round worker in 2024". |
| E3 | $27.8 billion in state GDP, about 16,000 companies and 126,000 jobs, with no year (row 2) | TRUE | https://mn.gov/deed/assets/tech-innovation-postcard-acc_tcm1045-709531.pdf ; https://mn.gov/deed/dobusiness/key-industries/technology-innovation/ | The postcard title reads "$27.8 billion in state GDP contribution 16,000 companies and 126,000 jobs". The DEED page gives 16,055 / $27.8B / 126,180. Neither gives a year, and the page correctly adds none. An older 2025 DEED brochure (26.8B, BEA 2023) confirms this is a newer edition. Link note: the page links `/technology-innovation/index.jsp`, but search returns `/technology-innovation/`. That is the same directory index, so no change is required. To match the returned URL exactly, use `https://mn.gov/deed/dobusiness/key-industries/technology-innovation/`. |
| E4 | 17 Minnesota companies on the 2025 Fortune 500: UnitedHealth Group #3, Target #41, U.S. Bancorp #105, Best Buy #108 (row 3) | TRUE | https://krocnews.com/17-minnesota-companies-just-made-the-2025-fortune-500-list/ ; https://tcbmag.com/fortune-500-list-contains-some-warnings-for-minnesota/ ; https://www.usbank.com/about-us-bank/annual-report/2025/index/stories/about-us.html | TCB independently confirms 17, #3, #41, #105 and #108 (Best Buy fell from #100). The Star Tribune's "107th" for U.S. Bancorp is the 2024 rank (TCB 2024 article). U.S. Bank's 2025 annual report says "Ranked 105th on the Fortune 500". Note: the 2026 list is out (June 2026), so the 2025 list is labeled with its year and is not the latest. Do not add a 2026 count. "18 in 2026" comes only from a bank blog and local reprints. |
| E5 | APi Group joined the 2026 list at #486 (row 3) | TRUE | https://www.businesswire.com/news/home/20260608546874/en/ (also at nasdaq.com/press-release/api-group-debuts-fortune-500-list-2026-06-08) | Company release dated June 8, 2026, from New Brighton, Minn.: debut at No. 486. |
| E6 | "The Medical Alley Association represents the state's health technology cluster," source: DEED `/leading-life-sciences/` (row 4) | UNVERIFIABLE | DEED link not returned by any search. Supporting source found: https://www.medicalalley.org/about/ | No mn.gov search returned `/key-industries/leading-life-sciences/`, and WebFetch failed. Medical Alley's About page (search snippet) says the association was "Founded in 1984" and "supports and advances the global leadership of Medical Alley's healthcare industry". Replacement in F1. |
| E7 | Minnebar is a free, participant-led unconference run by the nonprofit Minnestar since 2006 (row 5) | TRUE (link UNVERIFIABLE) | https://minnestar.org/faqs/minnebar-faq/ ; https://minnestar.org/minnebar/ | The FAQ snippet says it is an "annual, participant-led technology unconference that started in 2006 … free and open to anyone", and Minnestar calls itself "a nonprofit community organization". The page links `/faqs/minnebar-faq/page/3`, which no search returned (search returned the FAQ root and `/page/2/`). Replacement in F2. |
| E8 | Minnebar14 drew over 1,400 people (row 5) | OUTDATED (no date) | https://minnestar.org/relive-the-action-minnebar14-recap/ | The recap says "over 1,400" attended on April 27, 2019. The figure is correct but 7 years old, and with no year a 2026 reader takes it as current. Replacement in F2. |
| E9 | Twin Cities Startup Week is run by The Beta Group, a Minneapolis nonprofit (row 5) | TRUE | https://www.givemn.org/story/Tcsw-2025 ; https://www.givemn.org/organization/Beta-Group | The GiveMN fundraiser and organization page describe The Beta Group as a Minneapolis 501(c)(3) that runs Twin Cities Startup Week. |
| E10 | Make It. MSP is the talent attraction and retention initiative of the GREATER MSP Partnership, launched in 2015 (row 6) | TRUE | https://www.greatermsp.org/blog/2015/10/26/main/introducing-the-make-it.-msp.-talent-initiative/ ; https://www.greatermsp.org/pages/strategic-initiatives/ | The October 26, 2015 launch post says it aims "to retain and attract talented people in our region". The strategic-initiatives page still lists it as current. No outcome figures are claimed. |
| E11 | Central Time: UTC−6 (CST) / UTC−5 (CDT), one hour behind Eastern Time (row 7, hero, steps answer, FAQs) | TRUE | https://www.timeanddate.com/time/zone/usa/minneapolis | The snapshot from October 15, 2026 shows CDT, UTC−5, "one hour behind New York". 2026 DST ends November 1. |
| E12 | 10 a.m. ET review = 9 a.m. in Minneapolis (steps answer) | TRUE | arithmetic from E11 | |
| E13 | HIPAA Privacy Rule "limits what they display" (health tech card) | WRONG (wording) | https://www.hhs.gov/hipaa/for-professionals/privacy/index.html | HHS says the Rule sets "national standards" for protected health information and "sets limits and conditions on the uses and disclosures" without authorization (plus minimum necessary). It does not regulate "what screens display" as such. Replacement in F3. Link note: the page uses `/privacy/` and search returned `/privacy/index.html`. That is the same directory index, so no change is required. |
| E14 | "When screens show protected health information, the HIPAA Privacy Rule applies" (FAQ 5) | TRUE | same | PHI is by definition information held by a covered entity or business associate, so the Rule applies. |

## Internal claims (site, prices, case studies)

| # | Claim | Verdict | Source |
|---|---|---|---|
| I1 | Only office Reston, VA; no Minneapolis office; remote team (abstract, section 1, FAQ 1) | TRUE | RULES.md "Sister site"; about.md line 9 |
| I2 | Design team of tkxel; tkxel's engineers build the product (FAQ 6, remote-vs-local table) | TRUE | about.md; ui-ux-design-cost.json FAQ "tkxel's engineering team quotes the build"; product-design-agency.json line 147 |
| I3 | AI features need "prompt input, answers with sources and edit, retry or reject controls" | TRUE | ai-ux-design-agency.json line 25 ("show where an answer came from … edit, retry or reject") and the diagram alt text |
| I4 | AI discovery workshop $8,000–$20,000, 1–2 weeks, "picks the use cases worth building … scoped plan" | TRUE | ui-ux-design-cost.json; ai-product-discovery-workshop.json summary and meta |
| I5 | Workshop "run remotely in Figma and FigJam" | WRONG (dropped hedge) | ai-product-discovery-workshop.json FAQ: "**Most** workshops run remotely in Figma and FigJam". See F4. |
| I6 | AI UX design $25,000–$90,000, 4–10 weeks; input, output, review and correction patterns; real model answers; 5 to 8 users | TRUE | cost table; ai-ux-design-agency.json lines 55, 57, 98 |
| I7 | Chatbot UI design $15,000–$60,000, 3–8 weeks; chat windows, answer cards, suggested replies, human handoff | TRUE | cost table; chatbot-ui-design.json abstract and sub |
| I8 | Stage table: sprint $12,000–$25,000 / 5 days; MVP $15,000–$50,000 / 4–8 weeks; onboarding $15,000–$45,000 / 3–6 weeks; SaaS product design $40,000–$180,000 / 6–16 weeks; redesign $50,000–$200,000 / 8–20 weeks; dedicated $15,000–$40,000 per month / Ongoing | TRUE | ui-ux-design-cost.json table (all 6 rows match exactly) |
| I9 | Cost answer: $8,000 AI discovery workshop to $200,000 full SaaS product redesign; dedicated designers $15,000–$40,000 per month | TRUE | ui-ux-design-cost.json abstract |
| I10 | "Our published ranges apply to Minneapolis projects too." | TRUE | ui-ux-design-cost.json abstract ("the … price ranges we quote", no regional variation) and hero ("Published price ranges for every engagement we run"). This wording is supported, while the brief's stronger "no separate Minneapolis rate" was not used. |
| I11 | Price moves with user roles, platforms and AI features | TRUE | ui-ux-design-cost.json cost factors 1, 2 and 5 |
| I12 | "A single copilot feature inside an existing web app sits near $25,000; an AI-first product with several workflows sits near $90,000." | WRONG (dropped qualifiers) | ai-ux-design-agency.json line 89: "An AI-first product with several workflows, **an admin area and a mobile view** sits near $90,000." Without them, the $90,000 anchor understates the scope. See F5. |
| I13 | MVP design "takes 4 to 8 weeks and ends in a tested clickable prototype" | WRONG (end deliverable) | mvp-design-agency.json abstract and step: test with 5 to 8 users, "we fix what fails and hand over the build-ready file". The MVP ends with the build-ready file, not the prototype. See F6. |
| I14 | "a full redesign targets retention as much as looks" | UNVERIFIABLE / contradicts hub | saas-product-redesign.json has no retention target, and its comparison answer says "A visual refresh changes how the product looks; a SaaS product redesign changes how it works." See F7. |
| I15 | "A copilot inside existing software is the common case." | UNVERIFIABLE (frequency claim) | ai-ux-design-agency.json lists copilots as 1 of 4 types and gives no frequency. See F8. |
| I16 | Every designer overlaps at least 4 hours with US Eastern time (steps answer, image text, FAQ 3) | TRUE | hire-ui-ux-designers.json FAQ line 217 |
| I17 | Remote-vs-local table, time zone row: "One hour apart (ET and CT), with at least 4 shared hours." | WRONG | The site guarantees 4 hours of overlap with **ET**, not with CT. For example, an overlap from 9 a.m. to 1 p.m. ET is 8 a.m. to noon CT, which leaves only 3 hours inside a 9-to-5 CT day. The brief also forbids CT overlap claims. See F9. |
| I18 | Senior designer replies within one business day (ET); most projects start 1 to 2 weeks after the first call | TRUE | about.md line 38; home.ts line 242; RULES.md (ET) |
| I19 | "Stakeholder interviews happen by video" (step 2); "interview your customers by video" (FAQ 2); "shared Figma files and video reviews" (FAQ 1) | UNVERIFIABLE | No service, page or home.ts text mentions video. "Remotely" is supported by RULES.md and the workshop and sprint FAQs. See F10–F12. |
| I20 | FigJam workshops in short daily sessions instead of full-day meetings | TRUE | ai-product-discovery-workshop.json FAQ; design-sprint.json FAQ |
| I21 | "we walk through changes in a weekly Figma review inside the shared hours" (step 3) | UNVERIFIABLE | "Weekly" appears only for the hire plan's design-lead review (hire-ui-ux-designers.json lines 184 and 213). No project process sets a weekly client review. See F10. |
| I22 | Step 4: "Your users run real tasks in Maze or on video, and AI prototypes show real model answers, including wrong ones." | UNVERIFIABLE ("on video") | Maze for remote tests: product-design-agency.json line 180, ai-ux-design-agency.json line 99. Real model answers, including wrong ones: ai-ux FAQ line 98. "On video" is not on the site. See F11. |
| I23 | Build support: designers join sprint reviews, answer engineers' questions, check built screens | TRUE | saas-design-agency.json line 58 |
| I24 | Design sprints include recruiting 5 test users; on-site sprint with travel at the upper end of $12,000–$25,000 | TRUE | design-sprint.json lines 90 and 100 |
| I25 | Dedicated designer: "as one dedicated designer or a team for $15,000 to $40,000 per month" (FAQ 3) | WRONG | hire-ui-ux-designers.json: "$15,000 to $40,000 per month for 2 to 5 designers", and "A product designer and a UI designer working full time sit near $15,000". A single designer "is possible" but has no published price, so the sentence prices one designer at $15,000 or more. See F12. |
| I26 | Dedicated designers start in 1 to 2 weeks | TRUE | hire-ui-ux-designers.json abstract |
| I27 | Vocable: idea to MVP; writers swap between OpenAI, Google, Anthropic and Meta models inside one editor; overall workflow efficiency +35% | TRUE | vocable.md lines 2, 7, 47, 101 |
| I28 | Digno: AI scoring engine rates staff, teams and the whole company; overall revenue 5x | TRUE | digno.md lines 4, 7, 104 |
| I29 | Mass Media Co.: separate order tools merged into one platform after a discovery workshop; order processing efficiency +30% | TRUE | mass-media-co.md lines 4, 43, 104 |
| I30 | TradeZella: web and mobile dashboards rebuilt and tested with traders before launch; user interaction +40%, retention +25% | TRUE | tradezella.md lines 4, 92, 104–105 |
| I31 | Elia Wellness: web and mobile wellness learning platform for adults over 50; user registrations +40% (FAQ 5) | TRUE | elia-wellness.md lines 4, 7, 103. Not used as a testimonial, and no location is stated. |
| I32 | "We design vertical SaaS for clinics and care teams" (FAQ 5) | TRUE | industries/healthcare.json line 31 ("Digital health SaaS for clinics, care teams and payers"); saas-design-agency.json line 82 |
| I33 | Case section: "They follow the same remote process a Minneapolis team would get"; "from stakeholder interviews to measured results" | UNVERIFIABLE | No case study says the project ran remotely. Mass Media Co. and Digno describe a stakeholder workshop and requirements gathering, not interviews. See F13. |
| I34 | No client presented as a Minneapolis or Minnesota client | TRUE | No case card states a location. Fortune 500 names, Medical Alley, Minnestar and TCSW appear as market context only. |
| I35 | Remote-vs-local "Focus: AI products, SaaS platforms and startup MVPs"; "A published range for every engagement" | TRUE | about.md description; ui-ux-design-cost.json hero |
| I36 | No local office or working-hours claims | TRUE | No exact hours, no "full overlap" for CT, and no designer locations are stated (I17 aside). |

## Fixes (exact replacements)

**F1 (E6, tech table row 4).** Replace the fact cell and source cell:
- Fact: `The Medical Alley Association, founded in 1984, supports and advances Minnesota's Medical Alley healthcare industry.`
- Source: `<a href="https://www.medicalalley.org/about/">Medical Alley Association</a>`

**F2 (E7, E8, row 5).** Replace the fact cell and source cell:
- Fact: `Minnebar is a free, participant-led unconference run by the nonprofit Minnestar since 2006, and Minnebar14 drew over 1,400 people in 2019. Twin Cities Startup Week is run by The Beta Group, a Minneapolis nonprofit.`
- Source: `<a href="https://minnestar.org/faqs/minnebar-faq/">Minnestar FAQ</a>; <a href="https://minnestar.org/relive-the-action-minnebar14-recap/">Minnebar14 recap</a>; <a href="https://www.givemn.org/story/Tcsw-2025">GiveMN</a>`

**F3 (E13, health tech card body).** Replace with:
`Vertical SaaS for clinics and care teams. When screens show protected health information, the Health Insurance Portability and Accountability Act (HIPAA) <a href="https://www.hhs.gov/hipaa/for-professionals/privacy/">Privacy Rule</a> sets limits and conditions on how it is used and disclosed, so involve your compliance lead in reviews.`

**F4 (I5, AI discovery workshop item body).** Replace with:
`$8,000–$20,000 over 1 to 2 weeks. The <a href="/services/ai-products/ai-product-discovery-workshop/">AI product discovery workshop</a> picks the use cases worth building and turns them into a scoped plan; most workshops run remotely in Figma and FigJam.`

**F5 (I12, cost section body, second sentence).** Replace with:
`A single copilot feature inside an existing web app sits near $25,000; an AI-first product with several workflows, an admin area and a mobile view sits near $90,000.`

**F6 (I13, "Startups building on a model" card body).** Replace with:
`Twin Cities founders, the crowd at Minnebar and Twin Cities Startup Week, who need a first version people trust. MVP design takes 4 to 8 weeks and ends with a prototype tested by 5 to 8 target users and a build-ready file.`

**F7 (I14, "B2B SaaS and software companies" card body).** Replace with:
`Teams fixing onboarding, dashboards or a dated interface. SaaS onboarding design takes 3 to 6 weeks; a SaaS product redesign changes how the product works, not only how it looks.`

**F8 (I15, "Enterprise teams with AI pilots" card body).** Replace with:
`Product groups inside large Minnesota employers that built a proof of concept and need an interface staff will use. One option is a copilot: an assistant panel inside an existing product that drafts, summarizes or explains.`

**F9 (I17, remote-vs-local table, time zone row, column 2).** Replace with:
`One hour apart (ET and CT); every designer overlaps at least 4 hours with US Eastern time.`

**F10 (I19, I21, steps 2 and 3 bodies).** Replace with:
- Step 2: `Stakeholder interviews run remotely, and FigJam workshops run in short daily sessions instead of full-day meetings.`
- Step 3: `Your team comments in Figma at any hour, and we walk through changes in Figma reviews held inside the shared hours.`

**F11 (I22, step 4 body).** Replace with:
`Your users run real tasks in a prototype, with Maze for remote tests, and AI prototypes show real model answers, including wrong ones.`

**F12 (I19, I25, FAQs 1–3).**
- FAQ 1: `<p>No. Our only office is in Reston, VA. As a UX agency Minneapolis teams can hire remotely, we run projects in shared Figma files with remote reviews. An on-site design sprint is possible; travel puts it at the upper end of the $12,000–$25,000 sprint range.</p>`
- FAQ 2, first sentence: `Yes. We interview your customers remotely and run remote tests where 5 to 8 users complete real tasks in a prototype.` (the rest unchanged)
- FAQ 3: `<p>Yes. You can <a href="/services/hire-ui-ux-designers/">hire UI UX designers</a> as a dedicated team of 2 to 5 designers for $15,000 to $40,000 per month, and they start in 1 to 2 weeks; a single dedicated designer is possible too. Every designer overlaps at least 4 hours with US Eastern time, which runs one hour ahead of Minneapolis.</p>`

**F13 (I33, case-study section answer).** Replace with:
`<strong>Four case studies show our AI and SaaS process, from stakeholder input to measured results.</strong> They show the process a Minneapolis team would get, with the figures each client page reports.`

## Stale records for the orchestrator
- Brief `externalSources` lists `https://mn.gov/deed/dobusiness/key-industries/leading-life-sciences/` and `https://minnestar.org/faqs/minnebar-faq/page/3` as "Primary". Neither URL could be confirmed. Update the brief to the F1 and F2 URLs.
- Brief `internalTargetsNote` says "No industry pages exist (content/industries has only _template.json)". `content/industries/healthcare.json` now exists. It is relevant to the health tech card, but this is not a fact error on the page.

VERDICT: FAIL
