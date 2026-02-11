import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowLeft, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { getSuburbBySlug, suburbs } from "@/data/suburbs";
import { Metadata } from "next";
import * as motion from "framer-motion/client";

// Generate static params for all suburbs to enable static export/optimization
export async function generateStaticParams() {
    return suburbs.map((suburb) => ({
        slug: suburb.slug,
    }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const suburb = getSuburbBySlug(slug);
    if (!suburb) return { title: "Suburb Not Found" };

    return {
        title: suburb.metaTitle,
        description: suburb.metaDescription,
    };
}

export default async function SuburbPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const suburb = getSuburbBySlug(slug);

    if (!suburb) {
        notFound();
    }

    // Get 3 nearby suburbs for internal linking (exclude current)
    const nearby = suburbs.filter((s) => s.slug !== suburb.slug).slice(0, 6);

    return (
            <div className="bg-background">
                {/* Hero */}
                <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-20 bg-primary overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: "radial-gradient(circle, hsl(var(--gold)) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }} />
                    <div className="relative container mx-auto px-4 lg:px-8">
                        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/50 hover:text-gold transition-colors mb-6">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gold/15 text-gold rounded-full text-xs font-medium tracking-wide uppercase mb-4">
                                <MapPin className="w-3.5 h-3.5" />
                                {suburb.name}, Brisbane
                            </span>
                            <h1 className="font-display text-3xl lg:text-5xl font-semibold text-primary-foreground mb-4 max-w-2xl">
                                {suburb.heroHeading}
                            </h1>
                            <p className="text-primary-foreground/60 text-lg max-w-xl leading-relaxed">
                                {suburb.heroSubheading}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <h2 className="font-display text-2xl font-semibold text-foreground mb-5">
                                        Why {suburb.name} Homeowners Choose Brisbathco
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed mb-8">
                                        {suburb.introParagraph}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                        {suburb.highlights.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                                                className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                                                <span className="text-sm text-foreground">{item}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                                        About {suburb.name}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-8">
                                        {suburb.localInfo}
                                    </p>

                                    {/* CTA */}
                                    <div className="p-6 lg:p-8 rounded-lg bg-primary text-primary-foreground">
                                        <h3 className="font-display text-xl font-semibold mb-2">
                                            Ready to Transform Your {suburb.name} Bathroom?
                                        </h3>
                                        <p className="text-primary-foreground/60 text-sm mb-5">
                                            Get a free, no-obligation quote from Brisbane's trusted renovation specialists.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <Link
                                                href="/#contact"
                                                className="px-6 py-3 bg-gold text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity shadow-gold"
                                            >
                                                Get a Free Quote
                                            </Link>
                                            <a
                                                href="tel:0412345678"
                                                className="px-6 py-3 border border-primary-foreground/20 text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary-foreground/5 transition-colors"
                                            >
                                                Call 0412 345 678
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Sidebar */}
                            <motion.aside
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {/* Map */}
                                <div className="rounded-lg overflow-hidden border border-border shadow-elegant mb-8">
                                    <iframe
                                        title={`Brisbathco Service Area — ${suburb.name}`}
                                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000!2d153.1!3d-27.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(suburb.name + " QLD")}!5e0!3m2!1sen!2sau`}
                                        width="100%"
                                        height="250"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>

                                {/* Nearby Suburbs */}
                                <div className="p-5 rounded-lg bg-muted/50 border border-border">
                                    <h4 className="font-display text-base font-semibold text-foreground mb-4">
                                        We Also Service
                                    </h4>
                                    <div className="flex flex-col gap-1.5">
                                        {nearby.map((s) => (
                                            <Link
                                                key={s.slug}
                                                href={`/bathroom-renovations/${s.slug}`}
                                                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors py-1.5"
                                            >
                                                <ArrowRight className="w-3 h-3 text-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                Bathroom Renovations {s.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </motion.aside>
                        </div>
                    </div>
                </section>
            </div>
    );
}
