import { Reveal } from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import { team } from "@/lib/site";

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-neutral-50 py-28 lg:py-36">
      <div className="absolute bottom-20 right-20 h-48 w-48 rounded-full bg-teal/[0.03]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Our people"
            title={
              <>
                Advisors who understand both formation and growth
              </>
            }
            description="Clients work with a multidisciplinary team that can connect setup decisions to banking, compliance, staffing, and expansion."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Reveal
              key={member.name}
              delayClass={`stagger-${index + 1}`}
              className="group rounded-[28px] border border-neutral-100 bg-white p-8 text-center card-lift"
            >
              <div
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold text-white transition-transform duration-500 group-hover:scale-110"
                style={{ background: member.color }}
              >
                {member.initials}
              </div>
              <h3 className="mt-5 text-lg font-bold text-charcoal">{member.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
