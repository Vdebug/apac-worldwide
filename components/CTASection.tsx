"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CTASectionProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}

export default function CTASection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="bg-[var(--color-bg-base)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[24px] sm:rounded-[40px] border border-[#11352a]/20 bg-[#05120e] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-20 lg:py-20 shadow-2xl"
        >
          {/* Subtle Ambient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#11352a_0%,transparent_80%)] opacity-30" />
          <div className="absolute right-[-10%] top-[-10%] h-[50vw] w-[50vw] rounded-full bg-[#c5a059] opacity-[0.03] blur-[100px] mix-blend-screen" />

          {/* Grain Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20 mix-blend-overlay pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-[#c5a059]/30 bg-[#c5a059]/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c5a059]">
              {eyebrow}
            </span>
            
            <h2 className="mt-6 sm:mt-8 font-serif text-[clamp(1.8rem,5vw,4.5rem)] font-light leading-[1.1] tracking-tight">
              {title}
            </h2>
            
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-[15px] sm:text-[17px] font-light leading-relaxed text-white/60">
              {description}
            </p>
            
            <div className="mt-8 sm:mt-12 flex flex-col justify-center gap-4 sm:gap-5 sm:flex-row w-full sm:w-auto">
              <Link
                href={primaryCta.href}
                className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-full bg-[#c5a059] px-10 text-[15px] font-bold text-[#05120e] transition-all hover:bg-[#d6b779] hover:scale-[1.02]"
              >
                <span>{primaryCta.label}</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#05120e]/10 transition-transform group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </div>
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="group flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white/20 px-10 text-[15px] font-semibold text-white transition-all hover:bg-white/10"
                >
                  <span>{secondaryCta.label}</span>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
