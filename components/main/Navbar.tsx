"use client";

import { personalInfo } from "@/constants/personalData";
import Link from "next/link";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useIsClient } from "@/hooks/useIsClient";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isClient = useIsClient();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient, handleScroll]);

  // Simplified active section detection
  useEffect(() => {
    if (!isClient) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const id = entry.target.id;
            const sectionMap: { [key: string]: string } = {
              'about-me': 'home',
              'about': 'about', 
              'skills': 'skills',
              'experience-preview': 'experience',
              'projects-preview': 'projects',
              'testimonials': 'reviews',
              'blog-preview': 'blog',
              'contact-preview': 'contact'
            };
            if (sectionMap[id]) {
              setActiveSection(sectionMap[id]);
            }
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-80px 0px -80px 0px'
      }
    );

    const sections = ['about-me', 'about', 'skills', 'experience-preview', 'projects-preview', 'testimonials', 'blog-preview', 'contact-preview'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isClient]);

  const navItems = useMemo(() => [
    { name: "Home", href: "/#about-me", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Experience", href: "/#experience-preview", id: "experience" },
    { name: "Projects", href: "/#projects-preview", id: "projects" },
    { name: "Reviews", href: "/#testimonials", id: "reviews" },
    { name: "Blog", href: "/#blog-preview", id: "blog" },
    { name: "Contact", href: "/#contact-preview", id: "contact" },
  ], []);

  const socialLinks = useMemo(() => [
    {
      name: "GitHub",
      href: personalInfo.social.github,
      icon: "M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
    },
    {
      name: "LinkedIn",
      href: personalInfo.social.linkedin,
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      name: "Instagram",
      href: personalInfo.social.instagram,
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
    {
      name: "Discord",
      href: personalInfo.social.discord,
      icon: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z",
    },
  ], []);

  return (
    <nav
      className={`w-full h-[75px] fixed top-0 left-0 shadow-lg z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#03001430] backdrop-blur-lg border-b border-[#7042f861] shadow-[#2A0E61]/80'
          : 'bg-[#03001420] backdrop-blur-md shadow-[#2A0E61]/50'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/20 via-[#030014]/40 to-[#030014]/20"></div>
      
      <div className="w-full h-full flex items-center justify-between max-w-7xl mx-auto px-6 relative z-10">

        {/* Left side - Navigation Menu */}
        <div className="flex items-center">
          <div className="hidden md:flex items-center gap-1 bg-[#0300146e] px-4 py-2 rounded-full border border-[#7042f861] backdrop-blur-md hover:bg-[#0300148a] hover:border-[#7042f8aa] transition-all duration-300 shadow-lg shadow-[#2A0E61]/30">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`cursor-pointer transition-all duration-300 px-3 py-1.5 rounded-full relative group font-medium text-xs whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-[#7042f8]/90 to-[#b49bff]/70 border border-[#7042f8] shadow-md shadow-[#7042f8]/50 scale-105'
                    : 'text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-[#7042f8]/40 hover:to-[#b49bff]/30 hover:scale-105 border border-transparent'
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                <span className="relative z-10 font-semibold tracking-wide">{item.name}</span>

                {/* Active state glow */}
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7042f8]/20 to-[#b49bff]/20 rounded-full blur-sm animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Center - Logo/Brand (placeholder for future) */}
        <div className="flex-1 flex justify-center md:hidden">
          <span className="text-white font-bold text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {personalInfo.name.split(' ').map(word => word[0]).join('')}
          </span>
        </div>

        {/* Right side - Social Links and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Social Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social) =>
              social.href ? (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group hover:scale-110 transition-transform duration-300 p-2 rounded-full bg-[#7042f88b]/50 hover:bg-[#7042f8] border border-[#7042f861] hover:border-[#b49bff] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#030014]"
                  aria-label={`Visit ${social.name} profile`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white hover:text-[#b49bff] transition-colors duration-300"
                  >
                    <path d={social.icon} />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7042f8]/30 to-[#b49bff]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>

                  {/* Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-[#0300148a] text-white text-xs px-3 py-1.5 rounded-lg border border-[#7042f861] opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm whitespace-nowrap pointer-events-none z-50">
                    {social.name}
                    <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-[#0300148a]"></div>
                  </div>
                </a>
              ) : null
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-full bg-[#7042f88b] hover:bg-[#7042f8] transition-all duration-300 border border-[#7042f861] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#030014]"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center space-y-1">
              <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isClient && isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-[#030014]/90 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="absolute top-[75px] left-0 right-0 bg-[#030014]/95 backdrop-blur-2xl border-b border-[#7042f861] shadow-2xl shadow-[#2A0E61]/50">
            <div className="flex flex-col space-y-2 p-6">
              {/* Navigation Links */}
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`px-5 py-4 text-base font-medium rounded-xl transition-all duration-300 relative ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-[#7042f8]/80 to-[#b49bff]/60 border border-[#7042f8] shadow-lg shadow-[#7042f8]/50'
                      : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#7042f8]/30 hover:to-[#b49bff]/20 border border-transparent'
                  }`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#b49bff] rounded-full animate-pulse"></div>
                  )}
                </Link>
              ))}

              {/* Social Links for Mobile */}
              <div className="border-t border-[#7042f861] mt-4 pt-4">
                <p className="text-gray-400 text-sm mb-3 px-5">Connect with me</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social) =>
                    social.href ? (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group hover:scale-110 transition-transform duration-300 p-3 rounded-full bg-[#7042f88b]/50 hover:bg-[#7042f8] border border-[#7042f861] hover:border-[#b49bff]"
                        aria-label={`Visit ${social.name} profile`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-white hover:text-[#b49bff] transition-colors duration-300"
                        >
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-0 w-full pointer-events-none select-none" aria-hidden="true" />
    </nav>
  );
};

export default Navbar;
