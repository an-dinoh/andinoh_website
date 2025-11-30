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
      const offsetPosition = elementPosition + window.pageYOffset - 148;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="min-h-[75vh] md:min-h-[80vh] bg-white flex items-center pl-app pr-4 pt-16 md:pt-20 mb-12">
      <div className="max-w-4xl">
        {/* Introducing Badge */}
        <div className="inline-block relative mb-4 md:mb-6">
          <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ background: `linear-gradient(to right, ${primaryColor}, #FBB81F, ${primaryColor})` }}></div>
          <span className="relative inline-flex items-center gap-1.5 bg-white text-xs md:text-sm px-4.5 py-1.5 rounded-full font-regular border-1" style={{ color: primaryColor, borderColor: primaryColor }}>
            Introducing Andinoh
            <FiCircle className="w-2 h-2 fill-current" />
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 md:mb-8 leading-tight" style={{ color: primaryColor }}>
          Connecting Africa's
          <br />
          Hospitality Ecosystem
        </h1>
        <p className="text-sm md:text-lg lg:text-lg font-regular text-gray-500 max-w-3xl leading-relaxed mb-6 md:mb-8">
          Seamless access to hotels, flights, events,
          <br />
          and authentic local experiences.
        </p>

        <div className="flex flex-col items-start gap-4">
          <Link href="/#waitlist" onClick={scrollToWaitlist}>
            <button className="px-5.5 py-3.5 text-sm font-medium text-white bg-[#FBB81F] rounded-[18px] hover:bg-[#E09A00] transition-colors">
              {" "}
              JOIN THE WAIT LIST
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 justify-end items-center">
        <AnimatedGlobe />
      </div>
    </section>
  );
}
