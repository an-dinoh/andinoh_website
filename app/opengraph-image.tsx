import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// The link preview for every page (WhatsApp, LinkedIn, X). Twitter falls back to it too.
export const alt = "Andinoh: book a trusted hotel stay";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const font = await readFile(join(process.cwd(), "public/font/rational/RationalDisplay-SemiBold.ttf"));
  const text = await readFile(join(process.cwd(), "public/font/rational/RationalText-Book.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0A3F66 0%, #071F33 100%)",
          color: "white",
          fontFamily: "Rational Text",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#FBB81F" }} />
          <div style={{ fontSize: 30, letterSpacing: 1 }}>ANDINOH</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontFamily: "Rational Display", fontSize: 84, lineHeight: 1.05, letterSpacing: -2 }}>
            Book a trusted hotel stay.
          </div>
          <div style={{ fontSize: 32, color: "rgba(255,255,255,0.75)", maxWidth: 900 }}>
            Every hotel is inspected in person by Andinoh before you can book it.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {["Inspected in person", "Pay now or at the hotel", "Coming soon"].map((t) => (
            <div key={t} style={{ display: "flex", padding: "10px 20px", borderRadius: 999, background: "rgba(255,255,255,0.12)", fontSize: 24 }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Rational Display", data: font, weight: 600, style: "normal" },
        { name: "Rational Text", data: text, weight: 400, style: "normal" },
      ],
    },
  );
}
