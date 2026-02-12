"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bathroom.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src={heroImage}
            alt="Luxury bathroom renovation in Brisbane"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-32 lg:pt-28  pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/20 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-medium tracking-wide uppercase">Brisbane's Premium Bathroom Specialists</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-cream leading-[1.08] mb-6"
          >
            Bathrooms That
            <br />
            <span className="italic text-gold">Transform</span> Your Home
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base lg:text-lg text-cream/75 font-light max-w-lg mb-10 leading-relaxed"
          >
            Award-winning renovations crafted with precision. From concept to completion,
            we deliver luxury bathrooms across Brisbane and South East Queensland.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-accent-foreground font-medium text-sm rounded-sm hover:shadow-gold transition-all duration-300"
            >
              Get Your Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#gallery"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/25 text-cream font-medium text-sm rounded-sm hover:bg-cream/10 hover:border-cream/40 transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              View Our Work
            </a>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Hero;