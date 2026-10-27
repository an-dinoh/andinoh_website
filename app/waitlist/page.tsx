import type { Metadata } from "next";
import CloudImage from "@/app/components/CloudImage";
import LaunchProgress from "@/app/components/LaunchProgress";
import WaitlistForm from "@/app/components/WaitlistForm";
import { PHOTOS, WAITLIST_OFFER } from "@/app/content/site";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description: `Be first to book verified hotels on Andinoh. Guests who join get ${WAITLIST_OFFER.short.toLowerCase()}.`,
  alternates: { canonical: "/waitlist" },
};

const PERKS = [
  { title: WAITLIST_OFFER.short, body: WAITLIST_OFFER.terms },
  { title: "Only verified hotels", body: "Every one inspected in person by Andinoh." },
  { title: "Hotels: get verified early", body: "We’ll be in touch with partners about inspections before launch." },
];

export default async function WaitlistPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  const defaultType = type === "hotel" ? "hotel" : "customer";

  // Phones: intro → form → perks. Desktop: intro and perks on the left, the photo with the form on the right.
  return (
    <section className="container-site grid gap-12 pb-24 pt-14 sm:pb-32 sm:pt-20 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-20 lg:gap-y-0 lg:pb-40 lg:pt-24">
      <div className="lg:self-end">
        <p className="mb-5 inline-flex items-center gap-2.5 text-[15px] text-sub">
          <span aria-hidden className="h-2 w-2 rounded-full bg-gold" />
          Coming soon
        </p>
        <h1 className="text-balance font-display text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
          Be first through <span className="text-accent">the door.</span>
        </h1>
        <p className="mt-6 max-w-[460px] text-[17px] leading-normal text-sub sm:mt-7 sm:text-[19px]">
          Join the waitlist and we’ll email you the day bookings open.
        </p>
        <LaunchProgress className="mt-10 max-w-[460px] sm:mt-12" />
      </div>

      {/* Photo with the form over it on desktop; on phones the form overlaps the photo's lower edge. */}
      <div className="lg:relative lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-[780px] lg:self-center lg:overflow-hidden lg:rounded-[32px]">
        <div className="relative h-[260px] overflow-hidden rounded-3xl sm:h-[420px] lg:absolute lg:inset-0 lg:h-auto lg:rounded-none">
          <CloudImage photo={PHOTOS.gardenRoom} priority sizes="(min-width: 1024px) 560px, 100vw" />
        </div>
        <div className="relative -mt-14 mx-2.5 rounded-3xl border border-line bg-card p-5 backdrop-blur-xl sm:-mt-24 sm:mx-8 sm:p-7 lg:absolute lg:inset-x-6 lg:bottom-6 lg:m-0 lg:border-0">
          <WaitlistForm variant="card" defaultType={defaultType} />
        </div>
      </div>

      <ul className="max-w-[460px] border-b border-line lg:mt-14 lg:self-start">
        {PERKS.map((p, i) => (
          <li key={p.title} className="flex gap-5 border-t border-line py-[18px]">
            <span className="tabular w-6 shrink-0 text-sm font-medium text-accent">0{i + 1}</span>
            <div>
              <p className="mb-1 text-base font-medium">{p.title}</p>
              <p className="text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
