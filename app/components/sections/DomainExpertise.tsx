"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, GraduationCap, Clock, Award, Star } from "lucide-react";
import { cn } from "@/app/lib/cn";

export function DomainExpertise() {
  const categories = [
    { id: "pm", label: "Product Management" },
    { id: "ds", label: "Data Science" },
    { id: "ai", label: "AI & Machine Learning" },
    { id: "tech", label: "Tech & Software" },
  ];

  const [activeTab, setActiveTab] = useState("pm");

  const programs = [
    // Product Management
    {
      id: "pm-1",
      category: "pm",
      title: "Executive Program in Product Management",
      duration: "6 Months",
      lectures: "Live Sessions",
      rating: 4.8,
      reviews: "1,240 ratings",
      description: "Learn agile development, user testing, product metrics, and product-led growth strategy with active product leaders.",
      tag: "Best Seller",
    },
    {
      id: "pm-2",
      category: "pm",
      title: "Product Strategy & Leadership",
      duration: "4 Months",
      lectures: "Weekend cohort",
      rating: 4.9,
      reviews: "820 ratings",
      description: "Deep dive into portfolio roadmap design, pricing strategy, market expansion, and leadership transitions.",
      tag: "Executive",
    },
    {
      id: "pm-3",
      category: "pm",
      title: "Product Analytics & Growth",
      duration: "3 Months",
      lectures: "Cohort-based",
      rating: 4.7,
      reviews: "540 ratings",
      description: "Master SQL, Mixpanel, Amplitude, and cohort analysis to design highly optimized retention and acquisition loops.",
      tag: "Specialization",
    },
    // Data Science
    {
      id: "ds-1",
      category: "ds",
      title: "Post Graduate Program in Data Science",
      duration: "9 Months",
      lectures: "Dual Learning",
      rating: 4.9,
      reviews: "2,150 ratings",
      description: "Comprehensive curriculum from math foundations to statistics, advanced SQL, machine learning, and BI tools.",
      tag: "Post Grad",
    },
    {
      id: "ds-2",
      category: "ds",
      title: "Data Science & AI for Business",
      duration: "5 Months",
      lectures: "Executive Mode",
      rating: 4.8,
      reviews: "950 ratings",
      description: "Enable managers and directors to lead data-driven initiatives, interpret predictive models, and optimize operations.",
      tag: "For Managers",
    },
    {
      id: "ds-3",
      category: "ds",
      title: "Advanced Data Engineering",
      duration: "6 Months",
      lectures: "Live Labs",
      rating: 4.6,
      reviews: "340 ratings",
      description: "Build robust data pipelines, set up warehouses, write Apache Spark jobs, and orchestrate with Airflow.",
      tag: "Advanced",
    },
    // AI & Machine Learning
    {
      id: "ai-1",
      category: "ai",
      title: "Advanced Certification in Deep Learning",
      duration: "6 Months",
      lectures: "Advanced Cohort",
      rating: 4.8,
      reviews: "780 ratings",
      description: "Master neural networks, computer vision, natural language processing, and model training using PyTorch.",
      tag: "AI Spec",
    },
    {
      id: "ai-2",
      category: "ai",
      title: "Generative AI for Enterprises",
      duration: "3 Months",
      lectures: "Fast Track",
      rating: 4.9,
      reviews: "1,120 ratings",
      description: "Build enterprise solutions with LLMs, prompt engineering, vector databases (Pinecone/Chroma), and LangChain.",
      tag: "Trending",
    },
    {
      id: "ai-3",
      category: "ai",
      title: "MLOps & Deploying Models",
      duration: "4 Months",
      lectures: "Practical Sprints",
      rating: 4.7,
      reviews: "410 ratings",
      description: "Standardize ML deployment. Package models with Docker, scale with Kubernetes, and monitor drifts in production.",
      tag: "New Release",
    },
    // Tech & Software
    {
      id: "tech-1",
      category: "tech",
      title: "Full Stack Software Engineering",
      duration: "8 Months",
      lectures: "Live Sprints",
      rating: 4.9,
      reviews: "1,450 ratings",
      description: "Master modern architectures. Build responsive interfaces, robust microservices, cloud servers, and serverless actions.",
      tag: "Career Path",
    },
    {
      id: "tech-2",
      category: "tech",
      title: "System Design & Technical Leadership",
      duration: "5 Months",
      lectures: "Weekend Mode",
      rating: 4.9,
      reviews: "890 ratings",
      description: "Designed for senior developers. Learn caching strategies, database sharding, microservice architectures, and API gateway routing.",
      tag: "Elite",
    },
    {
      id: "tech-3",
      category: "tech",
      title: "Cloud Architecture & DevOps",
      duration: "6 Months",
      lectures: "Hands-on Labs",
      rating: 4.7,
      reviews: "620 ratings",
      description: "Design secure, multi-zone setups in AWS and Azure. Configure CI/CD pipelines, Terraform scripts, and serverless clusters.",
      tag: "DevOps",
    },
  ];

  const filteredPrograms = programs.filter((p) => p.category === activeTab);

  return (
    <section id="domain" className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
            Upskilling Catalog
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              Domain Expertise
            </span>
          </p>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400">
            Explore industry-vetted learning paths across product, data science, deep learning, and system architecture.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center border-b border-slate-200/60 dark:border-slate-800/60 mb-12 overflow-x-auto scrollbar-hide py-1">
          <div className="flex space-x-1.5">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={cn(
                    "relative px-5 py-3 text-sm font-semibold rounded-t-xl transition-colors cursor-pointer whitespace-nowrap",
                    isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                  )}
                >
                  {cat.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full bg-slate-50/50 dark:bg-slate-900/35 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 md:p-8 hover:border-blue-400/50 dark:hover:border-blue-500/30 hover:bg-white dark:hover:bg-slate-950 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl/10 group"
              >
                {/* Tag & Rating */}
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-blue-900/30">
                    {program.tag}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{program.rating}</span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">({program.reviews.split(" ")[0]})</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 tracking-tight leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                  {program.description}
                </p>

                {/* Meta details */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-900/80 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{program.lectures}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
