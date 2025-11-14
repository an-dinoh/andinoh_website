import PageTransition from "../components/PageTransition";
import WaitlistForm from "../components/WaitlistForm";

export default function Waitlist() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white flex items-center justify-center px-6 md:px-12 lg:px-16 py-4 pt-28 md:pt-32">
        <div className="relative w-full max-w-4xl bg-gradient-to-br from-[#0F75BD] via-[#0F75BD] to-[#0F75BD] rounded-2xl md:rounded-3xl overflow-hidden">
          <div className="relative text-white py-12 md:py-20 px-6 md:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 md:px-4 py-1.5 rounded-full mb-4 md:mb-6 font-semibold">
                ✨ COMING SOON
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Join the Waitlist
              </h1>
              <p className="text-base md:text-xl text-white mb-8 md:mb-10 leading-relaxed font-medium">
                Be among the first to experience Andinoh. Enter your details below and we'll notify you when we launch.
              </p>

              <div className="max-w-2xl mx-auto">
                <WaitlistForm />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10 text-xs md:text-sm text-white font-semibold">
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
      </div>
    </PageTransition>
  );
}
