/**
 * Everything on the site that changes as Andinoh gets closer to launch: edit it here, not in the pages.
 */

/** How far along the launch is, 0–100. Move it as you go; a bar stuck at one number reads as fake. */
export const LAUNCH_PROGRESS = 60;

export const WAITLIST_OFFER = {
  headline: "10% off your first 2 bookings",
  terms: "For guests who join the waitlist before launch. Applies to your first two Andinoh bookings.",
};

export const CONTACT = {
  email: "support@andinoh.com",
  whatsapp: { label: "+44 7400 730594", href: "https://wa.me/447400730594" },
  phone: { label: "+234 707 972 6698", href: "tel:+2347079726698" },
  city: "Lagos, Nigeria",
};

export const SOCIALS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/109459638/", icon: "/icons/linkedin.svg" },
  { name: "Instagram", href: "https://www.instagram.com/andinoh_/", icon: "/icons/instagram.svg" },
  { name: "TikTok", href: "https://www.tiktok.com/@andinoh0", icon: "/icons/tiktok.svg" },
];

export interface PhotoSlot {
  /** Path under /public, e.g. "/images/hotels/lobby.jpg". Leave null to show the placeholder. */
  src: string | null;
  alt: string;
  /** What photo belongs here; shown on the placeholder until one is added. */
  hint: string;
}

/**
 * Photo slots. Drop files in public/images/hotels/ (JPG or WebP, about 2000px on the long side) and set
 * `src`. Only use photos of hotels Andinoh has vetted, with the hotel's permission.
 */
export const PHOTOS = {
  hero: { src: null, alt: "A vetted Andinoh hotel", hint: "Hero: a bright room or lobby, portrait 4:5" },
  heroDetail: { src: null, alt: "Hotel room detail", hint: "Room detail, square" },
  inspection: { src: null, alt: "An Andinoh inspector on a hotel visit", hint: "Inspector on a visit, landscape 4:3" },
  gallery: [
    { src: null, alt: "Hotel room", hint: "Guest room" },
    { src: null, alt: "Hotel lobby", hint: "Lobby or reception" },
    { src: null, alt: "Hotel exterior", hint: "Exterior or pool" },
    { src: null, alt: "Hotel restaurant", hint: "Restaurant or lounge" },
    { src: null, alt: "Hotel bathroom", hint: "Bathroom" },
  ],
  hotelsHero: { src: null, alt: "Hotel front desk team", hint: "Front desk team at work, landscape 4:3" },
  hotelsApp: { src: null, alt: "The Andinoh hotel app on a laptop", hint: "Screenshot of the hotel app dashboard, 16:10" },
  about: { src: null, alt: "The Andinoh team", hint: "Team or founders, landscape 3:2" },
} satisfies Record<string, PhotoSlot | PhotoSlot[]>;
