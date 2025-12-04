"use client";

import { FiClock, FiDollarSign, FiHeart, FiMapPin, FiStar } from "react-icons/fi";
import { IconType } from "react-icons";
import { useTheme } from "@/app/context/ThemeContext";

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: FiClock,
    title: "Save Time & Money",
    description:
      "Compare hundreds of options in seconds and get the best deals on hotels, flights, and experiences",
  },
  {
    icon: FiMapPin,
    title: "Discover Hidden Gems",
    description: "Find authentic local stays and experiences beyond the usual tourist spots",
  },
  {
    icon: FiStar,
    title: "Book with Confidence",
    description:
      "Real reviews, verified listings, and secure payments ensure worry-free travel",
  },
  {
    icon: FiHeart,
    title: "Travel Worry-Free",
    description: "24/7 support, instant confirmations, and flexible payment options for peace of mind",
  },
  {
    icon: FiDollarSign,
    title: "Experience Real Africa",
    description:
      "Connect with local hosts, authentic culture, and unforgettable moments across the continent",
  },
];

export default function FeaturesSection() {
  const { primaryColor, cyclePrimaryColor } = useTheme();

  const getColorName = () => {
    if (primaryColor === "#0F75BD") return "Blue";
    if (primaryColor === "#0050C8") return "Dark Blue";
    return "Navy";
  };

  return (
    <section className="py-12 md:py-16 mt-12 md:mt-20 mb-12 md:mb-20 relative">
      {/* Leaf Shapes - Behind everything */}
      <div className="absolute inset-0 flex items-start justify-start overflow-visible pointer-events-none">
        <svg width="600" height="750" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40 -ml-32" style={{ transform: 'rotate(45deg)' }}>
          <path d="M60 0C50 10 30 30 25 60C20 90 30 120 60 150C90 120 100 90 95 60C90 30 70 10 60 0Z" stroke={primaryColor} strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-start justify-end overflow-visible pointer-events-none -mt-44">
        <svg width="600" height="750" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40 -mr-32" style={{ transform: 'rotate(-135deg)' }}>
          <path d="M60 0C50 10 30 30 25 60C20 90 30 120 60 150C90 120 100 90 95 60C90 30 70 10 60 0Z" stroke="#FBB81F" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      {/* Content on top */}
      <div className="max-w-7xl mx-auto px-6 md:px-app relative z-10">
        {/* Theme Toggle Button */}
        {/* <button
          onClick={cyclePrimaryColor}
          className="absolute top-0 right-4 md:right-0 z-20 px-3 py-1.5 md:px-4 md:py-2 bg-white border-2 text-[10px] md:text-xs font-medium rounded-full transition-colors"
          style={{
            borderColor: primaryColor,
            color: primaryColor
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = primaryColor;
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = primaryColor;
          }}
        >
          {getColorName()}
        </button> */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 leading-tight" style={{ color: primaryColor }}>
            Why Choose
            <br />
            Andinoh
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl md:rounded-3xl bg-white border border-gray-200 transition-colors w-full md:w-[calc(33.333%-1.67rem)] lg:w-[calc(33.333%-2.5rem)]"
              style={{
                borderColor: undefined
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = primaryColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
              }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{ backgroundColor: `${primaryColor}20` }}>
                <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: primaryColor }} />
              </div>
              <h3 className="text-sm sm:text-base font-medium mb-2 sm:mb-3" style={{ color: primaryColor }}>
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
