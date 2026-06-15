"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { closing, links } from "@/lib/content";
import { RevealLines, Reveal } from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function ClosingCTA() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // parallax: image drifts slower than the scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[85vh] items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-x-0 -top-[12%] -bottom-[12%]"
        style={reduce ? undefined : { y }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={closing.bg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-espresso/65" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-24 text-cream md:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-cream/70">
            {closing.label}
          </span>
        </Reveal>
        <RevealLines
          as="h2"
          start="inView"
          className="mt-6 font-display text-[16vw] leading-[0.95] tracking-[-0.02em] sm:text-[12vw] md:text-[9rem]"
          lines={[
            <>
              Indulge <span className="accent-italic">yourself.</span>
            </>,
          ]}
        />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-md text-lg text-cream/80">{closing.body}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10">
            <MagneticButton
              href={links.book}
              target="_blank"
              rel="noopener noreferrer"
              className="!bg-cream !text-espresso hover:!bg-accent hover:!text-cream"
            >
              Book an Appointment
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
