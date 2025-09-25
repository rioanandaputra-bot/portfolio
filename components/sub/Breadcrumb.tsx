"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  items?: Array<{
    label: string;
    href: string;
  }>;
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const pathname = usePathname();
  
  // Generate breadcrumb items based on pathname if not provided
  const generateBreadcrumbItems = () => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbItems = [
      { label: 'Home', href: '/' }
    ];

    pathSegments.forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      breadcrumbItems.push({ label, href });
    });

    return breadcrumbItems;
  };

  const breadcrumbItems = items || generateBreadcrumbItems();

  return (
    <nav className="flex items-center space-x-2 text-sm mb-8 px-6">
      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && (
            <span className="mx-2 text-gray-500">/</span>
          )}
          <Link
            href={item.href}
            className={`transition-colors ${
              index === breadcrumbItems.length - 1
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold'
                : 'text-gray-400 hover:text-purple-300'
            }`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;