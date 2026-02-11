import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />
      <WhyChooseUs />
      <Process />
      <Gallery />
      <Reviews />
      <ServiceAreas />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
