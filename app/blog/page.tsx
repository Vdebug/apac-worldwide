import type { Metadata } from "next";

import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import StructuredData from "@/components/StructuredData";
import { blogPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Founder focused UAE setup guides covering cost, Free Zone choices, residency, banking, and corporate tax planning.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: absoluteUrl("/blog"),
    title: "Blog | APAC Worldwide",
    description:
      "Founder focused UAE setup guides covering cost, Free Zone choices, residency, banking, and corporate tax planning.",
  },
};

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "APAC Worldwide Blog",
    url: absoluteUrl("/blog"),
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
    })),
  };

  const [featured, ...rest] = blogPosts;

  return (
    <>
      <StructuredData data={blogSchema} />
      <Navbar />
      <PageHero
        eyebrow="Blog"
        title="High intent UAE setup guides for founders and operators"
        description="Every article is designed to answer the questions founders search before they choose a jurisdiction, budget, visa path, or finance setup."
        primaryCta={{ href: "/contact", label: "Talk to an advisor" }}
        secondaryCta={{ href: "/services", label: "See service coverage" }}
        stats={[
          { label: "Topics", value: "Cost, structure, visa, tax, banking" },
          { label: "Audience", value: "Founders and growth teams" },
          { label: "Approach", value: "Clear and commercially useful" },
        ]}
      />

      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <BlogCard post={featured} featured />
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {rest.map((post, index) => (
              <Reveal key={post.slug} delayClass={`stagger-${(index % 3) + 1}`}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Need a tailored answer"
        title="Your setup plan should fit your business, not a generic package"
        description="If the blog helped surface the right questions, we can turn those into a practical launch path for your specific business."
        primaryCta={{ href: "/contact", label: "Request your plan" }}
      />
      <Footer />
    </>
  );
}
