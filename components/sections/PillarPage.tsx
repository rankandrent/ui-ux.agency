import { LeadForm } from "@/components/forms/LeadForm";
import { CtaBand, Faq, FinalCta, ServiceGrid } from "@/components/sections/Blocks";
import { FormCard, PageHero } from "@/components/sections/PageHero";
import { SemanticSections } from "@/components/sections/SemanticSections";
import { JsonLd } from "@/components/ui/JsonLd";
import { formInterests, home } from "@/content/home";
import type { Pillar } from "@/content/pillars";
import { anchorOf, servicePath, servicesInPillar } from "@/lib/content";
import { collectionLd, faqLd, webPageLd } from "@/lib/seo";
import { cap, routes } from "@/lib/site";

/** Hub page for one service category: links down to every service in it (served at /services/<pillar>/) */
export function PillarPage({ p }: { p: Pillar }) {
  const path = routes.service(p.slug);
  const services = servicesInPillar(p);
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: routes.services }, { name: p.title, path }]}
        eyebrow={p.hero.eyebrow}
        h1={p.hero.h1}
        summary={p.abstract}
        sub={p.hero.sub}
        trust
        aside={
          <FormCard title="Get a free consultation" sub="Free consultation · reply within one business day">
            <LeadForm interests={formInterests} source={`pillar: ${p.slug}`} />
          </FormCard>
        }
      />

      <SemanticSections sections={p.sections} category={p.category} label={`${cap(p.anchor)} illustration`} />

      <ServiceGrid id="pillar-services" eyebrow={p.title} heading={p.servicesHeading} intro={p.servicesIntro} services={services} allHref={routes.services} />

      <CtaBand {...home.ctaBand} />

      <FinalCta testimonial={home.testimonial}>
        <LeadForm variant="full" interests={formInterests} source={`pillar final CTA: ${p.slug}`} submitLabel="Submit" />
      </FinalCta>

      <Faq heading={p.faqHeading} items={p.faqs} />

      <JsonLd
        data={webPageLd({
          name: p.metaTitle,
          description: p.metaDescription,
          path,
          about: p.centralEntity,
          mentions: services.map((s) => anchorOf(s)),
          updated: p.updated,
        })}
      />
      <JsonLd
        data={collectionLd({
          name: cap(p.anchor),
          description: p.metaDescription,
          path,
          items: services.map((s) => ({ name: cap(anchorOf(s)), path: servicePath(s) })),
        })}
      />
      <JsonLd data={faqLd(p.faqs)} />
    </>
  );
}
