# Fact-check: chatbot-design

Post: `content/blog/chatbot-design.md` (draft, 2026-10-19). Checked 2026-10-19 by fact-checker.

**Method note.** WebFetch failed with `getaddrinfo ENOTFOUND` for every host tried (ibm.com, pewresearch.org, nngroup.com). Each external claim was checked with a WebSearch restricted to the source's own domain (`allowed_domains`). It had to return the exact URL the post links, plus supporting snippets. Each claim is marked "(domain search)". Internal claims were checked against the files in the repo.

## External links

| # | Link in post | Loads? | Supports its sentence? |
|---|---|---|---|
| L1 | https://www.ibm.com/think/topics/chatbot-design | Returned by ibm.com search, same host and path | Yes (paraphrase, see C1) |
| L2 | https://www.pewresearch.org/short-reads/2025/06/25/34-of-us-adults-have-used-chatgpt-about-double-the-share-in-2023/ | Returned by pewresearch.org search, same host and path | Yes for 2025, but a newer edition exists (C2) |
| L3 | https://www.nngroup.com/articles/ai-chatbots-design-guidelines/ | Returned by nngroup.com search ("10 Guidelines for Designing Your Site's AI Chatbots", Apr 24, 2026) | Yes (C3, C4) |
| L4 | https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | Returned by w3.org search | Yes (C8) |
| L5 | https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180SB1001 | Returned by leginfo search | Yes for the content; date verb and "so" sentence fail (C12, C13) |

## Claims

