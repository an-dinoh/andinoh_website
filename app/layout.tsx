import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Andinoh — Modern Hotel Management System | Smart Operations for Hotels, Resorts & Guests",
  description:
    "Andinoh is a modern hotel management system designed for both hotel staff and customers. It streamlines bookings, guest management, payments, customer self-service, staff workflows, and operational automation. Built for hotels, resorts, guest houses, and serviced apartments.",
  keywords: [
    "hotel management system",
    "hotel software",
    "property management system",
    "booking management",
    "hospitality software",
    "hotel automation",
    "PMS software",
    "hotel operations",
    "resort management software",
    "guest booking platform",
    "hotel customer portal",
  ],
  authors: [{ name: "Andinoh" }],
  creator: "Andinoh",
  publisher: "Andinoh",
  metadataBase: new URL("https://andinoh.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andinoh.com",
    title: "Andinoh — Modern Hotel Management System | Smart Operations for Hotels, Resorts & Guests",
    description:
      "Andinoh is a modern hotel management system designed for both hotel staff and customers. It streamlines bookings, guest management, payments, customer self-service, staff workflows, and operational automation.",
    siteName: "Andinoh",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Andinoh - Modern Hotel Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andinoh — Modern Hotel Management System | Smart Operations for Hotels, Resorts & Guests",
    description:
      "Andinoh is a modern hotel management system designed for both hotel staff and customers. It streamlines bookings, guest management, payments, customer self-service, staff workflows, and operational automation.",
    images: ["/twitter-image.png"],
    creator: "@andinoh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logos/ANDINOH-FAV.jpg" },
    ],
    apple: [{ url: "/logos/ANDINOH-FAV.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white overflow-x-hidden">
      <head>
        <link rel="icon" href="/logos/favicon.ico" />
        <link rel="shortcut icon" href="/logos/favicon.ico" />
      </head>
      <body className={`${poppins.className} antialiased bg-white overflow-x-hidden`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
