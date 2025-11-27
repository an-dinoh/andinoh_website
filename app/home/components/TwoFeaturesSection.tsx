import Image from "next/image";

export default function TwoFeaturesSection() {
  return (
    <section className="bg-white py-16 px-app">
      <div className="max-w-7xl mx-auto">
        {/* Section 1 */}
        <div className="flex items-center justify-between gap-12 py-12 mb-12">
          <div className="max-w-4xl flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-4 leading-tight text-[#0F75BD]">
              Discover Hotels
              <br />
              Across Africa
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-medium text-[#424242] max-w-3xl leading-relaxed">
              Browse and book from thousands of verified hotels across the
              continent. Find your perfect stay, from luxury resorts to local
              guesthouses.
            </p>
          </div>

          <div className="hidden lg:flex flex-1 justify-end items-center">
            <Image
              src="/images/leafs.png"
              alt="Decorative leaves"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex items-center justify-between gap-12 py-12 mb-12">
          <div className="hidden lg:flex flex-1 justify-start items-center">
            <Image
              src="/images/leafs.png"
              alt="Decorative leaves"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="max-w-4xl flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-4 leading-tight text-[#0F75BD]">
              Book Flights
              <br />
              Effortlessly
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-medium text-[#424242] max-w-3xl leading-relaxed">
              Compare and book flights from major<br/>airlines and local carriers.
              Get the best deals<br/>for your African travel adventures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
