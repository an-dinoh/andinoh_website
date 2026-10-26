import type { Metadata } from "next";
import {
  ArrowRight, Broom, Calculator, Calendar, CalendarEdit, Chart, CheckCircle, Discount, Document, Messages, People, Shop,
  Timer, Verify, WalletMoney, type Icon,
} from "@/app/components/icons";
import { Button, IconTile, Photo, Pill, SectionHeading } from "@/app/components/ui";
import { PHOTOS } from "@/app/content/site";

export const metadata: Metadata = {
  title: "For hotels",
  description:
    "Get your hotel verified by Andinoh and run it from one app: front desk, rooms, housekeeping, staff, payouts and accounting.",
  alternates: { canonical: "/hotels" },
};

const FEATURES: { icon: Icon; title: string; body: string }[] = [
  { icon: Calendar, title: "Front desk", body: "Andinoh bookings and walk-ins in one list. Check guests in and out, take payments, handle group bookings." },
  { icon: CalendarEdit, title: "Rooms and prices", body: "Room types, every physical room, and seasonal prices that apply themselves." },
  { icon: Broom, title: "Housekeeping board", body: "See which rooms are clean, dirty or being cleaned, and assign tasks to staff." },
  { icon: People, title: "Staff and rota", body: "Invite staff with the right permissions, plan the rota and track clock-ins." },
  { icon: WalletMoney, title: "Wallet and payouts", body: "Online payments land in your Andinoh wallet. Withdraw to your bank account." },
  { icon: Calculator, title: "Accounting", body: "Profit and loss, expenses, receivables and daily cash-up, kept as proper double-entry books." },
  { icon: Messages, title: "Guest chat", body: "Talk to guests before and during their stay, from the same app." },
  { icon: Chart, title: "Reports and analytics", body: "Occupancy, revenue and reviews on one dashboard." },
  { icon: Discount, title: "Discounts", body: "Run offers that show up for guests when they search." },
];

const STEPS = [
  { icon: Shop, title: "Create your hotel", body: "Add your details, photos, facilities, policies and rooms." },
  { icon: Document, title: "Send your documents", body: "Business registration, licence and tax details. Andinoh checks them." },
  { icon: Timer, title: "Host your inspection", body: "An independent Andinoh inspector visits and goes through the checklist." },
  { icon: Verify, title: "Go live, verified", body: "Guests can book you, and you carry the Andinoh verified badge." },
];

export default function HotelsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[72px]">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-primary-50 to-transparent" />
        <div className="container-site relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="animate-rise flex flex-col items-start gap-6">
            <Pill tone="primary">For hotel owners and managers</Pill>
            <h1 className="font-display text-[38px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-[52px]">
              The hotel software that comes with guests.
            </h1>
            <p className="max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg">
              Get verified by Andinoh, take bookings from guests who want a hotel they can trust, and run the whole property from one app.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href="/waitlist?type=hotel" size="lg" iconRight={ArrowRight}>Join as a hotel partner</Button>
              <Button href="#verification" size="lg" variant="outline">How verification works</Button>
            </div>
          </div>
          <Photo slot={PHOTOS.hotelsHero} priority className="aspect-[4/3] w-full rounded-3xl border border-line" />
        </div>
      </section>

      <section aria-labelledby="features-title" className="py-16 sm:py-24">
        <div className="container-site flex flex-col gap-10">
          <SectionHeading
            id="features-title"
            eyebrow="The Andinoh hotel app"
            title="Everything the front desk and the back office need."
            lead="Built for hotels in Nigeria: prices in naira, cash and transfers at the desk, and staff who work in shifts."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <article key={f.title} className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5">
                <IconTile icon={f.icon} />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[15px] font-semibold text-ink">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{f.body}</p>
                </div>
              </article>
            ))}
          </div>
          <Photo slot={PHOTOS.hotelsApp} className="aspect-[16/9] w-full rounded-3xl border border-line" />
        </div>
      </section>

      <section id="verification" aria-labelledby="verification-title" className="border-y border-line bg-surface py-16 sm:py-24">
        <div className="container-site flex flex-col gap-10">
          <SectionHeading
            id="verification-title"
            eyebrow="Getting verified"
            title="Four steps to your verified badge."
            lead="Verification is what guests come to Andinoh for. It’s also how good hotels stand out from the rest."
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-4 rounded-2xl border border-line bg-background p-5">
                <div className="flex items-center justify-between">
                  <IconTile icon={s.icon} tone={i === STEPS.length - 1 ? "success" : "primary"} />
                  <span className="tabular text-xs font-medium text-subtle">Step {i + 1}</span>
                </div>
                <h3 className="text-[15px] font-semibold text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="flex items-start gap-3 rounded-2xl border border-info-ring bg-info-50 p-4">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-info" />
            <p className="text-sm leading-relaxed text-info-fg">
              If something doesn’t pass, you’ll see exactly what to fix and by when. Send photos of the fix, and the inspector confirms it on a follow-up visit.
              Verified hotels are re-inspected once a year.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-site">
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-br from-[#0A3F66] to-[#071F33] p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="flex max-w-xl flex-col gap-2">
              <h2 className="font-display text-[28px] font-semibold leading-tight tracking-tight text-white sm:text-[34px]">Be live on launch day.</h2>
              <p className="text-[17px] text-white/75">Partners on the waitlist are first in line for inspections.</p>
            </div>
            <Button href="/waitlist?type=hotel" variant="light" size="lg" iconRight={ArrowRight}>Join as a hotel partner</Button>
          </div>
        </div>
      </section>
    </>
  );
}
