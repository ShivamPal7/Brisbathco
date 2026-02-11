"use client";

import { motion } from "framer-motion";
import { Bath, Wrench, Paintbrush, Lightbulb, Droplets, LayoutGrid, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bath,
    title: "Full Renovations",
    description: "Complete bathroom transformations from demolition to final fit-off, tailored to your vision.",
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    description: "Industry-leading waterproofing solutions that protect your investment for decades.",
  },
  {
    icon: LayoutGrid,
    title: "Tiling & Stone",
    description: "Expert installation of premium tiles, natural stone, and large-format porcelain.",
  },
  {
    icon: Wrench,
    title: "Plumbing & Fixtures",
    description: "Licensed plumbing with access to the finest Australian and European tapware brands.",
  },
  {
    icon: Paintbrush,
    title: "Custom Joinery",
    description: "Bespoke vanities and cabinetry designed to maximise your space and style.",
  },
  {
    icon: Lightbulb,
    title: "Design Consultation",
    description: "Complimentary design sessions to bring your dream bathroom to life.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm leading-relaxed">
            From design to completion, we cover every aspect of your bathroom renovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-6 lg:p-8 rounded-sm border border-border hover:border-gold/30 bg-card hover:shadow-elegant transition-all duration-300 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 group-hover:scale-105 transition-all duration-300">
                <service.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-gold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                Learn more <ArrowRight className="w-3 h-3" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;