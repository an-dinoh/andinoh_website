import type { Metadata } from "next";
import { Discount, ShieldCheck, Verify } from "@/app/components/icons";
import LaunchProgress from "@/app/components/LaunchProgress";
import WaitlistForm from "@/app/components/WaitlistForm";
import { WAITLIST_OFFER } from "@/app/content/site";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description: `Be first to book verified hotels on Andinoh. Guests who join get ${WAITLIST_OFFER.headline.toLowerCase()}.`,
  alternates: { canonical: "/waitlist" },
};

export default async function WaitlistPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  const defaultType = type === "hotel" ? "hotel" : "customer";

  return (
    <section className="pt-[72px]">
      <div className="container-site grid gap-8 py-10 sm:py-16 lg:grid-cols-[1fr_480px] lg:gap-12 lg:py-20">
        {/* Brand panel, as on the apps' sign-in screens. */}
        <div className="flex flex-col justify-between gap-10 rounded-3xl bg-gradient-to-br from-[#0A3F66] to-[#071F33] p-6 sm:p-10">
          <div className="flex flex-col gap-4">
            <span className="self-start rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90">Coming soon</span>
            <h1 className="font-display text-[32px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[44px]">
              Be first to book a trusted hotel stay.
            </h1>
            <p className="max-w-lg text-[17px] leading-relaxed text-white/75">
              Every hotel on Andinoh is inspected in person before it goes live. Join the waitlist and we’ll tell you the day bookings open.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {[
              { icon: Discount, title: WAITLIST_OFFER.headline, body: WAITLIST_OFFER.terms },
              { icon: ShieldCheck, title: "Only verified hotels", body: "Inspected on site by independent Andinoh inspectors." },
              { icon: Verify, title: "Hotel partners go live first", body: "We book your inspection before launch, so guests can find you on day one." },
            ].map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-0.5 text-sm text-white/70">{body}</p>
                </div>
              </li>
            ))}
          </ul>

          <LaunchProgress />
        </div>

        <div className="flex flex-col justify-center rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="text-[22px] font-semibold tracking-tight text-ink">Join the waitlist</h2>
          <p className="mb-6 mt-1 text-sm text-muted">Takes ten seconds. We’ll only email you about the launch.</p>
          <WaitlistForm defaultType={defaultType} />
        </div>
      </div>
    </section>
  );
}
