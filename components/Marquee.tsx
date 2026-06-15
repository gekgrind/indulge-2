"use client";

import { useReducedMotion } from "framer-motion";
import { marqueeItems } from "@/lib/content";

/**
 * Infinite horizontal marquee (motion item 5).
 * Two identical tracks scroll seamlessly via a CSS keyframe loop;
 * paused entirely under prefers-reduced-motion.
 */
export default function Marquee() {
  const reduce = useReducedMotion();

  const Track = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {marqueeItems.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 font-display text-3xl text-espresso md:text-5xl">
            {item}
          </span>
          <span className="text-accent" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="border-y border-espresso/10 bg-shell py-6 md:py-8">
      <div className="flex overflow-hidden">
        <div
          className={`flex whitespace-nowrap ${reduce ? "" : "animate-marquee"}`}
        >
          <Track />
          <Track ariaHidden />
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
