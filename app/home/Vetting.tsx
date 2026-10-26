import Link from "next/link";
import {
  AlertTriangle, Building, CheckCircle, ClipboardTick, Coffee, Document, Drop, Gallery, Home, Lamp, People, Shield, Verify,
  type Icon,
} from "@/app/components/icons";
import { Photo, SectionHeading } from "@/app/components/ui";
import { PHOTOS } from "@/app/content/site";

const STEPS = [
  {
    title: "The hotel proves who it is",
    body: "Business registration, licences and tax details are checked against official documents before anything else happens.",
  },
  {
    title: "An independent inspector visits",
    body: "Our field agents don’t work for any hotel. On site, they go through the checklist, take photos and log where the visit happened.",
  },
  {
    title: "Our team reviews every report",
    body: "Nothing is approved automatically. Anything that fails gets a fix, a deadline and a follow-up visit.",
  },
  {
    title: "Verified, then checked again",
    body: "The hotel goes live with the Andinoh verified badge, and is re-inspected every year without warning.",
  },
];

// The inspectors' checklist categories (seeded in the backend: seed_inspection_categories).
const CHECKS: { icon: Icon; name: string }[] = [
  { icon: Gallery, name: "Listing accuracy" },
  { icon: Document, name: "Legal and licensing" },
  { icon: AlertTriangle, name: "Fire and life safety" },
  { icon: Shield, name: "Security" },
  { icon: Home, name: "Room standards" },
  { icon: Building, name: "Public areas" },
  { icon: Coffee, name: "Food hygiene" },
  { icon: Drop, name: "Pool and spa" },
  { icon: People, name: "Staff conduct" },
  { icon: Lamp, name: "Utilities" },
];

export default function Vetting() {
  return (
    <section id="vetting" aria-labelledby="vetting-title" className="border-y border-line bg-surface py-16 sm:py-24">
      <div className="container-site flex flex-col gap-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              id="vetting-title"
              eyebrow="How we vet hotels"
              title="No hotel goes live until we’ve been there."
              lead="Andinoh inspectors visit every hotel in person. Here’s what happens before a hotel can take your booking."
            />

            {/* Progress tracker, as in the hotel app's approval tracker. */}
            <ol className="flex flex-col">
              {STEPS.map((step, i) => (
                <li key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                  {i < STEPS.length - 1 && <span aria-hidden className="absolute left-[15px] top-9 bottom-1 w-px bg-success-ring" />}
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success-50 text-success ring-1 ring-inset ring-success-ring">
                    {i === STEPS.length - 1 ? <Verify className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
                  </span>
                  <div className="flex flex-col gap-1 pt-1">
                    <h3 className="text-[15px] font-semibold text-ink">
                      <span className="tabular mr-1.5 text-muted">{i + 1}.</span>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-4">
            <Photo slot={PHOTOS.inspection} className="aspect-[4/3] w-full rounded-3xl border border-line" />
            <div className="flex items-start gap-3 rounded-2xl border border-info-ring bg-info-50 p-4">
              <ClipboardTick className="mt-0.5 h-5 w-5 shrink-0 text-info" />
              <p className="text-sm leading-relaxed text-info-fg">
                <span className="font-semibold">Independent by design.</span> Hotel owners and staff can’t become Andinoh inspectors,
                and a hotel is usually checked by a different inspector each time.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-[15px] font-semibold text-ink">What our inspectors check</h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {CHECKS.map(({ icon: Icon, name }) => (
              <li key={name} className="flex items-center gap-3 rounded-xl border border-line bg-background px-3 py-3 text-sm text-ink-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="leading-tight">{name}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted">
            Want to inspect hotels for Andinoh?{" "}
            <Link href="/contact" className="font-medium text-primary hover:underline">Get in touch</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
