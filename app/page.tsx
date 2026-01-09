"use client";

import Image from "next/image";
import PageTransition from "./components/PageTransition";
import LargeHeroSection from "./home/components/LargeHeroSection";
import HeroSection from "./home/components/HeroSection";
import FeaturesSection from "./home/components/FeaturesSection";
import CTASection from "./home/components/CTASection";
import PhoneHeroSection from "./home/components/PhoneHeroSection";
import UniqueSection from "./home/components/UniqueSection";
import FeaturesGridSection from "./home/components/FeaturesGridSection";
import OffersSection from "./home/components/OffersSection";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { primaryColor } = useTheme();

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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4" style={{ color: primaryColor }}>
              Coming Soon..
            </h2>
          </div>
        </section>
        {/* <section className="w-full bg-gray-100 py-30"> */}
          {/* <div className="text-center flex justify-center px-4">
            <Image
              src="/logos/ANDINOH.svg"
              alt="Andinoh"
              width={2000}
              height={800}
              className="w-full bg-green"
            />
          </div>
        </section> */}

        {/* <CTASection /> */}
      </div>
    </PageTransition>
  );
}
