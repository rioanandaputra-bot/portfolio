"use client";

import { useEffect } from 'react';
import { measurePerformance, addResourceHints } from '@/utils/performance';

/**
 * Client-side performance monitoring component
 * Handles performance measurement and resource preloading
 */
export const PerformanceScript = () => {
  useEffect(() => {
    // Initialize performance monitoring and resource hints
    measurePerformance();
    addResourceHints();
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceScript;