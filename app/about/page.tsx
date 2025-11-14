import PageTransition from "../components/PageTransition";
import Link from "next/link";

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-6 md:px-12 lg:px-16">
          <div className="container mx-auto text-center">
            <span className="inline-block bg-[#E3F2FD] text-[#0F75BD] text-xs px-4 py-1.5 rounded-full mb-4 font-semibold">
              ABOUT ANDINOH
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Modern Hotel Management for the Digital Age
            </h1>
            <p className="text-base md:text-xl text-[#757575] max-w-3xl mx-auto leading-relaxed">
              Andinoh transforms how hotels operate by providing intelligent solutions for bookings, guest management, and staff workflows.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-20 px-6 md:px-12 lg:px-16 bg-[#FAFAFA]">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <span className="inline-block bg-[#E3F2FD] text-[#0F75BD] text-xs px-4 py-1 rounded-full mb-4 font-semibold">
                  OUR MISSION
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                  Empowering Hotels to Deliver Exceptional Experiences
                </h2>
                <p className="text-sm md:text-base text-[#757575] leading-relaxed mb-4">
                  At Andinoh, we believe that hotel management should be simple, efficient, and guest-focused. Our platform combines cutting-edge technology with intuitive design to help hotels of all sizes streamline operations and enhance guest satisfaction.
                </p>
                <p className="text-sm md:text-base text-[#757575] leading-relaxed">
                  From automated bookings to real-time analytics, we provide the tools modern hotels need to thrive in a competitive market.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0F75BD] to-[#49A2E0] rounded-2xl md:rounded-3xl p-8 md:p-12 text-white h-64 md:h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl md:text-7xl mb-4">🏨</div>
                  <p className="text-lg md:text-xl font-semibold">Built for Hotels</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-20 px-6 md:px-12 lg:px-16">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-block bg-[#E3F2FD] text-[#0F75BD] text-xs px-4 py-1 rounded-full mb-4 font-semibold">
                WHY ANDINOH
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Everything Your Hotel Needs in One Platform
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#FAFAFA] border-2 border-transparent hover:border-[#0F75BD] transition-colors">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">📅</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Smart Booking Management</h3>
                <p className="text-sm md:text-base text-[#757575]">Automated booking system with real-time availability and instant confirmations</p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#FAFAFA] border-2 border-transparent hover:border-[#0F75BD] transition-colors">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">👥</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Guest Experience</h3>
                <p className="text-sm md:text-base text-[#757575]">Personalized guest profiles, preferences, and seamless check-in/check-out</p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#FAFAFA] border-2 border-transparent hover:border-[#0F75BD] transition-colors">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">📊</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Analytics & Insights</h3>
                <p className="text-sm md:text-base text-[#757575]">Real-time dashboards and reports to make data-driven decisions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-6 md:px-12 lg:px-16 mx-6 md:mx-12 lg:mx-16 my-12 bg-gradient-to-br from-[#0F75BD] via-[#0F75BD] to-[#0F75BD] text-white rounded-2xl md:rounded-3xl">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Transform Your Hotel Operations?
            </h2>
            <p className="text-base md:text-xl text-[#E3F2FD] mb-6 md:mb-8 max-w-2xl mx-auto">
              Join the waitlist and be among the first to experience the future of hotel management
            </p>
            <Link href="/waitlist">
              <button className="px-6 md:px-8 py-3 bg-white text-[#0F75BD] rounded-full font-semibold hover:bg-[#FAFAFA] transition-colors">
                Join Waitlist
              </button>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
