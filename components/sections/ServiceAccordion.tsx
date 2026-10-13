import Link from "next/link";
import { cap } from "@/lib/site";
import type { Service } from "@/lib/types";
import { servicePath } from "@/lib/content";

/** Category block: title + intro on the left, accordion of services on the right */
export function ServiceAccordion({ id, heading, intro, services, overview }: { id: string; heading: string; intro: string; services: Service[]; overview?: { href: string; label: string } }) {
  return (
    <section className="svc-cat" id={id} aria-labelledby={`${id}-h`}>
      <div className="container svc-cat__inner">
        <div className="svc-cat__left">
          <span className="tk-eyebrow">{services.length} services</span>
          <h2 id={`${id}-h`}>{heading}</h2>
          <p>{intro}</p>
          {overview && <Link href={overview.href} className="svc-acc__link">{overview.label} →</Link>}
        </div>
        <div className="svc-acc">
          {services.map((s) => {
            const name = cap(s.anchor ?? s.title);
            return (
              <details key={s.slug} className="svc-acc__item" open>
                <summary>
                  <h3>{name}</h3>
                  <span className="svc-acc__chev" aria-hidden="true" />
                </summary>
                <div className="svc-acc__body">
                  <p>{s.summary}</p>
                  {!!s.tags?.length && (
                    <ul className="svc-acc__tags">
                      {s.tags.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                  )}
                  <Link href={servicePath(s)} className="svc-acc__link">Explore {s.anchor ?? name} →</Link>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
