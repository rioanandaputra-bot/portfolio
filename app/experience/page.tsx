"use client";

import { workExperience } from "@/constants/personalData";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { 
  ChevronRightIcon, 
  BriefcaseIcon, 
  SparklesIcon, 
  RocketLaunchIcon,
  StarIcon,
  GlobeAltIcon,
  LightBulbIcon,
  TrophyIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";

export default function ExperiencePage() {
  const [activeExperience, setActiveExperience] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'galaxy' | 'constellation'>('galaxy');
  const [isRotating, setIsRotating] = useState(true);
  const [showInstructions, setShowInstructions] = useState(true);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.7]);

  // Calculate career stats
  const totalYears = new Date().getFullYear() - 2020;
  const totalCompanies = workExperience.length;
  const totalProjects = workExperience.length * 8;

  // Create orbital positions for galaxy view
  const getOrbitalPosition = (index: number, total: number) => {
    const angle = (index * 360) / total;
    const radius = 220 + (index % 3) * 120; // Increased radius and varied orbits
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y, angle };
  };

  // Career journey path for constellation view
  const getConstellationPosition = (index: number) => {
    const positions = [
      { x: -300, y: 100 }, // Junior position
      { x: 0, y: -50 },    // Mid-level
      { x: 300, y: 150 },  // Senior position
    ];
    return positions[index] || { x: 0, y: 0 };
  };

  const planetColors = [
    'from-blue-500 to-purple-600',
    'from-green-500 to-teal-600', 
    'from-orange-500 to-red-600',
    'from-purple-500 to-pink-600',
    'from-cyan-500 to-blue-600'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const planetVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.8
      }
    }
  };

  const floatingAnimation = {
    y: [-20, 20, -20],
    x: [-10, 10, -10],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <main className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        {/* Stars */}
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Nebula Effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-20 px-4 max-w-7xl mx-auto">
        {/* Enhanced Hero Section */}
        <motion.div 
          ref={heroRef}
          style={{ y, opacity }}
          className="text-center py-16 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 leading-tight relative"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Career
              <motion.div
                className="inline-block ml-4"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <GlobeAltIcon className="w-16 h-16 md:w-24 md:h-24 text-cyan-400 inline" />
              </motion.div>
              <br />
              Galaxy
              <motion.div
                className="absolute -top-4 -right-8"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <SparklesIcon className="w-8 h-8 md:w-12 md:h-12 text-yellow-400" />
              </motion.div>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Explore my professional universe where each experience orbits like a planet in the cosmos of my career journey.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-semibold">
                Click on any planet to discover the story behind each role
              </span>
            </motion.p>

            {/* Interactive Instructions */}
            <AnimatePresence>
              {showInstructions && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 mb-8 max-w-3xl mx-auto relative"
                >
                  <button
                    onClick={() => setShowInstructions(false)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <LightBulbIcon className="w-5 h-5 text-yellow-400" />
                    How to Navigate My Career Galaxy
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <GlobeAltIcon className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Galaxy View:</strong> Experience planets orbit around my current journey</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <StarIcon className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Journey Path:</strong> Linear timeline showing career progression</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <ArrowPathIcon className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Rotation:</strong> Toggle planet rotation for dynamic or static view</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <BriefcaseIcon className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Click Planets:</strong> View detailed information about each role</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* View Mode Toggle */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <button
                onClick={() => setViewMode('galaxy')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 justify-center ${
                  viewMode === 'galaxy' 
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg' 
                    : 'border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white'
                }`}
              >
                <GlobeAltIcon className="w-5 h-5" />
                Galaxy View
                <span className="text-xs opacity-75 ml-2">Interactive Orbits</span>
              </button>
              <button
                onClick={() => setViewMode('constellation')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 justify-center ${
                  viewMode === 'constellation' 
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg' 
                    : 'border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white'
                }`}
              >
                <StarIcon className="w-5 h-5" />
                Journey Path
                <span className="text-xs opacity-75 ml-2">Timeline View</span>
              </button>
              <button
                onClick={() => setIsRotating(!isRotating)}
                className="px-6 py-3 rounded-xl font-semibold border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <ArrowPathIcon className={`w-5 h-5 ${isRotating ? 'animate-spin' : ''}`} />
                {isRotating ? 'Stop Rotation' : 'Start Rotation'}
              </button>
            </motion.div>

            {/* Career Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm border border-purple-500/20 p-6 rounded-xl">
                <TrophyIcon className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                <div className="text-4xl font-bold text-purple-400 mb-2">{totalYears}+</div>
                <div className="text-gray-300">Light-Years of Experience</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-sm border border-cyan-500/20 p-6 rounded-xl">
                <RocketLaunchIcon className="w-8 h-8 text-cyan-400 mb-3 mx-auto" />
                <div className="text-4xl font-bold text-cyan-400 mb-2">{totalCompanies}</div>
                <div className="text-gray-300">Cosmic Organizations</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 backdrop-blur-sm border border-pink-500/20 p-6 rounded-xl">
                <LightBulbIcon className="w-8 h-8 text-pink-400 mb-3 mx-auto" />
                <div className="text-4xl font-bold text-pink-400 mb-2">{totalProjects}+</div>
                <div className="text-gray-300">Stellar Projects</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Link 
                href="/#experience-preview" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl hover:from-purple-700 hover:to-cyan-600 font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25"
              >
                <RocketLaunchIcon className="w-5 h-5" />
                Return to Earth (Home)
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Career Galaxy/Constellation */}
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative min-h-[900px] lg:min-h-[1000px] flex items-center justify-center mb-20 px-4"
        >
          {/* Interaction Hint */}
          {activeExperience === null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute top-10 left-1/2 transform -translate-x-1/2 z-30"
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl px-6 py-3 text-center">
                <motion.p 
                  className="text-white text-sm font-medium"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀 Click on any planet to explore that experience!
                </motion.p>
              </div>
            </motion.div>
          )}
          {/* Galaxy View */}
          <AnimatePresence mode="wait">
            {viewMode === 'galaxy' ? (
              <motion.div
                key="galaxy"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-4xl aspect-square"
              >
                {/* Central Sun (Current Role) */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  animate={isRotating ? { rotate: [0, 360] } : {}}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 to-orange-500/50 rounded-full animate-pulse"></div>
                    <div className="relative z-10 text-center">
                      <RocketLaunchIcon className="w-8 h-8 text-white mx-auto mb-1" />
                      <div className="text-white text-xs font-bold">Current</div>
                      <div className="text-white text-xs">Journey</div>
                    </div>
                    {/* Sun Rays */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-12 bg-gradient-to-t from-yellow-400 to-transparent"
                        style={{
                          top: -24,
                          left: '50%',
                          transformOrigin: 'bottom center',
                          transform: `translateX(-50%) rotate(${i * 45}deg)`,
                        }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Orbiting Experience Planets */}
                {workExperience.map((job, index) => {
                  const position = getOrbitalPosition(index, workExperience.length);
                  const planetColor = planetColors[index % planetColors.length];
                  
                  return (
                    <motion.div
                      key={job.id}
                      variants={planetVariants}
                      className="absolute"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={isRotating ? {
                        x: position.x,
                        y: position.y,
                        rotate: [0, 360],
                      } : {
                        x: position.x,
                        y: position.y,
                      }}
                      transition={{
                        rotate: {
                          duration: 40 + (index * 5),
                          repeat: Infinity,
                          ease: "linear"
                        },
                        x: {
                          duration: 20 + (index * 3),
                          repeat: Infinity,
                          ease: "linear"
                        },
                        y: {
                          duration: 20 + (index * 3), 
                          repeat: Infinity,
                          ease: "linear"
                        }
                      }}
                      whileHover={{ scale: 1.2, zIndex: 30 }}
                      onClick={() => setActiveExperience(index)}
                    >
                      {/* Orbital Path */}
                      <div 
                        className="absolute border border-purple-500/20 rounded-full"
                        style={{
                          width: position.x > 0 ? position.x * 2 : Math.abs(position.x) * 2,
                          height: position.y > 0 ? position.y * 2 : Math.abs(position.y) * 2,
                          left: position.x > 0 ? -position.x : -Math.abs(position.x),
                          top: position.y > 0 ? -position.y : -Math.abs(position.y),
                        }}
                      />
                      
                      {/* Planet */}
                      <motion.div
                        className={`w-24 h-24 rounded-full bg-gradient-to-br ${planetColor} cursor-pointer relative overflow-hidden shadow-xl transform -translate-x-1/2 -translate-y-1/2 group`}
                        whileHover={{ 
                          scale: 1.2,
                          boxShadow: "0 0 40px rgba(147, 51, 234, 0.8)"
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {/* Planet Surface Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                        <div className="absolute inset-3 border border-white/40 rounded-full"></div>
                        
                        {/* Planet Core Glow */}
                        <div className="absolute inset-6 bg-white/20 rounded-full animate-pulse"></div>
                        
                        {/* Click Indicator */}
                        <motion.div
                          className="absolute inset-0 border-2 border-white/60 rounded-full scale-110 opacity-0 group-hover:opacity-100"
                          animate={{ scale: [1.1, 1.4, 1.1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        {/* Simple Planet Icon - Clean & Readable */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BriefcaseIcon className="w-8 h-8 text-white drop-shadow-lg" />
                        </div>

                        {/* Experience Level Badge - Outside Planet */}
                        <motion.div 
                          className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-sm font-bold text-white border-2 border-white shadow-lg"
                          whileHover={{ scale: 1.1 }}
                        >
                          {index + 1}
                        </motion.div>

                        {/* Planet Rings for Senior Roles */}
                        {index >= 1 && (
                          <>
                            <div className="absolute inset-0 border-2 border-purple-400/40 rounded-full scale-125 animate-pulse"></div>
                            {index >= 2 && (
                              <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full scale-150 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            )}
                          </>
                        )}
                      </motion.div>

                      {/* Planet Information Card - Floating Outside */}
                      <motion.div
                        className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 z-50"
                        initial={{ opacity: 0.8, y: 10 }}
                        whileHover={{ opacity: 1, y: 0, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-purple-500/30 rounded-xl px-4 py-3 min-w-max shadow-2xl">
                          <div className="text-center">
                            {/* Company Name */}
                            <div className="text-cyan-300 font-bold text-sm mb-1">
                              {job.company}
                            </div>
                            
                            {/* Job Title */}
                            <div className="text-white font-semibold text-xs mb-2 leading-tight">
                              {job.title}
                            </div>
                            
                            {/* Period */}
                            <div className="text-gray-400 text-xs mb-2">
                              {job.period}
                            </div>
                            
                            {/* Role Level Badge */}
                            <div className="inline-block bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              {job.title.includes('Senior') ? '🚀 Senior' : 
                               job.title.includes('Lead') ? '👑 Lead' : 
                               job.title.includes('Junior') ? '🌱 Junior' : 
                               '💼 Professional'}
                            </div>
                            
                            {/* Top Technologies */}
                            <div className="flex flex-wrap gap-1 mt-2 justify-center">
                              {job.technologies.slice(0, 2).map((tech, techIndex) => (
                                <span 
                                  key={techIndex}
                                  className="text-[10px] bg-purple-600/30 text-purple-200 px-2 py-1 rounded-full border border-purple-500/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            {/* Click to Explore Hint */}
                            <motion.div 
                              className="text-yellow-300 text-xs mt-2 flex items-center justify-center gap-1"
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <span>✨</span>
                              Click to explore
                            </motion.div>
                          </div>
                          
                          {/* Card Arrow Pointer to Planet */}
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45 border-l border-t border-purple-500/30"></div>
                        </div>
                      </motion.div>

                      {/* Connecting Lines to Center */}
                      <div 
                        className="absolute border-t border-dashed border-cyan-400/30"
                        style={{
                          width: Math.sqrt(position.x * position.x + position.y * position.y),
                          transformOrigin: 'left center',
                          transform: `rotate(${Math.atan2(position.y, position.x) * 180 / Math.PI}deg)`,
                          left: -Math.sqrt(position.x * position.x + position.y * position.y) / 2,
                          top: -0.5,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              /* Constellation View */
              <motion.div
                key="constellation"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-6xl"
              >
                {/* Career Journey Path */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                  <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  
                  <motion.path
                    d="M 200 400 Q 400 200 600 300 T 1000 200"
                    fill="none"
                    stroke="url(#pathGradient)"
                    strokeWidth="3"
                    strokeDasharray="10,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                </svg>

                {/* Experience Constellation Points */}
                <div className="relative z-10 flex items-center justify-between h-96">
                  {workExperience.map((job, index) => {
                    const sizes = ['w-16 h-16', 'w-20 h-20', 'w-24 h-24'];
                    const size = sizes[Math.min(index, 2)];
                    const planetColor = planetColors[index % planetColors.length];
                    
                    return (
                      <motion.div
                        key={job.id}
                        variants={planetVariants}
                        className="relative flex flex-col items-center"
                        whileHover={{ y: -10 }}
                        onClick={() => setActiveExperience(index)}
                      >
                        {/* Star/Planet */}
                        <motion.div
                          className={`${size} rounded-full bg-gradient-to-br ${planetColor} cursor-pointer relative overflow-hidden shadow-2xl flex items-center justify-center mb-6 border-2 border-white/30`}
                          whileHover={{ 
                            scale: 1.2,
                            boxShadow: "0 0 50px rgba(147, 51, 234, 0.9)"
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {/* Experience Level Badge */}
                          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-sm font-bold text-white border-2 border-white shadow-lg">
                            {index + 1}
                          </div>

                          {/* Star Pattern - Larger and cleaner */}
                          <StarIcon className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                          
                          {/* Pulsing Ring */}
                          <motion.div
                            className="absolute inset-0 border-3 border-white/60 rounded-full"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.3, 0.8] }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                          />
                          
                          {/* Secondary Ring for Senior Roles */}
                          {index >= 1 && (
                            <motion.div
                              className="absolute inset-0 border-2 border-purple-400/50 rounded-full scale-110"
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                          )}
                        </motion.div>

                        {/* Enhanced Star Info Card */}
                        <div className="text-center bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl px-4 py-3 rounded-xl border border-purple-500/30 shadow-xl min-w-[200px]">
                          <h3 className="text-base font-bold text-white mb-2 leading-tight">{job.title}</h3>
                          <p className="text-sm text-cyan-300 font-semibold mb-1">{job.company}</p>
                          <p className="text-xs text-gray-400 mb-3">{job.period}</p>
                          
                          {/* Role Level Indicator */}
                          <div className="inline-block bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                            {job.title.includes('Senior') ? '🚀 Senior Level' : 
                             job.title.includes('Lead') ? '👑 Leadership' : 
                             job.title.includes('Junior') ? '🌱 Junior Level' : 
                             '💼 Professional'}
                          </div>
                          
                          {/* Top Technologies */}
                          <div className="flex flex-wrap gap-1 justify-center">
                            {job.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="text-xs bg-purple-600/20 text-purple-200 px-2 py-1 rounded-full border border-purple-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          {/* Click Hint */}
                          <motion.div 
                            className="text-yellow-300 text-xs mt-2 flex items-center justify-center gap-1"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <span>✨</span>
                            Click for full details
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Experience Detail Panel */}
          <AnimatePresence>
            {activeExperience !== null && workExperience[activeExperience] && (
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 md:p-6 shadow-2xl z-50 max-w-4xl mx-auto max-h-[80vh] overflow-y-auto"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${planetColors[activeExperience % planetColors.length]} flex flex-col items-center justify-center border-2 border-white/20 relative`}>
                      <BriefcaseIcon className="w-6 h-6 text-white mb-1" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-xs font-bold text-white border-2 border-white">
                        {activeExperience + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{workExperience[activeExperience].title}</h3>
                      <p className="text-cyan-300 font-semibold text-lg">{workExperience[activeExperience].company}</p>
                      <p className="text-gray-400 text-sm flex items-center gap-2">
                        <span>{workExperience[activeExperience].period}</span>
                        {workExperience[activeExperience].location && (
                          <>
                            <span>•</span>
                            <span>{workExperience[activeExperience].location}</span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveExperience(null)}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-2xl font-bold hover:scale-110 transform"
                    title="Close details"
                  >
                    ✕
                  </button>
                </div>

                {/* Summary with better formatting */}
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/20">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4 text-yellow-400" />
                    Role Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{workExperience[activeExperience].summary || 'Experience details available in full view.'}</p>
                </div>

                {/* Technologies with better organization */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <RocketLaunchIcon className="w-4 h-4 text-cyan-400" />
                    Technologies & Tools
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {workExperience[activeExperience].technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        className="px-3 py-2 text-xs bg-gradient-to-r from-purple-600/30 to-cyan-600/30 text-purple-200 rounded-lg border border-purple-500/20 text-center font-medium hover:from-purple-600/50 hover:to-cyan-600/50 transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href={`/experience/${workExperience[activeExperience].slug}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg hover:from-purple-700 hover:to-cyan-600 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    <RocketLaunchIcon className="w-4 h-4" />
                    Explore Full Details
                    <ChevronRightIcon className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => setActiveExperience(null)}
                    className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-lg hover:border-red-500 hover:text-red-400 hover:bg-red-500/10 font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>✕</span>
                    Close Details
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating Help Button */}
      <motion.button
        onClick={() => setShowInstructions(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-purple-500/25 hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center z-40 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <LightBulbIcon className="w-6 h-6 group-hover:animate-pulse" />
        <motion.div
          className="absolute -top-12 right-0 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
        >
          Show Instructions
        </motion.div>
      </motion.button>

      {/* Loading State for Better UX */}
      {workExperience.length === 0 && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#030014] z-50">
          <div className="text-center">
            <motion.div
              className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-white text-lg">Loading Career Galaxy...</p>
          </div>
        </div>
      )}
    </main>
  );
}
