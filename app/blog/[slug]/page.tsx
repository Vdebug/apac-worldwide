import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";

import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import StructuredData from "@/components/StructuredData";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { absoluteUrl, siteConfig } from "@/lib/site";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: absoluteUrl(`/blog/${post.slug}`),
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [
        {
          url: post.image,
          width: 1400,
          height: 900,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedSlugs
    .map((relatedSlug) => getBlogPost(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <StructuredData data={[articleSchema, faqSchema]} />
      <Navbar />
      <section className="relative overflow-hidden bg-white px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-teal/[0.05]" />
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <div className="inline-flex rounded-full border border-teal/10 bg-teal/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal">
              {post.category}
            </div>
            <h1 className="mt-4 sm:mt-6 font-serif text-[clamp(1.8rem,5vw,4.8rem)] font-medium leading-[1.1] tracking-tight text-charcoal">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
              {post.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-neutral-400">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={16} />
                {post.updatedAt}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 size={16} />
                {post.readTime}
              </span>
            </div>
          </Reveal>

          <Reveal delayClass="stagger-1" className="mt-8 sm:mt-12 overflow-hidden rounded-[20px] sm:rounded-[34px] border border-neutral-100">
            <div className="relative aspect-[16/9]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 1120px, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-10">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
          <div>
            <Reveal className="rounded-[20px] sm:rounded-[28px] border border-neutral-100 bg-neutral-50 p-5 sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                Key takeaways
              </div>
              <ul className="mt-5 grid gap-3">
                {post.keyTakeaways.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-neutral-500">
                    <span className="mt-2 h-2 w-2 rounded-full bg-teal" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="article-copy mt-10">
              {post.intro.map((paragraph, index) => (
                <Reveal key={paragraph} delayClass={index === 0 ? "" : "stagger-1"} as="p">
                  {paragraph}
                </Reveal>
              ))}

              {post.sections.map((section, index) => (
                <Reveal key={section.title} delayClass={`stagger-${Math.min(index + 1, 3)}`}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14 rounded-[30px] border border-neutral-100 bg-neutral-50 p-8 lg:p-10">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                Common questions
              </div>
              <div className="mt-6 space-y-4">
                {post.faq.map((item) => (
                  <div key={item.question} className="rounded-[22px] border border-white bg-white p-6">
                    <h3 className="text-lg font-semibold text-charcoal">{item.question}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-500">{item.answer}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal className="rounded-[28px] border border-neutral-100 bg-neutral-50 p-6 lg:sticky lg:top-28">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                Official references
              </div>
              <ul className="mt-5 space-y-3">
                {post.officialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-teal transition-colors hover:text-gold"
                    >
                      {link.label}
                      <ArrowRight size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-4xl font-medium text-charcoal">Related articles</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {relatedPosts.map((relatedPost, index) => (
              <Reveal key={relatedPost.slug} delayClass={`stagger-${index + 1}`}>
                <BlogCard post={relatedPost} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Need a tailored answer"
        title="Turn the research into a launch plan that fits your business"
        description="If you want advice shaped around your activity, market, and team model, we can map the next steps with you."
        primaryCta={{ href: "/contact", label: "Speak with an advisor" }}
      />
      <Footer />
    </>
  );
}
