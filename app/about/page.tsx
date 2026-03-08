import type { Metadata } from "next";

import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import About from "@/components/About";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the advisory team behind APAC Worldwide and see how we help founders enter the UAE market with clarity and confidence.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: absoluteUrl("/about"),
    title: "About | APAC Worldwide",
    description:
      "Meet the advisory team behind APAC Worldwide and see how we help founders enter the UAE market with clarity and confidence.",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About APAC Worldwide",
    url: absoluteUrl("/about"),
    description: metadata.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <StructuredData data={aboutSchema} />
      <Navbar />
      <PageHero
        eyebrow="About APAC"
        title="Built for founders who need a practical route into the UAE"
        description="We combine commercial thinking with detailed execution so setup decisions support the business long after the first license is issued."
        primaryCta={{ href: "/contact", label: "Speak with the team" }}
        secondaryCta={{ href: "/services", label: "Explore services" }}
        stats={[
          { label: "Core market", value: "Dubai and wider UAE" },
          { label: "Client profile", value: "Founders and growth teams" },
          { label: "Support model", value: "Formation through compliance" },
        ]}
      />
      <About />
      <Stats />
      <Team />
      <CTASection
        eyebrow="Next step"
        title="Need a team that can handle setup and the work that follows"
        description="We can help with the first launch plan, the filing sequence, and the finance and compliance work that comes after approval."
        primaryCta={{ href: "/contact", label: "Start your plan" }}
        secondaryCta={{ href: "/blog", label: "Read founder guides" }}
      />
      <Footer />
    </>
  );
}
