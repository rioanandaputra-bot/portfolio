"use client";

import { personalInfo } from "@/constants/personalData";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about-me");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/#about-me", id: "about-me" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Experience", href: "/#experience-preview", id: "experience-preview" },
    { name: "Projects", href: "/#projects-preview", id: "projects-preview" },
    { name: "Reviews", href: "/#testimonials", id: "testimonials" },
    { name: "Blog", href: "/#blog-preview", id: "blog-preview" },
    { name: "Contact", href: "/#contact-preview", id: "contact-preview" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: personalInfo.social.instagram,
      icon: "/5296765_camera_instagram_instagram logo_icon.png",
    },
    {
      name: "GitHub", 
      href: personalInfo.social.github,
      icon: "/github-142-svgrepo-com.svg",
    },
    {
      name: "Discord",
      href: personalInfo.social.discord, 
      icon: "/discord.svg",
    },
  ];

  return (
    <nav
      className={`w-full h-[85px] fixed top-0 shadow-lg z-50 px-10 transition-all duration-500 ${
        isScrolled 
          ? 'shadow-[#2A0E61]/80 bg-[#030014ee] backdrop-blur-xl border-b border-[#7042f861]' 
          : 'shadow-[#2A0E61]/50 bg-[#030014cc] backdrop-blur-lg'
      }`}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/#about-me" className="h-auto w-auto flex flex-row items-center group">
          <div className="relative hover:scale-110 transition-transform duration-300">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer"
            />
            <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </div>
          <span className="font-bold ml-[10px] hidden md:block text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
            {personalInfo.name}
          </span>
        </Link>

        <div className="w-[900px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f8aa] bg-[#030014ee] mr-[15px] px-[16px] py-[10px] rounded-full text-gray-200 text-sm backdrop-blur-xl hover:bg-[#030014ff] hover:border-[#7042f8dd] transition-all duration-300 shadow-lg shadow-black/20">
            {navItems.map((item) => (
              <div key={item.id}>
                <Link 
                  href={item.href} 
                  className={`cursor-pointer transition-all duration-300 px-3 py-2 rounded-md relative group font-medium text-sm ${
                    activeSection === item.id 
                      ? 'text-purple-400' 
                      : 'text-gray-200 hover:text-white'
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <span className="relative z-10 drop-shadow-sm">{item.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {socialLinks.map((social) => 
            social.href ? (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="cursor-pointer filter hover:brightness-125 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#0300148a] text-white text-xs px-2 py-1 rounded border border-[#7042f861] opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  {social.name}
                </div>
              </a>
            ) : null
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
