import PageTransition from "../components/PageTransition";
import Link from "next/link";

export default function Contact() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-6 md:px-12 lg:px-16">
          <div className="container mx-auto text-center">
            <span className="inline-block bg-[#E3F2FD] text-[#0F75BD] text-xs px-4 py-1.5 rounded-full mb-4 font-semibold">
              GET IN TOUCH
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Contact Us
            </h1>
            <p className="text-base md:text-xl text-[#757575] max-w-3xl mx-auto leading-relaxed">
              Have questions or need support? We're here to help—reach out anytime!
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 md:py-20 px-6 md:px-12 lg:px-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              {/* Email Support */}
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#FAFAFA] border-2 border-transparent hover:border-[#0F75BD] transition-colors">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">📧</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Email Support</h3>
                <p className="text-sm text-[#757575] mb-3">Available Monday to Saturday, 9 AM – 5 PM</p>
                <a href="mailto:support@andinoh.com" className="text-[#0F75BD] font-medium hover:underline">
                  support@andinoh.com
                </a>
              </div>

              {/* Phone Support */}
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#FAFAFA] border-2 border-transparent hover:border-[#0F75BD] transition-colors">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">📞</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Phone Support</h3>
                <p className="text-sm text-[#757575] mb-3">Available Monday to Saturday, 9 AM – 5 PM</p>
                <div className="space-y-2">
                  <a href="tel:+2348182367679" className="block text-[#0F75BD] font-medium hover:underline">
                    (+234) 818 2367 679
                  </a>
                  <a href="tel:+2347097865346" className="block text-[#0F75BD] font-medium hover:underline">
                    (+234) 709 7865 346
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#FAFAFA] border-2 border-transparent hover:border-[#0F75BD] transition-colors">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">📍</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Office Address</h3>
                <p className="text-sm text-[#757575] mb-3">Visit us during business hours</p>
                <p className="text-[#616161]">
                  Lagos, Nigeria
                </p>
              </div>

              {/* Social Media */}
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#FAFAFA] border-2 border-transparent hover:border-[#0F75BD] transition-colors">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">💬</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Social Media</h3>
                <p className="text-sm text-[#757575] mb-3">Connect with us on social platforms</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#0F75BD] hover:text-white transition-colors">
                    <span>𝕏</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#0F75BD] hover:text-white transition-colors">
                    <span>in</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#0F75BD] hover:text-white transition-colors">
                    <span>f</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Box */}
        <section className="py-12 md:py-20 px-6 md:px-12 lg:px-16">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-[#0F75BD] to-[#49A2E0] rounded-2xl md:rounded-3xl p-8 md:p-12 text-white text-center">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-4 py-1.5 rounded-full mb-4 font-semibold">
                ★ WE ARE HERE TO HELP!
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                We're Here to Listen & Support You
              </h2>
              <p className="text-base md:text-lg mb-6 opacity-90">
                Reach out with your questions, feedback, or support needs. Our team is ready to assist you.
              </p>
              <Link href="/waitlist">
                <button className="px-6 md:px-8 py-3 bg-white text-[#0F75BD] rounded-full font-semibold hover:bg-[#FAFAFA] transition-colors">
                  Join Waitlist
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
