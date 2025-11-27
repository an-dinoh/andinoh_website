import PageTransition from "./components/PageTransition";
import LargeHeroSection from "./home/components/LargeHeroSection";
import HeroSection from "./home/components/HeroSection";
import FeaturesSection from "./home/components/FeaturesSection";
import FourFeaturesSection from "./home/components/FourFeaturesSection";
import CTASection from "./home/components/CTASection";
import PhoneHeroSection from "./home/components/PhoneHeroSection";
import UniqueSection from "./home/components/UniqueSection";
import TwoFeaturesSection from "./home/components/TwoFeaturesSection";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <LargeHeroSection />
        <HeroSection />
        <TwoFeaturesSection/>
        <UniqueSection/>
        <PhoneHeroSection />
        <FeaturesSection />
        <FourFeaturesSection />
        <PhoneHeroSection />
        <div className="pb-20"></div>
        {/* <CTASection /> */}
      </div>
    </PageTransition>
  );
}
