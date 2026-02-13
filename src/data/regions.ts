export interface RegionFAQ {
    question: string;
    answer: string;
}

export interface RegionSuburb {
    name: string;
    slug: string;
}

export interface RegionSection {
    heading: string;
    body: string;
}

export interface RegionData {
    name: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
    heroHeading: string;
    heroSubheading: string;
    sections: RegionSection[];
    faqs: RegionFAQ[];
    suburbs: RegionSuburb[];
    ctaHeading: string;
    ctaBody: string;
    jsonLd: Record<string, unknown>;
}

export const regions: RegionData[] = [
    // ─────────────────────────────────────────────────
    // BRISBANE NORTHERN SUBURBS
    // ─────────────────────────────────────────────────
    {
        name: "Brisbane Northern Suburbs",
        slug: "brisbane-northern-suburbs",
        metaTitle: "Bathroom Renovations Brisbane Northern Suburbs",
        metaDescription:
            "Expert bathroom renovations across Brisbane's northern suburbs. Serving Kedron, Stafford, Chermside, Ashgrove & more. Premium craftsmanship, free quotes.",
        heroHeading: "Bathroom Renovations in Brisbane's Northern Suburbs",
        heroSubheading:
            "Premium bathroom transformations for homeowners across Brisbane's thriving north — from Kedron to The Gap and everywhere in between.",
        sections: [
            {
                heading: "Your Trusted Bathroom Renovation Partner in Brisbane's North",
                body: `Brisbane's northern suburbs are home to some of the city's most established and sought-after residential pockets. From the leafy streets of Ashgrove to the bustling family hubs around Chermside, homeowners across the north share one thing in common — a desire for bathrooms that match the quality of their lifestyle. At Brisbathco, we've spent years building a reputation as the go-to bathroom renovation specialists for families and investors throughout Brisbane's north. We understand the architectural diversity here, from post-war cottages in Kedron to the split-level brick homes that define Stafford Heights, and we tailor every renovation to honour your home's character while delivering contemporary luxury.`,
            },
            {
                heading: "Why Northern Suburbs Homeowners Renovate Their Bathrooms",
                body: `The northern corridor of Brisbane has experienced significant population growth and urban renewal over the past decade. Suburbs like Newmarket and Windsor have attracted young professionals seeking inner-city convenience, while families continue to put down roots in Stafford, Stafford Heights, and Alderley for their generous block sizes and excellent school catchments. This influx has driven property values upward, making bathroom renovations one of the smartest investments a homeowner can make. An outdated bathroom with chipped tiles, inefficient fixtures, or poor ventilation doesn't just diminish daily comfort — it can cost you tens of thousands at resale. Many homes in Kedron and the surrounding streets were built in the 1960s and 1970s, meaning their original bathrooms are well past their functional lifespan. Ageing plumbing, dated colour schemes, and a lack of water-efficient fixtures are common pain points we resolve every week across the north.`,
            },
            {
                heading: "Property Styles Across Brisbane's Northern Suburbs",
                body: `One of the things that makes renovating across Brisbane's north so rewarding is the sheer variety of housing stock. In Ashgrove and The Gap, you'll find elevated Queenslander-style homes and character cottages perched on hillsides, often with compact bathrooms that require clever space planning. The established avenues of Alderley and Newmarket feature a mix of renovated post-war homes and contemporary townhouses, each presenting unique opportunities for modern bathroom design. Over in Chermside, the blend of low-rise apartments and family homes near Westfield means we frequently work on both strata-regulated unit bathrooms and large family ensuites. Meanwhile, Stafford and Stafford Heights offer predominantly brick-and-tile homes from the 1970s to 1990s — ideal candidates for full strip-and-reline renovations that can transform a cramped, dark bathroom into a bright, open retreat. Windsor's heritage-listed homes demand a more sensitive approach, where period-appropriate fixtures sit alongside modern waterproofing and plumbing upgrades.`,
            },
            {
                heading: "Renovation Trends in Brisbane's Northern Suburbs",
                body: `Northern suburbs homeowners are increasingly requesting designs that balance minimalist aesthetics with warm, natural materials. We're seeing a strong trend toward large-format porcelain tiles in matte finishes, frameless shower screens that create a sense of spaciousness, and floating timber-look vanities that bring warmth without sacrificing durability. Wall-hung toilets and back-to-wall baths are popular in areas like Newmarket and Windsor where bathroom footprints tend to be smaller. In the larger family homes of Stafford Heights and The Gap, spa-inspired features such as rainfall showerheads, niche shelving with LED strip lighting, and freestanding stone baths are in high demand. Sustainability is also front of mind — dual-flush toilets, water-saving tapware, and energy-efficient heated towel rails are standard inclusions in our northern suburbs projects.`,
            },
            {
                heading: "Common Challenges We Solve in Brisbane's North",
                body: `Brisbane's subtropical climate presents specific challenges that every renovation must address. High humidity levels accelerate mould growth and compromise grout integrity, making premium waterproofing and ventilation non-negotiable. In the hillside homes of Ashgrove and The Gap, managing water runoff and ensuring adequate drainage beneath the bathroom slab requires specialist knowledge. Many older homes in Kedron and Alderley still have galvanised steel plumbing that corrodes over time, leading to low water pressure and brown discolouration. Our team replaces outdated pipework with modern copper or PEX systems as part of every full renovation. Asbestos-containing materials in fibro sheeting are another reality in pre-1990s homes across Stafford and Chermside — we coordinate licensed asbestos removal to keep your family safe.`,
            },
            {
                heading: "Our Step-by-Step Renovation Process",
                body: `Every Brisbathco renovation follows a proven six-step process designed to eliminate stress and deliver predictable results. First, we conduct a free in-home consultation where we assess your existing bathroom, discuss your goals, and take detailed measurements. Next, our design team creates a 3D visualisation so you can see exactly how your new bathroom will look before a single tile is laid. Once you approve the design and transparent fixed-price quote, we handle all Brisbane City Council compliance, including waterproofing certification and plumbing approvals. Our licensed tradespeople then complete the demolition, rough-in plumbing and electrical, waterproofing membrane application, tiling, fixture installation, and final finishing — typically within 10 to 15 business days. A thorough walkthrough and quality inspection round out the project, followed by our comprehensive workmanship warranty.`,
            },
            {
                heading: "Why Brisbane's North Chooses Brisbathco",
                body: `Our deep roots in Brisbane's northern suburbs mean we're not just another renovation company — we're your neighbours. We hold a current QBCC licence, full public liability insurance, and maintain a five-star average across Google and ProductReview. Our project managers live and work in the north, which means faster response times, no inflated travel charges, and genuine accountability. We source materials from trusted Brisbane suppliers, support local trades, and stand behind every project with a written warranty. Whether you're updating a small guest bathroom in Windsor or creating a luxury master ensuite in Ashgrove, our commitment is the same: premium craftsmanship, transparent pricing, and a renovation experience you'll genuinely enjoy.`,
            },
        ],
        faqs: [
            {
                question: "How much does a bathroom renovation cost in Brisbane's northern suburbs?",
                answer:
                    "A standard bathroom renovation in Brisbane's north typically ranges from $15,000 to $35,000 depending on size, fixtures, and complexity. We provide a detailed fixed-price quote after our free in-home consultation, so there are no surprises.",
            },
            {
                question: "How long does a bathroom renovation take in Kedron or Stafford?",
                answer:
                    "Most full bathroom renovations in the northern suburbs take between 10 and 15 business days from demolition to completion. Factors such as custom tilework, fixture lead times, and heritage considerations in older homes can extend the timeline slightly.",
            },
            {
                question: "Do I need council approval for a bathroom renovation in Chermside?",
                answer:
                    "In most cases, a standard bathroom renovation in Brisbane doesn't require a council development application. However, all waterproofing work must be certified, and any structural or plumbing changes need to meet Brisbane City Council building codes. We manage all compliance on your behalf.",
            },
            {
                question: "Can you renovate bathrooms in Queenslander homes in Ashgrove and The Gap?",
                answer:
                    "Absolutely. We specialise in renovating bathrooms within Queenslander-style homes, including managing stumped floors, sub-floor ventilation, and heritage-sensitive design choices that complement the home's character.",
            },
            {
                question: "Do you handle asbestos removal in older northern suburbs homes?",
                answer:
                    "Yes. Many pre-1990s homes in suburbs like Kedron, Alderley, and Stafford contain asbestos in wall sheeting or flooring. We coordinate licensed asbestos removal as part of the renovation process to ensure your family's safety.",
            },
            {
                question: "What warranty do you offer on bathroom renovations in Brisbane's north?",
                answer:
                    "We provide a comprehensive written warranty covering workmanship for up to 7 years. All fixtures and materials carry their respective manufacturer warranties. Our QBCC licence also provides statutory protection for structural and waterproofing work.",
            },
            {
                question: "Can you renovate apartment bathrooms in Chermside or Newmarket?",
                answer:
                    "Yes, we have extensive experience with strata-regulated apartment and townhouse bathroom renovations. We work within body corporate guidelines, manage noise restrictions, and ensure all waterproofing meets the stricter standards required for multi-level dwellings.",
            },
        ],
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
        ctaHeading: "Ready to Transform Your Northern Suburbs Bathroom?",
        ctaBody:
            "Get a free, no-obligation quote from Brisbane's trusted bathroom renovation specialists. We service every suburb across the north — from Kedron to The Gap.",
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Brisbathco — Bathroom Renovations Brisbane Northern Suburbs",
            description:
                "Expert bathroom renovation services across Brisbane's northern suburbs including Kedron, Stafford, Chermside, Ashgrove, Alderley, Newmarket, Windsor, and The Gap.",
            url: "https://www.brisbathco.com.au/bathroom-renovations/region/brisbane-northern-suburbs",
            telephone: "+61412346019",
            email: "david@brisbathco.com.au",
            image: "https://www.brisbathco.com.au/og-image.jpg",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Brisbane",
                addressRegion: "QLD",
                addressCountry: "AU",
            },
            areaServed: [
                { "@type": "City", name: "Kedron, QLD" },
                { "@type": "City", name: "Stafford, QLD" },
                { "@type": "City", name: "Stafford Heights, QLD" },
                { "@type": "City", name: "Chermside, QLD" },
                { "@type": "City", name: "Ashgrove, QLD" },
                { "@type": "City", name: "Alderley, QLD" },
                { "@type": "City", name: "Newmarket, QLD" },
                { "@type": "City", name: "Windsor, QLD" },
                { "@type": "City", name: "The Gap, QLD" },
            ],
            priceRange: "$$–$$$",
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "17:00",
            },
        },
    },

    // ─────────────────────────────────────────────────
    // BRISBANE SOUTHERN SUBURBS
    // ─────────────────────────────────────────────────
    {
        name: "Brisbane Southern Suburbs",
        slug: "brisbane-southern-suburbs",
        metaTitle: "Bathroom Renovations Brisbane Southern Suburbs",
        metaDescription:
            "Premium bathroom renovations across Brisbane's southern suburbs. Serving Holland Park, Carindale, Carina, Bulimba, Coorparoo, West End & Kenmore. Free quotes.",
        heroHeading: "Bathroom Renovations in Brisbane's Southern Suburbs",
        heroSubheading:
            "Bespoke bathroom renovations crafted for the lifestyle and homes of Brisbane's vibrant south — Holland Park to Kenmore and beyond.",
        sections: [
            {
                heading: "Brisbane's South Side Bathroom Renovation Specialists",
                body: `Brisbane's southern suburbs sit at the heart of everything that makes this city special — proximity to the river, eclectic dining precincts, tree-lined heritage streets, and a community that values quality without pretension. At Brisbathco, we're proud to call Brisbane's south side home, with our base in Carindale placing us at the centre of the region. This local presence means we understand the diverse housing stock — from the elevated Queenslanders and character cottages of Holland Park to the contemporary riverside apartments of Bulimba and West End. Whether you're renovating a family bathroom in Carina or creating a luxury ensuite in Kenmore, our team delivers results that reflect the character of your suburb and the needs of your household.`,
            },
            {
                heading: "Why Southern Suburbs Homeowners Invest in Bathroom Renovations",
                body: `Brisbane's south side has long been one of the city's most desirable residential corridors. Suburbs like Coorparoo and Bulimba have undergone significant gentrification, attracting young professionals seeking walkable neighbourhoods with café culture and river access. Families continue to gravitate toward Carindale and Carina for their excellent school catchments and proximity to Westfield Carindale. In the western pocket, Kenmore offers a semi-rural feel with large blocks and established gardens. Across all these suburbs, property values have risen steadily, making a bathroom renovation one of the highest-return improvements a homeowner can undertake. Many south-side homes still retain their original 1960s or 1970s bathrooms — cramped layouts, worn-out tiles, and inefficient hot water systems that drive up utility bills. A modern renovation addresses functional shortcomings, reduces water and energy consumption, and adds measurable value to your home.`,
            },
            {
                heading: "Property Styles Across Brisbane's Southern Suburbs",
                body: `The architectural diversity of Brisbane's south is a renovator's dream. Holland Park's charming tree-lined avenues are home to post-war timber cottages and mid-century brick homes, many with original bathroom layouts that are ripe for modernisation. Neighbouring Coorparoo has embraced its inner-city appeal with a mix of sensitively renovated Queenslanders and modern apartment complexes, each presenting distinct renovation considerations — from heritage timber floors to strata waterproofing requirements. Bulimba's premium riverfront position means homes command high prices, and their bathrooms need to match that calibre. In Carina and Carindale, 1970s to 1990s brick-and-tile family homes dominate, offering generous bathroom footprints that can be reimagined with walk-in showers, double vanities, and freestanding baths. West End's eclectic character blends converted warehouses, art-deco apartments, and narrow-lot contemporary builds — all demanding creative spatial solutions. Further west, Kenmore's acreage-style homes provide the luxury of space, allowing for substantial master ensuite designs that rival boutique hotel bathrooms.`,
            },
            {
                heading: "Renovation Trends Shaping Brisbane's South Side",
                body: `South-side homeowners tend to be design-savvy and well-travelled, which is reflected in their renovation briefs. We're seeing strong demand for terrazzo-inspired surfaces, curved shower screens, and handmade-look subway tiles in colours like sage, blush, and terracotta. Concrete-look benchtops and basins bring an industrial-luxe edge that pairs beautifully with warm timber cabinetry — a combination especially popular in Bulimba and West End. In family-focused suburbs like Carindale and Carina, practical elegance wins: large walk-in showers with built-in niches, wall-hung vanities with ample drawer storage, and durable porcelain tiles that withstand busy household traffic. Kenmore's nature-surrounded homes inspire organic design palettes — think stone mosaics, matte-black tapware, and floor-to-ceiling windows that frame garden views. Smart bathroom technology, including digitally controlled showers and heated flooring, is gaining traction across the region as homeowners seek spa-level comfort at home.`,
            },
            {
                heading: "Local Challenges We Overcome for South-Side Homeowners",
                body: `Renovating across Brisbane's south comes with challenges that require local expertise. The subtropical humidity, exacerbated by the river corridor, demands advanced waterproofing and ventilation strategies to protect against mould and moisture damage. Many homes in Holland Park and Coorparoo sit on reactive clay soils — a reality that affects slab stability and requires careful assessment before any heavy bathroom fixtures are installed. Older plumbing systems in Carina and Carindale often feature a mix of galvanised and copper piping that restricts water flow, and we routinely upgrade these to modern PEX or copper systems during full renovations. In West End's multi-storey apartments, working within body corporate noise windows and elevator access constraints is second nature to our experienced team. Heritage-overlay considerations in pockets of Bulimba and Coorparoo mean that external alterations must respect streetscape character — something we navigate seamlessly with council.`,
            },
            {
                heading: "Our Proven Renovation Process",
                body: `We've refined our renovation process to deliver exceptional outcomes with minimal disruption to your daily routine. It begins with a complimentary in-home design consultation where we listen to your vision, assess the existing space, and discuss budget parameters. Our designers then produce a detailed 3D render and fixed-price proposal — no vague estimates, no hidden extras. Once approved, our licensed tradespeople execute a meticulous sequence: careful demolition and waste removal, rough-in plumbing and electrical, full waterproofing membrane with independent certification, precision tiling, fixture and fitting installation, and a final clean and quality inspection. Throughout the process, your dedicated project manager keeps you informed via regular updates. Most south-side renovations are completed within two to three weeks, and we leave your home spotless.`,
            },
            {
                heading: "Why South-Side Families Trust Brisbathco",
                body: `Being based in Carindale means we're genuinely embedded in Brisbane's south-side community. Our tradespeople live in these suburbs, our kids attend local schools, and our reputation travels by word of mouth through neighbourhood networks. We hold a current QBCC licence, comprehensive insurance, and consistently earn five-star reviews from clients across every southern suburb. We never subcontract core renovation work — your project is handled end-to-end by our permanent team. We source premium materials from Brisbane's leading suppliers and pass on trade pricing to our clients. From a compact powder room refresh in Coorparoo to a complete master-suite overhaul in Kenmore, every Brisbathco project is delivered with the same commitment to craftsmanship, transparency, and genuine care.`,
            },
        ],
        faqs: [
            {
                question: "How much does a bathroom renovation cost in Brisbane's southern suburbs?",
                answer:
                    "Bathroom renovations in Brisbane's south typically range from $15,000 for a standard update to $40,000+ for a high-end ensuite with premium fixtures. We provide transparent, fixed-price quotes after our free consultation — no hidden costs.",
            },
            {
                question: "How long will my south-side bathroom renovation take?",
                answer:
                    "Most complete bathroom renovations across suburbs like Holland Park, Carindale, and Coorparoo are finished within 10 to 15 business days. Complex heritage renovations or large master ensuites may take up to three weeks.",
            },
            {
                question: "Do you renovate bathrooms in apartments in Bulimba and West End?",
                answer:
                    "Yes. We're experienced with strata-regulated renovations and work within body corporate requirements including noise restrictions, access protocols, and enhanced waterproofing standards for multi-level buildings.",
            },
            {
                question: "Can you work with Queenslander homes in Holland Park and Coorparoo?",
                answer:
                    "Absolutely. We specialise in renovating bathrooms within character homes, including managing suspended timber floors, sub-floor ventilation, and selecting period-appropriate fixtures that complement the home's heritage.",
            },
            {
                question: "What areas do you service in Brisbane's south?",
                answer:
                    "We service all southern suburbs including Holland Park, Carindale, Carina, Bulimba, Coorparoo, West End, Kenmore, and the broader south-side region. Our Carindale base means fast response times and no inflated travel costs.",
            },
            {
                question: "Is a bathroom renovation a good investment for south-side properties?",
                answer:
                    "Definitely. A quality bathroom renovation in Brisbane's sought-after south typically delivers a 60–80% return on investment at resale. In high-demand suburbs like Bulimba and Coorparoo, an updated bathroom can be a key differentiator for buyers.",
            },
            {
                question: "Do you offer a warranty on bathroom renovations?",
                answer:
                    "Yes. All Brisbathco renovations include a comprehensive written warranty covering workmanship for up to 7 years. Fixtures and materials carry their respective manufacturer warranties, and our QBCC licence provides additional statutory protections.",
            },
        ],
        suburbs: [
            { name: "Holland Park", slug: "holland-park" },
            { name: "Carindale", slug: "carindale" },
            { name: "Carina", slug: "carina" },
            { name: "Bulimba", slug: "bulimba" },
            { name: "Coorparoo", slug: "coorparoo" },
            { name: "West End", slug: "west-end" },
            { name: "Kenmore", slug: "kenmore" },
        ],
        ctaHeading: "Ready to Upgrade Your South-Side Bathroom?",
        ctaBody:
            "Get a free consultation from Brisbathco — your local south-side renovation specialists based right here in Carindale. No obligation, just honest expert advice.",
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Brisbathco — Bathroom Renovations Brisbane Southern Suburbs",
            description:
                "Premium bathroom renovation services across Brisbane's southern suburbs including Holland Park, Carindale, Carina, Bulimba, Coorparoo, West End, and Kenmore.",
            url: "https://www.brisbathco.com.au/bathroom-renovations/region/brisbane-southern-suburbs",
            telephone: "+61412346019",
            email: "david@brisbathco.com.au",
            image: "https://www.brisbathco.com.au/og-image.jpg",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Brisbane",
                addressRegion: "QLD",
                addressCountry: "AU",
            },
            areaServed: [
                { "@type": "City", name: "Holland Park, QLD" },
                { "@type": "City", name: "Carindale, QLD" },
                { "@type": "City", name: "Carina, QLD" },
                { "@type": "City", name: "Bulimba, QLD" },
                { "@type": "City", name: "Coorparoo, QLD" },
                { "@type": "City", name: "West End, QLD" },
                { "@type": "City", name: "Kenmore, QLD" },
            ],
            priceRange: "$$–$$$",
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "17:00",
            },
        },
    },

    // ─────────────────────────────────────────────────
    // BRISBANE WESTERN SUBURBS
    // ─────────────────────────────────────────────────
    {
        name: "Brisbane Western Suburbs",
        slug: "brisbane-western-suburbs",
        metaTitle: "Bathroom Renovations Brisbane Western Suburbs",
        metaDescription:
            "Specialist bathroom renovations in Brisbane's western suburbs. Serving Bardon, Toowong, Mitchelton & Chelmer. Quality craftsmanship, free consultations.",
        heroHeading: "Bathroom Renovations in Brisbane's Western Suburbs",
        heroSubheading:
            "Thoughtfully designed bathroom renovations for the character homes and lifestyle of Brisbane's picturesque west — Bardon, Toowong, Mitchelton, and Chelmer.",
        sections: [
            {
                heading: "Bathroom Renovation Experts for Brisbane's Western Suburbs",
                body: `Brisbane's western suburbs offer a unique blend of leafy streetscapes, heritage architecture, and a relaxed lifestyle that sets them apart from the rest of the city. From the elevated ridgeline homes of Bardon to the riverside elegance of Chelmer, residents in the west take pride in their homes and expect renovations that honour that standard. Brisbathco brings specialist experience in working with the diverse property styles found across Toowong, Mitchelton, Bardon, and Chelmer — delivering bathroom renovations that are architecturally sympathetic, functionally superior, and built to withstand Brisbane's demanding climate. Our knowledge of local building nuances, council requirements, and material performance in these specific suburbs ensures every project is executed to the highest standard.`,
            },
            {
                heading: "Why Western Suburbs Homeowners Choose to Renovate",
                body: `The western suburbs occupy some of Brisbane's most prestigious and tightly held real estate. Bardon's elevated position offers sweeping city views and cool breezes, attracting families who value space and tranquillity without sacrificing proximity to the CBD. Toowong, anchored by its village-feel shopping precinct and university community, features a mix of heritage homes and modern apartment developments. Mitchelton has undergone a quiet renaissance, with its café culture and affordable character homes drawing first-home buyers and young families. Chelmer, nestled along the Brisbane River, is one of the city's blue-chip suburbs where property values reflect the desirability of every address. Across all four suburbs, bathroom renovations serve a dual purpose: enhancing daily living comfort and protecting significant property investments. Many homes in the west date from the 1920s through to the 1970s, meaning their bathrooms often feature outdated layouts, insufficient ventilation, and materials that have reached end-of-life.`,
            },
            {
                heading: "Architectural Character of Brisbane's Western Homes",
                body: `The western suburbs are an architect's playground. Bardon is home to a concentration of pre-war and post-war Queenslanders — elevated timber homes with VJ walls, sash windows, and often compact bathrooms tucked beneath the main roofline. Renovating these bathrooms requires understanding how timber-framed structures move, how to integrate modern waterproofing beneath suspended floors, and how to select fixtures that reflect the home's heritage charm. Toowong's housing stock spans from stately Federation-era residences to 1960s concrete apartment blocks and contemporary townhouses near the train station. Each type demands a different treatment — custom vanities for period homes, space-efficient designs for units, and open-plan luxury for new builds. Mitchelton's predominantly post-war timber and brick homes often feature dual-occupancy configurations, making bathroom layout efficiency critical. In Chelmer, gracious river-facing properties with generous ensuites present the opportunity for truly indulgent designs — think double rain showers, deep soaking tubs, and bespoke joinery crafted from Queensland hardwoods.`,
            },
            {
                heading: "Design Trends Defining Western Suburbs Renovations",
                body: `Western suburbs clients tend to gravitate toward designs that feel connected to their natural surroundings. We see consistent demand for nature-inspired palettes — soft greens, warm sandstone tones, and matte-black hardware that provides a contemporary anchor. Handmade Moroccan-look zellige tiles are a frequent request in Bardon and Toowong homes, adding texture and artisanal warmth to shower recesses and feature walls. Timber-look porcelain floor tiles deliver the aesthetic of natural hardwood with the water resistance bathrooms demand. Freestanding baths positioned beneath a window or skylight are a signature feature in Chelmer's more spacious ensuites, creating a resort-like focal point. Mitchelton homeowners often prioritise practical elegance — clean lines, wall-mounted vanities, and storage-rich mirrored cabinets that keep compact bathrooms feeling open. Across the west, underfloor heating and towel warmers are increasingly seen as essentials rather than luxuries, especially in the cooler elevated suburbs like Bardon and The Gap.`,
            },
            {
                heading: "Renovation Challenges Specific to Brisbane's West",
                body: `The western suburbs' topography and heritage fabric present challenges that demand specialist knowledge. Bardon's steep blocks and elevated homes mean materials must often be carried up steps rather than wheeled — a logistical factor we plan for meticulously. Sub-floor access in Queenslander homes is essential for plumbing re-routing, and we've developed efficient methods for working in these confined spaces. Toowong's mix of old and new presents waterproofing complexity: heritage homes require breathable membrane systems, while modern apartments need fully bonded alternatives that meet body corporate standards. In Mitchelton, many homes sit on reactive clay soils that can cause subtle ground movement, and we assess slab condition before specifying heavy stone or porcelain installations. Chelmer's proximity to the river brings elevated humidity, and we combat this with commercial-grade exhaust ventilation, mould-resistant linings, and epoxy grout that resists moisture penetration. We also navigate heritage overlay requirements in Character Residential zones, ensuring any visible changes respect streetscape values.`,
            },
            {
                heading: "The Brisbathco Renovation Journey",
                body: `Our six-step process is designed for western suburbs homeowners who value clarity and quality. We begin with a complimentary in-home consultation, where we assess your bathroom, understand your design preferences, and photograph the space for our design team. You then receive a detailed 3D concept with a fixed-price quote — no ballpark figures, no surprise variations. Upon approval, we prepare a project timeline that accounts for material lead times and any heritage or strata approvals required. Our licensed renovation crew handles every stage: careful demolition, plumbing and electrical rough-in, waterproofing with independent certification, precision tile-setting, joinery installation, fixture fitting, and a meticulous final clean. Your dedicated project manager coordinates every trade, provides daily progress updates, and ensures the finished result exceeds your expectations. Most western suburbs renovations are completed within two to three weeks.`,
            },
            {
                heading: "Why the West Trusts Brisbathco",
                body: `Our reputation in Brisbane's western suburbs has been built on hundreds of successful transformations and the word-of-mouth recommendations that follow. We hold a current QBCC licence, maintain comprehensive insurance, and employ only qualified tradespeople — never labour-hire. Our design team understands how to respect heritage character while delivering modern performance, and our tradespeople have the finesse to work within the unique constraints of elevated timber homes and heritage-regulated properties. We source premium Australian and European materials, offer transparent pricing with no hidden fees, and back every renovation with a written warranty. From a compact powder room in Mitchelton to a full master-suite transformation in Chelmer, we bring the same exacting standards and personal service to every project across Brisbane's west.`,
            },
        ],
        faqs: [
            {
                question: "How much does a bathroom renovation cost in Brisbane's western suburbs?",
                answer:
                    "Western suburbs bathroom renovations typically range from $18,000 to $45,000, reflecting the heritage considerations and higher specification often required. We provide a fixed-price quote after our free in-home assessment — no hidden costs or surprise extras.",
            },
            {
                question: "Can you renovate bathrooms in Queenslander homes in Bardon?",
                answer:
                    "Yes, Queenslander renovations are one of our specialities. We're experienced with suspended timber floors, integrated waterproofing for stumped homes, and period-sympathetic design that preserves your home's character while adding modern comfort.",
            },
            {
                question: "How long does a renovation take in Toowong or Chelmer?",
                answer:
                    "Most full bathroom renovations in the western suburbs are completed within 10 to 15 business days. Heritage homes or projects requiring council heritage approvals may take slightly longer — we'll confirm timelines during your consultation.",
            },
            {
                question: "Do you handle heritage overlay requirements in the western suburbs?",
                answer:
                    "Absolutely. Several western suburbs fall within Character Residential zones. We're experienced in navigating heritage overlay considerations and ensuring any visible changes meet Brisbane City Council requirements while achieving your design goals.",
            },
            {
                question: "What suburbs do you service in Brisbane's west?",
                answer:
                    "We service all western suburbs including Bardon, Toowong, Mitchelton, Chelmer, and the surrounding areas. Our team frequently works across this region and is well-versed in the specific building conditions of each suburb.",
            },
            {
                question: "Are your renovators licensed and insured?",
                answer:
                    "Yes. Brisbathco holds a current QBCC licence, comprehensive public liability and workers' compensation insurance, and all our tradespeople hold individual trade licences. We never use unqualified labour on any project.",
            },
        ],
        suburbs: [
            { name: "Bardon", slug: "bardon" },
            { name: "Toowong", slug: "toowong" },
            { name: "Mitchelton", slug: "mitchelton" },
            { name: "Chelmer", slug: "chelmer" },
        ],
        ctaHeading: "Ready to Renovate Your Western Suburbs Bathroom?",
        ctaBody:
            "Book a free, no-obligation design consultation with Brisbathco. We'll visit your home, discuss your vision, and provide a transparent fixed-price quote — tailored to the unique character of your western suburbs property.",
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Brisbathco — Bathroom Renovations Brisbane Western Suburbs",
            description:
                "Specialist bathroom renovation services across Brisbane's western suburbs including Bardon, Toowong, Mitchelton, and Chelmer.",
            url: "https://www.brisbathco.com.au/bathroom-renovations/region/brisbane-western-suburbs",
            telephone: "+61412346019",
            email: "david@brisbathco.com.au",
            image: "https://www.brisbathco.com.au/og-image.jpg",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Brisbane",
                addressRegion: "QLD",
                addressCountry: "AU",
            },
            areaServed: [
                { "@type": "City", name: "Bardon, QLD" },
                { "@type": "City", name: "Toowong, QLD" },
                { "@type": "City", name: "Mitchelton, QLD" },
                { "@type": "City", name: "Chelmer, QLD" },
            ],
            priceRange: "$$–$$$",
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "17:00",
            },
        },
    },

    // ─────────────────────────────────────────────────
    // BRISBANE CITY SUBURBS
    // ─────────────────────────────────────────────────
    {
        name: "Brisbane City Suburbs",
        slug: "brisbane-city-suburbs",
        metaTitle: "Bathroom Renovations Brisbane City Suburbs",
        metaDescription:
            "Luxury bathroom renovations in Brisbane's inner-city suburbs. Serving Fortitude Valley, New Farm, Newstead, Bowen Hills & Hawthorne. Book a free consultation.",
        heroHeading: "Bathroom Renovations in Brisbane's City Suburbs",
        heroSubheading:
            "Sophisticated bathroom renovations for the inner-city homes and apartments of Fortitude Valley, New Farm, Newstead, Bowen Hills, and Hawthorne.",
        sections: [
            {
                heading: "Inner-City Bathroom Renovations by Brisbane's Specialists",
                body: `Brisbane's inner-city suburbs represent the pinnacle of urban living — walkable neighbourhoods, world-class dining, river views, and a vibrant cultural scene that draws residents from across Australia and beyond. Whether you own a heritage worker's cottage in New Farm, a converted warehouse apartment in Fortitude Valley, or a contemporary high-rise unit in Newstead, your bathroom should reflect the premium lifestyle these addresses command. Brisbathco specialises in inner-city bathroom renovations that navigate the unique complexities of urban properties — from strata regulations and noise restrictions to heritage-sensitive design and compact-space innovation. Our portfolio includes hundreds of successful transformations across Bowen Hills, Hawthorne, and the wider inner-city precinct, and we bring an intimate understanding of what works in these distinctive environments.`,
            },
            {
                heading: "Why Inner-City Homeowners Invest in Bathroom Upgrades",
                body: `Brisbane's inner-city property market is intensely competitive. In suburbs like New Farm and Hawthorne, median house prices rank among the highest in Queensland, and buyers scrutinise every detail — including bathrooms. A tired, dated bathroom can be the single factor that causes a buyer to negotiate down or walk away entirely. For apartment owners in Fortitude Valley and Newstead, where stock is plentiful, a renovated bathroom is one of the most effective ways to differentiate your property in a crowded market. Beyond resale appeal, inner-city residents spend significant time at home in their bathrooms as personal sanctuaries — morning routines before walking to the office, evening wind-downs after city dining. A beautifully designed bathroom enhances daily wellbeing and transforms a functional necessity into a genuine pleasure. The density of inner-city living also means that small space doesn't have to mean small ambition — clever design can make even the most compact bathroom feel luxurious and spacious.`,
            },
            {
                heading: "Property Types in Brisbane's Inner-City Suburbs",
                body: `The inner city offers one of Brisbane's most eclectic mixes of residential architecture. New Farm is renowned for its charming timber Queenslanders and Federation-era cottages, many of which have been lovingly restored while their bathrooms remain trapped in another decade. Hawthorne shares this character-home appeal, with the added attraction of proximity to the river and Oxford Street's café strip. Fortitude Valley's rapid transformation has produced a landscape of converted warehouses, heritage shopfronts with upstairs residences, and modern apartment towers — each with vastly different bathroom renovation requirements. Newstead's master-planned riverside precinct is dominated by contemporary high-rise apartments where sleek, linear bathroom designs complement floor-to-ceiling glass and open-plan living. Bowen Hills, straddling the line between industrial heritage and residential growth, features an interesting mix of art-deco apartments, renovated worker's cottages, and new-build townhouses. Understanding the structural, regulatory, and aesthetic nuances of each property type is essential to delivering a renovation that feels right — and that's where our inner-city experience makes all the difference.`,
            },
            {
                heading: "Design Trends in Brisbane's Inner-City Bathrooms",
                body: `Inner-city clients are often design-forward and globally influenced, which shapes the renovation briefs we receive. Bold materiality is a defining trend — think fluted glass shower screens, brushed brass tapware, reeded vanity panels, and dramatic stone basins in Fortitude Valley's loft-style apartments. New Farm and Hawthorne homeowners tend to favour a refined coastal-meets-contemporary aesthetic: white or light marble-look tiles, warm timber vanities, and matte-white freestanding baths positioned as sculptural centrepieces. In Newstead's high-rise apartments, the trend leans toward hotel-inspired minimalism — frameless glass, wall-to-wall large-format tiles, concealed cisterns, and integrated LED mirror cabinets that create a seamless, uncluttered look. Bowen Hills' creative community often requests industrial-luxe finishes: exposed concrete feature walls, Crittall-style shower frames, and moody charcoal palettes softened by warm lighting. Across all inner-city suburbs, smart fixtures — touchless taps, digital shower controls, and sensor-activated lighting — are rapidly becoming standard expectations rather than optional upgrades.`,
            },
            {
                heading: "Navigating Inner-City Renovation Challenges",
                body: `Inner-city renovations present a unique set of challenges that set them apart from suburban projects. Strata-regulated buildings in Fortitude Valley, Newstead, and Bowen Hills require body corporate approval, adherence to construction hour restrictions, and often enhanced waterproofing standards that exceed standard residential requirements. We manage the entire approval process and maintain meticulous documentation for building managers. Access logistics are another consideration — we're adept at working within elevator booking windows, coordinating deliveries to loading docks, and minimising disruption to neighbouring residents. In New Farm and Hawthorne's heritage homes, working beneath the radar of character-overlay regulations requires an understanding of what constitutes a material change and how to achieve modern performance within heritage constraints. Noise management, waste removal in narrow laneways, and coordinating with adjacent properties in terrace-style housing are all part of our daily operational expertise. Our inner-city team has refined these processes over years of experience, ensuring your renovation is completed smoothly, compliantly, and on schedule.`,
            },
            {
                heading: "The Brisbathco Inner-City Renovation Process",
                body: `Our renovation process is tailored for the realities of inner-city living. It starts with a complimentary consultation at your property, where we assess the space, review any strata or heritage constraints, and understand your design vision. Our team then produces detailed 3D visualisations and a comprehensive fixed-price quotation. If body corporate or heritage approvals are required, we manage these on your behalf — preparing documentation, liaising with building managers, and securing sign-off before work commences. Our renovation crews are experienced in apartment-environment protocols: protecting common areas, adhering to construction hours, managing noise levels, and using dust-containment measures. The renovation itself follows a logical sequence — demolition, structural assessment, plumbing and electrical rough-in, waterproofing with independent certification, tiling, fixture installation, and final detailing. We typically complete inner-city bathrooms within two to three weeks, and our post-completion walkthrough ensures every tile, every fitting, and every silicone line meets our exacting quality standards.`,
            },
            {
                heading: "Why Inner-City Residents Choose Brisbathco",
                body: `Our inner-city clients choose us because we understand the unique demands of renovating in dense urban environments. We're QBCC licensed, fully insured, and our tradespeople are selected for their ability to work with precision and consideration in shared-living environments. Our design team brings genuine creativity to compact spaces — turning tight apartment bathrooms into functional works of art. We maintain strong relationships with strata managers across the inner city, have an established network of premium material suppliers offering trade pricing, and provide transparent communication throughout every project. Whether you're refreshing a heritage cottage bathroom in New Farm, reimagining a Fortitude Valley loft, or upgrading a Newstead penthouse ensuite, Brisbathco delivers inner-city quality that matches the premium addresses we serve.`,
            },
        ],
        faqs: [
            {
                question: "How much does a bathroom renovation cost in Brisbane's inner city?",
                answer:
                    "Inner-city bathroom renovations in Brisbane typically range from $18,000 to $50,000+, depending on the scope, fixtures, and any strata or heritage requirements. We provide a detailed fixed-price quote after our complimentary consultation.",
            },
            {
                question: "Can you renovate apartment bathrooms in Fortitude Valley and Newstead?",
                answer:
                    "Yes, apartment renovations are a core part of our inner-city work. We handle body corporate approvals, work within construction hour restrictions, protect common areas, and ensure all waterproofing meets the elevated standards required for multi-storey buildings.",
            },
            {
                question: "Do you work with heritage homes in New Farm and Hawthorne?",
                answer:
                    "Absolutely. Many of our most rewarding projects involve heritage and character homes. We design bathrooms that complement the home's period features while incorporating modern waterproofing, plumbing, and fixtures for contemporary performance.",
            },
            {
                question: "How do you minimise disruption in apartment buildings?",
                answer:
                    "We adhere to strata construction hours, book elevator access in advance, protect common areas with floor coverings and dust barriers, and coordinate material deliveries to avoid peak building traffic. Our crews are trained specifically for apartment-environment protocols.",
            },
            {
                question: "How long will my inner-city bathroom renovation take?",
                answer:
                    "Most inner-city renovations are completed within 10 to 15 business days. Apartment projects may add a few days for body corporate compliance steps, and heritage homes requiring specialist treatments may extend to three weeks.",
            },
            {
                question: "What makes inner-city bathroom renovations different from suburban ones?",
                answer:
                    "Inner-city projects involve additional considerations like strata approvals, noise management, access logistics, heritage overlays, and compact-space design. Our team has refined processes for all of these, ensuring a smooth experience regardless of the complexity.",
            },
            {
                question: "Do you offer design services for small apartment bathrooms?",
                answer:
                    "Yes. Compact-space design is one of our strengths. We use techniques like wall-hung vanities, recessed niches, frameless glass, and strategic tile placement to make even the smallest bathroom feel spacious and luxurious.",
            },
        ],
        suburbs: [
            { name: "Fortitude Valley", slug: "fortitude-valley" },
            { name: "New Farm", slug: "new-farm" },
            { name: "Newstead", slug: "newstead" },
            { name: "Bowen Hills", slug: "bowen-hills" },
            { name: "Hawthorne", slug: "hawthorne" },
        ],
        ctaHeading: "Ready to Elevate Your Inner-City Bathroom?",
        ctaBody:
            "Book a complimentary design consultation with Brisbathco. We'll assess your space, navigate any strata or heritage requirements, and deliver a fixed-price proposal tailored to your inner-city property.",
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Brisbathco — Bathroom Renovations Brisbane City Suburbs",
            description:
                "Luxury bathroom renovation services in Brisbane's inner-city suburbs including Fortitude Valley, New Farm, Newstead, Bowen Hills, and Hawthorne.",
            url: "https://www.brisbathco.com.au/bathroom-renovations/region/brisbane-city-suburbs",
            telephone: "+61412346019",
            email: "david@brisbathco.com.au",
            image: "https://www.brisbathco.com.au/og-image.jpg",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Brisbane",
                addressRegion: "QLD",
                addressCountry: "AU",
            },
            areaServed: [
                { "@type": "City", name: "Fortitude Valley, QLD" },
                { "@type": "City", name: "New Farm, QLD" },
                { "@type": "City", name: "Newstead, QLD" },
                { "@type": "City", name: "Bowen Hills, QLD" },
                { "@type": "City", name: "Hawthorne, QLD" },
            ],
            priceRange: "$$$",
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "17:00",
            },
        },
    },
];

export const getRegionBySlug = (slug: string): RegionData | undefined =>
    regions.find((r) => r.slug === slug);
