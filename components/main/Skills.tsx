"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const skillCategories = {
    frontend: {
      name: "Frontend",
      icon: "🎨",
      skills: [...Skill_data, ...Frontend_skill],
      color: "from-purple-500 to-pink-500",
      description: "Creating beautiful, responsive user interfaces"
    },
    backend: {
      name: "Backend",
      icon: "⚡",
      skills: Backend_skill,
      color: "from-blue-500 to-cyan-500",
      description: "Building robust server-side applications"
    },
    fullstack: {
      name: "Full Stack",
      icon: "🚀",
      skills: Full_stack,
      color: "from-green-500 to-emerald-500",
      description: "End-to-end application development"
    },
    tools: {
      name: "Tools & Others",
      icon: "🛠️",
      skills: Other_skill,
      color: "from-orange-500 to-red-500",
      description: "Development tools and technologies"
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const tabVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    hover: { 
      scale: 1.1, 
      rotateY: 10,
      z: 50,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const SkillCard = ({ skill, index }: { skill: any, index: number }) => (
    <motion.div
      variants={skillVariants}
      whileHover="hover"
      className="relative group cursor-pointer"
      onMouseEnter={() => setHoveredSkill(index)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="relative p-4 bg-gradient-to-br from-[#0300145e] to-[#0300148a] border border-[#7042f861] rounded-2xl backdrop-blur-sm transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/20">
        <div className="flex flex-col items-center space-y-3">
          <motion.div 
            className="relative"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={skill.Image}
              alt={skill.skill_name}
              width={skill.width || 60}
              height={skill.height || 60}
              className="object-contain filter group-hover:brightness-110 transition-all duration-300"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </motion.div>
          <h3 className="text-white text-sm font-medium text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
            {skill.skill_name}
          </h3>
        </div>

        {/* Floating tooltip */}
        <AnimatePresence>
          {hoveredSkill === index && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: -10, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs px-3 py-1 rounded-lg shadow-lg z-20"
            >
              <div className="text-center font-medium">{skill.skill_name}</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );

  return (
    <section
      id="skills"
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden py-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#0300145e] to-[#0300148a] border border-[#7042f861] rounded-full backdrop-blur-sm">
            <SparklesIcon className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300 text-sm font-medium">Technical Expertise</span>
          </div>
        </div>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A comprehensive toolkit for building modern, scalable applications
        </motion.p>
      </motion.div>

      {/* Category Navigation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap justify-center gap-4 mb-12 relative z-10"
      >
        {Object.entries(skillCategories).map(([key, category]) => (
          <motion.button
            key={key}
            variants={tabVariants}
            onClick={() => setActiveCategory(key)}
            className={`relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
              activeCategory === key
                ? 'text-white bg-gradient-to-r from-purple-600 to-cyan-600 shadow-lg shadow-purple-500/25'
                : 'text-gray-400 hover:text-white bg-[#0300145e] border border-[#7042f861] hover:border-purple-500/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </span>
            {activeCategory === key && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600"
                style={{ zIndex: -1 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Category Description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center mb-8 relative z-10"
        >
          <p className="text-gray-300 text-lg">
            <span className="text-2xl mr-2">
              {skillCategories[activeCategory as keyof typeof skillCategories].icon}
            </span>
            {skillCategories[activeCategory as keyof typeof skillCategories].description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Skills Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6"
          >
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <SkillCard key={`${activeCategory}-${index}`} skill={skill} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl mx-auto px-4 relative z-10"
      >
        {[
          { label: "Technologies", value: "20+", icon: "💻" },
          { label: "Years Experience", value: "3+", icon: "🚀" },
          { label: "Projects Built", value: "50+", icon: "🎯" },
          { label: "Happy Clients", value: "25+", icon: "😊" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="text-center p-6 bg-gradient-to-br from-[#0300145e] to-[#0300148a] border border-[#7042f861] rounded-2xl backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-1">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated particles - reduced for performance */}
        {isMounted && [...Array(10)].map((_, i) => {
          // Use deterministic values based on index to avoid hydration issues
          const seedX1 = (i * 123) % 1200;
          const seedX2 = ((i + 1) * 456) % 1200;
          const seedY1 = (i * 789) % 800;
          const seedY2 = ((i + 2) * 321) % 800;
          const duration = 15 + (i % 5);
          const delay = i * 0.5;
          const leftPos = (i * 37) % 100;
          const topPos = (i * 63) % 100;

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500 rounded-full"
              animate={{
                x: [seedX1, seedX2],
                y: [seedY1, seedY2],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "linear"
              }}
              style={{
                left: leftPos + '%',
                top: topPos + '%',
              }}
            />
          );
        })}

        {/* Background video */}
        <div className="absolute inset-0 z-[-10] opacity-20">
          <video
            className="w-full h-full object-cover"
            preload="metadata"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
      </div>
    </section>
  );
};

export default Skills;