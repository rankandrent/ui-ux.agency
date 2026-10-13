import Link from "next/link";
import { lower } from "@/lib/site";

export type IndustryTab = { slug: string; title: string; intro: string; bullets: string[]; href: string; image?: string; imageAlt?: string };

/** Every industry block stays visible (no hidden tab panels); the pill row is an in-page menu. */
export function IndustryTabs({ heading, items }: { heading: string; items: IndustryTab[] }) {
  if (!items.length) return null;
  return (
    <section className="section section--warm" id="industries" aria-labelledby="ind-heading">
      <div className="container">
        <h2 id="ind-heading" className="ind__headline">{heading}</h2>
        <nav className="ind__rail" aria-label="Industries">
          {items.map((it) => (
            <a key={it.slug} className="ind__tab" href={`#panel-${it.slug}`}>
              {it.title}
            </a>
          ))}
        </nav>
        {items.map((it) => (
          <article key={it.slug} className="ind__panel ind__panel--stacked" id={`panel-${it.slug}`} aria-labelledby={`ind-${it.slug}`}>
            <div>
              <h3 id={`ind-${it.slug}`} className="ind__title">{it.title}</h3>
              <p className="ind__intro">{it.intro}</p>
              <ul className="ind__bullets">
                {it.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <Link href={it.href} className="btn btn--dark-outline">Explore {lower(it.title)} design</Link>
            </div>
            {it.image ? (
              <figure className="ind__image ind__image--photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.image} alt={it.imageAlt ?? `${it.title} UI UX design example`} width={1200} height={900} loading="lazy" decoding="async" />
              </figure>
            ) : (
              <div className="ind__image" aria-hidden="true">[ {lower(it.title)} design ]</div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
