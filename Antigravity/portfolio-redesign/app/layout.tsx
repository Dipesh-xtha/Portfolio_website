import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dipesh Shrestha | UI/UX Designer",
  description: "Creative and detail-oriented UI/UX Designer skilled in building intuitive interfaces and translating user needs into effective designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-grow pt-[72px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
