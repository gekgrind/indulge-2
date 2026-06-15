"use client";

import { atelier } from "@/lib/content";
import { Reveal, RevealLines } from "./Reveal";

const ATELIER_IMG =
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=80";

export default function Atelier() {
  return (
    <section
      id="atelier"
      className="mx-auto max-w-[1400px] px-5 py-[var(--spacing-section-sm)] md:px-10 md:py-[var(--spacing-section)]"
    >
      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
        {/* image with clip reveal */}
        <Reveal y={0} className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-shell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ATELIER_IMG}
              alt="A stylist working on hand-tied hair extensions in the studio"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="md:col-span-6 md:pl-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              {atelier.label}
            </span>
          </Reveal>
          <RevealLines
            as="h2"
            start="inView"
            className="mt-6 font-display text-4xl leading-[1.05] text-espresso sm:text-5xl md:text-6xl"
            lines={[
              <>The Extension</>,
              <>
                <span className="accent-italic">Atelier.</span>
              </>,
            ]}
          />
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-espresso-soft">
              {atelier.body}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-9 flex flex-wrap gap-2">
              {atelier.methods.map((m) => (
                <li
                  key={m}
                  className="rounded-full border border-espresso/20 px-4 py-2 text-sm text-espresso-soft"
                >
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
