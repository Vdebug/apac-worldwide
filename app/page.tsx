import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BlogPreview from "@/components/BlogPreview";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, faqs, siteConfig } from "@/lib/site";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
      streetAddress: "Business Bay",
    },
    areaServed: "United Arab Emirates",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
      <StructuredData data={[organizationSchema, faqSchema]} />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <BlogPreview />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
