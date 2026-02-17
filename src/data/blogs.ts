import { StaticImageData } from "next/image";
import blog1 from "@/assets/blogs/blog1.png";
import blog2 from "@/assets/blogs/blog2.png";
import blog3 from "@/assets/blogs/blog3.png";

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string | StaticImageData;
  slug: string;
  readTime: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "How Much Does a Bathroom Renovation Cost in Brisbane? (2026 Guide)",
    excerpt: "Planning a renovation? Breakdown of costs for budget, standard, and luxury bathroom makeovers in Brisbane.",
    category: "Cost Guide",
    date: "February 15, 2026",
    image: blog1,
    slug: "bathroom-renovation-cost-brisbane-2026",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "Top Bathroom Renovation Trends in 2026 for Brisbane Homes",
    excerpt: "From biophilic design to warm metallics, discover the hottest trends defining luxury bathrooms this year.",
    category: "Design Trends",
    date: "February 10, 2026",
    image: blog2,
    slug: "bathroom-renovation-trends-2026",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "Small Bathroom Renovation Ideas That Maximise Space & Style",
    excerpt: "Expert layout tips and optical illusions to make your compact Brisbane bathroom feel spacious and resort-like.",
    category: "Renovation Tips",
    date: "January 28, 2026",
    image: blog3,
    slug: "small-bathroom-renovation-brisbane",
    readTime: "5 min read",
  },
];
