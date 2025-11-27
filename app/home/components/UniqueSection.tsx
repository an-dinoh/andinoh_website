export default function UniqueSection() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-app py-4 pt-28 md:pt-32">
      <div className="relative w-full max-w-5xl bg-gradient-to-br from-[#0F75BD] via-[#0F75BD] to-[#0F75BD] rounded-2xl md:rounded-4xl overflow-hidden">
        <div className="relative text-white py-8 md:py-16 px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 md:px-4 py-1.5 rounded-full mb-3 md:mb-4 font-medium">
              OUR CORE VALUES
            </span>

            <h1 className="text-2xl md:text-2xl font-semibold mb-3 md:mb-4 leading-tight">
              What makes us unique <br /> from othere
            </h1>
            {/* <p className="text-sm md:text-sm text-white mb-6 md:mb-8 leading-relaxed font-regular">
              Streamline your hotel operations with intelligent booking, guest management, and staff workflows. Join the waitlist for early access.
            </p> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#FAFAFA] border-2 border-transparent hover:border-[#0F75BD] transition-colors">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">📅</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#757575]">
                  Personalized Schedules
                </h3>
                <p className="text-sm md:text-base text-[#757575]">
                  AI-powered study schedules tailored to your learning style and
                  goals
                </p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#FAFAFA] border-2 border-transparent hover:border-[#0F75BD] transition-colors">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">📊</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#757575]">
                  Progress Tracking
                </h3>
                <p className="text-sm md:text-base text-[#757575]">
                  Monitor your performance and identify areas for improvement
                </p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#FAFAFA] border-2 border-transparent hover:border-[#0F75BD] transition-colors">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">🎯</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#757575]">
                  Smart Goals
                </h3>
                <p className="text-sm md:text-base text-[#757575]">
                  Set and achieve your academic goals with intelligent
                  recommendations
                </p>
              </div>
            </div>
          </div>

          {/* Animated decorative elements - hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-10 text-[#49A2E0] text-4xl animate-pulse">
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
