import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
  id: string;
};

const Section = ({ title, children, id, className = "" }: SectionProps) => {
  return (
    <section
      className={`flex flex-col justify-center items-center h-screen ${className}`}
      id={id}
    >
      <h1 className="text-6xl font-bold">{title}</h1>
      {children}
    </section>
  );
};

export default Section;
