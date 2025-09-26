import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Performance monitoring
                function measurePerformance() {
                  if (typeof window !== 'undefined' && 'performance' in window) {
                    const observer = new PerformanceObserver((list) => {
                      for (const entry of list.getEntries()) {
                        if (entry.entryType === 'navigation') {
                          const nav = entry;
                          console.log('Page Load Time:', nav.loadEventEnd - nav.fetchStart);
                        }

                        if (entry.entryType === 'largest-contentful-paint') {
                          console.log('LCP:', entry.startTime);
                        }

                        if (entry.entryType === 'first-input') {
                          console.log('FID:', entry.processingStart - entry.startTime);
                        }
                      }
                    });

                    try {
                      observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint', 'first-input'] });
                    } catch (e) {
                      // Observer not supported
                    }
                  }
                }

                // Resource hints for critical resources
                function addResourceHints() {
                  if (typeof document !== 'undefined') {
                    const preloadLinks = [
                      '/blackhole.webm',
                      '/optimized/next-website.webp',
                    ];

                    preloadLinks.forEach(function(href) {
                      const link = document.createElement('link');
                      link.rel = 'preload';
                      link.as = href.endsWith('.webm') ? 'video' : 'image';
                      link.href = href;
                      document.head.appendChild(link);
                    });
                  }
                }

                if (typeof window !== 'undefined') {
                  window.addEventListener('load', function() {
                    measurePerformance();
                    addResourceHints();
                  });
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
