import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import PerformanceScript from "@/components/utils/PerformanceScript";
import { personalInfo } from "@/constants/personalData";

// Lazy load the star background for better initial page load
const StarsCanvas = dynamic(() => import("@/components/main/StarBackground"), {
  ssr: false,
  loading: () => null
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.bio,
  keywords: "Full Stack Developer, Web Developer, React, Next.js, Node.js, TypeScript, Portfolio",
  authors: [{ name: personalInfo.name }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://space-portfolio.vercel.app'),
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#030014" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
        <PerformanceScript />
      </body>
    </html>
  );
}
