import { LeadForm } from "@/components/forms/LeadForm";
import {
  Benefits,
  CardList,
  CtaBand,
  Faq,
  FinalCta,
  LinkChips,
  Resources,
  ServiceGrid,
  Stats,
} from "@/components/sections/Blocks";
import { FormCard, PageHero } from "@/components/sections/PageHero";
import { SemanticSections } from "@/components/sections/SemanticSections";
import { Team } from "@/components/sections/HomeSections";
import { Process } from "@/components/sections/Process";
import { WorkGrid } from "@/components/sections/WorkCards";
import { JsonLd } from "@/components/ui/JsonLd";
import { formInterests, home } from "@/content/home";
import {
  anchorOf,
  caseStudiesForService,
  industriesForService,
  pillarOf,
  servicePath,
  postsForService,
  relatedServices,
} from "@/lib/content";
import { faqLd, howToLd, pageMetadata, serviceLd, webPageLd } from "@/lib/seo";
import { cap, lower, routes } from "@/lib/site";
import { DEFAULT_BLOCKS, type Service } from "@/lib/types";

/** Metadata for one service page; its URL comes from servicePath (nested under its pillar when it has one). */
export function serviceMetadata(s: Service) {
  return pageMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: servicePath(s),
    image: `/og/services/${s.slug}.png`,
    keyword: anchorOf(s),
    keywords: s.keywords ?? s.semantic?.ngrams ?? s.tags,
  });
}

/** One service page, rendered at /services/<pillar>/<slug>/ or, without a pillar, /services/<slug>/. */
const TEAM_HEADINGS: Record<string, string> = {
  "hire-product-designer": "Meet the product designers you can hire.",
  "hire-ui-ux-designers": "Meet the UI UX designers you can hire.",
  "ui-ux-design-cost": "Meet the designers your budget pays for.",
};

export function ServiceView({ s }: { s: Service }) {
  const parent = pillarOf(s);

  const path = servicePath(s);
  const industries = industriesForService(s);
  const cases = caseStudiesForService(s.slug).slice(0, 3);
  const visualCase = caseStudiesForService(s.slug).find((c) => c.image);
  // silo: the hub lists the guides that support it first
  const siloPosts = [...postsForService(s.slug)].sort((a, b) => Number(b.services[0] === s.slug) - Number(a.services[0] === s.slug));
  const posts = siloPosts.slice(0, 6);
  // pillar links down to every guide in its silo: the ones beyond the cards are listed as links
  const morePosts = siloPosts.slice(6);
  const others = relatedServices(s);
  const h = s.headings ?? {};
  const b = { ...DEFAULT_BLOCKS, ...s.blocks };
  const hasSections = !!s.sections?.length;
  // the FAQ section of the heading vector renders in the two-column FAQ block below
  const faqSection = s.sections?.find((x) => x.format === "faq");
  const bodySections = s.sections?.filter((x) => x !== faqSection);
  const allFaqs = [...(faqSection?.faqs ?? []), ...(s.faqs ?? [])];

  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: routes.services }, ...(parent ? [{ name: parent.title, path: routes.service(parent.slug) }] : []), { name: s.title, path }]}
        eyebrow={s.hero.eyebrow ?? s.title}
        h1={s.hero.h1}
        summary={s.abstract}
        sub={s.hero.sub}
        trust
        aside={
          <FormCard title="Get a free consultation" sub="No-cost project review · answer within one business day, ET">
            <LeadForm interests={[s.title, ...formInterests.filter((i) => i !== s.title)]} source={`service: ${s.slug}`} />
          </FormCard>
        }
      />

      {hasSections ? (
        <SemanticSections
          sections={bodySections}
          visual={visualCase ? { src: visualCase.image!, alt: `${visualCase.client} project: ${anchorOf(s)} work` } : null}
          price={s.priceRange}
          category={s.category}
          label={`${cap(anchorOf(s))} illustration`}
        />
      ) : (
        <>
          {!!s.stats?.length && <Stats heading={h.stats ?? `${s.title} by the numbers`} items={s.stats} />}
          <CardList id="challenges" eyebrow="The problem" heading={h.painPoints ?? `Why ${lower(s.title)} projects go wrong`} items={s.painPoints} />
          <CardList id="what-we-do" tone="warm" eyebrow="What's included" heading={h.subServices ?? `Our ${lower(s.title)} services`} items={s.subServices} />
          {!!s.process?.length && <Process heading={h.process ?? `Our ${lower(s.title)} process`} steps={s.process} />}
          <Benefits heading={h.benefits ?? `What you get from ${lower(s.title)}`} items={s.benefits} ctaTitle="Ready to see your design opportunities?" />
        </>
      )}

      <Faq heading={faqSection?.h2 ?? h.faqs ?? `${cap(anchorOf(s))} FAQs`} intro={faqSection?.answer} items={allFaqs} />

      {b.ctaBand && <CtaBand {...(s.cta ?? home.ctaBand)} />}

      {b.industries && (
        <LinkChips
          heading={h.industries ?? `${cap(anchorOf(s))} by industry`}
          tone="warm"
          items={industries.map((i) => ({ title: anchorOf(i), href: routes.industry(i.slug) }))}
        />
      )}

      {b.caseStudies && <WorkGrid heading={h.caseStudies ?? `${cap(anchorOf(s))} case studies`} items={cases} />}
      <Team heading={TEAM_HEADINGS[s.slug] ?? `Meet the ${lower(s.centralEntity ?? s.title)} team.`} />

      <FinalCta testimonial={b.testimonial ? home.testimonial : undefined}>
        <LeadForm variant="full" interests={[s.title, ...formInterests]} source={`service final CTA: ${s.slug}`} submitLabel="Submit" />
      </FinalCta>


      {b.posts && <Resources heading={h.posts ?? `${cap(anchorOf(s))} guides`} posts={posts} more={morePosts} tone="light" />}

      {b.related && (
        <ServiceGrid id="related-services" eyebrow={s.category} heading="Related UI UX design services" services={others} allHref={routes.services} />
      )}

      <JsonLd
        data={webPageLd({
          name: s.metaTitle,
          description: s.metaDescription,
          path,
          about: s.centralEntity ?? anchorOf(s),
          mentions: s.mentions ?? s.sections?.map((x) => x.h2),
          updated: s.updated,
        })}
      />
      <JsonLd data={serviceLd(cap(anchorOf(s)), s.metaDescription, path, s.subServices?.map((x) => x.title), s.priceRange)} />
      {!!allFaqs.length && <JsonLd data={faqLd(allFaqs)} />}
      {!!s.process?.length && <JsonLd data={howToLd(`${s.title} process`, s.process)} />}
    </>
  );
}
