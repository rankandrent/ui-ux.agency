import { home } from "@/content/home";

type Member = (typeof home.team.items)[number];

const roleOf = (m: Member) => m.role.split("|")[0].trim();

/** One looping column: the list is rendered twice so the CSS loop has no visible seam.
 * The second copy is hidden from assistive tech and the tab order, so each person is reached once. */
function Column({ items, dir }: { items: Member[]; dir: "down" | "up" }) {
  return (
    <div className={`tmq__col tmq__col--${dir}`}>
      <ul className="tmq__track">
        {[0, 1].map((copy) =>
          items.map((m) => (
            <li key={`${copy}-${m.name}`} className="tmq__card" aria-hidden={copy === 1 || undefined}>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener"
                className="tmq__link"
                aria-label={`${m.name}, ${roleOf(m)} on LinkedIn (opens in a new tab)`}
                tabIndex={copy === 1 ? -1 : undefined}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.photo} alt="" width={900} height={900} loading="eager" decoding="async" />
                <span className="tmq__label">
                  <span className="tmq__dot" aria-hidden="true" />
                  <span className="tmq__who">
                    <strong>{m.name}</strong>
                    {roleOf(m)}
                  </span>
                  <svg className="tmq__in" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4V9.5Z" /></svg>
                </span>
              </a>
            </li>
          )),
        )}
      </ul>
    </div>
  );
}

/** Home hero: the whole team in two columns, left scrolling down and right scrolling up. Each card opens the person's LinkedIn. */
export function TeamColumns() {
  const items = home.team.items;
  return (
    <aside className="tmq" aria-label="Our design team">
      <Column items={items.filter((_, i) => i % 2 === 0)} dir="down" />
      <Column items={items.filter((_, i) => i % 2 === 1)} dir="up" />
    </aside>
  );
}
