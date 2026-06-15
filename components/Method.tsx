"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { method } from "@/lib/content";

export default function Method() {
  const reduce = useReducedMotion();

  // Reduced motion / no-pin fallback: simple stacked list.
  if (reduce) {
    return (
      <section className="bg-espresso px-5 py-[var(--spacing-section-sm)] text-cream md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            {method.label}
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">{method.heading}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {method.steps.map((s) => (
              <div key={s.number}>
                <div className="font-display text-2xl text-accent">{s.number}</div>
                <h3 className="mt-2 font-display text-3xl">{s.title}</h3>
                <p className="mt-3 text-cream/70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return <MethodPinned />;
}

function MethodPinned() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const count = method.steps.length;
    // clamp into [0, count-1]
    const idx = Math.min(count - 1, Math.floor(v * count));
    setActive(idx < 0 ? 0 : idx);
  });

  return (
    <section ref={ref} className="relative h-[300vh] bg-espresso text-cream">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 md:grid-cols-12 md:px-10">
          {/* left: label + progress */}
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              {method.label}
            </span>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] md:text-6xl">
              {method.heading}
            </h2>
            <p className="mt-5 max-w-sm text-cream/60">{method.intro}</p>

            <div className="mt-12 flex gap-6">
              {method.steps.map((s, i) => (
                <div key={s.number} className="flex items-center gap-2">
                  <span
                    className={`font-display text-sm transition-colors duration-300 ${
                      i === active ? "text-accent" : "text-cream/30"
                    }`}
                  >
                    {s.number}
                  </span>
                  <span
                    className={`h-px transition-all duration-500 ${
                      i === active ? "w-10 bg-accent" : "w-5 bg-cream/20"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* right: changing step content */}
          <div className="relative md:col-span-7 md:pl-10">
            <div className="relative min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="font-display text-[7rem] leading-none text-accent/25 md:text-[10rem]">
                    {method.steps[active].number}
                  </div>
                  <h3 className="mt-2 font-display text-5xl md:text-7xl">
                    {method.steps[active].title}
                  </h3>
                  <p className="mt-6 max-w-md text-lg text-cream/75">
                    {method.steps[active].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
