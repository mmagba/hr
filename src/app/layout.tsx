import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  title: "Enas-HR - העבודה הבאה שלך",
  description: "דרושים נציגי שירות ומכירה",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:bg-white focus:text-[#213988] focus:p-4 focus:rounded-md focus:shadow-md focus:outline-none focus:ring-2 focus:ring-[#213988]"
        >
          דלג לתוכן המרכזי
        </a>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
