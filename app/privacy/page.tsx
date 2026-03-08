import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Read how APAC Worldwide handles contact details, website analytics, and client information submitted through the website.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    url: absoluteUrl("/privacy"),
    title: "Privacy | APAC Worldwide",
    description:
      "Read how APAC Worldwide handles contact details, website analytics, and client information submitted through the website.",
  },
};

const privacySections = [
  {
    title: "Information we collect",
    body:
      "We collect the information you submit through contact forms, such as your name, email, phone number, company interests, and any details you choose to share about your business plans.",
  },
  {
    title: "How we use the information",
    body:
      "We use submitted information to respond to enquiries, prepare proposals, improve our service quality, and understand which website content helps visitors most.",
  },
  {
    title: "Sharing and storage",
    body:
      "We do not sell personal information. Data may be processed through trusted service providers used for website hosting, analytics, and email delivery, but only where needed to operate the site and respond to requests.",
  },
  {
    title: "Your choices",
    body:
      "You can request that we update or delete the personal information you submitted through the website by contacting us directly at info@apacworldwide.com.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Privacy"
        title="How we handle the information you share with us"
        description="This page explains what website and contact information we collect, why we collect it, and how you can ask us to update or remove it."
      />
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-5">
            {privacySections.map((section, index) => (
              <Reveal
                key={section.title}
                delayClass={`stagger-${Math.min(index + 1, 4)}`}
                className="rounded-[28px] border border-neutral-100 bg-neutral-50 p-8"
              >
                <h2 className="font-serif text-3xl font-medium text-charcoal">{section.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">{section.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
