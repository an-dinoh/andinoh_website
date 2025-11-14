import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "red" | "pink";
}

export default function SectionContainer({
  children,
  className = "",
  background = "white",
}: SectionContainerProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-[#FAFAFA]",
    red: "bg-[#F0F8FF]",
    pink: "bg-[#FCE4EC]",
  };

  return (
    <section className={`py-20 px-6 ${backgrounds[background]} ${className}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
}
