import { Gallery, ReceiptText, ShieldAlert } from "@/app/components/icons";
import { IconTile, SectionHeading } from "@/app/components/ui";

const PROBLEMS = [
  {
    icon: Gallery,
    title: "The room isn’t the one in the photos",
    body: "Listings show their best angle, or someone else’s hotel. You find out at the front desk.",
  },
  {
    icon: ShieldAlert,
    title: "You can’t tell if it’s safe",
    body: "Fire exits, security, a working generator: none of it shows up in a listing until you’re there at night.",
  },
  {
    icon: ReceiptText,
    title: "The price changes at check-in",
    body: "Surprise charges, a deposit nobody mentioned, or a booking the hotel has never heard of.",
  },
];

export default function Problem() {
  return (
    <section aria-labelledby="problem-title" className="pt-16 sm:pt-24">
      <div className="container-site flex flex-col gap-10">
        <SectionHeading
          id="problem-title"
          eyebrow="Why Andinoh exists"
          title="Booking a hotel shouldn’t be a gamble."
          lead="Most people have a story about a stay that wasn’t what they paid for. We started Andinoh to end those stories."
        />
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {PROBLEMS.map((p) => (
            <article key={p.title} className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6">
              <IconTile icon={p.icon} tone="warning" />
              <div className="flex flex-col gap-2">
                <h3 className="text-[17px] font-semibold text-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="text-[17px] font-medium text-ink-2">
          Andinoh fixes this by checking every hotel in person, <span className="text-primary">before</span> you can book it.
        </p>
      </div>
    </section>
  );
}
