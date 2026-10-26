"use client";

import { useState } from "react";
import { Award, Card, ChevronDown, Home, ShieldCheck, type Icon } from "@/app/components/icons";
import { SectionHeading } from "@/app/components/ui";

interface Pillar {
  icon: Icon;
  title: string;
  summary: string;
  problem: string;
  points: string[];
}

const PILLARS: Pillar[] = [
  {
    icon: Home,
    title: "Comfort",
    summary: "The room you booked is the room you get.",
    problem: "Listings that look nothing like the real room.",
    points: [
      "An inspector checks cleanliness, bedding, bathrooms, power backup and water supply on site.",
      "The name, address, room count and photos must match what the hotel lists.",
      "Reviews come only from guests who stayed and checked out.",
      "Chat with the hotel in the app before you arrive, and during your stay.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security",
    summary: "Safe hotels, safe payments, real businesses.",
    problem: "Not knowing if a place is safe, or even real, until you arrive.",
    points: [
      "Every hotel proves who it is with business documents that Andinoh checks.",
      "Inspectors check fire exits, alarms, CCTV, access control and lighting on site.",
      "Payments go through Flutterwave; your card details never reach the hotel.",
    ],
  },
  {
    icon: Award,
    title: "Quality",
    summary: "Standards that are checked again, not just once.",
    problem: "A hotel that was fine last year and isn’t now.",
    points: [
      "Every verified hotel is re-inspected each year, without warning.",
      "Anything that fails gets a deadline to fix and a follow-up visit.",
      "Inspectors are independent: no one who works for a hotel can inspect for us.",
    ],
  },
  {
    icon: Card,
    title: "Easy payment",
    summary: "One clear price, paid the way you prefer.",
    problem: "Hidden charges and confusing deposits at check-in.",
    points: [
      "See the exact total, including fees, before you book.",
      "Pay in full now, or pay a deposit and the rest at the hotel where it allows.",
      "The cancellation policy and your refund are shown up front, with a receipt for every payment.",
    ],
  },
];

function PillarCard({ pillar, open, onToggle }: { pillar: Pillar; open: boolean; onToggle: () => void }) {
  const { icon: Icon } = pillar;
  const panelId = `pillar-${pillar.title.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <article
      className={`flex flex-col rounded-2xl border bg-surface transition-colors ${open ? "border-primary/40" : "border-line hover:border-primary/25"}`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start gap-4 rounded-2xl p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
      >
        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors ${open ? "bg-primary text-white" : "bg-primary-50 text-primary"}`}>
          <Icon className="h-6 w-6" />
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="text-lg font-semibold text-ink">{pillar.title}</span>
          <span className="text-sm leading-relaxed text-muted">{pillar.summary}</span>
          <span className="mt-2 inline-flex items-center gap-1 text-[13px] font-medium text-primary">
            {open ? "Show less" : "How we do it"}
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          </span>
        </span>
      </button>

      <div id={panelId} className="expand" data-open={open}>
        <div>
          <div className="mx-6 mb-6 flex flex-col gap-4 border-t border-line pt-5">
            <p className="text-sm text-ink-2">
              <span className="font-medium text-warning">The problem: </span>
              {pillar.problem}
            </p>
            <ul className="flex flex-col gap-2.5">
              {pillar.points.map((pt) => (
                <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-ink-2">
                  <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function WhyAndinoh() {
  const [open, setOpen] = useState<string | null>(PILLARS[0].title);

  return (
    <section id="why" aria-labelledby="why-title" className="py-16 sm:py-24">
      <div className="container-site flex flex-col gap-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <SectionHeading
            id="why-title"
            eyebrow="Why choose Andinoh"
            title="Comfort, security and quality, guaranteed."
          />
          <div className="rounded-2xl border border-gold-ring bg-secondary-50 p-5 sm:p-6">
            <p className="text-[15px] font-semibold text-gold-fg">The Andinoh guarantee</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
              Every hotel on Andinoh is vetted by our own inspectors and reviewed by our team, so the stay you get is the stay you booked.
            </p>
          </div>
        </div>

        <div className="grid items-start gap-4 md:grid-cols-2 md:gap-6">
          {PILLARS.map((p) => (
            <PillarCard key={p.title} pillar={p} open={open === p.title} onToggle={() => setOpen(open === p.title ? null : p.title)} />
          ))}
        </div>
      </div>
    </section>
  );
}
