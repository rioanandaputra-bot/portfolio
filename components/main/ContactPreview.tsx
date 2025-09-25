"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slideInFromTop } from "@/utils/motion";

const ContactPreview = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 relative overflow-hidden select-text" id="contact-preview">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-transparent rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 -right-20 w-64 h-64 bg-gradient-to-l from-cyan-500 to-transparent rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Header & Content */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-4xl px-6 text-center relative z-10"
      >
        <h2 className="text-[32px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
          Let&apos;s Work Together
        </h2>
        
        <div className="bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 opacity-100 pointer-events-none"></div>
          
          <div className="relative z-10">
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I&apos;m available for freelance projects, 
              full-time opportunities, and exciting collaborations. Let&apos;s discuss how we can work together!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg">
                <span className="text-lg">📧</span>
                <span className="text-gray-300">Quick Response</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg">
                <span className="text-lg">🤝</span>
                <span className="text-gray-300">Open to Collaborations</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg">
                <span className="text-lg">🚀</span>
                <span className="text-gray-300">Available for Projects</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 font-semibold"
              >
                Get In Touch
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3 border border-[#7042f861] text-white rounded-lg hover:border-purple-500 transition-colors font-semibold"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPreview;