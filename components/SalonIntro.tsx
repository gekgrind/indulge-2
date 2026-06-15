"use client";

import { salon } from "@/lib/content";
import { Reveal, RevealLines } from "./Reveal";

export default function SalonIntro() {
  return (
    <section
      id="salon"
      className="mx-auto max-w-[1400px] px-5 py-[var(--spacing-section-sm)] md:px-10 md:py-[var(--spacing-section)]"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              {salon.label}
            </span>
          </Reveal>
          <RevealLines
            as="h2"
            start="inView"
            className="mt-6 font-display text-4xl leading-[1.05] tracking-[-0.01em] text-espresso sm:text-5xl md:text-6xl"
            lines={[
              <>Where craft meets</>,
              <>
                <span className="accent-italic">indulgence.</span>
              </>,
            ]}
          />
        </div>

        <div className="md:col-span-5 md:pt-3">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-espresso-soft md:text-xl">
              {salon.body}
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-espresso/10 pt-8">
            {salon.stats.map((s, i) => (
              <Reveal key={s.label} delay={0.15 + i * 0.08}>
                <div>
                  <div className="font-display text-3xl text-espresso md:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.15em] text-taupe">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
