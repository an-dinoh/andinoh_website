import type { MetadataRoute } from "next";

const BASE = "https://andinoh.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/hotels", "/about", "/contact", "/waitlist"].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
