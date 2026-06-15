"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Magnetic hover micro-interaction (motion item 9).
 * The button drifts toward the cursor and springs back on leave.
 * Disabled (plain link) when reduced motion is preferred.
 * Renders as an <a>.
 */
export default function MagneticButton({
  children,
  href,
  variant = "solid",
  className = "",
  ...rest
}: {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline";
  className?: string;
} & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "onAnimationStart" | "onAnimationEnd" | "onDrag" | "onDragStart" | "onDragEnd"
>) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.45);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const base =
    "group relative inline-flex items-center justify-center rounded-full px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-espresso text-cream hover:bg-accent-deep"
      : "border border-espresso/30 text-espresso hover:border-accent hover:text-accent";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles} ${className}`}
      {...rest}
    >
      <span className="relative">{children}</span>
    </motion.a>
  );
}
