"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { services } from "@/lib/content";
import { Reveal } from "./Reveal";

export default function ServicesAccordion() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="mx-auto max-w-[1400px] px-5 py-[var(--spacing-section-sm)] md:px-10 md:py-[var(--spacing-section)]"
    >
      <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Services
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-espresso sm:text-5xl md:text-6xl">
            The <span className="accent-italic">menu.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-espresso-soft">
            Six disciplines, one obsession with the finish. Every visit opens
            with a complimentary consultation.
          </p>
        </Reveal>
      </div>

      <div className="border-t border-espresso/15">
        {services.map((service, i) => {
          const isOpen = openIndex === i;
          const panelId = `service-panel-${i}`;
          const btnId = `service-button-${i}`;
          return (
            <div key={service.number} className="border-b border-espresso/15">
              <h3>
                <button
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="group flex w-full items-center gap-5 py-7 text-left md:gap-8 md:py-9"
                >
                  <span className="font-display text-sm text-accent md:text-base">
                    {service.number}
                  </span>
                  <span className="flex-1 font-display text-2xl text-espresso transition-colors group-hover:text-accent md:text-4xl">
                    {service.title}
                  </span>
                  <span className="hidden max-w-xs flex-1 text-sm text-taupe md:block">
                    {service.summary}
                  </span>
                  <span
                    className={`relative h-4 w-4 shrink-0 transition-transform duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-espresso" />
                    <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-espresso" />
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    key="content"
                    initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    animate={
                      reduce
                        ? { opacity: 1 }
                        : { height: "auto", opacity: 1 }
                    }
                    exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-x-3 gap-y-3 pb-9 pl-9 md:pl-16">
                      <p className="mb-2 w-full text-sm text-taupe md:hidden">
                        {service.summary}
                      </p>
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-espresso/20 px-4 py-2 text-sm text-espresso-soft"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
