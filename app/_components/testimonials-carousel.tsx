"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Testimonial = {
  id: string;
  name: string;
  tag: string;
  quote: string;
  rating: number;
};

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
};

const REVIEWS_PER_PAGE = 4;

function chunkTestimonials(testimonials: Testimonial[]) {
  const pages: Testimonial[][] = [];

  for (let index = 0; index < testimonials.length; index += REVIEWS_PER_PAGE) {
    pages.push(testimonials.slice(index, index + REVIEWS_PER_PAGE));
  }

  return pages;
}

export function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const pages = useMemo(() => chunkTestimonials(testimonials), [testimonials]);
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className="rounded-[24px] bg-white px-4 py-8 shadow-[-1px_-1px_0px_1px_rgba(255,255,255,1)] sm:px-6 lg:px-10 lg:py-9">
      <h2 className="text-center font-display text-[28px] font-bold leading-[32px] tracking-[-0.05em] text-[#0f0017] sm:text-left sm:text-[30px] sm:leading-[30px]">
        Trusted DraftOut expert reviews
      </h2>

      <div className="mt-8 overflow-hidden xl:min-h-[474px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={pageIndex}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            {pages[pageIndex].map((testimonial) => (
              <article
                key={testimonial.id}
                className="h-full rounded-[24px] border border-[#e6e6e6] bg-white px-5 pb-6 pt-5 xl:min-h-[470px]"
              >
                <p className="text-center text-[14px] leading-6 font-normal uppercase text-[#24222c]">
                  {testimonial.name}
                </p>
                <p className="mt-[3px] text-center text-[14px] leading-5 text-[#189638]">
                  {testimonial.tag}
                </p>

                <div
                  className="mt-1 flex justify-center gap-1 text-[18px] leading-none"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={`${testimonial.id}-star-${index}`}
                      className={index < testimonial.rating ? "text-[#34c759]" : "text-[#34c759]/55"}
                    >
                      {index < testimonial.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                <blockquote className="mt-4 text-[16px] leading-6 text-[#313131]">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        {pages.map((_, index) => (
          <button
            key={`page-${index}`}
            type="button"
            onClick={() => setPageIndex(index)}
            aria-label={`Show testimonials page ${index + 1}`}
            aria-pressed={pageIndex === index}
            className="flex h-[15px] w-[15px] items-center justify-center rounded-full border border-[#888888] transition-colors"
          >
            <span
              className={`h-[9px] w-[9px] rounded-full ${
                pageIndex === index ? "bg-[#2270fd]" : "bg-transparent"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