| # | Line | Claim | Verdict | Source |
|---|---|---|---|---|
| C1 | 28 | IBM describes chatbot design as a blend of UX design, UI design, copywriting, conversational AI and machine learning | TRUE (paraphrase; IBM lists the same five disciplines, and "blend" is the post's word, not a quote) | https://www.ibm.com/think/topics/chatbot-design (domain search) |
| C2 | 28 | Pew survey run Feb 24 to Mar 2, 2025: 34% of US adults had used ChatGPT, including 58% of adults under 30 | **OUTDATED**. Each figure and date is correct for 2025 (5,123 adults, Feb. 24–Mar. 2, 2025). Pew has since published the 2026 edition: survey Feb. 17–23, 2026, 5,119 adults, 44% of US adults say they use ChatGPT, 61% of ages 18–29 (Pew changed the question wording in 2026) | 2025: L2 (domain search). 2026: https://www.pewresearch.org/internet/2026/06/17/how-opinions-and-use-of-ai-differ-by-age/ and https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/ (domain search) |
| C3 | 55 | NN/g recommends one bot that says what it is, handles what it can and passes the rest to people, not an AI chat beside a separate live chat | TRUE. Guideline 1 says to consolidate chat options into a single entry point: "One chatbot that clearly identifies itself, handles what it can, and escalates questions to humans when it can't is preferable to multiple bots". The study example was an AI assistant beside a live-chat bot | L3 (domain search) |
| C4 | 101 | NN/g found helpful site chatbots state what they can do and suggest relevant prompts | TRUE (article summary: state capabilities, offer relevant prompt suggestions) | L3 (domain search) |
| C5 | 111 | Google's conversation design guidance on errors, written for Google Assistant: the first reprompt is quick and does not repeat the question word for word; later reprompts add detail | TRUE. Rapid reprompt: "Quickly and concisely collect the information again… Do not repeat the original prompt verbatim". The 2nd No Match adds options or examples. The page belongs to the (retired) Conversational Actions docs for Google Assistant. The post's cap of two turns is the author's own; Google caps errors at 3 and then exits. The post presents the cap as "I … cap it", so this is fine | https://developers.google.com/assistant/conversation-design/errors (domain search) |
| C6 | 133 | People + AI Guidebook (Google PAIR), "Errors + Graceful Failure": define errors, find error sources, give paths forward from failure | TRUE | https://pair.withgoogle.com/chapter/errors-failing/ (domain search) |
| C7 | 184 | Microsoft's 2018 responsible bot guidelines ask whether a situation needs people to provide judgment, expertise and empathy, and name employment, finances and health among consequential areas | TRUE. The "pause and ask… judgement, expertise and empathy" wording and "affect people in consequential ways… employment, finances, physical health and mental well-being" are in Lili Cheng's Nov 14, 2018 post that launched the guidelines. The guidelines PDF (v1.0, Nov 2018) says "human judgment, empathy and expertise" and names health, employment and finance. The post does not use quotation marks, so the paraphrase and US spelling are fine | https://blogs.microsoft.com/blog/2018/11/14/microsoft-introduces-guidelines-for-developing-responsible-conversational-ai/ ; https://www.microsoft.com/en-us/research/publication/responsible-bots/ (domain search) |
| C8 | 194 | SC 1.4.3: 4.5:1 for text, 3:1 for large text | TRUE | L4 (domain search) |
| C9 | 196 | SC 4.1.3 Status Messages was added in WCAG 2.1 and kept in 2.2. It covers waiting state, progress and errors, which are exposed to assistive technology without receiving focus | TRUE | https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html (domain search) |
| C10 | 198 | "In the US, WCAG 2.2 AA is the usual yardstick when ADA or Section 508 questions come up." | **WRONG**. The Section 508 standards incorporate WCAG 2.0 AA. The DOJ ADA Title II rule (2024) requires WCAG 2.1 AA; an April 2026 interim final rule moved its deadlines to Apr 2027/2028 but left the standard unchanged. W3C states that content conforming to WCAG 2.2 also conforms to 2.0 and 2.1 (2.2 removed 4.1.1 Parsing, so 2.0/2.1 policies may still test it) | https://www.section508.gov/develop/applicability-conformance/ ; https://www.w3.org/TR/WCAG22/ ; DOJ IFR coverage (titleii.org, consumerfinancialserviceslawmonitor.com, Apr 2026) |
| C11 | 200 | SB 1001 sits in Bus. & Prof. Code §17940 and the sections after it. It bars using a bot to mislead a person in California about its artificial identity to drive a sale or influence a vote, and a clear and conspicuous disclosure avoids liability | TRUE (§17941(a)–(b)). Current law: AB 410 (2025–26), which would add a first-contact disclosure duty, was placed on the Senate Appropriations suspense file on 8/18/25 and held under submission on 8/29/25. No 2026 action was found, so §17941 is unchanged. The post does not mention AB 410, which is correct | L5; https://leginfo.legislature.ca.gov/faces/billStatusClient.xhtml?bill_id=202520260AB410 (domain search) |
| C12 | 200 | "…and took effect on July 1, 2019" | **WRONG (date type)**. §17943 says the chapter "shall become operative on July 1, 2019". The statute was enacted in 2018 (Ch. 892). The verb must match the operative date | L5 |
| C13 | 200 | "So the bot has to disclose what it is in the greeting's first line, as the payroll assistant does in Step 3." | **WRONG**. SB 1001 sets no position for the disclosure. It applies only when a bot is used with intent to mislead about a sale or a vote, and the disclosure is a safe harbor. An internal payroll assistant for employees is not obviously covered. The "so … has to" turns design advice into a legal duty | L5 |
| C14 | 30 | Author is a UI/UX designer at ui-ux.agency | TRUE | `content/home.ts` line 204 ("UI/UX Designer") |
| C15 | 30 | ui-ux.agency is the UI UX design agency of tkxel; its designers have worked on more than 200 digital products since 2017 | TRUE | `content/pages/about.md` line 9; RULES.md confirmed facts |
| C16 | 30 | Our chatbot UI design work starts from real transcripts | TRUE | `chatbot-ui-design.json` line 57 (Transcript review, step 1) |
| C17 | 67 | "A support widget with 20 to 30 intents on one website is the small end of the chatbot work our team takes on." | **WRONG (framing)**. The hub uses the 20–30-intent widget only as the price anchor ("sits near $15,000"). It never says this is the smallest work we take on | `chatbot-ui-design.json` line 92 |
| C18 | 137 | AI UX team designs citations, source previews and plain-language confidence cues; plans for generation of 3 to 20 seconds | TRUE | `ai-ux-design-agency.json` lines 43, 44 |
| C19 | 194 | Our chat windows target at least 4.5:1 for message text | TRUE | `chatbot-ui-design.json` line 102 |
| C20 | 168 | "Our team designs the chat window, message components and every system state for web, iOS, Android or an embedded widget. We test those flows with users before launch." | **WRONG (scope)**. The hub lists specific system states (typing, streaming, retry, error, refusal, offline). "Every system state" placed after the post's 7-state strip claims states (low confidence, sourced answer) that the hub's states list does not name | `chatbot-ui-design.json` lines 19, 45, 47, 59 |
| C21 | 208 | Conversation testing step: users complete real tasks with a clickable prototype; we measure task success and turns per task | TRUE (verbatim) | `chatbot-ui-design.json` line 60 |
| C22 | 210 | "In our AI feature tests, 5 to 8 users run real tasks against recorded model answers, and we count how often they accept, edit or reject each one." | **WRONG (method word)**. The hub says "a prototype that shows real model answers, including wrong ones". "Recorded" is not on any site page | `ai-ux-design-agency.json` line 98 |
| C23 | 273 | 3 to 8 weeks across transcript review, flow design, interface design and conversation testing | TRUE | `chatbot-ui-design.json` lines 55–60 |
| C24 | 273 | "The number of jobs, channels and languages moves a project within that range, with a narrow FAQ bot at the short end." | **WRONG**. The hub's factors are "intents, channels and languages", and the post's "jobs" is a different unit. The hub never ties a narrow FAQ bot to the short end of the schedule; that idea comes from the brief, which is not a source | `chatbot-ui-design.json` line 91 |
| C25 | 277 | $15,000 to $60,000, driven by intents, channels and languages; one-website widget near the low end, web + mobile assistant near the high end; link to `#how-much-does-chatbot-ui-design-cost` | TRUE. The fragment matches `sectionId()` in `components/sections/SemanticSections.tsx` | `chatbot-ui-design.json` lines 11, 91–92 |
| C26 | 265 | IBM draws the same UX/UI line (what the bot says = UX; how dialogue is displayed = UI) | TRUE | L1 (domain search) |
| C27 | 228 | Containment rate = share of conversations closed without a person | TRUE (standard definition; the hub names containment rate as a support bot metric) | `chatbot-ui-design.json` line 74 |
| C28 | 145 | "Many first drafts stop at two states: typing and answered." | **UNVERIFIABLE**. This is a frequency claim with no source, and it is not on the hub's list of mistakes | none |
| C29 | 167 | "…because retyping a long question is where people quit." | **UNVERIFIABLE**. This is a behavioral claim with no source | none |
| C30 | 57, 69–99, 113–123, 147–165, 216–224 | Hypothetical payroll example is labeled and its numbers are consistent | TRUE. "Hypothetical" or "example" appears in the prose, table captions and SVG badges. There are 5 jobs, of which 3 launch, and those 3 become the 3 starter prompts named in the greeting and the 3 scorecard tasks. The happy path has 5 turns against a threshold of 6 turns. Scorecard verdicts match their thresholds: 3/5 with median 7 → Change; 5/5 with median 2 → Pass; 4/5 with median 4 → Pass | post + SVGs |
| C31 | SVGs | SVG text in `public/blog/chatbot-design/*.svg` | TRUE. No regulation or standard labels. The decision tree branches (Q1 No → screen; Q2 No → screen + chat link; Q3 No → guided bot; Q4 No → guided bot until someone can; 4× Yes → open AI assistant) match the text panel, and the paycheck and shift examples route correctly. The job card, reply-state and scorecard text matches the panels word for word | SVG `<text>` elements |
| C32 | all | US English, US frame | TRUE (judgment, labeled, gray, US regulations). No British spellings found | post |

## Replacements (exact text)

**F1 (C2), line 28.** Replace the second sentence of the paragraph with:

> Users arrive expecting that blend to work: in a [Pew Research Center survey](https://www.pewresearch.org/internet/2026/06/17/how-opinions-and-use-of-ai-differ-by-age/) run February 17 to 23, 2026, 44% of US adults said they use ChatGPT, including 61% of adults ages 18 to 29.

(Keep "use", not "have used": Pew changed the question in 2026. Keep "ages 18 to 29", which is Pew's bracket. The age page carries both 44% and 61%.)

**F2 (C17), line 67.** Replace "A support widget with 20 to 30 intents on one website is the small end of the chatbot work our team takes on." with:

> On our chatbot UI design page, a support widget with 20 to 30 intents on one website sits at the low end of the price range.

**F3 (C28), line 145.** Replace "Many first drafts stop at two states: typing and answered." with:

> A draft that stops at two states, typing and answered, leaves five states undesigned.

**F4 (C29), line 167.** Replace "An error keeps the user's typed message, because retyping a long question is where people quit." with:

> An error keeps the user's typed message, so nobody has to retype a long question.

**F5 (C20), line 168.** Replace "Our team designs the chat window, message components and every system state for web, iOS, Android or an embedded widget. We test those flows with users before launch." with:

> Our team designs the chat window, message components and system states such as typing, streaming, retry, error, refusal and offline for web, iOS and Android, or for an embedded widget. We test every conversation flow with real users before launch.

(The state list, platforms and test sentence are copied from `chatbot-ui-design.json` lines 19, 47 and 59.)

**F6 (C10), line 198.** Replace "In the US, WCAG 2.2 AA is the usual yardstick when Americans with Disabilities Act (ADA) or Section 508 questions come up." with:

> In the US, the Section 508 standards point to WCAG 2.0 AA and the Americans with Disabilities Act (ADA) Title II rule for state and local governments points to WCAG 2.1 AA; W3C states that content meeting WCAG 2.2 also meets 2.0 and 2.1, so I design to 2.2 AA.

(Keep the next sentence, "Read this step as design guidance, not legal advice.")

**F7 (C12), line 200.** Replace "…and took effect on July 1, 2019." with "…and became operative on July 1, 2019."

**F8 (C13), line 200.** Replace "So the bot has to disclose what it is in the greeting's first line, as the payroll assistant does in Step 3." with:

> The law does not say where the disclosure goes, so the first line of the greeting is my design choice: the payroll assistant says it is an AI bot there, as in Step 3.

**F9 (C22), line 210.** Replace the sentence with:

> In our AI feature tests, 5 to 8 users run real tasks in a prototype that shows real model answers, wrong ones included, and we measure how often they accept, edit or reject each answer.

**F10 (C24), line 273.** Replace "The number of jobs, channels and languages moves a project within that range, with a narrow FAQ bot at the short end." with:

> The number of intents, channels and languages sets where a project falls in that range.

## Notes (no change required)

- The bold answer in Step 7 ("lawful design says plainly that users are talking to a bot") holds as design advice next to the SB 1001 safe harbor once F8 is applied.
- Launch list row 5 ("Later, and only through a person") and refusal state ("Open account settings") both hold: chat hands the job to a person later, and settings is the self-serve source. Both rows are consistent with the post.
- Stale brief record: the brief FAQ for "How long does chatbot design take?" (`content/briefs/chatbot-design.json` line 320) carries the unsourced "narrow FAQ bot sits at the short end". Fix it with F10 so a rewrite does not bring it back.
- Saliha Shahzad's bio in `content/authors.json` is empty. All first-person lines are method statements ("I start from…", "I build that prototype in Figma"), not experience claims, so they pass.

VERDICT: FAIL
