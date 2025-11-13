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
    gray: "bg-gray-50",
    red: "bg-red-50",
    pink: "bg-pink-50",
  };

  return (
    <section className={`py-20 px-6 ${backgrounds[background]} ${className}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
}
