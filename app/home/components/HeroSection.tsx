import WaitlistForm from "../../components/WaitlistForm";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 md:px-12 lg:px-16 py-4 pt-28 md:pt-32">
      <div className="relative w-full max-w-5xl bg-gradient-to-br from-[#0F75BD] via-[#0F75BD] to-[#0F75BD] rounded-2xl md:rounded-3xl overflow-hidden">
        <div className="relative text-white py-8 md:py-16 px-4 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4 font-semibold">
              ✨ COMING SOON
            </span>
            <h1 className="text-3xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight">
              Modern Hotel Management Made Simple
            </h1>
            <p className="text-sm md:text-sm text-white mb-6 md:mb-8 leading-relaxed font-regular">
              Streamline your hotel operations with intelligent booking, guest management, and staff workflows. Join the waitlist for early access.
            </p>

            <div className="max-w-2xl mx-auto">
              <WaitlistForm />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 text-xs md:text-sm text-white font-semibold">
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-xl">⚡</span>
                <span>Fast Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-xl">🔒</span>
                <span>Secure & Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-xl">📱</span>
                <span>Mobile Ready</span>
              </div>
            </div>
          </div>

          {/* Animated decorative elements - hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-10 text-[#49A2E0] text-4xl animate-pulse">✦</div>
          <div className="hidden md:block absolute top-40 right-20 text-white/30 text-3xl animate-pulse">✦</div>
          <div className="hidden md:block absolute bottom-20 left-1/4 text-[#49A2E0] text-2xl animate-pulse">✦</div>
          <div className="hidden md:block absolute bottom-40 right-1/3 text-white/20 text-5xl animate-pulse">✦</div>
        </div>
      </div>
    </section>
  );
}
