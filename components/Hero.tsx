"use client";

import { motion, useReducedMotion } from "framer-motion";
import { brand, links } from "@/lib/content";
import { RevealLines } from "./Reveal";
import MagneticButton from "./MagneticButton";
import { scrollToId } from "./SmoothScroll";

const HERO_POSTER =
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=2000&q=80";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden">
      {/* Background: muted autoplay loop video with static poster fallback.
          Drop a file at /public/hero.mp4 to activate motion video;
          until then the poster image is shown (graceful fallback). */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.08 }}
        animate={reduce ? undefined : { scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_POSTER}
          aria-hidden
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* legibility wash */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-espresso/40" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 md:px-10 md:pb-24">
        <motion.p
          className="mb-6 text-xs uppercase tracking-[0.3em] text-cream/80"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {brand.fullName} — York, PA &amp; Lake Oconee, GA
        </motion.p>

        <RevealLines
          as="h1"
          className="max-w-[16ch] font-display text-[14vw] leading-[0.92] tracking-[-0.02em] text-cream sm:text-[10vw] lg:text-[8rem]"
          lines={[
            <>A colour salon</>,
            <>
              <span className="accent-italic">180°</span> from
            </>,
            <>ordinary.</>,
          ]}
        />

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <MagneticButton
            href={links.book}
            target="_blank"
            rel="noopener noreferrer"
            variant="solid"
            className="!bg-cream !text-espresso hover:!bg-accent hover:!text-cream"
          >
            Book an Appointment
          </MagneticButton>
          <button
            onClick={() => scrollToId("services")}
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-cream/90"
          >
            Explore Services
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
