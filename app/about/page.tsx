import type { Metadata } from "next";
import { ArrowRight, Buildings, ClipboardTick, ShieldCheck, User, type Icon } from "@/app/components/icons";
import { Button, IconTile, Photo, Pill, SectionHeading } from "@/app/components/ui";
import { PHOTOS } from "@/app/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Andinoh is building Africa’s most trusted platform for hotel bookings and hotel management, starting in Nigeria.",
  alternates: { canonical: "/about" },
};

const APPS: { icon: Icon; name: string; who: string; body: string }[] = [
  { icon: User, name: "Andinoh app", who: "For guests", body: "Find verified hotels, book and pay, chat with the hotel and review your stay." },
  { icon: Buildings, name: "Andinoh for hotels", who: "For hotel teams", body: "Front desk, rooms, housekeeping, staff, payouts and accounting in one place." },
  { icon: ClipboardTick, name: "Andinoh inspector", who: "For field agents", body: "Visit hotels, work through the checklist, and file reports with photos." },
  { icon: ShieldCheck, name: "Andinoh review team", who: "Behind the scenes", body: "Checks documents, reviews every inspection report and keeps standards up." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[72px]">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-primary-50 to-transparent" />
        <div className="container-site relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="animate-rise flex flex-col items-start gap-6">
            <Pill tone="primary">About Andinoh</Pill>
            <h1 className="font-display text-[38px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-[52px]">
              Trust is the product.
            </h1>
            <p className="max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg">
              We’re building Africa’s most trusted platform for hotel bookings and hotel management, starting in Nigeria. Guests get
              hotels they can rely on. Hotels get the tools, and the guests, to grow.
            </p>
          </div>
          <Photo slot={PHOTOS.about} priority className="aspect-[3/2] w-full rounded-3xl border border-line" />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site grid gap-4 md:grid-cols-2 md:gap-6">
          <article className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <p className="text-[13px] font-medium text-primary">Our vision</p>
            <p className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
              To become Africa’s most trusted hotel booking and property management platform, connecting guests to authentic stays while
              helping hotel owners thrive in the digital economy.
            </p>
          </article>
          <article className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <p className="text-[13px] font-medium text-primary">Our mission</p>
            <p className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
              To make hotel stays across Africa simple and safe, with a mobile-first platform that joins guest bookings and hotel
              management, local payments, and hotels we’ve checked ourselves.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="platform-title" className="border-y border-line bg-surface py-16 sm:py-24">
        <div className="container-site flex flex-col gap-10">
          <SectionHeading
            id="platform-title"
            eyebrow="One platform"
            title="Four apps, one standard."
            lead="Guests, hotels, inspectors and our review team all work on the same platform, so a verified badge means the same thing everywhere."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {APPS.map((a) => (
              <article key={a.name} className="flex flex-col gap-4 rounded-2xl border border-line bg-background p-5">
                <IconTile icon={a.icon} />
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium text-muted">{a.who}</p>
                  <h3 className="text-[15px] font-semibold text-ink">{a.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{a.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site flex flex-col items-center gap-5 text-center">
          <h2 className="font-display text-[28px] font-semibold tracking-tight text-ink sm:text-4xl">Join us on the journey.</h2>
          <p className="max-w-lg text-[17px] text-muted">Be among the first to book a trusted hotel stay when we launch.</p>
          <Button href="/waitlist" size="lg" iconRight={ArrowRight}>Join the waitlist</Button>
        </div>
      </section>
    </>
  );
}
