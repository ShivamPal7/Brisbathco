"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does a full bathroom renovation cost in Brisbane?",
    answer: "Our full bathroom renovations typically range from $18,000 to $45,000 depending on size, materials, and complexity. We provide a detailed, fixed-price quote after our free in-home consultation — no hidden costs, ever.",
  },
  {
    question: "How long does a typical bathroom renovation take?",
    answer: "Most standard bathroom renovations are completed within 10–15 business days. Larger or more complex projects (e.g., structural changes, custom joinery) may take 3–4 weeks. We provide a clear timeline upfront and commit to it.",
  },
  {
    question: "Do you handle all the trades, or do I need to hire separately?",
    answer: "We manage everything from start to finish — demolition, plumbing, electrical, waterproofing, tiling, painting, and final fit-off. You have one point of contact and zero hassle.",
  },
  {
    question: "What warranty do you offer on your work?",
    answer: "Every Brisbathco renovation comes with a 10-year structural and workmanship warranty. All fixtures and materials carry their manufacturer warranties as well. We stand behind our work completely.",
  },
  {
    question: "Can I stay in my home during the renovation?",
    answer: "Absolutely. We use dust barriers, protective sheeting, and maintain a clean worksite daily. If you have a second bathroom, daily life is barely interrupted. We'll work with you to minimise disruption.",
  },
  {
    question: "What areas in Brisbane do you service?",
    answer: "We service all of Brisbane and South East Queensland including Gold Coast, Sunshine Coast, Ipswich, Redlands, and Logan. Contact us to confirm availability in your suburb.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-3">
              FAQs
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Common Questions,
              <br />
              <span className="italic">Clear Answers</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md text-sm">
              Everything you need to know before starting your bathroom renovation.
              Can't find your answer? Get in touch — we're always happy to chat.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-gold hover:underline underline-offset-4 transition-all"
            >
              Still have questions? Contact us →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-base font-medium text-foreground hover:text-gold transition-colors [&[data-state=open]]:text-gold py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;