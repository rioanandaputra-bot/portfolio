"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { workExperience } from "@/constants/personalData";
import Link from "next/link";

const ExperiencePage = () => {
  const [selectedJob, setSelectedJob] = useState(0);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#030014] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0300145e] backdrop-blur-md border-b border-[#7042f861]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Rio Ananda Putra
          </Link>
          <Link 
            href="/#experience" 
            className="px-4 py-2 border border-[#7042f861] rounded-lg hover:border-purple-500 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <div className="pt-20 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
            Professional Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A detailed overview of my professional development, showcasing progressive growth and key achievements across diverse projects
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Timeline Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🚀</span>
              Career Timeline
            </h3>
            
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => setSelectedJob(index)}
                className={`relative cursor-pointer p-6 rounded-2xl border-2 transition-all duration-500 group ${
                  selectedJob === index
                    ? 'border-cyan-500 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 shadow-lg shadow-cyan-500/25'
                    : 'border-[#7042f861] bg-[#0300145e] hover:border-purple-500/60 hover:bg-purple-500/10'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-8">
                  <div className={`w-6 h-6 rounded-full border-4 border-[#030014] transition-all duration-500 ${
                    selectedJob === index
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse'
                      : 'bg-gray-600 group-hover:bg-purple-500'
                  }`} />
                </div>
                
                <div className="ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className={`font-bold text-lg transition-all duration-300 ${
                        selectedJob === index
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400'
                          : 'text-white group-hover:text-purple-300'
                      }`}>
                        {job.title}
                      </h4>
                      <p className={`font-semibold transition-colors duration-300 ${
                        selectedJob === index ? 'text-cyan-300' : 'text-purple-400 group-hover:text-purple-300'
                      }`}>
                        {job.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className={`px-2 py-1 rounded-full transition-colors duration-300 ${
                      selectedJob === index
                        ? 'bg-gradient-to-r from-purple-500/30 to-cyan-500/30 text-cyan-200'
                        : 'bg-gray-700 text-gray-300 group-hover:bg-purple-500/20 group-hover:text-purple-200'
                    }`}>
                      {job.period}
                    </span>
                    <span className="text-gray-400">{job.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Job Details Display */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="sticky top-24">
              {workExperience.map((job, index) => (
                selectedJob === index && (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861]"
                  >
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-2 border-purple-500/30 flex items-center justify-center text-2xl">
                            💼
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                              {job.title}
                            </h2>
                            <p className="text-xl text-cyan-300 font-semibold">{job.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4 text-sm">
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full text-cyan-200">
                            {job.period}
                          </span>
                          <span className="px-3 py-1 bg-gray-700/50 rounded-full text-gray-300">
                            📍 {job.location}
                          </span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <span className="text-cyan-400">🎯</span>
                          Key Responsibilities & Achievements
                        </h3>
                        <div className="grid gap-4">
                          {job.description.map((desc, descIndex) => (
                            <motion.div
                              key={descIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + descIndex * 0.1 }}
                              className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 rounded-lg border border-purple-500/20"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-300 leading-relaxed">{desc}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <span className="text-purple-400">🛠️</span>
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {job.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + techIndex * 0.05 }}
                              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 cursor-default ${
                                techIndex % 4 === 0 ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300' :
                                techIndex % 4 === 1 ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300' :
                                techIndex % 4 === 2 ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300' :
                                'bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-300'
                              }`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Impact Metrics (placeholder for now) */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl border border-purple-500/20">
                          <div className="text-2xl font-bold text-purple-400 mb-1">
                            {index === 0 ? "40%" : index === 1 ? "95%" : "25%"}
                          </div>
                          <div className="text-sm text-gray-400">
                            {index === 0 ? "Performance Boost" : index === 1 ? "Client Satisfaction" : "Bug Reduction"}
                          </div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl border border-cyan-500/20">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">
                            {index === 0 ? "10K+" : index === 1 ? "2" : "N/A"}
                          </div>
                          <div className="text-sm text-gray-400">
                            {index === 0 ? "Active Users" : index === 1 ? "Mentored Developers" : "Team Members"}
                          </div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-transparent rounded-xl border border-green-500/20">
                          <div className="text-2xl font-bold text-green-400 mb-1">
                            {index === 0 ? "3" : index === 1 ? "Agile" : "Modern"}
                          </div>
                          <div className="text-sm text-gray-400">
                            {index === 0 ? "Team Members Led" : index === 1 ? "Methodology" : "Tech Stack"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-30 animate-pulse"></div>
            <div className="relative bg-[#0300145e] border border-[#7042f861] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss how my experience can contribute to your next project
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  💬 Start Conversation
                </Link>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="px-8 py-3 border border-[#7042f861] text-white font-medium rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                >
                  📄 Download Resume
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;