"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

export default function PhoneHeroSection() {
  const { primaryColor } = useTheme();

  const darkerColor = primaryColor === "#0F75BD" ? "#0A5A94" :
                     primaryColor === "#0050C8" ? "#003A8C" :
                     "#001D4A";

  return (
    <section
      className="h-[380px] py-12 md:py-20 pl-8 md:pl-12 lg:pl-16 pr-0 mx-app mb-12
      text-white
      rounded-[40px] md:rounded-[48px] overflow-hidden flex items-center"
      style={{ background: `linear-gradient(to top, ${darkerColor}, ${primaryColor})` }}
    >
      <div className="flex items-center justify-between gap-8 w-full">
        <div className="max-w-2xl text-left flex-1">
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4 font-medium">
          ✦ Hotel Search
        </span>

        <h1 className="text-3xl md:text-3xl font-medium mb-3 md:mb-4 leading-tight">
          Modern Hotel Management
          <br />
        Made Simple
        </h1>

        <div className="mt-6">
          <div className="flex gap-4">
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

      <div className="flex-shrink-0 -mr-32">
        <Image
          src="/images/screen.png"
          alt="App Screenshot"
          width={700}
          height={1050}
          className="object-cover"
        />
      </div>
      </div>
    </section>
  );
}
