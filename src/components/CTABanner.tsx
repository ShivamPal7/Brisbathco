"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

import { CONTACT_DETAILS } from "@/constants";

const CTABanner = () => {
  return (
    <section className="py-16 lg:py-20 bg-gold relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--accent-foreground)) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-accent-foreground mb-4">
            Ready to Love Your Bathroom?
          </h2>
          <p className="text-accent-foreground/80 text-sm lg:text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Book your free, no-obligation consultation today and get a detailed 3D design
            plus fixed-price quote — all at zero cost.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium text-sm rounded-sm hover:opacity-90 transition-opacity"
            >
              Get Your Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={CONTACT_DETAILS.phone.href}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-accent-foreground/30 text-accent-foreground font-medium text-sm rounded-sm hover:bg-accent-foreground/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {CONTACT_DETAILS.phone.display}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
