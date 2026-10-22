# Fact-check: digital-product-design

Post: `content/blog/digital-product-design.md` (author talha-saleem, hub product-design-agency, TOFU). Checked 2026-10-22.

> **Loop 1 (below) is superseded by "Loop 2" at the end of this file.** The loop 1 table, fixes and verdict are kept for the record only.

**Method.** WebFetch failed with `getaddrinfo ENOTFOUND` for www.mckinsey.com, www.w3.org and m3.material.io. developer.apple.com loaded, but only the page title came back ("Human Interface Guidelines | Apple Developer Documentation"). External facts were therefore checked with **domain-restricted WebSearch** (allowed_domains: mckinsey.com, w3.org, m3.material.io/github.com, developer.apple.com). Each search returned the exact URL the post links to, plus supporting text. Site facts were checked against the files named in each row.

**Banned phrasing.** "digital product design services / agency / company / studio / firm" appears nowhere in the post, its 6 SVGs or `digital-product-design.visuals.json`. Grep returned 0 hits. PASS.

**Case-study services check.** All 4 case studies list `product-design-agency` in their frontmatter `services`, so presenting them as our product design work is fine.

## Claim table (loop 1, superseded)

| # | Line | Claim | Verdict | Source / note |
|---|---|---|---|---|
| 1 | 28 | "I'm a senior designer at ui-ux.agency" | TRUE | home.ts l.205 gives Talha Saleem as "Senior UI/UX Designer". This shortens the title to its main role and does not upgrade it. |
| 2 | 28 | "the design practice inside tkxel" (link /about/) | TRUE | about.md l.9 calls us "the UI UX design agency of tkxel". |
| 3 | 28 | "our team has designed 200+ products since 2017" | TRUE | about.md l.9 ("more than 200 digital products since 2017") and RULES.md honesty line. It is stated as a team figure, not the author's. |
| 4 | 18, 104, 117, SVG ladder rung 4 | Prototype tested with 5 to 8 users | TRUE | Hub step "Concept and validation" (product-design-agency.json l.86) and about.md l.28. Takeaway 3 scopes it "in our process". The ladder section is framed as the author's own ladder ("I treat it as a ladder"). |
| 5 | 36 | "Once handed over, the files, research and components belong to your company." | TRUE | pillars.ts l.257 (startups pillar FAQ): "All files, prototypes and research belong to your company." hire-ui-ux-designers.json l.196 says the same. "Once handed over" is weaker than the site's unconditional wording, not stronger. |
| 6 | 59 | "Two of these go missing most often." | UNVERIFIABLE | A frequency claim with no source and no case-study support. **Fix F1.** |
| 7 | 61 | "Job posts usually call the person … a product designer" | TRUE (framing) | General naming observation. The FAQ version (row 30) is the one stated as a statistic. |
| 8 | 86 | Without "digital", product design also covers physical objects; industrial design | TRUE | Standard usage. Wording is framing, not a figure. |
| 9 | 88 | "All of these sit under user-centered design, which grew out of human-computer interaction research." | WRONG (scope) | "All of these" includes industrial design (table l.82), which is decades older than user-centered design. The UCD term comes from HCI work: Norman & Draper (eds.), *User Centered System Design: New Perspectives on Human-Computer Interaction*, 1986 (https://jnd.org/books/user-centered-system-design-new-perspectives-on-human-computer-interaction/). **Fix F2.** |
| 10 | 98 | Elia Wellness: "a learning app for adults over 50" | TRUE | elia-wellness.md l.25 (LMS for adults over 50). |
| 11 | 98 | Elia: plain navigation, readable layouts, a pre-course questionnaire on tablets with large tap targets and simple rating scales | TRUE | elia-wellness.md l.41 and l.91. These come from "How we designed it" and the platform section, so they are work output, not the starting point. The longest run copied from the case study is 4 words. |
| 12 | 122 | Tools: Figma (flows and prototypes), FigJam (workshops), Maze (remote tests) | TRUE | Hub FAQ l.180. |
| 13 | 122 | "Our own stage lengths depend on scope, so I won't list them here." | TRUE | The hub gives stage ranges (l.81–93), and the FAQ at l.252 points readers there. Not false. |
| 14 | 128, 149 | Designers stay in the sprints for design QA until release / join sprint reviews until the design is live | TRUE | Hub l.71 ("Sprint reviews, design QA") and l.94 (Delivery). |
| 15 | 147 | Storybook documents the design system as live components | TRUE | Hub FAQ l.180 (Storybook for design system documentation). The design-token definition is standard. |
| 16 | 149 | "each design QA review happens inside the sprint: a designer checks every built screen against the specs before the ticket closes" | UNVERIFIABLE (adds process) | The hub lists only "Sprint reviews, design QA". "Every built screen" and "before the ticket closes" are process commitments that no site page makes (lesson 113). **Fix F3.** |
| 17 | 149 | Part of tkxel, so one contract can cover design and development | TRUE | Hub FAQ l.172. about.md l.23. |
| 18 | 149 | Teams with their own engineers get annotated Figma files, components and specs | TRUE | about.md l.29 ("components, specs and answers during every sprint"), hub tools. |
| 19 | 151 | "Mass Media Co. shows the joined-up version": the paragraph follows the design-plus-development sentence, and "one partner reworked both the workflow and the software" | WRONG (framing) | mass-media-co.md documents design scope only (l.29: interviews, UI/UX, IA, web and mobile app design, revamp). l.39 says MMC *wanted* one partner to rethink workflow and software. No development by us is documented, so "joined-up version" after the one-contract sentence claims a design-and-build engagement the case study never shows (lessons 99, 101). **Fix F4.** |
| 20 | 151, 182 | MMC 30% increase in order processing efficiency; separate tools; discovery workshop; user flows; web and mobile | TRUE | mass-media-co.md l.7, l.33, l.43, l.29, l.98. |
| 21 | 157–161 | SaaS and AI is a core focus for our team | TRUE | about.md l.11. |
| 22 | 163 | Accessibility targets WCAG 2.2 AA for US products, with ADA and Section 508 in mind | TRUE | This is method framing and does not say either law *requires* 2.2 (lesson 94 applies only to "use X to meet law Y"). No change needed. |
| 23 | 163 | WCAG 2.2 became a W3C Recommendation on October 5, 2023 | TRUE | https://www.w3.org/WAI/news/2023-10-05/wcag22rec/ (the linked URL, returned by w3.org-restricted search) and https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ |
| 24 | 163 | Added 9 success criteria, including a minimum target size | TRUE | W3C news: WCAG 2.2 "adds 9 … success criteria since WCAG 2.1". 2.5.8 Target Size (Minimum), AA, 24×24 CSS px, covers pointer targets: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html |
| 25 | 165 | Apple HIG link loads; it covers layout, components and accessibility | TRUE | The linked URL loads (WebFetch returned the page title). The section pages exist: https://developer.apple.com/design/human-interface-guidelines/layout, …/components, …/accessibility (developer.apple.com-restricted search). |
| 26 | 165 | Material Design 3 is "Google's system of UX guidance, reusable components and open-source code" | TRUE | m3.material.io/get-started ("Get started with Modern UI design"), as summarized by m3.material.io-restricted search: UX guidance, tools, reusable components, open-source code. The URL loads in search results. |
| 27 | 165 | "with libraries for Android, Flutter and the web" | OUTDATED | Material Web is in maintenance mode, with no current updates and M3 Expressive not implemented on web: https://m3.material.io/develop/web and https://github.com/material-components/material-web/discussions/5642 (June 2024). On Android, Compose is the recommended library and MDC-Android Views is in maintenance mode: https://m3.material.io/develop. "Libraries for … the web" tells a buyer it is a live option. **Fix F5.** |
| 28 | 179 | Elia Wellness table row: idea; strategy, website, web app, mobile app; 40% more registrations | TRUE | elia-wellness.md l.29, l.7, l.97. |
| 29 | 180 | Parents Connect scope: "Discovery and stakeholder interviews, a revamp, UX design and visual design" | WRONG (dropped part) | parents-connect.md l.29 reads "plus brand and visual design". The post drops "brand" from a compound (lesson 105). The results (45% forum participation, 10% average time) are TRUE (l.12–13). **Fix F6.** |
| 30 | 181 | Anyday row: hard-to-navigate first release, for employees and employers; strategy, revamp, web and mobile apps, website; real-time transfers and simpler navigation; satisfaction up 40%, tied to immediate access to wages | TRUE | anyday-app.md l.29–31, l.38, l.43, l.12. |
| 31 | 184 | "each project started from a written problem and ended with a number the client tracks" | WRONG (framing) | "Written problem" is the post's own artifact term (the problem brief). No case study documents a written problem brief or client-side tracking. They state a problem section and a result. **Fix F7.** |
| 32 | 184 | "None of those numbers is a design result alone, because product, content and operations moved them too." | UNVERIFIABLE | No case study says other functions moved its numbers. The caution is good, but the causal "because … moved them" is invented. **Fix F7.** |
| 33 | 186 | Parents Connect work began with research into what parents expect from an online community | TRUE | parents-connect.md l.41 ("We began with research on what parents want…"). This sits in "How we designed it", so it was work output. |
| 34 | 204 | McKinsey: 300 publicly listed companies, five years, top quartile on the MDI, 32 pp higher revenue growth and 56 pp higher TRS growth than industry counterparts over the period as a whole | TRUE | https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-business-value-of-design (exact URL returned by mckinsey.com-restricted search). Wording matches the article: "32 percentage points higher revenue growth and 56 percentage points higher TRS growth for the period as a whole" vs "industry counterparts". |
| 35 | 204 | "The study shows correlation, not cause" | TRUE | The article reports the actions "most correlated" with financial performance, from regression analysis. |
| 36 | 204 | "its sample is global" | WRONG (overstated) | McKinsey: "300 publicly listed companies over a five-year period in multiple countries and industries". "Multiple countries" is not "global". **Fix F8.** |
| 37 | 204 | "measuring design performance is one of the index's themes" | TRUE | Analytical leadership, one of the MDI's 4 themes: "measure and drive design performance with the same rigor as revenues and costs" (same URL). |
| 38 | 206 | "Our engagements are built to close exactly those gaps: a senior product designer leads each one through to release, and design QA runs inside your sprints." | WRONG (overclaim) | The second half is TRUE (hub card l.143, hub l.71/94). Scoring our hub against the post's 7 checks (lesson 17): no site page states a one-page problem brief with one metric, token names matched to code (only the SaaS pillar, for "larger projects"), or a named accessibility target. "Exactly those gaps" therefore promises checks the site does not offer. **Fix F9.** |
| 39 | 224–226, SVG first-purchase | Doors: discovery gives a ranked list of problems; MVP design gives flows, a tested clickable prototype and first-release screens; ongoing engagement gives design system and design QA | TRUE | Hub l.82 (ranked list of problems), l.163 (discovery and concept phase priced as a unit); mvp-design-agency.json l.15, l.46–69. Problem brief and synthesis are the author's own packaging ("how I package"), which counts as method. |
| 40 | 230 | MVP design package "built for founders who still need a first version" | TRUE | Hub l.30. |
| 41 | 230 | Service page sets out our four-stage plan and cost; anchor `#how-much-does-a-product-design-agency-cost` | TRUE | Hub l.78, l.160–162. The id comes from `sectionId()` in components/sections/SemanticSections.tsx l.9–14 and resolves to that slug. |
| 42 | 230 | "Our guide to startup product design shows the same choice by company stage." | TRUE | pillars.ts l.226–236 ("Which startup product design service fits your stage?" table). |
| 43 | 232 | "our team usually takes research and the design system, and yours keep the day-to-day feature work" | WRONG (qualifier upgraded) | Hub FAQ l.184 says "We **often** lead research and the design system". "Usually" is stronger than "often". **Fix F10.** |
| 44 | 244 | "In most US job posts the two titles describe the same software role." | UNVERIFIABLE | A statistical claim about US job posts with no source. **Fix F11.** |
| 45 | 248 | Design ends with specs, states, components and design QA; engineers write the code; tkxel can do both | TRUE | Hub FAQ l.172, l.71. |
| 46 | 252 | Discovery takes weeks, a full product takes months; the service page has our stage timings | TRUE | Hub l.81–93: 1–3 weeks discovery; 6–15 weeks across the first three stages plus ongoing delivery. |
| 47 | 252 | "most projects kick off 1 to 2 weeks after the proposal is signed" | WRONG (timing shifted) | Hub FAQ l.176 says "within 1 to 2 weeks". The post's "1 to 2 weeks after" sets a one-week minimum the site does not state. **Fix F12.** |
| 48 | SVGs | Text in all 6 SVGs (cover, artifact ledger, span bar, evidence ladder, handoff packet, first purchase) | TRUE | Every `<text>` and aria-label matches its astext panel word for word. No figures beyond "5 to 8 users" (row 4) and "8 artifacts". |

## Fixes (loop 1, superseded; exact replacements)

Do not paste site wording verbatim. Every replacement below was checked so that no run of 8+ words is copied from a site JSON or case-study file.

**F1 (line 59).** Replace "Two of these go missing most often." with:
> I check two of these first.

**F2 (line 88).** Replace "All of these sit under user-centered design, which grew out of human-computer interaction research." with:
> UI, UX and product design for software all sit under user-centered design, which grew out of human-computer interaction research.

**F3 (line 149).** Replace "During the build, each design QA review happens inside the sprint: a designer checks every built screen against the specs before the ticket closes." with:
> During the build, design QA happens inside the sprint: a designer reviews built screens against the specs at sprint reviews.

(Supported by hub l.71, "Sprint reviews, design QA".)

**F4 (line 151).** Replace the whole paragraph with:
> Mass Media Co. shows design reworking a whole workflow, not one screen. Its orders ran through separate tools that did not share data, and the client wanted a single partner to rethink its workflow and its software. Our scope ran from user interviews and flows to web and mobile app design, and the [Mass Media Co. case study](/case-studies/mass-media-co/) reports a 30% increase in order processing efficiency on the merged platform.

(Supported by mass-media-co.md l.29, l.33, l.39, l.7. Longest copied run: "increase in order processing efficiency", 5 words. The new wording no longer implies tkxel built MMC's software.)

**F5 (line 165, second sentence).** Replace "On Android and Flutter I follow [Material Design 3](https://m3.material.io/get-started), Google's system of UX guidance, reusable components and open-source code, with libraries for Android, Flutter and the web." with:
> On Android and Flutter I follow [Material Design 3](https://m3.material.io/get-started), Google's system of UX guidance, reusable components and open-source code, with actively updated libraries for Android (Jetpack Compose) and Flutter; its web components library is in maintenance mode.

(Sources: https://m3.material.io/develop and https://m3.material.io/develop/web.)

**F6 (line 180, Parents Connect "What design delivered" cell).** Replace with:
> Discovery and stakeholder interviews, a revamp, UX design, and brand and visual design for web and mobile.

**F7 (line 184).** Replace the paragraph with:
> The thread through all four is simple: each case study names the problem first and ends with a stated result. Read each number as the client's result after the redesign, not as a design result alone.

**F8 (line 204).** Replace "and its sample is global" with:
> and its sample spans multiple countries, not only the US

**F9 (line 206).** Replace "Found two or three fails? Our engagements are built to close exactly those gaps: a senior product designer leads each one through to release, and design QA runs inside your sprints." with:
> Found two or three fails? In our product design engagements, a senior product designer leads the work from discovery to release, and our designers run design QA in your sprints.

(Supported by hub l.143, l.71, l.94. Longest copied run: "a senior product designer", 4 words.)

**F10 (line 232).** Replace "our team usually takes research and the design system, and yours keep the day-to-day feature work" with:
> our team often leads research and the design system, while yours keep the day-to-day feature work

**F11 (line 244).** Replace "No. In most US job posts the two titles describe the same software role." with:
> No. For software, "digital product designer" and "product designer" name the same role; "digital" only rules out physical products.

**F12 (line 252).** Replace "and most projects kick off 1 to 2 weeks after the proposal is signed." with:
> and most projects begin within 1 to 2 weeks once the proposal is signed.

## Notes for the orchestrator (loop 1)

- **Stale brief record.** `content/briefs/digital-product-design.json` l.353 lists the McKinsey URL as `/capabilities/growth-marketing-and-sales/our-insights/the-business-value-of-design`. The post uses `/capabilities/tech-and-ai/…`, which is the URL mckinsey.com search returns. The post is correct; the brief record is stale.
- **Possible site-wide honesty issue, outside this post.** `content/home.ts` l.227 shows a badge "WCAG/AAA Achieved". No source on the site backs that certification-style claim. The post does not repeat it.
- **Hub-link anchors.** The post has no link to /services/hire-product-designer/, so that hub's facts are unused.

Loop 1 result (superseded): FAIL.

---

## Loop 2

Checked 2026-10-22 against the post as it stands after QA (`content/blog/digital-product-design.md`, 257 lines) and the 3 applied backlinks. Only changed text was re-checked, each against its own source rather than against my loop 1 wording. WebFetch still fails with `ENOTFOUND` for www.w3.org, www.mckinsey.com and m3.material.io, so external facts were re-checked with domain-restricted WebSearch again. Each search returned the exact linked URL.

### Status of loop 1 items

| Item | Applied as | Verdict | Source / note |
|---|---|---|---|
| F1 (l.59) | As written | TRUE | Method statement; no frequency claim left. |
| F2 (l.88) | As written | TRUE | Industrial design is no longer inside the UCD claim. |
| F3 (l.149) | "each design QA review happens inside the sprint: a designer checks built screens against the specs at sprint reviews" | TRUE | Hub l.71 ("Sprint reviews, design QA and quick answers while engineers build"). "Every" and "before the ticket closes" are gone. |
| F4 (l.151) | Link and 30% removed from prose; "Our scope ran from user interviews and flows to web and mobile app design. The client's stated result sits with three others in the examples table below." | TRUE | mass-media-co.md l.29 (interviews, IA, web/mobile app design), l.33, l.39, l.43. The paragraph now states design scope only, so it no longer implies we built MMC's software. The pointer is accurate: the table (l.177–182) has MMC plus 3 other rows. |
| F4 follow-up: MMC row in the examples table, l.182 | "A discovery workshop, user flows and one merged platform for web and mobile." / "30% higher order processing efficiency." | TRUE | Still present and supported: mass-media-co.md l.7, l.12, l.98–104 (+30% order processing efficiency); l.43 (discovery workshop, user flows); l.4 ("merged … separate order tools into one … platform"); l.10, l.29 (web and mobile). The table intro (l.173) says each row comes from our case studies, and MMC lists `product-design-agency` in `services`. |
| F5 (l.165) | Split into 2 sentences: "…open-source code. Its libraries for Android (Jetpack Compose) and Flutter are actively updated, while its web components library is in maintenance mode." | TRUE | https://m3.material.io/develop (Compose recommended for Android; Flutter maintained by the Flutter team, with periodic Material updates), https://m3.material.io/develop/web (no updates currently being made), https://github.com/material-components/material-web/discussions/5642 |
| F6 (l.180) | "Discovery and stakeholder interviews, a revamp, brand work, visual design and UX design for web and mobile." | TRUE | parents-connect.md l.29 (discovery and stakeholder interviews, product revamp, UX design, brand and visual design), l.25 (web and mobile). Brand is restored. |
| F7 (l.184) | As written | TRUE | Matches what the case studies contain (a problem section and a stated result). |
| F8 (l.204) | "its sample spans multiple countries, not only the US. Measuring design performance is one of the index's four themes…" | TRUE | https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-business-value-of-design ("multiple countries and industries"; 4 themes: analytical leadership, cross-functional talent, continuous iteration, user experience; analytical leadership = measure and drive design performance). |
| F9 (l.206) | As written | TRUE | Hub l.143, l.71, l.94. |
| F10 (l.232) | As written | TRUE | Hub FAQ l.184 ("often lead"). |
| F11 (l.244) | Merged: "…'digital' only rules out physical products. What sets it apart from a UI or UX specialist is the wider span: picking the problem first and checking the metric after release." | TRUE | Definitional; matches the post's own span table (l.77–82) and the hub's agency-vs-studio table (product-design-agency.json l.101–133: "Measured by: Product metrics after launch"). |
| F12 (l.252) | "Most of our projects begin within 1 to 2 weeks once the proposal is signed." | TRUE | Hub FAQ l.176 ("Most projects start within 1 to 2 weeks of a signed proposal"). "Most" and "within" both match. |

All 12 loop 1 items are resolved.

### Other text QA changed

| Line | Claim | Verdict | Source / note |
|---|---|---|---|
| 4 | Meta description: "the 8 artifacts … Run the 7 checks before you pay." | TRUE | Post l.46–55 (8 artifacts), l.196–202 (7 checks). |
| 28 | "As a senior designer at ui-ux.agency, the design practice inside tkxel, I draw on a team record of 200+ products designed since 2017." | TRUE | home.ts l.205 (Senior UI/UX Designer); pages/about.md l.9 ("UI UX design agency of tkxel"; "more than 200 digital products since 2017"); home.ts l.24–25 ("200+ Digital products designed", "since 2017"). The figure stays with the team, not the author. |
| 32, 102, 246, 250 | Reworded headings and FAQ questions | TRUE | No factual content. Anchor ids used by backlinks still resolve (see below). |
| 36 | "After the hand-over, your company owns the files, the research and the components outright." | TRUE | home.ts l.245 ("All design files, research and components transfer to your company"); hire-ui-ux-designers.json l.196 ("belong to your company from day one"); pillars.ts l.257. "Outright" is no stronger than "transfer" or "belong to". |
| 65 | Bold answer on UX vs UI vs product design | TRUE | Definitional; hub l.101 (product design owns outcomes, UI studio owns the look). |
| 122 | "Usability testing at rung four catches a failed task while the fix is still a revision in Figma, not code that has to be rewritten." | TRUE | Method statement, consistent with the post's own ladder. The "cheapest place to be wrong" superlative is gone. |
| 128 | "designers deliver specs, screen states, components and tokens, then stay for design QA until release" | TRUE | A general description of the discipline. Also matches the hub: l.67 (components, tokens), l.71 (design QA), l.94 (stay until live). |
| 163 | "I aim accessibility work at level AA under WCAG, with Section 508 and the ADA in mind. WCAG 2.2, the current version, became a W3C Recommendation on October 5, 2023 and added 9 success criteria…" | TRUE | https://www.w3.org/WAI/news/2023-10-05/wcag22rec/ ; https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ . "Current" holds as of October 2026: WCAG 3.0 is still a Working Draft (https://www.w3.org/TR/wcag-3.0/, https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/), and W3C plans no WCAG 2.3. The sentence frames a method and does not claim either law requires 2.2. |
| 181 | Anyday: "A fintech wallet (link /industries/fintech/) for employees and employers whose first release was hard to navigate." | TRUE | anyday-app.md l.2 ("fintech wallet"), l.9 (`industries: [fintech]`), l.29, l.38, l.43 (two audiences). content/industries/fintech.json exists. |
| 181 | "Employee satisfaction up 40%, credited to immediate access to wages." | TRUE | anyday-app.md l.12 ("increase in employee satisfaction from immediate access to wages"). "Credited to" restates the case study's own attribution. |
| 234 | "My advice is to buy the smallest step…" | TRUE | Opinion, labeled as advice. |
| 252 | FAQ 4 timeline | TRUE | Hub l.81–93, l.176. |

Honesty: no new clients, results, testimonials, awards, certifications, people or offices. The only external links are W3C, Apple HIG, Material 3 and McKinsey, and all 4 resolved in loop 1 and loop 2 searches.

### Backlinks into the post

| File | Sentence | Verdict | Source / note |
|---|---|---|---|
| content/services/product-design-agency.json l.30 | "Our guide to [what digital product design hands your team](/blog/digital-product-design/) lists the artifacts behind that view." | TRUE | The post lists the 8 artifacts (l.46–55). The link has no fragment. |
| content/case-studies/elia-wellness.md l.75 | "…and the project covered [the full span of digital product design](/blog/digital-product-design/#what-does-digital-product-design-look-like-when-shipped), with strategy, a website, a web app and a mobile app." | TRUE | The scope list matches elia-wellness.md l.29 word for word in substance: "strategy and the path from idea to product, plus the website, the web app and the mobile app". "Full span" matches the post's span definition (problem → flow → screen → did it work): strategy and idea-to-product at l.29, plus a measured result at l.7 and l.97 (+40% registrations). The fragment is `slugify("What does digital product design look like when shipped?")` (lib/blog.ts l.6), and that H2 sits at post l.169. The same section's table lists Elia with the identical scope. |
| content/pillars.ts l.207 | "Before you choose, check [the artifacts each step should hand you](/blog/digital-product-design/#which-digital-product-design-work-should-you-buy-first)." | WRONG (scope) | The 3 steps named just before this in the same paragraph are design sprint, MVP design and ongoing product design. The target section (post l.208–234) covers discovery, MVP design and ongoing product design, and never mentions a design sprint. So "each step" includes one step the linked section does not cover. The fragment itself resolves (slugify of the post's l.208 H2). **Fix L2-1.** |

### Loop 2 fix (exact replacement)

**L2-1 (content/pillars.ts l.207).** Replace:
> `Before you choose, check <a href="/blog/digital-product-design/#which-digital-product-design-work-should-you-buy-first">the artifacts each step should hand you</a>.`

with:
> `Before you choose between MVP design and ongoing product design, check <a href="/blog/digital-product-design/#which-digital-product-design-work-should-you-buy-first">the artifacts each step should hand you</a>.`

(Supported by post l.225–226 and l.230: door two is MVP design, door three is ongoing product design. The anchor and href are unchanged, and the string stays inside the existing single-quoted TS literal.)

The post itself is all TRUE. The only open item is L2-1, in the pillar backlink.

VERDICT: FAIL
