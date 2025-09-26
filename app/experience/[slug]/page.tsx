"use client";

import { workExperience } from "@/constants/personalData";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  ArrowLeftIcon, 
  ChevronRightIcon, 
  BriefcaseIcon, 
  CalendarIcon, 
  MapPinIcon, 
  UserGroupIcon,
  TrophyIcon,
  ExclamationTriangleIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

export default function ExperienceDetailPage({ params }: { params: { slug: string } }) {
  const experience = workExperience.find(exp => exp.slug === params.slug);
  const [activeSection, setActiveSection] = useState<string>("overview");
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  if (!experience) {
    return (
      <motion.div 
        className="min-h-screen bg-[#030014] text-white flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ExclamationTriangleIcon className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">Experience Not Found</h1>
            <p className="text-gray-300 mb-8">The experience you are looking for does not exist.</p>
            <Link href="/experience" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl hover:from-purple-700 hover:to-cyan-600 font-semibold transition-all duration-300 transform hover:scale-105">
              <ArrowLeftIcon className="w-5 h-5" />
              Back to Experience
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/3 to-cyan-500/3 rounded-full blur-3xl"></div>
        
        <motion.div 
          animate={floatingAnimation}
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-60"
        ></motion.div>
        <motion.div 
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
          className="absolute top-3/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-40"
        ></motion.div>
        <motion.div 
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 4 } }}
          className="absolute bottom-1/4 left-3/4 w-4 h-4 bg-pink-400 rounded-full opacity-30"
        ></motion.div>
      </div>

      <div className="relative z-10 pt-20 px-4 max-w-7xl mx-auto">
        {/* Enhanced Hero Section */}
        <motion.div 
          ref={heroRef}
          style={{ y, opacity }}
          className="text-center py-16 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-4 leading-tight relative"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {experience.title}
              <motion.div
                className="absolute -top-4 -right-4 md:-right-8"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <SparklesIcon className="w-6 h-6 md:w-10 md:h-10 text-yellow-400" />
              </motion.div>
            </motion.h1>

            <motion.p 
              className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {experience.company}
            </motion.p>

            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {experience.summary}
            </motion.p>

            {/* Enhanced Info Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm border border-purple-500/20 p-4 rounded-xl">
                <CalendarIcon className="w-6 h-6 text-purple-400 mb-2 mx-auto" />
                <h3 className="text-sm font-semibold text-white mb-1">Duration</h3>
                <p className="text-purple-300 text-sm">{experience.period}</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-sm border border-cyan-500/20 p-4 rounded-xl">
                <MapPinIcon className="w-6 h-6 text-cyan-400 mb-2 mx-auto" />
                <h3 className="text-sm font-semibold text-white mb-1">Location</h3>
                <p className="text-cyan-300 text-sm">{experience.location}</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm border border-green-500/20 p-4 rounded-xl">
                <UserGroupIcon className="w-6 h-6 text-green-400 mb-2 mx-auto" />
                <h3 className="text-sm font-semibold text-white mb-1">Team Size</h3>
                <p className="text-green-300 text-sm">{experience.teamSize}</p>
              </div>
              <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 backdrop-blur-sm border border-pink-500/20 p-4 rounded-xl">
                <BriefcaseIcon className="w-6 h-6 text-pink-400 mb-2 mx-auto" />
                <h3 className="text-sm font-semibold text-white mb-1">Role Type</h3>
                <p className="text-pink-300 text-sm">Full-time</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          ref={contentRef}
          variants={containerVariants}
          initial="hidden"
          animate={isContentInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20"
        >
          {/* Sidebar Navigation */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <RocketLaunchIcon className="w-5 h-5 text-purple-400" />
                Quick Navigation
              </h3>
              {[
                { id: "overview", label: "Role Overview", icon: "📋" },
                { id: "achievements", label: "Achievements", icon: "🏆" },
                { id: "challenges", label: "Challenges", icon: "⚡" },
                { id: "tech-stack", label: "Tech Stack", icon: "🚀" }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.id 
                      ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-white' 
                      : 'bg-gray-800/30 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  <span className="mr-2">{section.icon}</span>
                  {section.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-8">
            {/* Role Overview */}
            <motion.div
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-xl">📋</span>
                  </motion.div>
                  Role Overview
                </h2>
                <div className="space-y-6">
                  {experience.detailedDescription.map((paragraph, index) => (
                    <motion.p 
                      key={index} 
                      className="text-gray-300 leading-relaxed text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrophyIcon className="w-6 h-6 text-white" />
                  </motion.div>
                  Key Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experience.keyAchievements.map((achievement, index) => (
                    <motion.div 
                      key={index}
                      className="group flex items-start gap-4 p-6 bg-gradient-to-r from-green-900/10 to-emerald-900/10 border border-green-500/20 rounded-xl hover:from-green-900/20 hover:to-emerald-900/20 hover:border-green-500/40 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        <span className="text-white font-bold text-sm">✓</span>
                      </motion.div>
                      <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <ExclamationTriangleIcon className="w-6 h-6 text-white" />
                  </motion.div>
                  Challenges & Solutions
                </h2>
                <div className="space-y-4">
                  {experience.challenges.map((challenge, index) => (
                    <motion.div 
                      key={index}
                      className="group flex items-start gap-4 p-6 bg-gradient-to-r from-orange-900/10 to-red-900/10 border border-orange-500/20 rounded-xl hover:from-orange-900/20 hover:to-red-900/20 hover:border-orange-500/40 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center flex-shrink-0"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                      >
                        <span className="text-white font-bold text-sm">!</span>
                      </motion.div>
                      <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">{challenge}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tech Stack & Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <RocketLaunchIcon className="w-5 h-5 text-white" />
                    </motion.div>
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {experience.technologies.map((tech, index) => (
                      <motion.span 
                        key={index}
                        className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 rounded-full border border-purple-500/30 hover:from-purple-600/50 hover:to-pink-600/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    >
                      <WrenchScrewdriverIcon className="w-5 h-5 text-white" />
                    </motion.div>
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {experience.tools.map((tool, index) => (
                      <motion.span 
                        key={index}
                        className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600/30 to-cyan-600/30 text-blue-200 rounded-full border border-blue-500/30 hover:from-blue-600/50 hover:to-cyan-600/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Key Metrics */}
            <motion.div
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <ChartBarIcon className="w-5 h-5 text-white" />
                  </motion.div>
                  Key Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(experience.keyMetrics).map(([key, value], index) => (
                    <motion.div 
                      key={key}
                      className="group flex justify-between items-center p-4 bg-gradient-to-r from-gray-700/30 to-gray-800/30 rounded-lg hover:from-gray-700/50 hover:to-gray-800/50 border border-gray-600/30 hover:border-cyan-500/30 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-gray-300 text-sm capitalize group-hover:text-white transition-colors duration-300">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <motion.span 
                        className="text-cyan-400 text-sm font-semibold group-hover:text-cyan-300 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        {value}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Navigation */}
        <motion.div 
          className="text-center pb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/experience" 
              className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl hover:from-purple-700 hover:to-cyan-600 font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25"
            >
              <motion.div
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronRightIcon className="w-5 h-5 rotate-180" />
              </motion.div>
              View All Experience
            </Link>
            <Link 
              href="/#experience-preview" 
              className="group inline-flex items-center gap-3 px-10 py-4 border-2 border-gray-600 text-gray-300 rounded-xl hover:border-purple-500 hover:text-white hover:bg-purple-500/10 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <motion.div
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <RocketLaunchIcon className="w-5 h-5" />
              </motion.div>
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
