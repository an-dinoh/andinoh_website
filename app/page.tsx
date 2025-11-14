import PageTransition from "./components/PageTransition";
import HeroSection from "./home/components/HeroSection";
import FeaturesSection from "./home/components/FeaturesSection";
import CTASection from "./home/components/CTASection";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </div>
    </PageTransition>
  );
}
