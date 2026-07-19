import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./__components/Header";
import Footer from "./__components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SohayakAI – Revolutionize Customer Service with AI",
  description: "SohayakAI is Bangladesh's leading AI-powered customer care assistant. Available 100% in Bangla with 98.9% accuracy. Serving 28+ million users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50">
         <Header />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
