"use client";

import { useState } from "react";
import WaitlistForm from "../../components/WaitlistForm";
import { useTheme } from "@/app/context/ThemeContext";

export default function HeroSection() {
  const { primaryColor } = useTheme();
  const [theme, setTheme] = useState<"white" | "gradient-circles">("gradient-circles");

  const cycleTheme = () => {
    if (theme === "gradient-circles") setTheme("white");
    else setTheme("gradient-circles");
  };

  const getBackgroundStyle = () => {
    if (theme === "white") return {};
    const lightColor = `${primaryColor}20`;
    const mediumColor = `${primaryColor}40`;
    return { background: `linear-gradient(to bottom, white, ${lightColor}, ${mediumColor})` };
  };

  const getBackgroundClass = () => {
    if (theme === "white") return "bg-white";
    return "";
  };

  return (
    <section id="waitlist" className={`relative min-h-[85vh] h-auto md:h-[85vh] ${getBackgroundClass()} flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-12 md:py-0 overflow-hidden mt-12 md:mt-16 lg:mt-20 landscape:max-md:min-h-[100vh] landscape:max-md:py-8`} style={getBackgroundStyle()}>

      {/* Theme Toggle Button */}
      <button
        onClick={cycleTheme}
        className="absolute top-4 right-4 z-20 px-3 py-1.5 md:px-4 md:py-2 bg-white border-2 rounded-full text-[10px] md:text-xs font-medium transition-colors"
        style={{ borderColor: primaryColor, color: primaryColor }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = primaryColor;
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.color = primaryColor;
        }}
      >
        {theme === "white" ? "White" : "Circles"}
      </button>

      {/* Leaf Shape - Left side (only show on white theme) */}
      {theme === "white" && (
        <div className="absolute inset-0 flex items-center justify-start overflow-visible pointer-events-none">
          <svg width="600" height="750" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30 -ml-32" style={{ transform: 'rotate(45deg)' }}>
            <path d="M60 0C50 10 30 30 25 60C20 90 30 120 60 150C90 120 100 90 95 60C90 30 70 10 60 0Z" stroke="#FBB81F" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      )}

      {/* Floating decorative shapes (only show on gradient-circles theme) */}
      {theme === "gradient-circles" && (
        <>
          <div className="absolute top-10 left-10 w-40 h-40 md:w-60 md:h-60 rounded-full animate-spin-slow" style={{ backgroundColor: `${primaryColor}10` }}></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 md:w-80 md:h-80 rounded-full animate-ping-slow" style={{ backgroundColor: `${primaryColor}05` }}></div>
          <div className="absolute top-1/3 right-16 w-24 h-24 md:w-32 md:h-32 rounded-full animate-bounce-slow" style={{ backgroundColor: `${primaryColor}15` }}></div>
          <div className="absolute bottom-24 left-1/4 w-20 h-20 md:w-28 md:h-28 rounded-full animate-bounce-slower" style={{ backgroundColor: `${primaryColor}10` }}></div>
          <div className="absolute top-1/4 left-1/3 w-16 h-16 md:w-20 md:h-20 rounded-full animate-pulse-slow" style={{ backgroundColor: `${primaryColor}08` }}></div>
        </>
      )}

      {/* Headline & Subheadline */}
      <div className="text-center mb-6 md:mb-10 landscape:max-md:mb-4">
       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 md:mb-6 landscape:max-md:text-xl landscape:max-md:mb-2" style={{ color: primaryColor }}>
          Be the First to Explore Andinoh
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 font-regular leading-relaxed drop-shadow-sm max-w-xl mx-auto px-2 landscape:max-md:text-xs landscape:max-md:mb-2">
       Be among the first to discover Africa's hotels, flights, events, and local experiences.   </p>
      </div>

      {/* Hero content card */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl md:rounded-3xl overflow-hidden p-4 sm:p-6 md:p-10 flex flex-col items-center text-center border-2 border-gray-200 landscape:max-md:p-4 landscape:max-md:max-w-3xl">

        {/* Badge */}
        <span className="inline-block bg-[#0F75BD]/15 backdrop-blur-sm text-[#0F75BD] text-[10px] sm:text-xs md:text-sm px-2.5 sm:px-3 py-1 rounded-full mb-4 md:mb-6 font-semibold animate-pulse landscape:max-md:text-[10px] landscape:max-md:px-2.5 landscape:max-md:py-0.5 landscape:max-md:mb-3">
          ✨ COMING SOON
        </span>

        {/* Waitlist Form */}
        <div className="w-full">
          <WaitlistForm />
        </div>

        {/* Decorative floating stars */}
        <div className="absolute top-8 left-1/4 text-[#0F75BD]/25 text-2xl animate-pulse-slow">
          ✦
        </div>
        <div className="absolute bottom-12 right-1/3 text-[#FBB81F]/30 text-3xl animate-pulse-slower">
          ✦
        </div>
      </div>
    </section>
  );
}
