import { MotionDiv } from "@/components/ui/motion-wrapper";
import Image from "next/image";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { ArrowRight } from "lucide-react";

const images = [
  { src: gallery1, alt: "Modern double vanity bathroom renovation", label: "Paddington Ensuite" },
  { src: gallery2, alt: "Walk-in shower with brass fixtures", label: "New Farm Master Bath" },
  { src: gallery3, alt: "Minimalist powder room design", label: "Bulimba Powder Room" },
  { src: gallery4, alt: "Luxury master ensuite with freestanding bath", label: "Teneriffe Penthouse" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
            Recent Projects
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm leading-relaxed">
            Every bathroom we create is a testament to craftsmanship and attention to detail.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {images.map((img, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-sm font-medium text-cream">{img.label}</p>
              </div>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline underline-offset-4 transition-all"
          >
            Want to see more? Let's talk about your project
            <ArrowRight className="w-4 h-4" />
          </a>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Gallery;
