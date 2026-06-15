"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useMemo, type ReactNode, type ElementType } from "react";

/**
 * Scroll-triggered reveal (motion item 4).
 * Fades + slides children up as they enter the viewport.
 * Becomes a no-op (instant, no transform) under prefers-reduced-motion.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  // Memoized so the generated motion component is stable across renders.
  const MotionTag = useMemo(() => motion.create(as as ElementType), [as]);

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

const lineVariants: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

/**
 * Staggered, line-by-line headline reveal (motion items 2 & 4).
 * Each line is masked and slides up in sequence.
 * `lines` may contain ReactNodes so an accent word can be italic.
 */
export function RevealLines({
  lines,
  as: Tag = "h2",
  className,
  start = "visible",
}: {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  /** "visible" reveals on load (hero); "inView" reveals on scroll. */
  start?: "visible" | "inView";
}) {
  const reduce = useReducedMotion();
  const Heading = Tag as ElementType;

  if (reduce) {
    return (
      <Heading className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Heading>
    );
  }

  const animateProps =
    start === "visible"
      ? { animate: "visible" as const }
      : {
          whileInView: "visible" as const,
          viewport: { once: true, margin: "0px 0px -10% 0px" },
        };

  return (
    <Heading className={className}>
      <motion.span className="block" initial="hidden" {...animateProps}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden pb-[0.12em]">
            <motion.span
              className="block will-change-transform"
              custom={i}
              variants={lineVariants}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Heading>
  );
}
