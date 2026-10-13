"use client";

import { useState } from "react";
import type { Step } from "@/lib/types";

export function Process({ id = "process", heading, steps }: { id?: string; heading: string; steps: Step[] }) {
  const [active, setActive] = useState(0);
  const n = String(active + 1).padStart(2, "0");
  return (
    <section className="section section--light" id={id} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <h2 id={`${id}-heading`} className="process__headline">{heading}</h2>
        <div className="process__split">
          <div className="process__visual">
            <div className="process__numeral" aria-hidden="true">{n}</div>
            <div className="process__illustration" aria-hidden="true">
              {steps.map((_, i) => steps.length - 1 - i).map((i) => (
                <div key={i} className={`process__layer${i === active ? " is-active" : ""}`} />
              ))}
            </div>
          </div>
          <ol className="process__accordion">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className={`process__step${i === active ? " is-active" : ""}`}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <div className="process__step-head">
                  <span className="process__step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="process__step-title">{s.title}</h3>
                </div>
                <div className="process__step-body">
                  <p dangerouslySetInnerHTML={{ __html: s.body }} />
                  {(s.deliverables || s.timeline) && (
                    <div className="process__meta">
                      {s.deliverables && <span><b className="process__label">Deliverables:</b> {s.deliverables}</span>}
                      {s.timeline && <span><b className="process__label">Timeline:</b> {s.timeline}</span>}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
