import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Buildings, Call, ClipboardTick, Location, Mail, Message } from "@/app/components/icons";
import { Button, IconTile, Pill } from "@/app/components/ui";
import { CONTACT, SOCIALS } from "@/app/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about Andinoh, partnering as a hotel or becoming an inspector? Get in touch.",
  alternates: { canonical: "/contact" },
};

const linkClass = "text-[15px] font-medium text-primary hover:underline";

export default function ContactPage() {
  return (
    <section className="pt-[72px]">
      <div className="container-site flex flex-col gap-12 py-14 sm:py-20">
        <div className="animate-rise flex max-w-2xl flex-col items-start gap-5">
          <Pill tone="primary">Get in touch</Pill>
          <h1 className="font-display text-[38px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-[52px]">
            We’d love to hear from you.
          </h1>
          <p className="text-[17px] leading-relaxed text-muted sm:text-lg">
            Questions about Andinoh, partnering as a hotel, or inspecting hotels with us? Reach us any of these ways.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5">
            <IconTile icon={Mail} />
            <div className="flex flex-col gap-1">
              <h2 className="text-[15px] font-semibold text-ink">Email</h2>
              <a href={`mailto:${CONTACT.email}`} className={linkClass}>{CONTACT.email}</a>
            </div>
          </article>
          <article className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5">
            <IconTile icon={Message} tone="success" />
            <div className="flex flex-col gap-1">
              <h2 className="text-[15px] font-semibold text-ink">WhatsApp</h2>
              <a href={CONTACT.whatsapp.href} target="_blank" rel="noopener noreferrer" className={`${linkClass} tabular`}>{CONTACT.whatsapp.label}</a>
              <p className="text-xs text-muted">Messages only</p>
            </div>
          </article>
          <article className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5">
            <IconTile icon={Call} />
            <div className="flex flex-col gap-1">
              <h2 className="text-[15px] font-semibold text-ink">Phone</h2>
              <a href={CONTACT.phone.href} className={`${linkClass} tabular`}>{CONTACT.phone.label}</a>
            </div>
          </article>
          <article className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5">
            <IconTile icon={Location} tone="gold" />
            <div className="flex flex-col gap-1">
              <h2 className="text-[15px] font-semibold text-ink">Based in</h2>
              <p className="text-[15px] font-medium text-ink-2">{CONTACT.city}</p>
            </div>
          </article>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <article className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-surface p-6">
            <IconTile icon={Buildings} />
            <div className="flex flex-col gap-1.5">
              <h2 className="text-lg font-semibold text-ink">Run a hotel?</h2>
              <p className="text-sm leading-relaxed text-muted">Join as a partner and we’ll help you set up and book your inspection before launch.</p>
            </div>
            <Button href="/waitlist?type=hotel" variant="secondary" iconRight={ArrowRight}>Join as a hotel partner</Button>
          </article>
          <article className="flex flex-col items-start gap-4 rounded-2xl border border-line bg-surface p-6">
            <IconTile icon={ClipboardTick} tone="success" />
            <div className="flex flex-col gap-1.5">
              <h2 className="text-lg font-semibold text-ink">Want to inspect hotels?</h2>
              <p className="text-sm leading-relaxed text-muted">
                Andinoh inspectors are independent field agents who visit hotels in their state. You can’t work for a hotel and inspect for us.
              </p>
            </div>
            <Button href={`mailto:${CONTACT.email}?subject=Becoming%20an%20Andinoh%20inspector`} variant="outline" icon={Mail}>Email us</Button>
          </article>
        </div>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">Follow Andinoh as we get ready to launch.</p>
          <ul className="flex gap-2">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink-2 transition-colors hover:bg-surface-2"
                >
                  <Image src={s.icon} alt="" width={16} height={16} className="h-4 w-4 opacity-70 brightness-0 dark:invert" />
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
