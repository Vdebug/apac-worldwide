import type { Metadata } from "next";
import {
  ArrowRight,
  Briefcase,
  Building2,
  ClipboardCheck,
  FileText,
  Landmark,
  Scale,
} from "lucide-react";
import Link from "next/link";

import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import StructuredData from "@/components/StructuredData";
import {
  absoluteUrl,
  jurisdictionComparison,
  processSteps,
  services,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "See how APAC Worldwide supports company formation, immigration, compliance, finance readiness, and business licensing across the UAE.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: absoluteUrl("/services"),
    title: "Services | APAC Worldwide",
    description:
      "See how APAC Worldwide supports company formation, immigration, compliance, finance readiness, and business licensing across the UAE.",
  },
};

const icons: Record<string, any> = {
  "company-formation": Building2,
  "pro-and-immigration": FileText,
  "legal-and-compliance": Scale,
  "banking-and-tax": Landmark,
  "business-licensing": ClipboardCheck,
  "office-solutions": Briefcase,
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "UAE business setup advisory",
    provider: {
      "@type": "Organization",
      name: "APAC Worldwide",
      url: absoluteUrl("/"),
    },
    areaServed: "United Arab Emirates",
    url: absoluteUrl("/services"),
  };

  return (
    <>
      <StructuredData data={serviceSchema} />
      <Navbar />
      <PageHero
        eyebrow="Services"
        title="Integrated setup support from first decision to launch readiness"
        description="Our service model is designed to connect authority approvals, residency, compliance, and banking preparation into one coherent launch path."
        primaryCta={{ href: "/contact#contact-form", label: "Request a tailored plan" }}
        secondaryCta={{ href: "/blog", label: "Read market guides" }}
        stats={[
          { label: "Coverage", value: "Formation through compliance" },
          { label: "Support style", value: "Advisory plus execution" },
          { label: "Best for", value: "Founders entering the UAE" },
        ]}
      />

      <section className="bg-white py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Service pillars"
              title="Every workstream that matters for a clean launch"
              description="Each service is built to support a stronger setup decision and a smoother operating start."
            />
          </Reveal>

          <div className="mt-14 space-y-6">
            {services.map((service, index) => {
              const Icon = icons[service.slug];
              return (
                <Reveal
                  key={service.slug}
                  delayClass={`stagger-${(index % 3) + 1}`}
                  className="grid gap-8 rounded-[30px] border border-neutral-100 bg-neutral-50 p-8 lg:grid-cols-[0.95fr_1.05fr]"
                  id={service.slug}
                >
                  <div>
                    <div className="inline-flex rounded-2xl border border-teal/10 bg-white p-4 text-teal">
                      <Icon strokeWidth={1.5} size={30} />
                    </div>
                    <h2 className="mt-6 font-serif text-3xl font-medium text-charcoal">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
                      {service.description}
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-white bg-white p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                      What this includes
                    </div>
                    <ul className="mt-4 grid gap-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-neutral-500">
                          <span className="mt-2 h-2 w-2 rounded-full bg-teal" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact#contact-form"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-gold"
                    >
                      Discuss this service
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Our process"
              title="A launch sequence designed to reduce rework"
              description="We keep planning, filing, and operating readiness aligned so each step supports the next."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.title}
                delayClass={`stagger-${index + 1}`}
                className="rounded-[28px] border border-neutral-100 bg-white p-8 card-lift"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Step {index + 1}
                </div>
                <h3 className="mt-4 text-2xl font-serif font-medium text-charcoal">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-500">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Jurisdiction fit"
              title="Choose the structure that supports the business model"
              description="Mainland, Free Zone, and offshore structures each solve different commercial problems. The strongest choice depends on how the company will actually operate."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {jurisdictionComparison.map((item, index) => (
              <Reveal
                key={item.title}
                delayClass={`stagger-${index + 1}`}
                className={`rounded-[28px] border p-8 ${
                  index === 1
                    ? "border-teal bg-teal text-white"
                    : "border-neutral-100 bg-neutral-50"
                }`}
              >
                <h3 className="font-serif text-3xl font-medium">{item.title}</h3>
                <p className={`mt-4 text-sm leading-relaxed ${index === 1 ? "text-white/75" : "text-neutral-500"}`}>
                  {item.summary}
                </p>
                <ul className="mt-5 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className={`flex gap-3 text-sm leading-relaxed ${index === 1 ? "text-white/80" : "text-neutral-500"}`}
                    >
                      <span className={`mt-2 h-2 w-2 rounded-full ${index === 1 ? "bg-gold" : "bg-teal"}`} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        eyebrow="Service FAQ"
        title="Questions about service scope and launch planning"
        description="If you are comparing structures or trying to build the first year plan, these are the issues worth settling early."
        limit={4}
      />

      <CTASection
        eyebrow="Ready to move"
        title="Need a service plan that fits your activity, team size, and timeline"
        description="We can turn your current requirements into a clear launch sequence with realistic next steps."
        primaryCta={{ href: "/contact#contact-form", label: "Request your plan" }}
        secondaryCta={{ href: "/blog", label: "Read setup guides" }}
      />
      <Footer />
    </>
  );
}
