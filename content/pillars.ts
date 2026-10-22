import type { Faq, Section, ServiceCategory } from "@/lib/types";

/**
 * Pillar (hub) pages: one per service category, served at /services/<slug>/.
 * Each pillar links down to every service in its category, and each of those
 * services links back up through its breadcrumb (pillar → cluster, two URL levels).
 * Slugs must not clash with a file in content/services/.
 */
export type Pillar = {
  slug: string;
  category: ServiceCategory;
  title: string;
  /** link text used everywhere this pillar is linked */
  anchor: string;
  metaTitle: string;
  metaDescription: string;
  centralEntity: string;
  hero: { eyebrow: string; h1: string; sub: string };
  abstract: string;
  sections: Section[];
  servicesHeading: string;
  servicesIntro: string;
  faqHeading: string;
  faqs: Faq[];
  updated: string;
};

export const pillars: Pillar[] = [
  {
    slug: "ai-products",
    category: "AI products",
    title: "AI product design",
    anchor: "AI product design",
    metaTitle: "AI Product Design | UX for LLM Apps, Copilots and Bots",
    metaDescription:
      "AI product design from ui-ux.agency: discovery workshops, AI UX design and chatbot UI design for products built on large language models.",
    centralEntity: "AI product design",
    updated: "2026-10-13",
    hero: {
      eyebrow: "AI product design",
      h1: "AI product design, from the first workshop to a tested interface",
      sub: "Everything we do for products that run on large language models and machine learning: deciding where AI helps, designing how people use it, and testing it with real answers.",
    },
    abstract:
      "AI product design is the work of deciding where artificial intelligence belongs in a product and designing the user experience (UX) around it: how people ask, how answers appear, how mistakes get caught and how trust grows. ui-ux.agency, the design team of tkxel, covers AI product design in three services: a discovery workshop, AI UX design and chatbot UI design.",
    sections: [
      {
        h2: "What is AI product design?",
        format: "paragraph",
        answer:
          "<strong>AI product design shapes a product around a model that writes, predicts or recommends, so that people get value from it without blind trust.</strong> It joins product strategy, interaction design and testing with real model output.",
        body: '<p>A product with AI inside behaves differently from classic software. The same request returns different answers, responses take seconds, and the system is sometimes confidently wrong. AI product design plans for all three. It starts with the question most teams skip: which task should AI handle at all? The answer comes from an <a href="/services/ai-products/ai-product-discovery-workshop/">AI product discovery workshop</a>. The interface work then follows in <a href="/services/ai-products/ai-ux-design-agency/">AI UX design agency</a> projects and, for conversational products, in <a href="/services/ai-products/chatbot-ui-design/">chatbot UI design</a>.</p>',
        image: {
          src: "/images/services/ai-products.svg",
          alt: "AI product design path in three stages: discovery workshop, AI UX design and chatbot UI design, ending in a tested AI feature",
          caption: "Three services, one path: decide where AI helps, design it, then test it with real answers.",
          text: ["Discovery workshop: 1–2 weeks to decide where AI helps", "AI UX design: 4–10 weeks to design the AI feature", "Chatbot UI design: 3–8 weeks for conversational products", "Together: decide where AI helps, design it, then test it with real answers"],
        },
      },
      {
        h2: "Which AI product design services do we offer?",
        format: "list",
        answer: "<strong>Our AI product design work is split into 3 services, each with its own scope and price:</strong>",
        items: [
          { title: "AI product discovery workshop.", body: "A 1 to 2 week workshop that picks the AI use cases worth building and turns them into a scoped plan." },
          { title: "AI UX design.", body: "Input, output, review and correction patterns for AI features and AI-first products, tested with real model answers." },
          { title: "Chatbot UI design.", body: "Chat windows, answer cards, suggested replies and human handoff for assistants and support bots." },
        ],
      },
      {
        h2: "How does AI product design differ from classic product design?",
        format: "table",
        answer:
          "<strong>AI product design adds trust, uncertainty and correction to every screen that classic product design treats as fixed.</strong> The table shows the main differences.",
        caption: "Comparison of AI product design and classic product design",
        columns: ["Criterion", "AI product design", "Classic product design"],
        rows: [
          ["Output", "Different each time, sometimes wrong", "Same result for the same action"],
          ["Main risk", "Users trust a wrong answer", "Users cannot find a feature"],
          ["Prototype content", "Real or recorded model output", "Static sample content"],
          ["Key states", "Streaming, low confidence, refusal", "Loading, empty, error"],
          ["Success metric", "Accepted answers, edits, task time", "Task completion, conversion"],
        ],
      },
      {
        h2: "Which teams need AI product design?",
        format: "cards",
        answer: "<strong>AI product design helps 4 kinds of teams</strong>, from founders with an idea to companies adding AI to mature software.",
        items: [
          { title: "Startups building on a model", body: "Founders who need a first version people trust; many start with our MVP design agency team." },
          { title: "SaaS companies adding a copilot", body: "Product teams that want AI inside existing workflows without breaking them." },
          { title: "Support and operations teams", body: "Teams that want bots and internal tools that answer correctly and hand over cleanly; our chatbot design steps show <a href=\"/blog/chatbot-design/#step-6-when-should-the-chatbot-hand-off-to-a-person\">when a bot should pass a chat to a person</a>." },
          { title: "Enterprises with AI pilots", body: "Organizations that built a proof of concept and now need an interface staff will actually use; see our <a href=\"/industries/enterprise/\">enterprise UX</a> work for roles, review and rollout." },
        ],
      },
    ],
    servicesHeading: "AI product design services",
    servicesIntro: "Pick one service or run all three in order. Each page lists scope, timeline and price.",
    faqHeading: "AI product design FAQs",
    faqs: [
      { q: "Where should an AI product design project start?", a: "Most teams start with an AI product discovery workshop. It names the use cases worth building before any interface work begins; here are <a href=\"/blog/product-discovery/#what-changes-in-product-discovery-for-ai-features\">the extra product discovery checks an AI feature needs</a>." },
      { q: "Do you design AI products for mobile apps?", a: "Yes. We design AI features for web apps, iOS and Android apps, and for embedded widgets inside other software." },
      { q: "Can you work with any AI model provider?", a: "Yes. Our designs work with OpenAI, Anthropic, Google, open-source models or your own models; we prototype with whichever your team uses." },
      { q: "How long does AI product design take?", a: "A discovery workshop takes 1 to 2 weeks, chatbot UI design takes 3 to 8 weeks and AI UX design takes 4 to 10 weeks." },
    ],
  },
  {
    slug: "saas-products",
    category: "SaaS products",
    title: "SaaS product design",
    anchor: "SaaS product design",
    metaTitle: "SaaS Product Design | New Products, Onboarding, Redesign",
    metaDescription:
      "SaaS product design from ui-ux.agency: end-to-end design for new software, onboarding design for higher activation and phased redesigns of live products.",
    centralEntity: "SaaS product design",
    updated: "2026-10-13",
    hero: {
      eyebrow: "SaaS product design",
      h1: "SaaS product design for every stage of your software",
      sub: "New products, better onboarding and phased redesigns: design for subscription software, measured by activation, retention and renewals.",
    },
    abstract:
      "SaaS product design is the user experience (UX) and user interface (UI) design of subscription software, from the first trial screen to renewal. ui-ux.agency, the design team of tkxel, covers SaaS product design in three services: full product design for new or growing software, onboarding design that raises activation, and phased redesigns of live products.",
    sections: [
      {
        h2: "What does SaaS product design cover?",
        format: "paragraph",
        answer:
          "<strong>SaaS product design is product design for software that earns revenue every month, so every screen is judged by whether customers activate, stay and upgrade.</strong>",
        body: '<p>Subscription software has its own patterns: free trials, workspaces, seats, roles, usage limits, plan upgrades and invoices. Each pattern is a moment where customers either move forward or leave. SaaS product design treats those moments as one system. The first of them happens before sign-up, on the homepage, which is why our guide to <a href=\"/blog/saas-homepage-design/\">SaaS homepage design</a> follows the visitor from the headline to the first screen. New products and large feature sets go to our <a href="/services/saas-products/saas-design-agency/">SaaS design agency</a> team. Products that lose trial users in the first days get <a href="/services/saas-products/saas-onboarding-design/">SaaS onboarding design</a>. Our <a href="/blog/saas-onboarding/">SaaS onboarding guide</a> includes a 12-point audit to find where they drop off. Products with an aging interface get a <a href="/services/saas-products/saas-product-redesign/">SaaS product redesign</a> in phases.</p>',
        image: {
          src: "/images/services/saas-products.svg",
          alt: "SaaS customer lifecycle from trial and onboarding to daily use, upgrade and renewal, with the matching design service under each stage",
          caption: "Each SaaS product design service targets a different stage of the customer lifecycle.",
          text: ["Trial and onboarding: SaaS onboarding design", "Daily use: SaaS design agency work", "Upgrade and renewal: SaaS product redesign", "Each SaaS product design service targets one stage of the customer lifecycle"],
        },
      },
      {
        h2: "SaaS product design services by stage",
        format: "list",
        answer: "<strong>Our SaaS product design work covers 3 services:</strong>",
        items: [
          { title: "SaaS design agency projects.", body: "End-to-end design of new SaaS products or large new modules, including a design system." },
          { title: "SaaS onboarding design.", body: "Sign-up, setup, empty states and in-app guidance that bring trial users to their first result faster." },
          { title: "SaaS product redesign.", body: "A phased redesign of a live product that keeps current customers productive at every step." },
        ],
      },
      {
        h2: "Which SaaS product design service fits your stage?",
        format: "table",
        answer:
          "<strong>The right SaaS product design service depends on where customers drop off today.</strong> Use the table to match the problem to the service.",
        caption: "Matching SaaS product design services to common problems",
        columns: ["If this is the problem", "Start with", "Typical timeline"],
        rows: [
          ["No product yet, or a large new module", "SaaS design agency project", "6–16 weeks"],
          ["Trial users sign up but never activate", "SaaS onboarding design", "3–6 weeks"],
          ["The interface is dated and inconsistent", "SaaS product redesign", "8–20 weeks"],
          ["Design capacity runs out every sprint", "Dedicated designers", "Monthly"],
        ],
      },
      {
        h2: "What does good SaaS product design improve?",
        format: "cards",
        answer: "<strong>Good SaaS product design moves 4 numbers</strong> that finance teams and investors watch closely.",
        items: [
          { title: "Activation rate", body: "More trial users reach the first result that makes the product worth paying for." },
          { title: "Retention", body: "Daily workflows that stay fast and clear keep customers from switching." },
          { title: "Expansion revenue", body: "Clear usage limits and upgrade paths turn growth into higher plans." },
          { title: "Support cost", body: "Self-explaining screens reduce tickets and training calls." },
        ],
      },
    ],
    servicesHeading: "Explore our SaaS product design work",
    servicesIntro: "Three services for three stages of a subscription product. Each page lists scope, timeline and price.",
    faqHeading: "SaaS product design FAQs",
    faqs: [
      { q: "Do you design B2B and B2C SaaS products?", a: "Yes. Most of our SaaS work is B2B software with roles and permissions, and we also design self-serve B2C subscription apps." },
      { q: "Can you work on one part of our SaaS product?", a: "Yes. Onboarding, a dashboard, billing or a single workflow are common starting points. To choose one, <a href=\"/blog/ux-design-for-saas/#how-do-you-rate-your-own-ux-design-for-saas\">rate each in-product surface</a> first." },
      { q: "Do you build a design system for our SaaS product?", a: "Yes. Larger projects include a Figma component library with tokens that match your front-end code." },
      { q: "How do you measure SaaS product design results?", a: "We agree 2 or 3 metrics at kick-off, such as activation rate or time to first value, and compare them before and after release." },
    ],
  },
  {
    slug: "startups",
    category: "Startups & product",
    title: "Startup product design",
    anchor: "startup product design",
    metaTitle: "Startup Product Design | Sprints, MVPs and Growth Design",
    metaDescription:
      "Startup product design from ui-ux.agency: 5-day design sprints, MVP design and product design for startups growing past their first version.",
    centralEntity: "startup product design",
    updated: "2026-10-13",
    hero: {
      eyebrow: "Startup product design",
      h1: "Startup product design, from a 5-day sprint to version two",
      sub: "Test an idea in a week, design a first version users can try, then keep the product clear as it grows. Sized for founders who need to learn fast.",
    },
    abstract:
      "Startup product design is the user experience (UX) and user interface (UI) design of a young company's product, from testing an idea to growing past the first release. ui-ux.agency, the design team of tkxel, covers startup product design in three services: a 5-day design sprint, minimum viable product (MVP) design and ongoing product design.",
    sections: [
      {
        h2: "Why does startup product design need its own approach?",
        format: "paragraph",
        answer:
          "<strong>Startup product design turns an unproven idea into something people can try, then keeps the product simple while features pile up.</strong> Speed matters, but so does evidence.",
        body: '<p>Early-stage teams face a choice every week: build the next feature or learn whether the last one worked. Startup product design keeps learning cheap. A <a href="/services/startups/design-sprint/">design sprint</a> tests one risky idea with real users in five days. An <a href="/services/startups/mvp-design-agency/">MVP design agency</a> project turns the winning idea into a tested, clickable first version. After launch, our <a href="/services/startups/product-design-agency/">product design agency</a> team keeps research, UX and UI moving with the roadmap. Before you choose, check <a href="/blog/digital-product-design/#which-digital-product-design-work-should-you-buy-first">the artifacts each step should hand you</a>.</p>',
        image: {
          src: "/images/services/startups.svg",
          alt: "Startup product design timeline: a 5-day design sprint, then MVP design over 4 to 8 weeks, then ongoing product design after launch",
          caption: "Startup product design grows with the company: sprint, MVP, then product design.",
          text: ["Design sprint: 5 days to test an idea", "MVP design: 4–8 weeks to a buildable first version", "Product design: ongoing work after launch", "Together: from a tested idea to a growing product"],
        },
      },
      {
        h2: "Three startup product design services",
        format: "list",
        answer: "<strong>Our startup product design work covers 3 services:</strong>",
        items: [
          { title: "Design sprint.", body: "Five days to map a problem, sketch solutions, build a prototype and test it with 5 users." },
          { title: "MVP design.", body: "Research, user flows, interface design and a tested clickable prototype in 4 to 8 weeks." },
          { title: "Product design.", body: "Research, UX, UI and design systems for startups after their first release." },
        ],
      },
      {
        h2: "Which startup product design service fits your stage?",
        format: "table",
        answer: "<strong>Each startup product design service fits a different funding and product stage.</strong>",
        caption: "Matching startup product design services to company stage",
        columns: ["Stage", "Start with", "What you get"],
        rows: [
          ["Idea, before building", "Design sprint", "A tested prototype and a go or no-go answer in 5 days"],
          ["Pre-seed or seed", "MVP design", "A clickable first version ready for users, investors and developers"],
          ["Post-launch, Series A", "Product design", "A senior team that keeps the product clear as it grows"],
          ["Any stage, short on hands", "Dedicated designers", "Designers inside your sprints every month"],
        ],
      },
      {
        h2: "Why do founders choose our startup product design team?",
        format: "cards",
        answer: "<strong>Founders choose our startup product design team for 4 reasons.</strong>",
        items: [
          { title: "Design and build in one place", body: "As part of tkxel, we hand designs to engineers who can build them." },
          { title: "Evidence before features", body: "Every stage includes real user tests, so founders bring data to investors." },
          { title: "Published prices", body: "Every service has a published range, so founders plan runway with real numbers." },
          { title: "AI-ready", body: "Many startups build on AI; our AI product design team works on the same projects." },
        ],
      },
    ],
    servicesHeading: "Startup product design, service by service",
    servicesIntro: "Three services that follow a startup from idea to growth. Each page lists scope, timeline and price.",
    faqHeading: "Startup product design FAQs",
    faqs: [
      { q: "Do you work with pre-seed startups?", a: "Yes. A design sprint or MVP design suits founders who have no funding or developers yet." },
      { q: "Can you also build our startup product?", a: "Yes. tkxel's engineering team builds the product when you need development as well as design." },
      { q: "Should we start with a design sprint or MVP design?", a: "Start with a design sprint when the idea is still unproven; start with MVP design when you already know the problem and the users. Our guide to <a href=\"/blog/how-to-design-an-mvp/#which-type-of-mvp-should-you-design-first\">designing an MVP step by step</a> shows how to tell which comes first." },
      { q: "Who owns the designs we pay for?", a: "You do. All files, prototypes and research belong to your company." },
    ],
  },
];
