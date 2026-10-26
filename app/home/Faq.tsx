import { ChevronDown } from "@/app/components/icons";
import { SectionHeading } from "@/app/components/ui";
import { WAITLIST_OFFER } from "@/app/content/site";

const FAQS = [
  {
    q: "When does Andinoh launch?",
    a: "We’re finishing the apps and inspecting our first hotels now. Join the waitlist and we’ll email you the day bookings open.",
  },
  {
    q: "Where can I book?",
    a: "We’re starting in Nigeria. Waitlist members hear first which cities open at launch.",
  },
  {
    q: "How does the 10% discount work?",
    a: `${WAITLIST_OFFER.terms} Sign up with the email you’ll use for your Andinoh account.`,
  },
  {
    q: "What does “verified” mean?",
    a: "An independent Andinoh inspector has visited the hotel, checked it against our checklist, and our team has approved the report. Verified hotels are re-inspected every year.",
  },
  {
    q: "Can I pay at the hotel?",
    a: "Where the hotel allows it, you pay a deposit online and the rest when you arrive. The app shows exactly how much is due now and how much at the hotel.",
  },
  {
    q: "I run a hotel. How do I join?",
    a: "Join the waitlist as a hotel partner. We’ll help you set up, check your documents and book your inspection, so you’re live on launch day.",
  },
];

export default function Faq() {
  return (
    <section aria-labelledby="faq-title" className="pb-16 sm:pb-24">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionHeading id="faq-title" eyebrow="Questions" title="Good to know." />
        <div className="flex flex-col divide-y divide-line rounded-2xl border border-line bg-surface">
          {FAQS.map((f) => (
            <details key={f.q} className="group px-5 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[15px] font-medium text-ink marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-subtle transition-transform group-open:rotate-180" />
              </summary>
              <p className="-mt-1 pb-5 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
