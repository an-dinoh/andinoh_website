import type { Metadata } from "next";
import CloudImage from "@/app/components/CloudImage";
import { ArrowLink, Eyebrow, Faint, PillLink, Statement, Steps, Title } from "@/app/components/site";
import { PHOTOS } from "@/app/content/site";

export const metadata: Metadata = {
  title: "For hotels",
  description:
    "Get your hotel verified by Andinoh and run it from one app: front desk, rooms, housekeeping, staff, payouts and accounting.",
  alternates: { canonical: "/hotels" },
};

const FEATURES = [
  { title: "Front desk", body: "Andinoh bookings and walk-ins in one list. Check guests in and out." },
  { title: "Rooms and prices", body: "Room types, every room, and seasonal prices that apply themselves." },
  { title: "Housekeeping", body: "See which rooms are clean or dirty, and assign the work." },
  { title: "Staff and rota", body: "Invite staff with the right access, plan shifts, track clock-ins." },
  { title: "Wallet and payouts", body: "Online payments land in your wallet. Withdraw to your bank." },
  { title: "Accounting", body: "Profit and loss, expenses and daily cash-up, kept properly." },
  { title: "Guest chat", body: "Talk to guests before and during their stay." },
  { title: "Reports", body: "Occupancy, revenue and reviews on one dashboard." },
];

const STEPS = [
  { title: "Create your hotel", body: "Add your details, photos, facilities and rooms." },
  { title: "Send your documents", body: "Registration, licence and tax details, checked by Andinoh." },
  { title: "Host your inspection", body: "An independent inspector visits with the checklist." },
  { title: "Go live, verified", body: "Guests can book you, with the Andinoh verified badge." },
];

export default function HotelsPage() {
  return (
    <>
      <section className="container-site flex flex-col items-center pt-16 text-center sm:pt-24 lg:pt-32">
        <Eyebrow>For hotels</Eyebrow>
        <h1 className="max-w-[1080px] font-display text-[clamp(2.75rem,7.4vw,6rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
          The hotel software <br className="hidden sm:block" />
          that comes <span className="text-accent">with guests.</span>
        </h1>
        <p className="mt-6 max-w-[620px] text-[17px] leading-normal text-sub sm:mt-8 sm:text-[21px]">
          Get verified by Andinoh, take bookings from guests who want a hotel they can trust, and run your property from one app.
        </p>
        <div className="mt-8 flex w-full flex-col items-center gap-5 sm:mt-10 sm:w-auto sm:flex-row sm:gap-7">
          <PillLink href="/waitlist?type=hotel" className="w-full sm:w-auto">Become a partner</PillLink>
          <ArrowLink href="#verification" tone="ink" arrow="↓">How verification works</ArrowLink>
        </div>
        <div className="relative mt-14 h-[300px] w-full overflow-hidden rounded-3xl sm:mt-20 sm:h-[480px] sm:rounded-[32px] lg:mt-[88px] lg:h-[620px]">
          <CloudImage photo={PHOTOS.frontDesk} priority sizes="(min-width: 1200px) 1136px, 100vw" />
        </div>
      </section>

      <Statement>
        Guests come to Andinoh for trust. <Faint>Verification is how good hotels stand out.</Faint>
      </Statement>

      <section className="container-site pb-28 sm:pb-40 lg:pb-48">
        <Eyebrow>The Andinoh hotel app</Eyebrow>
        <Title className="max-w-[760px]">
          The front desk and the back office, <Faint>in one place.</Faint>
        </Title>
        <ul className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:mt-[72px] lg:grid-cols-4 lg:gap-y-14">
          {FEATURES.map((f) => (
            <li key={f.title} className="border-t border-line pt-5 sm:pt-6">
              <p className="mb-2 text-lg font-medium sm:text-[19px]">{f.title}</p>
              <p className="text-[15px] leading-relaxed text-muted">{f.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="verification" className="bg-soft py-24 sm:py-32 lg:py-40">
        <div className="container-site">
          <Title className="max-w-[760px]">Four steps to your verified badge.</Title>
          <div className="mt-12 sm:mt-16 lg:mt-[88px]">
            <Steps items={STEPS} />
          </div>
          <p className="mt-12 max-w-[720px] text-base leading-relaxed text-sub sm:mt-16 sm:text-[17px]">
            If something doesn’t pass, you’ll see exactly what to fix and by when. The inspector confirms the fix on a follow-up
            visit. Verified hotels are re-inspected once a year.
          </p>
        </div>
      </section>

      <section className="container-site grid gap-4 pt-28 sm:grid-cols-2 sm:gap-6 sm:pt-40 lg:pt-48">
        {[PHOTOS.lobby, PHOTOS.roomBlue].map((p) => (
          <div key={p.src} className="relative h-[280px] overflow-hidden rounded-[20px] sm:h-[400px] sm:rounded-[28px] lg:h-[520px]">
            <CloudImage photo={p} sizes="(min-width: 1200px) 556px, (min-width: 640px) 50vw, 100vw" />
          </div>
        ))}
      </section>

      <section className="container-site flex flex-col items-center py-28 text-center sm:py-40 lg:py-48">
        <h2 className="font-display text-[46px] font-semibold leading-none tracking-[-0.045em] sm:text-[64px] lg:text-[80px]">
          Be live on <br className="hidden sm:block" />
          launch day.
        </h2>
        <p className="mb-8 mt-5 max-w-[520px] text-base text-sub sm:mt-7 sm:text-[19px]">
          Join as a partner and we’ll be in touch about getting your hotel verified.
        </p>
        <ArrowLink href="/waitlist?type=hotel">Join as a hotel partner</ArrowLink>
      </section>
    </>
  );
}
