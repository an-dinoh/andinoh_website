import { Bell, Discount } from "@/app/components/icons";
import LaunchProgress from "@/app/components/LaunchProgress";
import WaitlistForm from "@/app/components/WaitlistForm";
import { WAITLIST_OFFER } from "@/app/content/site";

export default function Launch() {
  return (
    <section id="waitlist" aria-labelledby="launch-title" className="pb-16 sm:pb-24">
      <div className="container-site">
        <div className="grid gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A3F66] to-[#071F33] p-6 sm:p-10 lg:grid-cols-[1fr_440px] lg:gap-14 lg:p-12">
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-3">
              <h2 id="launch-title" className="font-display text-[28px] font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl">
                Be first through the door.
              </h2>
              <p className="max-w-lg text-[17px] leading-relaxed text-white/75">
                Join the waitlist and we’ll email you the day bookings open.
              </p>
            </div>

            <LaunchProgress />

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                <Discount className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="text-sm font-semibold text-white">{WAITLIST_OFFER.headline}</p>
                  <p className="mt-0.5 text-sm text-white/70">{WAITLIST_OFFER.terms}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                <Bell className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="text-sm font-semibold text-white">Hotels: get verified before launch</p>
                  <p className="mt-0.5 text-sm text-white/70">Partners on the waitlist are first in line for inspections, so they’re live on day one.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-surface p-5 sm:p-6">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
