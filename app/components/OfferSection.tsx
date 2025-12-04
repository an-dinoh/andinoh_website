"use client";

import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

interface OfferSectionProps {
  startAlign?: "left" | "right";
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  image?: string | null;
  circleColor?: string;
}

export default function OfferSection({
  startAlign = "left",
  title,
  subtitle,
  image = null,
  circleColor = "#02A5E6",
}: OfferSectionProps) {
  const { primaryColor } = useTheme();

  const contentSection = (
    <div className="w-full lg:flex-1 text-center lg:text-left mb-8 lg:mb-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 leading-tight" style={{ color: primaryColor }}>
        {title}
      </h2>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );

  const visualSection = (
    <div className={`flex flex-shrink-0 ${startAlign === "left" ? "justify-center lg:justify-end" : "justify-center lg:justify-start"} items-center`}>
      <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 flex-shrink-0">
        {/* Circle background */}
        <div className="absolute inset-0 rounded-full opacity-30" style={{ backgroundColor: circleColor }}></div>

        {/* Image with slight overflow */}
        {image && (
          <div className="absolute inset-0 flex items-center justify-center overflow-visible">
            <div className="relative w-[105%] h-[105%]">
              <Image
                src={image}
                alt="Decorative illustration"
                fill
                className="object-contain relative z-10"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="px-app">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Always text first, then image (vertical) */}
        <div className="flex lg:hidden flex-col items-center gap-12">
          {contentSection}
          {visualSection}
        </div>

        {/* Desktop: Text and image side by side (horizontal) */}
        <div className="hidden lg:flex flex-row items-center gap-12">
          
          {startAlign === "left" ? (
            <>
              {contentSection}
              <div className="flex-1 min-w-[80px]"></div>
              {visualSection}
            </>
          ) : (
            <>
              {visualSection}
              <div className="flex-1 min-w-[80px]"></div>
              {contentSection}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
