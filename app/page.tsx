import PageTransition from "./components/PageTransition";
import LargeHeroSection from "./home/components/LargeHeroSection";
import HeroSection from "./home/components/HeroSection";
import FeaturesSection from "./home/components/FeaturesSection";
import FourFeaturesSection from "./home/components/FourFeaturesSection";
import CTASection from "./home/components/CTASection";
import PhoneHeroSection from "./home/components/PhoneHeroSection";
import UniqueSection from "./home/components/UniqueSection";
import FeaturesGridSection from "./home/components/FeaturesGridSection";
import OfferSection from "./components/OfferSection";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <LargeHeroSection />
        <HeroSection />
         <FeaturesSection />
        {/* <FeaturesSection/> */}

        <OfferSection
          startAlign="left"
          title={<>Discover Hotels<br />Across Africa</>}
          subtitle={<>Browse and book from thousands<br />of verified hotels across the<br />continent. Find your perfect stay,<br />from luxury resorts to local guesthouses.</>}
          circleColor="#7DCCFF"
        />
        <OfferSection
          startAlign="right"
          title={<>Book Flights<br />Effortlessly</>}
          subtitle={<>Compare and book flights<br />from major airlines and local carriers.<br />Get the best deals for your<br />African travel adventures.</>}
          circleColor="#FEEAB3"
        />
        <OfferSection
          startAlign="left"
          title={<>Smart Stays<br />for the Modern<br />Traveler</>}
          subtitle={<>Search verified hotels across Africa<br />and book confidently with insight,<br />clarity, and ease.</>}
          circleColor="#A8E0FF"
        />
        <FeaturesGridSection />
        {/* <PhoneHeroSection /> */}
        {/* <UniqueSection /> */}
        {/* <PhoneHeroSection /> */}
       
        {/* <FourFeaturesSection /> */}
        <PhoneHeroSection />
        <div className="pb-20"></div>
        {/* <CTASection /> */}
      </div>
    </PageTransition>
  );
}
