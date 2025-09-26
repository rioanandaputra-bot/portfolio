// Performance monitoring utilities
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'production') {
    console.log(metric);

    // Send to analytics service (example: Google Analytics 4)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        custom_parameter_1: metric.value,
        custom_parameter_2: metric.id,
        custom_parameter_3: metric.name,
      });
    }
  }
};

// Client-side performance monitoring
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const nav = entry as PerformanceNavigationTiming;
          console.log('Page Load Time:', nav.loadEventEnd - nav.fetchStart);
        }

        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }

        if (entry.entryType === 'first-input') {
          const fid = entry as any;
          console.log('FID:', fid.processingStart - fid.startTime);
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint', 'first-input'] });
    } catch (e) {
      // Observer not supported
    }
  }
};

// Image lazy loading intersection observer
export const createImageObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    return new IntersectionObserver(callback, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });
  }
  return null;
};

// Resource hints for critical resources
export const addResourceHints = () => {
  if (typeof document !== 'undefined') {
    // Preload critical assets
    const preloadLinks = [
      '/blackhole.webm',
      '/optimized/next-website.webp',
    ];

    preloadLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = href.endsWith('.webm') ? 'video' : 'image';
      link.href = href;
      document.head.appendChild(link);
    });
  }
};