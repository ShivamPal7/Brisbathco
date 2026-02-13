import dynamic from "next/dynamic";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import { HomeJsonLd } from "@/components/seo/HomeJsonLd";

const BeforeAfter = dynamic(() => import("@/components/BeforeAfter"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Reviews = dynamic(() => import("@/components/Reviews"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));
const ServiceAreas = dynamic(() => import("@/components/ServiceAreas"));

export const revalidate = false; // Static rendering

export const metadata: Metadata = {
  title: "Bathroom Renovations Brisbane | Brisbathco",
  description:
    "Brisbane's trusted bathroom renovation specialists. Premium craftsmanship, transparent pricing & QBCC licensed. Free quotes — call 0412 346 019.",
  alternates: {
    canonical: "https://www.brisbathco.com.au",
  },
  openGraph: {
    title: "Bathroom Renovations Brisbane | Brisbathco",
    description:
      "Premium bathroom renovations across Brisbane & SEQ. QBCC licensed, 6.5-year warranty. Free no-obligation quotes.",
    url: "https://www.brisbathco.com.au",
    type: "website",
    locale: "en_AU",
  },
};

export default function Home() {
  return (
    <main>
      <HomeJsonLd />
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
    </main>
  );
}
