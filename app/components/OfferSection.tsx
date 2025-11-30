import Image from "next/image";

interface OfferSectionProps {
  startAlign?: "left" | "right";
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  image?: string | null;
  circleColor?: string;
}

export default function OfferSection({
  startAlign = "left",
  title,
  subtitle,
  image = null,
  circleColor = "#02A5E6",
}: OfferSectionProps) {
  const contentSection = (
    <div className="max-w-4xl flex-1">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-3 md:mb-4 leading-tight text-[#0F75BD]">
        {title}
      </h2>
      <p className="text-sm md:text-sm lg:text-base font-regular text-gray-500 leading-relaxed max-w-3xl">
        {subtitle}
      </p>
    </div>
  );

  const visualSection = (
    <div className={`hidden lg:flex flex-1 ${startAlign === "left" ? "justify-end" : "justify-start"} items-center`}>
      {image ? (
        <Image
          src={image}
          alt="Decorative leaves"
          width={400}
          height={400}
          className="object-contain"
        />
      ) : (
        <div className="w-104 h-104 rounded-full" style={{ backgroundColor: circleColor }}></div>
      )}
    </div>
  );

  return (
    <section className="bg-white py-8 px-app">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center py-6 mb-6">
          {startAlign === "left" ? (
            <>
              {contentSection}
              <div className="flex-1"></div>
              {visualSection}
            </>
          ) : (
            <>
              {visualSection}
              <div className="flex-1"></div>
              {contentSection}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
