import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider, THEME_BOOT_SCRIPT } from "./context/ThemeContext";

// Rational Text for everything; Rational Display for large headlines (as in the hotel and admin apps).
const rational = localFont({
  src: [
    { path: "../public/font/rational/RationalText-Book.ttf", weight: "400", style: "normal" },
    { path: "../public/font/rational/RationalText-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/font/rational/RationalText-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/font/rational/RationalText-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-rational",
});

const rationalDisplay = localFont({
  src: [
    { path: "../public/font/rational/RationalDisplay-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/font/rational/RationalDisplay-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/font/rational/RationalDisplay-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-rational-display",
});

const description =
  "Book hotels you can trust. Every hotel on Andinoh is visited and checked by an independent Andinoh inspector before you can book it.";

export const metadata: Metadata = {
  metadataBase: new URL("https://andinoh.com"),
  title: {
    default: "Andinoh: book a trusted hotel stay",
    template: "%s · Andinoh",
  },
  description,
  keywords: [
    "hotel booking Nigeria",
    "verified hotels",
    "trusted hotels Lagos",
    "hotel management software",
    "hotel PMS Africa",
    "pay at hotel",
  ],
  applicationName: "Andinoh",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://andinoh.com",
    siteName: "Andinoh",
    title: "Andinoh: book a trusted hotel stay",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Andinoh: book a trusted hotel stay",
    description,
    creator: "@andinoh",
  },
  icons: {
    icon: [{ url: "/logos/favicon.ico" }],
    apple: [{ url: "/logos/ANDINOH-FAV.jpg" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F6F9" },
    { media: "(prefers-color-scheme: dark)", color: "#0C111D" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // data-theme is set by the boot script before React hydrates, so the server's markup differs on purpose.
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
      </head>
      {/* Extensions such as Grammarly add attributes to <body> before React loads; ignore them. */}
      <body className={`${rational.variable} ${rationalDisplay.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <div id="top" />
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-bg focus:px-4 focus:py-2 focus:text-sm focus:text-ink focus:ring-2 focus:ring-brand/40">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
