"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "@/app/components/icons";
import Logo from "./Logo";

const NAV = [
  { href: "/#why", label: "Why Andinoh" },
  { href: "/hotels", label: "For hotels" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const ring = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu after navigating, and on Escape.
  useEffect(() => { setOpen(false); }, [pathname]); // eslint-disable-line react-hooks/set-state-in-effect
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current = (href: string) => !href.includes("#") && pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-header backdrop-blur-md">
      <nav aria-label="Main" className="container-site flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <Link href="/" aria-label="Andinoh home" className={`flex shrink-0 items-center rounded-md ${ring}`}>
          <Logo className="h-[22px] w-auto md:h-[26px]" />
        </Link>

        <div className="flex items-center gap-2 md:gap-6">
          <ul className="hidden items-center gap-9 md:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current(item.href) ? "page" : undefined}
                  className={`rounded-md text-[15px] transition-opacity hover:opacity-70 ${ring} ${current(item.href) ? "font-medium text-accent" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-soft md:hidden ${ring}`}
          >
            {open ? <X className="h-[22px] w-[22px]" /> : <Menu className="h-[22px] w-[22px]" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="animate-pop border-t border-hair bg-bg md:hidden">
          <ul className="container-site flex flex-col py-3">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-hair last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={current(item.href) ? "page" : undefined}
                  className={`block py-4 font-display text-2xl font-medium tracking-[-0.02em] ${current(item.href) ? "text-accent" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
