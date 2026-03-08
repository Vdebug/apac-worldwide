"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import SectionIntro from "@/components/SectionIntro";
import { siteConfig } from "@/lib/site";

const contactItems = [
  {
    label: "Corporate Office",
    value: siteConfig.office,
    icon: (
      <svg className="h-5 w-5 text-[#c5a059]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "Direct Email",
    value: siteConfig.email,
    icon: (
      <svg className="h-5 w-5 text-[#c5a059]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const consultationSteps = [
  "A high-level discovery call to understand your activity, ownership, and timeline.",
  "Development of a tailored recommendation covering optimal structure and authority paths.",
  "A synchronized launch plan connecting formation, residency, and operational readiness.",
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--color-bg-base)] py-28 lg:py-36">
      {/* Decorative Blur Orbs */}
      <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#11352a]/5 blur-[120px]" />
      <div className="absolute top-20 right-[-10%] h-[400px] w-[400px] rounded-full bg-[#c5a059]/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-5">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <SectionIntro
              eyebrow="Get in touch"
              title={
                <span className="font-serif font-light text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05] text-[#151515] tracking-tight">
                  Ready to architect your <br/><span className="italic text-[#c5a059]">UAE Setup?</span>
                </span>
              }
              description="Tell us what you are building and we will come back with a formidable, practical route—not a generic package."
            />

            <div className="mt-14 space-y-8">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#05120e] shadow-lg shadow-[#05120e]/10">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#11352a] mb-1">
                      {item.label}
                    </div>
                    {item.label === "Direct Email" ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-[15px] font-medium text-[#151515] transition-colors hover:text-[#c5a059]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-[15px] font-medium text-[#151515]">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-[28px] border border-neutral-200/60 bg-white/70 backdrop-blur-md p-8 shadow-sm">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a059]">
                Our Process
              </div>
              <ul className="mt-6 space-y-4">
                {consultationSteps.map((step) => (
                  <li key={step} className="flex gap-4 text-[14px] leading-relaxed text-[#52525b] font-light">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#11352a]" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
