"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { AcademicCapIcon, TrophyIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { education, certifications } from "@/constants/personalData";

const EducationPreview = () => {
  const [activeTab, setActiveTab] = useState<"education" | "certifications">("education");
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

    // Calculate stats from education data
  const totalYears = education.length;
  const totalCertifications = certifications.length;
  const totalInstitutions = education.length;

  // Get recent education entries for preview
  const recentEducation = education.slice(0, 3);

  // Ensure selection is within bounds
  const validatedSelection = 0;

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
            <AcademicCapIcon className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300 text-sm font-medium">Career Journey</span>
          </div>
        </div>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Education & Growth
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Building knowledge through continuous learning and professional growth
        </motion.p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid grid-cols-3 gap-6 mb-12 w-full max-w-3xl mx-auto px-4 relative z-10"
      >
        {[
          { label: "Education Years", value: `${totalYears}`, icon: "🎓", color: "from-emerald-500 to-teal-500" },
          { label: "Certifications", value: `${totalCertifications}+`, icon: "�", color: "from-blue-500 to-cyan-500" },
          { label: "Institutions", value: `${totalInstitutions}`, icon: "🏫", color: "from-green-500 to-emerald-500" }
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
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">📚</span>
              Recent Education
            </h3>
            
            {education.slice(0, 2).map((edu, index) => (
              <motion.div
                key={edu.id}
                onClick={() => setActiveTab("education")}
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
                  {index < education.slice(0, 2).length - 1 && (
                    <div className="absolute top-4 left-2 w-0.5 h-12 bg-gradient-to-b from-gray-600 to-transparent" />
                  )}
                </div>

                <div className="ml-4">
                  <h4 className={`font-bold text-base mb-2 transition-all duration-300 ${
                    validatedSelection === index
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400'
                      : 'text-white group-hover:text-purple-300'
                  }`}>
                    {edu.degree}
                  </h4>
                  
                  <p className="text-cyan-300 font-medium text-sm mb-2">
                    {edu.school}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1 text-xs px-2 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-200">
                      <CalendarIcon className="w-3 h-3" />
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="text-xs px-2 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-200">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-8"
          >
            <motion.div
              className="bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 opacity-50" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-2">
                      Professional Certifications
                    </h3>
                    <p className="text-gray-400">
                      Verified credentials and achievements
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/40 flex items-center justify-center text-3xl backdrop-blur-sm">
                    🏆
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {certifications.slice(0, 4).map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-xl p-4 relative group hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/40 flex items-center justify-center text-xl flex-shrink-0">
                          🎓
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-sm mb-1 leading-tight">
                            {cert.name}
                          </h4>
                          <p className="text-emerald-300 text-xs font-medium mb-2">
                            {cert.issuer}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400 bg-gray-800/30 px-2 py-1 rounded">
                              {cert.date}
                            </span>
                            {cert.url && (
                              <a
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                              >
                                Verify
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <Link
                    href="/education"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:shadow-emerald-500/25"
                  >
                    <span>View All Certifications</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
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
          href="/education"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 hover:scale-105"
        >
          <AcademicCapIcon className="w-5 h-5 mr-2" />
          <span>Explore Complete Journey</span>
          <TrophyIcon className="w-5 h-5 ml-2" />
        </Link>
        <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
          Discover my educational background and certifications
        </p>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-30"
            animate={{
              x: [Math.random() * 600, Math.random() * 600],
              y: [Math.random() * 400, Math.random() * 400],
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}

        {/* Background gradients */}
        <div className="absolute top-20 -left-20 w-48 h-48 bg-gradient-to-r from-purple-500 to-transparent rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-48 h-48 bg-gradient-to-l from-cyan-500 to-transparent rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default EducationPreview;