import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  stats?: Array<{ label: string; value: string }>;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats = [],
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden px-6 pb-14 pt-28 text-white sm:pb-18 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-40"
      style={{ background: "linear-gradient(160deg, #1f514c 0%, #163d39 42%, #0f2b28 100%)" }}
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <circle cx="72%" cy="28%" r="320" stroke="white" strokeWidth="0.5" fill="none" />
        <circle cx="24%" cy="70%" r="240" stroke="white" strokeWidth="0.5" fill="none" />
      </svg>

      <div className="absolute left-[10%] top-28 h-2 w-2 rounded-full bg-gold/70 float-anim" />
      <div className="absolute right-[14%] top-40 h-2 w-2 rounded-full bg-white/20 float-anim-slow" />
      <div className="absolute bottom-20 left-[18%] h-2.5 w-2.5 rounded-full bg-gold/30 float-anim" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <Reveal className="section-label-light">{eyebrow}</Reveal>
          <Reveal as="h1" delayClass="stagger-1" className="mt-4 sm:mt-6 font-serif text-[clamp(2rem,6vw,5rem)] font-medium leading-[1.1] tracking-tight">
            {title}
          </Reveal>
          <Reveal
            as="p"
            delayClass="stagger-2"
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {description}
          </Reveal>

          {(primaryCta || secondaryCta) && (
            <Reveal
              delayClass="stagger-3"
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              {primaryCta ? (
                <Link href={primaryCta.href} className="btn-gold text-[15px] px-8 py-4">
                  {primaryCta.label}
                  <span className="btn-arrow">
                    <ArrowRight size={12} />
                  </span>
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link href={secondaryCta.href} className="btn-outline-white text-[15px] px-8 py-4">
                  {secondaryCta.label}
                </Link>
              ) : null}
            </Reveal>
          )}
        </div>

        {stats.length ? (
          <Reveal
            delayClass="stagger-4"
            className="mt-10 sm:mt-14 grid gap-3 sm:gap-4 rounded-[20px] sm:rounded-[28px] border border-white/10 bg-white/[0.06] p-3 backdrop-blur-sm sm:grid-cols-2 lg:mt-18 lg:grid-cols-4"
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/8 bg-white/[0.05] px-5 py-4"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                  {item.label}
                </div>
                <div className="mt-2 text-lg font-semibold text-white">{item.value}</div>
              </div>
            ))}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
