"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { education, certifications } from "@/constants/personalData";

const Education = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'education' | 'certifications'>('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  // Enhanced animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.6 
      }
    }
  };

  // Floating background elements
  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 6,
    size: 0.5 + Math.random() * 1.5,
  }));

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen py-20 relative overflow-hidden"
      id="education"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs with complex animations */}
        <motion.div 
          className="absolute top-32 -left-32 w-96 h-96 bg-gradient-to-r from-violet-500/30 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 0.8, 1.2, 1],
            rotate: [0, 120, 240, 360],
            opacity: [0.3, 0.1, 0.4, 0.2, 0.3],
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 30, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 -right-32 w-80 h-80 bg-gradient-to-l from-emerald-500/30 via-teal-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 0.9, 1.4, 1, 1.2],
            rotate: [360, 240, 120, 0],
            opacity: [0.2, 0.4, 0.1, 0.3, 0.2],
            x: [0, -40, 60, -20, 0],
            y: [0, 50, -40, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Enhanced floating particles */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size * 8}px`,
              height: `${element.size * 8}px`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.3, 0.6, 0.2],
              scale: [0.5, 1.2, 0.8, 1, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Dynamic grid pattern */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(rgba(139,69,199,0.1)_1px,transparent_1px)] [background-size:60px_60px] opacity-30"
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Enhanced Header */}
      <motion.div
        initial={{ opacity: 0, y: -80, scale: 0.8 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -80, scale: 0.8 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-cyan-500/10 border border-violet-500/30 rounded-full backdrop-blur-md mb-8 shadow-2xl"
          whileHover={{ scale: 1.05, borderColor: "rgba(139, 69, 199, 0.5)" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-3 h-3 bg-violet-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-gray-300 font-medium">Knowledge & Growth</span>
            <motion.div 
              className="w-3 h-3 bg-cyan-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 200 }}
        >
          Academic Excellence
        </motion.h1>
        
        <motion.p 
          className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Transforming knowledge into innovation through continuous learning and academic achievements
        </motion.p>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-12 p-2 bg-gradient-to-r from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-violet-500/20 rounded-2xl backdrop-blur-sm max-w-md mx-auto"
        >
          {(['all', 'education', 'certifications'] as const).map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                selectedCategory === category
                  ? 'text-white bg-gradient-to-r from-violet-500 to-cyan-500 shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category === 'all' && '🌟'}
                {category === 'education' && '🎓'}
                {category === 'certifications' && '🏆'}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Main Content Area */}
      <div className="h-full w-full flex flex-col gap-20 px-6 max-w-7xl relative z-10">
        
        <AnimatePresence mode="wait">
          {(selectedCategory === 'all' || selectedCategory === 'education') && (
            <motion.div
              key="education-section"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-4">
                  🎓 Educational Journey
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full shadow-lg" />
              </motion.div>
              
              {/* Enhanced Education Timeline */}
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    id={`education-${edu.id}`}
                    variants={itemVariants}
                    onHoverStart={() => setHoveredItem(`edu-${edu.id}`)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className="group relative scroll-mt-32"
                  >
                    {/* Timeline connector */}
                    {index < education.length - 1 && (
                      <motion.div
                        className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-violet-500/50 to-cyan-500/50 z-0"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                    )}

                    <motion.div 
                      className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-violet-500/20 backdrop-blur-md shadow-2xl"
                      animate={{
                        scale: hoveredItem === `edu-${edu.id}` ? 1.02 : 1,
                        borderColor: hoveredItem === `edu-${edu.id}` ? "rgba(139, 69, 199, 0.4)" : "rgba(139, 69, 199, 0.2)",
                        boxShadow: hoveredItem === `edu-${edu.id}` ? 
                          "0 25px 50px -12px rgba(139, 69, 199, 0.25)" : 
                          "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {/* Animated gradient overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-cyan-500/10 opacity-0"
                        animate={{ opacity: hoveredItem === `edu-${edu.id}` ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Timeline dot */}
                      <motion.div 
                        className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full border-4 border-[#030014] shadow-lg z-10"
                        animate={{ 
                          scale: hoveredItem === `edu-${edu.id}` ? 1.3 : 1,
                          rotate: hoveredItem === `edu-${edu.id}` ? 180 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />

                      <div className="relative z-10">
                        {/* Header with enhanced icon */}
                        <div className="flex items-start gap-6 mb-8">
                          <motion.div 
                            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border-2 border-violet-500/30 flex items-center justify-center text-3xl shadow-lg"
                            animate={{ 
                              rotateY: hoveredItem === `edu-${edu.id}` ? 180 : 0,
                              scale: hoveredItem === `edu-${edu.id}` ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.6 }}
                          >
                            🎓
                          </motion.div>
                          <div className="flex-1">
                            <motion.h3 
                              className="text-3xl font-bold text-white mb-3 leading-tight"
                              animate={{ 
                                color: hoveredItem === `edu-${edu.id}` ? "transparent" : "#ffffff"
                              }}
                              style={{
                                backgroundImage: hoveredItem === `edu-${edu.id}` ? "linear-gradient(to right, #8b5cf6, #06b6d4)" : "none",
                                backgroundClip: hoveredItem === `edu-${edu.id}` ? "text" : "unset",
                                WebkitBackgroundClip: hoveredItem === `edu-${edu.id}` ? "text" : "unset",
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              {edu.degree}
                            </motion.h3>
                            <p className="text-violet-400 font-semibold text-xl mb-2">
                              {edu.school}
                            </p>
                          </div>
                        </div>

                        {/* Enhanced details grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center gap-3 p-3 bg-violet-500/10 border border-violet-500/20 rounded-xl backdrop-blur-sm">
                            <span className="text-2xl">📅</span>
                            <div>
                              <p className="text-xs text-gray-400 uppercase tracking-wide">Duration</p>
                              <p className="text-violet-300 font-semibold">{edu.period}</p>
                            </div>
                          </div>
                          
                          {edu.location && (
                            <div className="flex items-center gap-3 p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl backdrop-blur-sm">
                              <span className="text-2xl">📍</span>
                              <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wide">Location</p>
                                <p className="text-cyan-300 font-semibold">{edu.location}</p>
                              </div>
                            </div>
                          )}
                          
                          {edu.gpa && (
                            <div className="flex items-center gap-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl backdrop-blur-sm">
                              <span className="text-2xl">⭐</span>
                              <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wide">GPA</p>
                                <p className="text-emerald-300 font-semibold">{edu.gpa}</p>
                              </div>
                            </div>
                          )}
                        </div>

                        <motion.p 
                          className="text-gray-300 leading-relaxed text-lg"
                          animate={{ 
                            color: hoveredItem === `edu-${edu.id}` ? "#d1d5db" : "#9ca3af"
                          }}
                        >
                          {edu.description}
                        </motion.p>

                        {/* Decorative floating elements */}
                        <div className="absolute top-6 right-6 opacity-20">
                          <motion.div 
                            className="w-12 h-12 border-2 border-violet-400 rounded-full"
                            animate={{ rotate: hoveredItem === `edu-${edu.id}` ? 360 : 0 }}
                            transition={{ duration: 2, ease: "linear" }}
                          />
                        </div>
                        <div className="absolute bottom-6 right-12 opacity-10">
                          <motion.div 
                            className="w-8 h-8 border-2 border-cyan-400 rounded-full"
                            animate={{ rotate: hoveredItem === `edu-${edu.id}` ? -360 : 0 }}
                            transition={{ duration: 3, ease: "linear" }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {(selectedCategory === 'all' || selectedCategory === 'certifications') && (
            <motion.div
              key="certifications-section"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              className="space-y-12"
            >
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-4">
                  🏆 Professional Certifications
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full shadow-lg" />
              </motion.div>
              
              {/* Enhanced Certifications Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    id={`certification-${cert.id}`}
                    variants={itemVariants}
                    onHoverStart={() => setHoveredItem(`cert-${cert.id}`)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className="group relative scroll-mt-32"
                  >
                    <motion.div 
                      className={`relative overflow-hidden rounded-2xl p-6 border-2 transition-all duration-500 backdrop-blur-md shadow-xl ${
                        index % 3 === 0 ? 'bg-gradient-to-br from-emerald-500/10 via-[#0300145e] to-[#0300145e] border-emerald-500/30' :
                        index % 3 === 1 ? 'bg-gradient-to-br from-blue-500/10 via-[#0300145e] to-[#0300145e] border-blue-500/30' :
                        'bg-gradient-to-br from-purple-500/10 via-[#0300145e] to-[#0300145e] border-purple-500/30'
                      }`}
                      animate={{
                        scale: hoveredItem === `cert-${cert.id}` ? 1.05 : 1,
                        rotateY: hoveredItem === `cert-${cert.id}` ? 5 : 0,
                        borderColor: hoveredItem === `cert-${cert.id}` ? 
                          (index % 3 === 0 ? "rgba(16, 185, 129, 0.6)" : 
                           index % 3 === 1 ? "rgba(59, 130, 246, 0.6)" : "rgba(139, 69, 199, 0.6)") :
                          (index % 3 === 0 ? "rgba(16, 185, 129, 0.3)" : 
                           index % 3 === 1 ? "rgba(59, 130, 246, 0.3)" : "rgba(139, 69, 199, 0.3)")
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{
                          x: hoveredItem === `cert-${cert.id}` ? ["-100%", "100%"] : "-100%",
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          repeat: hoveredItem === `cert-${cert.id}` ? Infinity : 0,
                          repeatDelay: 1,
                        }}
                      />

                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <motion.div 
                            className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center text-3xl shadow-lg ${
                              index % 3 === 0 ? 'bg-emerald-500/20 border-emerald-500/40' :
                              index % 3 === 1 ? 'bg-blue-500/20 border-blue-500/40' :
                              'bg-purple-500/20 border-purple-500/40'
                            }`}
                            animate={{ 
                              rotateZ: hoveredItem === `cert-${cert.id}` ? 360 : 0,
                              scale: hoveredItem === `cert-${cert.id}` ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.8 }}
                          >
                            🏆
                          </motion.div>
                          <div className="text-right">
                            <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                              index % 3 === 0 ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-200' :
                              index % 3 === 1 ? 'bg-blue-500/20 border border-blue-500/30 text-blue-200' :
                              'bg-purple-500/20 border border-purple-500/30 text-purple-200'
                            }`}>
                              {cert.date}
                            </span>
                          </div>
                        </div>

                        <div className="flex-1 space-y-4">
                          <motion.h3 
                            className={`text-xl font-bold leading-tight ${
                              index % 3 === 0 ? 'text-emerald-300' :
                              index % 3 === 1 ? 'text-blue-300' :
                              'text-purple-300'
                            }`}
                            animate={{ 
                              scale: hoveredItem === `cert-${cert.id}` ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {cert.name}
                          </motion.h3>
                          
                          <p className="text-gray-300 font-medium">
                            {cert.issuer}
                          </p>

                          {cert.credentialId && (
                            <p className="text-gray-400 text-xs font-mono">
                              ID: {cert.credentialId}
                            </p>
                          )}
                        </div>

                        {cert.url && (
                          <motion.div
                            className="mt-6 pt-4 border-t border-gray-600/20"
                            whileHover={{ y: -2 }}
                          >
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center text-sm font-medium transition-colors ${
                                index % 3 === 0 ? 'text-emerald-300 hover:text-emerald-200' :
                                index % 3 === 1 ? 'text-blue-300 hover:text-blue-200' :
                                'text-purple-300 hover:text-purple-200'
                              }`}
                            >
                              View Certificate
                              <motion.svg 
                                className="w-4 h-4 ml-2" 
                                animate={{ x: hoveredItem === `cert-${cert.id}` ? 4 : 0 }}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </motion.svg>
                            </a>
                          </motion.div>
                        )}

                        {/* Floating decoration */}
                        <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-20 ${
                          index % 3 === 0 ? 'bg-emerald-400' :
                          index % 3 === 1 ? 'bg-blue-400' :
                          'bg-purple-400'
                        }`} />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center py-16 relative"
        >
          <motion.div
            className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-violet-500/20 rounded-3xl backdrop-blur-md shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border-2 border-violet-500/30 rounded-full flex items-center justify-center text-4xl"
              animate={{ rotateY: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              🚀
            </motion.div>
            
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-4">
              Continuous Growth Mindset
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Education never ends, and I&apos;m always exploring new technologies and methodologies 
              to stay at the forefront of innovation. Each certification and course 
              represents not just knowledge gained, but a commitment to excellence and lifelong learning.
            </p>
            
            <motion.div 
              className="mt-6 flex justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full">
                <span className="text-violet-300">📚</span>
                <span className="text-sm text-gray-300">Lifelong Learning</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <span className="text-cyan-300">⚡</span>
                <span className="text-sm text-gray-300">Innovation Focus</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;