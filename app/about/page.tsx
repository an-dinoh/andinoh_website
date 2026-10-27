import type { Metadata } from "next";
import CloudImage from "@/app/components/CloudImage";
import { ArrowLink, Eyebrow, Faint, Title, heroDelay, reveal } from "@/app/components/site";
import { PHOTOS } from "@/app/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Andinoh is building Africa’s most trusted platform for hotel bookings and hotel management, starting in Nigeria.",
  alternates: { canonical: "/about" },
};

const APPS = [
  { who: "For guests", name: "Andinoh app", body: "Find verified hotels, book and pay, chat with the hotel and review your stay." },
  { who: "For hotel teams", name: "Andinoh for hotels", body: "Front desk, rooms, housekeeping, staff, payouts and accounting." },
  { who: "For field agents", name: "Andinoh inspector", body: "Visit hotels, work through the checklist and file reports with photos." },
  { who: "Behind the scenes", name: "Andinoh review team", body: "Checks documents and reviews every inspection report." },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-site flex flex-col items-center pt-16 text-center sm:pt-24 lg:pt-32">
        <Eyebrow>About Andinoh</Eyebrow>
        <h1 className="hero-in font-display text-[clamp(3.25rem,8vw,6.5rem)] font-semibold leading-[0.96] tracking-[-0.045em]" style={heroDelay(0)}>
          Trust is <br />
          <span className="text-accent">the product.</span>
        </h1>
        <p className="mt-6 max-w-[640px] text-[17px] leading-normal text-sub sm:mt-8 sm:text-[21px]">
          We’re building Africa’s most trusted platform for hotel bookings and hotel management, starting in Nigeria. Guests get
          hotels they can rely on. Hotels get the tools, and the guests, to grow.
        </p>
        <div className="relative mt-14 h-[320px] w-full overflow-hidden rounded-3xl sm:mt-20 sm:h-[480px] sm:rounded-[32px] lg:mt-[88px] lg:h-[620px]">
          <CloudImage photo={PHOTOS.building} priority sizes="(min-width: 1200px) 1136px, 100vw" />
        </div>
      </section>

      <section className="container-site grid gap-14 py-28 sm:py-40 lg:grid-cols-2 lg:gap-20 lg:py-48">
        <div>
          <Eyebrow>Our vision</Eyebrow>
          <p className="font-display text-[26px] font-medium leading-[1.25] tracking-[-0.02em] sm:text-[34px]">
            To become Africa’s most trusted hotel booking and property management platform,{" "}
            <Faint>connecting guests to authentic stays while helping hotel owners thrive.</Faint>
          </p>
        </div>
        <div>
          <Eyebrow>Our mission</Eyebrow>
          <p className="font-display text-[26px] font-medium leading-[1.25] tracking-[-0.02em] sm:text-[34px]">
            To make hotel stays across Africa simple and safe,{" "}
            <Faint>with one platform for bookings, hotel management, local payments, and hotels we’ve checked ourselves.</Faint>
          </p>
        </div>
      </section>

      <section className="bg-soft py-24 sm:py-32 lg:py-40">
        <div className="container-site">
          <Title>
            Four apps. <Faint>One standard.</Faint>
          </Title>
          <p className="mt-5 max-w-[620px] text-[17px] leading-normal text-sub sm:mt-6 sm:text-[19px]">
            Guests, hotels, inspectors and our review team work on the same platform, so a verified badge means the same thing
            everywhere.
          </p>
          <ul className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-10 lg:mt-[88px] lg:grid-cols-4">
            {APPS.map((a) => (
              <li key={a.name} className="border-t-2 border-accent pt-5 sm:pt-6">
                <p className="mb-2 text-sm font-medium text-accent sm:mb-3">{a.who}</p>
                <p className="mb-2 text-lg font-medium sm:text-xl">{a.name}</p>
                <p className="text-[15px] leading-relaxed text-muted">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site flex flex-col items-center py-28 text-center sm:py-40 lg:py-48">
        <h2 {...reveal()} className="font-display text-[42px] font-semibold leading-none tracking-[-0.045em] sm:text-[64px] lg:text-[80px]">
          Built in Lagos. <br />
          <Faint>For hotels across Africa.</Faint>
        </h2>
        <ArrowLink href="/waitlist" className="mt-8 sm:mt-10">Join the waitlist</ArrowLink>
      </section>
    </>
  );
}
