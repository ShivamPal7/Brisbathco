"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Paddington",
    text: "Absolutely blown away by the quality. Our ensuite looks like a 5-star hotel. The team was professional, tidy, and finished on time.",
    rating: 5,
  },
  {
    name: "James & Emily T.",
    location: "New Farm",
    text: "From design to completion, Brisbathco exceeded every expectation. The attention to detail is second to none. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Bulimba",
    text: "Best investment we've made in our home. The fixed-price quote meant no surprises, and the result is stunning. Five stars all the way.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            4.9 stars from 120+ verified Google Reviews
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 lg:p-8 rounded-sm bg-card border border-border hover:border-gold/30 hover:shadow-elegant transition-all duration-300"
            >
              <Quote className="w-6 h-6 text-gold/25 mb-3" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">
                  {review.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {review.location}, Brisbane
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;