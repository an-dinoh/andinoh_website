import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <span className="inline-block bg-red-600 text-white text-xs px-4 py-1 rounded-full mb-4">
              ★ WE ARE HERE TO HELP!
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl text-red-100">
              Empowering students to study smarter, not harder
            </p>
          </div>
        </div>
        {/* Decorative stars */}
        <div className="absolute top-20 left-10 text-red-400">★</div>
        <div className="absolute top-32 right-20 text-purple-400">★</div>
        <div className="absolute bottom-10 right-40 text-red-400">★</div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-3xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👍</div>
                <p className="text-gray-600">Student with laptop</p>
              </div>
            </div>
            <div>
              <span className="inline-block bg-red-100 text-red-700 text-xs px-4 py-1 rounded-full mb-4">
                OUR MISSION
              </span>
              <h2 className="text-4xl font-bold mb-6">
                Empowering Students to Study Smarter, Not Harder.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At [LOGO], we believe the key to academic success lies in optimizing the way you
                study. Our platform uses cutting-edge technology to create personalized, optimized
                study schedules tailored content, and actionable insights, helping students achieve
                their dreams with less stress and more efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-red-100 text-red-700 text-xs px-4 py-1 rounded-full mb-4">
                OUR PROMISE
              </span>
              <h2 className="text-4xl font-bold mb-6">
                We Treat Our Users Friendly with An Unparalleled Level of Service.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We prioritize our users-always by cutting excellent customer support and
                actionable insights that empower them to reach their goals. Our support
                is more...
              </p>
            </div>
            <div className="bg-purple-200 rounded-3xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🧘‍♀️</div>
                <p className="text-gray-600">Student relaxing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 text-4xl font-bold text-red-700 mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                1.3k
              </div>
              <p className="text-gray-600 text-sm">Active users</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 text-4xl font-bold text-red-700 mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
                98%
              </div>
              <p className="text-gray-600 text-sm">User satisfaction</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 text-4xl font-bold text-red-700 mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                14
              </div>
              <p className="text-gray-600 text-sm">Countries of operations</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 text-4xl font-bold text-red-700 mb-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                43
              </div>
              <p className="text-gray-600 text-sm">Mentors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-red-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-700 text-white text-xs px-4 py-1 rounded-full mb-4">
              OUR CORE FOUNDATION
            </span>
            <h2 className="text-4xl font-bold">
              Our Vision and Mission: Driving Purpose, Inspiring Success
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📚</div>
                <p className="text-gray-600">Student studying</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  We Are on the Mission to Optimize Your Study Plan
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded to address poor-nation and bad study practices that hinder student success,
                  [APP NAME] was created to enhance study habits. We help students discover strategies
                  for better understanding, retention, and overall achievement.
                </p>
              </div>
              <div className="bg-cyan-100 rounded-3xl p-8 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <p className="text-gray-600">Student celebrating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Do This */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-3xl font-bold mb-6">We Are Doing this Because;</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We strongly believe that to transform education process we must leverage the power
                of technology to assist students in optimal study experiences. We plan to partner
                with top education experts to assist in studying to excel rather in their field of
                interest.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We truly aim to reach about 1 million of students.
              </p>
            </div>
            <div className="bg-pink-100 rounded-3xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✌️</div>
                <p className="text-gray-600">Students together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-12">
            We are trusted by leading schools and institutions
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold">contentful</div>
            <div className="text-2xl font-bold text-blue-600">Google</div>
            <div className="text-2xl font-bold text-red-600">asana</div>
            <div className="text-2xl font-bold text-purple-600">monday.com</div>
            <div className="text-2xl font-bold text-green-600">grammarly</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-red-700 via-red-800 to-red-900 rounded-3xl p-12 text-center text-white">
            <span className="inline-block bg-red-600 text-white text-xs px-4 py-1 rounded-full mb-4">
              JOIN US
            </span>
            <h2 className="text-4xl font-bold mb-8">
              Simplify Your Study Journey with [APP NAME]
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-3 bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </button>
              <button className="flex items-center justify-center gap-3 bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                App Store
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-pink-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-pink-200 rounded-3xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🤝</div>
                <p className="text-gray-600">Students studying together</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                We're simply studying to succeed
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At [LOGO], we understand students with some truth made clear. Every mind is unique
                and standard one-size-fit all approach will not work. Our AI-powered platform brings:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">A study study schedule tailored uniquely to you</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Performance analysis that reveal what should your strength and weak...</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Gamified stop-assessment designed to make learning engaging fun.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Learning tips and resource designed to keep study efficient.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join Journey CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <span className="inline-block bg-red-100 text-red-700 text-xs px-4 py-1 rounded-full mb-4">
            JOIN US
          </span>
          <h2 className="text-4xl font-bold mb-6">
            Be a Part of Our Journey to Improve Students Studying Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're student looking for direction in understanding any concept, or institution
            focused on improving learning outcomes, we'll work together to make it happen. Join
            thousands of happy learners experiencing [LOGO] difference.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 text-red-700 border-2 border-red-700 rounded-full font-semibold hover:bg-red-50 transition-colors">
              Learn
            </button>
            <button className="px-8 py-3 bg-red-700 text-white rounded-full font-semibold hover:bg-red-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
