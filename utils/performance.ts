// Performance monitoring utilities with proper typing
interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
  entries: PerformanceEntry[];
}

declare global {
  interface Window {
    gtag?: (command: "config" | "event" | "js" | "set", targetId: string | Date, config?: Record<string, any>) => void;
  }
}

export const reportWebVitals = (metric: WebVitalMetric): void => {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics service (example: Google Analytics 4)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', new Date(), {
        custom_parameter_1: metric.value,
        custom_parameter_2: metric.id,
        custom_parameter_3: metric.name,
      });
    }
  }
};

// Client-side performance monitoring with proper typing
export const measurePerformance = (): void => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const nav = entry as PerformanceNavigationTiming;
          // Only log in development
          if (process.env.NODE_ENV === 'development') {
            console.log('Page Load Time:', nav.loadEventEnd - nav.fetchStart);
          }
        }

        if (entry.entryType === 'largest-contentful-paint') {
          if (process.env.NODE_ENV === 'development') {
            console.log('LCP:', entry.startTime);
          }
        }

        if (entry.entryType === 'first-input') {
          const fid = entry as PerformanceEventTiming;
          if (process.env.NODE_ENV === 'development') {
            console.log('FID:', fid.processingStart - fid.startTime);
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint', 'first-input'] });
    } catch (error) {
      // Performance observer not supported in this browser
      if (process.env.NODE_ENV === 'development') {
        console.warn('PerformanceObserver not supported:', error);
      }
    }
  }
};

// Image lazy loading intersection observer with proper typing
export const createImageObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void
): IntersectionObserver | null => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    return new IntersectionObserver(callback, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });
  }
  return null;
};

// Resource hints for critical resources with better typing
export const addResourceHints = (): void => {
  if (typeof document !== 'undefined') {
    // Preload critical assets
    const preloadLinks: string[] = [
      '/blackhole.webm',
      '/optimized/next-website.webp',
    ];

    preloadLinks.forEach((href: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = href.endsWith('.webm') ? 'video' : 'image';
      link.href = href;
      document.head.appendChild(link);
    });
  }
};