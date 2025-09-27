"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the component is running on the client-side.
 * This helps prevent hydration mismatches by ensuring browser-specific
 * APIs are only accessed after client-side hydration is complete.
 * 
 * @returns boolean - true if running on client-side, false during SSR
 */
export const useIsClient = (): boolean => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};