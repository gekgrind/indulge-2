"use client";

import { locations, tollFree, links } from "@/lib/content";
import { Reveal } from "./Reveal";

export default function Visit() {
  return (
    <section
      id="visit"
      className="mx-auto max-w-[1400px] px-5 py-[var(--spacing-section-sm)] md:px-10 md:py-[var(--spacing-section)]"
    >
      <Reveal>
        <span className="text-xs uppercase tracking-[0.3em] text-accent">Visit &amp; Book</span>
        <h2 className="mt-4 font-display text-4xl leading-[1.05] text-espresso sm:text-5xl md:text-6xl">
          Two studios, <span className="accent-italic">one standard.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
        {locations.map((loc, i) => (
          <Reveal key={loc.name} delay={i * 0.1}>
            <div className="flex h-full flex-col border-t border-espresso/15 pt-8">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl text-espresso md:text-3xl">
                  {loc.region}
                </h3>
                {loc.note && (
                  <span className="text-xs uppercase tracking-[0.18em] text-taupe">
                    {loc.note}
                  </span>
                )}
              </div>

              <address className="mt-5 not-italic text-espresso-soft">
                {loc.address.map((line) => (
                  <div key={line}>{line}</div>
                ))}
                <a
                  href={loc.phoneHref}
                  className="mt-3 inline-block text-espresso underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
                >
                  {loc.phone}
                </a>
              </address>

              <dl className="mt-7 space-y-2 text-sm">
                {loc.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between gap-4 border-b border-espresso/10 pb-2"
                  >
                    <dt className="text-taupe">{h.day}</dt>
                    <dd className="text-espresso-soft">{h.time}</dd>
                  </div>
                ))}
              </dl>

              <a
                href={links.book}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 text-sm uppercase tracking-[0.18em] text-accent transition-colors hover:text-accent-deep"
              >
                Book here
                <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-12 text-sm text-taupe">
          {tollFree.label}:{" "}
          <a
            href={tollFree.href}
            className="text-espresso-soft underline decoration-accent/40 underline-offset-4 hover:text-accent"
          >
            {tollFree.value}
          </a>
        </p>
      </Reveal>
    </section>
  );
}
