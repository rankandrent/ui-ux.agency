import { home } from "@/content/home";

type Member = (typeof home.team.items)[number];

/** One looping column: the list is rendered twice so the CSS loop has no visible seam. */
function Column({ items, dir }: { items: Member[]; dir: "down" | "up" }) {
  return (
    <div className={`tmq__col tmq__col--${dir}`}>
      <ul className="tmq__track">
        {[0, 1].map((copy) =>
          items.map((m) => (
            <li key={`${copy}-${m.name}`} className="tmq__card" aria-hidden={copy === 1 || undefined}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.photo} alt={copy === 0 ? `${m.name}, ${m.role.split("|")[0].trim()}` : ""} width={900} height={900} loading="eager" decoding="async" />
              <span className="tmq__label">
                <span className="tmq__dot" aria-hidden="true" />
                {m.role.split("|")[0].trim()}
              </span>
            </li>
          )),
        )}
      </ul>
    </div>
  );
}

/** Home hero: the whole team in two columns, left scrolling down and right scrolling up. */
export function TeamColumns() {
  const items = home.team.items;
  return (
    <aside className="tmq" aria-label="Our design team">
      <Column items={items.filter((_, i) => i % 2 === 0)} dir="down" />
      <Column items={items.filter((_, i) => i % 2 === 1)} dir="up" />
    </aside>
  );
}
