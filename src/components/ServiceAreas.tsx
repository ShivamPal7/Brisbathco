import { MotionDiv } from "@/components/ui/motion-wrapper";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const suburbs = [
  { name: "Carrindale", slug: "carrindale" },
  { name: "Mount Gravatt", slug: "mount-gravatt" },
  { name: "Carindale", slug: "carindale" },
  { name: "Wishart", slug: "wishart" },
  { name: "Upper Mount Gravatt", slug: "upper-mount-gravatt" },
  { name: "Mansfield", slug: "mansfield" },
  { name: "Sunnybank", slug: "sunnybank" },
  { name: "Holland Park", slug: "holland-park" },
  { name: "Camp Hill", slug: "camp-hill" },
  { name: "Coorparoo", slug: "coorparoo" },
  { name: "Greenslopes", slug: "greenslopes" },
  { name: "Tarragindi", slug: "tarragindi" },
  { name: "Rochedale", slug: "rochedale" },
  { name: "Eight Mile Plains", slug: "eight-mile-plains" },
  { name: "Springwood", slug: "springwood" },
  { name: "Underwood", slug: "underwood" },
  { name: "Capalaba", slug: "capalaba" },
  { name: "Cleveland", slug: "cleveland" },
];

const ServiceAreas = () => {
  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 text-gold rounded-full text-xs font-medium tracking-wide uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Proudly Local
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Serving Southern Brisbane
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Based in Carrindale, we service suburbs within a 20–30 km radius across Brisbane's south side.
            Premium bathroom renovations, delivered locally.
          </p>
        </MotionDiv>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Suburb List */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">
              Suburbs We Service
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5">
              {suburbs.map((suburb, i) => (
                <MotionDiv
                  key={suburb.slug}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * Math.min(i, 8) }}
                >
                  <Link
                    href={`/bathroom-renovations/${suburb.slug}`}
                    className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-gold transition-colors py-1"
                  >
                    <ArrowRight className="w-3 h-3 text-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{suburb.name}</span>
                  </Link>
                </MotionDiv>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-lg bg-card border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Looking for bathroom renovations near you?</span>{" "}
                Brisbathco provides end-to-end renovation services across Southern Brisbane.
                From design to completion, we bring premium craftsmanship to your suburb.
              </p>
            </div>
          </MotionDiv>

          {/* Map */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg overflow-hidden border border-border shadow-elegant"
          >
            <iframe
              title="Brisbathco Service Area — Southern Brisbane"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56692.84042792!2d153.08!3d-27.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b914dfa9a02080d%3A0x402a35af3deaf70!2sCarrindale%20QLD%204152!5e0!3m2!1sen!2sau!4v1700000000000"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
            <div className="bg-card px-5 py-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-xs text-muted-foreground">
                Centred on Carrindale — 20–30 km service radius
              </span>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
