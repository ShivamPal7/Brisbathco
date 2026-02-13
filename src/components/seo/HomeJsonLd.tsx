import { CONTACT_DETAILS } from "@/constants";

const SITE_URL = "https://www.brisbathco.com.au";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Brisbathco",
    alternateName: "The Brisbane Bathroom Company",
    description:
        "Brisbane's trusted bathroom renovation specialists. Premium craftsmanship, transparent pricing & QBCC licensed.",
    url: SITE_URL,
    telephone: "+61412346019",
    email: "david@brisbathco.com.au",
    priceRange: "$$–$$$",
    currenciesAccepted: "AUD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: [
        { "@type": "City", name: "Brisbane", "@id": "https://en.wikipedia.org/wiki/Brisbane" },
        { "@type": "State", name: "Queensland" },
    ],
    geo: {
        "@type": "GeoCoordinates",
        latitude: -27.4698,
        longitude: 153.0251,
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Brisbane",
        addressRegion: "QLD",
        postalCode: "4000",
        addressCountry: "AU",
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "17:00",
        },
    ],
    sameAs: [
        CONTACT_DETAILS.socials.facebook,
        CONTACT_DETAILS.socials.instagram,
    ],
    image: `${SITE_URL}/og-image.jpg`,
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Bathroom Renovation Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Bathroom Renovations",
                    description:
                        "Complete bathroom transformations from demolition to final fit-off.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Ensuite Renovations",
                    description: "Premium ensuite renovation and design.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Waterproofing",
                    description:
                        "Industry-leading waterproofing solutions with certified membranes.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Tiling & Stone Installation",
                    description:
                        "Expert installation of premium tiles, natural stone, and large-format porcelain.",
                },
            },
        ],
    },
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Brisbathco",
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.jpg`,
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+61412346019",
        contactType: "customer service",
        areaServed: "AU",
        availableLanguage: "English",
    },
    sameAs: [
        CONTACT_DETAILS.socials.facebook,
        CONTACT_DETAILS.socials.instagram,
    ],
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Brisbathco",
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-AU",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How much would a bathroom renovation cost?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Cost depends on room size, site conditions, and scope of tiling. We provide a written quote covering all trades, labour, and building materials — so you know exactly what's included.",
            },
        },
        {
            "@type": "Question",
            name: "How long will my bathroom renovation take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We estimate around three weeks. If we can finish sooner we will, but we prefer to set realistic expectations so we never let you down.",
            },
        },
        {
            "@type": "Question",
            name: "Do you provide free quotes?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, all consultations are free and quotes are valid for three months. We visit your site, discuss your options, and provide a detailed quotation.",
            },
        },
        {
            "@type": "Question",
            name: "Do you offer a warranty for your renovation services?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer a 6.5-year warranty as specified by the Queensland Building and Construction Commission (QBCC Licence Number 732730).",
            },
        },
        {
            "@type": "Question",
            name: "What suburbs do you service?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We service suburbs across Brisbane City, North Brisbane (Kedron, Stafford, Chermside, Ashgrove, The Gap), South Brisbane (Holland Park, Carindale, Bulimba, Coorparoo), Western Brisbane (Bardon, Toowong, Mitchelton), and Brisbane City (Fortitude Valley, New Farm, Newstead).",
            },
        },
        {
            "@type": "Question",
            name: "What insurance do you have?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Our company and all tradesmen are fully insured, with Public Liability cover of $10,000,000.",
            },
        },
        {
            "@type": "Question",
            name: "Do I have to be on-site during the renovation?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No — we use a secure lock box for key access so you don't need to be home. Our tradesmen are professional, trusted, and each job is personally project-managed by one of the owners.",
            },
        },
        {
            "@type": "Question",
            name: "What happens to the building rubbish from the renovation?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A skip bin is included in our quote. We use it throughout the project and arrange collection as soon as the renovation is complete.",
            },
        },
    ],
};

export function HomeJsonLd() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
        </>
    );
}
