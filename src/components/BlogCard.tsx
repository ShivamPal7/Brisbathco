import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Blog } from "@/data/blogs";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link href={`/blogs/${blog.slug}`} className="group block h-full">
      <article className="flex flex-col h-full bg-card hover:bg-white rounded-sm border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-elegant overflow-hidden">
        {/* Image Container with Hover Zoom */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-medium tracking-wider text-charcoal uppercase border border-border/50 shadow-sm">
              {blog.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6 lg:p-7">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 font-medium tracking-wide">
            <time dateTime={blog.date}>{blog.date}</time>
            <span className="w-1 h-1 rounded-full bg-gold/50" />
            <span>{blog.readTime}</span>
          </div>

          <h3 className="font-display text-xl lg:text-2xl font-medium text-foreground mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
            {blog.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
            {blog.excerpt}
          </p>

          <div className="mt-auto pt-4 border-t border-border/40 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-gold transition-colors duration-300">
              Read Article
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
