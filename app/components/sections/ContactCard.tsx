import { ReactNode } from "react";

interface ContactCardProps {
  title: string;
  availability?: string;
  children: ReactNode;
}

export default function ContactCard({ title, availability, children }: ContactCardProps) {
  return (
    <div className="bg-pink-50 rounded-2xl p-8">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {availability && <p className="text-gray-600 mb-4">{availability}</p>}
      <div className="space-y-3">{children}</div>
    </div>
  );
}
