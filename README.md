# Indulge Salon — Marketing Site

An original, single-page editorial marketing site for **Indulge Salon**, built fresh with
Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and Lenis smooth scroll.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Where to edit

| What | File |
| --- | --- |
| All copy, services, locations, links, testimonials | [`lib/content.ts`](lib/content.ts) |
| Colors, fonts, spacing (theme tokens) | [`app/globals.css`](app/globals.css) (`@theme` block) |
| Font families | [`app/layout.tsx`](app/layout.tsx) (next/font) |
| Section order | [`app/page.tsx`](app/page.tsx) |

### Theme tokens
Colors, type families, and section spacing are centralized in the `@theme` block of
`app/globals.css`. Change a value there and it propagates across the whole page.

### Hero video
The hero uses a muted, looping `<video>` with an Unsplash poster as the static fallback.
Drop a royalty-free file at `public/hero.mp4` to activate motion video; until then the
poster image is shown (graceful fallback, no broken state).

## Imagery
All photography uses **placeholder Unsplash URLs** — swap them in `lib/content.ts`
(gallery, atelier, hero, closing) for production assets. No third-party business assets
are used.

## Motion
Preloader, line-by-line headline reveals, Lenis momentum scroll, scroll reveals, infinite
marquee, pinned 3-step method, draggable gallery, numbered accordion, magnetic buttons,
sticky nav + overlay menu, and a parallax closing CTA. All heavy effects respect
`prefers-reduced-motion` and lighten on mobile.
