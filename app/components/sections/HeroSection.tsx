import Badge from "../ui/Badge";

interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle: string;
  showStars?: boolean;
}

export default function HeroSection({
  badge,
  title,
  subtitle,
  showStars = true,
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#0F75BD] via-[#0F75BD] to-[#0F75BD] text-white pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          {badge && <Badge variant="white">{badge}</Badge>}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-4">{title}</h1>
          <p className="text-xl text-[#E3F2FD]">{subtitle}</p>
        </div>
      </div>
      {showStars && (
        <>
          <div className="absolute top-20 left-10 text-[#49A2E0]">★</div>
          <div className="absolute top-32 right-20 text-[#AB47BC]">★</div>
          <div className="absolute bottom-10 right-40 text-[#49A2E0]">★</div>
        </>
      )}
    </section>
  );
}
