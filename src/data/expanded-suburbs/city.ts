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

export const citySuburbs: ExpandedSuburbData[] = [
    {
        name: "Fortitude Valley",
        slug: "fortitude-valley",
        metaTitle: "Bathroom Renovations Fortitude Valley | Brisbathco",
        metaDescription: "Fortitude Valley bathroom renovations. Apartment, loft & warehouse specialists. Bold design, expert waterproofing & quality tiling. Free quote.",
        heroHeading: "Bathroom Renovations in Fortitude Valley",
        heroSubheading: "Bold, design-driven bathroom renovations for Fortitude Valley's vibrant apartments, lofts, and converted spaces",
        sections: [
            {
                heading: "Design-Driven Bathroom Renovations in The Valley",
                body: "Fortitude Valley is Brisbane's most energetic inner-city precinct — a neighbourhood where heritage wool stores have become luxury apartments, where laneway bars share walls with contemporary residential towers, and where design-conscious residents demand interiors that match the suburb's creative pulse. Bathrooms in Fortitude Valley aren't just functional spaces — they're expressions of personal style within one of Australia's most architecturally diverse urban environments. Brisbathco delivers bathroom renovations that meet The Valley's bold aesthetic standards, working across apartment complexes, converted warehouse lofts, and heritage buildings with equal expertise. Our understanding of strata-regulated renovation and inner-city construction logistics makes us the natural choice for Valley residents.",
            },
            {
                heading: "Inner-City Renovation Expertise",
                body: "Our Valley expertise is shaped by extensive apartment and mixed-use building experience. We manage body corporate approval processes, comply with strict construction-hour regulations, navigate elevator-access-only material deliveries, and meet the enhanced waterproofing specifications required in multi-storey buildings. Our services span complete bathroom remodels, wet-room conversions, compact ensuite builds, fixture and tapware upgrades, re-tiling with premium materials, and plumbing modernisation. For loft and warehouse conversions, we design and build custom wet-room configurations that respect the industrial aesthetic while delivering full waterproof integrity. Every project is coordinated by a dedicated project manager.",
            },
            {
                heading: "Fortitude Valley's Property Diversity",
                body: "The Valley's residential landscape is dominated by apartment living, but the range is extraordinary. Heritage-listed buildings converted to residential use feature high ceilings, exposed brick, and industrial elements that create dramatic bathroom canvases. Contemporary high-rise towers along James Street and Ann Street offer compact but well-appointed bathrooms with city views. Mid-rise complexes from the 2000s provide mid-range bathroom footprints typically finished with bland developer selections. Boutique walk-up apartments in converted commercial buildings present unique layouts where standard bathroom plans don't apply. Each demands a bespoke renovation approach — and our Valley portfolio proves we deliver across the full spectrum.",
            },
            {
                heading: "Valley-Specific Renovation Challenges",
                body: "Inner-city renovation demands logistical precision. Material deliveries must be scheduled within body corporate-mandated hours, often using goods lifts with size restrictions that influence tile-format selection. Construction noise must be managed within strict time windows. Waterproofing in multi-storey buildings requires enhanced specifications with additional inspections before tiling commences. Older buildings may have original cast-iron drainage that needs assessment or replacement. Heritage-listed conversions sometimes limit the extent of structural modification, requiring creative design solutions within existing walls. We manage all of these considerations as routine elements of our Valley renovation process, ensuring compliance without compromising design ambition.",
            },
            {
                heading: "Fortitude Valley Design Trends",
                body: "The Valley's design sensibility is unapologetically bold. Industrial-luxe aesthetics dominate in warehouse conversions — polished concrete floors, Crittall-style shower frames, exposed pipework as design features, and oversized concrete or stone basins. In contemporary apartments, maximalist approaches are gaining ground — bold veined marble, dramatic colour-blocked tiling, and statement brass or gold tapware that commands attention. Tinted glass, fluted panels, and arched mirror profiles add architectural interest to compact spaces. LED strip lighting in niches and under floating vanities creates ambiance, while statement floor tiles in geometric or encaustic patterns anchor rooms with personality. The Valley doesn't do boring, and neither should its bathrooms.",
            },
            {
                heading: "Our Valley Renovation Process",
                body: "Valley projects begin with a site assessment that includes body corporate requirement review. We prepare strata applications, obtain necessary approvals, and schedule the renovation within permitted construction windows. Our team delivers the renovation in a structured sequence — demolition with waste managed through building protocols, plumbing and electrical rough-in, waterproofing with staged inspections, tiling, fixture installation, and final detailing. Most Valley apartment projects complete within two to three weeks. Your project manager handles all building-management communication.",
            },
            {
                heading: "Why The Valley Chooses Brisbathco",
                body: "Valley residents choose us for our proven apartment renovation expertise and our design-forward approach. Our QBCC licence, insurance, and written warranties protect your investment. Our strong relationships with Valley building managers streamline logistics, and our portfolio of bold, completed apartment projects proves we can execute the daring designs this suburb demands. We're responsive, locally present, and genuinely committed to design excellence.",
            },
            {
                heading: "Start Your Valley Bathroom Project",
                body: "Give your Fortitude Valley apartment a bathroom that matches the suburb's creative energy. Book a free consultation with Brisbathco and get a transparent, no-obligation quote. We also deliver expert bathroom renovations in New Farm, Newstead, and Bowen Hills.",
            },
        ],
        nearbySuburbs: [
            { name: "New Farm", slug: "new-farm" },
            { name: "Newstead", slug: "newstead" },
            { name: "Bowen Hills", slug: "bowen-hills" },
        ],
        jsonLd: makeSchema("Fortitude Valley", "fortitude-valley", "Design-driven apartment bathroom renovations in Fortitude Valley, Brisbane."),
    },
    {
        name: "New Farm",
        slug: "new-farm",
        metaTitle: "Bathroom Renovations New Farm | Brisbathco",
        metaDescription: "New Farm bathroom renovations — heritage homes & luxury apartments. Premium design, natural stone & expert craftsmanship. Free consultation.",
        heroHeading: "Bathroom Renovations in New Farm",
        heroSubheading: "Heritage-home and luxury-apartment bathroom renovations for New Farm's premium riverside lifestyle",
        sections: [
            {
                heading: "Premium Bathroom Renovations in New Farm",
                body: "New Farm is Brisbane's most celebrated inner-city suburb — a riverside neighbourhood where immaculate heritage Queenslanders, grand apartment complexes, and tree-lined streets create one of Australia's most liveable urban environments. From the vibrant café culture of James Street to the weekend serenity of New Farm Park, the suburb attracts residents who expect excellence in every aspect of their home. Bathrooms in New Farm must meet this standard. Brisbathco delivers premium bathroom renovations that honour the suburb's architectural heritage while introducing the contemporary design, premium materials, and expert craftsmanship that New Farm homeowners demand. Our combined heritage-home and luxury-apartment expertise makes us the ideal renovation partner for this distinguished suburb.",
            },
            {
                heading: "Heritage and Luxury Apartment Expertise",
                body: "Our New Farm capabilities are purpose-built for the suburb's twin demands. For heritage homes, we offer sensitive bathroom renovations that work within original timber-framed structures — specialist waterproofing for suspended floors, careful routing of modern plumbing through historic wall cavities, and fixture selections that complement period proportions. For luxury apartments, we deliver high-specification bathroom upgrades featuring imported natural stone, designer tapware from leading European makers, and bespoke vanity cabinetry. Every project includes independently certified waterproofing, precision tiling by experienced craftsmen, and the kind of finishing detail that New Farm's quality-conscious residents expect.",
            },
            {
                heading: "New Farm's Architectural Prestige",
                body: "New Farm's residential stock is exceptional. Grand Queenslanders on the suburb's elevated streets — Moray, Terrace, and Merthyr — represent some of Brisbane's finest heritage homes, with sweeping verandahs, ornate detailing, and interiors of museum-worthy quality. These homes often feature original bathrooms that are functional but lag years behind the home's overall standard. Luxury apartment complexes along the river — The Teneriffe and Riverwalk precincts — offer contemporary living with bathrooms finished to varying levels of quality. Federation-era brick homes, interwar walk-up apartments, and sensitively designed modern insertions complete the mix. Each demands a bespoke renovation approach.",
            },
            {
                heading: "Renovation Complexities in New Farm",
                body: "New Farm's heritage status and premium positioning create unique renovation conditions. Heritage-listed properties require council approval for external modifications, and internal renovations must respect the original building fabric where it's visible from the exterior. Working within grand Queenslanders means accommodating high ceilings, original dado rails, and timber floors that require non-invasive waterproofing solutions. Luxury apartment projects demand strata compliance, elevator logistics, and noise management within residential buildings where standards are exacting. New Farm's riverside location brings elevated humidity that makes ventilation design critical. We navigate all of these considerations with experience and professionalism.",
            },
            {
                heading: "Design Excellence in New Farm Bathrooms",
                body: "New Farm's design standards are among Brisbane's highest. Heritage-home bathrooms frequently feature natural marble — Calacatta, Carrara, or Noir Saint Laurent — installed as vanity tops, shower features, or full-wall cladding. Freestanding baths in copper, brass, or matte-white composite serve as sculptural centrepieces. Heritage-profile tapware in unlacquered brass or polished nickel honours the home's period while performing to modern standards. In apartments, the aesthetic tends toward refined minimalism — large-format stone-look porcelain, floating vanities with integrated basins, and wall-mounted fixtures that maximise floor space. Double vanities, heated floors, and smart mirrors with integrated Bluetooth are increasingly standard rather than optional.",
            },
            {
                heading: "Our New Farm Renovation Approach",
                body: "New Farm projects receive our most meticulous attention. The consultation phase includes detailed heritage assessment, structural evaluation, and an in-depth discussion of your design vision. Our team presents concepts with 3D visualisation, physical material samples, and a comprehensive fixed-price proposal. The renovation is executed by our senior tradespeople — heritage-appropriate demolition, precision plumbing and electrical work, certified waterproofing, expert stone and tile installation, bespoke joinery fitting, and a rigorous quality inspection. New Farm projects typically run two to four weeks depending on scope and complexity.",
            },
            {
                heading: "Why New Farm Chooses Brisbathco",
                body: "New Farm residents invest in their homes, and they choose renovation partners who match that investment with genuine expertise. Our QBCC licence, comprehensive insurance, and detailed warranties provide formal protection. Our heritage renovation portfolio, our relationships with premium material suppliers, and our permanent team of senior tradespeople demonstrate a capability commensurate with New Farm's prestige. We never subcontract, never cut corners, and always deliver what we promise.",
            },
            {
                heading: "Book Your New Farm Bathroom Consultation",
                body: "Elevate your New Farm home or apartment with a bathroom renovation that meets the suburb's premium standard. Contact Brisbathco for a complimentary consultation and a comprehensive, no-obligation proposal. We also serve nearby Fortitude Valley, Newstead, and Hawthorne.",
            },
        ],
        nearbySuburbs: [
            { name: "Fortitude Valley", slug: "fortitude-valley" },
            { name: "Newstead", slug: "newstead" },
            { name: "Hawthorne", slug: "hawthorne" },
        ],
        jsonLd: makeSchema("New Farm", "new-farm", "Premium bathroom renovations for heritage and luxury apartments in New Farm, Brisbane."),
    },
    {
        name: "Newstead",
        slug: "newstead",
        metaTitle: "Bathroom Renovations Newstead | Brisbathco",
        metaDescription: "Newstead bathroom renovations — luxury apartment specialists. Premium finishes, expert waterproofing & contemporary design. Free quotes available.",
        heroHeading: "Bathroom Renovations in Newstead",
        heroSubheading: "Luxury apartment bathroom renovations in Brisbane's most dynamic waterfront precinct",
        sections: [
            {
                heading: "Luxury Apartment Bathroom Renovations in Newstead",
                body: "Newstead has transformed from an industrial precinct into one of Brisbane's most sought-after waterfront neighbourhoods. The suburb's skyline of contemporary apartment towers, heritage-converted wool stores, and riverside promenades creates an urban environment that rivals any Australian city. Bathrooms in Newstead need to reflect this premium positioning — spaces that feel elevated, impeccably finished, and aligned with the lifestyle that drew residents to this dynamic riverside suburb. Brisbathco specialises in luxury apartment bathroom renovations that meet Newstead's contemporary expectations, delivering hotel-suite quality finishes within the compliance frameworks that multi-storey living requires.",
            },
            {
                heading: "Apartment-Focused Renovation Mastery",
                body: "Our Newstead expertise centres on apartment bathroom renovations executed to the highest standard. We deliver complete bathroom remodels, ensuite upgrades, wet-room conversions, and targeted fixture and finish improvements. Our apartment-specific capabilities include body corporate application management, enhanced waterproofing that exceeds standard requirements, elevator-compliant material logistics, construction-hour compliance, and common-area protection during renovation. We source premium tapware, natural stone, and designer fixtures suited to Newstead's luxury positioning, and our permanent team of experienced tradespeople delivers installation precision that matches the quality of materials specified.",
            },
            {
                heading: "Newstead's Residential Landscape",
                body: "Newstead's residential stock is overwhelmingly apartment-based, ranging from prestige penthouses in towers like Gasworks, FV by Gurner, and The Standard to more accessible units in older mid-rise buildings. Heritage conversions — particularly the iconic Woolstore apartments — feature unique layouts with exposed structural elements that create dramatic bathroom backdrops. Pre-2010 apartment buildings often feature bathrooms with dated finishes that fall well short of Newstead's current market positioning. Newer towers may offer well-designed bathrooms but with developer-selected fixtures and finishes that lack the premium feel their price points suggest. Each scenario presents a clear opportunity for a Brisbathco renovation to add value.",
            },
            {
                heading: "Challenges Specific to Newstead Apartments",
                body: "Newstead's predominantly high-rise environment creates specific renovation challenges. Waterproofing must meet enhanced standards for multi-storey buildings, with multiple inspections at membrane, tile, and fixture stages. Material deliveries are coordinated through goods lifts that may have size restrictions, influencing tile format and bath selection. Construction noise must be managed within body corporate-mandated hours, typically 7 AM to 5 PM weekdays. Some Newstead buildings have specific requirements around dustproofing, floor protection in corridors, and contractor insurance minimums. We maintain relationships with building managers across Newstead's major complexes and manage all compliance requirements seamlessly.",
            },
            {
                heading: "Contemporary Bathroom Design for Newstead",
                body: "Newstead residents favour contemporary, internationally influenced bathroom design. Large-format porcelain slabs — 1200×600 or larger — in marble-look or concrete-effect finishes create seamless, sophisticated surfaces with minimal grout lines. Wall-hung vanities with engineered-stone tops and concealed-cistern toilets maximise floor space in apartments where footprint is premium. Frameless glass shower screens, often floor-to-ceiling, create an uninterrupted visual flow. Brushed-nickel, matte-black, and brushed-gold tapware finishes add personality, while LED-backlit mirror cabinets combine ambient lighting with practical storage. Rain showerheads on ceiling-mounted arms and digital thermostatic controls bring hotel-suite technology to daily use.",
            },
            {
                heading: "Our Newstead Renovation Process",
                body: "Every Newstead project begins with a site visit and body corporate requirement assessment. We prepare and submit strata applications and schedule the renovation within permitted construction windows. Our team delivers the renovation with apartment-building precision — careful demolition with waste management through building protocols, plumbing and electrical rough-in, waterproofing with staged inspections and certification, precision tiling, fixture installation, and comprehensive final inspection. Most Newstead apartment renovations complete within two to three weeks. Your project manager maintains building-management communication throughout.",
            },
            {
                heading: "Why Newstead Chooses Brisbathco",
                body: "Newstead residents choose us for our specific apartment renovation expertise and our ability to deliver luxury outcomes within strata frameworks. Our QBCC licence, insurance, and written warranties protect your investment. Our established relationships with Newstead building managers, our premium material sourcing network, and our permanent team of experienced tradespeople ensure a smooth, high-quality renovation from start to finish.",
            },
            {
                heading: "Start Your Newstead Bathroom Renovation",
                body: "Transform your Newstead apartment bathroom into a space that matches the suburb's premium waterfront lifestyle. Book a free consultation with Brisbathco and receive a transparent, no-obligation quote. We also serve nearby Fortitude Valley, New Farm, and Bowen Hills.",
            },
        ],
        nearbySuburbs: [
            { name: "Fortitude Valley", slug: "fortitude-valley" },
            { name: "New Farm", slug: "new-farm" },
            { name: "Bowen Hills", slug: "bowen-hills" },
        ],
        jsonLd: makeSchema("Newstead", "newstead", "Luxury apartment bathroom renovations in Newstead, Brisbane."),
    },
    {
        name: "Bowen Hills",
        slug: "bowen-hills",
        metaTitle: "Bathroom Renovations Bowen Hills | Brisbathco",
        metaDescription: "Bowen Hills bathroom renovations — urban apartments & character homes. Expert waterproofing, modern design & quality finishes. Free quotes.",
        heroHeading: "Bathroom Renovations in Bowen Hills",
        heroSubheading: "Urban-smart bathroom renovations for Bowen Hills' growing residential precinct",
        sections: [
            {
                heading: "Bathroom Renovations for Bowen Hills' Urban Residents",
                body: "Bowen Hills is one of Brisbane's fastest-evolving inner-city suburbs — a precinct transforming from commercial and industrial roots into a dynamic residential neighbourhood. The Showgrounds precinct, King Street, and the RNA redevelopment are attracting residents who want urban convenience with a sense of possibility. As Bowen Hills' residential stock matures, bathroom renovations become an important part of maintaining and increasing property value. Brisbathco delivers bathroom renovations that suit Bowen Hills' urban context — intelligent, space-efficient designs for apartments and practical, high-quality upgrades for the suburb's remaining character homes. Our inner-city renovation experience and strata-compliance capabilities make us the right partner for Bowen Hills residents.",
            },
            {
                heading: "Our Bowen Hills Renovation Services",
                body: "We provide a full suite of bathroom renovation services in Bowen Hills. For apartment owners, we deliver compact bathroom remodels, wet-room configurations, fixture and tapware upgrades, and complete re-tiling — all managed within body corporate frameworks. For the character homes and workers' cottages that remain on Bowen Hills' quieter streets, we offer full bathroom renovations, ensuite additions, shower conversions, and plumbing system modernisation. Every project includes certified waterproofing, professional tiling, quality fixture installation, and dedicated project management. Our team handles all logistics, from strata applications to material delivery scheduling.",
            },
            {
                heading: "Bowen Hills' Evolving Property Mix",
                body: "Bowen Hills sits at a crossroads between established Brisbane and the city's new urban frontier. Contemporary apartment towers in the Showgrounds precinct and along Abbotsford Road offer modern living with bathrooms that range from premium to builder-basic. Older unit blocks from the 1990s and 2000s feature dated bathroom finishes that significantly reduce appeal in a competitive rental and sales market. Pockets of timber and brick character homes survive along the suburb's western edge, typically with original compact bathrooms. This diversity requires a renovator who can adapt to each context — and our Bowen Hills portfolio demonstrates exactly that capability.",
            },
            {
                heading: "Renovation Challenges in Bowen Hills",
                body: "Bowen Hills' urban density and ongoing development create renovation-specific challenges. Apartment renovations require body corporate approval, enhanced waterproofing certification, and construction-hour compliance. Building access for material delivery may be constrained to goods lifts or specific entry points, requiring advance coordination with building management. Older character homes may contain asbestos in wall linings or Floor tiles, and galvanised plumbing reaching the end of its serviceable life. The suburb's clay-heavy soils can affect older slab foundations, requiring assessment before tiling commences. Street parking for trade vehicles can be limited, and we plan logistics to minimise disruption.",
            },
            {
                heading: "Bathroom Design for Bowen Hills Living",
                body: "Bowen Hills' predominantly younger resident demographic appreciates contemporary, low-maintenance bathroom design. Large-format tiles in concrete or stone effects minimise grout lines and simplify cleaning. Wall-hung vanities with integrated basins create a streamlined, space-efficient profile. Walk-in showers with fixed rain heads and handheld combinations provide flexibility without visual clutter. Matte-black tapware remains the dominant finish choice, though brushed-gunmetal is gaining ground for a softer industrial feel. Mirror cabinets with integrated USB charging and LED lighting address the tech-aware lifestyle of Bowen Hills' apartment dwellers. Feature tiles in shower recesses — terrazzo, zellige, or geometric patterns — add personality to otherwise minimal palettes.",
            },
            {
                heading: "Our Bowen Hills Renovation Process",
                body: "We start with a consultation at your Bowen Hills property, assessing the bathroom and identifying any strata or structural requirements. Our team delivers a detailed design concept and fixed-price quotation. For apartments, we prepare body corporate applications and schedule work within permitted times. The renovation follows our proven sequence — demolition, plumbing and electrical rough-in, certified waterproofing, tiling, fixture installation, and final inspection — typically completing within two weeks. Your project manager handles all logistics and communication.",
            },
            {
                heading: "Why Bowen Hills Picks Brisbathco",
                body: "Bowen Hills residents choose us for our inner-city renovation efficiency and our commitment to transparent pricing. Our QBCC licence, insurance, and written warranties provide formal protection. Our experience across Bowen Hills' varied property types — from new apartments to weatherboard cottages — ensures we bring the right approach to every project. We're responsive, locally present, and focused on results.",
            },
            {
                heading: "Get Your Bowen Hills Bathroom Quote",
                body: "Upgrade your Bowen Hills bathroom with intelligent design and expert craftsmanship. Contact Brisbathco for a free consultation and transparent quote. We also serve Fortitude Valley, Newstead, and across Brisbane's inner city.",
            },
        ],
        nearbySuburbs: [
            { name: "Fortitude Valley", slug: "fortitude-valley" },
            { name: "Newstead", slug: "newstead" },
            { name: "New Farm", slug: "new-farm" },
        ],
        jsonLd: makeSchema("Bowen Hills", "bowen-hills", "Urban apartment bathroom renovations in Bowen Hills, Brisbane."),
    },
    {
        name: "Hawthorne",
        slug: "hawthorne",
        metaTitle: "Bathroom Renovations Hawthorne | Brisbathco",
        metaDescription: "Hawthorne bathroom renovations — Queenslander & riverside home specialists. Premium design, natural stone & expert craftsmanship. Free quotes.",
        heroHeading: "Bathroom Renovations in Hawthorne",
        heroSubheading: "Riverside luxury meets heritage charm — premium bathroom renovations for Hawthorne homes",
        sections: [
            {
                heading: "Heritage-Luxury Bathroom Renovations in Hawthorne",
                body: "Hawthorne is one of Brisbane's most prestigious river suburbs — a neighbourhood where meticulously maintained Queenslanders, elegant pre-war cottages, and refined contemporary homes occupy some of the city's most enviable real estate. Oxford Street's extension through Hawthorne brings boutique retail and dining to the doorstep, while the proximity to both the river and the CBD creates a lifestyle that combines urban convenience with residential tranquility. Bathrooms in Hawthorne need to reflect this elevated living — spaces that feel curated, premium, and intimately connected to the home's architectural character. Brisbathco delivers bathroom renovations of this calibre, bringing heritage-home mastery and luxury-finish expertise to every Hawthorne project.",
            },
            {
                heading: "Premium Heritage Renovation Expertise",
                body: "Our Hawthorne expertise spans heritage and contemporary renovation at the highest level. For character homes, we deliver bathrooms that respect original proportions and architectural language while incorporating modern performance — specialist waterproofing for timber-framed structures, careful plumbing integration that avoids damage to original features, and fixture selections that complement period aesthetics. For contemporary homes, we execute sophisticated designs featuring natural stone, bespoke vanity joinery, freestanding baths, and integrated smart-home amenities. Our services include complete bathroom and ensuite remodels, shower conversions, custom cabinetry, full re-tiling, and plumbing system upgrades.",
            },
            {
                heading: "Hawthorne's Architectural Character",
                body: "Hawthorne's streetscapes are among Brisbane's most architecturally consistent and appealing. Graceful Queenslanders with wide verandahs and detailed fretwork line the suburb's quieter streets, many lovingly restored to exhibition standard. Pre-war brick and rendered homes add solidity and variety, while sensitively designed modern insertions and rear extensions blend contemporary living with established neighbourhood character. Some homes near the river have been substantially enlarged, creating generous master-suite configurations where ensuite bathrooms can rival luxury hotel standards. Hawthorne's character-home density makes it particularly suited to our heritage renovation approach.",
            },
            {
                heading: "Hawthorne Renovation Considerations",
                body: "Renovating in Hawthorne means working with some of Brisbane's finest heritage housing stock, which demands exceptional care. Pre-war timber floors require waterproofing systems that accommodate structural movement without compromising integrity. Original VJ board walls, dado rails, and timber casings in adjacent rooms must be protected during demolition and construction. Plumbing in heritage homes often follows original routes through walls and under floors that require careful navigation. Hawthorne's riverside position brings elevated humidity, making ventilation design and mould-resistant material selection critical decisions. Some properties fall under heritage overlay requirements, and we manage any necessary council consultation as part of our service.",
            },
            {
                heading: "Design Excellence for Hawthorne Bathrooms",
                body: "Hawthorne homeowners have cultivated, globally informed taste. Heritage-home bathrooms often feature natural marble in classic vein patterns, installed as vanity tops, shower feature walls, or floor-to-ceiling cladding. Period-appropriate tapware in cross-head or lever designs, finished in polished brass or nickel, honours the home's era. Freestanding baths — clawfoot reproductions in heritage homes, sculptural composite designs in contemporary settings — serve as centrepieces. Bespoke vanity cabinetry in natural timber, often designed to complement the home's existing joinery style, replaces generic alternatives. In modern extensions, the aesthetic shifts to refined minimalism — floating stone vanities, large-format tiles, concealed fixtures, and ambient LED lighting that creates a spa-like atmosphere.",
            },
            {
                heading: "Our Hawthorne Renovation Process",
                body: "Hawthorne projects begin with an extended consultation that studies the home's architectural character, structural condition, and your lifestyle requirements. Our design team presents concepts with 3D visualisation, physical material samples, and a comprehensive fixed-price proposal. The renovation is executed by our most experienced team — heritage-sensitive demolition, precision plumbing and electrical integration, independently certified waterproofing, expert stone and tile installation, bespoke joinery fitting, and a meticulous final inspection. Hawthorne projects typically run two to three weeks, with daily communication from your project manager.",
            },
            {
                heading: "Why Hawthorne Trusts Brisbathco",
                body: "Hawthorne homeowners trust us because we deliver premium results with genuine heritage sensitivity. Our QBCC licence, comprehensive insurance, and detailed written warranties provide formal assurance. Our portfolio of completed Hawthorne projects demonstrates our ability to work at the highest level of residential renovation — where materials, craftsmanship, and design must all be exemplary. We use only permanent senior tradespeople, source from premium suppliers, and price transparently.",
            },
            {
                heading: "Begin Your Hawthorne Bathroom Renovation",
                body: "Give your Hawthorne home a bathroom worthy of its heritage and position. Book a complimentary consultation with Brisbathco and receive a comprehensive, no-obligation proposal. We also deliver outstanding bathroom renovations in neighbouring Bulimba, New Farm, and across Brisbane's riverside suburbs.",
            },
        ],
        nearbySuburbs: [
            { name: "Bulimba", slug: "bulimba" },
            { name: "New Farm", slug: "new-farm" },
            { name: "Coorparoo", slug: "coorparoo" },
        ],
        jsonLd: makeSchema("Hawthorne", "hawthorne", "Premium heritage bathroom renovations in Hawthorne, Brisbane."),
    },
];
