import Image from "next/image";
import Link from "next/link";
import { FiCircle } from "react-icons/fi";

export default function LargeHeroSection() {
  return (
    <section className="min-h-[85vh] md:min-h-[85vh] bg-white flex items-center px-app pt-28 md:pt-32">
      <div className="max-w-4xl">
        {/* Introducing Badge */}
        <div className="inline-block relative mb-4 md:mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0F75BD] via-[#FBB81F] to-[#0F75BD] animate-spin-slow"></div>
          <span className="relative inline-flex items-center gap-1.5 bg-white text-[#0F75BD] text-xs md:text-sm px-4.5 py-1.5 rounded-full font-regular border-1 border-[#0F75BD]">
            Introducing Andinoh
            <FiCircle className="w-2 h-2 fill-current" />
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 md:mb-8 leading-tight text-[#0F75BD]">
          Connecting Africa's
          <br />
          Hospitality Ecosystem
        </h1>
        <p className="text-sm md:text-lg lg:text-lg font-regular text-gray-500 max-w-3xl leading-relaxed mb-6 md:mb-8">
          Seamless access to hotels, flights, events,
          <br />
          and authentic local experiences.
        </p>
        
        <div className="flex flex-col items-start gap-4">
           <Link href="/#waitlist">
             <button className="px-5.5 py-3.5 text-sm font-medium text-white bg-[#FBB81F] rounded-[18px] hover:bg-[#E09A00] transition-colors">   JOIN THE WAIT LIST
              </button>
            </Link>
          {/* <div className="flex items-center gap-3">
           
            <span className="text-[#0F75BD] text-lg font-semibold tracking-wide">
              Coming Soon
            </span>
          </div> */}

          {/* <p className="text-base text-[#424242] leading-relaxed">
            Be the first to join our waitlist for early access
          </p> */}
        </div>
      </div>

      <div className="hidden lg:flex flex-1 justify-end items-center">
        <Image
          src="/images/leafs.png"
          alt="Decorative leaves"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </section>
  );
}
