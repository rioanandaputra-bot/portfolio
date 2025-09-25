"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { slideInFromTop } from "@/utils/motion";
import { workExperience } from "@/constants/personalData";

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(0);

  return (
    <div
      className="flex flex-col items-center justify-center py-16 relative overflow-hidden select-text"
      id="experience"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-32 w-96 h-96 bg-gradient-to-r from-purple-500 to-transparent rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 -right-32 w-96 h-96 bg-gradient-to-l from-cyan-500 to-transparent rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12 relative z-10 select-text"
      >
        Professional Journey
      </motion.h1>
      
      <div className="w-full max-w-[1200px] px-10 relative z-10">
        {/* Compact Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Job Selection Panel - Compact */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromTop}
            className="space-y-3"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 select-text">
              <span className="text-2xl">🚀</span>
              Career Timeline
            </h3>
            
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                id={`job-${job.id}`}
                onClick={() => setSelectedJob(index)}
                whileHover={{ scale: 1.02, x: 5 }}
                className={`relative cursor-pointer p-4 rounded-xl border transition-all duration-300 scroll-mt-24 ${
                  selectedJob === index
                    ? 'border-cyan-500 bg-gradient-to-r from-purple-500/20 to-cyan-500/20'
                    : 'border-[#7042f861] bg-[#0300145e] hover:border-purple-500/60 hover:bg-purple-500/10'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-2 top-6">
                  <div className={`w-4 h-4 rounded-full border-2 border-[#030014] transition-all duration-300 ${
                    selectedJob === index
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500'
                      : 'bg-gray-600'
                  }`} />
                </div>
                
                <div className="ml-4">
                  <h4 className={`font-semibold text-sm mb-1 select-text ${
                    selectedJob === index
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400'
                      : 'text-white'
                  }`}>
                    {job.title}
                  </h4>
                  <p className={`text-sm mb-2 select-text ${
                    selectedJob === index ? 'text-cyan-300' : 'text-purple-400'
                  }`}>
                    {job.company}
                  </p>
                  <span className={`text-xs px-2 py-1 rounded-full select-text ${
                    selectedJob === index
                      ? 'bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-cyan-200'
                      : 'bg-gray-700 text-gray-300'
                  }`}>
                    {job.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Job Details - Compact */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedJob}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] select-text"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2 select-text">
                          {workExperience[selectedJob].title}
                        </h2>
                        <p className="text-lg font-semibold text-cyan-300 mb-2 select-text">
                          {workExperience[selectedJob].company}
                        </p>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-200 select-text">
                            📅 {workExperience[selectedJob].period}
                          </span>
                          {workExperience[selectedJob].location && (
                            <span className="text-gray-300 flex items-center gap-1 select-text">
                              📍 {workExperience[selectedJob].location}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/40 flex items-center justify-center text-2xl">
                        💼
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-300 leading-relaxed text-sm mb-4 select-text">
                      {workExperience[selectedJob].description[0]}
                    </p>
                  </div>

                  {/* Key Achievements - Compact */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2 select-text">
                      <span className="text-lg">🏆</span>
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {workExperience[selectedJob].description?.slice(1, 4).map((achievement: string, index: number) => (
                        <div key={index} className="flex items-start gap-3 text-sm">
                          <span className="text-cyan-400 mt-1">▸</span>
                          <span className="text-gray-300 leading-relaxed select-text">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies - Compact Grid */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2 select-text">
                      <span className="text-lg">🛠️</span>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {workExperience[selectedJob].technologies?.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-md text-purple-200 hover:bg-purple-500/20 transition-colors select-text"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons - Compact */}
                  <div className="flex gap-3 mt-6">
                    <Link
                      href="/experience"
                      className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 select-none"
                    >
                      View Full Experience
                    </Link>
                    <Link
                      href="/projects"
                      className="px-4 py-2 text-sm border border-[#7042f861] text-white rounded-lg hover:border-purple-500 transition-colors select-none"
                    >
                      View Projects
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;