"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { personalInfo } from "@/constants/personalData";
import { Button } from "@/components/ui/Button";

const HeroContent = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = useMemo(() => [
    "Full Stack Developer",
    "React Specialist",
    "Node.js Expert",
    "UI/UX Enthusiast",
    "Mobile App Developer"
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

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
            {personalInfo.tagline}
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
            {personalInfo.highlights.slice(0, 4).map((highlight, index) => {
              const hasExperience = highlight.includes('3+');
              const hasProjects = highlight.includes('20+');
              const displayValue = hasExperience ? '3+' : hasProjects ? '20+' : '✨';
              const displayText = highlight.replace('3+ ', '').replace('20+ ', '');

              return (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:from-orange-400 group-hover:to-pink-400 transition-all duration-300">
                    {displayValue}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {displayText}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4 pt-4"
        >
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className="group relative overflow-hidden hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <span className="relative z-10">Start Collaboration</span>
          </Button>

          <Button
            href={personalInfo.resumeUrl}
            variant="outline"
            size="lg"
            isExternal
            className="backdrop-blur-sm"
          >
            Download Resume
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Technology icons and development tools illustration"
          height={650}
          width={650}
          priority
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjUwIiBoZWlnaHQ9IjY1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM3MDQyZjgiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNiNDliZmYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNjUwIiBoZWlnaHQ9IjY1MCIgZmlsbD0idXJsKCNhKSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
