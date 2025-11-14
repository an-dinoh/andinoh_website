import SectionContainer from "../ui/SectionContainer";

export default function PartnersSection() {
  const partners = [
    { name: "contentful", color: "text-[#616161]" },
    { name: "Google", color: "text-[#0F75BD]" },
    { name: "asana", color: "text-[#0F75BD]" },
    { name: "monday.com", color: "text-[#AB47BC]" },
    { name: "grammarly", color: "text-green-600" },
  ];

  return (
    <SectionContainer background="gray">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-12">
          We are trusted by leading schools and institutions
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {partners.map((partner) => (
            <div key={partner.name} className={`text-2xl font-bold ${partner.color}`}>
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
