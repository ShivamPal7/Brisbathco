import { ExpandedSuburbData } from "./types";

const makeSchema = (name: string, slug: string, desc: string) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Brisbathco — Bathroom Renovations ${name}`,
    description: desc,
    url: `https://www.brisbathco.com.au/bathroom-renovations/${slug}`,
    telephone: "+61412346019",
    email: "david@brisbathco.com.au",
    address: { "@type": "PostalAddress", addressLocality: "Brisbane", addressRegion: "QLD", addressCountry: "AU" },
    areaServed: { "@type": "City", name: `${name}, QLD` },
    priceRange: "$$–$$$",
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "17:00" },
});

export const westernSuburbs: ExpandedSuburbData[] = [
    {
        name: "Bardon",
        slug: "bardon",
        metaTitle: "Bathroom Renovations Bardon | Brisbathco",
        metaDescription: "Bardon bathroom renovations by Brisbathco. Hillside-home specialists. Heritage-sensitive design, premium waterproofing & natural materials. Free quotes.",
        heroHeading: "Bathroom Renovations in Bardon",
        heroSubheading: "Hillside-home bathroom specialists — heritage sensitivity meets modern luxury in Bardon",
        sections: [
            {
                heading: "Bardon's Specialist Bathroom Renovation Team",
                body: "Bardon is one of Brisbane's most beautiful western suburbs — a hillside community where towering eucalypts frame views across the city, and where character homes sit on generous, sloping blocks that feel worlds away from the urban centre just ten minutes down the hill. This premium positioning demands bathrooms of equal calibre. Brisbathco delivers bathroom renovations that honour Bardon's leafy, elevated character while introducing the modern comfort and design sophistication that today's homeowners expect. From sensitive renovations in pre-war Queenslanders perched on steep sites to contemporary ensuite builds in modern hilltop homes, we bring specialist experience and premium craftsmanship to every Bardon project.",
            },
            {
                heading: "Hillside Renovation Expertise",
                body: "Our Bardon expertise is shaped by years of working on the suburb's challenging terrain. We're experienced with steep-site logistics — coordinating material delivery via narrow, winding streets and managing waste removal from elevated positions. Our renovation services include complete bathroom remodels, ensuite additions, shower conversions, natural stone tiling, custom vanity builds, full plumbing system upgrades, waterproofing remediation, and underfloor heating installation. For heritage homes, we offer period-appropriate design that respects original proportions while delivering modern functionality. Every project includes independently certified waterproofing — critical in a suburb where elevated humidity and steep drainage gradients amplify moisture risk.",
            },
            {
                heading: "Bardon's Distinctive Architecture",
                body: "Bardon's housing character is shaped by its terrain. Elevated Queenslanders with commanding views occupy the ridgeline, their original compact bathrooms often featuring original VJ board walls and timber floors. Post-war brick homes on the suburb's gentler slopes offer slightly more bathroom space but typically with dated finishes from the 1960s and 1970s. Contemporary architecturally designed homes built into the hillside feature dramatic multi-level layouts with bathrooms at various floor levels. Some of Bardon's most prestigious homes incorporate split-level designs with suspended timber sections requiring specialist renovation approaches. Each property style demands a tailored bathroom renovation strategy.",
            },
            {
                heading: "Bardon-Specific Renovation Challenges",
                body: "Steep blocks and mature tree cover create challenges that set Bardon apart. Access for skip bins, tile deliveries, and equipment can be difficult on dead-end ridgeline streets — we plan logistics carefully, often staging materials in sequence to minimise site congestion. Homes surrounded by bushland experience higher ambient humidity, making bathroom ventilation and mould prevention particularly important. Suspended timber floors in Queenslanders and split-level homes require flexible waterproofing membranes that accommodate structural movement. Root intrusion into older clay sewer lines is common where mature trees grow close to homes, and we assess drainage condition as part of every renovation scope. Sub-floor plumbing access on steep sites sometimes requires creative solutions that our team handles efficiently.",
            },
            {
                heading: "Bathroom Design Inspirations for Bardon",
                body: "Bardon's bush setting naturally inspires earthy, organic bathroom designs. Honed travertine and sandstone floor tiles bring warmth and texture, while matte-finish wall tiles in warm whites and soft greens complement the leafy outlook. Timber-look vanities — either genuine recycled hardwood or quality timber-veneer — anchor the design with natural character. Freestanding stone baths in sculptural shapes serve as statement pieces, especially in ensuites that open to private garden views. Matte-black or brushed-bronze tapware adds understated contrast. Many Bardon bathrooms incorporate skylights to capture filtered light through the tree canopy, creating a sanctuary-like atmosphere that reflects the suburb's bushland identity.",
            },
            {
                heading: "Our Bardon Renovation Process",
                body: "We begin every Bardon project with a thorough site assessment that evaluates not only the bathroom but also access logistics and structural condition. Our design team creates a concept that respects your home's architecture and Bardon's natural setting, presented with 3D visualisation and a comprehensive fixed-price quote. The renovation is executed by our permanent team in a coordinated sequence — demolition, plumbing and electrical rough-in, waterproofing with independent certification, tiling, fixturing, joinery, and final inspection. Most Bardon projects complete within two to three weeks.",
            },
            {
                heading: "Why Bardon Trusts Brisbathco",
                body: "Bardon homeowners trust us because we don't treat steep sites and character homes as obstacles — we treat them as the context that makes each renovation unique. Our QBCC licence, insurance, and written warranties provide formal protection. Our permanent team of senior tradespeople brings deep experience with Bardon's specific challenges, and our transparent pricing means the quote is the price.",
            },
            {
                heading: "Start Your Bardon Bathroom Project",
                body: "Elevate your Bardon home with a bathroom that matches its hilltop setting. Book a free consultation with Brisbathco and receive a detailed, no-obligation quote. We also deliver premium bathroom renovations in Ashgrove, Toowong, and The Gap.",
            },
        ],
        nearbySuburbs: [
            { name: "Ashgrove", slug: "ashgrove" },
            { name: "Toowong", slug: "toowong" },
            { name: "The Gap", slug: "the-gap" },
        ],
        jsonLd: makeSchema("Bardon", "bardon", "Hillside bathroom renovation specialists in Bardon, Brisbane."),
    },
    {
        name: "Toowong",
        slug: "toowong",
        metaTitle: "Bathroom Renovations Toowong | Brisbathco",
        metaDescription: "Toowong bathroom renovations — apartments, Queenslanders & modern homes. Expert design, waterproofing & tiling by Brisbathco. Free consultation.",
        heroHeading: "Bathroom Renovations in Toowong",
        heroSubheading: "Expert bathroom renovations for Toowong's diverse mix of apartments, heritage homes, and modern residences",
        sections: [
            {
                heading: "Expert Bathroom Renovations in Toowong",
                body: "Toowong straddles two identities — a university-adjacent suburb with bustling apartment living along Coronation Drive, and a quieter residential enclave where character homes climb the slopes toward Mount Coot-tha. This duality creates varied bathroom renovation demand, from space-efficient apartment upgrades to generous family-home transformations. Brisbathco serves both sides of Toowong with equal expertise, delivering bathroom renovations that are tailored to each property's specific context. Our understanding of strata-regulated apartment work and our heritage-home renovation skills make us a versatile partner for Toowong's diverse residential community.",
            },
            {
                heading: "Versatile Renovation Services",
                body: "Our Toowong services cover the full renovation spectrum. For apartment owners along Coronation Drive and at Toowong Village, we deliver compact, intelligent bathroom designs — wall-hung vanities, concealed cisterns, curbless showers, and integrated storage that maximises every centimetre. For house owners on the hill, we handle complete bathroom remodels, ensuite additions, shower conversions, luxury fixture installation, full re-tiling, and plumbing system upgrades. Our waterproofing is certified independently for every project, and we manage body corporate approvals for apartments as a standard service. Plumbing upgrades, electrical modernisation, and ventilation installation complete our scope.",
            },
            {
                heading: "Toowong's Property Diversity",
                body: "Toowong's property landscape is remarkably diverse. High-rise and mid-rise apartment complexes near the Brisbane River offer compact bathrooms with river or city views but often bland developer finishes. The suburb's middle ground features character cottages, post-war brick homes, and Federation-era residences with small original bathrooms. Higher up the slopes, grand family homes on large blocks provide generous bathroom spaces but frequently with dated 1980s or 1990s fitouts. Student-oriented unit blocks near the University of Queensland represent a different renovation context — functional, durable, and cost-effective upgrades. We've renovated bathrooms across every Toowong property type.",
            },
            {
                heading: "Toowong Renovation Challenges",
                body: "Toowong's mixed property types present varied challenges. Apartment renovations require strict adherence to strata waterproofing specifications, construction-hour compliance, and protection of common-area finishes during material transport. Character homes on the hillside feature suspended timber floors requiring specialist waterproofing, and access on steep blocks demands careful logistical planning. Many older Toowong homes have cast-iron or galvanised drainage pipes approaching their service life — we assess and upgrade these as part of full renovations. The suburb's western position means afternoon sun can overheat poorly ventilated bathrooms; we incorporate vent systems and consider window orientation in our designs.",
            },
            {
                heading: "Design Trends in Toowong Bathrooms",
                body: "Toowong's design preferences vary by property type. Apartment owners typically request clean, contemporary aesthetics — large-format stone-look tiles, floating vanities with quartz tops, and frameless glass shower screens. Character-home owners lean toward designs that blend period sympathy with modern performance — heritage-profile tapware in brass or chrome, subway tiles with detailed bevels, and timber-and-marble vanities. Larger family homes on the upper slopes embrace spa-inspired designs: freestanding stone baths, dual rain showers, underfloor heating, and natural stone feature walls. Across all property types, matte-black tapware, recessed niches, and LED mirror cabinets are consistently popular selections.",
            },
            {
                heading: "Our Toowong Renovation Workflow",
                body: "We begin with a complimentary consultation at your Toowong property, evaluating the bathroom's condition and your design aspirations. For apartments, we assess strata requirements and prepare approval submissions. Our team delivers a 3D design concept with fixed-price quotation. The renovation proceeds through our proven sequence: careful demolition, plumbing and electrical rough-in, certified waterproofing, tiling, fixture installation, and final inspection. House renovations typically complete within two weeks; apartment timelines vary with strata processes.",
            },
            {
                heading: "Why Toowong Chooses Brisbathco",
                body: "Toowong residents choose us for our ability to navigate the suburb's property diversity with equal skill. Our QBCC licence, full insurance, and written warranties provide robust protection. Our experience with both strata-regulated and freestanding-home renovations means consistent quality regardless of property type. Our permanent team, transparent pricing, and responsive communication make us a trusted west-side partner.",
            },
            {
                heading: "Book Your Toowong Bathroom Consultation",
                body: "Whether you're in a riverside apartment or a hillside Queenslander, Brisbathco delivers bathroom renovations tailored to your Toowong home. Contact us for a free consultation and transparent fixed-price quote. We also serve nearby Bardon, Mitchelton, and Chelmer.",
            },
        ],
        nearbySuburbs: [
            { name: "Bardon", slug: "bardon" },
            { name: "Mitchelton", slug: "mitchelton" },
            { name: "Chelmer", slug: "chelmer" },
        ],
        jsonLd: makeSchema("Toowong", "toowong", "Versatile bathroom renovations in Toowong, Brisbane."),
    },
    {
        name: "Mitchelton",
        slug: "mitchelton",
        metaTitle: "Bathroom Renovations Mitchelton | Brisbathco",
        metaDescription: "Mitchelton bathroom renovations — post-war home specialists. Modern designs, expert waterproofing & quality tiling. Free quotes from Brisbathco.",
        heroHeading: "Bathroom Renovations in Mitchelton",
        heroSubheading: "Modern bathroom renovations that complement Mitchelton's post-war charm and growing family appeal",
        sections: [
            {
                heading: "Mitchelton's Bathroom Renovation Partner",
                body: "Mitchelton has quietly become one of Brisbane's most appealing north-western suburbs — a train-connected community where post-war character meets a burgeoning café and dining scene along Blackwood Street. Young families and professionals have been drawn to Mitchelton's generous blocks, mature trees, and relative affordability compared to closer-in suburbs. As these new homeowners settle in, bathroom renovations are among the first improvements they undertake. Brisbathco sees significant demand from Mitchelton, and our familiarity with the suburb's post-war housing stock ensures we deliver renovations that respect existing character while introducing the modern comfort and style that new residents expect.",
            },
            {
                heading: "Our Mitchelton Expertise",
                body: "We bring specific expertise to Mitchelton's post-war homes — an ability to work within modest original footprints while delivering bathrooms that feel spacious, well-lit, and thoroughly modern. Our services include complete bathroom remodels, ensuite creation within existing floor plans, shower upgrades from outdated bath-shower combinations, vanity replacements with contemporary designs, full re-tiling, waterproofing certification, and plumbing system modernisation. We're skilled at opening up compartmentalised 1950s bathroom layouts where separate toilet and bathroom spaces can be combined into a single cohesive room.",
            },
            {
                heading: "Mitchelton's Housing Character",
                body: "Post-war timber homes dominate Mitchelton's streetscape — typically three-bedroom workers' cottages with hardwood framing, chamferboard or fibro cladding, and internal VJ board walls. Bathrooms in these homes are usually compact, located at the rear of the house, and featuring original fittings from the 1950s or 1960s. Many homes have been raised to create additional living space below, sometimes incorporating a second bathroom or laundry that can be upgraded simultaneously. Pockets of brick-veneer homes from the 1970s and a growing number of infill townhouses add variety. Each Mitchelton property type benefits from our tailored renovation approach.",
            },
            {
                heading: "Common Challenges in Mitchelton Bathrooms",
                body: "Mitchelton's post-war homes present consistent renovation challenges. Compact bathroom footprints require clever design to accommodate modern fixtures — wall-hung vanities, compact back-to-wall toilets, and curbless showers help maximise usable space. Timber-framed floors demand specialist waterproofing using flexible membranes that move with the structure without compromising the seal. Many original plumbing systems feature galvanised supply lines with internal buildup that restricts flow — we replace these with modern copper or PEX pipework. Ventilation is often limited to a small window, and we install ducted exhaust fans to combat humidity. VJ board wall linings may need replacement with moisture-rated sheeting before tiling begins.",
            },
            {
                heading: "Bathroom Designs for Mitchelton Homes",
                body: "Mitchelton homeowners appreciate designs that balance character sensitivity with modern functionality. White subway tiles — sometimes in herringbone patterns — remain a perennial favourite, pairing beautifully with the VJ walls and timber detailing found throughout the rest of the home. Timber-look porcelain floor tiles add warmth without moisture risk, while compact wall-hung vanities with stone tops create a clean, space-efficient profile. Chrome or brushed-nickel tapware suits Mitchelton's mid-century aesthetic, and simple frameless shower screens let the tilework speak. Penny-round feature tiles in shower niches and accent strips add character without overwhelming compact spaces.",
            },
            {
                heading: "Your Mitchelton Renovation Process",
                body: "We start with a free consultation at your Mitchelton home, assessing the bathroom's current condition, structural integrity, and plumbing age. Our design team delivers a 3D concept and fixed-price quote that covers every element. The renovation progresses through demolition, plumbing and electrical rough-in, certified waterproofing, tiling, fixture and vanity installation, and a thorough final inspection. Most Mitchelton projects complete within 10 to 15 business days, with daily updates from your project manager.",
            },
            {
                heading: "Why Mitchelton Chooses Brisbathco",
                body: "Mitchelton homeowners choose us for our genuine expertise with post-war homes and our commitment to transparent, fair pricing. Our QBCC licence, insurance, and written workmanship warranty provide formal protection. We use only permanent team members who understand the nuances of timber-framed construction, and our fixed-price approach means no hidden extras at the end of your project.",
            },
            {
                heading: "Get Your Mitchelton Bathroom Quote",
                body: "Start your Mitchelton bathroom transformation today. Contact Brisbathco for a free, no-obligation consultation and discover how we can upgrade your bathroom with expertise and care. We also serve nearby Toowong, Bardon, and across Brisbane's western suburbs.",
            },
        ],
        nearbySuburbs: [
            { name: "Toowong", slug: "toowong" },
            { name: "Bardon", slug: "bardon" },
            { name: "Chelmer", slug: "chelmer" },
        ],
        jsonLd: makeSchema("Mitchelton", "mitchelton", "Post-war home bathroom renovation specialists in Mitchelton, Brisbane."),
    },
    {
        name: "Chelmer",
        slug: "chelmer",
        metaTitle: "Bathroom Renovations Chelmer | Brisbathco",
        metaDescription: "Chelmer bathroom renovations — riverside luxury by Brisbathco. Premium finishes, heritage expertise & expert craftsmanship. Free consultation.",
        heroHeading: "Bathroom Renovations in Chelmer",
        heroSubheading: "Riverside luxury — premium bathroom renovations for Chelmer's distinguished homes",
        sections: [
            {
                heading: "Premium Bathroom Renovations for Chelmer",
                body: "Chelmer is one of Brisbane's most prestigious riverside suburbs — a quiet enclave of generously proportioned homes on leafy streets that slope gently toward the Brisbane River. The suburb's heritage Queenslanders, grand Federation homes, and contemporary architect-designed residences represent some of Brisbane's finest residential stock. Bathrooms in these homes must meet an elevated standard — spaces that feel deliberately designed, finished with premium materials, and executed with the precision that Chelmer homeowners rightfully expect. Brisbathco delivers bathroom renovations of this calibre, combining heritage sensitivity with contemporary design to create bathrooms worthy of Chelmer's distinguished residential character.",
            },
            {
                heading: "Premium Renovation Capabilities",
                body: "Our Chelmer services are built for premium outcomes. We work with natural marble, travertine, and engineered stone — materials that Chelmer's homes demand. Our capabilities include complete master-bathroom and ensuite transformations, freestanding bath installations, bespoke vanity joinery in natural timber and painted finishes, walk-in rain shower systems, dual-basin configurations, underfloor heating, heated towel rails, and integrated lighting design. Every project includes independently certified waterproofing and is managed by a dedicated project coordinator who ensures every detail aligns with your vision.",
            },
            {
                heading: "Chelmer's Architectural Heritage",
                body: "Chelmer's housing character is defined by quality and scale. Grand Queenslanders elevated on high stumps feature expansive verandahs and internal proportions that make renovation deeply rewarding. Federation and interwar brick homes offer solid construction with period detailing that bathroom renovations must respect. Contemporary homes — often architecturally designed to capture river views and take advantage of Chelmer's northern orientation — feature generous bathroom footprints with opportunities for luxury finishes. Some original Chelmer cottages have been extended extensively, creating bathroom configurations that blend old and new construction. Our experience spans every era and style represented in this distinguished suburb.",
            },
            {
                heading: "Chelmer Renovation Considerations",
                body: "Chelmer's riverside position and heritage housing create specific renovation considerations. Elevated humidity near the river makes exhaust ventilation and mould-resistant materials particularly important. Heritage-listed or character-overlay properties may require council approval for external changes visible from the street — we navigate these processes with experience. High-stumped Queenslanders require sub-floor plumbing access and specialist waterproofing for suspended timber floors. Some Chelmer properties in flood-prone positions require fixtures and finishes selected for resilience. Premium homes demand meticulous protection of existing finishes — polished timber floors, plasterwork, and original joinery — during the renovation process, and our team takes exceptional care.",
            },
            {
                heading: "Luxury Design for Chelmer Bathrooms",
                body: "Chelmer's design preferences reflect the suburb's premium positioning. Natural marble — Calacatta, Carrara, or Statuario — is frequently specified for vanity tops, shower feature walls, and bath surrounds. Freestanding baths in composite stone or copper finishes serve as sculptural room anchors. Bespoke timber vanity cabinetry in American oak or walnut, designed in collaboration with local joiners, replaces off-the-shelf alternatives. Polished or brushed-brass tapware complements heritage proportions, while matte-black suits contemporary designs. Crystal pendant lighting, fluted glass partitions, and hand-glazed feature tiles add layers of refinement. The result is a bathroom that feels commensurate with Chelmer's architectural excellence.",
            },
            {
                heading: "Our Chelmer Renovation Approach",
                body: "Chelmer projects receive our most attentive service. The process begins with an extended in-home consultation where we study the home's architecture, assess structural and plumbing condition, and understand your aesthetic vision. Our design team presents concepts with 3D visualisation, material samples, and a detailed fixed-price proposal. The renovation is executed by our most experienced tradespeople — careful demolition, precision plumbing and electrical work, certified waterproofing, expert stone and tile installation, bespoke joinery fitting, and an exhaustive quality inspection. Chelmer projects typically run three to four weeks for master bathrooms.",
            },
            {
                heading: "Why Chelmer Homes Choose Brisbathco",
                body: "Chelmer homeowners choose us for our ability to deliver premium results without cutting corners. Our QBCC licence, comprehensive insurance, and detailed written warranties provide formal assurance. Our relationships with Brisbane's finest material suppliers, our in-house joinery coordination, and our permanent team of senior tradespeople enable us to execute designs that meet Chelmer's exacting standards. We treat every Chelmer home with the reverence it deserves.",
            },
            {
                heading: "Begin Your Chelmer Bathroom Renovation",
                body: "Give your Chelmer home the bathroom it deserves. Contact Brisbathco for a complimentary consultation and a comprehensive, no-obligation proposal. We also serve nearby Kenmore, Toowong, and across Brisbane's prestigious western corridor.",
            },
        ],
        nearbySuburbs: [
            { name: "Kenmore", slug: "kenmore" },
            { name: "Toowong", slug: "toowong" },
            { name: "Bardon", slug: "bardon" },
        ],
        jsonLd: makeSchema("Chelmer", "chelmer", "Premium riverside bathroom renovations in Chelmer, Brisbane."),
    },
];
