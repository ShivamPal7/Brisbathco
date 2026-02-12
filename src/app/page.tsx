import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

const BeforeAfter = dynamic(() => import("@/components/BeforeAfter"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Reviews = dynamic(() => import("@/components/Reviews"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));
const ServiceAreas = dynamic(() => import("@/components/ServiceAreas"));

export const revalidate = false; // Static rendering

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />
      <WhyChooseUs />
      <Process />
      <Gallery />
      <Reviews />
      <CTABanner />
      <FAQ />
      <Contact />
      <ServiceAreas />
      <Footer />
    </>
  );
}
