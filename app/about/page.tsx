import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import CTASection from "../components/sections/CTASection";
import PartnersSection from "../components/sections/PartnersSection";
import SectionContainer from "../components/ui/SectionContainer";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";
import { CheckIcon } from "../components/ui/icons";

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <HeroSection
        badge="★ WE ARE HERE TO HELP!"
        title="About Us"
        subtitle="Empowering students to study smarter, not harder"
      />

      {/* Mission Section */}
      <SectionContainer>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ImagePlaceholder emoji="👍" label="Student with laptop" />
          <div>
            <Badge variant="secondary">OUR MISSION</Badge>
            <h2 className="text-4xl font-bold mb-6 mt-4">
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
      </SectionContainer>

      {/* Trust Section */}
      <SectionContainer background="gray">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary">OUR PROMISE</Badge>
            <h2 className="text-4xl font-bold mb-6 mt-4">
              We Treat Our Users Friendly with An Unparalleled Level of Service.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We prioritize our users-always by cutting excellent customer support and actionable
              insights that empower them to reach their goals. Our support is more...
            </p>
          </div>
          <ImagePlaceholder emoji="🧘‍♀️" label="Student relaxing" bgColor="bg-purple-200" />
        </div>
      </SectionContainer>

      <StatsSection />

      {/* Vision & Mission */}
      <SectionContainer background="red">
        <div className="text-center mb-12">
          <Badge variant="primary">OUR CORE FOUNDATION</Badge>
          <h2 className="text-4xl font-bold mt-4">
            Our Vision and Mission: Driving Purpose, Inspiring Success
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ImagePlaceholder emoji="📚" label="Student studying" bgColor="bg-purple-100" />
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
            <ImagePlaceholder
              emoji="🎯"
              label="Student celebrating"
              bgColor="bg-cyan-100"
              aspectRatio="video"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Why We Do This */}
      <SectionContainer>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold mb-6">We Are Doing this Because;</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              We strongly believe that to transform education process we must leverage the power of
              technology to assist students in optimal study experiences. We plan to partner with
              top education experts to assist in studying to excel rather in their field of
              interest.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We truly aim to reach about 1 million of students.
            </p>
          </div>
          <ImagePlaceholder emoji="✌️" label="Students together" bgColor="bg-pink-100" />
        </div>
      </SectionContainer>

      <PartnersSection />

      <CTASection title="Simplify Your Study Journey with [APP NAME]" />

      {/* Final CTA */}
      <SectionContainer background="pink">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ImagePlaceholder
            emoji="🤝"
            label="Students studying together"
            bgColor="bg-pink-200"
          />
          <div>
            <h2 className="text-4xl font-bold mb-6">We're simply studying to succeed</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At [LOGO], we understand students with some truth made clear. Every mind is unique
              and standard one-size-fit all approach will not work. Our AI-powered platform brings:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "A study study schedule tailored uniquely to you",
                "Performance analysis that reveal what should your strength and weak...",
                "Gamified stop-assessment designed to make learning engaging fun.",
                "Learning tips and resource designed to keep study efficient.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Join Journey CTA */}
      <SectionContainer>
        <div className="text-center">
          <Badge variant="secondary">JOIN US</Badge>
          <h2 className="text-4xl font-bold mb-6 mt-4">
            Be a Part of Our Journey to Improve Students Studying Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're student looking for direction in understanding any concept, or
            institution focused on improving learning outcomes, we'll work together to make it
            happen. Join thousands of happy learners experiencing [LOGO] difference.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="lg">
              Learn
            </Button>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
