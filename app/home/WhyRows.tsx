"use client";

import { useState } from "react";

const PILLARS = [
  {
    title: "Comfort",
    body: "The room you booked is the room you get.",
    detail: "Inspectors check cleanliness, bedding, bathrooms, power and water, and the photos must match the hotel.",
  },
  {
    title: "Security",
    body: "Safe hotels, safe payments, real businesses.",
    detail: "Documents verified, fire safety and security checked on site, payments through Flutterwave.",
  },
  {
    title: "Quality",
    body: "Standards that are checked again, not once.",
    detail: "Re-inspected every year without warning; anything that fails gets a deadline and a follow-up visit.",
  },
  {
    title: "Easy payment",
    body: "One clear price, paid your way.",
    detail: "See the exact total before you book. Pay now, or a deposit now and the rest at the hotel.",
  },
];

/** Why Andinoh: one row open at a time; tap a row to see how. */
export default function WhyRows() {
  const [open, setOpen] = useState(0);

  return (
    <div className="border-b border-line">
      {PILLARS.map((p, i) => {
        const isOpen = open === i;
        const id = `why-${i}`;
        return (
          <div key={p.title} className="border-t border-line">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={id}
                className="flex w-full items-center gap-4 rounded-md py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 sm:gap-6 sm:py-7"
              >
                <span className="tabular w-6 shrink-0 text-[13px] text-muted sm:w-7 sm:text-sm">0{i + 1}</span>
                <span className="flex-1 font-display text-[22px] font-medium tracking-[-0.02em] sm:text-[30px]">{p.title}</span>
                <span aria-hidden className={`flex h-7 w-7 shrink-0 items-center justify-center text-2xl font-light text-muted transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
            </h3>
            <div id={id} className="expand" data-open={isOpen}>
              <div>
                <div className="pb-7 pl-10 pr-2 sm:pb-8 sm:pl-[52px] sm:pr-[52px]">
                  <p className="text-base leading-relaxed text-body sm:text-[17px]">{p.body}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">{p.detail}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
