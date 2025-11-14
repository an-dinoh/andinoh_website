"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white h-20 md:h-24 border-b border-[#D2D2D2]">
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-6 h-full">
        <Link href="/" className="flex items-center">
          <Image src="/logos/ANDINOH.svg" alt="Andinoh" width={100} height={35} priority className="md:w-[120px] md:h-[40px]" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[#424242]">
          <li>
            <Link
              href="/"
              className="hover:text-[#0F75BD] transition-colors relative inline-block pb-2"
            >
              Home
              {pathname === "/" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#0F75BD] animate-[slideIn_0.3s_ease-in-out]"></span>
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-[#0F75BD] transition-colors relative inline-block pb-2"
            >
              About
              {pathname === "/about" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#0F75BD] animate-[slideIn_0.3s_ease-in-out]"></span>
              )}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-[#0F75BD] transition-colors relative inline-block pb-2"
            >
              Contact
              {pathname === "/contact" && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#0F75BD] animate-[slideIn_0.3s_ease-in-out]"></span>
              )}
            </Link>
          </li>
        </ul>

        {/* Desktop Join Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/waitlist">
            <button className="px-6 py-4 text-sm font-medium text-white bg-[#0F75BD] rounded-full hover:bg-[#0050C8] transition-colors">
              JOIN THE WAIT LIST
            </button>
          </Link>
        </div>

        {/* Mobile: Join Button + Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Link href="/waitlist">
            <button className="px-3 py-2 text-[10px] font-semibold text-white bg-[#0F75BD] rounded-full hover:bg-[#0050C8] transition-colors whitespace-nowrap">
              JOIN WAITLIST
            </button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-[#424242] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#424242] transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#424242] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-[#D2D2D2] shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <ul className="flex flex-col gap-4 text-base font-medium text-[#424242]">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block hover:text-[#0F75BD] transition-colors ${pathname === "/" ? "text-[#0F75BD] font-semibold" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block hover:text-[#0F75BD] transition-colors ${pathname === "/about" ? "text-[#0F75BD] font-semibold" : ""}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block hover:text-[#0F75BD] transition-colors ${pathname === "/contact" ? "text-[#0F75BD] font-semibold" : ""}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
