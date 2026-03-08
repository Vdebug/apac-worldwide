"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { navigation } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const solid = pathname !== "/" || scrolled || mobileOpen;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white/94 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="APAC Worldwide"
              width={136}
              height={101}
              priority
              className={`h-10 w-auto sm:h-12 object-contain transition-all duration-500 ${solid ? "opacity-100" : "opacity-90 contrast-125 brightness-110"}`}
            />
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {navigation.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium transition-colors duration-300 ${
                    solid
                      ? active
                        ? "text-teal"
                        : "text-neutral-500 hover:text-teal"
                      : active
                        ? "text-white"
                        : "text-white/72 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact" className="btn-gold">
              Book consultation
              <span className="btn-arrow">
                <ArrowRight size={12} />
              </span>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen((current) => !current)}
            className="relative flex h-8 w-8 items-center justify-center lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`absolute h-[1.5px] w-5 transition-all duration-300 ${
                solid ? "bg-teal-dark" : "bg-white"
              } ${mobileOpen ? "rotate-45" : "-translate-y-1.5"}`}
            />
            <span
              className={`absolute h-[1.5px] w-5 transition-all duration-300 ${
                solid ? "bg-teal-dark" : "bg-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute h-[1.5px] w-5 transition-all duration-300 ${
                solid ? "bg-teal-dark" : "bg-white"
              } ${mobileOpen ? "-rotate-45" : "translate-y-1.5"}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          mobileOpen ? "max-h-[420px] border-t border-neutral-100" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b border-neutral-50 py-3 text-[15px] font-medium transition-colors ${
                pathname === link.href ? "text-teal" : "text-neutral-600 hover:text-teal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold mt-4 justify-center">
            Book consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
