import type { Metadata } from "next";
import { Fraunces, Jost } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indulge Salon — A Colour Salon 180° from Ordinary",
  description:
    "York's destination salon for dimensional color, balayage, premium hair extensions, color correction, and bridal beauty. Studios in York, PA and Lake Oconee, GA. Consultations always complimentary.",
  openGraph: {
    title: "Indulge Salon — Beauty, indulged.",
    description:
      "Dimensional color, lived-in balayage, undetectable extensions, and bridal beauty. Two studios, one standard.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
