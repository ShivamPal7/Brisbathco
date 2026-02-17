import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { blogContent } from "@/data/blog-content";
import { MotionDiv } from "@/components/ui/motion-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Generate static params for all blogs
export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = blogContent[slug];
  
  if (!content) {
    return {
      title: "Blog Not Found | Brisbathco",
    };
  }

  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogInfo = blogs.find((b) => b.slug === slug);
  const content = blogContent[slug];

  if (!blogInfo || !content) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar forceScrolled={true} />

      <article className="flex-grow pt-24 lg:pt-32 pb-20">
        {/* Breadcrumb / Back Link */}
        <div className="container mx-auto px-4 lg:px-8 mb-8 lg:mb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>

        {/* Hero Section */}
        <header className="container mx-auto px-4 lg:px-8 mb-12 lg:mb-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 text-sm font-medium text-gold mb-6 uppercase tracking-wider">
              <span>{blogInfo.category}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>{blogInfo.readTime}</span>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              {blogInfo.title}
            </h1>

            <time className="block text-muted-foreground text-sm italic mb-10">
              Published on {blogInfo.date}
            </time>
          </MotionDiv>

           {/* Featured Image */}
          <MotionDiv
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative aspect-video w-full max-w-5xl mx-auto rounded-sm overflow-hidden shadow-elegant"
          >
            <Image
              src={blogInfo.image}
              alt={blogInfo.title}
              fill
              className="object-cover"
              priority
            />
          </MotionDiv>
        </header>

        {/* Content Body */}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-display prose-headings:font-medium prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold marker:text-gold">
            
            {content.sections.map((section, index) => {
              switch (section.type) {
                case "paragraph":
                  return (
                    <MotionDiv
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="mb-8"
                    >
                      <p>{section.content}</p>
                    </MotionDiv>
                  );
                
                case "heading":
                  const HeadingTag = `h${section.level}` as "h2" | "h3";
                  return (
                    <MotionDiv
                      key={index}
                       initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                       className="mt-12 mb-6"
                    >
                      <HeadingTag className={section.level === 2 ? "text-2xl md:text-3xl text-foreground" : "text-xl md:text-2xl text-foreground/90"}>
                        {section.content}
                      </HeadingTag>
                    </MotionDiv>
                  );
                
                case "list":
                  return (
                    <MotionDiv key={index} className="mb-8 ml-4">
                      <ul className="space-y-3 list-disc pl-4">
                        {section.items.map((item, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                      </ul>
                    </MotionDiv>
                  );

                case "table":
                  return (
                    <div key={index} className="my-10 overflow-x-auto rounded-lg border border-border shadow-sm">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-muted/30 text-foreground font-display font-medium border-b border-border">
                          <tr>
                            {section.headers.map((header, i) => (
                              <th key={i} className="px-6 py-4 whitespace-nowrap">{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50 bg-card/30">
                          {section.rows.map((row, rI) => (
                            <tr key={rI} className="hover:bg-muted/20 transition-colors">
                              {row.map((cell, cI) => (
                                <td key={cI} className="px-6 py-4 text-muted-foreground">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                 
                case "cta":
                  return (
                    <div key={index} className="my-14 p-8 md:p-12 bg-charcoal rounded-sm text-center shadow-elegant relative overflow-hidden group">
                       <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors duration-500" />
                       <h3 className="relative font-display text-2xl md:text-3xl text-cream mb-4">Ready to Transform Your Bathroom?</h3>
                       <p className="relative text-cream/80 mb-8 max-w-xl mx-auto">Book a free consultation with our design experts and get a detailed quote for your project.</p>
                       <Link 
                          href={section.href}
                          className="relative inline-block px-8 py-3 bg-gold text-white font-medium rounded-sm hover:bg-white hover:text-charcoal transition-all duration-300 shadow-gold"
                       >
                          {section.text}
                       </Link>
                    </div>
                  );

                case "quote":
                  return (
                    <MotionDiv
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="my-12 pl-6 md:pl-10 border-l-4 border-gold py-2 relative"
                    >
                       <p className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed mb-4">
                        "{section.text}"
                       </p>
                       <cite className="block text-sm font-medium text-gold uppercase tracking-wider not-italic">
                        — {section.author}
                       </cite>
                    </MotionDiv>
                  );

                case "pros-cons":
                  return (
                    <div key={index} className="my-12 grid md:grid-cols-2 gap-8">
                       <MotionDiv 
                         initial={{ opacity: 0, x: -10 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         className="bg-green-50/50 p-6 rounded-lg border border-green-100"
                       >
                          <h4 className="font-display text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                             Pros
                          </h4>
                          <ul className="space-y-2">
                             {section.pros.map((pro, pI) => (
                                <li key={pI} className="flex items-start gap-2 text-sm text-green-900/80">
                                   <span className="text-green-600 mt-0.5">✓</span>
                                   {pro}
                                </li>
                             ))}
                          </ul>
                       </MotionDiv>
                       <MotionDiv 
                         initial={{ opacity: 0, x: 10 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         className="bg-red-50/50 p-6 rounded-lg border border-red-100"
                       >
                          <h4 className="font-display text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                             Cons
                          </h4>
                          <ul className="space-y-2">
                             {section.cons.map((con, cI) => (
                                <li key={cI} className="flex items-start gap-2 text-sm text-red-900/80">
                                   <span className="text-red-500 mt-0.5">✕</span>
                                   {con}
                                </li>
                             ))}
                          </ul>
                       </MotionDiv>
                    </div>
                  );

                case "callout":
                   return (
                     <MotionDiv
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="my-10 p-6 bg-muted/30 border-l-4 border-charcoal rounded-r-lg"
                     >
                        <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                           {section.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                           {section.content}
                        </p>
                     </MotionDiv>
                   );

                default:
                  return null;
              }
            })}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-16 pt-10 border-t border-border">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {content.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-lg font-medium text-foreground/90 hover:text-gold hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
