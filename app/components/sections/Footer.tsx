"use client";

import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const programLinks = [
    { label: "Product Management", href: "#domain" },
    { label: "Data Science & AI", href: "#domain" },
    { label: "AI & Machine Learning", href: "#domain" },
    { label: "Full Stack Engineering", href: "#domain" },
  ];

  const resources = [
    { label: "Success Stories", href: "#testimonials" },
    { label: "CAT Framework", href: "#framework" },
    { label: "Accredian Edge", href: "#edge" },
    { label: "F.A.Q.", href: "#faq" },
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 dark:bg-slate-950 dark:text-slate-400 border-t border-slate-800 pt-16 pb-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Logo & Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-white">
                accredian
              </span>
              <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400">
                Enterprise
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering organizations to build high-performance product, data, and tech capabilities via customized certification programs.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                  href: "https://linkedin.com",
                },
                {
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  ),
                  href: "https://twitter.com",
                },
                {
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                  href: "https://facebook.com",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-850 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2.5 text-sm">
              {programLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              {resources.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>12th Floor, Tower B, Sector 62, Noida, UP, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <a href="mailto:enterprise@accredian.com" className="hover:text-white transition-colors flex items-center gap-0.5">
                  enterprise@accredian.com
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>&copy; {currentYear} Accredian Enterprise. All rights reserved. Clone developed for assignment.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-slate-350 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-slate-350 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
