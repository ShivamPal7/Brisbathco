import Link from "next/link";
import { notFound } from "next/navigation";
import {
    MapPin,
    ArrowLeft,
    Phone,
    ChevronDown,
    ArrowRight,
    CheckCircle2,
    Clock,
    Shield,
    Star,
} from "lucide-react";
import { getRegionBySlug, regions } from "@/data/regions";
import { Metadata } from "next";
import * as motion from "framer-motion/client";
import { CONTACT_DETAILS } from "@/constants";

const SITE_URL = "https://www.brisbathco.com.au";

// Pre-render all 4 region pages
export async function generateStaticParams() {
    return regions.map((region) => ({
        regionSlug: region.slug,
    }));
}

// SEO metadata
export async function generateMetadata({
    params,
}: {
    params: Promise<{ regionSlug: string }>;
}): Promise<Metadata> {
    const { regionSlug } = await params;
    const region = getRegionBySlug(regionSlug);
    if (!region) return { title: "Region Not Found" };

    const canonical = `${SITE_URL}/bathroom-renovations/region/${regionSlug}`;

    return {
        title: region.metaTitle,
        description: region.metaDescription,
        alternates: { canonical },
        openGraph: {
            title: region.metaTitle,
            description: region.metaDescription,
            url: canonical,
            type: "website",
            locale: "en_AU",
        },
    };
}

// ── FAQ Accordion Item (client island) ──────────────────────────────
function FAQItem({
    question,
    answer,
    index,
}: {
    question: string;
    answer: string;
    index: number;
}) {
    return (
        <motion.details
            className="group border border-border rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 * index }}
        >
            <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer select-none text-foreground font-medium text-sm lg:text-base hover:bg-muted/40 transition-colors list-none [&::-webkit-details-marker]:hidden">
                <span>{question}</span>
                <ChevronDown className="w-4 h-4 shrink-0 text-gold transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                {answer}
            </div>
        </motion.details>
    );
}

// ── Main Page ───────────────────────────────────────────────────────
export default async function RegionPage({
    params,
}: {
    params: Promise<{ regionSlug: string }>;
}) {
    const { regionSlug } = await params;
    const region = getRegionBySlug(regionSlug);

    if (!region) {
        notFound();
    }

    // Other regions for internal linking
    const otherRegions = regions.filter((r) => r.slug !== region.slug);

    return (
        <div className="bg-background">
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(region.jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                            { "@type": "ListItem", position: 2, name: region.name, item: `${SITE_URL}/bathroom-renovations/region/${region.slug}` },
                        ],
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: region.faqs.map((faq) => ({
                            "@type": "Question",
                            name: faq.question,
                            acceptedAnswer: { "@type": "Answer", text: faq.answer },
                        })),
                    }),
                }}
            />

            {/* ── Hero ─────────────────────────────────────────────── */}
            <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 bg-charcoal overflow-hidden">
                {/* Dot pattern */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, hsl(var(--gold)) 1px, transparent 1px)",
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
                            {region.name}
                        </span>
                        <h1 className="font-display text-3xl lg:text-5xl font-semibold text-cream mb-4 max-w-3xl">
                            {region.heroHeading}
                        </h1>
                        <p className="text-cream/80 text-lg max-w-2xl leading-relaxed">
                            {region.heroSubheading}
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
                            <div
                                key={label}
                                className="flex items-center gap-2 text-sm text-cream/60"
                            >
                                <Icon className="w-4 h-4 text-gold" />
                                {label}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Content Sections ─────────────────────────────────── */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {region.sections.map((section, i) => (
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

                            {/* ── FAQ Section ───────────────────────────────── */}
                            <div className="mt-16">
                                <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-6">
                                    Frequently Asked Questions
                                </h2>
                                <div className="flex flex-col gap-3">
                                    {region.faqs.map((faq, i) => (
                                        <FAQItem
                                            key={i}
                                            question={faq.question}
                                            answer={faq.answer}
                                            index={i}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* ── CTA Block ─────────────────────────────────── */}
                            <motion.div
                                className="mt-16 p-6 lg:p-10 rounded-lg bg-charcoal text-cream"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2 className="font-display text-xl lg:text-2xl font-semibold mb-3">
                                    {region.ctaHeading}
                                </h2>
                                <p className="text-cream/80 text-sm lg:text-base mb-6 max-w-xl leading-relaxed">
                                    {region.ctaBody}
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

                        {/* ── Sidebar ─────────────────────────────────────── */}
                        <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col gap-8"
                        >
                            {/* Suburbs we service */}
                            <div className="p-5 rounded-lg bg-muted/50 border border-border">
                                <h3 className="font-display text-base font-semibold text-foreground mb-4">
                                    Suburbs We Service
                                </h3>
                                <div className="flex flex-col gap-1.5">
                                    {region.suburbs.map((suburb) => (
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

                            {/* Other regions */}
                            <div className="p-5 rounded-lg bg-muted/50 border border-border">
                                <h3 className="font-display text-base font-semibold text-foreground mb-4">
                                    Explore Other Regions
                                </h3>
                                <div className="flex flex-col gap-1.5">
                                    {otherRegions.map((r) => (
                                        <Link
                                            key={r.slug}
                                            href={`/bathroom-renovations/region/${r.slug}`}
                                            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors py-1.5"
                                        >
                                            <ArrowRight className="w-3 h-3 text-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            {r.name}
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

                            {/* Map embed */}
                            <div className="rounded-lg overflow-hidden border border-border shadow-elegant">
                                <iframe
                                    title={`Brisbathco Service Area — ${region.name}`}
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56000!2d153.0!3d-27.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a07ff9e3301%3A0x304a35d190009c0!2sBrisbane+QLD!5e0!3m2!1sen!2sau`}
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
