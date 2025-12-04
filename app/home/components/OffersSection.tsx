import OfferSection from "@/app/components/OfferSection";

export default function OffersSection() {
  return (
    <section className="bg-white py-16 md:py-20 px-6 md:px-app">
      <div className="mb-32 md:mb-40">
        <OfferSection
          startAlign="left"
          title="Hotels & Stays Across Africa"
          subtitle="Browse and book from thousands of verified hotels, guesthouses, and lodges across the continent. From luxury resorts to cozy local stays."
          circleColor="#4DB8FF"
          image="/images/hotel-booking.png"
        />
      </div>
      <div className="mb-32 md:mb-40">
        <OfferSection
          startAlign="right"
          title="Flight Booking Made Easy"
          subtitle="Compare and book flights from major airlines and local carriers. Get the best deals for your African travel adventures in just a few clicks."
          circleColor="#FDD87F"
          image="/images/flight.png"
        />
      </div>
      <div>
        <OfferSection
          startAlign="left"
          title="Events & Experiences"
          subtitle="Book event venues, schedule conferences, and discover authentic local tours. Experience Africa's culture, cuisine, and unforgettable moments."
          circleColor="#80D4FF"
          image="/images/travel-packing.png"
        />
      </div>
    </section>
  );
}
