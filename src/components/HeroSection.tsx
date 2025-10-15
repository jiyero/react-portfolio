import type { ReactNode } from "react";

type HeroSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

const HeroSection = ({ title, children, className = "" }: HeroSectionProps) => {
  return (
    <section className={className}>
      {children}
      <h1 className="text-6xl font-bold">{title}</h1>
    </section>
  );
};

export default HeroSection;
