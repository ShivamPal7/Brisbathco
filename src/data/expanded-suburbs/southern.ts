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

export const southernSuburbs: ExpandedSuburbData[] = [
    {
        name: "Holland Park",
        slug: "holland-park",
        metaTitle: "Bathroom Renovations Holland Park | Brisbathco",
        metaDescription: "Character-home bathroom specialists in Holland Park. Expert waterproofing, heritage-sensitive design & modern luxury. Free consultation.",
        heroHeading: "Bathroom Renovations in Holland Park",
        heroSubheading: "Character-home bathroom renovations that honour Holland Park's heritage while delivering modern luxury",
        sections: [
            {
                heading: "Holland Park's Bathroom Renovation Specialists",
                body: "Holland Park occupies a coveted position in Brisbane's inner south — close enough to the city for convenience, yet retaining the tree-shaded streets and community warmth that make it feel like a genuine neighbourhood. The suburb's charming post-war homes and classic Queenslanders are much loved, but their original bathrooms often lag decades behind the rest of the house. Brisbathco specialises in bathroom renovations that bridge this gap, delivering modern comfort and water efficiency without compromising the character that makes Holland Park homes so desirable. From sensitive heritage renovations in timber cottages to contemporary ensuite builds in renovated family homes, we bring a design-led approach and meticulous craftsmanship to every Holland Park project.",
            },
            {
                heading: "Our Specialist Renovation Capabilities",
                body: "We offer comprehensive bathroom renovation services across Holland Park, including complete strip-and-rebuild projects, targeted upgrades such as shower conversions and vanity replacements, ensuite additions within existing floor plans, full re-tiling, waterproofing remediation, and plumbing system overhauls. Our heritage renovation experience is particularly relevant in Holland Park, where many homes feature original timber framing, suspended floors, and plumbing systems that require sympathetic but thorough upgrading. We coordinate every aspect — plumbing, electrical, waterproofing, tiling, and joinery — through a single project manager, ensuring seamless execution.",
            },
            {
                heading: "Holland Park's Property Character",
                body: "The suburb's architectural identity is defined by its post-war timber homes — modest but well-proportioned dwellings with hardwood frames, chamferboard cladding, and often compact bathrooms positioned at the rear of the house. Many have been extended or raised over the years, creating renovation opportunities that didn't exist in the original floor plan. Classic Queenslanders with high stumps and airy interiors dot the higher ground, while brick-veneer homes from the 1970s occupy the flatter streets. Newer townhouse developments fill selected infill sites. Each property type requires a different bathroom renovation strategy, and our breadth of experience across Holland Park ensures we bring the right expertise to your specific home.",
            },
            {
                heading: "Common Bathroom Challenges in Holland Park",
                body: "Holland Park's older homes frequently present waterproofing challenges. Timber-framed bathrooms built before modern membrane standards may have relied on lead pans or rudimentary paint-on sealants that have deteriorated over decades. We strip these back completely and install compliant waterproofing systems designed for timber substrates. Poor ventilation is another persistent issue — many original bathrooms feature only a small louvre window, allowing humidity to linger and promote mould growth on grout, silicone joints, and timber trim. We install ducted exhaust fans that actively remove moisture. Ageing galvanised plumbing, insufficient electrical circuits, and occasional asbestos finds are all within our standard renovation scope.",
            },
            {
                heading: "Popular Bathroom Designs in Holland Park",
                body: "Holland Park homeowners tend toward a refined, slightly eclectic aesthetic that suits their character homes. White subway tiles with contrasting grout, terrazzo-look floor tiles, and shaker-style vanities create a timeless base that works across multiple architectural eras. Brass and brushed-gold tapware adds warmth and charm, while modern amenities — heated towel rails, LED-backlit mirrors, and walk-in rain showers — are integrated without disrupting the overall character. Natural stone mosaics in shower niches provide artisanal texture, and freestanding baths in classic oval or slipper styles are popular centrepieces in ensuites where space permits. The palette tends to be warm and grounded — creams, sage greens, and soft terracottas.",
            },
            {
                heading: "Our Renovation Process",
                body: "Every Holland Park renovation begins with a thorough in-home consultation where we evaluate floor structure, plumbing age, and any heritage considerations. Our design team produces a 3D concept with a transparent fixed-price quote. The renovation sequence follows our proven methodology: careful demolition, plumbing and electrical rough-in, waterproofing with independent certification, tiling, fixture installation, joinery, and a comprehensive quality inspection. Most Holland Park projects are completed within two to three weeks. Daily progress updates from your project manager keep you fully informed.",
            },
            {
                heading: "Why Holland Park Trusts Brisbathco",
                body: "Our character-home expertise and south-side presence make us the natural choice for Holland Park residents. We hold a current QBCC licence, full insurance, and provide written workmanship warranties. Our tradespeople are permanent team members who understand the nuances of working with older homes, and our pricing is transparent from day one. Holland Park families have trusted us for years — and their referrals are our greatest compliment.",
            },
            {
                heading: "Start Your Holland Park Renovation",
                body: "Give your Holland Park home the bathroom it deserves. Contact Brisbathco for a free, no-obligation consultation. We also deliver premium bathroom renovations in nearby Coorparoo, Carindale, and Carina — your trusted south-side renovation partner.",
            },
        ],
        nearbySuburbs: [
            { name: "Coorparoo", slug: "coorparoo" },
            { name: "Carindale", slug: "carindale" },
            { name: "Carina", slug: "carina" },
        ],
        jsonLd: makeSchema("Holland Park", "holland-park", "Character-home bathroom renovations in Holland Park, Brisbane."),
    },
    {
        name: "Carindale",
        slug: "carindale",
        metaTitle: "Bathroom Renovations Carindale | Brisbathco",
        metaDescription: "Carindale bathroom renovations by Brisbathco — your local specialists. Family bathrooms, ensuites & luxury upgrades. Free quotes available.",
        heroHeading: "Bathroom Renovations in Carindale",
        heroSubheading: "Your local Carindale bathroom renovation specialists — premium craftsmanship from right next door",
        sections: [
            {
                heading: "Carindale's Local Bathroom Renovation Team",
                body: "Carindale is where Brisbathco's story began, and it remains our home suburb. This gives us an intimate understanding of the area that no other renovation company can match. We know the housing stock, the soil conditions, the local plumbing infrastructure, and the lifestyle priorities of Carindale families. The suburb's spacious family homes near Westfield Carindale and along Creek Road deserve bathrooms that reflect their generous proportions and quality construction. Whether you're modernising an original 1980s bathroom or adding a luxurious ensuite to your master bedroom, Brisbathco delivers Carindale bathroom renovations with the care and precision that only a true local can provide.",
            },
            {
                heading: "Comprehensive Bathroom Renovation Services",
                body: "From our Carindale workshop, we deliver the full spectrum of bathroom renovation services. Complete strip-out-and-rebuild projects transform dated bathrooms into contemporary retreats, while targeted upgrades — shower replacements, vanity installations, re-tiling, and fixture updates — refresh your space without a full renovation budget. We handle ensuite additions, accessible bathroom modifications, waterproofing repair and certification, and full plumbing system upgrades. Our integrated team of licensed plumbers, waterproofers, tilers, electricians, and joiners works under one project manager, ensuring coordination and accountability at every stage.",
            },
            {
                heading: "Carindale's Residential Landscape",
                body: "Carindale is predominantly a suburb of 1970s to 1990s brick-and-tile family homes, many on generous blocks with multiple bathrooms. These homes typically feature separate shower and bath configurations, built-in vanity units, and ceramic tiles in colours that have long since fallen from fashion. The suburb's newer pockets include contemporary townhouse developments and some modern detached homes, usually with builder-grade bathrooms that can be elevated significantly with premium fixtures and finishes. We've renovated bathrooms across every Carindale street and building era, giving us unmatched insight into the specific construction methods, plumbing layouts, and material choices used in this suburb.",
            },
            {
                heading: "Renovation Challenges We Solve in Carindale",
                body: "Carindale's 1970s and 1980s homes commonly feature mint-green, peach, or brown bathroom suites that define an era best left behind. Beyond aesthetics, these older bathrooms often have failing waterproofing membranes beneath the tiles, leading to damp spots on ceilings below or water damage to sub-floor structures. Original galvanised plumbing in some homes corrodes internally over time, causing discoloured water and reduced pressure. We replace these systems with modern copper or PEX pipework as standard. Asbestos-containing materials in wall sheeting, floor tiles, and adhesives are another common finding in pre-1990 Carindale homes — we manage licensed removal safely and compliantly.",
            },
            {
                heading: "Bathroom Design Trends in Carindale",
                body: "Carindale families prefer bathrooms that balance visual appeal with practical durability. Large-format porcelain tiles in stone or concrete looks are the dominant floor choice, paired with matching or complementary wall tiles for a cohesive feel. Double vanities are frequently requested in family bathrooms and ensuites, providing space for busy morning routines. Walk-in showers with frameless glass screens have largely replaced shower-over-bath setups, and back-to-wall freestanding baths serve as elegant focal points. Matte-black or brushed-nickel tapware provides contemporary contrast, and recessed mirrored cabinets with integrated lighting maximise storage in bathrooms of all sizes.",
            },
            {
                heading: "How Your Carindale Renovation Unfolds",
                body: "Being based in Carindale means we're typically at your door within minutes. Our process starts with a free in-home consultation, followed by a detailed 3D design and fixed-price quote. The renovation proceeds through demolition, plumbing and electrical rough-in, certified waterproofing, precision tiling, fixture installation, and a thorough final inspection. Most Carindale bathrooms are completed within 10 to 15 business days. Our project manager provides daily updates and is available for in-person site visits whenever you'd like to check progress.",
            },
            {
                heading: "Why Carindale Chooses Its Local Renovator",
                body: "As Carindale locals, we bring unmatched responsiveness, accountability, and pride to every project. Our QBCC licence, comprehensive insurance, and written warranties provide formal protection, while our neighbourhood reputation ensures we treat every home with the same care we'd give our own. Over 120 Carindale homeowners have trusted us to transform their bathrooms — and their five-star reviews speak for themselves.",
            },
            {
                heading: "Get Your Carindale Bathroom Quote",
                body: "Ready for a bathroom renovation by Carindale's own? Contact Brisbathco for a free consultation and transparent fixed-price quote. We also deliver premium bathroom renovations in Holland Park, Carina, and Coorparoo — but nowhere do we feel more at home than Carindale.",
            },
        ],
        nearbySuburbs: [
            { name: "Holland Park", slug: "holland-park" },
            { name: "Carina", slug: "carina" },
            { name: "Coorparoo", slug: "coorparoo" },
            { name: "Bulimba", slug: "bulimba" },
        ],
        jsonLd: makeSchema("Carindale", "carindale", "Local bathroom renovation specialists in Carindale, Brisbane."),
    },
    {
        name: "Carina",
        slug: "carina",
        metaTitle: "Bathroom Renovations Carina | Brisbathco",
        metaDescription: "Quality bathroom renovations in Carina, Brisbane. Family-friendly designs, expert tiling & waterproofing. Book your free consultation today.",
        heroHeading: "Bathroom Renovations in Carina",
        heroSubheading: "Quality family bathroom renovations designed for Carina's welcoming residential community",
        sections: [
            {
                heading: "Quality Bathroom Renovations for Carina Families",
                body: "Carina is one of Brisbane's most welcoming family suburbs — a place where parks, schools, and community sport are central to daily life. The suburb's well-maintained homes reflect the pride residents take in their neighbourhood, and a modern bathroom renovation extends that pride into one of the most-used rooms in the house. Brisbathco delivers bathroom renovations that Carina families can rely on — durable, beautifully finished, and designed to accommodate the realities of busy household life. Whether it's a functional upgrade for a growing family or a stylish ensuite retreat for parents, our team tailors every Carina project to your specific needs and budget.",
            },
            {
                heading: "Our Carina Renovation Expertise",
                body: "We handle the full scope of bathroom renovation work in Carina, from complete bathroom remodels to focused improvements. Our services include full strip-and-reline renovations, shower upgrades from bath-shower combinations to walk-in configurations, vanity replacement and installation, complete re-tiling, waterproofing repair and certification, plumbing upgrades, and accessible bathroom modifications. Our proximity to Carina — operating from our nearby Carindale base — means fast response times and easy access for pre-project consultations and post-completion follow-ups.",
            },
            {
                heading: "Carina's Housing Stock",
                body: "Carina's homes are predominantly solid brick-and-tile constructions from the 1960s through to the 1990s, with generous yards and practical floor plans built for growing families. Many feature the classic Queensland setup: a family bathroom with separate toilet, an original colour-matched suite, and ceramic tiles that have served well but are now visually tired. Some pockets of Carina include elevated timber homes on the suburb's higher ground, while newer townhouse and duplex developments add contemporary housing to the mix. Each construction type influences how we approach waterproofing, plumbing access, and layout modification — and our extensive Carina experience ensures we get it right every time.",
            },
            {
                heading: "Bathroom Challenges Common in Carina",
                body: "Carina's older bathrooms share several recurring issues. Ceramic floor tiles bedded directly into sand-and-cement screed over concrete slabs can crack as the slab moves over time, allowing water to penetrate beneath. Our renovations address this with proper preparation, substrate priming, and flexible tile adhesives that accommodate minor movement. Shower recesses with hob entries — the raised step common in 1970s and 1980s bathrooms — create trip hazards and dated aesthetics; we convert these to flush-entry designs with linear drains. Old mixer taps with worn cartridges cause temperature fluctuations; we replace these with modern thermostatic mixers for safe, consistent water temperature. Ventilation inadequacy, mould-prone grout, and outdated lighting are all resolved as part of our renovation scope.",
            },
            {
                heading: "Bathroom Designs Carina Families Love",
                body: "Carina homeowners gravitate toward practical sophistication — designs that handle family life while looking genuinely beautiful. Porcelain floor tiles in neutral tones with matching wall tiles create clean, cohesive spaces. Semi-frameless or frameless shower screens replace shower curtains and framed enclosures, instantly upgrading the room's visual appeal. Wall-hung vanities with solid-surface tops and soft-close drawers provide ample storage. Built-in shower niches eliminate the need for freestanding caddies, while LED downlights and backlit mirror cabinets improve illumination beyond the single centre light fitting common in older Carina bathrooms. Anti-slip finishes on floor tiles are a popular specification for families with young children.",
            },
            {
                heading: "Your Carina Renovation Step by Step",
                body: "We begin with a free in-home consultation at your Carina property, followed by a detailed 3D design concept and fixed-price quote. Our team then delivers the renovation through a structured sequence: demolition and waste removal, plumbing and electrical rough-in, waterproofing with independent certification, tiling, fixture installation, and final quality inspection. Most Carina projects are completed within 10 to 15 business days. Your dedicated project manager keeps things running smoothly and keeps you informed at every stage.",
            },
            {
                heading: "Why Carina Families Trust Brisbathco",
                body: "Our Carindale base makes us Carina's closest bathroom renovation specialist. We hold a current QBCC licence, carry comprehensive insurance, and provide written workmanship warranties. Our permanent team delivers consistent quality without subcontractor variables, and our fixed pricing means the quote we give is the price you pay. Carina families trust us because we deliver what we promise — every time.",
            },
            {
                heading: "Book Your Carina Bathroom Consultation",
                body: "Transform your Carina bathroom with a team that understands family priorities. Book a free consultation with Brisbathco and get a transparent, no-obligation quote. We also deliver outstanding bathroom renovations in nearby Carindale, Holland Park, and Bulimba.",
            },
        ],
        nearbySuburbs: [
            { name: "Carindale", slug: "carindale" },
            { name: "Holland Park", slug: "holland-park" },
            { name: "Bulimba", slug: "bulimba" },
        ],
        jsonLd: makeSchema("Carina", "carina", "Quality family bathroom renovations in Carina, Brisbane."),
    },
    {
        name: "Bulimba",
        slug: "bulimba",
        metaTitle: "Bathroom Renovations Bulimba | Brisbathco",
        metaDescription: "Luxury bathroom renovations in Bulimba, Brisbane. Premium finishes, heritage sensitivity & expert craftsmanship. Schedule your free consultation.",
        heroHeading: "Bathroom Renovations in Bulimba",
        heroSubheading: "Luxury bathroom renovations to match Bulimba's premium riverside lifestyle",
        sections: [
            {
                heading: "Premium Bathroom Renovations in Bulimba",
                body: "Bulimba is one of Brisbane's most aspirational addresses — a riverside suburb where beautifully restored Queenslanders, immaculate character cottages, and architecturally designed contemporary homes line jacaranda-shaded streets. Oxford Street's boutique shopping and café culture set the tone for a suburb that values quality, authenticity, and design excellence. Bathrooms in Bulimba need to match this standard. Brisbathco delivers luxury bathroom renovations that meet Bulimba's exacting expectations, combining premium materials with expert craftsmanship to create spaces that feel as considered as the homes they occupy. From heritage-sensitive ensuite builds to contemporary master-bathroom transformations, we bring a design-led, detail-obsessed approach to every Bulimba project.",
            },
            {
                heading: "Luxury Renovation Expertise",
                body: "Our Bulimba expertise centres on high-specification bathroom renovations. We work with natural stone — marble, travertine, and granite — cut and installed with precision. Our tilers are specialists in large-format, bookmatched, and mosaic installations. We source designer tapware from leading European and Australian brands, install freestanding baths as sculptural centrepieces, and build custom vanities in collaboration with local joinery workshops. Every Bulimba project includes premium waterproofing, underfloor heating options, and integrated lighting design. We also handle complex plumbing reconfigurations for homes where the original bathroom layout no longer suits the way families live today.",
            },
            {
                heading: "Bulimba's Architectural Excellence",
                body: "Bulimba's housing stock sets a high bar. Grand Queenslanders with soaring ceilings and polished timber floors occupy the suburb's historic core, many beautifully restored but with bathrooms that haven't kept pace. Sensitively renovated workers' cottages on the smaller streets offer charm and character but often feature tiny, single-plumbing-point bathrooms that need complete reimagining. Contemporary homes along the riverfront and in new subdivisions deliver generous bathroom footprints but frequently with builder-grade finishes that fall short of Bulimba's premium positioning. Each property type demands a bespoke approach, and our portfolio of completed Bulimba projects demonstrates our capability across the full range.",
            },
            {
                heading: "Navigating Bulimba's Renovation Complexities",
                body: "Renovating in Bulimba means working with heritage-overlay considerations, narrow-lot access constraints, and the elevated expectations of a discerning clientele. Character-home bathrooms require careful demolition to avoid damaging original timber features in adjacent rooms. Plumbing heritage homes often involves working beneath high-stumped floors where pipe routing must align with existing bearer and joist positions. Waterproofing on suspended timber floors requires flexible membrane systems that accommodate structural movement. In newer homes, acoustic separation between bathrooms and living areas, and between levels in two-storey designs, ensures privacy and comfort. Bulimba's proximity to the river can increase ambient humidity, making exhaust ventilation and mould-resistant materials critical.",
            },
            {
                heading: "Design Excellence in Bulimba Bathrooms",
                body: "Bulimba homeowners have a refined eye, and their bathroom briefs reflect global design awareness. Natural stone slabs — honed marble, fluted limestone — are frequently specified for vanity tops and feature walls. Freestanding baths in matte-white or concrete finishes serve as room anchors, often positioned beneath statement pendant lights. Bespoke timber vanities crafted from recycled Queensland hardwood honour the suburb's character heritage. Brushed-brass and aged-copper tapware adds warmth and develops a living patina that Bulimba residents appreciate. Rain showerheads on ceiling-mounted arms, frameless glass with minimal hardware, and concealed cistern systems create an uncluttered, hotel-suite aesthetic that defines luxury in Bulimba.",
            },
            {
                heading: "Our Process for Bulimba Renovations",
                body: "We approach Bulimba projects with heightened attention to detail. Our consultation includes thorough heritage and structural assessment, followed by a detailed design concept presented with 3D visualisation and material samples. The fixed-price quote is comprehensive — covering every element from demolition through to final styling. Our team executes the renovation with care: meticulous demolition preserving adjacent finishes, precision plumbing and electrical work, certified waterproofing, expert tile and stone installation, bespoke joinery fitting, and a rigorous quality inspection. Bulimba projects typically run two to three weeks.",
            },
            {
                heading: "Why Bulimba Chooses Brisbathco",
                body: "Bulimba residents choose us for our ability to deliver genuinely premium results — not just premium pricing. Our QBCC licence, comprehensive insurance, and detailed written warranties provide formal assurance. Our portfolio of completed Bulimba projects, our relationships with premium material suppliers, and our permanent team of senior tradespeople demonstrate a capability that matches the suburb's standards. We treat every Bulimba home with the reverence its position demands.",
            },
            {
                heading: "Begin Your Bulimba Bathroom Transformation",
                body: "Elevate your Bulimba home with a bathroom renovation that matches its address. Book a complimentary consultation with Brisbathco and receive a detailed, no-obligation quote for your project. We also serve nearby Hawthorne, Coorparoo, and New Farm with the same commitment to premium quality.",
            },
        ],
        nearbySuburbs: [
            { name: "Hawthorne", slug: "hawthorne" },
            { name: "Coorparoo", slug: "coorparoo" },
            { name: "New Farm", slug: "new-farm" },
            { name: "Carina", slug: "carina" },
        ],
        jsonLd: makeSchema("Bulimba", "bulimba", "Luxury bathroom renovations in Bulimba, Brisbane."),
    },
    {
        name: "Coorparoo",
        slug: "coorparoo",
        metaTitle: "Bathroom Renovations Coorparoo | Brisbathco",
        metaDescription: "Contemporary bathroom renovations in Coorparoo. Houses & apartments. Expert design, waterproofing & tiling. Free quotes from Brisbathco.",
        heroHeading: "Bathroom Renovations in Coorparoo",
        heroSubheading: "Contemporary bathroom renovations for Coorparoo's evolving homes and modern apartments",
        sections: [
            {
                heading: "Coorparoo's Bathroom Renovation Leaders",
                body: "Coorparoo has emerged as one of Brisbane's most dynamic inner-south suburbs — a neighbourhood where lovingly restored Queenslanders share fences with stylish new apartment complexes, and where Old Cleveland Road's emerging hospitality scene attracts residents who value both convenience and character. This evolution creates strong demand for bathrooms that keep pace with Coorparoo's progressive identity. Brisbathco delivers contemporary bathroom renovations that serve both halves of Coorparoo's property market — character homes that need modern bathrooms without losing their soul, and apartments that deserve designs far superior to standard developer fitouts. Our dual expertise in heritage renovation and modern apartment work makes us uniquely suited to this diverse suburb.",
            },
            {
                heading: "Experienced Across Every Bathroom Type",
                body: "Our Coorparoo renovation services span the full spectrum. For house owners, we deliver complete bathroom remodels, ensuite builds, shower conversions, full re-tiling, vanity upgrades, and plumbing overhauls. For apartment owners, we navigate body corporate approvals, meet enhanced waterproofing standards, and work within construction-hour restrictions while delivering stunning results. Our expertise covers every fixture and finish — from walk-in rain showers and freestanding baths to wall-hung toilets, custom vanity joinery, and integrated LED mirror cabinets. We handle the complete renovation under one project manager, eliminating coordination headaches.",
            },
            {
                heading: "Coorparoo's Evolving Property Mix",
                body: "Coorparoo's housing diversity is one of its defining features. The suburb's elevated western streets are home to classic Queenslanders with wide verandahs and compact original bathrooms. Post-war brick cottages occupy the middle ground, while the Old Cleveland Road corridor has seen significant apartment development in recent years. Character renovations — homes that have been extended, raised, or restored — create varied bathroom configurations, each needing a tailored approach. Modern townhouses fill gaps between older homes, typically with functional but uninspired builder-grade bathrooms. Our extensive Coorparoo experience means we've worked across every property type and know how to maximise results within each context.",
            },
            {
                heading: "Coorparoo-Specific Renovation Challenges",
                body: "Coorparoo's property diversity brings varied challenges. Character homes feature timber-framed walls and suspended floors that require specialist waterproofing and careful load assessment before heavy fixtures like stone baths are installed. Apartment renovations demand strata-compliant waterproofing inspected at multiple stages, body corporate paperwork, and noise-managed construction within prescribed hours. Older homes may contain asbestos in wall linings or floor tiles, and we coordinate licensed removal as part of the renovation program. Coorparoo's clay soils can cause minor slab movement in older homes, affecting tile adhesion — we mitigate this with flexible adhesives and appropriate joint detailing.",
            },
            {
                heading: "Design Trends Defining Coorparoo Bathrooms",
                body: "Coorparoo's resident demographic — a mix of young professionals and established families — drives design preferences that lean contemporary with occasional character nods. Terrazzo-look tiles, hand-glazed subway tiles in soft blush or blue-grey, and concrete-effect porcelain are popular surface choices. Matte-black tapware remains dominant, but brushed-gunmetal and aged-brass are gaining ground. In character homes, clawfoot or skirted baths pay homage to the home's heritage, while walk-in showers with rain heads dominate in modern configurations. Wall-hung vanities with timber drawer-fronts bring warmth to otherwise minimal palettes. Recessed shower niches with feature tile backs add personality to every shower recess.",
            },
            {
                heading: "Our Coorparoo Renovation Workflow",
                body: "We start with a complimentary in-home consultation — assessing your bathroom, discussing your brief, and identifying any strata or heritage considerations. Our design team delivers a 3D concept with fixed-price quotation. For apartments, we prepare body corporate applications on your behalf. The renovation follows our proven sequence: demolition, rough-in trades, certified waterproofing, precision tiling, fixture installation, and final inspection. House renovations typically complete in 10 to 15 business days; apartments may be slightly longer depending on strata processes.",
            },
            {
                heading: "Why Coorparoo Picks Brisbathco",
                body: "Our ability to handle both character-home and apartment renovations with equal expertise is why Coorparoo residents choose us. We hold a current QBCC licence, maintain full insurance, and stand behind every project with a written workmanship warranty. Our permanent team ensures consistent quality, and our transparent pricing means no unwelcome surprises. Our inner-south location keeps us close and responsive.",
            },
            {
                heading: "Get Your Coorparoo Bathroom Quote",
                body: "Whether you're in a heritage cottage or a modern apartment, Brisbathco is ready to transform your Coorparoo bathroom. Book a free consultation and receive a detailed, no-obligation quote. We also deliver premium bathroom renovations in Holland Park, Bulimba, and West End.",
            },
        ],
        nearbySuburbs: [
            { name: "Holland Park", slug: "holland-park" },
            { name: "Bulimba", slug: "bulimba" },
            { name: "West End", slug: "west-end" },
        ],
        jsonLd: makeSchema("Coorparoo", "coorparoo", "Contemporary bathroom renovations in Coorparoo, Brisbane."),
    },
    {
        name: "West End",
        slug: "west-end",
        metaTitle: "Bathroom Renovations West End | Brisbathco",
        metaDescription: "West End bathroom renovations by Brisbathco. Creative designs for apartments, cottages & warehouses. Expert tiling & waterproofing. Free quotes.",
        heroHeading: "Bathroom Renovations in West End",
        heroSubheading: "Creative, design-forward bathroom renovations for West End's eclectic homes and apartments",
        sections: [
            {
                heading: "Creative Bathroom Renovations for West End",
                body: "West End pulses with an energy that's entirely its own — a suburb where artists' studios sit alongside converted warehouses, heritage worker's cottages neighbour contemporary apartment towers, and Boundary Street's restaurants draw diners from across Brisbane. This creative, cosmopolitan atmosphere shapes how West End residents think about their bathrooms. There's a preference for designs that feel intentional, expressive, and a little unexpected. Brisbathco embraces this brief, delivering bathroom renovations for West End homes and apartments that push beyond safe convention while maintaining the quality and functionality that daily use demands. Our experience with West End's diverse property types — from tiny cottage bathrooms to penthouse ensuites — ensures every project is tailored to its specific context.",
            },
            {
                heading: "Diverse Renovation Capabilities",
                body: "West End demands versatility, and we deliver. Our services span complete bathroom renovations in heritage cottages, space-maximising apartment bathroom upgrades, warehouse-conversion wet-room builds, ensuite additions, shower upgrades, custom vanity installations, full re-tiling, waterproofing repair and certification, and plumbing system modernisation. We're experienced with the compact footprints common in West End's older dwellings, using design techniques — floating vanities, frameless glass, curbless showers — that create openness and flow within limited dimensions.",
            },
            {
                heading: "West End's Eclectic Property Types",
                body: "Few suburbs match West End's architectural diversity. Heritage worker's cottages with VJ walls and timber floors line the quieter streets, often featuring single compact bathrooms that haven't changed since the house was built. Converted warehouses and commercial buildings repurposed as residential lofts present industrial canvases for bathroom design — high ceilings, exposed beams, and open layouts that lend themselves to wet-room configurations. Modern apartment towers along the riverfront offer contemporary bathrooms with city views but typically bland developer finishes. Narrow-lot contemporaries built on subdivided blocks feature multi-level designs where bathroom plumbing must be carefully integrated across floors.",
            },
            {
                heading: "Renovation Challenges Unique to West End",
                body: "West End's density and heritage fabric create unique renovation logistics. Many homes and apartments have restricted access — narrow laneways, shared driveways, or limited street parking that requires careful delivery scheduling. Body corporate regulations in West End's many apartment complexes dictate construction hours, noise levels, and waterproofing standards. Heritage-listed or character-overlay properties demand sensitive renovation approaches that maintain streetscape values. Older cottages on reactive clay soils may show slab or pier movement that affects bathroom floor levels. We navigate these challenges daily and have developed streamlined processes for every scenario West End presents.",
            },
            {
                heading: "West End Bathroom Design Trends",
                body: "West End's design sensibility is bold and globally informed. Industrial-luxe finishes dominate in warehouse conversions — polished concrete floors, Crittall-style matte-black shower frames, exposed copper pipework treated as a design feature, and oversized concrete basins. In heritage cottages, a more layered approach combines vintage-reproduction fixtures with modern tilework — handmade zellige tiles in rich greens or deep blues, brass basin taps with cross-head handles, and open timber shelving. Apartment owners often request hotel-inspired minimalism: wall-to-wall stone-look tiles, floating vanities with integrated basins, and recessed LED lighting that eliminates visual clutter. Statement vanity mirrors — arched, irregular, or tinted — are a signature West End touch.",
            },
            {
                heading: "Our West End Renovation Approach",
                body: "We approach West End projects with the flexibility this eclectic suburb demands. Our consultation assesses property type, access logistics, strata or heritage requirements, and your design vision. The fixed-price quote covers every element. Our renovation team is experienced with apartment-building protocols, heritage-sensitive demolition, and creative problem-solving for unusual layouts. The sequence — demolition, rough-in trades, certified waterproofing, tiling, fixture installation, final detailing — is adapted to each property's requirements. Most West End projects complete within two to three weeks.",
            },
            {
                heading: "Why West End Chooses Brisbathco",
                body: "West End residents value creativity and craftsmanship — two qualities we deliver consistently. Our QBCC licence, insurance, and written warranties provide formal assurance, while our portfolio of unconventional, design-led projects demonstrates our ability to execute bold concepts. We use only permanent team members, source from Brisbane's premium material suppliers, and price transparently without negotiation games.",
            },
            {
                heading: "Start Your West End Bathroom Project",
                body: "Give your West End home or apartment a bathroom that reflects the suburb's creative spirit. Book a free consultation with Brisbathco and discover what's possible. We also serve nearby Coorparoo, Bulimba, and across Brisbane's inner south with the same design-forward approach.",
            },
        ],
        nearbySuburbs: [
            { name: "Coorparoo", slug: "coorparoo" },
            { name: "Bulimba", slug: "bulimba" },
            { name: "Holland Park", slug: "holland-park" },
        ],
        jsonLd: makeSchema("West End", "west-end", "Creative bathroom renovations in West End, Brisbane."),
    },
    {
        name: "Kenmore",
        slug: "kenmore",
        metaTitle: "Bathroom Renovations Kenmore | Brisbathco",
        metaDescription: "Kenmore bathroom renovations by Brisbathco. Spacious designs for family homes. Expert waterproofing, tiling & luxury finishes. Free consultation.",
        heroHeading: "Bathroom Renovations in Kenmore",
        heroSubheading: "Spacious, nature-connected bathroom renovations for Kenmore's premium family homes",
        sections: [
            {
                heading: "Luxury Bathroom Renovations for Kenmore Homes",
                body: "Kenmore represents Brisbane's western suburb ideal — generous blocks, established gardens, excellent schools, and a semi-rural atmosphere that belies its convenient proximity to the city. Homes here tend to be substantial family residences, many with multiple bathrooms that are due for a comprehensive upgrade. Brisbathco delivers bathroom renovations that match Kenmore's premium positioning, creating spacious, light-filled bathrooms that feel connected to the natural beauty of the surrounding landscape. Whether you're transforming an oversized 1980s master ensuite into a contemporary spa-like retreat or modernising a secondary family bathroom for growing children, our team brings expertise and attention to detail that Kenmore homeowners expect.",
            },
            {
                heading: "Comprehensive Renovation Expertise",
                body: "Our Kenmore capabilities reflect the suburb's emphasis on quality. We deliver full bathroom remodels with premium natural stone, custom timber vanity joinery, freestanding bath installations, walk-in rain showers with multiple shower heads, and underfloor heating systems. Our services also include ensuite additions, accessible bathroom modifications, plumbing system upgrades from ageing galvanised to modern copper or PEX, waterproofing remediation and certification, and complete re-tiling. We source materials from Brisbane's leading suppliers and work with local joiners for bespoke cabinetry.",
            },
            {
                heading: "Kenmore's Spacious Family Homes",
                body: "Kenmore's housing stock consists largely of substantial family homes built between the 1970s and 2000s, many on blocks exceeding 800 square metres. These homes typically feature three or more bathrooms — a master ensuite, a family bathroom, and sometimes a guest bathroom or downstairs powder room. The generous bathroom dimensions offer wonderful renovation potential but also present scale challenges: proportioned tile selection, vanity sizing, and fixture placement must suit the room's volume rather than default to standard dimensions. Some of Kenmore's older homes feature split-level designs on sloped blocks, while newer homes on subdivided land tend toward contemporary two-storey layouts.",
            },
            {
                heading: "Renovation Considerations in Kenmore",
                body: "Kenmore's semi-bushland setting brings elevated humidity that challenges bathroom longevity if ventilation and waterproofing aren't addressed properly. Our renovations include high-performance exhaust systems and premium waterproofing membranes rated for Brisbane's climate. Homes on Kenmore's larger blocks sometimes rely on septic systems rather than mains sewer — a factor we assess during consultation to ensure fixture compatibility. Older plumbing systems may feature a mix of copper, galvanised, and PVC that we rationalise during the renovation. The suburb's reactive clay soils can cause minor slab movement in some properties, and we specify flexible tile adhesives and appropriate movement joints to prevent cracking.",
            },
            {
                heading: "Bathroom Designs That Suit Kenmore",
                body: "Kenmore homeowners embrace designs that echo the suburb's natural environment. Natural stone tiles in honed limestone or travertine finishes are popular floor and feature-wall choices, often paired with timber-look vanity units that bring organic warmth. Freestanding stone baths — oval, sculptural, and positioned as room centrepieces — are a signature Kenmore feature. Rain showerheads on ceiling-mounted arms create a drenching experience in the generous shower recesses these homes allow. Matte-black or brushed-bronze tapware grounds the natural palette. Skylights are frequently incorporated to flood internal bathrooms with daylight, and heated towel rails provide comfort during Kenmore's cooler mornings.",
            },
            {
                heading: "How We Deliver Your Kenmore Renovation",
                body: "We begin with a thorough in-home consultation, assessing each bathroom you'd like to renovate and discussing your priorities. Our design team produces 3D visualisations and a comprehensive fixed-price quote. The renovation is executed by our permanent team: demolition, plumbing and electrical rough-in, waterproofing with independent certification, precision stone and tile installation, custom joinery fitting, and a rigorous final inspection. Multi-bathroom Kenmore projects are sequenced for efficiency, often completing within three to four weeks. Your project manager coordinates every detail.",
            },
            {
                heading: "Why Kenmore Families Choose Brisbathco",
                body: "Kenmore families choose us for our ability to deliver premium results at scale — handling multi-bathroom projects with the same precision we bring to a single room. Our QBCC licence, comprehensive insurance, and detailed written warranties protect your investment. Our team takes genuine pride in their craft, our pricing is transparent, and our project management keeps complex renovations running smoothly.",
            },
            {
                heading: "Transform Your Kenmore Bathrooms",
                body: "Give your Kenmore home the bathrooms it deserves. Contact Brisbathco for a free multi-bathroom consultation and a transparent, no-obligation quote. We also serve nearby Chelmer, Toowong, and across Brisbane's western corridor.",
            },
        ],
        nearbySuburbs: [
            { name: "Chelmer", slug: "chelmer" },
            { name: "Toowong", slug: "toowong" },
            { name: "Bardon", slug: "bardon" },
        ],
        jsonLd: makeSchema("Kenmore", "kenmore", "Premium family bathroom renovations in Kenmore, Brisbane."),
    },
];
