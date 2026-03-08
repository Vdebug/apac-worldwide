import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Review the website terms that apply when you browse APAC Worldwide content or submit a request through the website.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    url: absoluteUrl("/terms"),
    title: "Terms | APAC Worldwide",
    description:
      "Review the website terms that apply when you browse APAC Worldwide content or submit a request through the website.",
  },
};

const termsSections = [
  {
    title: "Website use",
    body:
      "The information on this website is intended for general guidance. It should not be treated as legal, tax, banking, or immigration advice for every situation.",
  },
  {
    title: "Service scope",
    body:
      "Any professional engagement begins only after scope, fees, and responsibilities are agreed in writing. Website enquiries alone do not create a client relationship.",
  },
  {
    title: "Accuracy and updates",
    body:
      "We aim to keep the website content useful and current, but regulations and authority practices can change. Founders should confirm important decisions through a tailored review before acting on website material.",
  },
  {
    title: "Intellectual property",
    body:
      "All website content, copy, and design elements belong to APAC Worldwide unless otherwise stated. They may not be reused without permission.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Terms"
        title="Terms that apply when you use this website"
        description="These terms explain how the website content may be used and when a formal advisory relationship begins."
      />
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-5">
            {termsSections.map((section, index) => (
              <Reveal
                key={section.title}
                delayClass={`stagger-${Math.min(index + 1, 4)}`}
                className="rounded-[28px] border border-neutral-100 bg-neutral-50 p-8"
              >
                <h2 className="font-serif text-3xl font-medium text-charcoal">{section.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">{section.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
