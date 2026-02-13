import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowLeft, Phone, CheckCircle2, ArrowRight, Shield, Star, Clock } from "lucide-react";
import { getSuburbBySlug, suburbs } from "@/data/suburbs";
import { getExpandedSuburbBySlug, expandedSuburbs } from "@/data/expanded-suburbs";
import { Metadata } from "next";
import * as motion from "framer-motion/client";
import { CONTACT_DETAILS } from "@/constants";

// Generate static params — combine basic + expanded suburb slugs (deduplicated)
export async function generateStaticParams() {
    const basicSlugs = suburbs.map((s) => s.slug);
    const expandedSlugs = expandedSuburbs.map((s) => s.slug);
    const allSlugs = [...new Set([...basicSlugs, ...expandedSlugs])];
    return allSlugs.map((slug) => ({ slug }));
}

// Generate metadata — prefer expanded data
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const expanded = getExpandedSuburbBySlug(slug);
    if (expanded) {
        return {
            title: expanded.metaTitle,
            description: expanded.metaDescription,
            openGraph: {
                title: expanded.metaTitle,
                description: expanded.metaDescription,
                type: "website",
                locale: "en_AU",
            },
        };
    }
    const suburb = getSuburbBySlug(slug);
    if (!suburb) return { title: "Suburb Not Found" };
    return { title: suburb.metaTitle, description: suburb.metaDescription };
}

