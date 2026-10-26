import Link from "next/link";
import { forwardRef } from "react";
import { Spinner, type Icon } from "@/app/components/icons";

// Same component as the hotel app (src/components/ui/Button.tsx), so actions look alike across Andinoh.
type Variant = "primary" | "secondary" | "outline" | "ghost" | "gold" | "light";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: Variant;
  size?: Size;
  icon?: Icon;
  iconRight?: Icon;
  loading?: boolean;
  fullWidth?: boolean;
  /** Renders a link styled as a button. */
  href?: string;
  children?: React.ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors select-none whitespace-nowrap " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-1 " +
  "disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "bg-primary-50 text-primary hover:bg-primary-100",
  outline: "border border-line-strong bg-surface text-ink-2 hover:bg-surface-2",
  ghost: "text-ink-2 hover:bg-surface-2",
  gold: "bg-secondary text-on-gold hover:bg-gold-hover",
  // On the deep blue bands: white plate, brand text, in both themes.
  light: "bg-white text-[#0A3F66] hover:bg-white/90",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-[15px]",
};

const iconSizes: Record<Size, string> = { sm: "w-4 h-4", md: "w-[18px] h-[18px]", lg: "w-5 h-5" };

export function buttonClass(variant: Variant = "primary", size: Size = "md", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", icon: IconLeft, iconRight: IconRight, loading = false, fullWidth = false, href, className = "", type = "button", disabled, children, ...rest },
  ref,
) {
  const cls = `${buttonClass(variant, size)} ${fullWidth ? "w-full" : ""} ${className}`;
  const content = (
    <>
      {loading ? <Spinner className={`${iconSizes[size]} animate-spin`} /> : IconLeft && <IconLeft className={iconSizes[size]} />}
      {children}
      {IconRight && !loading && <IconRight className={iconSizes[size]} />}
    </>
  );
  if (href && !disabled) {
    return <Link href={href} className={cls}>{content}</Link>;
  }
  return (
    <button ref={ref} type={type} className={cls} disabled={disabled || loading} aria-busy={loading || undefined} {...rest}>
      {content}
    </button>
  );
});

export default Button;
