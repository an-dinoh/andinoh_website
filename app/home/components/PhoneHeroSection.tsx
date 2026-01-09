"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/app/context/ThemeContext";

export default function PhoneHeroSection() {
  const { primaryColor } = useTheme();

  const darkerColor =
    primaryColor === "#0F75BD"
      ? "#0A5A94"
      : primaryColor === "#0050C8"
      ? "#003A8C"
      : "#001D4A";

  return (
    <section
      className="min-h-[280px] h-auto sm:h-[360px] md:h-[380px] py-5 sm:py-8 md:py-12 lg:py-20 pl-5 sm:pl-6 md:pl-12 lg:pl-16 pr-3 sm:pr-0 mx-app mb-6 md:mb-12
      text-white
      rounded-[24px] md:rounded-[48px] overflow-hidden flex items-center
      landscape:max-md:min-h-[180px] landscape:max-md:h-[180px] landscape:max-md:py-4 landscape:max-md:pr-3"
      style={{
        background: `linear-gradient(to top, ${darkerColor}, ${primaryColor})`,
      }}
    >
      {/* Mobile Layout - Column */}
      <div className="flex md:hidden flex-col gap-3 w-full relative landscape:max-md:gap-2 landscape:max-md:h-full">
        <span className="inline-block self-start bg-white/20 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full font-medium landscape:max-md:text-xs landscape:max-md:px-3 landscape:max-md:py-1">
          ✦ Hotel Search
        </span>

        <h1 className="text-lg sm:text-xl font-medium leading-tight landscape:max-md:text-lg landscape:max-md:leading-tight">
          Modern Hotel Management{" "}
          <span className="portrait:inline landscape:max-md:block">
            Made Simple
          </span>
        </h1>

        <div className="flex items-end justify-between gap-3 w-full relative landscape:max-md:items-center landscape:max-md:mt-auto">
          <div className="flex flex-col gap-2 items-start z-10 landscape:max-md:gap-2 landscape:max-md:flex-row">
            <button
              className="
                flex items-center justify-center gap-2
                hover:border-[0.5px] border-[#D2D2D2]
                bg-[#1A1A1A]
                px-2.5 py-2
                rounded-xl
                transition-colors
                min-h-[42px]
                landscape:max-md:px-3 landscape:max-md:py-2 landscape:max-md:min-h-[36px]
              "
            >
              <Image
                src="/icons/google-play.svg"
                alt="Google Play"
                width={12}
                height={12}
                className="landscape:max-md:w-[14px] landscape:max-md:h-[14px]"
              />
              <div className="text-left">
                <div className="text-[11px] font-semibold whitespace-nowrap landscape:max-md:text-xs">
                  Google Play
                </div>
              </div>
            </button>
            <button
              className="
                flex items-center justify-center gap-2
                hover:border-[0.5px] border-[#D2D2D2]
                bg-[#1A1A1A]
                px-2.5 py-2
                rounded-xl
                transition-colors
                min-h-[42px]
                landscape:max-md:px-3 landscape:max-md:py-2 landscape:max-md:min-h-[36px]
              "
            >
              <Image
                src="/icons/apple.svg"
                alt="App Store"
                width={12}
                height={12}
                className="landscape:max-md:w-[14px] landscape:max-md:h-[14px]"
              />
              <div className="text-left">
                <div className="text-[11px] font-semibold whitespace-nowrap landscape:max-md:text-xs">
                  App Store
                </div>
              </div>
            </button>
          </div>

          <div className="absolute right-0 bottom-0 -mr-24 -mb-16 pointer-events-none landscape:max-md:-mr-3 landscape:max-md:-mb-6">
            <Image
              src="/images/screen.png"
              alt="App Screenshot"
              width={700}
              height={1050}
              className="object-cover w-[220px] landscape:max-md:w-[220px]"
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout - Row */}
      <div className="hidden md:flex items-center justify-between gap-6 lg:gap-8 w-full">
        <div className="max-w-2xl text-left flex-[2] min-w-0">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm lg:text-sm px-3 md:px-4 lg:px-4 py-2 md:py-2 rounded-full mb-4 md:mb-5 font-medium">
            ✦ Hotel Search
          </span>

          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-4 md:mb-5 leading-tight">
            Modern Hotel Management
            <br /> Made Simple
          </h1>

          <div className="mt-6 md:mt-8">
            <div className="flex flex-row gap-4 md:gap-5 items-start">
              <button
                className="
                  flex items-center justify-start gap-3 md:gap-4
                  hover:border-[0.5px] border-[#D2D2D2]
                  bg-[#1A1A1A]
                  px-3 md:px-3 lg:px-4 py-3 md:py-3.5 lg:py-3.5
                  h-auto
                  rounded-2xl
                  transition-colors
                "
              >
                <Image
                  src="/icons/google-play.svg"
                  alt="Google Play"
                  width={14}
                  height={14}
                  className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                />
                <div className="text-left">
                  <div className="text-xs md:text-sm lg:text-base font-semibold whitespace-nowrap">
                    Google Play
                  </div>
                </div>
              </button>
              <button
                className="
                  flex items-center justify-start gap-3 md:gap-4
                  hover:border-[0.5px] border-[#D2D2D2]
                  bg-[#1A1A1A]
                  px-3 md:px-3 lg:px-4 py-3 md:py-3.5 lg:py-3.5
                  h-auto
                  rounded-2xl
                  transition-colors
                "
              >
                <Image
                  src="/icons/apple.svg"
                  alt="App Store"
                  width={14}
                  height={14}
                  className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                />
                <div className="text-left">
                  <div className="text-xs md:text-sm lg:text-base font-semibold whitespace-nowrap">
                    App Store
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 flex-[1] -mr-24 md:-mr-32 flex justify-end">
          <Image
            src="/images/screen.png"
            alt="App Screenshot"
            width={700}
            height={1050}
            className="object-cover w-[450px] md:w-[600px] lg:w-[800px]"
          />
        </div>
      </div>
    </section>
  );
}
