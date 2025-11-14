import { ReactNode } from "react";

interface BadgeProps {
  variant?: "primary" | "secondary" | "white";
  children: ReactNode;
}

export default function Badge({ variant = "primary", children }: BadgeProps) {
  const variants = {
    primary: "bg-[#0F75BD] text-white",
    secondary: "bg-[#E3F2FD] text-[#0F75BD]",
    white: "bg-[#0F75BD] text-white",
  };

  return (
    <span
      className={`inline-block text-xs px-4 py-1 rounded-full ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
