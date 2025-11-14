import Link from "next/link";

export default function CTASection() {
  return (

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
  );
}
