import { MotionDiv } from "@/components/ui/motion-wrapper";
import { ShieldCheck, DollarSign, Palette, HeartHandshake, Timer, Sparkles, ClipboardList } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    description: "QBCC licensed with comprehensive insurance. Your home and investment are fully protected.",
  },
  {
    icon: HeartHandshake,
    title: "6.5-Year Warranty",
    description: "Every renovation backed by a comprehensive 10-year structural and workmanship warranty.",
  },
  {
    icon: ClipboardList,
    title: "Free On-Site Assessment",
    description: "We provide a detailed on-site assessment to understand your needs and provide a quote.",
  },
  {
    icon: Timer,
    title: "On-Time Completion",
    description: "We commit to a timeline and stick to it. Penalties apply if we run over — that's our promise.",
  },
  {
    icon: DollarSign,
    title: "Fixed-Price Guarantee",
    description: "No hidden costs or surprise bills. The price we quote is the price you pay — guaranteed.",
  },
  {
    icon: Sparkles,
    title: "Premium Materials Only",
    description: "We source from Australia's top suppliers — no shortcuts, no compromises on quality.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-3">
            Why Brisbathco
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
            The Brisbathco Difference
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm leading-relaxed">
            We don't just renovate bathrooms — we deliver peace of mind.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <MotionDiv
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative p-6 lg:p-8 rounded-sm border border-border bg-card hover:border-gold/30 hover:shadow-elegant transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 group-hover:scale-105 transition-all duration-300">
                <reason.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;