import Link from "next/link";
import { CONTACT, SOCIALS } from "@/app/content/site";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

const ring = "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40";
const linkCls = `w-fit text-[15px] text-ink transition-opacity hover:opacity-70 ${ring}`;

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { href: "/#why", label: "Why Andinoh" },
      { href: "/#vetting", label: "How we vet" },
      { href: "/hotels", label: "For hotels" },
      { href: "/waitlist", label: "Waitlist" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/waitlist?type=hotel", label: "Become a partner" },
    ],
  },
];

const ICON = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: SOCIALS.instagram,
    icon: (
      <svg {...ICON}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>
    ),
  },
  {
    name: "LinkedIn",
    href: SOCIALS.linkedin,
    icon: (
      <svg {...ICON}><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M8 10.5v6M8 7.5v.01M12 16.5v-6M12 13.5a2.5 2.5 0 0 1 5 0v3" /></svg>
    ),
  },
  {
    name: "TikTok",
    href: SOCIALS.tiktok,
    icon: (
      <svg {...ICON}><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" /><path d="M14 3c.5 2.6 2.4 4.4 5 4.6" /></svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="px-2.5 pb-2.5 sm:px-4 sm:pb-4">
      <div className="relative overflow-hidden rounded-[28px] bg-soft sm:rounded-[36px]">
        {/* Soft brand glow in the corner. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full sm:-right-40 sm:-top-48 sm:h-[640px] sm:w-[640px]"
          style={{ background: "radial-gradient(closest-side, var(--foot-glow), transparent)" }}
        />

        <div className="relative mx-auto max-w-[1200px] px-[22px] pt-14 sm:px-10 sm:pt-20 lg:px-12 lg:pt-[104px]">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col items-start gap-5 sm:gap-7 md:col-span-2 lg:col-span-5">
              <Logo className="h-6 w-auto sm:h-7" />
              <p className="font-display text-[30px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[40px]">
                Hotels you can trust,
                <br />
                <span className="text-faint">checked in person.</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:col-span-2 md:grid-cols-[1fr_1fr_1.35fr] lg:col-span-7 lg:col-start-6 lg:gap-8">
              {COLUMNS.map((col) => (
                <div key={col.title} className="flex flex-col gap-3.5">
                  <h2 className="mb-1 text-[13px] font-normal text-muted">{col.title}</h2>
                  {col.links.map((l) => (
                    <Link key={l.href} href={l.href} className={linkCls}>{l.label}</Link>
                  ))}
                </div>
              ))}
              <div className="col-span-2 flex flex-col gap-3.5 md:col-span-1">
                <h2 className="mb-1 text-[13px] font-normal text-muted">Get in touch</h2>
                <a href={`mailto:${CONTACT.email}`} className={`${linkCls} break-words`}>{CONTACT.email}</a>
                <a href={CONTACT.whatsapp.href} target="_blank" rel="noopener noreferrer" className={linkCls}>WhatsApp</a>
                <a href={CONTACT.phone.href} className={`${linkCls} tabular`}>{CONTACT.phone.label}</a>
                <span className="text-[15px] text-sub">{CONTACT.city}</span>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-5 border-t border-line py-6 text-sm text-muted sm:mt-[88px] sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Andinoh. All rights reserved.</span>
            <ul className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Andinoh on ${s.name}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg text-ink transition-colors hover:border-ink/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              <ThemeSwitch />
              <a href="#top" className={`hidden w-fit text-muted transition-opacity hover:opacity-70 lg:inline ${ring}`}>Back to top ↑</a>
            </div>
          </div>
        </div>

        {/* The giant wordmark, cut by the bottom edge. */}
        <p
          aria-hidden
          className="relative mt-1 mb-[-0.24em] select-none whitespace-nowrap text-center font-display font-semibold leading-none tracking-[-0.06em] text-wordmark"
          style={{ fontSize: "clamp(96px, 23vw, 330px)" }}
        >
          Andinoh
        </p>
      </div>
    </footer>
  );
}