export default async function SuburbPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Try expanded data first
    const expanded = getExpandedSuburbBySlug(slug);
    if (expanded) {
        return <ExpandedSuburbPage data={expanded} />;
    }

    // Fall back to basic suburb data
    const suburb = getSuburbBySlug(slug);
    if (!suburb) {
        notFound();
    }

    const nearby = suburbs.filter((s) => s.slug !== suburb.slug).slice(0, 6);

    return (
        <div className="bg-background">
            {/* Hero */}
            <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-20 bg-charcoal overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{
                    backgroundImage: "radial-gradient(circle, hsl(var(--gold)) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }} />
                <div className="relative container mx-auto px-4 lg:px-8">
                    <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-cream/70 hover:text-gold transition-colors mb-6">
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
                        <h1 className="font-display text-3xl lg:text-5xl font-semibold text-cream mb-4 max-w-2xl">
                            {suburb.heroHeading}
                        </h1>
                        <p className="text-cream/80 text-lg max-w-xl leading-relaxed">
                            {suburb.heroSubheading}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
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
                                <div className="p-6 lg:p-8 rounded-lg bg-charcoal text-cream">
                                    <h3 className="font-display text-xl font-semibold mb-2">
                                        Ready to Transform Your {suburb.name} Bathroom?
                                    </h3>
                                    <p className="text-cream/80 text-sm mb-5">
                                        Get a free, no-obligation quote from Brisbane&apos;s trusted renovation specialists.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <Link href="/#contact" className="px-6 py-3 bg-gold text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity shadow-gold">
                                            Get a Free Quote
                                        </Link>
                                        <a href={CONTACT_DETAILS.phone.href} className="px-6 py-3 border border-cream/20 text-cream text-sm font-medium rounded-sm hover:bg-cream/5 transition-colors inline-flex items-center gap-2">
                                            <Phone className="w-4 h-4" />
                                            {CONTACT_DETAILS.phone.display}
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
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
                            <div className="p-5 rounded-lg bg-muted/50 border border-border">
                                <h4 className="font-display text-base font-semibold text-foreground mb-4">
                                    We Also Service
                                </h4>
                                <div className="flex flex-col gap-1.5">
                                    {nearby.map((s) => (
                                        <Link key={s.slug} href={`/bathroom-renovations/${s.slug}`} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors py-1.5">
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

// ── Expanded suburb page component ──────────────────────────────────
import { ExpandedSuburbData } from "@/data/expanded-suburbs";

function ExpandedSuburbPage({ data }: { data: ExpandedSuburbData }) {
    return (
        <div className="bg-background">
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(data.jsonLd) }}
            />

            {/* Hero */}
            <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 bg-charcoal overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: "radial-gradient(circle, hsl(var(--gold)) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />
                <div className="relative container mx-auto px-4 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-sm text-cream/70 hover:text-gold transition-colors mb-6"
                    >
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
                            {data.name}, Brisbane
                        </span>
                        <h1 className="font-display text-3xl lg:text-5xl font-semibold text-cream mb-4 max-w-3xl">
                            {data.heroHeading}
                        </h1>
                        <p className="text-cream/80 text-lg max-w-2xl leading-relaxed">
                            {data.heroSubheading}
                        </p>
                    </motion.div>

                    {/* Trust badges */}
                    <motion.div
                        className="flex flex-wrap gap-6 mt-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        {[
                            { icon: Shield, label: "QBCC Licensed" },
                            { icon: Star, label: "5-Star Rated" },
                            { icon: Clock, label: "10–15 Day Turnaround" },
                        ].map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2 text-sm text-cream/60">
                                <Icon className="w-4 h-4 text-gold" />
                                {label}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {data.sections.map((section, i) => (
                                <motion.div
                                    key={i}
                                    className="mb-12 last:mb-0"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.05 * i }}
                                >
                                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-4">
                                        {section.heading}
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                        {section.body}
                                    </p>
                                </motion.div>
                            ))}

                            {/* CTA Block */}
                            <motion.div
                                className="mt-16 p-6 lg:p-10 rounded-lg bg-charcoal text-cream"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2 className="font-display text-xl lg:text-2xl font-semibold mb-3">
                                    Ready to Transform Your {data.name} Bathroom?
                                </h2>
                                <p className="text-cream/80 text-sm lg:text-base mb-6 max-w-xl leading-relaxed">
                                    Get a free, no-obligation quote from Brisbane&apos;s trusted bathroom renovation specialists. Premium craftsmanship, transparent pricing, and a team that genuinely cares about your home.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <Link
                                        href="/#contact"
                                        className="px-6 py-3 bg-gold text-accent-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity shadow-gold"
                                    >
                                        Get a Free Quote
                                    </Link>
                                    <a
                                        href={CONTACT_DETAILS.phone.href}
                                        className="px-6 py-3 border border-cream/20 text-cream text-sm font-medium rounded-sm hover:bg-cream/5 transition-colors inline-flex items-center gap-2"
                                    >
                                        <Phone className="w-4 h-4" />
                                        {CONTACT_DETAILS.phone.display}
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col gap-8"
                        >
                            {/* Nearby Suburbs */}
                            <div className="p-5 rounded-lg bg-muted/50 border border-border">
                                <h3 className="font-display text-base font-semibold text-foreground mb-4">
                                    Nearby Suburbs We Service
                                </h3>
                                <div className="flex flex-col gap-1.5">
                                    {data.nearbySuburbs.map((suburb) => (
                                        <Link
                                            key={suburb.slug}
                                            href={`/bathroom-renovations/${suburb.slug}`}
                                            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors py-1.5"
                                        >
                                            <ArrowRight className="w-3 h-3 text-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            Bathroom Renovations {suburb.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Quick links */}
                            <div className="p-5 rounded-lg bg-muted/50 border border-border">
                                <h3 className="font-display text-base font-semibold text-foreground mb-4">
                                    Quick Links
                                </h3>
                                <div className="flex flex-col gap-1.5">
                                    {[
                                        { label: "Our Services", href: "/#services" },
                                        { label: "Project Gallery", href: "/#gallery" },
                                        { label: "Our Process", href: "/#process" },
                                        { label: "Contact Us", href: "/#contact" },
                                    ].map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors py-1.5"
                                        >
                                            <ArrowRight className="w-3 h-3 text-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-lg overflow-hidden border border-border shadow-elegant">
                                <iframe
                                    title={`Brisbathco Service Area — ${data.name}`}
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000!2d153.1!3d-27.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(data.name + " QLD")}!5e0!3m2!1sen!2sau`}
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
