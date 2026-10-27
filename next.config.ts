import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Photos load from Cloudinary through their own loader; these settings cover the local fallback copies.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    // Fonts and photos in public/ never change under the same name: let browsers keep them for a year.
    const year = "public, max-age=31536000, immutable";
    return [
      { source: "/font/:path*", headers: [{ key: "Cache-Control", value: year }] },
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: year }] },
      { source: "/logos/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=604800" }] },
    ];
  },
};

export default nextConfig;
