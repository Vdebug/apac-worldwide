"use client";

import { useEffect, useRef, useState } from "react";

import { stats } from "@/lib/site";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <div ref={ref} className="font-serif text-4xl lg:text-5xl font-semibold text-white">
      {count.toLocaleString()}<span className="text-gold">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(135deg, #1f514c 0%, #0f2b28 100%)" }}
    >
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20%" cy="50%" r="150" stroke="white" strokeWidth="0.5" fill="none" />
        <circle cx="80%" cy="50%" r="120" stroke="white" strokeWidth="0.5" fill="none" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal text-center lg:px-8">
              <Counter target={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-sm font-medium text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
