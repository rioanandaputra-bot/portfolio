"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { personalInfo } from "@/constants/personalData";

const About = () => {
  const services = [
    { icon: "💻", title: "Frontend", desc: "React, Next.js, TypeScript" },
    { icon: "⚙️", title: "Backend", desc: "Node.js, Express, APIs" },
    { icon: "📱", title: "Mobile", desc: "React Native, Cross-platform" },
    { icon: "🗄️", title: "Database", desc: "MongoDB, PostgreSQL" }
  ];

  return (
    <div
      className="flex flex-col items-center justify-center py-16 relative"
      id="about"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12 relative z-10"
      >
        About Me
      </motion.h1>
      
      <div className="h-full w-full flex flex-col gap-8 px-10 max-w-[1200px] relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromTop}
          className="relative p-8 rounded-2xl bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] overflow-hidden group hover:border-[#7042f8aa] transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-700 pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
            <div className="lg:col-span-3">
              <p className="text-lg text-gray-300 leading-relaxed mb-6 select-text">
                {personalInfo.detailedBio}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {personalInfo.highlights.map((highlight, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm select-text"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center space-y-4">
              <div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">3+</div>
                <div className="text-gray-400 text-xs">Years Exp</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">20+</div>
                <div className="text-gray-400 text-xs">Projects</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl p-4 bg-[#0300145e] border border-[#7042f861] hover:border-[#7042f8aa] hover:scale-105 transition-all duration-300"
            >
              <div className="relative z-10 text-center">
                <div className="text-2xl mb-2">{service.icon}</div>
                <h4 className="text-white font-semibold text-sm mb-1 select-text">{service.title}</h4>
                <p className="text-gray-400 text-xs select-text">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;