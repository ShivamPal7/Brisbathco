import { MotionDiv } from "@/components/ui/motion-wrapper";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const serviceRegions = [
  {
    region: "Brisbane Northern Suburbs",
    suburbs: [
      { name: "Kedron", slug: "kedron" },
      { name: "Stafford", slug: "stafford" },
      { name: "Stafford Heights", slug: "stafford-heights" },
      { name: "Chermside", slug: "chermside" },
      { name: "Ashgrove", slug: "ashgrove" },
      { name: "Alderley", slug: "alderley" },
      { name: "Newmarket", slug: "newmarket" },
      { name: "Windsor", slug: "windsor" },
      { name: "The Gap", slug: "the-gap" },
    ],
  },
  {
    region: "Brisbane Southern Suburbs",
    suburbs: [
      { name: "Holland Park", slug: "holland-park" },
      { name: "Carindale", slug: "carindale" },
      { name: "Carina", slug: "carina" },
      { name: "Bulimba", slug: "bulimba" },
      { name: "Coorparoo", slug: "coorparoo" },
      { name: "West End", slug: "west-end" },
      { name: "Kenmore", slug: "kenmore" },
    ],
  },
  {
    region: "Brisbane Western Suburbs",
    suburbs: [
      { name: "Bardon", slug: "bardon" },
      { name: "Toowong", slug: "toowong" },
      { name: "Mitchelton", slug: "mitchelton" },
      { name: "Chelmer", slug: "chelmer" },
    ],
  },
  {
    region: "Brisbane City Suburbs",
    suburbs: [
      { name: "Fortitude Valley", slug: "fortitude-valley" },
      { name: "New Farm", slug: "new-farm" },
      { name: "Newstead", slug: "newstead" },
      { name: "Bowen Hills", slug: "bowen-hills" },
      { name: "Hawthorne", slug: "hawthorne" },
    ],
  },
];

const ServiceAreas = () => {
  let globalIndex = 0;

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
          <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-3">
            Where We Work
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
            Brisbane Service Areas
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm leading-relaxed">
            Premium bathroom renovations across Brisbane City and surrounding areas.
          </p>
        </MotionDiv>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Suburb List by Region */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl"
          >
            <div className="space-y-5">
              {serviceRegions.map((region) => (
                <div key={region.region}>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2 pb-1.5 border-border">
                    {region.region}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-0.5">
                    {region.suburbs.map((suburb) => {
                      const i = globalIndex++;
                      return (
                        <MotionDiv
                          key={suburb.slug}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.03 * Math.min(i, 12) }}
                        >
                          <Link
                            href={`/bathroom-renovations/${suburb.slug}`}
                            className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-gold transition-colors py-1"
                          >
                            <ArrowRight className="w-3 h-3 text-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            <span>{suburb.name}</span>
                          </Link>
                        </MotionDiv>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-lg bg-card border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Looking for bathroom renovations near you?</span>{" "}
                The Brisbane Bathroom Company provides end-to-end renovation services across Brisbane.
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
              title="Brisbathco Service Area — Brisbane"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113580.45474505498!2d152.9600!3d-27.4698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf70!2sBrisbane%20QLD!5e0!3m2!1sen!2sau!4v1700000000000"
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
                Serving suburbs across Brisbane City, North, South &amp; West Brisbane
              </span>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;

