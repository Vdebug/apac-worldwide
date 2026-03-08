import { ReactNode } from "react";

interface SectionIntroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntroProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : ""}>
      <span className={`section-label ${centered ? "justify-center" : ""}`}>
        {eyebrow}
      </span>
      <h2 className="mt-5 font-serif text-4xl lg:text-[3.25rem] font-medium leading-[1.12] text-charcoal">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-[15px] leading-relaxed text-neutral-500 ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
