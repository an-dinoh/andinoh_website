"use client";

import { FiCircle } from "react-icons/fi";
import PageTransition from "../components/PageTransition";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

export default function About() {
  const { primaryColor } = useTheme();

  return (
    <PageTransition>
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-[85vh] bg-white flex flex-col lg:flex-row items-center px-app lg:pl-app lg:pr-4 pt-28 md:pt-32 gap-8">
          <div className="max-w-4xl text-center lg:text-left w-full lg:w-auto">
            <div className="inline-block relative mb-4 md:mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs md:text-sm px-4.5 py-1.5 rounded-full font-regular border-1" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor, borderColor: primaryColor }}>
                Our Andinoh
                <FiCircle className="w-2 h-2 fill-current" />
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 md:mb-8 leading-tight" style={{ color: primaryColor }}>
             About Andinoh
            </h1>
            <p className="text-sm md:text-base lg:text-lg font-regular text-gray-500 max-w-3xl leading-relaxed mb-6 md:mb-8">
              We're building Africa's most trusted platform for hotels, flights, events, and authentic local experiences, empowering travelers and local businesses across the continent.
            </p>
          </div>

          <div className="flex lg:flex flex-1 justify-center lg:justify-end items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
              <Image
                src="/images/face-cuate.png"
                alt="About Andinoh"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="bg-white py-16 md:py-20">
          {/* Vision */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 px-app mb-32 md:mb-40">
            <div className="flex-1 text-center lg:text-left w-full lg:w-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 leading-tight" style={{ color: primaryColor }}>
                Our Vision
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                To become Africa's most trusted and comprehensive hotel, event, and flight booking platform by connecting the world to the continent's authentic destinations while empowering local travel businesses to thrive in the digital economy.
              </p>
            </div>
            <div className="hidden lg:flex flex-1"></div>

            
            <div className="flex lg:flex flex-shrink-0 justify-center">
              <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                <div className="absolute inset-0 rounded-full opacity-30" style={{ backgroundColor: '#80D4FF' }}></div>
                <div className="absolute -inset-2 flex items-center justify-center">
                  <Image
                    src="/images/online-article-cuate.png"
                    alt="Hotel Booking - Illustration by Storyset"
                    width={280}
                    height={280}
                    className="object-contain relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 px-app">
            <div className="flex-1 text-center lg:text-left w-full lg:w-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 leading-tight" style={{ color: primaryColor }}>
                Our Mission
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                To simplify and enhance travel experiences across Africa by providing a seamless, mobile-first platform that integrates accommodations, flights, events, and authentic cultural experiences, supported by localized payment solutions and verified, reliable services.
              </p>
            </div>
            <div className="hidden lg:flex flex-1"></div>
            <div className="flex lg:flex flex-shrink-0 justify-center">
              <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                <div className="absolute inset-0 rounded-full opacity-30" style={{ backgroundColor: '#FDD87F' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/hotel-booking-cuate.png"
                    alt="Hotel Booking - Illustration by Storyset"
                    width={280}
                    height={280}
                    className="object-contain relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-16 md:py-20 px-app mt-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 leading-tight px-4" style={{ color: primaryColor }}>
                Why We're Different
              </h2>
              <p className="text-sm md:text-base text-gray-600 font-regular px-4">
                Built for Africa, by Africans
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="p-6 rounded-3xl bg-white border border-gray-200 transition-colors" onMouseEnter={(e) => e.currentTarget.style.borderColor = primaryColor} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}>
                <h3 className="text-base font-medium mb-3" style={{ color: primaryColor }}>
                  Africa-First Approach
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Comprehensive coverage including rural and underserved destinations that global platforms overlook
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-gray-200 transition-colors" onMouseEnter={(e) => e.currentTarget.style.borderColor = primaryColor} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}>
                <h3 className="text-base font-medium mb-3" style={{ color: primaryColor }}>
                  Localized Payments
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Seamless integration with popular African mobile money services and secure international payment options for convenient transactions
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-white border border-gray-200 transition-colors" onMouseEnter={(e) => e.currentTarget.style.borderColor = primaryColor} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}>
                <h3 className="text-base font-medium mb-3" style={{ color: primaryColor }}>
                  Authentic Experiences
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Curated local tours and cultural experiences that showcase the real Africa beyond tourist spots
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-app mt-20 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 md:mb-8 px-4" style={{ color: primaryColor }}>
              Join Us on This Journey
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Be among the first to experience the future of African travel when we launch
            </p>
            <Link href="/#waitlist">
              <button className="px-5.5 py-3.5 text-sm font-medium text-white bg-[#FBB81F] rounded-[18px] hover:bg-[#E09A00] transition-colors">
                Join the Waitlist
              </button>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
