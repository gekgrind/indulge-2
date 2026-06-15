import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SalonIntro from "@/components/SalonIntro";
import Marquee from "@/components/Marquee";
import ServicesAccordion from "@/components/ServicesAccordion";
import Method from "@/components/Method";
import Atelier from "@/components/Atelier";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Visit from "@/components/Visit";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <SalonIntro />
        <Marquee />
        <ServicesAccordion />
        <Method />
        <Atelier />
        <Gallery />
        <Testimonials />
        <Visit />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
