import { MotionDiv } from "@/components/ui/motion-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much would a bathroom renovation cost?",
    answer: "Cost depends on room size, site conditions, and scope of tiling. We provide a written quote covering all trades, labour, and building materials — so you know exactly what's included.",
  },
  {
    question: "How long will my bathroom renovation take?",
    answer: "We estimate around three weeks. If we can finish sooner we will, but we prefer to set realistic expectations so we never let you down.",
  },
  {
    question: "Do you provide free quotes?",
    answer: "Yes, all consultations are free and quotes are valid for three months. We visit your site, discuss your options, and provide a detailed quotation. If extensive drafting is required, a drafting fee may apply — which is deducted from your quote if you proceed.",
  },
  {
    question: "Do you offer a warranty for your renovation services?",
    answer: "Yes, we offer a 6.5-year warranty as specified by the Queensland Building and Construction Commission (QBCC Licence Number 732730).",
  },
  {
    question: "What suburbs do you service?",
    answer: "We service suburbs across Brisbane City, North Brisbane (Kedron, Stafford, Chermside, Ashgrove, The Gap), South Brisbane (Holland Park, Carindale, Bulimba, Coorparoo), Western Brisbane (Bardon, Toowong, Mitchelton), and Brisbane City (Fortitude Valley, New Farm, Newstead). If your suburb isn't listed, feel free to ask.",
  },
  {
    question: "What insurance do you have?",
    answer: "Our company and all tradesmen are fully insured, with Public Liability cover of $10,000,000.",
  },
  {
    question: "Do I have to be on-site during the renovation?",
    answer: "No — we use a secure lock box for key access so you don't need to be home. Our tradesmen are professional, trusted, and each job is personally project-managed by one of the owners.",
  },
  {
    question: "What other rooms do you renovate?",
    answer: "We also renovate laundries, ensuites, toilets, and powder rooms.",
  },
  {
    question: "What happens to the building rubbish from the renovation?",
    answer: "A skip bin is included in our quote. We use it throughout the project and arrange collection as soon as the renovation is complete.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <MotionDiv
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
          </MotionDiv>

          <MotionDiv
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
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default FAQ;