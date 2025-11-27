import WaitlistForm from "../../components/WaitlistForm";

export default function HeroSection() {
  return (
    <section className="h-[70vh] md:h-[70vh] bg-white flex items-center justify-center px-app py-6">
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-[#0F75BD] via-[#0F75BD] to-[#0F75BD] rounded-3xl md:rounded-4xl overflow-hidden">
        <div className="relative text-white py-6 md:py-10 px-5 md:px-8">
          <div className="max-w-lg mx-auto text-center">
            {/* Badge */}
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full mb-2 md:mb-3 font-semibold">
              ✨ COMING SOON
            </span>

            {/* Headline */}
            <h2 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
              Be First to Explore Andinoh
            </h2>

            {/* Subheadline */}
            <p className="text-sm text-white mb-4 md:mb-5 leading-relaxed font-regular">
              Join the waitlist and get early access to Africa’s all-in-one
              travel platform. Discover hotels, flights, events, and authentic
              experiences—before anyone else.
            </p>

            {/* Waitlist Form */}
            <div className="max-w-xl mx-auto">
              <WaitlistForm />
            </div>
          </div>

          {/* Decorative animated elements */}
          <div className="hidden md:block absolute top-16 left-10 text-[#49A2E0] text-4xl animate-pulse">
            ✦
          </div>
          <div className="hidden md:block absolute top-40 right-20 text-white/30 text-3xl animate-pulse">
            ✦
          </div>
          <div className="hidden md:block absolute bottom-20 left-1/4 text-[#49A2E0] text-2xl animate-pulse">
            ✦
          </div>
          <div className="hidden md:block absolute bottom-40 right-1/3 text-white/20 text-5xl animate-pulse">
            ✦
          </div>
        </div>
      </div>
    </section>
  );
}
