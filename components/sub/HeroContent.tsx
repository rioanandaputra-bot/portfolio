"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { personalInfo } from "@/constants/personalData";

const HeroContent = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roles = [
    "Full Stack Developer",
    "React Specialist", 
    "Node.js Expert",
    "UI/UX Enthusiast",
    "Mobile App Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-6 md:px-20 mt-40 w-full z-[20] relative"
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/5 to-cyan-500/5 blur-3xl"
            animate={{
              x: mousePosition.x * (0.02 + i * 0.01),
              y: mousePosition.y * (0.02 + i * 0.01),
            }}
            transition={{ type: "spring", damping: 30, stiffness: 50 }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="h-full w-full flex flex-col gap-8 justify-center m-auto text-start relative z-10">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[12px] px-[20px] border border-[#7042f88b] opacity-[0.9] backdrop-blur-sm bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl hover:scale-105 transition-all duration-300"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 animate-pulse" />
          <h1 className="Welcome-text text-[14px] font-medium">
            ✨ {personalInfo.tagline}
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 max-w-[700px] w-auto h-auto"
        >
          <div className="text-5xl md:text-7xl font-bold text-white leading-tight">
            <span className="block">Hi, I&apos;m</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-cyan-500 hover:to-purple-500 transition-all duration-500">
              {personalInfo.name}
            </span>
          </div>
          
          <div className="text-2xl md:text-3xl font-semibold h-16 flex items-center">
            <span className="text-gray-400 mr-2">I&apos;m a</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 font-bold"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="space-y-6"
        >
          <p className="text-lg text-gray-300 max-w-[700px] leading-relaxed">
            {personalInfo.bio}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
            {personalInfo.highlights.slice(0, 4).map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:from-orange-400 group-hover:to-pink-400 transition-all duration-300">
                  {highlight.includes('3+') && '3+'}
                  {highlight.includes('20+') && '20+'}
                  {!highlight.includes('+') && '✨'}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {highlight.replace('3+ ', '').replace('20+ ', '')}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4 pt-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative py-3 px-8 bg-gradient-to-r from-purple-600 to-cyan-600 text-white cursor-pointer rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <span className="relative z-10">Start Collaboration</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
          
          <motion.a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 px-8 border-2 border-purple-500/50 text-purple-300 cursor-pointer rounded-xl font-semibold hover:border-purple-400 hover:text-white hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
