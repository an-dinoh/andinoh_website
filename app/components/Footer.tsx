import Image from "next/image";
import Link from "next/link";
import { Call, Clock, Location, Mail } from "@/app/components/icons";
import { CONTACT, SOCIALS } from "@/app/content/site";
import Logo from "./Logo";

const COLUMNS = [
  {
    title: "Andinoh",
    links: [
      { href: "/#why", label: "Why Andinoh" },
      { href: "/#vetting", label: "How we vet hotels" },
      { href: "/about", label: "About us" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "For hotels",
    links: [
      { href: "/hotels", label: "Hotel software" },
      { href: "/hotels#verification", label: "Getting verified" },
      { href: "/waitlist?type=hotel", label: "Become a partner" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A3F66] to-[#071F33] text-white">
      <div className="container-site py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div className="flex flex-col gap-4">
            <Logo inverse className="h-8 w-auto self-start" />
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Trusted hotel stays, and the software hotels run on. Every hotel is checked in person before guests can book it.
            </p>
            <p className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
              <Clock className="h-4 w-4" />
              The Andinoh app is coming to iPhone and Android
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-semibold">{col.title}</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-white/70">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-white">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-sm font-semibold">Get in touch</h2>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsapp.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Call className="h-4 w-4 shrink-0" /> <span className="tabular">{CONTACT.whatsapp.label}</span> (WhatsApp)
                </a>
              </li>
              <li>
                <a href={CONTACT.phone.href} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Call className="h-4 w-4 shrink-0" /> <span className="tabular">{CONTACT.phone.label}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Location className="h-4 w-4 shrink-0" /> {CONTACT.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Andinoh. All rights reserved.</p>
          <ul className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Andinoh on ${s.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Image src={s.icon} alt="" width={16} height={16} className="h-4 w-4 brightness-0 invert" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
