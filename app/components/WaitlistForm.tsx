"use client";

import { useState } from "react";
import { useTheme } from "@/app/context/ThemeContext";

export default function WaitlistForm() {
  const { primaryColor } = useTheme();
  const [type, setType] = useState<"customer" | "hotel">("customer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Email validation regex
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Check if form is valid
  const isFormValid = name.trim() !== "" && isValidEmail(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, user_type: type }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message);
        setSubmitted(true);
        setName("");
        setEmail("");
      } else {
        setResponseMessage(data.error || "Something went wrong");
        setSubmitted(true);
      }
    } catch (error) {
      setResponseMessage("Failed to join waitlist. Please try again.");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      setSubmitted(false);
      setResponseMessage("");
    }, 5000);
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
              <h3 className="text-2xl font-bold mb-2" style={{ color: primaryColor }}>
                {responseMessage.includes("already") ? "Already Registered!" : "You're on the list!"}
              </h3>
              <p className="text-gray-600 mb-6">
                {responseMessage}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 text-white rounded-3xl font-semibold transition-colors"
                style={{ backgroundColor: primaryColor }}
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 md:gap-5 landscape:max-md:gap-2">
        {/* Toggle */}
        <div className="flex justify-center items-center bg-gray-100 rounded-xl md:rounded-2xl p-0.5 sm:p-1 w-full max-w-xs mx-auto mb-2 sm:mb-4 landscape:max-md:mb-2 landscape:max-md:max-w-sm">
          <button
            type="button"
            onClick={() => setType("customer")}
            className="flex-1 py-1.5 sm:py-2 md:py-2 rounded-xl md:rounded-2xl transition-colors text-white font-medium text-xs sm:text-sm md:text-sm landscape:max-md:text-xs landscape:max-md:py-1.5"
            style={{
              backgroundColor: type === "customer" ? primaryColor : "transparent",
              color: type === "customer" ? "white" : "#6B7280"
            }}
          >
            Customer
          </button>
          <button
            type="button"
            onClick={() => setType("hotel")}
            className="flex-1 py-1.5 sm:py-2 md:py-2 rounded-xl md:rounded-2xl transition-colors text-xs sm:text-sm md:text-sm landscape:max-md:text-xs landscape:max-md:py-1.5"
            style={{
              backgroundColor: type === "hotel" ? primaryColor : "transparent",
              color: type === "hotel" ? "white" : "#6B7280"
            }}
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
          className="px-4 py-3 sm:px-6 sm:py-4 md:px-6 md:py-4 rounded-2xl md:rounded-3xl bg-gray-50 border border-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all font-regular text-gray-900 text-xs sm:text-sm md:text-sm landscape:max-md:px-4 landscape:max-md:py-2.5 landscape:max-md:text-xs landscape:max-md:rounded-xl"
          style={{
            '--tw-ring-color': primaryColor
          } as React.CSSProperties}
          onFocus={(e) => e.currentTarget.style.borderColor = primaryColor}
          onBlur={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
        />

        {/* Email Field */}
        <input
          type="email"
          placeholder={type === "customer" ? "Your Email" : "Hotel Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-3 sm:px-6 sm:py-4 md:px-6 md:py-4 rounded-2xl md:rounded-3xl bg-gray-50 border border-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all font-regular text-gray-900 text-xs sm:text-sm md:text-sm landscape:max-md:px-4 landscape:max-md:py-2.5 landscape:max-md:text-xs landscape:max-md:rounded-xl"
          style={{
            '--tw-ring-color': primaryColor
          } as React.CSSProperties}
          onFocus={(e) => e.currentTarget.style.borderColor = primaryColor}
          onBlur={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading || !isFormValid}
          className="px-6 py-3 sm:px-8 sm:py-4 md:px-8 md:py-4 bg-[#FBB81F] text-white font-medium rounded-2xl md:rounded-3xl hover:bg-[#E09A00] active:bg-[#D08A00] focus:outline-none focus:ring-0 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm md:text-sm landscape:max-md:px-6 landscape:max-md:py-2.5 landscape:max-md:text-xs landscape:max-md:rounded-xl"
        >
          {loading
            ? "Joining..."
            : type === "customer"
            ? "Join Waitlist"
            : "Join Hotel Waitlist"}
        </button>
      </form>

      <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm mt-3 md:mt-4 text-center landscape:max-md:text-[9px] landscape:max-md:mt-2">
        🔒 We respect your privacy. No spam, ever.
      </p>
    </>
  );
}
