import HeroSection from "../components/sections/HeroSection";
import ContactCard from "../components/sections/ContactCard";
import SectionContainer from "../components/ui/SectionContainer";
import Badge from "../components/ui/Badge";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";
import ContactLink from "../components/ui/ContactLink";
import { EmailIcon, PhoneIcon, LocationIcon } from "../components/ui/icons";

const AVAILABILITY = "Available Monday to Saturday, 9 AM – 5 PM";

export default function Contact() {
  const socialLinks = [
    { name: "Instagram", icon: "instagram", color: "text-pink-600" },
    { name: "Facebook", icon: "facebook", color: "text-blue-600" },
    { name: "X (Twitter)", icon: "twitter", color: "text-gray-900" },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <HeroSection
        title="Contact Us"
        subtitle="Have questions or need support? We're here to help—reach out anytime!"
      />

      <SectionContainer>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Image and Text */}
          <div>
            <div className="mb-8">
              <ImagePlaceholder emoji="👍" label="Support representative" />
            </div>
            <div className="bg-red-100 rounded-2xl p-6">
              <Badge variant="primary">★ WE ARE HERE TO HELP!</Badge>
              <h2 className="text-3xl font-bold mb-4 mt-4">
                We're Here to Listen & Support You
              </h2>
              <p className="text-gray-700">
                Reach out with your questions, feedback, or support needs. Our team is ready to
                assist you.
              </p>
            </div>
          </div>

          {/* Right - Contact Information */}
          <div className="space-y-8">
            {/* Email Support */}
            <ContactCard title="EMAIL SUPPORT" availability={AVAILABILITY}>
              <ContactLink href="mailto:Eduright@wecool.com" icon={<EmailIcon />}>
                Eduright@wecool.com
              </ContactLink>
            </ContactCard>

            {/* Phone/Chat Support */}
            <ContactCard title="PHONE/CHAT SUPPORT" availability={AVAILABILITY}>
              <ContactLink href="tel:+2347097865346" icon={<PhoneIcon />}>
                (+234) 709 7865 346
              </ContactLink>
              <ContactLink href="tel:+2348145678643" icon={<PhoneIcon />}>
                (+234) 814 5678 643
              </ContactLink>
            </ContactCard>

            {/* Social Media Support */}
            <ContactCard title="SOCIAL MEDIA PAGES SUPPORT" availability={AVAILABILITY}>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`text-xl ${social.color}`}>
                      {social.icon === "instagram" && "📷"}
                      {social.icon === "facebook" && "👍"}
                      {social.icon === "twitter" && "🐦"}
                    </div>
                    <span className="font-medium text-gray-700">{social.name}</span>
                  </a>
                ))}
              </div>
            </ContactCard>

            {/* Office Address */}
            <ContactCard title="OFFICE ADDRESS" availability={AVAILABILITY}>
              <div className="flex items-start gap-3">
                <LocationIcon />
                <p className="text-gray-700">123 Learning Street, Lagos, Nigeria</p>
              </div>
            </ContactCard>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
