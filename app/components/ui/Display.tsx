import Image from "next/image";
import type { Icon } from "@/app/components/icons";
import { Gallery } from "@/app/components/icons";
import type { PhotoSlot } from "@/app/content/site";

export type Tone = "neutral" | "primary" | "success" | "warning" | "info" | "gold";

const TILE: Record<Tone, string> = {
  neutral: "bg-surface-2 text-ink-2",
  primary: "bg-primary-50 text-primary",
  success: "bg-success-50 text-success",
  warning: "bg-warning-50 text-warning",
  info: "bg-info-50 text-info",
  gold: "bg-secondary-50 text-gold-text",
};

/** A tinted square holding an icon, wherever an icon introduces something. */
export function IconTile({ icon: IconCmp, tone = "primary", size = "md" }: { icon: Icon; tone?: Tone; size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-12 w-12 rounded-2xl" : "h-10 w-10 rounded-xl";
  const glyph = size === "lg" ? "h-6 w-6" : "h-5 w-5";
  return (
    <span className={`flex shrink-0 items-center justify-center ${box} ${TILE[tone]}`}>
      <IconCmp className={glyph} />
    </span>
  );
}

const PILL: Record<Tone, string> = {
  neutral: "bg-surface-2 text-ink-2 ring-line",
  primary: "bg-primary-50 text-primary ring-primary-100",
  success: "bg-success-50 text-success ring-success-ring",
  warning: "bg-warning-50 text-warning ring-warning-ring",
  info: "bg-info-50 text-info ring-info-ring",
  gold: "bg-secondary-50 text-gold-text ring-gold-ring",
};
const DOT: Record<Tone, string> = {
  neutral: "bg-subtle", primary: "bg-primary", success: "bg-success", warning: "bg-warning-dot",
  info: "bg-info", gold: "bg-secondary",
};

export function Pill({ tone = "neutral", children, dot = true, wrap = false, className = "" }: {
  tone?: Tone;
  children: React.ReactNode;
  dot?: boolean;
  /** Let long marketing pills wrap on narrow phones instead of widening the page. */
  wrap?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${wrap ? "rounded-xl" : "rounded-full whitespace-nowrap"} ${PILL[tone]} ${className}`}>
      {dot && <span className={`h-1.5 w-1.5 rounded-full ${DOT[tone]}`} />}
      {children}
    </span>
  );
}

/** Small label above a section title. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[13px] font-medium text-primary">{children}</p>;
}

/** Section heading: eyebrow, display title and one supporting line. */
export function SectionHeading({ eyebrow, title, lead, align = "left", id }: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${align === "center" ? "mx-auto items-center text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={id} className="font-display text-[28px] font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl">{title}</h2>
      {lead && <p className="text-base leading-relaxed text-muted sm:text-[17px]">{lead}</p>}
    </div>
  );
}

/**
 * A photo, or a placeholder in its place until one is added in app/content/site.ts.
 * The placeholder says what photo belongs there, so the layout can be reviewed before the shoot.
 */
export function Photo({ slot, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", priority = false }: {
  slot: PhotoSlot;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (slot.src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={slot.src} alt={slot.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }
  return (
    <div role="img" aria-label={slot.alt} className={`photo-slot relative flex flex-col items-center justify-center gap-2 overflow-hidden p-4 text-center ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface/80 text-primary">
        <Gallery className="h-5 w-5" />
      </span>
      <span className="max-w-[16rem] text-xs leading-snug text-muted">{slot.hint}</span>
    </div>
  );
}
