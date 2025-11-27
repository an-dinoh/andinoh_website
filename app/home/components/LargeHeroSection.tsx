import Image from "next/image";

export default function LargeHeroSection() {
  return (
    <section className="min-h-[85vh] md:min-h-[85vh] bg-white flex items-center px-app pt-28 md:pt-32">
      <div className="max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 leading-tight text-[#0F75BD]">
          Connecting Africa's
          <br />
          Hospitality Ecosystem
        </h1>
        <p className="text-sm md:text-lg lg:text-lg font-medium text-[#424242] max-w-3xl leading-relaxed mb-6 md:mb-8">
          Seamless access to hotels, flights, events,
          <br />
          and authentic local experiences.
        </p>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[#0F75BD] text-lg font-semibold tracking-wide">
              Coming Soon
            </span>
          </div>

          <p className="text-base text-[#424242] leading-relaxed">
            Be the first to join our waitlist for early access
          </p>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 justify-end items-center">
        <Image
          src="/images/leafs.png"
          alt="Decorative leaves"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </section>
  );
}
