"use client";

import { personalInfo } from "@/constants/personalData";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position for navbar background opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items with better organization
  const navItems = [
    { name: "Home", href: "/#about-me", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Experience", href: "/experience", id: "experience" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Reviews", href: "/#testimonials", id: "testimonials" },
    { name: "Blog", href: "/blog", id: "blog" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  // Social media links with icons
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

  // Animation variants for navbar elements
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
        delay: 0.2
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.4
      }
    }
  };

  const navItemsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.8
      }
    }
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`w-full h-[65px] fixed top-0 shadow-lg z-50 px-10 transition-all duration-500 ${
        isScrolled 
          ? 'shadow-[#2A0E61]/80 bg-[#03001420] backdrop-blur-lg border-b border-[#7042f861]' 
          : 'shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md'
      }`}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo Section */}
        <Link
          href="/#about-me"
          className="h-auto w-auto flex flex-row items-center group"
        >
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="relative"
          >
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer"
            />
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </motion.div>

          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="font-bold ml-[10px] hidden md:block text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300"
          >
            {personalInfo.name}
          </motion.span>
        </Link>

        {/* Navigation Menu */}
        <div className="w-[900px] h-full flex flex-row items-center justify-between md:mr-20">
          <motion.div 
            variants={navItemsVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[15px] py-[10px] rounded-full text-gray-200 text-sm backdrop-blur-sm hover:bg-[#0300148a] hover:border-[#7042f8aa] transition-all duration-300"
          >
            {navItems.map((item, index) => (
              <motion.div key={item.id} variants={navItemVariants}>
                <Link 
                  href={item.href} 
                  className="cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 px-2 py-1 rounded-md hover:bg-purple-500/10 relative group"
                  onClick={() => setActiveSection(item.id)}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-md border border-purple-500/30"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 rounded-md transition-all duration-300"></div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div 
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-row gap-5"
        >
          {socialLinks.map((social, index) => 
            social.href ? (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.9 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="cursor-pointer filter hover:brightness-125 transition-all duration-300"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#0300148a] text-white text-xs px-2 py-1 rounded border border-[#7042f861] opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  {social.name}
                </div>
              </motion.a>
            ) : null
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;