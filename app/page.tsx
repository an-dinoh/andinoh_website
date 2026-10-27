import CloudImage, { HeroPicture } from "./components/CloudImage";
import Globe from "./components/globe/Globe";
import LaunchProgress from "./components/LaunchProgress";
import { ArrowLink, Eyebrow, Faint, PillLink, Statement, Steps, Title, heroDelay, reveal } from "./components/site";
import WaitlistForm from "./components/WaitlistForm";
import { PHOTOS, WAITLIST_OFFER } from "./content/site";
import WhyRows from "./home/WhyRows";

const VETTING = [
  { title: "Documents checked", body: "Registration, licences and tax details, verified." },
  { title: "Inspected in person", body: "An independent inspector visits with a 10-part checklist." },
  { title: "Every report reviewed", body: "Nothing is approved automatically." },
  { title: "Checked again yearly", body: "Re-inspected every year, without warning." },
];

const GALLERY = [
  { label: "Rooms", photo: PHOTOS.roomBlue },
  { label: "Lobbies", photo: PHOTOS.lobby },
  { label: "Pools and gardens", photo: PHOTOS.poolPalms },
];

export default function Home() {
  return (
    <>
      {/* Hero: the globe rises behind the headline and sinks behind the photo. Pieces enter in sequence. */}
      <section className="container-site flex flex-col items-center pt-16 text-center sm:pt-24 lg:pt-32">
        <div className="relative z-10 flex w-full flex-col items-center">
          <p className="hero-in mb-5 inline-flex items-center gap-2.5 text-[13px] text-sub sm:mb-7 sm:text-[15px]" style={heroDelay(0)}>
            <span aria-hidden className="h-2 w-2 rounded-full bg-gold" />
            Coming soon · {WAITLIST_OFFER.short}
          </p>
          <h1 className="font-display text-[clamp(3.25rem,8.6vw,7rem)] font-semibold leading-[0.96] tracking-[-0.045em]">
            <span className="hero-in inline-block" style={heroDelay(1)}>Book a trusted</span> <br className="hidden sm:block" />
            <span className="hero-in inline-block text-accent" style={heroDelay(2)}>hotel stay.</span>
          </h1>
          {/* A soft halo in the page colour keeps the line readable over the globe's dots. */}
          <p className="hero-in mt-6 max-w-[560px] text-[17px] leading-normal text-sub [text-shadow:0_0_14px_var(--bg),0_0_6px_var(--bg),0_0_2px_var(--bg)] sm:mt-9 sm:text-[21px]" style={heroDelay(3)}>
            Every hotel on Andinoh is inspected in person before you can book it.
          </p>
          <div className="hero-in mt-8 flex w-full flex-col items-center gap-5 sm:mt-11 sm:w-auto sm:flex-row sm:gap-7" style={heroDelay(4)}>
            <PillLink href="/#waitlist" className="w-full sm:w-auto">Join the waitlist</PillLink>
            <ArrowLink href="/#vetting" tone="ink">How we vet hotels</ArrowLink>
          </div>
        </div>

        <div className="relative mt-14 w-full sm:mt-20 lg:mt-24">
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 z-0 w-[clamp(540px,96vw,1180px)] -translate-x-1/2 -translate-y-1/2">
            <div className="globe-in">
              <Globe view="rise" className="w-full" />
            </div>
          </div>
          <div className="relative z-10 h-[440px] overflow-hidden rounded-3xl sm:h-[520px] sm:rounded-[32px] lg:h-[680px]">
            <HeroPicture desktop={PHOTOS.poolDeck} mobile={PHOTOS.roomPortrait} alt="A calm, sunlit hotel stay" className="object-[center_70%] sm:object-[center_60%]" />
          </div>
        </div>
      </section>

      <Statement>
        We visit every hotel. <Faint>We check what matters to you. Then we check again, every year.</Faint>
      </Statement>

      {/* Why Andinoh */}
      <section id="why" className="container-site grid gap-10 pb-28 sm:pb-40 lg:grid-cols-2 lg:gap-20 lg:pb-48">
        <div>
          <Eyebrow>Why Andinoh</Eyebrow>
          <Title>
            Comfort, security <br className="hidden lg:block" />
            and quality. <br className="hidden lg:block" />
            <Faint>Guaranteed.</Faint>
          </Title>
        </div>
        <WhyRows />
      </section>

      {/* How we vet */}
      <section id="vetting" className="bg-soft py-24 sm:py-32 lg:py-40">
        <div className="container-site">
          <Title className="max-w-[760px]">No hotel goes live until we’ve been there.</Title>
          <div className="mt-12 sm:mt-16 lg:mt-[88px]">
            <Steps items={VETTING} />
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="pt-28 sm:pt-40 lg:pt-48">
        <div className="container-site">
          <Title className="mb-9 sm:mb-16">
            Stays worth the trip. <br className="hidden sm:block" />
            <Faint>Every one checked before you book.</Faint>
          </Title>
        </div>
        {/* A swipeable strip on phones, a grid from tablets up. */}
        <ul className="no-scrollbar flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 sm:mx-auto sm:grid sm:max-w-[1200px] sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-6 lg:px-8">
          {GALLERY.map((g) => (
            <li key={g.label} className="w-[78%] shrink-0 snap-start sm:w-auto">
              <figure>
                <div className="relative h-[360px] overflow-hidden rounded-[20px] sm:h-[320px] sm:rounded-3xl lg:h-[480px]">
                  <CloudImage photo={g.photo} sizes="(min-width: 1200px) 380px, (min-width: 640px) 33vw, 78vw" />
                </div>
                <figcaption className="mt-3 text-sm text-muted sm:mt-4 sm:text-[15px]">{g.label}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      {/* For hotels */}
      <section className="container-site grid items-center gap-10 py-28 sm:py-40 lg:grid-cols-2 lg:gap-20 lg:py-48">
        <div>
          <Eyebrow>For hotels</Eyebrow>
          <Title>
            Get verified. <br />
            Get booked.
          </Title>
          <p className="mb-7 mt-5 max-w-[440px] text-[17px] leading-relaxed text-sub sm:mb-9 sm:mt-7 sm:text-[19px]">
            Bookings, rooms, staff and payouts, run from one app made for hotels in Nigeria.
          </p>
          <ArrowLink href="/hotels">Andinoh for hotels</ArrowLink>
        </div>
        <div className="relative h-[260px] overflow-hidden rounded-[20px] sm:h-[420px] sm:rounded-[28px] lg:h-[520px]">
          <CloudImage photo={PHOTOS.frontDesk} sizes="(min-width: 1024px) 560px, 100vw" />
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="border-t border-hair py-24 sm:py-36 lg:py-44">
        <div className="container-site flex flex-col items-center text-center">
          <h2 {...reveal()} className="font-display text-[46px] font-semibold leading-none tracking-[-0.045em] sm:text-[64px] lg:text-[80px]">
            Be first through <br className="hidden sm:block" />
            the door.
          </h2>
          <p className="mt-5 text-base text-sub sm:mt-7 sm:text-[19px]">Join the waitlist and get {WAITLIST_OFFER.short}.</p>
          <div className="mt-9 w-full max-w-[420px] sm:mt-12">
            <LaunchProgress />
          </div>
          <div className="mt-10 w-full sm:mt-14">
            <WaitlistForm variant="inline" />
          </div>
        </div>
      </section>
    </>
  );
}
