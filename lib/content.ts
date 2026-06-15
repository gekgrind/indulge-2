/**
 * Single source of truth for all site copy and business facts.
 * Edit here to update content across the page.
 */

export const brand = {
  name: "Indulge",
  fullName: "Indulge Salon",
  heroTagline: "A Colour Salon 180° from Ordinary",
  taglineTrademark: "™",
  secondaryTaglines: ["Beauty, indulged.", "Define your color. Define you."],
  positioning:
    "York's destination salon for dimensional color, balayage, premium hair extensions, color correction, and bridal beauty.",
};

export const nav = [
  { id: "salon", label: "The Salon" },
  { id: "services", label: "Services" },
  { id: "atelier", label: "The Atelier" },
  { id: "gallery", label: "Gallery" },
  { id: "visit", label: "Visit" },
];

export const links = {
  book: "https://www.indulgesalon.com/onlinebookings/",
  instagram: "https://instagram.com/indulgesalon",
  facebook: "https://facebook.com/Indulgecolorsalon",
  tiktok: "https://www.tiktok.com/@indulgecolorsalon",
};

export const social = [
  { label: "Instagram", href: links.instagram },
  { label: "Facebook", href: links.facebook },
  { label: "TikTok", href: links.tiktok },
];

export const salon = {
  label: "The Salon",
  heading: "Where craft meets indulgence.",
  body: "Two studios, one standard. From York, Pennsylvania to Lake Oconee, Georgia, every appointment begins with a real conversation — your hair, your history, the result you're reaching for. Founder Kimberly is an internationally trained master colorist who keeps her team fluent in the latest techniques. Consultations are always complimentary.",
  stats: [
    { value: "2", label: "Studios" },
    { value: "180°", label: "From Ordinary" },
    { value: "∞", label: "Complimentary Consults" },
  ],
};

export type Service = {
  number: string;
  title: string;
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Color & Balayage",
    summary: "Dimension you can see in any light.",
    items: ["Dimensional color", "Lived-in balayage", "Glossing", "Color correction"],
  },
  {
    number: "02",
    title: "Hair Extensions",
    summary: "Length and density, made undetectable.",
    items: [
      "Hand-tied",
      "Tape-in",
      "Seamless tape-in",
      "Fusion",
      "Sew-in",
      "Dreamcatchers",
    ],
  },
  {
    number: "03",
    title: "Cuts & Styling",
    summary: "Shape that grows out beautifully.",
    items: ["Precision cuts", "French haircutting", "Blowouts", "Event styling"],
  },
  {
    number: "04",
    title: "Lashes & Brows",
    summary: "The finishing detail that frames everything.",
    items: ["Lash artistry", "Brow shaping", "Tinting"],
  },
  {
    number: "05",
    title: "Skin & Waxing",
    summary: "Considered care, from the studio's spa side.",
    items: ["Guinot facials", "Peels", "Waxing"],
  },
  {
    number: "06",
    title: "Bridal & Occasion",
    summary: "Looks that hold from first toast to last dance.",
    items: ["Wedding hair", "Wedding makeup", "Trials", "Occasion styling"],
  },
];

export const marqueeItems = [
  "Dimensional Color",
  "Lived-In Balayage",
  "Hand-Tied Extensions",
  "Color Correction",
  "Bridal Beauty",
  "Precision Cuts",
  "Guinot Facials",
  "Glossing",
];

export const method = {
  label: "The Method",
  heading: "Color, Cut, Care.",
  intro: "Every result follows the same considered path.",
  steps: [
    {
      number: "01",
      title: "Color",
      body: "We read your hair in natural light and build a custom formula — dimensional, lived-in, undetectable at the root. Correction when it's called for, refinement always.",
    },
    {
      number: "02",
      title: "Cut",
      body: "Shape is everything. Precision and French haircutting techniques carve a silhouette that moves with you and grows out without losing its line.",
    },
    {
      number: "03",
      title: "Care",
      body: "We finish with the styling, gloss, and product ritual that makes the look last — and send you home knowing exactly how to keep it.",
    },
  ],
};

export const atelier = {
  label: "Signature",
  heading: "The Extension Atelier",
  body: "Extensions are our signature. Hand-tied, tape-in, fusion, sew-in, Dreamcatchers — we match method and color to your hair, never the other way around, for results no one can detect. We also build specialized solutions for hair thinning, trichotillomania, and alopecia, with the same discretion and craft.",
  methods: [
    "Hand-tied",
    "Tape-in",
    "Seamless tape-in",
    "Fusion",
    "Sew-in",
    "Dreamcatchers",
  ],
};

export type GalleryItem = {
  title: string;
  caption: string;
  src: string;
};

// Placeholder, royalty-free Unsplash imagery — swap freely.
export const gallery: GalleryItem[] = [
  {
    title: "Dimensional Color",
    caption: "Depth built in layers",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Bridal Glam",
    caption: "Looks that last the day",
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Signature Blowout",
    caption: "Volume with movement",
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Texture & Curl",
    caption: "Defined, never crunchy",
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lived-In Balayage",
    caption: "Sun-grown, hand-painted",
    src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Occasion Styling",
    caption: "For the nights that matter",
    src: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials = [
  {
    quote:
      "The color correction saved my hair — I walked out feeling like the best version of myself.",
    attribution: "Salon Guest",
  },
  {
    quote:
      "My extensions are completely undetectable. People think it grew overnight.",
    attribution: "Salon Guest",
  },
  {
    quote:
      "From the consultation to the finish, every detail felt considered. Pure indulgence.",
    attribution: "Salon Guest",
  },
];

export type Location = {
  region: string;
  name: string;
  address: string[];
  phone: string;
  phoneHref: string;
  hours: { day: string; time: string }[];
  note?: string;
};

export const locations: Location[] = [
  {
    region: "York, PA",
    name: "Indulge — York",
    address: ["970 South George Street", "York, PA 17403"],
    phone: "(717) 846-4424",
    phoneHref: "tel:+17178464424",
    hours: [
      { day: "Monday", time: "9 – 5" },
      { day: "Tuesday – Thursday", time: "9 – 9" },
      { day: "Friday", time: "9 – 2" },
      { day: "Saturday", time: "8 – 3" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  {
    region: "Lake Oconee, GA",
    name: "Indulge — Greensboro",
    address: ["1104 Market Street", "Greensboro, GA 30642"],
    phone: "(706) 999-9911",
    phoneHref: "tel:+17069999911",
    hours: [{ day: "All week", time: "By appointment" }],
    note: "By appointment",
  },
];

export const tollFree = { label: "Toll free", value: "1-877-846-4424", href: "tel:+18778464424" };

export const closing = {
  label: "New guests welcome",
  heading: "Indulge yourself.",
  body: "Consultations are always complimentary. Tell us what you're imagining — we'll build the plan to get you there.",
  bg: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=80",
};

export const products = ["Indulge Pure Originals", "Pureology", "Brazilian Blowout"];
