"use client";

import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  ClipboardCheck,
  FileText,
  Landmark,
  Scale,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

import SectionIntro from "@/components/SectionIntro";
import { services } from "@/lib/site";

const icons: Record<string, React.ElementType> = {
  "company-formation": Building2,
  "pro-and-immigration": FileText,
  "legal-and-compliance": Scale,
  "banking-and-tax": Landmark,
  "business-licensing": ClipboardCheck,
  "office-solutions": Briefcase,
};

export default function Services() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="services" className="relative overflow-hidden bg-[var(--color-bg-base)] py-16 sm:py-28 lg:py-36">
      {/* Decorative Elements */}
      <div className="absolute left-[-10%] top-[10%] h-[40vw] w-[40vw] rounded-full bg-[#c5a059]/5 blur-[100px]" />
      <div className="absolute right-[-10%] bottom-[10%] h-[40vw] w-[40vw] rounded-full bg-[#11352a]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionIntro
            eyebrow="What we do"
            title={
              <span className="font-serif font-light text-[clamp(1.8rem,5vw,4rem)] leading-[1.1] text-charcoal tracking-tight">
                Architectural Support for <br/><span className="italic text-[#c5a059]">Seamless Launch</span>
              </span>
            }
            description="We combine company formation, residency planning, compliance, and finance readiness so founders can move from approval to operation flawlessly."
            align="center"
          />
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 sm:mt-20 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = icons[service.slug] || Building2;
            return (
              <motion.div
                key={service.slug}
                variants={item}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
                className="group relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-neutral-200/60 bg-white/60 p-6 sm:p-10 backdrop-blur-xl shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#11352a]/5"
              >
                {/* Accent Line on hover */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#c5a059] transition-all duration-500 ease-out group-hover:w-full" />
                
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#11352a]/5 text-[#11352a] transition-all duration-500 group-hover:bg-[#11352a] group-hover:text-[#c5a059]">
                  <Icon strokeWidth={1.5} size={28} />
                </div>
                
                <h3 className="mb-4 font-serif text-2xl font-medium text-[#151515] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-[#52525b]">
                  {service.description}
                </p>
                
                <div className="mb-8 flex flex-wrap gap-2">
                  {service.bullets.slice(0, 3).map((bullet) => (
                    <span
                      key={bullet}
                      className="rounded-full border border-neutral-200/80 bg-neutral-100/50 px-3 py-1.5 text-[11px] font-medium tracking-wide text-neutral-600 transition-colors group-hover:border-[#c5a059]/20 group-hover:bg-[#c5a059]/5"
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-auto inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-[#11352a] transition-colors hover:text-[#c5a059]"
                >
                  <span className="relative">
                    View Framework
                    <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
