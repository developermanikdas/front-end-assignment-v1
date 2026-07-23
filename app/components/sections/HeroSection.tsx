"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

interface HeroSectionProps {
  onRequestDemo: () => void;
}

export function HeroSection({ onRequestDemo }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const stats = [
    { value: "100K+", label: "Professionals Trained", icon: <ShieldCheck className="w-5 h-5 text-blue-500" /> },
    { value: "200+", label: "Global Corporate Partners", icon: <Zap className="w-5 h-5 text-indigo-500" /> },
    { value: "50+", label: "Domain Certifications", icon: <TrendingUp className="w-5 h-5 text-emerald-500" /> },
  ];

  const partners = [
    { name: "Google", logoText: "Google" },
    { name: "Amazon", logoText: "amazon" },
    { name: "Microsoft", logoText: "Microsoft" },
    { name: "IBM", logoText: "IBM" },
    { name: "Salesforce", logoText: "salesforce" },
    { name: "Accenture", logoText: "accenture" },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background Gradients */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-400 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-indigo-400 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center"
        >
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-6 text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full border border-blue-200/50 bg-blue-50/50 dark:border-blue-800/40 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider">Enterprise-Grade Learning</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1]"
            >
              Next-Gen{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Expertise
              </span>{" "}
              For Your{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
                Enterprise
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed"
            >
              Cultivate high-impact product, data, and tech capability across your teams. Upskill with real-world case studies and certification programs.
            </motion.p>

            {/* Checklists */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                "Outcome-driven curriculum",
                "Industry expert mentors",
                "Actionable impact metrics",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button onClick={onRequestDemo} size="lg" className="w-full sm:w-auto shadow-lg shadow-blue-500/10">
                Request Free Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <a href="#edge" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full">
                  Explore Programs
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Illustration */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group">
              <Image
                src="/hero_illustration.jpg"
                alt="Corporate Professionals Collaborating"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Float Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 dark:bg-slate-950/90 border border-slate-200/40 dark:border-slate-800/60 backdrop-blur-md rounded-2xl p-4 shadow-xl hidden sm:flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase">Success Rate</p>
                <p className="text-lg font-bold text-slate-800 dark:text-slate-100">98% Placement Edge</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Track Record Stats Ribbon */}
        <div id="stats" className="mt-24 border-t border-b border-slate-200/60 dark:border-slate-800/80 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center justify-items-center divide-y md:divide-y-0 md:divide-x divide-slate-200/60 dark:divide-slate-800/80">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4 px-8 w-full justify-center md:justify-start max-w-sm py-4 md:py-0">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/20 dark:border-slate-800/20 shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-50">{stat.value}</h4>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proven Partnerships */}
        <div className="mt-16 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6">
            Our Proven Partnerships
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 hover:opacity-85 transition-opacity duration-300">
            {partners.map((partner, index) => (
              <span
                key={index}
                className="text-lg md:text-xl font-bold tracking-widest text-slate-500 dark:text-slate-400 select-none hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {partner.logoText}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
