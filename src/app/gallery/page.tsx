"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MotionDiv } from "@/components/ui/motion-wrapper";
import {
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Phone,
} from "lucide-react";

import p1  from "@/assets/projects/project1.jpg";
import p2  from "@/assets/projects/project2.jpg";
import p3  from "@/assets/projects/project3.jpg";
import p4  from "@/assets/projects/project4.png";
import p6  from "@/assets/projects/project6.jpg";
import p7  from "@/assets/projects/project7.jpg";
import p8  from "@/assets/projects/project8.jpg";
import p9  from "@/assets/projects/project9.jpg";
import p10 from "@/assets/projects/project10.jpg";
import p11 from "@/assets/projects/project11.jpg";
import p12 from "@/assets/projects/project12.jpg";
import { CONTACT_DETAILS } from "@/constants";

interface GalleryItem {
  src: StaticImageData;
  alt: string;
  // natural width/height so Next.js can render without fill + no cropping
  w: number;
  h: number;
}

// Aspect ratios measured from actual files:
//  project1  640×640    → 1:1
//  project2  640×640    → 1:1
//  project3  640×640    → 1:1 (small square)
//  project4  landscape  → ~4:3
//  project6  3024×4032  → 3:4 portrait
//  project7  3024×4032  → 3:4 portrait
//  project8  3024×4032  → 3:4 portrait
//  project9  3024×4032  → 3:4 portrait
//  project10 4000×3000  → 4:3 landscape
//  project11 ~portrait
//  project12 ~portrait
const galleryItems: GalleryItem[] = [
  { src: p1,  alt: "Modern double vanity bathroom renovation",          w: 640,  h: 640  },
  { src: p6,  alt: "Contemporary floor-to-ceiling tiled ensuite",       w: 3024, h: 4032 },
  { src: p2,  alt: "Walk-in shower with brass fixtures",                w: 640,  h: 640  },
  { src: p7,  alt: "Frameless glass shower with stone tiles",           w: 3024, h: 4032 },
  { src: p10, alt: "Double-sink vanity with gold fixtures",             w: 4000, h: 3000 },
  { src: p8,  alt: "Coastal-inspired bathroom with natural stone",      w: 3024, h: 4032 },
  { src: p3,  alt: "Minimalist powder room design",                     w: 640,  h: 640  },
  { src: p9,  alt: "Herringbone tile feature wall bathroom",            w: 3024, h: 4032 },
  { src: p4,  alt: "Luxury master ensuite with freestanding bath",      w: 1200, h: 900  },
  { src: p11, alt: "Compact powder room with marble accents",           w: 3024, h: 4032 },
  { src: p12, alt: "Luxury freestanding bath full renovation",          w: 3024, h: 4032 },
];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open  = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev  = () => setLightbox((p) => p !== null ? (p - 1 + galleryItems.length) % galleryItems.length : null);
  const next  = () => setLightbox((p) => p !== null ? (p + 1) % galleryItems.length : null);

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar forceScrolled />

      {/* ── Header — same style as Blogs page ── */}
      <div className="flex-grow pb-20 lg:pb-32 pt-32 lg:pt-40">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-gold font-medium text-sm tracking-[0.2em] uppercase mb-4 pl-1">
                Portfolio
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-medium mb-6 leading-[1.1]">
                Our <span className="text-muted-foreground italic">Gallery</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                Handcrafted bathroom renovations across Brisbane &amp; South East Queensland —
                each space a testament to precision craftsmanship.
              </p>
            </MotionDiv>
          </div>

          {/* ── Masonry Grid — images at natural aspect ratio, no cropping ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
          >
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                onClick={() => open(i)}
                className="relative break-inside-avoid overflow-hidden rounded-sm cursor-pointer group shadow-elegant"
              >
                {/* Natural aspect ratio — no fill, width=100%, height scales automatically */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  placeholder="blur"
                  quality={85}
                  priority={i < 3}
                  loading={i < 3 ? "eager" : "lazy"}
                />

                {/* Hover overlay — subtle, no text */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-400 rounded-sm" />

                {/* Thin gold border on hover */}
                <div className="absolute inset-0 ring-0 group-hover:ring-1 group-hover:ring-gold/50 rounded-sm transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ── Stats Strip ── */}
      <section className="bg-charcoal py-14 border-y border-cream/5">
        <div className="container mx-auto px-4 lg:px-8">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "1000+",  label: "Projects Completed"   },
              { value: "50+",   label: "Years Experience"     },
              { value: "6.5yr", label: "Workmanship Warranty" },
              { value: "4.9★",  label: "Average Rating"       },
            ].map((stat, i) => (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p className="font-display text-3xl lg:text-4xl font-semibold text-gold mb-1">{stat.value}</p>
                <p className="text-cream/55 text-sm">{stat.label}</p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-gold font-medium text-xs tracking-[0.22em] uppercase mb-4">Ready to Begin?</p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-5 leading-tight">
              Let&apos;s Create Your <span className="italic text-gold">Dream Bathroom</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm mb-8 max-w-md mx-auto">
              Every space you&apos;ve seen was someone&apos;s vision brought to life. Yours is next —
              book a free no-obligation consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-accent-foreground font-medium text-sm rounded-sm hover:shadow-gold transition-all duration-300"
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={CONTACT_DETAILS.phone.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium text-sm rounded-sm hover:border-gold/50 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-gold" />
                {CONTACT_DETAILS.phone.display}
              </a>
            </div>
          </MotionDiv>
        </div>
      </section>

      <Footer />

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 backdrop-blur-sm p-4"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* Close */}
              <button
                onClick={close}
                aria-label="Close"
                className="absolute -top-11 right-0 w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-cream hover:border-cream/50 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Preload prev + next images so navigation is instant */}
              {(
                [
                  (lightbox - 1 + galleryItems.length) % galleryItems.length,
                  (lightbox + 1) % galleryItems.length,
                ] as number[]
              ).map((idx) => (
                <Image
                  key={`pre-${idx}`}
                  src={galleryItems[idx].src}
                  alt=""
                  width={galleryItems[idx].w}
                  height={galleryItems[idx].h}
                  priority
                  placeholder="blur"
                  quality={90}
                  aria-hidden
                  className="sr-only"
                />
              ))}

              {/* Image at natural ratio */}
              <div className="rounded-sm overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightbox}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image
                      src={galleryItems[lightbox].src}
                      alt={galleryItems[lightbox].alt}
                      width={galleryItems[lightbox].w}
                      height={galleryItems[lightbox].h}
                      priority
                      placeholder="blur"
                      quality={90}
                      className="w-full h-auto block"
                      style={{ maxHeight: "82vh", objectFit: "contain" }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Prev / Next */}
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:border-gold transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:border-gold transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dot indicators */}
              <div className="flex justify-center gap-1.5 mt-4">
                {galleryItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                    className={`rounded-full transition-all duration-300 ${
                      i === lightbox ? "w-5 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-cream/30 hover:bg-cream/60"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
