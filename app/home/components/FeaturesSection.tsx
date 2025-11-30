import { FiClock, FiDollarSign, FiHeart, FiMapPin, FiStar } from "react-icons/fi";
import { IconType } from "react-icons";

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: FiClock,
    title: "Save Time & Money",
    description:
      "Compare hundreds of options in seconds and get the best deals on hotels, flights, and experiences",
  },
  {
    icon: FiMapPin,
    title: "Discover Hidden Gems",
    description: "Find authentic local stays and experiences beyond the usual tourist spots",
  },
  {
    icon: FiStar,
    title: "Book with Confidence",
    description:
      "Real reviews, verified listings, and secure payments ensure worry-free travel",
  },
  {
    icon: FiHeart,
    title: "Travel Worry-Free",
    description: "24/7 support, instant confirmations, and flexible payment options for peace of mind",
  },
  {
    icon: FiDollarSign,
    title: "Experience Real Africa",
    description:
      "Connect with local hosts, authentic culture, and unforgettable moments across the continent",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-app mt-20 mb-50 relative">
      {/* Leaf Shapes - Behind everything */}
      <div className="absolute inset-0 flex items-start justify-start overflow-visible pointer-events-none">
        <svg width="600" height="750" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40 -ml-32" style={{ transform: 'rotate(45deg)' }}>
          <path d="M60 0C50 10 30 30 25 60C20 90 30 120 60 150C90 120 100 90 95 60C90 30 70 10 60 0Z" stroke="#0F75BD" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-start justify-end overflow-visible pointer-events-none -mt-44">
        <svg width="600" height="750" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40 -mr-32" style={{ transform: 'rotate(-135deg)' }}>
          <path d="M60 0C50 10 30 30 25 60C20 90 30 120 60 150C90 120 100 90 95 60C90 30 70 10 60 0Z" stroke="#0F75BD" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-start justify-end overflow-visible pointer-events-none mt-44">
        <svg width="600" height="750" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40 -mr-88" style={{ transform: 'rotate(-120deg)' }}>
          <path d="M60 0C50 10 30 30 25 60C20 90 30 120 60 150C90 120 100 90 95 60C90 30 70 10 60 0Z" stroke="#FBB81F" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      {/* Content on top */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 leading-tight text-[#0F75BD]">
            Why Choose
            <br />
            Andinoh
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white border border-gray-200 hover:border-[#0F75BD] transition-colors w-full md:w-[calc(33.333%-1.67rem)] lg:w-[calc(33.333%-2.5rem)]"
            >
              <div className="w-8 h-8 rounded-full bg-[#E3F2FD] flex items-center justify-center mb-4">
                <feature.icon className="w-4 h-4 text-[#0F75BD]" />
              </div>
              <h3 className="text-base font-medium mb-3 text-[#0F75BD]">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
