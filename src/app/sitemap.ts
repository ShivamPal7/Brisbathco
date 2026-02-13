import type { MetadataRoute } from "next";
import { suburbs } from "@/data/suburbs";
import { expandedSuburbs } from "@/data/expanded-suburbs";
import { regions } from "@/data/regions";

const SITE_URL = "https://www.brisbathco.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // Homepage
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1.0,
        },
    ];

    // Region pages
    const regionPages: MetadataRoute.Sitemap = regions.map((region) => ({
        url: `${SITE_URL}/bathroom-renovations/region/${region.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    // Expanded suburb pages (higher priority — rich content)
    const expandedSlugs = new Set(expandedSuburbs.map((s) => s.slug));
    const expandedPages: MetadataRoute.Sitemap = expandedSuburbs.map((suburb) => ({
        url: `${SITE_URL}/bathroom-renovations/${suburb.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Basic suburb pages (exclude any that have expanded versions)
    const basicPages: MetadataRoute.Sitemap = suburbs
        .filter((s) => !expandedSlugs.has(s.slug))
        .map((suburb) => ({
            url: `${SITE_URL}/bathroom-renovations/${suburb.slug}`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.6,
        }));

    return [...staticPages, ...regionPages, ...expandedPages, ...basicPages];
}
