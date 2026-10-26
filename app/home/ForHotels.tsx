import { ArrowRight, Broom, Calendar, Chart, Messages, People, WalletMoney, type Icon } from "@/app/components/icons";
import { Button, Photo, SectionHeading } from "@/app/components/ui";
import { PHOTOS } from "@/app/content/site";

const FEATURES: { icon: Icon; label: string }[] = [
  { icon: Calendar, label: "Front desk and bookings" },
  { icon: Broom, label: "Rooms and housekeeping" },
  { icon: People, label: "Staff, roles and rota" },
  { icon: WalletMoney, label: "Wallet and payouts" },
  { icon: Chart, label: "Accounting and reports" },
  { icon: Messages, label: "Guest chat" },
];

export default function ForHotels() {
  return (
    <section aria-labelledby="hotels-title" className="pb-16 sm:pb-24">
      <div className="container-site">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-12">
          <div className="flex flex-col gap-7">
            <SectionHeading
              id="hotels-title"
              eyebrow="For hotels"
              title="Get verified. Get booked. Run it all in one place."
              lead="Verified hotels reach guests who are looking for exactly that, and get the Andinoh hotel app to run the property."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {FEATURES.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-ink-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/hotels" variant="secondary" size="lg" iconRight={ArrowRight}>See the hotel software</Button>
              <Button href="/waitlist?type=hotel" variant="outline" size="lg">Join as a hotel partner</Button>
            </div>
          </div>
          <Photo slot={PHOTOS.hotelsApp} className="aspect-[16/10] w-full rounded-2xl border border-line" />
        </div>
      </div>
    </section>
  );
}
