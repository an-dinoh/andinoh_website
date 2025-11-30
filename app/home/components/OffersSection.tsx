import OfferSection from "@/app/components/OfferSection";

export default function OffersSection() {
  return (
    <>
      <OfferSection
        startAlign="left"
        title={
          <>
            Hotels & Stays
            <br />
            Across Africa
          </>
        }
        subtitle={
          <>
            Browse and book from thousands
            <br />
            of verified hotels, guesthouses, and lodges
            <br />
            across the continent. From luxury resorts
            <br />
            to cozy local stays.
          </>
        }
        circleColor="#4DB8FF"
      />
      <OfferSection
        startAlign="right"
        title={
          <>
            Flight Booking
            <br />
            Made Easy
          </>
        }
        subtitle={
          <>
            Compare and book flights from major
            <br />
            airlines and local carriers. Get the best
            <br />
            deals for your African travel adventures
            <br />
            in just a few clicks.
          </>
        }
        circleColor="#FDD87F"
      />
      <OfferSection
        startAlign="left"
        title={
          <>
            Events &
            <br />
            Experiences
          </>
        }
        subtitle={
          <>
            Book event venues, schedule conferences,
            <br />
            and discover authentic local tours.
            <br />
            Experience Africa's culture, cuisine,
            <br />
            and unforgettable moments.
          </>
        }
        circleColor="#80D4FF"
      />
    </>
  );
}
