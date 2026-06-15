"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { brand } from "@/lib/content";

/**
 * Branded preloader (motion item 1).
 * The logo mark fades/scales in over a brief loading state, then a
 * clip/curtain panel slides up to reveal the hero.
 * Reduced motion: shows a near-instant flash, no curtain.
 */
export default function Preloader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    // lock scroll while the preloader is on screen
    document.documentElement.classList.add("lenis-stopped");
    const t = setTimeout(() => setShow(false), reduce ? 350 : 2100);
    return () => clearTimeout(t);
  }, [reduce]);

  function unlock() {
    document.documentElement.classList.remove("lenis-stopped");
  }

  return (
    <AnimatePresence onExitComplete={unlock}>
      {show && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso"
          initial={{ y: 0 }}
          exit={
            reduce
              ? { opacity: 0, transition: { duration: 0.2 } }
              : { y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }
          }
        >
          <motion.div
            className="flex flex-col items-center gap-5"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-display text-5xl tracking-tight text-cream md:text-7xl">
              {brand.name}
              <span className="accent-italic">.</span>
            </span>
            {!reduce && (
              <span className="h-px w-24 overflow-hidden bg-taupe/30">
                <motion.span
                  className="block h-full w-full bg-accent"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
              </span>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
