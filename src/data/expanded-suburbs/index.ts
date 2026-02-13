export type { ExpandedSuburbData, SuburbSection, NearbySuburb } from "./types";
import { northernSuburbs } from "./northern";
import { southernSuburbs } from "./southern";
import { westernSuburbs } from "./western";
import { citySuburbs } from "./city";
import { ExpandedSuburbData } from "./types";

export const expandedSuburbs: ExpandedSuburbData[] = [
    ...northernSuburbs,
    ...southernSuburbs,
    ...westernSuburbs,
    ...citySuburbs,
];

export function getExpandedSuburbBySlug(slug: string): ExpandedSuburbData | undefined {
    return expandedSuburbs.find((s) => s.slug === slug);
}
