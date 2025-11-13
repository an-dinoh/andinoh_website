import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LOGO - Empowering Students to Study Smarter",
  description:
    "Empowering students to achieve their academic goals through personalized schedules, AI-driven insights, and tools designed to simplify learning and boost productivity.",
  keywords: [
    "study app",
    "education",
    "student productivity",
    "AI learning",
    "study schedule",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${montserrat.className} antialiased bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
