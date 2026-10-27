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

/** The backend's Cloudinary account; the website's photos live in its andinoh/website folder. */
export const CLOUDINARY_CLOUD = "dciywfclz";

export interface Photo {
  /** Cloudinary path after /upload/ (version and public id). Loaded first, resized and in the best format. */
  cloud: string;
  /** Local copy in public/, used if Cloudinary can't be reached. */
  src: string;
  /** Key into PHOTO_BLUR. */
  name: string;
  alt: string;
}

const photo = (name: string, version: number, alt: string): Photo => ({
  cloud: `v${version}/andinoh/website/${name}.jpg`,
  src: `/images/photos/${name}.jpg`,
  name,
  alt,
});

/**
 * Photos: Unsplash stock (Unsplash License; no attribution required, credited here anyway), not
 * Andinoh-inspected hotels; swap in photos of vetted hotels when you have them. To change one, upload it to
 * Cloudinary as andinoh/website/<name>, put the new version here, and replace the local copy and its blur.
 */
export const PHOTOS = {
  // Bilderboken
  poolDeck: photo("pool-deck", 1793117228, "Sunloungers beside a hotel pool at sunset"),
  // Linus Mimietz
  roomPortrait: photo("room-portrait", 1793117237, "A calm hotel room with soft lighting"),
  // Oswald Elsaboath
  frontDesk: photo("front-desk", 1793117251, "Hotel reception desk with staff"),
  // Chastity Cortijo
  roomBlue: photo("room-blue", 1793117252, "Hotel bedroom with a blue headboard"),
  // Frames For Your Heart
  lobby: photo("lobby", 1793117254, "Modern hotel lobby with wood-slat walls"),
  // The Anam
  poolPalms: photo("pool-palms", 1793117255, "Lounge chairs by a palm-lined pool at dusk"),
  // Francesca Saraco
  building: photo("hotel-building", 1793117256, "A white hotel building with balconies and palm trees"),
  // visualsofdana
  gardenRoom: photo("garden-room", 1793117257, "A hotel bedroom with a garden view"),
} satisfies Record<string, Photo>;
