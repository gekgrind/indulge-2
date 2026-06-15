"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gallery } from "@/lib/content";
import { Reveal } from "./Reveal";

export default function Gallery() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !trackRef.current) return;
      const diff =
        trackRef.current.scrollWidth - containerRef.current.offsetWidth;
      setDragWidth(diff > 0 ? diff : 0);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const cards = gallery.map((item) => (
    <figure
      key={item.title}
      className="relative aspect-[3/4] w-[78vw] shrink-0 overflow-hidden rounded-sm bg-shell sm:w-[46vw] lg:w-[28vw]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.title}
        className="pointer-events-none h-full w-full select-none object-cover"
        loading="lazy"
        draggable={false}
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/80 to-transparent p-5">
        <div className="font-display text-xl text-cream">{item.title}</div>
        <div className="text-xs uppercase tracking-[0.15em] text-cream/70">
          {item.caption}
        </div>
      </figcaption>
    </figure>
  ));

  return (
    <section
      id="gallery"
      className="overflow-hidden py-[var(--spacing-section-sm)] md:py-[var(--spacing-section)]"
    >
      <div className="mx-auto mb-10 flex max-w-[1400px] items-end justify-between px-5 md:mb-14 md:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Gallery
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-espresso sm:text-5xl md:text-6xl">
            The <span className="accent-italic">work.</span>
          </h2>
        </Reveal>
        <p className="hidden text-sm uppercase tracking-[0.15em] text-taupe md:block">
          {reduce ? "Scroll" : "Drag"} to explore →
        </p>
      </div>

      <div ref={containerRef} className="px-5 md:px-10">
        {reduce ? (
          <div className="no-scrollbar flex gap-5 overflow-x-auto pb-2">
            {cards}
          </div>
        ) : (
          <motion.div
            ref={trackRef}
            className="flex cursor-grab gap-5 active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -dragWidth, right: 0 }}
            dragElastic={0.08}
            dragTransition={{ power: 0.3, timeConstant: 280, bounceStiffness: 260, bounceDamping: 36 }}
          >
            {cards}
          </motion.div>
        )}
      </div>
    </section>
  );
}
