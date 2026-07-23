"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Navbar } from "./components/sections/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { AccredianEdge } from "./components/sections/AccredianEdge";
import { DomainExpertise } from "./components/sections/DomainExpertise";
import { CATFramework } from "./components/sections/CATFramework";
import { FAQSection } from "./components/sections/FAQSection";
import { Testimonials } from "./components/sections/Testimonials";
import { Footer } from "./components/sections/Footer";
import { LeadCaptureModal } from "./components/forms/LeadCaptureModal";
import { Button } from "./components/ui/button";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Sticky Navigation header */}
      <Navbar onRequestDemo={() => setIsModalOpen(true)} />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero banner + track record stats */}
        <HeroSection onRequestDemo={() => setIsModalOpen(true)} />

        {/* 2. Value Propositions timeline/grid */}
        <AccredianEdge />

        {/* 3. Catalog Showcase & filtering tabs */}
        <DomainExpertise />

        {/* 4. Instructional Design Flow */}
        <CATFramework />

        {/* 5. Expanding Accordions FAQ */}
        <FAQSection />

        {/* 6. Partner Metrics and Slides */}
        <Testimonials />

        {/* 7. CTA Highlight Banner right above footer */}
        <section className="py-16 bg-blue-600 dark:bg-blue-950 text-white relative overflow-hidden">
          {/* Subtle bg circle overlay */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full border-[60px] border-white -translate-y-1/2" />
            <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-white -translate-y-1/2" />
          </div>

          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  Ready to Scale Your Team's Capability?
                </h3>
                <p className="text-blue-100 max-w-xl text-sm md:text-base">
                  Book a direct briefing session with our learning architect to outline potential curriculums and sandbox tests.
                </p>
              </div>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="w-full md:w-auto bg-white hover:bg-slate-100 text-blue-600 shadow-xl cursor-pointer"
              >
                Contact Enterprise Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

      </main>

      {/* Sitemaps & Copyright Footer */}
      <Footer />

      {/* Validated Lead Capture Overlay dialog */}
      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
