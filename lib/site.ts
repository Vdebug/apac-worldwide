export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://apacworldwide.com";

export const siteConfig = {
  name: "APAC Worldwide",
  shortName: "APAC",
  title: "APAC Worldwide | UAE Business Setup and Corporate Services",
  description:
    "Business setup, licensing, visa support, compliance, and growth advisory for companies entering the UAE market.",
  url: siteUrl,
  email: "info@apacworldwide.com",
  office: "Dubai Silicon Oasis, Dubai, United Arab Emirates",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: 1500, suffix: "+", label: "Businesses launched" },
  { value: 60, suffix: "+", label: "Countries served" },
  { value: 95, suffix: "%", label: "Renewal retention" },
  { value: 10, suffix: "+", label: "Years of advisory work" },
];

export const services = [
  {
    slug: "company-formation",
    title: "Company formation",
    description:
      "Mainland, Free Zone, and offshore formation support with authority selection, document preparation, and licensing.",
    bullets: [
      "Activity and jurisdiction mapping",
      "License application handling",
      "Shareholder and document support",
    ],
  },
  {
    slug: "pro-and-immigration",
    title: "PRO and immigration",
    description:
      "Residency, entry permit, Emirates ID, and labor process support for founders, teams, and family members.",
    bullets: [
      "Investor visa support",
      "Team onboarding coordination",
      "Ongoing renewal management",
    ],
  },
  {
    slug: "legal-and-compliance",
    title: "Legal and compliance",
    description:
      "Commercial documentation, policy support, annual filings, and practical compliance guidance for operating in the UAE.",
    bullets: [
      "Corporate document drafting",
      "Regulatory filing support",
      "Risk and policy reviews",
    ],
  },
  {
    slug: "banking-and-tax",
    title: "Banking and tax",
    description:
      "Bank readiness reviews, VAT and corporate tax support, and finance process guidance for new companies.",
    bullets: [
      "Bank account readiness packs",
      "VAT and tax registration support",
      "Bookkeeping process setup",
    ],
  },
  {
    slug: "business-licensing",
    title: "Business licensing",
    description:
      "Trade license renewals, activity amendments, and authority approvals for regulated and non regulated sectors.",
    bullets: [
      "Initial license planning",
      "Activity amendments",
      "Renewal and approval tracking",
    ],
  },
  {
    slug: "office-solutions",
    title: "Office solutions",
    description:
      "Desk, office, and workspace planning aligned to visa quota, budget, and long term operating needs.",
    bullets: [
      "Flexi desk planning",
      "Private office sourcing",
      "Growth ready workspace advice",
    ],
  },
];

export const processSteps = [
  {
    title: "Map the right setup",
    description:
      "We review your business activity, ownership structure, visa needs, and market goals before choosing the jurisdiction.",
  },
  {
    title: "Prepare the application",
    description:
      "Our team prepares the forms, supporting documents, and authority submissions needed to secure the first approvals.",
  },
  {
    title: "Launch operations",
    description:
      "Once the license is issued, we guide visa, bank readiness, tax setup, and the first compliance milestones.",
  },
];

export const jurisdictionComparison = [
  {
    title: "Mainland",
    summary:
      "Best for companies that want direct local market access, broad activity coverage, and room to scale with larger teams.",
    highlights: [
      "Operate across the UAE market",
      "Strong fit for service and trading companies",
      "Useful when local tenders matter",
    ],
  },
  {
    title: "Free Zone",
    summary:
      "Best for founders who value streamlined licensing, sector specific ecosystems, and efficient setup options.",
    highlights: [
      "Popular for cross border operations",
      "Wide choice of specialist zones",
      "Often efficient for lean launch plans",
    ],
  },
  {
    title: "Offshore",
    summary:
      "Best for holding structures and international activities where a local operating footprint is not the main priority.",
    highlights: [
      "Useful for ownership structures",
      "Designed for specific use cases",
      "Requires careful scope review",
    ],
  },
];

export const values = [
  {
    title: "Clear planning",
    description:
      "Every engagement starts with a practical roadmap so founders know timing, costs, and authority touchpoints early.",
  },
  {
    title: "Senior guidance",
    description:
      "Clients work with advisors who understand launch sequencing, document risk, and the commercial side of setup.",
  },
  {
    title: "Long term support",
    description:
      "We stay involved after incorporation so renewals, amendments, and compliance work do not slow the business down.",
  },
];

export const team = [
  {
    name: "Ahmad Al Rashidi",
    role: "Founder and chief advisor",
    bio: "Leads complex setup mandates for regional and international founders entering the UAE market.",
    initials: "AR",
    color: "#1f514c",
  },
  {
    name: "Sarah Mitchell",
    role: "Head of formation",
    bio: "Oversees company launch planning across major mainland and Free Zone jurisdictions.",
    initials: "SM",
    color: "#c8a84e",
  },
  {
    name: "Raj Patel",
    role: "Immigration lead",
    bio: "Coordinates founder and team residency pathways with a focus on speed and documentation quality.",
    initials: "RP",
    color: "#2a6b64",
  },
  {
    name: "Fatima Al Hosani",
    role: "Legal and compliance lead",
    bio: "Supports corporate documentation, annual obligations, and practical policy guidance for growing companies.",
    initials: "FA",
    color: "#0f2b28",
  },
];

export const testimonials = [
  {
    quote:
      "APAC turned a complex licensing decision into a clear plan and kept the launch moving without surprises.",
    author: "Founder of a software consultancy",
    context: "Client from Singapore",
  },
  {
    quote:
      "The team balanced formation, residency, and bank readiness in one coordinated workflow, which saved us weeks.",
    author: "Managing director of an ecommerce brand",
    context: "Client from India",
  },
  {
    quote:
      "What stood out was the level of commercial guidance. We were not just filing paperwork, we were making better setup choices.",
    author: "Owner of a design studio",
    context: "Client from the United Kingdom",
  },
];

export const faqs = [
  {
    question: "What type of company can I open in the UAE?",
    answer:
      "Most founders compare mainland, Free Zone, and offshore structures. The right choice depends on your activity, where you plan to sell, how many visas you need, and how much operational flexibility matters to you.",
  },
  {
    question: "How long does setup usually take?",
    answer:
      "A simple Free Zone launch can move quickly, while mainland and regulated activities usually take longer. Timing depends on document readiness, approvals, and any residency or tax registrations that follow the license.",
  },
  {
    question: "Can the process start remotely?",
    answer:
      "Many structures can begin remotely, especially when early approvals and document preparation are the main tasks. Some steps may still require original documents, identity checks, or a local visit depending on the authority.",
  },
  {
    question: "Do I need office space from day one?",
    answer:
      "Not always. Some structures can begin with a desk or flexible workspace, while others need a dedicated office that matches the activity and visa plan.",
  },
  {
    question: "Will you help after the license is issued?",
    answer:
      "Yes. Clients often continue with us for visa renewals, license amendments, tax support, bookkeeping setup, and annual compliance planning.",
  },
];

export const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: services.slice(0, 4).map((service) => ({
      label: service.title,
      href: `/services#${service.slug}`,
    })),
  },
  {
    title: "Resources",
    links: [
      { label: "Dubai business cost guide", href: "/blog/cost-to-start-a-business-in-dubai-2026" },
      { label: "Free Zone comparison", href: "/blog/free-zone-or-mainland-for-a-new-uae-company" },
      { label: "Investor visa guide", href: "/blog/uae-investor-visa-process-for-business-owners" },
      { label: "Corporate tax guide", href: "/blog/uae-corporate-tax-guide-for-new-companies" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
