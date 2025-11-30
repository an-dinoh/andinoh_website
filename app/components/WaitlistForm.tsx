"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [type, setType] = useState<"customer" | "hotel">("customer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
    setName("");
    setEmail("");

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Success Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-slideDown">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-3xl flex items-center justify-center mb-4">
                <span className="text-4xl animate-bounce">🎉</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0F75BD] mb-2">
                You're on the list!
              </h3>
              <p className="text-gray-600 mb-6">
                We'll be in touch soon with exclusive early access updates.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-[#0F75BD] text-white rounded-3xl font-semibold hover:bg-[#0050C8] transition-colors"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
        {/* Toggle */}
        <div className="flex justify-center items-center bg-[#0F75BD]/10 backdrop-blur-sm rounded-2xl p-1 w-full max-w-xs mx-auto mb-4">
          <button
            type="button"
            onClick={() => setType("customer")}
            className={`flex-1 py-2 rounded-2xl transition-colors ${
              type === "customer"
                ? "bg-[#0F75BD] text-white font-bold"
                : "text-[#0F75BD]/80"
            }`}
          >
            Customer
          </button>
          <button
            type="button"
            onClick={() => setType("hotel")}
            className={`flex-1 py-2 rounded-2xl transition-colors ${
              type === "hotel"
                ? "bg-[#0F75BD] text-white font-bold"
                : "text-[#0F75BD]/80"
            }`}
          >
            Hotel Partner
          </button>
        </div>

        {/* Name Field */}
        <input
          type="text"
          placeholder={type === "customer" ? "Your Name" : "Hotel Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="px-6 py-4 rounded-3xl bg-white/90 backdrop-blur-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#0F75BD]/30 transition-all font-medium text-gray-900"
        />

        {/* Email Field */}
        <input
          type="email"
          placeholder={type === "customer" ? "Your Email" : "Hotel Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-6 py-4 rounded-3xl bg-white/90 backdrop-blur-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#0F75BD]/30 transition-all font-medium text-gray-900"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 bg-gradient-to-r from-[#FBB81F] to-[#FF9800] text-white font-bold rounded-3xl hover:scale-105 transform transition-all disabled:opacity-50"
        >
          {loading
            ? "Joining..."
            : type === "customer"
            ? "Join Waitlist"
            : "Join Hotel Waitlist"}
        </button>
      </form>

      <p className="text-[#0F75BD]/80 text-sm mt-4 text-center">
        🔒 We respect your privacy. No spam, ever.
      </p>
    </>
  );
}
