"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/app/lib/cn";

export function FAQSection() {
  const categories = [
    { id: "general", label: "General Questions" },
    { id: "programs", label: "Programs & Formats" },
    { id: "pricing", label: "Pricing & Cohorts" },
  ];

  const [activeCategory, setActiveCategory] = useState("general");
  const [openId, setOpenId] = useState<string | null>(null);

  const faqData = [
    {
      id: "gen-1",
      category: "general",
      question: "How does Accredian Enterprise work with corporate clients?",
      answer: "We offer tailored upskilling partnerships. Our learning architects analyze your team's skill gaps and design learning roadmaps that combine online labs, live lectures, and capstone metrics aligned with your goals.",
    },
    {
      id: "gen-2",
      category: "general",
      question: "What size teams can you accommodate?",
      answer: "We accommodate teams of all sizes. Our cohorts typically start at a minimum of 10-15 professionals for custom modules, up to standardizing capabilities for global enterprise engineering teams exceeding 1,000+ learners.",
    },
    {
      id: "gen-3",
      category: "general",
      question: "Can we track our team's performance?",
      answer: "Absolutely. Learning managers receive a dashboard displaying metrics like active program progression, test percentages, lab attempts, and final capability certificates.",
    },
    {
      id: "prog-1",
      category: "programs",
      question: "Are the training programs completely self-paced or live?",
      answer: "We believe in hybrid outcomes. Our formats combine live interactive weekend instruction led by veteran software engineers, with modular self-paced sandboxes, hands-on lab sprints, and weekly office hours.",
    },
    {
      id: "prog-2",
      category: "programs",
      question: "What domains do the programs cover?",
      answer: "We specialize in modern, high-demand skills: Product Management, Data Science & Analytics, AI/ML Engineering (including Generative AI), and Enterprise Software Development.",
    },
    {
      id: "prog-3",
      category: "programs",
      question: "How long do the standard certifications take to complete?",
      answer: "Depending on program depth, tracks run between 3 to 9 months. Advanced specializations (e.g., Data Science or Systems Design) average 6-8 months, while micro-specializations last 10-12 weeks.",
    },
    {
      id: "price-1",
      category: "pricing",
      question: "Do you offer tier-based volume discounts?",
      answer: "Yes, our enterprise packages are volume-tiered. Pricing is calculated based on the total cohort size, chosen domain curriculum, and custom integrations. Reach out for a custom quote.",
    },
    {
      id: "price-2",
      category: "pricing",
      question: "Are there trial models or sandbox testing accounts?",
      answer: "Yes. We can set up pilot modules with partial curriculums so your learning directors and senior tech leads can evaluate our learning interface and grading structures.",
    },
  ];

  const filteredFaq = faqData.filter((item) => item.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white dark:bg-slate-950 border-b border-slate-200/50 dark:border-slate-800/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
            Support Center
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              Questions
            </span>
          </p>
        </div>

        {/* Content Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Sidebar categories selector */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto scrollbar-hide py-1 border-b lg:border-b-0 lg:border-r border-slate-200/60 dark:border-slate-800/60">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenId(null);
                  }}
                  className={cn(
                    "flex-1 lg:flex-none text-left px-4 py-3 text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap",
                    isActive
                      ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"
                      : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/40"
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Accordion list */}
          <div className="lg:col-span-8 space-y-4 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {filteredFaq.map((faq) => {
                  const isOpen = openId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="border border-slate-200/60 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-800"
                    >
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0",
                            isOpen && "rotate-180 text-blue-500"
                          )}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-900/60 pt-4 bg-white dark:bg-slate-950/20">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
