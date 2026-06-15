"use client";

import { brand, social, links, products, locations } from "@/lib/content";
import { scrollToId } from "./SmoothScroll";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-espresso px-5 pb-10 pt-16 text-cream md:px-10 md:pt-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-12 border-b border-cream/15 pb-12 md:flex-row">
          <div>
            <button
              onClick={() => scrollToId("top")}
              className="font-display text-4xl tracking-tight md:text-5xl"
              aria-label="Back to top"
            >
              {brand.name}
              <span className="accent-italic">.</span>
            </button>
            <p className="mt-4 max-w-xs text-sm text-cream/60">
              {brand.heroTagline}
              {brand.taglineTrademark}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-taupe">
                Studios
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-cream/70">
                {locations.map((l) => (
                  <li key={l.region}>{l.region}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-taupe">
                Follow
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream/70 transition-colors hover:text-accent"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-taupe">
                Products
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-cream/70">
                {products.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-cream/50 sm:flex-row sm:items-center">
          <span>
            © {year} {brand.fullName}. All rights reserved.
          </span>
          <a
            href={links.book}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-[0.18em] text-cream/70 transition-colors hover:text-accent"
          >
            Book online →
          </a>
        </div>
      </div>
    </footer>
  );
}
