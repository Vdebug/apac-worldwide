import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-[28px] border border-neutral-100 bg-white card-lift ${
        featured ? "lg:grid lg:grid-cols-[1.15fr_0.85fr]" : ""
      }`}
    >
      <div className={`relative ${featured ? "min-h-[320px] lg:min-h-full" : "h-64"}`}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
        />
      </div>
      <div className="flex flex-col justify-between p-7 lg:p-8">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>{post.readTime}</span>
          </div>
          <h3 className={`mt-4 font-serif font-medium text-charcoal ${featured ? "text-3xl" : "text-2xl"}`}>
            <Link href={`/blog/${post.slug}`} className="transition-colors duration-300 group-hover:text-teal">
              {post.title}
            </Link>
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-neutral-500">{post.excerpt}</p>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-gold"
        >
          Read article
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
