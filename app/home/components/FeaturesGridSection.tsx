"use client";

import {
  FiSearch,
  FiCalendar,
  FiMap,
  FiCreditCard,
  FiShield,
  FiGlobe,
  FiSmartphone,
  FiStar,
  FiUsers,
  FiTrendingUp,
  FiDollarSign,
  FiAward,
  FiMapPin,
  FiPhone,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";
import { MdHotel, MdFlight, MdEvent, MdLocalOffer } from "react-icons/md";
import { useTheme } from "@/app/context/ThemeContext";

const features = [
  // Row 1 - Empty top row
  { icon: null, name: "", size: "small", empty: true },
  { icon: null, name: "", size: "small", empty: true },
  { icon: null, name: "", size: "small", empty: true },
  { icon: null, name: "", size: "small", empty: true },
  { icon: null, name: "", size: "small", empty: true },
  { icon: null, name: "", size: "small", empty: true },
  { icon: null, name: "", size: "small", empty: true },
  { icon: null, name: "", size: "small", empty: true },

  // Row 2
  { icon: FiSearch, name: "Smart Search", size: "small" },
  { icon: FiMap, name: "Africa Coverage", size: "small" },
  { icon: FiCreditCard, name: "Mobile Money", size: "small" },
  { icon: FiShield, name: "Verified Listings", size: "small" },
  { icon: FiGlobe, name: "Multi-language", size: "small" },
  { icon: FiSmartphone, name: "Mobile-First", size: "small" },
  { icon: FiStar, name: "Reviews", size: "small" },
  { icon: FiUsers, name: "24/7 Support", size: "small" },

  // Row 3
  { icon: FiMapPin, name: "Local Experiences", size: "small" },
  { icon: FiTrendingUp, name: "Best Prices", size: "small" },
  { icon: FiDollarSign, name: "Multi-Currency", size: "small" },
  { icon: FiAward, name: "Trusted Partners", size: "small" },
  { icon: FiPhone, name: "Instant Booking", size: "small" },
  { icon: FiMail, name: "Email Confirmation", size: "small" },
  { icon: FiMessageCircle, name: "Live Chat", size: "small" },
  { icon: MdLocalOffer, name: "Special Deals", size: "small" },

  // Row 4 - Contains large boxes
  { icon: FiCalendar, name: "Easy Planning", size: "small" },
  { icon: FiSearch, name: "Discover", size: "small" },
  { icon: MdHotel, name: "Hotels & Stays", size: "large" },
  { icon: MdFlight, name: "Flight Booking", size: "large" },
  { icon: FiMapPin, name: "Destinations", size: "small" },
  { icon: FiShield, name: "Secure Payment", size: "small" },

  // Row 5
  { icon: FiUsers, name: "Group Bookings", size: "small" },
  { icon: FiStar, name: "Top Rated", size: "small" },
  { icon: MdEvent, name: "Events & Venues", size: "large" },
  { icon: FiMap, name: "Local Tours", size: "large" },
  { icon: FiCreditCard, name: "Flexible Payment", size: "small" },
  { icon: FiGlobe, name: "Authentic Africa", size: "small" },

  // Row 6
  { icon: FiSmartphone, name: "Mobile App", size: "small" },
  { icon: FiTrendingUp, name: "Price Match", size: "small" },
  { icon: FiDollarSign, name: "No Hidden Fees", size: "small" },
  { icon: FiAward, name: "Quality Guarantee", size: "small" },
  { icon: FiPhone, name: "Quick Response", size: "small" },
  { icon: FiMail, name: "Updates", size: "small" },
  { icon: FiMessageCircle, name: "Help Center", size: "small" },
  { icon: MdLocalOffer, name: "Loyalty Rewards", size: "small" },

  // Row 7 - Empty bottom row
  { icon: null, name: "", size: "small", empty: true },
  { icon: null, name: "", size: "small", empty: true },
  { icon: null, name: "", size: "small", empty: true },
  { icon: null, name: "", size: "small", empty: true },
  { icon: null, name: "", size: "small", empty: true },
  { icon: null, name: "", size: "small", empty: true },
  { icon: null, name: "", size: "small", empty: true },
  { icon: null, name: "", size: "small", empty: true },
];

export default function FeaturesGridSection() {
  const { primaryColor } = useTheme();

  const getOpacity = (col: number, totalCols: number) => {
    if (col === 0 || col === totalCols - 1) return "opacity-30";
    if (col === 1 || col === totalCols - 2) return "opacity-60";
    return "opacity-100";
  };

  return (
    <section className="bg-white py-8 md:py-12 overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-app">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-4 md:mb-6 leading-tight" style={{ color: primaryColor }}>
            Your gateway to authentic African travel.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
            One platform for hotels, flights, events, and authentic African experiences.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-0 border-t border-b border-gray-200">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "large";
            const col = index % 8;
            const opacity = getOpacity(col, 8);
            const isEmpty = feature.empty;

            // Hide items on mobile: only show rows 3-5 (indices 16-47)
            const hideOnMobile = index < 16 || index >= 48;

            return (
              <div
                key={index}
                className={`relative flex flex-col items-center justify-center border-[0.5px] border-gray-200 transition-all duration-300 aspect-square ${opacity}
                  ${isLarge ? "col-span-2 row-span-2" : "col-span-1"}
                  ${hideOnMobile ? "hidden lg:flex" : ""}
                  ${
                    !isEmpty
                      ? "cursor-pointer group hover:border-2 hover:shadow-lg hover:z-10 hover:!opacity-100"
                      : ""
                  }`}
                style={{ minHeight: "80px" }}
                onMouseEnter={(e) => {
                  if (!isEmpty) {
                    e.currentTarget.style.borderColor = primaryColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isEmpty) {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                  }
                }}
              >
                {!isEmpty && Icon && (
                  <>
                    <Icon
                      className={`${
                        isLarge
                          ? "w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] lg:w-[48px] lg:h-[48px]"
                          : "w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] md:w-[22px] md:h-[22px] lg:w-[28px] lg:h-[28px]"
                      } mb-2 sm:mb-3 md:mb-4 text-gray-700 transition-colors duration-300`}
                      style={{
                        color: undefined
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = primaryColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#374151';
                      }}
                    />

                    <span
                      className={`${
                        isLarge ? "text-sm md:text-base lg:text-xl" : "text-[10px] sm:text-xs md:text-sm"
                      } ${
                        isLarge ? "font-medium" : "font-regular"
                      } text-center text-gray-800 transition-colors duration-300 px-2 sm:px-3`}
                      style={{
                        color: undefined
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = primaryColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#1F2937';
                      }}
                    >
                      {feature.name}
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Edge fade overlays - Horizontal */}
        <div className="absolute top-0 left-0 bottom-0 w-32 md:w-40 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-32 md:w-40 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        {/* Edge fade overlays - Vertical */}
        <div className="absolute top-0 left-0 right-0 h-34 md:h-60 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-34 md:h-60 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
