"use client";

import { useState } from "react";
import WaitlistForm from "../../components/WaitlistForm";

export default function HeroSection() {
  const [theme, setTheme] = useState<"white" | "gradient" | "gradient-circles">("gradient-circles");

  const cycleTheme = () => {
    if (theme === "gradient-circles") setTheme("white");
    else if (theme === "white") setTheme("gradient");
    else setTheme("gradient-circles");
  };

  const getBackgroundClass = () => {
    if (theme === "white") return "bg-white";
    if (theme === "gradient") return "bg-gradient-to-b from-white from-30% via-[#E3F2FD] via-60% to-[#0F75BD]";
    return "bg-gradient-to-b from-white via-[#E3F2FD] to-[#BBDEFB]";
  };

  return (
    <section id="waitlist" className={`relative h-[75vh] md:h-[85vh] ${getBackgroundClass()} flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden`}>

      {/* Theme Toggle Button */}
      <button
        onClick={cycleTheme}
        className="absolute top-4 right-4 z-20 px-4 py-2 bg-white border-2 border-[#0F75BD] text-[#0F75BD] rounded-full text-xs font-medium hover:bg-[#0F75BD] hover:text-white transition-colors"
      >
        {theme === "white" ? "White" : theme === "gradient" ? "Gradient" : "Circles"}
      </button>

      {/* Leaf Shape - Left side (only show on white and gradient themes) */}
      {(theme === "white" || theme === "gradient") && (
        <div className="absolute inset-0 flex items-center justify-start overflow-visible pointer-events-none">
          <svg width="600" height="750" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30 -ml-32" style={{ transform: 'rotate(45deg)' }}>
            <path d="M60 0C50 10 30 30 25 60C20 90 30 120 60 150C90 120 100 90 95 60C90 30 70 10 60 0Z" stroke="#FBB81F" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      )}

      {/* Floating decorative shapes (only show on gradient-circles theme) */}
      {theme === "gradient-circles" && (
        <>
          <div className="absolute top-10 left-10 w-40 h-40 md:w-60 md:h-60 bg-[#0F75BD]/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 md:w-80 md:h-80 bg-[#0F75BD]/5 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/3 right-16 w-24 h-24 md:w-32 md:h-32 bg-[#0F75BD]/15 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-24 left-1/4 w-20 h-20 md:w-28 md:h-28 bg-[#0F75BD]/10 rounded-full animate-bounce-slower"></div>
          <div className="absolute top-1/4 left-1/3 w-16 h-16 md:w-20 md:h-20 bg-[#0F75BD]/8 rounded-full animate-pulse-slow"></div>
        </>
      )}

      {/* Headline & Subheadline */}
      <div className="text-center mb-6 md:mb-10">
       <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 text-[#0F75BD]">
          Be the First to Explore Andinoh
        </h1>
        <p className="text-sm md:text-base text-gray-600 font-regular leading-relaxed drop-shadow-sm max-w-xl mx-auto">
       Be among the first to discover Africa’s hotels, flights, events, and local experiences.   </p>
      </div>

      {/* Hero content card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden p-6 md:p-10 flex flex-col items-center text-center border-2 border-gray-200">

        {/* Badge */}
        <span className="inline-block bg-[#0F75BD]/15 backdrop-blur-sm text-[#0F75BD] text-xs md:text-sm px-3 py-1 rounded-full mb-6 font-semibold animate-pulse">
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
