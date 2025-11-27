import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0A5A94] to-[#0F75BD] text-white py-12 w-full">
      <div className="w-full max-w-[1400px] mx-auto pt-16 px-app">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 flex-wrap">
          {/* Logo and Description */}
          <div className="flex-shrink-0 md:w-64">
            <div className="mb-6">
              <Image
                src="/logos/ANDINOH BLACK.svg"
                alt="Andinoh"
                width={150}
                height={70}
              />
            </div>
            <p className="text-xs text-[#E3F2FD] leading-relaxed">
              Modern hotel management system designed for both hotel staff and
              customers. Streamlining bookings, guest management, and
              operational workflows.
            </p>
          </div>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* About Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">About Company</h3>
             <ul className="space-y-6 text-xs">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#E3F2FD] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E3F2FD] transition-colors"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E3F2FD] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E3F2FD] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-6 text-xs">
              <li className="flex items-center gap-2">
                <Image src="/icons/clock.svg" alt="Time" width={16} height={16} className="brightness-0 invert" />
                Sun-Fri: 8:00 AM-9:00 PM
              </li>
              <li className="flex items-center gap-2">
                <Image src="/icons/sms.svg" alt="Email" width={16} height={16} className="brightness-0 invert" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.andinoh@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E3F2FD] transition-colors">
                  info.andinoh@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Image src="/icons/call.svg" alt="Phone" width={16} height={16} className="brightness-0 invert" />
                (+234) 818 2367 679
              </li>
              <li className="flex items-center gap-2">
                <Image src="/icons/location.svg" alt="Location" width={16} height={16} className="brightness-0 invert" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Download App</h3>
            <div className="space-y-6">
              <button
                className="
                      flex items-center gap-3 
                      hover:border-[0.5px] border-[#D2D2D2]
                      bg-[#1A1A1A] 
                      px-5 py-3.5 
                      h-auto md:h-12 
                      rounded-2xl 
                      transition-colors
                    "
              >
                <Image
                  src="/icons/google-play.svg"
                  alt="Google Play"
                  width={16}
                  height={16}
                  className=""
                />
                <div className="text-left">
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </button>
              <button
                className="
                    flex items-center gap-3 
                    hover:border-[0.5px] border-[#D2D2D2]
                    bg-[#1A1A1A] 
                    px-5 py-3.5 
                    h-auto md:h-12 
                    rounded-2xl 
                    transition-colors
                  "
              >
                {" "}
                <Image
                  src="/icons/apple.svg"
                  alt="App Store"
                  width={16}
                  height={16}
                  className=""
                />
                <div className="text-left">
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>

         <div className="w-full h-px bg-[#E8E8E8] mt-20"></div>

        {/* Social Icons and Copyright */}
        <div className="mt-4 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 items-center">
            <a
              href="https://www.linkedin.com/company/109459638/admin/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity h-4 w-4 flex items-center justify-center"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={16}
                height={16}
                className="brightness-0 invert h-full w-full object-contain"
              />
            </a>

            <a
              href="https://www.facebook.com/people/Andinoh/61582401149207/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity h-4 w-4 flex items-center justify-center"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={16}
                height={16}
                className="brightness-0 invert h-full w-full object-contain"
              />
            </a>

            <a
              href="https://x.com/Andinoh_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity h-4 w-4 flex items-center justify-center"
            >
              <Image
                src="/icons/twitter.svg"
                alt="Twitter/X"
                width={16}
                height={16}
                className="brightness-0 invert h-full w-full object-contain"
              />
            </a>

            <a
              href="https://www.instagram.com/andinoh_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity h-4 w-4 flex items-center justify-center"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={16}
                height={16}
                className="brightness-0 invert h-full w-full object-contain"
              />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#E3F2FD]">© 2025</span>
            <Image
              src="/logos/ANDINOH.svg"
              alt="Andinoh"
              width={68}
              height={20}
              className="brightness-0 invert"
            />
            <span className="text-xs text-[#E3F2FD]"> All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
