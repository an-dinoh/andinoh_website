import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RevealObserver from "./components/RevealObserver";
import { ThemeProvider, THEME_BOOT_SCRIPT } from "./context/ThemeContext";

// Rational Text for everything; Rational Display for large headlines (as in the hotel and admin apps).
// Only the weights the site uses, as WOFF2 (about 40 KB each instead of 130 KB as TTF).
const rational = localFont({
  src: [
    { path: "../public/font/rational/RationalText-Book.woff2", weight: "400", style: "normal" },
    { path: "../public/font/rational/RationalText-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/font/rational/RationalText-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-rational",
  display: "swap",
});

const rationalDisplay = localFont({
  src: [
    { path: "../public/font/rational/RationalDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/font/rational/RationalDisplay-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-rational-display",
  display: "swap",
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
        {/* Photos come from Cloudinary: open the connection before the first image is requested. */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
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
          <RevealObserver />
        </ThemeProvider>
      </body>
    </html>
  );
}
