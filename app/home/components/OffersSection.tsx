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
          image="/images/search-engines-cuate.png"
        />
      </div>
      <div>
        <OfferSection
          startAlign="right"
          title="Streamlined Hotel Management"
          subtitle="Empower your hotel business with automated booking, guest relations, staff management, and real-time revenue analytics. Built to scale your hospitality operations."
          circleColor="#FDD87F"
          image="/images/hotel-booking-cuate.png"
        />
      </div>
    </section>
  );
}
