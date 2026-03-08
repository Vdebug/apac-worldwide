import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-teal/[0.02]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <Reveal>
          <SectionIntro
            eyebrow="Leadership"
            title="Advising promoters on growth and compliance"
            description=""
            align="center"
          />
        </Reveal>

        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16 max-w-6xl mx-auto">
          <Reveal className="w-full lg:w-1/3 flex-shrink-0 flex flex-col items-center lg:items-start">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-neutral-100 bg-neutral-50 shadow-xl shadow-black/5">
              <Image 
                src="/chetan-gupta.jpg" 
                alt="Chetan Gupta, Director - UAE Operations at APAC Worldwide" 
                fill 
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="mt-6 text-center lg:text-left">
              <h3 className="text-3xl font-serif text-charcoal">Chetan Gupta</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                Director — UAE Operations
              </p>
            </div>
          </Reveal>
          
          <Reveal className="w-full lg:w-2/3 prose prose-lg prose-neutral text-neutral-600 max-w-none">
            <div className="bg-[#f8f8f5] p-8 sm:p-10 rounded-[2rem] border border-[#11352a]/5">
              <h4 className="text-xl font-bold text-charcoal mb-6 flex items-center gap-3">
                <span className="h-6 w-1 bg-gold rounded-full inline-block"></span>
                Director
              </h4>
              <p className="leading-relaxed">
                Chetan Gupta is a senior corporate and regulatory advisor with more than two decades of hands‑on advisory experience across Indian and international business environments. A Company Secretary, Advocate, Insolvency Professional, and Social Auditor, he specializes in corporate governance, compliance systems, legal structuring, and cross‑border expansion.
              </p>
              <p className="leading-relaxed mt-4">
                He is currently serving as <strong className="text-charcoal font-semibold">Director – UAE Operations at APAC Worldwide</strong>, leading the firm's UAE business setup and cross‑border advisory venture. In this role, he advises entrepreneurs, corporates, and family‑owned businesses on India–UAE business structuring, market entry strategies, regulatory compliance, and governance transformation.
              </p>
              <p className="leading-relaxed mt-4 bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm mt-8">
                <span className="block text-[#11352a] font-medium italic text-xl font-serif mb-2">&quot;</span>
                His advisory approach blends legal depth with commercial practicality, making him a trusted advisor to promoters and leadership teams navigating regulatory complexity and growth decisions in India and the UAE.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
