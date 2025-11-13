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
    <section className="relative bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          {badge && <Badge variant="white">{badge}</Badge>}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-4">{title}</h1>
          <p className="text-xl text-red-100">{subtitle}</p>
        </div>
      </div>
      {showStars && (
        <>
          <div className="absolute top-20 left-10 text-red-400">★</div>
          <div className="absolute top-32 right-20 text-purple-400">★</div>
          <div className="absolute bottom-10 right-40 text-red-400">★</div>
        </>
      )}
    </section>
  );
}
