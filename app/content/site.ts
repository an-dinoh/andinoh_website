/**
 * Everything on the site that changes as Andinoh gets closer to launch: edit it here, not in the pages.
 */

/** How far along the launch is, 0–100. Move it as you go; a bar stuck at one number reads as fake. */
export const LAUNCH_PROGRESS = 60;

export const WAITLIST_OFFER = {
  short: "10% off your first 2 bookings",
  terms: "For guests who join the waitlist before launch.",
};

export const CONTACT = {
  email: "support@andinoh.com",
  whatsapp: { label: "+44 7400 730594", href: "https://wa.me/447400730594" },
  phone: { label: "+234 707 972 6698", href: "tel:+2347079726698" },
  city: "Lagos, Nigeria",
};

export const SOCIALS = {
  instagram: "https://www.instagram.com/andinoh_/",
  linkedin: "https://www.linkedin.com/company/109459638/",
  tiktok: "https://www.tiktok.com/@andinoh0",
};

export interface Photo {
  src: string;
  alt: string;
}

/**
 * Photos in public/images/photos. They are Unsplash stock (Unsplash License; no attribution required,
 * credited here anyway), not Andinoh-inspected hotels: swap in photos of vetted hotels when you have them.
 */
export const PHOTOS = {
  // Bilderboken
  poolDeck: { src: "/images/photos/pool-deck.jpg", alt: "Sunloungers beside a hotel pool at sunset" },
  // Linus Mimietz
  roomPortrait: { src: "/images/photos/room-portrait.jpg", alt: "A calm hotel room with soft lighting" },
  // Oswald Elsaboath
  frontDesk: { src: "/images/photos/front-desk.jpg", alt: "Hotel reception desk with staff" },
  // Chastity Cortijo
  roomBlue: { src: "/images/photos/room-blue.jpg", alt: "Hotel bedroom with a blue headboard" },
  // Frames For Your Heart
  lobby: { src: "/images/photos/lobby.jpg", alt: "Modern hotel lobby with wood-slat walls" },
  // The Anam
  poolPalms: { src: "/images/photos/pool-palms.jpg", alt: "Lounge chairs by a palm-lined pool at dusk" },
  // Francesca Saraco
  building: { src: "/images/photos/hotel-building.jpg", alt: "A white hotel building with balconies and palm trees" },
  // visualsofdana
  gardenRoom: { src: "/images/photos/garden-room.jpg", alt: "A hotel bedroom with a garden view" },
} satisfies Record<string, Photo>;
