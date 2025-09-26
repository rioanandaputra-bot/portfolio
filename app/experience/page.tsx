"use client";

import { workExperience } from "@/constants/personalData";
import Link from "next/link";
import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import {
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  ArrowLeftIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  StarIcon,
  EyeIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

export default function ExperiencePage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Memoized career stats
  const careerStats = useMemo(() => {
    const totalYears = new Date().getFullYear() - 2020;
    const totalCompanies = workExperience.length;
    const allTechnologies = workExperience.flatMap(exp => exp.technologies);
    const uniqueTechnologies = new Set(allTechnologies).size;
    const totalAchievements = workExperience.reduce((sum, exp) => sum + (exp.keyAchievements?.length || 3), 0);

    return { totalYears, totalCompanies, uniqueTechnologies, totalAchievements };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: "spring" } }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  return (
    <main className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
      {/* Enhanced Cosmic Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Nebula Effects */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/12 to-pink-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/12 to-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

        {/* Animated Stars */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Orbital Elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-purple-500/20 rounded-full"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-500/10 rounded-full"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20">
        {/* Enhanced Hero Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center py-20 relative"
        >
          <div className="mb-8">
            <motion.div
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0300145e] to-[#0300148a] border border-[#7042f861] rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <RocketLaunchIcon className="w-6 h-6 text-purple-400" />
              <span className="text-gray-300 text-lg font-medium">Professional Journey</span>
              <SparklesIcon className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-8 leading-tight relative"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Experience Portfolio
            <motion.div
              className="absolute -top-6 -right-8 md:-right-16"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <StarIcon className="w-12 h-12 md:w-20 md:h-20 text-yellow-400" />
            </motion.div>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Comprehensive overview of my professional journey across different organizations and roles.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-semibold">
              Click on any experience to explore detailed insights and achievements.
            </span>
          </motion.p>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>

        {/* Career Stats */}
        <motion.div
          variants={statsVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { label: "Years Experience", value: `${careerStats.totalYears}+`, icon: "🚀", color: "from-purple-500 to-pink-500", desc: "of continuous growth" },
            { label: "Organizations", value: careerStats.totalCompanies, icon: "🏢", color: "from-blue-500 to-cyan-500", desc: "trusted partnerships" },
            { label: "Technologies", value: `${careerStats.uniqueTechnologies}+`, icon: "⚡", color: "from-green-500 to-emerald-500", desc: "mastered tools" },
            { label: "Achievements", value: `${careerStats.totalAchievements}+`, icon: "🏆", color: "from-orange-500 to-red-500", desc: "milestones reached" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
              className="text-center p-8 bg-gradient-to-br from-[#0300145e] to-[#0300148a] border border-gray-700 rounded-3xl backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <BriefcaseIcon className="w-10 h-10 text-cyan-400" />
              </motion.div>
              Professional Experience
            </motion.h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Explore my professional journey across different organizations and roles. Each experience represents growth, learning, and valuable contributions to the teams and projects I&apos;ve been part of.
            </p>
          </div>

          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workExperience.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -8 }}
                className="group"
              >
                <div className="relative p-8 rounded-3xl border-2 border-gray-700 bg-gradient-to-br from-[#0300145e] to-[#0300148a] backdrop-blur-sm hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-500">
                  {/* Background Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Experience Level Badge */}
                  <div className="absolute -top-4 right-8 px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg">
                    #{index + 1}
                  </div>

                  <div className="relative z-10">
                    {/* Header with Icon */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center border border-purple-500/40">
                        <BriefcaseIcon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                          {experience.title}
                        </h3>

                        <p className="text-cyan-300 font-semibold text-xl mb-4">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    {/* Info Badges */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="flex items-center gap-2 text-sm px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-200">
                        <CalendarIcon className="w-4 h-4" />
                        {experience.period}
                      </span>
                      {experience.location && (
                        <span className="flex items-center gap-2 text-sm px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500/30 rounded-full text-blue-200">
                          <MapPinIcon className="w-4 h-4" />
                          {experience.location}
                        </span>
                      )}
                      <span className="flex items-center gap-2 text-sm px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-200">
                        <UserGroupIcon className="w-4 h-4" />
                        {experience.teamSize}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-gray-400 text-lg leading-relaxed mb-6 line-clamp-3">
                      {experience.summary}
                    </p>

                    {/* Top Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {experience.technologies.slice(0, 5).map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="text-sm px-3 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg text-orange-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {experience.technologies.length > 5 && (
                        <span className="text-sm px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300">
                          +{experience.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-center">
                      <Link
                        href={`/experience/${experience.slug}`}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl hover:from-purple-600 hover:to-cyan-600 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <EyeIcon className="w-5 h-5" />
                        <span>View Complete Details</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
            <p className="text-gray-300 mb-6">
              Interested in working together or learning more about my experience? Let&apos;s connect and discuss how we can create something amazing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Get In Touch</span>
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}