"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { personalInfo, interests, languages } from "@/constants/personalData";

const About = () => {
  const [activeTab, setActiveTab] = useState("journey");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentQuote, setCurrentQuote] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Unique quotes that show philosophy and personality
  const inspirationalQuotes = [
    {
      text: "Code is poetry written in logic, crafted with passion, and shared with purpose.",
      author: "Personal Philosophy"
    },
    {
      text: "Every bug is a teacher, every feature is a bridge, every user is a story waiting to be told.",
      author: "Development Mindset"
    },
    {
      text: "Innovation happens when curiosity meets persistence in the realm of endless possibilities.",
      author: "Growth Mindset"
    }
  ];

  // Unique achievements that don't repeat other sections
  const uniqueAchievements = [
    {
      icon: "🚀",
      title: "Performance Optimization",
      description: "Consistently improved application load times by 40-60% across multiple projects",
      metric: "40-60%",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: "🌟",
      title: "User Experience",
      description: "Increased user engagement rates through intuitive design and smooth interactions",
      metric: "95%",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: "🎯",
      title: "Code Quality",
      description: "Maintained high code standards with comprehensive testing and documentation",
      metric: "100%",
      color: "from-orange-500 to-pink-500"
    },
    {
      icon: "⚡",
      title: "Innovation Mindset",
      description: "Always exploring cutting-edge technologies and implementation strategies",
      metric: "∞",
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Personal philosophy and values
  const personalValues = [
    {
      title: "Continuous Learning",
      description: "Always expanding knowledge boundaries",
      icon: "📚"
    },
    {
      title: "Clean Architecture",
      description: "Writing maintainable, scalable code",
      icon: "🏗️"
    },
    {
      title: "User-Centric Design",
      description: "Prioritizing user experience in every decision",
      icon: "👥"
    },
    {
      title: "Innovation Focus",
      description: "Embracing new technologies and methodologies",
      icon: "💡"
    }
  ];

  // Mouse tracking for interactive background
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Auto-rotate quotes - optimized to only run when component is in view
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView, inspirationalQuotes.length]);

  const tabs = [
    { id: "journey", label: "My Journey", icon: "🚀" },
    { id: "philosophy", label: "Philosophy", icon: "💭" },
    { id: "interests", label: "Beyond Code", icon: "🌟" }
  ];

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center py-20 relative overflow-hidden"
      id="about"
      onMouseMove={handleMouseMove}
    >
      {/* Advanced Interactive Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dynamic particle system - Only animate when in view */}
        {isInView && [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/30 to-cyan-400/30 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              x: [0, Math.cos(i) * 100, Math.sin(i) * 50, 0],
              y: [0, Math.sin(i) * 100, Math.cos(i) * 50, 0],
              opacity: [0, 0.3, 0.8, 0.4, 0.3],
              scale: [0, 1, 1.5, 0.8, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 10}%`,
            }}
          />
        ))}
        
        {/* Floating gradient orbs that follow mouse with enhanced physics */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${120 + i * 20}px`,
              height: `${120 + i * 20}px`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)'
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, transparent 70%)',
              left: `${5 + i * 15}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={isInView ? {
              x: mousePosition.x * (0.015 + i * 0.008),
              y: mousePosition.y * (0.015 + i * 0.008),
              scale: [1, 1.3, 1.1, 1],
              rotate: [0, 180, 360],
            } : {}}
            transition={{ 
              x: { type: "spring", damping: 40, stiffness: 50 },
              y: { type: "spring", damping: 40, stiffness: 50 },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 10, repeat: Infinity, ease: "linear" }
            }}
          />
        ))}
        
        {/* Mesh gradient background */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y, opacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent via-transparent to-cyan-500/20 transform rotate-12"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/10 via-transparent to-pink-500/10 transform -rotate-12"></div>
        </motion.div>
      </div>

      {/* Enhanced Title with Dynamic Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h1 
          className="text-[48px] md:text-[64px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mb-6"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            backgroundSize: '300% 300%',
          }}
        >
          Get to Know Me
        </motion.h1>
        
        {/* Animated quote section */}
        <motion.div
          className="max-w-4xl mx-auto mb-8"
          layout
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl text-gray-200 italic leading-relaxed mb-3 font-light tracking-wide">
                &ldquo;{inspirationalQuotes[currentQuote].text}&rdquo;
              </p>
              <p className="text-purple-400 font-medium">
                — {inspirationalQuotes[currentQuote].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
        />
      </motion.div>
      
      <div className="h-full w-full flex flex-col gap-12 px-6 max-w-[1400px] relative z-10">
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="flex space-x-2 bg-gradient-to-r from-[#0300145e] via-[#0300148a] to-[#0300145e] backdrop-blur-lg rounded-2xl p-2 border border-[#7042f861]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "journey" && (
            <motion.div
              key="journey"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* First Row - Personal Story */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-full"
              >
                <motion.div
                  className="p-8 bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] rounded-3xl overflow-hidden group hover:border-[#7042f8aa] transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-500/10 relative"
                  whileHover={{ rotateX: 2, rotateY: 2 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Floating particles inside card - Only animate when in view */}
                  <div className="absolute inset-0 pointer-events-none">
                    {isInView && [...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-30"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          x: [0, Math.random() * 60 - 30],
                          y: [0, Math.random() * 60 - 30],
                          opacity: [0, 0.3, 0.8, 0.3],
                          scale: [0, 1],
                        }}
                        transition={{
                          duration: 5 + Math.random() * 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.6,
                        }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10 space-y-6">
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
                      My Development Journey
                    </h3>
                    
                    <p className="text-gray-200 leading-relaxed text-lg font-light tracking-wide">
                      {personalInfo.detailedBio}
                    </p>
                    
                    {/* Highlights Grid - Full Width */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                      {personalInfo.highlights.slice(0, 6).map((highlight, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                          className="p-4 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 border border-purple-500/20 rounded-xl hover:border-orange-500/30 transition-all duration-300 cursor-pointer group/highlight"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full group-hover/highlight:from-orange-400 group-hover/highlight:to-pink-400 transition-all duration-300"></div>
                            <span className="text-purple-200 font-medium text-sm group-hover/highlight:text-orange-200 transition-colors duration-300">
                              {highlight}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Second Row - Achievements Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="w-full"
              >
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6 text-center">
                  Key Achievements & Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {uniqueAchievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, rotateY: 5, y: -5 }}
                      className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer group/achievement relative overflow-hidden"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Enhanced shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover/achievement:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-x-12"></div>
                      
                      <div className="relative z-10 text-center">
                        <div className="text-4xl mb-4 group-hover/achievement:animate-bounce">
                          {achievement.icon}
                        </div>
                        <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${achievement.color} mb-3 group-hover/achievement:scale-110 transition-transform duration-300`}>
                          {achievement.metric}
                        </div>
                        <div className="text-white font-semibold mb-3 group-hover/achievement:text-purple-200 transition-colors duration-300">
                          {achievement.title}
                        </div>
                        <div className="text-gray-400 text-sm leading-relaxed group-hover/achievement:text-gray-300 transition-colors duration-300">
                          {achievement.description}
                        </div>
                      </div>
                      
                      {/* Background glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover/achievement:opacity-20 transition-opacity duration-500">
                        <div className={`w-full h-full bg-gradient-to-br ${achievement.color} rounded-2xl blur-xl`}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "philosophy" && (
            <motion.div
              key="philosophy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {personalValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, rotateY: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ 
                    y: -10, 
                    rotateY: 10, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="group/value relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] hover:border-purple-500/50 transition-all duration-500 cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Rotating border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-purple-500/30 opacity-0 group-hover/value:opacity-100 animate-pulse transition-opacity duration-500 p-[1px]">
                    <div className="w-full h-full bg-[#030014] rounded-2xl"></div>
                  </div>
                  
                  <div className="relative z-10 text-center space-y-4">
                    <motion.div 
                      className="text-4xl group-hover/value:scale-125 transition-transform duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      {value.icon}
                    </motion.div>
                    
                    <h4 className="text-white font-bold text-lg group-hover/value:text-transparent group-hover/value:bg-clip-text group-hover/value:bg-gradient-to-r group-hover/value:from-purple-400 group-hover/value:to-cyan-400 transition-all duration-300">
                      {value.title}
                    </h4>
                    
                    <p className="text-gray-300 text-sm leading-relaxed group-hover/value:text-gray-200 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "interests" && (
            <motion.div
              key="interests"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Interests & Hobbies */}
              <motion.div
                className="p-8 bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] rounded-3xl hover:border-[#7042f8aa] transition-all duration-500 hover:scale-[1.02]"
                whileHover={{ rotateX: 5 }}
              >
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
                  Passions & Interests
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="p-4 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl hover:border-orange-500/30 transition-all duration-300 cursor-pointer group/interest"
                    >
                      <span className="text-purple-200 font-medium text-sm group-hover/interest:text-orange-200 transition-colors duration-300">
                        {interest}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                className="p-8 bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] rounded-3xl hover:border-[#7042f8aa] transition-all duration-500 hover:scale-[1.02]"
                whileHover={{ rotateX: -5 }}
              >
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
                  Languages I Speak
                </h3>
                <div className="space-y-4">
                  {languages.map((language, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border border-purple-500/20 rounded-xl hover:border-orange-500/30 transition-all duration-300 cursor-pointer group/language"
                    >
                      <span className="text-purple-200 font-medium group-hover/language:text-orange-200 transition-colors duration-300">
                        {language.name}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        language.level === "Native" 
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : language.level === "Professional"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                      }`}>
                        {language.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default About;