"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="flex items-center justify-between px-app h-20">
        <Link href="/" className="flex items-center">
          <Image src="/logos/ANDINOH.svg" alt="Andinoh" width={120} height={40} priority />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-regular text-gray-700">
          <li>
            <Link
              href="/"
              className={`hover:text-[#0F75BD] transition-colors ${pathname === "/" ? "text-[#0F75BD] font-medium" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:text-[#0F75BD] transition-colors ${pathname === "/about" ? "text-[#0F75BD] font-medium" : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`hover:text-[#0F75BD] transition-colors ${pathname === "/contact" ? "text-[#0F75BD] font-medium" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Join Button */}
        <div className="hidden md:flex items-center">
          <Link href="/#waitlist">
            <button className="px-5 py-2.5 text-sm font-medium text-white bg-[#FBB81F] rounded-[18px] hover:bg-[#E09A00] transition-colors">
              Join Waitlist
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="px-app py-6">
          <ul className="flex flex-col gap-4 text-sm font-regular text-gray-700">
            <li>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block hover:text-[#0F75BD] transition-colors ${pathname === "/" ? "text-[#0F75BD] font-medium" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`block hover:text-[#0F75BD] transition-colors ${pathname === "/about" ? "text-[#0F75BD] font-medium" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block hover:text-[#0F75BD] transition-colors ${pathname === "/contact" ? "text-[#0F75BD] font-medium" : ""}`}
              >
                Contact
              </Link>
            </li>
            <li className="pt-2">
              <Link href="/#waitlist" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full px-5 py-2.5 text-sm font-medium text-white bg-[#FBB81F] rounded-[18px] hover:bg-[#E09A00] transition-colors">
                  Join Waitlist
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
