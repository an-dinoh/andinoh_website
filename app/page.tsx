import PageTransition from "./components/PageTransition";
import HeroSection from "./home/components/HeroSection";
import FeaturesSection from "./home/components/FeaturesSection";
import CTASection from "./home/components/CTASection";
import PhoneHeroSection from "./home/components/PhoneHeroSection";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <HeroSection />
        <PhoneHeroSection />
        <FeaturesSection />
        <CTASection />
      </div>
    </PageTransition>
  );
}
