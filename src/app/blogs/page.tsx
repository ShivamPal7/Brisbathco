import { blogs } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MotionDiv } from "@/components/ui/motion-wrapper";

export const metadata = {
  title: "Renovation Blogs | Brisbane Bath Oasis",
  description: "Explore the latest trends, tips, and insights in luxury bathroom renovations.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar forceScrolled={true} />
      
      <div className="flex-grow pb-20 lg:pb-32 pt-32 lg:pt-40">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-gold font-medium text-sm tracking-[0.2em] uppercase mb-4 pl-1">
                Blogs
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-medium mb-6 leading-[1.1]">
                Renovation <span className="text-muted-foreground italic">Insights</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                Expert advice, design trends, and practical guides to help you navigate your bathroom renovation journey with confidence.
              </p>
            </MotionDiv>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {blogs.map((blog, index) => (
              <MotionDiv
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <BlogCard blog={blog} />
              </MotionDiv>
            ))}
          </div>

          {/* Load More Button (Static for now) */}
          <div className="mt-16 lg:mt-24 text-center">
            <MotionDiv
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
            >
              <button
                 disabled
                 className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium tracking-wide text-muted-foreground/60 border border-border rounded-sm cursor-not-allowed uppercase hover:bg-muted/30 transition-colors"
              >
                No More Posts
              </button>
            </MotionDiv>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
