import { ReactNode } from "react";

interface ContactLinkProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function ContactLink({ href, icon, children }: ContactLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 text-red-700 hover:text-red-800 transition-colors"
    >
      {icon}
      <span className="font-medium">{children}</span>
    </a>
  );
}
