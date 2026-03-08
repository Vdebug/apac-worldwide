import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/services", "/blog", "/contact", "/privacy", "/terms"];

  return [
    ...pages.map((path) => ({
      url: absoluteUrl(path),
      lastModified: new Date("2026-03-08"),
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt),
    })),
  ];
}
