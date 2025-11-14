import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-full transition-colors";

  const variants = {
    primary: "bg-[#0F75BD] text-white hover:bg-[#0050C8]",
    secondary: "bg-white text-[#0F75BD] hover:bg-[#FAFAFA]",
    outline: "text-[#0F75BD] border-2 border-[#0F75BD] hover:bg-[#F0F8FF]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
