"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ArrowUpRight } from "lucide-react";
import { cn } from "@/app/lib/cn";

export function Testimonials() {
  const testimonials = [
    {
      name: "Rohan Sharma",
      role: "VP of Engineering",
      company: "HCL Technologies",
      quote: "Accredian's enterprise software engineering path helped us standardize Next.js and System Design practices across 120 developers. The measurable improvement in our delivery timeline was noticeable within 3 months.",
      rating: 5,
      metric: "35% Delivery Acceleration",
    },
    {
      name: "Dr. Ananya Roy",
      role: "Head of Talent & Analytics",
      company: "Bayer Chemicals",
      quote: "The customized MLOps & Generative AI program gave our research scientists the exact pipelines needed to push models into production. Outstanding expert mentorship and sandbox labs.",
      rating: 5,
      metric: "3x Faster Model Deployments",
    },
    {
      name: "Karan Johar",
      role: "Senior Director of Products",
      company: "Salesforce India",
      quote: "We partnered for the Product Analytics specialization. Our team's ability to run cohort analytics and build retention loops improved drastically. Our product managers are much more data-driven now.",
      rating: 5,
      metric: "22% User Retention Boost",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/10 border-b border-slate-200/50 dark:border-slate-800/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
            Success Stories
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              Leading Enterprises
            </span>
          </p>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400">
            See how organizations accelerate engineering pipelines and scale technical capability with our programs.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="overflow-hidden bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-md relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-slate-100 dark:text-slate-900 -z-0 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center"
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 shrink-0" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base md:text-lg text-slate-700 dark:text-slate-350 leading-relaxed font-medium italic">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  {/* Author Details */}
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-50 text-base">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                      {testimonials[currentIndex].role} &middot; {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                {/* Metric Box */}
                <div className="w-full md:w-auto shrink-0 self-stretch flex items-center md:items-center justify-center p-6 md:p-8 rounded-2xl bg-blue-500/5 border border-blue-500/10 dark:bg-blue-950/20 dark:border-blue-500/5">
                  <div className="text-center">
                    <span className="inline-flex p-2 rounded-xl bg-blue-500/10 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 mb-2">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                    <p className="text-2xl font-black text-blue-600 dark:text-blue-400 tracking-tight">
                      {testimonials[currentIndex].metric.split(" ")[0]}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mt-1 max-w-[120px] mx-auto leading-tight">
                      {testimonials[currentIndex].metric.split(" ").slice(1).join(" ")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-slate-100 dark:border-slate-900">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  currentIndex === i ? "w-6 bg-blue-600 dark:bg-blue-400" : "w-1.5 bg-slate-300 dark:bg-slate-700"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
