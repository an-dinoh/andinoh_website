import Image from "next/image";

/** The colour logo in light mode, the white one in dark mode; `inverse` is for the deep blue bands. */
export default function Logo({ inverse = false, className = "h-7 w-auto" }: { inverse?: boolean; className?: string }) {
  if (inverse) {
    return <Image src="/logos/ANDINOH WHITE.svg" alt="Andinoh" width={120} height={40} className={className} />;
  }
  return (
    <>
      <Image src="/logos/ANDINOH.svg" alt="Andinoh" width={120} height={40} priority className={`logo-light ${className}`} />
      <Image src="/logos/ANDINOH WHITE.svg" alt="Andinoh" width={120} height={40} priority className={`logo-dark ${className}`} />
    </>
  );
}
