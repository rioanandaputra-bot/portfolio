"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { personalInfo } from "@/constants/personalData";

const About = () => {
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const services = [
    { 
      icon: "🎨", 
      title: "UI/UX Design", 
      desc: "Figma, Adobe XD, Prototyping",
      details: "Creating intuitive user interfaces and seamless user experiences with modern design principles.",
      gradient: "from-pink-500/20 to-purple-500/20"
    },
    { 
      icon: "🔧", 
      title: "System Architecture", 
      desc: "Scalable, Microservices, Cloud",
      details: "Designing robust system architectures that scale efficiently and maintain high performance.",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    { 
      icon: "�", 
      title: "Data Analytics", 
      desc: "Analytics, Insights, Optimization",
      details: "Transforming complex data into actionable insights and performance optimization strategies.",
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    { 
      icon: "⚡", 
      title: "Performance Tuning", 
      desc: "Speed, SEO, Optimization",
      details: "Optimizing applications for maximum speed, SEO performance, and resource efficiency.",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  // Mouse tracking untuk interactive background
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Auto-rotate services setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center py-20 relative overflow-hidden"
      id="about"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating gradient orbs that follow mouse */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
              left: `${10 + i * 25}%`,
              top: `${15 + i * 20}%`,
            }}
            animate={{
              x: mousePosition.x * (0.02 + i * 0.015),
              y: mousePosition.y * (0.02 + i * 0.015),
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              x: { type: "spring", damping: 50, stiffness: 50 },
              y: { type: "spring", damping: 50, stiffness: 50 },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        ))}
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform rotate-45"></div>
        </div>
      </div>

      {/* Enhanced Title with Typewriter Effect */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 relative z-10"
      >
        <motion.h1 
          className="text-[48px] md:text-[56px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        >
          About Me
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
        />
      </motion.div>
      
      <div className="h-full w-full flex flex-col gap-12 px-6 max-w-[1400px] relative z-10">
        {/* Main About Card with Enhanced Design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromTop}
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] overflow-hidden group hover:border-[#7042f8aa] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-20"
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            <div className="lg:col-span-3 space-y-8">
              {/* Bio Text with Enhanced Typography */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light tracking-wide select-text">
                  {personalInfo.detailedBio}
                </p>
              </motion.div>
              
              {/* Enhanced Highlights Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {personalInfo.highlights.map((highlight, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ 
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      rotateX: 10,
                      transition: { duration: 0.2 }
                    }}
                    className="group/highlight cursor-pointer perspective-1000"
                  >
                    <div className="relative p-4 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 border border-purple-500/20 rounded-xl hover:border-orange-500/30 transition-all duration-300 transform-gpu hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden">
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -top-2 -left-2 w-[calc(100%+16px)] h-[calc(100%+16px)] bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover/highlight:translate-x-full transition-transform duration-700"></div>
                      
                      <div className="relative z-10 flex items-center space-x-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full group-hover/highlight:from-orange-400 group-hover/highlight:to-pink-400 transition-all duration-300 animate-pulse"></div>
                        <span className="text-purple-200 font-medium select-text group-hover/highlight:text-orange-200 transition-colors duration-300">
                          {highlight}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Stats Section */}
            <div className="space-y-6">
              {[
                { number: personalInfo.stats.experience, label: "Years Experience", icon: "⭐", color: "from-purple-500 to-purple-600" },
                { number: personalInfo.stats.projects, label: "Projects Built", icon: "🚀", color: "from-cyan-500 to-cyan-600" },
                { number: personalInfo.stats.clients, label: "Happy Clients", icon: "😊", color: "from-green-500 to-green-600" },
                { number: personalInfo.stats.technologies, label: "Technologies", icon: "💻", color: "from-orange-500 to-orange-600" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                  className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer group/stat"
                >
                  <div className="text-3xl mb-2 group-hover/stat:animate-bounce">
                    {stat.icon}
                  </div>
                  <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2 group-hover/stat:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm font-medium group-hover/stat:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Services Section with Interactive Cards */}
        <div className="space-y-8">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8"
          >
            Core Specializations
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setActiveService(index)}
                className="group/service relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] hover:border-purple-500/50 transition-all duration-500 cursor-pointer perspective-1000"
              >
                {/* Dynamic Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover/service:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Rotating border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-purple-500/50 opacity-0 group-hover/service:opacity-100 animate-spin-slow p-[1px] transition-opacity duration-500">
                  <div className="w-full h-full bg-[#030014] rounded-2xl"></div>
                </div>
                
                <div className="relative z-10 text-center space-y-4">
                  {/* Animated Icon */}
                  <motion.div 
                    className="text-4xl group-hover/service:scale-125 transition-transform duration-300"
                    animate={activeService === index ? {
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    } : {}}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  {/* Service Title */}
                  <h4 className="text-white font-bold text-lg group-hover/service:text-transparent group-hover/service:bg-clip-text group-hover/service:bg-gradient-to-r group-hover/service:from-purple-400 group-hover/service:to-cyan-400 transition-all duration-300 select-text">
                    {service.title}
                  </h4>
                  
                  {/* Short Description */}
                  <p className="text-gray-300 text-sm group-hover/service:text-gray-200 transition-colors duration-300 select-text">
                    {service.desc}
                  </p>
                  
                  {/* Detailed Description - Shows on Hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={activeService === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-xs leading-relaxed mt-2 border-t border-gray-700/50 pt-3">
                      {service.details}
                    </p>
                  </motion.div>
                </div>
                
                {/* Hover Effect Particles */}
                <AnimatePresence>
                  {activeService === index && (
                    <motion.div className="absolute inset-0 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ 
                            opacity: 0, 
                            scale: 0,
                            x: Math.random() * 200 - 100,
                            y: Math.random() * 200 - 100
                          }}
                          animate={{ 
                            opacity: [0, 1, 0], 
                            scale: [0, 1, 0],
                            x: Math.random() * 400 - 200,
                            y: Math.random() * 400 - 200
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: i * 0.3 
                          }}
                          className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;