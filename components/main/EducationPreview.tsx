"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slideInFromTop } from "@/utils/motion";
import { education } from "@/constants/personalData";

const EducationPreview = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 relative overflow-hidden select-text" id="education-preview">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 -left-16 w-48 h-48 bg-gradient-to-r from-blue-500 to-transparent rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-16 -right-16 w-48 h-48 bg-gradient-to-l from-green-500 to-transparent rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 relative z-10"
      >
        <h2 className="text-[32px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-4">
          Education & Learning
        </h2>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto">
          Continuous learning and professional development journey
        </p>
      </motion.div>

      {/* Education Cards */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-5xl px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {education.slice(0, 3).map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] rounded-xl p-5 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-2 line-clamp-2 group-hover:from-blue-300 group-hover:to-green-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-green-300 font-semibold mb-2 text-sm line-clamp-1">
                      {edu.school}
                    </p>
                    <span className="text-xs px-2 py-1 bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500/30 rounded-full text-blue-200">
                      📅 {edu.period}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-green-500/20 border border-blue-500/40 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                    🎓
                  </div>
                </div>

                <div className="flex-1 mb-4">
                  <p className="text-gray-300 text-sm line-clamp-3 group-hover:text-gray-200 transition-colors">
                    {edu.description}
                  </p>
                </div>

                <Link
                  href={`/education#education-${edu.id}`}
                  className="inline-flex items-center text-xs text-blue-300 hover:text-blue-200 transition-colors group mt-auto"
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
            href="/education"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 font-semibold"
          >
            <span>View All Education & Certifications</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-gray-400 text-sm mt-2">
            Explore my academic background, certifications, and continuous learning journey
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationPreview;