"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { education, certifications } from "@/constants/personalData";

const Education = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 relative overflow-hidden"
      id="education"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 -left-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-transparent rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 -right-20 w-80 h-80 bg-gradient-to-l from-cyan-500 to-transparent rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        
        {/* Animated dots */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/2 left-20 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-300"></div>
      </div>

      <motion.h1 
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 relative z-10"
      >
        Academic Foundation
      </motion.h1>
      
      <div className="h-full w-full flex flex-col gap-16 px-10 max-w-[1400px] relative z-10">
        
        {/* Education Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div
            variants={slideInFromTop}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 mb-4">
              🎓 Academic Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                id={`education-${edu.id}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInFromLeft(0.4 + index * 0.2)}
                className="group relative scroll-mt-24"
              >
                <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] hover:border-[#7042f8aa] transition-all duration-500 hover:scale-105 hover:rotate-1">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Header with Icon */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-2 border-purple-500/30 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        🎓
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-purple-400 font-medium text-lg">
                          {edu.school}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <span className="text-lg">📅</span>
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      {edu.location && (
                        <div className="flex items-center gap-2 text-gray-400">
                          <span className="text-lg">📍</span>
                          <span>{edu.location}</span>
                        </div>
                      )}
                      {edu.gpa && (
                        <div className="flex items-center gap-2 text-green-400">
                          <span className="text-lg">⭐</span>
                          <span className="font-semibold">GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                      <div className="w-8 h-8 border-2 border-purple-400 rounded rotate-45"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div
            variants={slideInFromTop}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
              🏆 Professional Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>
          
          {/* Certifications Grid - Bento Box Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                id={`certification-${cert.id}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromRight(0.3 + index * 0.1)}
                className="group relative scroll-mt-24"
              >
                <div className={`relative overflow-hidden rounded-xl p-6 border transition-all duration-500 hover:scale-105 ${
                  index % 3 === 0 ? 'bg-gradient-to-br from-purple-500/10 via-[#0300145e] to-[#0300145e] border-purple-500/30 hover:border-purple-500/60' :
                  index % 3 === 1 ? 'bg-gradient-to-br from-cyan-500/10 via-[#0300145e] to-[#0300145e] border-cyan-500/30 hover:border-cyan-500/60' :
                  'bg-gradient-to-br from-green-500/10 via-[#0300145e] to-[#0300145e] border-green-500/30 hover:border-green-500/60'
                }`}>
                  {/* Certificate Icon */}
                  <div className="relative mb-4">
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-2xl mb-3 ${
                      index % 3 === 0 ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40' :
                      index % 3 === 1 ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40' :
                      'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/40'
                    } group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      🏅
                    </div>
                    
                    {/* Floating badge */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      index % 3 === 0 ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                      index % 3 === 1 ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' :
                      'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                    } animate-pulse`}>
                      ✓
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 leading-tight">
                      {cert.name}
                    </h4>
                    
                    <div className="space-y-2">
                      <p className={`text-sm font-medium ${
                        index % 3 === 0 ? 'text-purple-400' :
                        index % 3 === 1 ? 'text-cyan-400' :
                        'text-green-400'
                      }`}>
                        {cert.issuer}
                      </p>
                      <p className="text-gray-400 text-sm">
                        📅 {cert.date}
                      </p>
                      {cert.credentialId && (
                        <p className="text-gray-500 text-xs font-mono">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>

                    {cert.url && (
                      <motion.a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                          index % 3 === 0 ? 'text-purple-400 hover:text-purple-300' :
                          index % 3 === 1 ? 'text-cyan-400 hover:text-cyan-300' :
                          'text-green-400 hover:text-green-300'
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        View Certificate
                        <span>→</span>
                      </motion.a>
                    )}
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-30 transition-opacity">
                    <div className="w-4 h-4 border border-current rounded-full"></div>
                  </div>
                  <div className="absolute bottom-2 left-2 opacity-10 group-hover:opacity-30 transition-opacity">
                    <div className="w-3 h-3 bg-current rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromTop}
          className="relative mt-16"
        >
          <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-r from-purple-500/10 via-[#0300145e] to-cyan-500/10 border border-[#7042f861] text-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-8 text-6xl">🎓</div>
              <div className="absolute bottom-4 right-8 text-6xl">🏆</div>
              <div className="absolute top-8 right-12 text-4xl">⭐</div>
              <div className="absolute bottom-8 left-12 text-4xl">📚</div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                Education never ends, and I&apos;m always exploring new technologies and methodologies 
                to stay at the forefront of web development. Each certification and course 
                represents my commitment to delivering cutting-edge solutions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full border border-purple-500/30">
                  <span className="text-purple-300 font-medium">🎯 Goal-Oriented</span>
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-full border border-cyan-500/30">
                  <span className="text-cyan-300 font-medium">📈 Growth Mindset</span>
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-transparent rounded-full border border-green-500/30">
                  <span className="text-green-300 font-medium">🏅 Certified Expert</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;