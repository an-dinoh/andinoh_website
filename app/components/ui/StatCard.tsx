import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 text-4xl font-bold text-red-700 mb-2">
        {icon}
        {value}
      </div>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  );
}
