"use client";

import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import { faqs } from "@/lib/site";

interface FAQProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  limit?: number;
}

export default function FAQ({
  eyebrow = "FAQ",
  title = "Questions founders ask before launch",
  description = "These are the issues we help clients resolve before licensing, residency, and bank readiness move forward.",
  limit,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = typeof limit === "number" ? faqs.slice(0, limit) : faqs;

  return (
    <section id="faq" className="bg-neutral-50 py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <SectionIntro
            eyebrow={eyebrow}
            title={title}
            description={description}
            align="center"
          />
        </Reveal>

        <div className="mt-14 space-y-3">
          {items.map((faq, index) => (
            <Reveal
              key={faq.question}
              delayClass={`stagger-${Math.min(index + 1, 6)}`}
              className={`rounded-[24px] border transition-all duration-300 ${
                openIndex === index
                  ? "border-neutral-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                  : "border-neutral-100 bg-white/60 hover:border-neutral-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span
                  className={`pr-4 text-[15px] font-semibold transition-colors ${
                    openIndex === index ? "text-teal" : "text-charcoal"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    openIndex === index
                      ? "rotate-45 bg-teal text-white"
                      : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-sm leading-relaxed text-neutral-500">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
