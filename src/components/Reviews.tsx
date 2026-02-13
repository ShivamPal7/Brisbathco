"use client";

import { useEffect, useRef, useState } from "react";
import { MotionDiv } from "@/components/ui/motion-wrapper";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Trevor Demnar",
    location: "Paddington",
    text: "We went thoroughly through all the work done and we couldn't find one thing to put on our fix-it list. Professionalism is 2nd to …more",
    rating: 5,
  },
  {
    name: "Isabel Cabrera",
    location: "Ascot",
    text: "The most professional, caring, communicative team we have ever had take on a major job in our long history of renovations …more",
    rating: 5,
  },
  {
    name: "Karen Bland",
    location: "New Farm",
    text: "Michael, Dave and the team did an excellent job. We were impressed by the pleasant manner and cooperation of all their …more",
    rating: 5,
  },
  {
    name: "Helen Duckworth",
    location: "Hamilton",
    text: "A+ from start to finish of the full Reno of our downstairs shower/toilet/powder room and adjoining laundry. Great project …more",
    rating: 5,
  },
  {
    name: "Naomi West",
    location: "Bulimba",
    text: "Over the past 4 years we have engaged Mike, Dave and the team to renovate all 3 bathrooms in our home. Trustworthy, efficient …more",
    rating: 5,
  },
  {
    name: "Maria Richardson",
    location: "Teneriffe",
    text: "We've just had a brand new bathroom put in and are very happy with the workmanship. David and Chris and all the other workers …more",
    rating: 5,
  },
  {
    name: "Matt Kelly",
    location: "West End",
    text: "The BEST Bathroom Co … From Helene who designed our dream bathroom and kitchenette to Michael and the gang who made it a …more",
    rating: 5,
  },
  {
    name: "Andrew Stove",
    location: "Clayfield",
    text: "Six months ago we asked Dave to install an ensuite worthy of a five star hotel, and he certainly delivered. Clean and respectful …more",
    rating: 5,
  },
  {
    name: "Christine de Waard",
    location: "Bardon",
    text: "Michael, Dave and their entire team did an amazing job on our bathroom, powder room and adjacent hall/linen press. Their decades …more",
    rating: 5,
  },
  {
    name: "Trudy Wilson",
    location: "Hawthorne",
    text: "David, Chris and all his contractors have done a really amazing job renovating my 35 year old bathroom in a 100 year old …more",
    rating: 5,
  },
  {
    name: "Emily Luttrell",
    location: "Morningside",
    text: "From the first time I contacted Mike & Dave, they went above and beyond to make the process as easy as possible. Would …more",
    rating: 5,
  },
  {
    name: "Jeff",
    location: "Woolloongabba",
    text: "Thank you so much for your help in navigating us through our bathroom renovations. We're really happy with the result, and can't …more",
    rating: 5,
  },
  {
    name: "Stacey Dale",
    location: "Coorparoo",
    text: "We loved the job that The Brisbane Bathroom Company did. It was beyond expectations. Helene was so helpful in choosing tiles …more",
    rating: 5,
  },
  {
    name: "Jacqui Wilton",
    location: "Indooroopilly",
    text: "A great experience with a laundry, bathroom and washroom renovation. Quality workmanship and excellent communication at each stage.",
    rating: 5,
  },
  {
    name: "Mary Andrews",
    location: "Toowong",
    text: "Mike and the gang are well organised, clean, and communicated clearly with us along the way. We love our new bathroom!",
    rating: 5,
  },
  {
    name: "Len Hazevoet",
    location: "Kangaroo Point",
    text: "Brisbane Bathroom Company turned our very old ensuite into a brand new, fresh space which we love. Very professional and went …more",
    rating: 5,
  },
  {
    name: "Margaret Lyons",
    location: "Auchenflower",
    text: "Brisbane Bathroom Co delivered the job on time, on budget and completely pain-free. The team were considerate and polite at all times.",
    rating: 5,
  },
  {
    name: "Tracey Ford",
    location: "Red Hill",
    text: "Mike, Dave, Luke and James did a great job. Always punctual and approachable. Top quality work. We love our new ensuite.",
    rating: 5,
  },
  {
    name: "Martin Smith",
    location: "Greenslopes",
    text: "Great experience with Mike and his team. They've done a beautiful job and were always professional and precise!",
    rating: 5,
  },
  {
    name: "Mark O'Hara",
    location: "Wilston",
    text: "The team were very professional doing a wonderful job on our bathroom renovation.",
    rating: 5,
  },
  {
    name: "Paula",
    location: "Fortitude Valley",
    text: "Punctual, very organised and extremely tidy.",
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/*  Single review card                                                 */
/* ------------------------------------------------------------------ */
const ReviewCard = ({
  review,
}: {
  review: (typeof reviews)[number];
}) => (
  <div className="group relative flex-shrink-0 w-[280px] sm:w-[340px] md:w-[420px] p-4 sm:p-6 lg:p-8 bg-card border border-border/60 hover:border-gold/40 transition-all duration-500 select-none">
    {/* Subtle gold shimmer on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] via-transparent to-gold/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

    <Quote className="w-5 h-5 sm:w-7 sm:h-7 text-gold/20 mb-2 sm:mb-3 transition-colors duration-500 group-hover:text-gold/40" />

    <div className="flex gap-0.5 mb-3 sm:mb-4">
      {[...Array(review.rating)].map((_, j) => (
        <Star
          key={j}
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-gold text-gold"
        />
      ))}
    </div>

    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-5 min-h-14 sm:min-h-18">
      &ldquo;{review.text}&rdquo;
    </p>

    <div className="border-t border-border/50 pt-3 sm:pt-4">
      <p className="text-xs sm:text-sm font-medium text-foreground">{review.name}</p>
      <p className="text-xs text-muted-foreground">
        {review.location}, Brisbane
      </p>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Infinite marquee row                                               */
/* ------------------------------------------------------------------ */
const MarqueeRow = ({
  items,
  direction = "left",
  speed = 35,
}: {
  items: typeof reviews;
  direction?: "left" | "right";
  speed?: number;
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  /* duplicate the list so the second copy fills the gap seamlessly */
  const doubled = [...items, ...items];

  /* Total scroll width = one set of items  */
  const totalWidthRef = useRef(0);
  const positionRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    /* measure one full set width */
    const children = Array.from(row.children) as HTMLElement[];
    const half = children.length / 2;
    let w = 0;
    for (let i = 0; i < half; i++) {
      w += children[i].offsetWidth + 20; // 20 = gap
    }
    totalWidthRef.current = w;

    const tick = () => {
      if (!isPaused) {
        const delta = speed / 60; // px per frame at ~60fps
        if (direction === "left") {
          positionRef.current -= delta;
          if (positionRef.current <= -totalWidthRef.current) {
            positionRef.current += totalWidthRef.current;
          }
        } else {
          positionRef.current += delta;
          if (positionRef.current >= 0) {
            positionRef.current -= totalWidthRef.current;
          }
        }
        row.style.transform = `translateX(${positionRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    /* initialise position for right-moving row */
    if (direction === "right") {
      positionRef.current = -totalWidthRef.current;
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [direction, speed, isPaused]);

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        ref={rowRef}
        className="flex gap-3 sm:gap-5 will-change-transform"
        style={{ width: "max-content" }}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main reviews section                                               */
/* ------------------------------------------------------------------ */
const Reviews = () => {
  /* split reviews into two rows */
  const mid = Math.ceil(reviews.length / 2);
  const row1 = reviews.slice(0, mid);
  const row2 = reviews.slice(mid);

  return (
    <section id="reviews" className="py-12 sm:py-20 lg:py-28 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-gold text-gold"
              />
            ))}
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            4.9 stars from 21+ verified Google Reviews
          </p>
        </MotionDiv>
      </div>

      {/* Edge fade masks */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 md:w-36 z-10 bg-gradient-to-r from-muted to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 md:w-36 z-10 bg-gradient-to-l from-muted to-transparent" />

        <div className="flex flex-col gap-3 sm:gap-5">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MarqueeRow items={row1} direction="left" speed={30} />
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MarqueeRow items={row2} direction="right" speed={25} />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Reviews;