import { CalendarTick, Message, Search, Star } from "@/app/components/icons";
import { IconTile, SectionHeading } from "@/app/components/ui";

const STAGES = [
  {
    icon: Search,
    step: "Find",
    title: "Search verified hotels",
    points: ["Filter by city, dates, price and facilities", "Every result has passed an inspection"],
  },
  {
    icon: CalendarTick,
    step: "Book",
    title: "Know the price before you pay",
    points: ["See the exact total, fees included", "Pay now, or a deposit now and the rest at the hotel", "Book for someone else, with or without an account"],
  },
  {
    icon: Message,
    step: "Stay",
    title: "The hotel is a message away",
    points: ["Chat with the front desk in the app", "Request airport and city pickups", "Add extras without calling around"],
  },
  {
    icon: Star,
    step: "After",
    title: "Your review keeps hotels honest",
    points: ["Only guests who stayed can review", "Earn loyalty points on every stay", "Receipts for everything you paid"],
  },
];

export default function GuestJourney() {
  return (
    <section aria-labelledby="journey-title" className="pb-16 sm:pb-24">
      <div className="container-site flex flex-col gap-10">
        <SectionHeading
          id="journey-title"
          eyebrow="For guests"
          title="From search to check-out, in one app."
          lead="The Andinoh app is coming to iPhone and Android. Here’s how a stay works."
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s, i) => (
            <li key={s.step} className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5">
              <div className="flex items-center justify-between">
                <IconTile icon={s.icon} />
                <span className="tabular text-xs font-medium text-subtle">0{i + 1} · {s.step}</span>
              </div>
              <h3 className="text-[15px] font-semibold text-ink">{s.title}</h3>
              <ul className="flex flex-col gap-2">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-subtle" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
