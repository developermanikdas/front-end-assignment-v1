"use client";

import { motion } from "framer-motion";
import { BookOpen, Laptop, BarChart4, ArrowRight } from "lucide-react";

export function CATFramework() {
  const steps = [
    {
      step: "01",
      name: "Concept",
      description: "Structured academic learning covering deep theoretical frameworks, business case studies, and live expert lecturing sessions.",
      icon: <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      color: "border-blue-500 bg-blue-500/5",
    },
    {
      step: "02",
      name: "Application",
      description: "Hands-on projects, sandbox playgrounds, and mandatory capstone assessments designed to test knowledge on live production scenarios.",
      icon: <Laptop className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      color: "border-indigo-500 bg-indigo-500/5",
    },
    {
      step: "03",
      name: "Return",
      description: "Measurable productivity increases, team upskilling benchmarks, and positive organizational impact tracked via assessment metrics.",
      icon: <BarChart4 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      color: "border-emerald-500 bg-emerald-500/5",
    },
  ];

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut", delay: 0.3 } },
  };

  return (
    <section id="framework" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/10 border-b border-slate-200/50 dark:border-slate-800/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
            Instructional Design
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            The{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              CAT Framework
            </span>
          </p>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400">
            Our systematic learning approach guarantees knowledge transfers directly into daily team output.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 max-w-5xl mx-auto">
          {/* Horizontal Line Connector (Desktop only) */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute top-1/4 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 hidden lg:block -z-10 origin-left"
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.2 }}
              className="flex flex-col items-center text-center max-w-sm w-full group relative"
            >
              {/* Outer Ring */}
              <div className={`relative flex items-center justify-center w-24 h-24 rounded-full border-2 ${step.color} shadow-lg dark:shadow-slate-950/50 bg-white dark:bg-slate-950 transition-all duration-300 group-hover:scale-110 shrink-0`}>
                {/* Index label */}
                <span className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white dark:bg-slate-100 dark:text-slate-950 shadow">
                  {step.step}
                </span>
                {step.icon}
              </div>

              {/* Text Area */}
              <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
                {step.name}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>

              {/* Mobile arrow connector */}
              {index < 2 && (
                <ArrowRight className="w-6 h-6 text-slate-300 dark:text-slate-700 lg:hidden mt-8 rotate-90" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
