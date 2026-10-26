"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "@/app/components/icons";
import { Button } from "@/app/components/ui";
import { useTheme } from "@/app/context/ThemeContext";
import Logo from "./Logo";

const NAV = [
  { href: "/#why", label: "Why Andinoh" },
  { href: "/#vetting", label: "How we vet hotels" },
  { href: "/hotels", label: "For hotels" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

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

  const isActive = (href: string) => !href.includes("#") && pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface/90 backdrop-blur">
      <nav aria-label="Main" className="container-site flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">
          <Logo className="h-7 w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-2 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${
                  isActive(item.href) ? "text-primary" : "text-ink-2"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <div className="hidden sm:block">
            <Button href="/waitlist" size="md">Join the waitlist</Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="animate-pop border-t border-line bg-surface lg:hidden">
          <ul className="container-site flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block rounded-xl px-3 py-3 text-[15px] font-medium hover:bg-surface-2 ${isActive(item.href) ? "text-primary" : "text-ink-2"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href="/waitlist" size="lg" fullWidth>Join the waitlist</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
