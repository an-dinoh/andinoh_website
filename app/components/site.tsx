import Link from "next/link";

// Small shared pieces of the website's look: one blue pill per view, arrow links for everything else.

const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

type Delay = React.CSSProperties & { "--d"?: string };

/** Rise in on scroll (see RevealObserver). Spread onto an element; `i` staggers siblings. */
export const reveal = (i = 0) => ({ "data-reveal": "", style: { "--d": `${i * 90}ms` } as Delay });

/** Hero entrance on load: add the "hero-in" class and this style; `i` is the piece's place in the sequence. */
export const heroDelay = (i = 0): Delay => ({ "--d": `${i * 110}ms` });

/** The one solid action on a page. */
export function PillLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex h-14 items-center justify-center rounded-full bg-brand px-7 text-[17px] font-medium text-white transition-colors hover:bg-brand-hover ${focus} ${className}`}
    >
      {children}
    </Link>
  );
}

/** A quiet text link with an arrow. */
export function ArrowLink({ href, children, tone = "accent", arrow = "→", className = "" }: {
  href: string;
  children: React.ReactNode;
  tone?: "accent" | "ink";
  arrow?: string;
  className?: string;
}) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const cls = `inline-flex items-center gap-1.5 rounded-md text-[17px] font-medium transition-opacity hover:opacity-75 ${tone === "accent" ? "text-accent" : "text-ink"} ${focus} ${className}`;
  const body = (
    <>
      {children} <span aria-hidden>{arrow}</span>
    </>
  );
  return external ? (
    <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{body}</a>
  ) : (
    <Link href={href} className={cls}>{body}</Link>
  );
}

/** Small blue label above a title. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-[15px] font-medium text-accent">{children}</p>;
}

/**
 * Section title in Rational Display; one of the few things that rises in on scroll (kept sparing on
 * purpose). Wrap the second half in <Faint> for the two-tone look.
 */
export function Title({ children, className = "", as: Tag = "h2", id }: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
  id?: string;
}) {
  return (
    <Tag id={id} {...reveal()} className={`text-balance font-display text-[40px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[52px] lg:text-[60px] ${className}`}>
      {children}
    </Tag>
  );
}

export function Faint({ children }: { children: React.ReactNode }) {
  return <span className="text-faint">{children}</span>;
}

/** Numbered steps with a blue rule on top: 1 column on phones, 2 on tablets, 4 on desktop. */
export function Steps({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
      {items.map((s, i) => (
        <li key={s.title} className="border-t-2 border-accent pt-5 sm:pt-6">
          <p className="tabular mb-2 text-sm font-medium text-accent sm:mb-3">{String(i + 1).padStart(2, "0")}</p>
          <p className="mb-2 text-lg font-medium sm:text-xl">{s.title}</p>
          <p className="text-[15px] leading-relaxed text-muted">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** The big centred two-tone sentence between sections. */
export function Statement({ children }: { children: React.ReactNode }) {
  return (
    <section className="container-site py-28 text-center sm:py-40 lg:py-48">
      <p {...reveal()} className="mx-auto max-w-[940px] text-balance font-display text-[30px] font-medium leading-[1.18] tracking-[-0.025em] sm:text-[42px] lg:text-[52px]">
        {children}
      </p>
    </section>
  );
}
