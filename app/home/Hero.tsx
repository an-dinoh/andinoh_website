import { ArrowRight, Card, ShieldCheck, Star, Verify } from "@/app/components/icons";
import { Button, Photo, Pill } from "@/app/components/ui";
import { PHOTOS, WAITLIST_OFFER } from "@/app/content/site";

const PROOF = [
  { icon: ShieldCheck, label: "Every hotel inspected in person" },
  { icon: Card, label: "Pay now or at the hotel" },
  { icon: Star, label: "Reviews only from real stays" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      {/* Soft brand wash behind the hero. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-primary-50 to-transparent" />

      <div className="container-site relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <div className="animate-rise flex flex-col items-start gap-6">
          <Pill tone="gold" wrap>Coming soon · {WAITLIST_OFFER.headline} on the waitlist</Pill>

          <h1 className="font-display text-[40px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[56px] lg:text-[64px]">
            Book a trusted <span className="text-primary">hotel stay.</span>
          </h1>

          <p className="max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg">
            Every hotel on Andinoh is visited and checked by an independent Andinoh inspector before you can book it.
            What you see is what you get, from the room to the receipt.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="/waitlist" size="lg" iconRight={ArrowRight}>Join the waitlist</Button>
            <Button href="/#vetting" size="lg" variant="outline">How we vet hotels</Button>
          </div>

          <ul className="mt-2 grid w-full gap-3 sm:grid-cols-3">
            {PROOF.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-ink-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Photo with app-style cards: shows the product language, not just a picture. */}
        <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <Photo slot={PHOTOS.hero} priority className="aspect-[4/5] w-full rounded-3xl border border-line sm:aspect-square lg:aspect-[9/10]" />

          <div className="absolute -left-4 top-24 hidden w-36 sm:block lg:-left-10 lg:w-44">
            <Photo slot={PHOTOS.heroDetail} sizes="200px" className="aspect-square w-full rounded-2xl border-4 border-background" />
          </div>

          <div className="animate-pop absolute right-3 top-3 flex items-center gap-3 rounded-2xl border border-line bg-surface p-3 pr-4 shadow-xl sm:-right-4 sm:top-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success-50 text-success">
              <Verify className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Inspection passed</p>
              <p className="text-xs text-muted">Checked on site by Andinoh</p>
            </div>
          </div>

          <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-line bg-surface p-4 shadow-xl sm:inset-x-auto sm:-left-6 sm:bottom-8 sm:w-[300px]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-ink">Deluxe room · 2 nights</p>
                <p className="text-xs text-muted">Exact price, before you book</p>
              </div>
              <Pill tone="success">Verified</Pill>
            </div>
            <div className="mt-3 flex items-end justify-between border-t border-line pt-3">
              <div>
                <p className="text-xs text-muted">Pay now</p>
                <p className="tabular text-lg font-semibold tracking-tight text-ink">₦25,000</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted">At the hotel</p>
                <p className="tabular text-lg font-semibold tracking-tight text-ink-2">₦71,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
