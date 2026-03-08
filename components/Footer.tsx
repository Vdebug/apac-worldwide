import Link from "next/link";
import Image from "next/image";

import { footerGroups, legalLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-teal-deeper text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="APAC Worldwide"
                width={136}
                height={101}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Strategic setup and corporate support for founders who want a clear route into the UAE market.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <p>{siteConfig.office}</p>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-gold">
                {siteConfig.email}
              </a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/68 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/60">
            &copy; 2026 APAC Worldwide. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/60">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
