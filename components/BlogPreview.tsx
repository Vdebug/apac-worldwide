import Link from "next/link";
import { ArrowRight } from "lucide-react";

import BlogCard from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import { blogPosts } from "@/lib/blog";

export default function BlogPreview() {
  const featured = blogPosts[0];
  const secondary = blogPosts.slice(1, 4);

  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Market insights"
            title={
              <>
                Search focused guides built around founder intent
              </>
            }
            description="We publish practical content around setup cost, Free Zone choices, residency, banking, and tax planning so founders can make sharper decisions before they launch."
          />
        </Reveal>

        <div className="mt-12">
          <Reveal>
            <BlogCard post={featured} featured />
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {secondary.map((post, index) => (
            <Reveal key={post.slug} delayClass={`stagger-${index + 1}`}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-gold"
          >
            Explore the full blog
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
