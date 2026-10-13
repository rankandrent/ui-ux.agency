# Fact-check: saas-onboarding

Post: `content/blog/saas-onboarding.md` · Brief: `content/briefs/saas-onboarding.json` · Checked 2026-10-13

**Method:** WebFetch returned `ENOTFOUND` for every external host (userpilot.com, docs.aws.amazon.com, productled.com, nngroup.com, a16z.com, goodux.appcues.com). I verified each link and figure through WebSearch. Each search returned the exact URL the post cites, plus snippets that support the claim (see the 2026-10-05 and 2026-10-09 method lessons). Site claims were checked against `content/pages/about.md`, `content/pages/thank-you.md`, `content/pages/terms.md`, `content/home.ts`, `content/services/saas-onboarding-design.json` and `content/case-studies/tradezella.md`.

## Claims

| # | Line | Claim | Verdict | Source / evidence |
|---|---|---|---|---|
| 1 | 36 | ui-ux.agency is "the design team of tkxel" | TRUE | Hub abstract: "ui-ux.agency, the design team of tkxel"; home.ts FAQ: "the UI UX design team of tkxel" |
| 2 | 36 | "our designers have worked on more than 200 digital products since 2017" | TRUE | about.md line 9, word for word; RULES.md confirmed company facts |
| 3 | 36 | "A log like this is the first thing we look for in new-user session recordings." | UNVERIFIABLE | No site page ranks what "we look for first". Hub funnel review only says "We measure drop-off from sign-up to first value in your analytics and watch new-user session recordings." See F2 |
| 4 | 48 | "our SaaS onboarding design work starts there" (with the screens) | WRONG | Hub step 1 is a funnel review (analytics drop-off + session recordings), not screens. The hub's scope is "sign-up, setup, empty states and in-app guidance". See F3 |
| 5 | 50 | AWS SaaS Lens "tenant onboarding" means provisioning infrastructure and identity for a new customer account | TRUE | https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/tenant-onboarding.html: onboarding orchestrates provisioning and configuration of resources for a new tenant, and creates the tenant admin user in an identity provider (Amazon Cognito). The link loads in search with the exact path |
| 6 | 56 | A CSM runs kickoff, training and go-live in customer onboarding | TRUE (general definition) | Industry-standard description; no figure involved |
| 7 | 88 | Andrew Chen's *The Cold Start Problem* quotes Stewart Butterfield: of teams that had exchanged 2,000 messages, 93% were still using Slack | TRUE (wording paraphrased, secondary verification) | Book page: https://a16z.com/books/the-cold-start-problem/ (loads; Andrew Chen, Harper Business, 2021). Several readers' Kindle highlights of the book quote Butterfield verbatim: "after 2,000 messages, 93% of those customers are still using Slack today" and "any team that has exchanged 2,000 messages in its history has tried Slack — really tried it" (https://www.goodreads.com/notes/56962799-the-cold-start-problem/84411704-mikko-ikola/435bc888-c6a7-45f1-83c2-6c66617e1ab2). One reader-summary blog gives 97%, but the verbatim highlights say 93%, so keep 93%. "Teams" for "customers" is acceptable, because the same passage says "any team". Butterfield is a Slack co-founder: TRUE. Keep the wording as a paraphrase without quotation marks, because I could not check the book's punctuation |
| 8 | 88 | "Slack found that threshold by comparing teams that stayed with teams that left." | WRONG (wrong source, overstated) | This idea comes from First Round Review's interview, not from the linked book: "Based on experience of which companies stuck with us and which didn't, we decided that any team that has exchanged 2,000 messages … has tried Slack" (https://review.firstround.com/from-0-to-1b-slacks-founder-shares-their-epic-launch-strategy/). Butterfield describes judging from experience, not a cohort comparison. The phrase was not found in any highlight of the book. The sentence sits right after the book citation, so it reads as the book's claim. See F1 |
| 9 | 90–92 | Find the activation event by comparing retained vs churned users' first-week actions in Mixpanel or Amplitude | TRUE (advice) | Written as advice to the reader. Both tools offer retention and cohort analysis. The hub names Mixpanel and Amplitude |
| 10 | 144 | The method comes from Wes Bush's Bowling Alley Framework, a PLG model: straight line, product bumpers (in-app), conversational bumpers (messages) | TRUE | https://productled.com/blog/user-adoption-framework-bowling-alley loads in search. ProductLed defines the straight line as the fewest steps from signup to a meaningful outcome, with steps labelled required / later / removable. Product bumpers are in-app (tours, checklists, tooltips, empty states). Conversational bumpers are outside the app (email, push). "Gutters" is the bowling metaphor and makes no factual claim. The essential / later / cut sort matches the green / yellow / red labels and is credited |
| 11 | 182 | Appcues' GoodUX teardown: Notion uses sign-up answers to suggest a short list of templates, plus a learn-by-doing Getting Started checklist | TRUE | https://goodux.appcues.com/blog/notions-lightweight-onboarding ("Notion's clever onboarding and inspirational templates"): the signup tailors the workspace to the user's function and solo or team use, offers curated templates, and has an interactive Getting Started checklist that teaches by doing. Plain-text citation (no link), which is fine. "Screens change between versions" is an appropriate hedge |
| 12 | 182 | SaaSFrame galleries hold more onboarding flow examples | TRUE | https://www.saasframe.io/categories/user-onboarding ("351 SaaS User Onboarding examples") |
| 13 | 184 | NN/g warns that a blank screen in a complex app confuses users; its guidelines ask empty states to show system status, give learning cues and give direct paths to key tasks | TRUE | https://www.nngroup.com/articles/empty-state-interface-design/ (Kate Kaplan, "Designing Empty States in Complex Applications: 3 Guidelines"). The three guidelines are system status, learning cues, and direct pathways to key tasks. The article says a blank panel leaves users unsure whether the system is loading, has failed or has no results. "Confuses" is a fair paraphrase |
| 14 | 168 | "That's the exact flow our design team rebuilds, starting from drop-off data and new-user session recordings." | TRUE | Hub scope covers sign-up and account setup. Hub step 1: "measure drop-off … and watch new-user session recordings" |
| 15 | 197 | Guided first task beats a product tour; users remember their own first result, not tooltips | TRUE (site claim) | Hub table: "What the user remembers: Little after the tour ends / Their own first result" |
| 16 | 245–247 | Microsoft Clarity records sessions; Mixpanel, Amplitude and Google Analytics 4 give step drop-off | TRUE | Clarity offers session recordings (clarity.microsoft.com). All three analytics tools have funnel reports. The hub FAQ names the same three tools |
| 17 | 267 | Appcues, Userpilot and Pendo do checklists, tours and in-app messages; "we design for them too" | TRUE | Hub FAQ: "We design onboarding that your team builds in code or in tools such as Appcues, Userpilot or Pendo." |
| 18 | 272 | Our onboarding redesign runs in 4 steps: funnel review, interviews with 5 to 8 recent sign-ups, redesign and prototype tested with new users, release and measurement, in 3 to 6 weeks | TRUE | Hub process section, all four steps and "3 to 6 weeks" |
| 19 | 272 | Costs $15,000 to $45,000, judged by activation rate, time to first value and day-7 return rate | TRUE | Hub cost H2 and FAQ "How do you measure SaaS onboarding success?". The deep link `#how-much-does-saas-onboarding-design-cost` matches the hub H2 |
| 20 | 274 | TradeZella: "no onboarding guide" sat beside a crowded interface and web and mobile apps that behaved differently; we redesigned it | TRUE | tradezella.md: "No onboarding guide.", "A busy, crowded interface.", "Web and mobile did not behave the same way." The case-study frontmatter `services` includes saas-product-redesign, so linking it to the SaaS product redesign hub is correct. The post does not claim we redesigned TradeZella's onboarding or quote any result figure. "Phased" describes the service (saas-product-redesign.json: "A phased redesign of a live product"), not TradeZella's project. That is acceptable as written |
| 21 | 274 | SaaS product redesign is one of the services in our wider SaaS product design work | TRUE | about.md "SaaS products" bullet; pillar `saas-products` |
| 22 | 280 | "send us the recording for a free consultation with our onboarding designers" | UNVERIFIABLE (honesty) | The free consultation is real (terms.md, thank-you.md, contact page). No site page lists "onboarding designers" as a role or team. home.ts roles are Sr. Product Designer, Principal UX Designer and others. See F4 |
| 23 | 280 | "A senior designer replies within one business day." | TRUE | about.md line 38, word for word |
| 24 | 290 | Userpilot's 2024 activation benchmark averages 37.5% across 62 B2B companies; first-party vendor data from its own customers | TRUE | https://userpilot.com/blog/user-activation-rate-benchmark-report-2024/ (title "User Activation Rate Benchmark Report 2024", loads in search): "average activation rate is 37,5% … median 37% … based on data from 62 B2B companies collected with Userpilot's New User Activation dashboard". The dashboard source supports "from its own customers". Caveat: later Userpilot posts give the same 37.5% for 547 companies. The post correctly names the 2024 report, the 62 companies and the link, so it is consistent |
| 25 | 286, 294, 298 | FAQ advice (time to first value in minutes, no fixed email count, tools vs code) | TRUE (advice, no figures) | No vendor ranges or sequence lengths used, as the brief required |

All external links (AWS, a16z, ProductLed, NN/g, Userpilot) returned their exact host and path in search and support their sentences. Internal targets: the hub cost fragment, `/case-studies/tradezella/`, `/services/saas-products/saas-product-redesign/`, `/services/saas-products/` and `/contact/` all exist.

## Fixes (exact replacements)

**F1, line 88** (claim 8). Replace the whole paragraph with:

> How do you find yours? In [The Cold Start Problem](https://a16z.com/books/the-cold-start-problem/), Andrew Chen quotes Slack co-founder Stewart Butterfield: of the teams that had exchanged 2,000 messages, 93% were still using Slack. Look for your own threshold by comparing users who stayed with users who left:

(The first two sentences are unchanged and verified. The book's own wording is "after 2,000 messages, 93% of those customers are still using Slack today". Do not put the paraphrase in quotation marks. The steps 1–3 that follow stay as they are.)

**F2, line 36** (claim 3). Replace "A log like this is the first thing we look for in new-user session recordings." with:

> Our onboarding work starts the same way: we watch new-user session recordings and measure drop-off from sign-up to first value.

(Built from the hub's funnel review step: "We measure drop-off from sign-up to first value in your analytics and watch new-user session recordings.")

**F3, line 48** (claim 4). Replace "The screens underneath decide the outcome, which is why our [SaaS onboarding design](/services/saas-products/saas-onboarding-design/) work starts there." with:

> The screens underneath decide the outcome, which is why our [SaaS onboarding design](/services/saas-products/saas-onboarding-design/) work redesigns sign-up, setup and empty states, not only the guidance on top.

(From the hub hero: "We redesign sign-up, setup, empty states and in-app guidance". Keep the hub link and anchor unchanged.)

**F4, line 280** (claim 22). Replace the sentence with:

> Time your own first run with a stopwatch, record it and [send us the recording](/contact/) for a free consultation. A senior designer replies within one business day.

## Honesty check

- No invented clients, testimonials, awards, certifications or team members. No local-office claims. The Apex HCM, Fortna and ToolsGroup clients are not mentioned.
- The TradeZella reference uses only facts from tradezella.md and quotes no result figures. It is framed as a SaaS product redesign, which is in its `services`. It is not presented as SaaS onboarding design work, which is correct, because `saas-onboarding-design` is not in its services.
- Hub figures (4 steps, 5 to 8 sign-ups, 3 to 6 weeks, $15,000–$45,000, the three metrics) match the hub word for word. No home.ts range ($40,000–$180,000) is mixed in.
- No headcount claims. "Our design team" and "a senior designer" are site phrases.

## Stale brief records (for the orchestrator)

- Brief `notes`: "NO CASE STUDIES: content/case-studies/ holds only _template.md" is out of date. `tradezella.md` exists and the post links it.
- Brief `outline` and `faqs` say "62 SaaS companies". The source says both "62 SaaS companies" and "62 B2B companies", so the post's "62 B2B companies" is fine.
- `related.externalSources` a16z note: the sentence "comparing teams that stayed with teams that left" was flagged for confirmation. It is not in the book highlights; its source is First Round Review (F1).

VERDICT: FAIL
