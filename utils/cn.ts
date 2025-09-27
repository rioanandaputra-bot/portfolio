/**
 * Utility function for merging CSS classes
 * Simple class name utility without external dependencies
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}