import type { Metadata } from "next";

import Contact from "@/components/Contact";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with APAC Worldwide about UAE company formation, licensing, immigration, banking readiness, and compliance support.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: absoluteUrl("/contact"),
    title: "Contact | APAC Worldwide",
    description:
      "Speak with APAC Worldwide about UAE company formation, licensing, immigration, banking readiness, and compliance support.",
  },
};

export default function ContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 4).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <StructuredData data={faqSchema} />
      <Navbar />
      <PageHero
        eyebrow="Contact"
        title="Share your plan and we will map the right UAE launch route"
        description="Whether you are comparing jurisdictions or ready to begin, we can help you sequence formation, residency, and finance work in a practical way."
        stats={[
          { label: "Response time", value: "Within one business day" },
          { label: "Support style", value: "Advisory plus execution" },
          { label: "Best for", value: "Founders and operating teams" },
        ]}
      />
      <Contact />
      <FAQ
        eyebrow="Before you reach out"
        title="Useful answers before the first consultation"
        description="A few of the questions we hear most often from founders entering the UAE market."
        limit={4}
      />
      <CTASection
        eyebrow="Prefer to research first"
        title="Explore the blog before we shape the plan together"
        description="Our market guides cover the main decisions around cost, structure, residency, banking, and tax planning."
        primaryCta={{ href: "/blog", label: "Read the blog" }}
      />
      <Footer />
    </>
  );
}
