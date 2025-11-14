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
    <div className="relative">
      {submitted && (
        <div className="absolute -top-16 left-0 right-0 bg-white text-[#0F75BD] px-6 py-3 rounded-2xl animate-[slideDown_0.3s_ease-out] z-10">
          <p className="text-center font-semibold">🎉 You're on the list! We'll be in touch soon.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="flex-1 px-6 py-4 rounded-full text-[#212121] placeholder:text-[#616161] focus:outline-none focus:ring-4 focus:ring-white/30 transition-all bg-white font-medium"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-6 py-4 rounded-full text-[#212121] placeholder:text-[#616161] focus:outline-none focus:ring-4 focus:ring-white/30 transition-all bg-white font-medium"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 bg-white text-[#0F75BD] rounded-full font-bold hover:bg-[#0050C8] hover:text-white hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </button>
      </form>

      <p className="text-white text-sm mt-4 text-center font-medium opacity-90">
        🔒 We respect your privacy. No spam, ever.
      </p>
    </div>
  );
}
