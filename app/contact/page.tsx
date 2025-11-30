"use client";

import { FiCircle } from "react-icons/fi";
import PageTransition from "../components/PageTransition";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

export default function Contact() {
  const { primaryColor } = useTheme();

  return (
    <PageTransition>
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-[85vh] bg-white flex items-center pl-app pr-4 pt-28 md:pt-32">
          <div className="max-w-4xl">
            <div className="inline-block relative mb-4 md:mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs md:text-sm px-4.5 py-1.5 rounded-full font-regular border-1" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor, borderColor: primaryColor }}>
                Get in Touch
                <FiCircle className="w-2 h-2 fill-current" />
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 md:mb-8 leading-tight" style={{ color: primaryColor }}>
              We'd Love to
              <br />
              Hear From You
            </h1>
            <p className="text-sm md:text-lg lg:text-lg font-regular text-gray-500 max-w-3xl leading-relaxed mb-6 md:mb-8">
              Have questions about Andinoh? Want to partner with us?<br />Our team is ready to help you discover the future of African travel.
            </p>
          </div>

          <div className="hidden lg:flex flex-1 justify-end items-center">
            <Image
              src="/images/Contact.png"
              alt="Contact illustration"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-app mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Email Support */}
              <div className="p-6 rounded-3xl bg-white border border-gray-200 transition-colors relative overflow-hidden" onMouseEnter={(e) => e.currentTarget.style.borderColor = primaryColor} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}>
                <div className="absolute top-6 right-6">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full opacity-30" style={{ backgroundColor: '#4DB8FF' }}></div>
                    <div className="absolute -inset-2 flex items-center justify-center">
                      <Image
                        src="/images/happy.png"
                        alt="Happy"
                        width={80}
                        height={80}
                        className="object-contain relative z-10"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-base font-medium mb-3" style={{ color: primaryColor }}>
                  Email Support
                </h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  Available Monday to Saturday, 9 AM – 5 PM
                </p>
                <a href="mailto:support@andinoh.com" className="text-sm font-medium hover:underline" style={{ color: primaryColor }}>
                  support@andinoh.com
                </a>
              </div>

              {/* Phone Support */}
              <div className="p-6 rounded-3xl bg-white border border-gray-200 transition-colors" onMouseEnter={(e) => e.currentTarget.style.borderColor = primaryColor} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}>
                <h3 className="text-base font-medium mb-3" style={{ color: primaryColor }}>
                  Phone Support
                </h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  Available Monday to Saturday, 9 AM – 5 PM
                </p>
                <div className="space-y-2">
                  <a href="tel:+2348182367679" className="block text-sm font-medium hover:underline" style={{ color: primaryColor }}>
                    (+234) 818 2367 679
                  </a>
                  <a href="tel:+2347097865346" className="block text-sm font-medium hover:underline" style={{ color: primaryColor }}>
                    (+234) 709 7865 346
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="p-6 rounded-3xl bg-white border border-gray-200 transition-colors" onMouseEnter={(e) => e.currentTarget.style.borderColor = primaryColor} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}>
                <h3 className="text-base font-medium mb-3" style={{ color: primaryColor }}>
                  Office Address
                </h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  Visit us during business hours
                </p>
                <p className="text-sm text-gray-600">
                  Lagos, Nigeria
                </p>
              </div>

              {/* Social Media */}
              <div className="p-6 rounded-3xl bg-white border border-gray-200 transition-colors" onMouseEnter={(e) => e.currentTarget.style.borderColor = primaryColor} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}>
                <h3 className="text-base font-medium mb-3" style={{ color: primaryColor }}>
                  Social Media
                </h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  Connect with us on social platforms
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = primaryColor; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${primaryColor}20`; e.currentTarget.style.color = primaryColor; }}>
                    <span className="font-medium">𝕏</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = primaryColor; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${primaryColor}20`; e.currentTarget.style.color = primaryColor; }}>
                    <span className="font-medium">in</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = primaryColor; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${primaryColor}20`; e.currentTarget.style.color = primaryColor; }}>
                    <span className="font-medium">f</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-app mt-20 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 md:mb-8" style={{ color: primaryColor }}>
              Ready to Get Started?
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our waitlist and be among the first to experience seamless African travel booking
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
