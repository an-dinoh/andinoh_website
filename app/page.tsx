import PageTransition from "./components/PageTransition";
import LargeHeroSection from "./home/components/LargeHeroSection";
import HeroSection from "./home/components/HeroSection";
import FeaturesSection from "./home/components/FeaturesSection";
import FourFeaturesSection from "./home/components/FourFeaturesSection";
import CTASection from "./home/components/CTASection";
import PhoneHeroSection from "./home/components/PhoneHeroSection";
import UniqueSection from "./home/components/UniqueSection";
import FeaturesGridSection from "./home/components/FeaturesGridSection";
import OffersSection from "./home/components/OffersSection";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <LargeHeroSection />
        <HeroSection />
        <FeaturesSection />
        <OffersSection />
        <FeaturesGridSection />
        <PhoneHeroSection />
        <div className="pb-20"></div>

        {/* Coming Soon Section */}
        <section className="w-full bg-gray-100 py-50">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0F75BD] mb-4">
              Coming Soon..
            </h2>
          </div>
        </section>

        {/* <CTASection /> */}
      </div>
    </PageTransition>
  );
}
