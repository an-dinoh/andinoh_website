"use client";

import Image from "next/image";
import Link from "next/link";
import { FiCircle } from "react-icons/fi";
import { useTheme } from "@/app/context/ThemeContext";
import AnimatedGlobe from "@/app/components/AnimatedGlobe";

export default function LargeHeroSection() {
  const { primaryColor } = useTheme();

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      const elementPosition = waitlistSection.getBoundingClientRect().top;
      // Use different offset for mobile vs desktop
      const isMobile = window.innerWidth < 1024;
      const offset = isMobile ? 120 : 148;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="min-h-[85vh] bg-white flex flex-col lg:flex-row items-center px-app lg:pl-app lg:pr-4 pt-28 md:pt-32 gap-8">
      {/* Text Content */}
      <div className="flex-1 w-full lg:w-auto text-center lg:text-left max-w-4xl">
        {/* Introducing Badge */}
        <div className="inline-block relative mb-4 md:mb-6">
          <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ background: `linear-gradient(to right, ${primaryColor}, #FBB81F, ${primaryColor})` }}></div>
          <span className="relative inline-flex items-center gap-1.5 bg-white text-xs md:text-sm px-4.5 py-1.5 rounded-full font-regular border-1" style={{ color: primaryColor, borderColor: primaryColor }}>
            Introducing Andinoh
            <FiCircle className="w-2 h-2 fill-current" />
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 md:mb-8 leading-tight" style={{ color: primaryColor }}>
          Connecting Africa's Hospitality Ecosystem
        </h1>
        <p className="text-sm md:text-base lg:text-lg font-regular text-gray-500 max-w-3xl leading-relaxed mb-6 md:mb-8">
          Seamless access to hotels, flights, events, and authentic local experiences.
        </p>
      </div>

      {/* Globe */}
      <div className="flex lg:flex flex-1 justify-center lg:justify-end items-center">
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px] lg:-mr-20">
          <AnimatedGlobe />
        </div>
      </div>

      {/* Button - Only visible on desktop, in text content */}
      <div className="hidden lg:flex absolute bottom-32 left-0 px-app">
        <Link href="/#waitlist" onClick={scrollToWaitlist}>
          <button className="px-6 py-3.5 text-sm font-medium text-white bg-[#FBB81F] rounded-[18px] hover:bg-[#E09A00] transition-colors">
            JOIN THE WAIT LIST
          </button>
        </Link>
      </div>
    </section>
  );
}
