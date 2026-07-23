"use client";

import { motion } from "framer-motion";
import { BookOpen, Layers, Clock, Award, Users, BarChart3 } from "lucide-react";

export function AccredianEdge() {
  const edges = [
    {
      title: "Tailored Solutions",
      description: "Customized learning paths aligned specifically with your organization's business objectives and talent gaps.",
      icon: <Layers className="w-6 h-6 text-blue-500" />,
      bg: "from-blue-500/10 to-indigo-500/10",
    },
    {
      title: "Industry-Relevant Curriculum",
      description: "Designed in collaboration with top-tier academic institutions and updated regularly to reflect modern tech trends.",
      icon: <BookOpen className="w-6 h-6 text-indigo-500" />,
      bg: "from-indigo-500/10 to-purple-500/10",
    },
    {
      title: "Flexible Offerings",
      description: "Hybrid formats including self-paced modules, live virtual classrooms, and interactive hands-on labs.",
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      bg: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "Rigorous Capstones",
      description: "Project-based assessments requiring learners to solve real-world business cases using current tools.",
      icon: <Award className="w-6 h-6 text-emerald-500" />,
      bg: "from-emerald-500/10 to-teal-500/10",
    },
    {
      title: "Expert Mentorship",
      description: "Direct weekly syncs and feedback cycles from active senior professionals in the respective domains.",
      icon: <Users className="w-6 h-6 text-teal-500" />,
      bg: "from-teal-500/10 to-cyan-500/10",
    },
    {
      title: "Actionable Skill Metrics",
      description: "Complete visibility into team progress, completion rates, and post-program talent assessments.",
      icon: <BarChart3 className="w-6 h-6 text-cyan-500" />,
      bg: "from-cyan-500/10 to-blue-500/10",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="edge" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/10 border-b border-slate-200/50 dark:border-slate-800/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
            Why Partner With Us
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            The{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              Accredian Edge
            </span>
          </p>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400">
            Empower your teams with standard skill programs designed for driving measurable business growth.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {edges.map((edge, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="relative overflow-hidden rounded-3xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-950 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Decorative gradient corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${edge.bg} blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="flex flex-col h-full space-y-4">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${edge.bg} self-start shrink-0 border border-slate-100 dark:border-slate-900`}>
                  {edge.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-slate-50 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {edge.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {edge.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
