export interface SuburbSection {
    heading: string;
    body: string;
}

export interface NearbySuburb {
    name: string;
    slug: string;
}

export interface ExpandedSuburbData {
    name: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
    heroHeading: string;
    heroSubheading: string;
    sections: SuburbSection[];
    nearbySuburbs: NearbySuburb[];
    jsonLd: Record<string, unknown>;
}
