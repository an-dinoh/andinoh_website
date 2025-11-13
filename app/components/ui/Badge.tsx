import { ReactNode } from "react";

interface BadgeProps {
  variant?: "primary" | "secondary" | "white";
  children: ReactNode;
}

export default function Badge({ variant = "primary", children }: BadgeProps) {
  const variants = {
    primary: "bg-red-700 text-white",
    secondary: "bg-red-100 text-red-700",
    white: "bg-red-600 text-white",
  };

  return (
    <span
      className={`inline-block text-xs px-4 py-1 rounded-full ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
