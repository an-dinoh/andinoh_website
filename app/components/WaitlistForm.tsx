"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
    setName("");
    setEmail("");

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Success Dialog Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-[slideDown_0.3s_ease-out] relative">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl">🎉</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0F75BD] mb-2">
                You're on the list!
              </h3>
              <p className="text-gray-600 mb-6">
                We'll be in touch soon with exclusive early access updates.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-[#0F75BD] text-white rounded-full font-semibold hover:bg-[#0050C8] transition-colors"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="flex-1 px-6 py-4 rounded-3xl text-[#212121] placeholder:text-[#616161] focus:outline-none focus:ring-4 focus:ring-white/30 transition-all bg-white font-medium"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-6 py-4 rounded-3xl text-[#212121] placeholder:text-[#616161] focus:outline-none focus:ring-4 focus:ring-white/30 transition-all bg-white font-medium"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 bg-white text-[#0F75BD] rounded-3xl font-bold border border-transparent hover:bg-[#0050C8] hover:text-white hover:scale-105 hover:border-[#FBB81F] transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </button>
      </form>

        <p className="text-white text-sm mt-4 text-center font-regular opacity-90">
          🔒 We respect your privacy. No spam, ever.
        </p>
      </div>
    </>
  );
}
