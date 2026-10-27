import type { Metadata } from "next";
import { ArrowLink, Eyebrow, Faint } from "@/app/components/site";
import { CONTACT } from "@/app/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about Andinoh, partnering as a hotel or becoming an inspector? Get in touch.",
  alternates: { canonical: "/contact" },
};

const ROWS = [
  { label: "Email", value: CONTACT.email, action: "Write to us", href: `mailto:${CONTACT.email}` },
  { label: "WhatsApp", value: CONTACT.whatsapp.label, action: "Message us", href: CONTACT.whatsapp.href },
  { label: "Phone", value: CONTACT.phone.label, action: "Call us", href: CONTACT.phone.href },
];

const rowGrid = "grid gap-1.5 border-t border-line py-7 sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:py-9";

export default function ContactPage() {
  return (
    <>
      <section className="container-site pb-16 pt-16 sm:pb-24 sm:pt-24 lg:pb-[120px] lg:pt-32">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.96] tracking-[-0.045em]">
          We’d love to <br />
          <Faint>hear from you.</Faint>
        </h1>
        <p className="mt-6 max-w-[560px] text-[17px] leading-normal text-sub sm:mt-8 sm:text-[21px]">
          Questions about Andinoh, partnering as a hotel, or inspecting hotels with us? Reach us any of these ways.
        </p>
      </section>

      <section className="container-site pb-24 sm:pb-32 lg:pb-40">
        <ul className="border-b border-line">
          {ROWS.map((r) => {
            const external = r.href.startsWith("http");
            return (
              <li key={r.label}>
                <a
                  href={r.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`${rowGrid} group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40`}
                >
                  <span className="text-[15px] text-muted sm:col-span-3">{r.label}</span>
                  <span className="tabular break-words font-display text-[26px] font-medium tracking-[-0.02em] sm:col-span-6 sm:text-[30px] lg:col-span-7 lg:text-[34px]">
                    {r.value}
                  </span>
                  <span className="mt-1 text-[15px] text-accent transition-opacity group-hover:opacity-75 sm:col-span-3 sm:mt-0 sm:text-right lg:col-span-2">
                    {r.action} <span aria-hidden>→</span>
                  </span>
                </a>
              </li>
            );
          })}
          <li className={rowGrid}>
            <span className="text-[15px] text-muted sm:col-span-3">Based in</span>
            <span className="font-display text-[26px] font-medium tracking-[-0.02em] sm:col-span-9 sm:text-[30px] lg:text-[34px]">{CONTACT.city}</span>
          </li>
        </ul>
      </section>

      <section className="container-site grid gap-4 pb-28 sm:pb-40 md:grid-cols-2 md:gap-6 lg:pb-48">
        <div className="rounded-3xl bg-soft p-7 sm:rounded-[28px] sm:p-10">
          <h2 className="mb-3 font-display text-[26px] font-medium tracking-[-0.02em] sm:text-[30px]">Run a hotel?</h2>
          <p className="mb-6 text-base leading-relaxed text-sub sm:text-[17px]">
            Join as a partner and we’ll help you get set up and verified.
          </p>
          <ArrowLink href="/hotels">Andinoh for hotels</ArrowLink>
        </div>
        <div className="rounded-3xl bg-soft p-7 sm:rounded-[28px] sm:p-10">
          <h2 className="mb-3 font-display text-[26px] font-medium tracking-[-0.02em] sm:text-[30px]">Want to inspect hotels?</h2>
          <p className="mb-6 text-base leading-relaxed text-sub sm:text-[17px]">
            Andinoh inspectors are independent field agents who visit hotels in their state. You can’t work for a hotel and inspect
            for us.
          </p>
          <ArrowLink href={`mailto:${CONTACT.email}?subject=Becoming%20an%20Andinoh%20inspector`}>Email us</ArrowLink>
        </div>
      </section>
    </>
  );
}
