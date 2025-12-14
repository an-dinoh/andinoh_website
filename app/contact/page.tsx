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
        <section className="min-h-[85vh] bg-white flex flex-col lg:flex-row items-center px-app lg:pl-app lg:pr-4 pt-28 md:pt-32 gap-8">
          <div className="max-w-4xl text-center lg:text-left w-full lg:w-auto">
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

          <div className="flex lg:flex flex-1 justify-center lg:justify-end items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-[600px] xl:h-[600px]">
              <Image
                src="/images/contact.png"
                alt="Contact illustration"
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-app mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Email Support */}
              <div className="p-6 rounded-3xl bg-white border border-gray-200 transition-colors relative overflow-hidden" onMouseEnter={(e) => e.currentTarget.style.borderColor = primaryColor} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}>
                <div className="flex flex-col items-start text-left lg:block">
                  <div className="relative mb-4 lg:m-4 md:m-3 lg:absolute lg:top-0 lg:right-0 lg:mb-0">
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
                    Available 24/7
                  </p>
                  <a href="mailto:support@andinoh.com" className="text-sm font-medium hover:underline" style={{ color: primaryColor }}>
                    support@andinoh.com
                  </a>
                </div>
              </div>

              {/* Phone Support */}
              <div className="p-6 rounded-3xl bg-white border border-gray-200 transition-colors" onMouseEnter={(e) => e.currentTarget.style.borderColor = primaryColor} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}>
                <h3 className="text-base font-medium mb-3" style={{ color: primaryColor }}>
                  Phone Support
                </h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  Available 24/7
                </p>
                <div className="space-y-2">
                  <a href="https://wa.me/447400730594" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium hover:underline" style={{ color: primaryColor }}>
                    +44 7400730594 (WhatsApp only)
                  </a>
                  <a href="tel:+2347079726698" className="block text-sm font-medium hover:underline" style={{ color: primaryColor }}>
                    +234 7079726698
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
                <div className="flex gap-3 flex-wrap">
                  <a href="https://x.com/Andinoh_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group" style={{ backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = primaryColor; const img = e.currentTarget.querySelector('img'); if (img) img.style.filter = 'brightness(0) invert(1)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; const img = e.currentTarget.querySelector('img'); if (img) img.style.filter = `brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(2000%) hue-rotate(180deg)`; }}>
                    <Image src="/icons/twitter.svg" alt="X/Twitter" width={12} height={12} className="transition-all object-contain" style={{ filter: `brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(2000%) hue-rotate(180deg)`, width: '12px', height: '12px' }} />
                  </a>
                  <a href="https://www.linkedin.com/company/109459638/admin/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group" style={{ backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = primaryColor; const img = e.currentTarget.querySelector('img'); if (img) img.style.filter = 'brightness(0) invert(1)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; const img = e.currentTarget.querySelector('img'); if (img) img.style.filter = `brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(2000%) hue-rotate(180deg)`; }}>
                    <Image src="/icons/linkedin.svg" alt="LinkedIn" width={12} height={12} className="transition-all object-contain" style={{ filter: `brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(2000%) hue-rotate(180deg)`, width: '12px', height: '12px' }} />
                  </a>
                  <a href="https://www.facebook.com/people/Andinoh/61582401149207/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group" style={{ backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = primaryColor; const img = e.currentTarget.querySelector('img'); if (img) img.style.filter = 'brightness(0) invert(1)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; const img = e.currentTarget.querySelector('img'); if (img) img.style.filter = `brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(2000%) hue-rotate(180deg)`; }}>
                    <Image src="/icons/facebook.svg" alt="Facebook" width={12} height={12} className="transition-all object-contain" style={{ filter: `brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(2000%) hue-rotate(180deg)`, width: '12px', height: '12px' }} />
                  </a>
                  <a href="https://www.instagram.com/andinoh_/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group" style={{ backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = primaryColor; const img = e.currentTarget.querySelector('img'); if (img) img.style.filter = 'brightness(0) invert(1)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; const img = e.currentTarget.querySelector('img'); if (img) img.style.filter = `brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(2000%) hue-rotate(180deg)`; }}>
                    <Image src="/icons/instagram.svg" alt="Instagram" width={12} height={12} className="transition-all object-contain" style={{ filter: `brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(2000%) hue-rotate(180deg)`, width: '12px', height: '12px' }} />
                  </a>
                  <a href="https://www.tiktok.com/@andinoh0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors group" style={{ backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = primaryColor; const img = e.currentTarget.querySelector('img'); if (img) img.style.filter = 'brightness(0) invert(1)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; const img = e.currentTarget.querySelector('img'); if (img) img.style.filter = `brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(2000%) hue-rotate(180deg)`; }}>
                    <Image src="/icons/tiktok.svg" alt="TikTok" width={12} height={12} className="transition-all object-contain" style={{ filter: `brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(2000%) hue-rotate(180deg)`, width: '12px', height: '12px' }} />
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
