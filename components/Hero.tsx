"use client";

import Link from "next/link";
import { ArrowRight, Globe, CheckCircle2, Building2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05120e] px-0 pt-20 pb-24 sm:pb-8">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#11352a_0%,transparent_70%)] opacity-60" />
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#c5a059] opacity-[0.03] blur-[120px] rounded-full mix-blend-screen" />
      
      {/* Grid Pattern overlay for tech/modern feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Badges */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ delay: 1, duration: 1 }}
        className="absolute hidden xl:flex lg:flex-col gap-1 left-[8%] top-[35%] items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl"
      >
        <div className="h-10 w-10 bg-[#c5a059]/20 rounded-full flex items-center justify-center text-[#c5a059] mb-2">
          <Globe size={20} />
        </div>
        <p className="text-xs font-semibold text-white/50 tracking-widest uppercase text-center w-24">Global Reach</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute hidden xl:flex lg:flex-col gap-1 right-[8%] bottom-[30%] items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl"
      >
        <div className="h-10 w-10 bg-[#1b493b] rounded-full flex items-center justify-center text-[#c5a059] mb-2">
          <Building2 size={20} />
        </div>
        <p className="text-xs font-semibold text-white/50 tracking-widest uppercase text-center w-24">Dubai HQ</p>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl px-6"
      >
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            variants={item}
            className="font-serif text-[clamp(2.4rem,8vw,7.5rem)] font-light leading-[0.95] tracking-tight text-white mb-6 sm:mb-8"
          >
            Launch with <br />
            <span className="font-medium italic text-[#c5a059]">Absolute Clarity</span>
          </motion.h1>

          <motion.p 
            variants={item}
            className="max-w-2xl text-base font-light leading-relaxed text-white/70 sm:text-xl px-2 sm:px-0"
          >
            APAC Worldwide connects elite founders to seamless company formation, 
            licensing, and deep compliance in the Emirates. Focused on growth, architected for scale.
          </motion.p>

          <motion.div 
            variants={item}
            className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row w-full sm:w-auto"
          >
            <Link 
              href="/contact#contact-form" 
              className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-[#c5a059] px-10 text-[15px] font-bold text-[#05120e] transition-all hover:bg-[#d6b779] hover:scale-[1.02]"
            >
              <span>Begin Your Setup</span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#05120e]/10 transition-transform group-hover:translate-x-1">
                <ArrowRight size={14} />
              </div>
            </Link>
            <Link 
              href="/services" 
              className="group flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white/20 px-10 text-[15px] font-semibold text-white transition-all hover:bg-white/10"
            >
              <span>View Services</span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={item} className="mt-10 sm:mt-20 flex flex-col items-center gap-4 sm:gap-6 border-t border-white/10 pt-8 sm:pt-10 sm:flex-row sm:gap-12 w-full justify-center">
            {[
              "Mainland & Free Zone",
              "End-to-end Compliance",
              "Trusted Worldwide",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-white/50">
                <CheckCircle2 size={16} className="text-[#c5a059]" />
                <span className="text-sm font-medium tracking-wide">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
