import { MotionDiv } from "@/components/ui/motion-wrapper";
import { MessageSquare, PenTool, Hammer, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Free Consultation",
    description: "We visit your home, discuss your vision, and take measurements. No obligation, no pressure.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design & Quote",
    description: "Receive a detailed 3D design and transparent, fixed-price quote within 5 business days.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Build Phase",
    description: "Our licensed team completes your renovation with daily updates and strict quality control.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Final Walkthrough",
    description: "We do a thorough inspection together and won't leave until you're 100% satisfied.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--cream)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold text-cream mb-4">
            Four Steps to Your
            <br />
            <span className="italic text-primary">Dream Bathroom</span>
          </h2>
          <p className="text-cream/60 mt-3 max-w-md mx-auto text-sm leading-relaxed">
            A simple, transparent process from your first call to the final reveal.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative">

          {steps.map((step, i) => (
            <MotionDiv
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative group z-10"
            >
              <div className="lg:px-6 xl:px-8">
                {/* Step number + icon */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full border-2 border-cream/15 group-hover:border-primary/50 bg-charcoal-light flex items-center justify-center transition-colors duration-500 relative">
                    <step.icon className="w-5 h-5 text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-cream mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-cream/55 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Bottom CTA */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-medium text-sm rounded-sm hover:brightness-110 transition-all duration-300"
          >
            Start Your Project Today
          </a>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Process;