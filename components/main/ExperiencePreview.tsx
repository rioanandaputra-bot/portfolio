"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slideInFromTop } from "@/utils/motion";
import { workExperience } from "@/constants/personalData";

const ExperiencePreview = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 relative overflow-hidden select-text" id="experience-preview">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-transparent rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 -right-20 w-64 h-64 bg-gradient-to-l from-cyan-500 to-transparent rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 relative z-10"
      >
        <h2 className="text-[32px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
          Professional Journey
        </h2>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto">
          {workExperience.length}+ years of experience building scalable applications
        </p>
      </motion.div>

      {/* Experience Cards Grid */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {workExperience.slice(0, 4).map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] rounded-xl p-5 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2 group-hover:from-purple-300 group-hover:to-cyan-300 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-cyan-300 font-semibold mb-2 text-sm">
                      {job.company}
                    </p>
                    <span className="text-xs px-2 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-200">
                      📅 {job.period}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/40 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                    💼
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2 group-hover:text-gray-200 transition-colors">
                  {job.description[0]}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-md text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {job.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-700 border border-gray-600 rounded-md text-gray-300">
                      +{job.technologies.length - 3}
                    </span>
                  )}
                </div>

                <Link
                  href={`/experience#job-${job.id}`}
                  className="inline-flex items-center text-xs text-purple-300 hover:text-purple-200 transition-colors group"
                >
                  View Details
                  <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/experience"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 font-semibold"
          >
            <span>View All Experience</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-gray-400 text-sm mt-2">
            Explore my complete professional journey and achievements
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperiencePreview;