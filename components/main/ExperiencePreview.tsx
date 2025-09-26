"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRightIcon, BriefcaseIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { workExperience } from "@/constants/personalData";

const ExperiencePreview = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    hover: { 
      scale: 1.05,
      rotateY: 5,
      z: 50,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  // Calculate career progression stats
  const totalYears = workExperience.length;
  const totalProjects = workExperience.reduce((acc, exp) => acc + (exp.description?.length || 0), 0);
  const totalTechnologies = Array.from(new Set(workExperience.flatMap(exp => exp.technologies))).length;
  
  // Show only 3 most recent experiences in preview
  const recentExperiences = workExperience.slice(0, 3);

  // Ensure selectedExperience doesn't exceed recent experiences bounds
  const validatedSelection = Math.min(selectedExperience, recentExperiences.length - 1);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen py-20 relative overflow-hidden select-text"
      id="experience-preview"
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
            <BriefcaseIcon className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300 text-sm font-medium">Career Journey</span>
          </div>
        </div>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Professional Journey
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {totalYears}+ years of building innovative solutions and leading development teams
          <br />
          <span className="text-sm text-gray-500 mt-2 block">Showing {recentExperiences.length} most recent positions from {workExperience.length} total experiences</span>
        </motion.p>
      </motion.div>

      {/* Career Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid grid-cols-3 gap-8 mb-16 w-full max-w-4xl mx-auto px-4 relative z-10"
      >
        {[
          { label: "Years Experience", value: `${totalYears}+`, icon: "🚀", color: "from-purple-500 to-pink-500" },
          { label: "Projects Delivered", value: `${totalProjects}+`, icon: "🎯", color: "from-blue-500 to-cyan-500" },
          { label: "Technologies", value: `${totalTechnologies}+`, icon: "⚡", color: "from-green-500 to-emerald-500" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="text-center p-6 bg-gradient-to-br from-[#0300145e] to-[#0300148a] border border-[#7042f861] rounded-2xl backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Interactive Experience Showcase */}
      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Timeline Navigation */}
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-4 space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">⏳</span>
              Recent Experience
            </h3>
            
            {workExperience.slice(0, 3).map((job, index) => (
              <motion.div
                key={job.id}
                onClick={() => setSelectedExperience(index)}
                whileHover="hover"
                variants={cardVariants}
                className={`relative cursor-pointer p-4 rounded-2xl border-2 transition-all duration-500 group ${
                  validatedSelection === index
                    ? 'border-cyan-500 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 shadow-lg shadow-cyan-500/25'
                    : 'border-[#7042f861] bg-[#0300145e] hover:border-purple-500/60 hover:bg-purple-500/10'
                }`}
              >
                {/* Timeline connector */}
                <div className="absolute -left-6 top-8">
                  <div className={`w-4 h-4 rounded-full border-4 border-[#030014] transition-all duration-500 ${
                    validatedSelection === index
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse'
                      : 'bg-gray-600 group-hover:bg-purple-500'
                  }`} />
                  {index < workExperience.slice(0, 3).length - 1 && (
                    <div className="absolute top-4 left-2 w-0.5 h-16 bg-gradient-to-b from-gray-600 to-transparent" />
                  )}
                </div>

                <div className="ml-4">
                  <h4 className={`font-bold text-lg mb-2 transition-all duration-300 ${
                    validatedSelection === index
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400'
                      : 'text-white group-hover:text-purple-300'
                  }`}>
                    {job.title}
                  </h4>
                  
                  <p className="text-cyan-300 font-semibold mb-3">
                    {job.company}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="flex items-center gap-1 text-xs px-2 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-200">
                      <CalendarIcon className="w-3 h-3" />
                      {job.period}
                    </span>
                    {job.location && (
                      <span className="flex items-center gap-1 text-xs px-2 py-1 bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500/30 rounded-full text-blue-200">
                        <MapPinIcon className="w-3 h-3" />
                        {job.location}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {job.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-md text-orange-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {job.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-700 border border-gray-600 rounded-md text-gray-300">
                        +{job.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Detail Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="sticky top-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={validatedSelection}
                  initial={{ opacity: 0, y: 20, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden"
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 opacity-50" />
                  
                  <div className="relative z-10">
                    {/* Job Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex-1">
                        <motion.h3 
                          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3"
                          layoutId={`title-${validatedSelection}`}
                        >
                          {recentExperiences[validatedSelection].title}
                        </motion.h3>
                        <p className="text-xl font-semibold text-cyan-300 mb-4">
                          {recentExperiences[validatedSelection].company}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-6">
                          <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-200">
                            <CalendarIcon className="w-4 h-4" />
                            {recentExperiences[validatedSelection].period}
                          </span>
                          {recentExperiences[validatedSelection].location && (
                            <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500/30 rounded-full text-blue-200">
                              <MapPinIcon className="w-4 h-4" />
                              {recentExperiences[validatedSelection].location}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/40 flex items-center justify-center text-4xl backdrop-blur-sm">
                        💼
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-8">
                      <h4 className="text-white text-xl font-semibold mb-6 flex items-center gap-3">
                        <span className="text-2xl">🏆</span>
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {recentExperiences[validatedSelection].description.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#0300145e] to-[#0300148a] border border-[#7042f861] rounded-xl hover:border-purple-500/50 transition-all duration-300"
                          >
                            <span className="text-cyan-400 mt-1 text-lg">▸</span>
                            <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="mb-8">
                      <h4 className="text-white text-xl font-semibold mb-6 flex items-center gap-3">
                        <span className="text-2xl">🛠️</span>
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {recentExperiences[validatedSelection].technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg text-orange-200 hover:bg-orange-500/30 transition-all duration-300 cursor-pointer"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      href={`/experience/${recentExperiences[validatedSelection].slug}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
                    >
                      <span>View Complete Details</span>
                      <ChevronRightIcon className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-center mt-16 relative z-10"
      >
        <Link
          href="/experience"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105"
        >
          <BriefcaseIcon className="w-6 h-6 mr-3" />
          <span>Explore Full Professional Journey</span>
          <ChevronRightIcon className="w-6 h-6 ml-3" />
        </Link>
        <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto">
          Discover detailed insights into my complete professional journey and technical achievements ({workExperience.length} positions total)
        </p>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated floating elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20"
            animate={{
              x: [Math.random() * 1200, Math.random() * 1200],
              y: [Math.random() * 800, Math.random() * 800],
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}

        {/* Background gradients */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-transparent rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-64 h-64 bg-gradient-to-l from-cyan-500 to-transparent rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-purple-500/5 rounded-full blur-3xl opacity-30"></div>
      </div>
    </section>
  );
};

export default ExperiencePreview;