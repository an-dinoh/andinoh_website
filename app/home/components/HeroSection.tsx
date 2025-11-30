
import WaitlistForm from "../../components/WaitlistForm";

export default function HeroSection() {
  return (
    <section className="relative h-[75vh] md:h-[85vh] bg-gradient-to-b from-white via-[#E3F2FD] to-[#BBDEFB] flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">

      {/* Top fade overlay */}
      <div className="absolute top-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      {/* Floating decorative shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 md:w-60 md:h-60 bg-[#0F75BD]/10 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 md:w-80 md:h-80 bg-[#0F75BD]/5 rounded-full animate-ping-slow"></div>
      <div className="absolute top-1/3 right-16 w-24 h-24 md:w-32 md:h-32 bg-[#0F75BD]/15 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-24 left-1/4 w-20 h-20 md:w-28 md:h-28 bg-[#0F75BD]/10 rounded-full animate-bounce-slower"></div>
      <div className="absolute top-1/4 left-1/3 w-16 h-16 md:w-20 md:h-20 bg-[#0F75BD]/8 rounded-full animate-pulse-slow"></div>

      {/* Headline & Subheadline */}
      <div className="text-center mb-6 md:mb-10">
       <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 text-[#0F75BD]">
          Be the First to Explore Andinoh
        </h1>
        <p className="text-sm md:text-base text-gray-600 font-regular leading-relaxed drop-shadow-sm max-w-xl mx-auto">
       Be among the first to discover Africa’s hotels, flights, events, and local experiences.   </p>
      </div>

      {/* Hero content card */}
      <div className="relative w-full max-w-2xl bg-white/20 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden p-6 md:p-10 flex flex-col items-center text-center">

        {/* Badge */}
        <span className="inline-block bg-[#0F75BD]/15 backdrop-blur-sm text-[#0F75BD] text-xs md:text-sm px-3 py-1 rounded-full mb-6 font-semibold animate-pulse">
          ✨ COMING SOON
        </span>

        {/* Waitlist Form */}
        <div className="w-full">
          <WaitlistForm />
        </div>

        {/* Decorative floating stars */}
        <div className="absolute top-8 left-1/4 text-[#0F75BD]/25 text-2xl animate-pulse-slow">
          ✦
        </div>
        <div className="absolute bottom-12 right-1/3 text-[#FBB81F]/30 text-3xl animate-pulse-slower">
          ✦
        </div>
      </div>
    </section>
  );
}
