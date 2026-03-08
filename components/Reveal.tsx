"use client";

import {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealVariant = "up" | "left" | "right" | "scale";

function getVariantClass(variant: RevealVariant) {
  if (variant === "left") return "reveal-left";
  if (variant === "right") return "reveal-right";
  if (variant === "scale") return "reveal-scale";
  return "reveal";
}

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delayClass?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Reveal<T extends ElementType = "div">({
  as,
  children,
  className = "",
  variant = "up",
  delayClass = "",
  ...props
}: RevealProps<T>) {
  const Component = (as || "div") as any;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = [getVariantClass(variant), visible ? "visible" : "", delayClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  );
}
