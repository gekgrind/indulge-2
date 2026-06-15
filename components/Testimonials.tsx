"use client";

import { testimonials } from "@/lib/content";
import { Reveal } from "./Reveal";

export default function Testimonials() {
  return (
    <section className="bg-shell px-5 py-[var(--spacing-section-sm)] md:px-10 md:py-[var(--spacing-section)]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            In their words
          </span>
        </Reveal>
        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="flex h-full flex-col">
                <span className="font-display text-5xl leading-none text-accent" aria-hidden>
                  &ldquo;
                </span>
                <blockquote className="mt-4 font-display text-2xl leading-snug text-espresso md:text-[1.75rem]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-taupe">
                  — {t.attribution}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
