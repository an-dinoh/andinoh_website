import { FiCircle } from "react-icons/fi";
import PageTransition from "../components/PageTransition";
import Link from "next/link";

export default function Contact() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-[85vh] bg-white flex items-center px-app pt-28 md:pt-32">
          <div className="max-w-4xl">
            <div className="inline-block relative mb-4 md:mb-6">
              <span className="inline-flex items-center gap-1.5 bg-[#E3F2FD] text-[#0F75BD] text-xs md:text-sm px-4.5 py-1.5 rounded-full font-regular border-1 border-[#0F75BD]">
                Get in Touch
                <FiCircle className="w-2 h-2 fill-current" />
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 md:mb-8 leading-tight text-[#0F75BD]">
              We'd Love to
              <br />
              Hear From You
            </h1>
            <p className="text-sm md:text-lg lg:text-lg font-regular text-gray-500 max-w-3xl leading-relaxed mb-6 md:mb-8">
              Have questions about Andinoh? Want to partner with us?<br />Our team is ready to help you discover the future of African travel.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-app mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Email Support */}
              <div className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-[#0F75BD] transition-colors">
                <h3 className="text-base font-medium mb-3 text-[#0F75BD]">
                  Email Support
                </h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  Available Monday to Saturday, 9 AM – 5 PM
                </p>
                <a href="mailto:support@andinoh.com" className="text-sm text-[#0F75BD] font-medium hover:underline">
                  support@andinoh.com
                </a>
              </div>

              {/* Phone Support */}
              <div className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-[#0F75BD] transition-colors">
                <h3 className="text-base font-medium mb-3 text-[#0F75BD]">
                  Phone Support
                </h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  Available Monday to Saturday, 9 AM – 5 PM
                </p>
                <div className="space-y-2">
                  <a href="tel:+2348182367679" className="block text-sm text-[#0F75BD] font-medium hover:underline">
                    (+234) 818 2367 679
                  </a>
                  <a href="tel:+2347097865346" className="block text-sm text-[#0F75BD] font-medium hover:underline">
                    (+234) 709 7865 346
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-[#0F75BD] transition-colors">
                <h3 className="text-base font-medium mb-3 text-[#0F75BD]">
                  Office Address
                </h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  Visit us during business hours
                </p>
                <p className="text-sm text-gray-600">
                  Lagos, Nigeria
                </p>
              </div>

              {/* Social Media */}
              <div className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-[#0F75BD] transition-colors">
                <h3 className="text-base font-medium mb-3 text-[#0F75BD]">
                  Social Media
                </h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  Connect with us on social platforms
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-[#E3F2FD] rounded-full flex items-center justify-center hover:bg-[#0F75BD] hover:text-white transition-colors text-[#0F75BD]">
                    <span className="font-medium">𝕏</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#E3F2FD] rounded-full flex items-center justify-center hover:bg-[#0F75BD] hover:text-white transition-colors text-[#0F75BD]">
                    <span className="font-medium">in</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#E3F2FD] rounded-full flex items-center justify-center hover:bg-[#0F75BD] hover:text-white transition-colors text-[#0F75BD]">
                    <span className="font-medium">f</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-app mt-20 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 md:mb-8 text-[#0F75BD]">
              Ready to Get Started?
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our waitlist and be among the first to experience seamless African travel booking
            </p>
            <Link href="/#waitlist">
              <button className="px-5.5 py-3.5 text-sm font-medium text-white bg-[#FBB81F] rounded-[18px] hover:bg-[#E09A00] transition-colors">
                Join the Waitlist
              </button>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
