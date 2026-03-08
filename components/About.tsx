"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

import SectionIntro from "@/components/SectionIntro";
import { values } from "@/lib/site";

export default function About() {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative overflow-hidden bg-white py-16 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionIntro
              eyebrow="Why APAC"
              title={
                <span className="font-serif font-light text-[clamp(1.8rem,5vw,3.5rem)] leading-[1.1] text-[#151515] tracking-tight">
                  Practical setup for founders who demand <span className="italic text-[#c5a059]">Velocity</span>
                </span>
              }
              description="We help elite founders move from idea to operating company with authoritative planning, meticulous document work, and compliance that never slows you down."
            />
            
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-[15px] sm:text-[16px] leading-relaxed text-[#52525b] font-light">
              <p>
                APAC Worldwide was engineered for leaders who need more than a simple filing service. We synchronize formation, immigration, tax systems, and continuous operating support so the launch stays commercially useful.
              </p>
              <p>
                Our advisors act as a formidable extension of your team, dedicated to ensuring an impenetrable entry into Dubai and the rapidly expanding UAE market.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <Link 
                href="/about" 
                className="group relative flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-[#05120e] px-10 text-[14px] font-bold tracking-wide text-[#c5a059] transition-all hover:bg-[#11352a]"
              >
                <span>Discover Our Story</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/contact" 
                className="group flex h-14 items-center justify-center gap-3 rounded-full border border-[#05120e]/20 px-10 text-[14px] font-semibold text-[#05120e] transition-all hover:border-[#05120e] hover:bg-[#05120e]/5"
              >
                <span>Talk to an Advisor</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:ml-auto w-full max-w-[540px]"
          >
            {/* Image Wrapper with organic/smooth corners */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl">
              <div className="absolute inset-0 bg-[#05120e]/20 z-10 mix-blend-multiply" />
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
                alt="Dubai skyline with modern towers"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            {/* Floating Metric Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-10 -left-10 z-20 hidden md:block w-72 rounded-[28px] border border-white/60 bg-white/80 p-6 backdrop-blur-xl shadow-xl shadow-[#05120e]/5"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#05120e] text-[#c5a059] shadow-inner">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-serif text-3xl font-medium text-[#05120e]">48 hrs</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c5a059] mt-0.5">
                    Proposal Delivery
                  </div>
                </div>
              </div>
              <p className="text-xs font-medium leading-relaxed text-[#52525b]">
                Our first deliverable is an architectural roadmap tailored to your specific entry strategy.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((valueItem, index) => (
            <motion.div
              key={valueItem.title}
              variants={item}
              whileHover={{ y: -5 }}
              className={`relative overflow-hidden rounded-[28px] border p-8 shadow-sm transition-shadow hover:shadow-lg ${
                index === 1
                  ? "border-[#11352a]/20 bg-[#05120e] text-white"
                  : "border-neutral-200/60 bg-[#f8f8f5] text-[#151515]"
              }`}
            >
              <div className={`text-[11px] font-bold uppercase tracking-[0.2em] ${index === 1 ? "text-[#c5a059]" : "text-[#11352a]"}`}>
                {valueItem.title}
              </div>
              <p className={`mt-5 text-[14px] leading-relaxed font-light ${index === 1 ? "text-white/70" : "text-[#52525b]"}`}>
                {valueItem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
