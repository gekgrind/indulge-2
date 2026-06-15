"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { brand, nav, links, social } from "@/lib/content";
import { scrollToId } from "./SmoothScroll";

export default function Nav() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll while overlay is open + close on Escape
  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("lenis-stopped");
    } else {
      document.documentElement.classList.remove("lenis-stopped");
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function go(id: string) {
    setOpen(false);
    // wait a tick for the overlay to begin closing before scrolling
    setTimeout(() => scrollToId(id), reduce ? 0 : 120);
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-cream/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 md:px-10">
          <button
            onClick={() => go("top")}
            className="font-display text-2xl tracking-tight text-espresso"
            aria-label="Indulge — back to top"
          >
            {brand.name}
            <span className="accent-italic">.</span>
          </button>

          {/* desktop anchor links */}
          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {nav.map((item, i) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="group flex items-baseline gap-1.5 text-sm text-espresso/80 transition-colors hover:text-accent"
              >
                <span className="font-display text-[0.7rem] text-accent/70">
                  0{i + 1}
                </span>
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </span>
              </button>
            ))}
            <a
              href={links.book}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-espresso px-6 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-cream transition-colors hover:bg-accent-deep"
            >
              Book
            </a>
          </nav>

          {/* mobile menu toggle */}
          <button
            onClick={() => setOpen(true)}
            className="flex flex-col items-end gap-1.5 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="block h-px w-7 bg-espresso" />
            <span className="block h-px w-5 bg-espresso" />
          </button>
        </div>
      </header>

      {/* full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col bg-espresso px-6 py-6 text-cream"
            initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl">
                {brand.name}
                <span className="accent-italic">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-xs uppercase tracking-[0.2em] text-taupe"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            <nav className="mt-auto flex flex-col gap-1" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className="flex items-baseline gap-3 py-2 text-left font-display text-4xl"
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + i * 0.07, duration: 0.5 }}
                >
                  <span className="font-sans text-sm text-accent">0{i + 1}</span>
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-10">
              <a
                href={links.book}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cream px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-espresso"
              >
                Book an Appointment
              </a>
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.18em] text-taupe hover:text-cream"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
