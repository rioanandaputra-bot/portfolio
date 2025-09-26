"use client";

import { workExperience } from "@/constants/personalData";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
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
  SparklesIcon,
  CheckCircleIcon,
  LightBulbIcon,
  FireIcon,
  StarIcon
} from "@heroicons/react/24/outline";

const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }: {
  end: string | number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      const numEnd = typeof end === 'string' ? parseInt(end.replace(/\D/g, '')) || 0 : end;

      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        setCount(Math.floor(progress * numEnd));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, isVisible]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default function ExperienceDetailPage({ params }: { params: { slug: string } }) {
  const experience = workExperience.find(exp => exp.slug === params.slug);
  const [activeSection, setActiveSection] = useState<string>("overview");
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  if (!experience) {
    return (
      <motion.div
        className="min-h-screen bg-[#030014] text-white flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ExclamationTriangleIcon className="w-32 h-32 text-yellow-500 mx-auto mb-8" />
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              Experience Not Found
            </h1>
            <p className="text-gray-300 mb-8 text-xl max-w-md mx-auto">
              The experience you&apos;re looking for seems to have drifted into space.
            </p>
            <Link
              href="/experience"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl hover:from-purple-700 hover:to-cyan-600 font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Back to Experience Galaxy
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  const navigationSections = [
    { id: "overview", label: "Role Overview", icon: <BriefcaseIcon className="w-5 h-5" />, color: "from-purple-500 to-pink-500" },
    { id: "achievements", label: "Achievements", icon: <TrophyIcon className="w-5 h-5" />, color: "from-green-500 to-emerald-500" },
    { id: "challenges", label: "Challenges", icon: <FireIcon className="w-5 h-5" />, color: "from-orange-500 to-red-500" },
    { id: "tech-stack", label: "Tech Stack", icon: <RocketLaunchIcon className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
    { id: "metrics", label: "Impact Metrics", icon: <ChartBarIcon className="w-5 h-5" />, color: "from-cyan-500 to-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Nebula Effect */}
        <div className="absolute top-10 left-10 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/8 to-pink-500/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/8 to-blue-500/4 rounded-full blur-3xl"></div>

        {/* Orbital Rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-[600px] h-[600px] border border-purple-500/10 rounded-full" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-[400px] h-[400px] border border-cyan-500/10 rounded-full" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          style={{ y: textY }}
          className="relative min-h-screen flex items-center justify-center px-4"
        >
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              {/* Job Title */}
              <motion.h1
                className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-8 leading-tight relative"
              >
                {experience.title}
                <motion.div
                  className="absolute -top-6 -right-6 md:-right-12"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <SparklesIcon className="w-12 h-12 md:w-16 md:h-16 text-yellow-400" />
                </motion.div>
              </motion.h1>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-8"
              >
                <p className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-semibold relative inline-block">
                  {experience.company}
                </p>
              </motion.div>

              {/* Summary */}
              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {experience.summary}
              </motion.p>

              {/* Info Cards */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {[
                  { icon: CalendarIcon, label: "Duration", value: experience.period, color: "from-purple-500 to-pink-500" },
                  { icon: MapPinIcon, label: "Location", value: experience.location, color: "from-blue-500 to-cyan-500" },
                  { icon: UserGroupIcon, label: "Team Size", value: experience.teamSize, color: "from-green-500 to-emerald-500" },
                  { icon: BriefcaseIcon, label: "Role Type", value: "Full-time", color: "from-orange-500 to-red-500" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`group relative overflow-hidden bg-gradient-to-br ${item.color}/10 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer`}
                    whileHover={{
                      rotateY: 5,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    initial={{ opacity: 0, rotateX: -20 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.label}
                    </h3>
                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${item.color} font-semibold text-lg`}>
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0 }}
          animate={isContentInView ? { opacity: 1 } : { opacity: 0 }}
          className="px-4 max-w-7xl mx-auto pb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Navigation Sidebar */}
            <motion.div className="lg:col-span-1">
              <div className="sticky top-8">
                <motion.div
                  className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl"
                >
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <StarIcon className="w-6 h-6 text-yellow-400" />
                    Navigation
                  </h3>
                  <div className="space-y-3">
                    {navigationSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                          activeSection === section.id
                            ? `bg-gradient-to-r ${section.color}/20 border border-white/20 text-white shadow-lg`
                            : 'bg-gray-800/30 border border-gray-700/30 text-gray-300 hover:bg-gray-700/40 hover:text-white'
                        }`}
                      >
                        <motion.div
                          className={`p-2 rounded-lg ${
                            activeSection === section.id
                              ? `bg-gradient-to-r ${section.color}`
                              : 'bg-gray-600/50'
                          }`}
                        >
                          {section.icon}
                        </motion.div>
                        <span className="font-medium">{section.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Area */}
            <motion.div className="lg:col-span-4 space-y-8">
              {/* Role Overview */}
              <motion.section className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                  <motion.h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-4">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center"
                    >
                      <BriefcaseIcon className="w-8 h-8 text-white" />
                    </motion.div>
                    Role Deep Dive
                  </motion.h2>

                  <div className="space-y-6">
                    {experience.detailedDescription?.map((paragraph: string, index: number) => (
                      <motion.div key={index} className="group/paragraph">
                        <motion.p className="text-gray-300 leading-relaxed text-lg p-6 bg-gradient-to-r from-gray-700/20 to-gray-800/20 rounded-xl border border-gray-600/30 group-hover/paragraph:border-purple-500/30 transition-all duration-300">
                          <span className="text-purple-400 font-semibold text-xl mr-2">
                            {String(index + 1).padStart(2, '0')}.
                          </span>
                          {paragraph}
                        </motion.p>
                      </motion.div>
                    )) || (
                      <p className="text-gray-300 leading-relaxed text-lg p-6 bg-gradient-to-r from-gray-700/20 to-gray-800/20 rounded-xl border border-gray-600/30">
                        {experience.summary}
                      </p>
                    )}
                  </div>
                </div>
              </motion.section>

              {/* Key Achievements */}
              <motion.section className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                  <motion.h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-4">
                    <motion.div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <TrophyIcon className="w-8 h-8 text-white" />
                    </motion.div>
                    Key Achievements
                  </motion.h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experience.keyAchievements?.map((achievement: string, index: number) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl hover:border-green-500/50 transition-all duration-300"
                      >
                        <motion.div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircleIcon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="relative z-10">
                          <motion.div className="text-green-400 font-semibold text-sm mb-2">
                            Achievement #{index + 1}
                          </motion.div>
                          <span className="text-gray-300 leading-relaxed text-lg">
                            {achievement}
                          </span>
                        </div>
                      </motion.div>
                    )) || (
                      <div className="col-span-2 text-center p-8">
                        <p className="text-gray-400">No specific achievements listed for this role.</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.section>

              {/* Technologies */}
              <motion.section className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-6 rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                  <motion.h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <motion.div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <RocketLaunchIcon className="w-6 h-6 text-white" />
                    </motion.div>
                    Technologies & Tools
                  </motion.h3>
                  <div className="flex flex-wrap gap-3">
                    {experience.technologies.map((tech: string, index: number) => (
                      <motion.span
                        key={index}
                        className="px-4 py-3 text-sm bg-gradient-to-r from-blue-600/30 to-cyan-600/30 text-blue-200 rounded-full border border-blue-500/30 hover:from-blue-600/50 hover:to-cyan-600/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer font-medium"
                        whileHover={{ scale: 1.15, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Impact Metrics */}
              {experience.keyMetrics && (
                <motion.section className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <motion.h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-4">
                      <motion.div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                        <ChartBarIcon className="w-8 h-8 text-white" />
                      </motion.div>
                      Impact Metrics
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(experience.keyMetrics).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          className="p-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
                        >
                          <div className="text-center">
                            <motion.div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                              <AnimatedCounter end={value} prefix="" suffix="" />
                            </motion.div>
                            <div className="text-gray-300 text-sm capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.section>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Navigation */}
        <motion.div
          className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl border-t border-gray-700/50 py-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Explore More</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover other experiences in my professional journey or return home to explore more sections.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/experience"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl hover:from-purple-700 hover:to-cyan-600 font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25"
              >
                <motion.div
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronRightIcon className="w-5 h-5 rotate-180" />
                </motion.div>
                All Experiences
                <motion.div className="w-2 h-2 bg-white rounded-full group-hover:w-4 transition-all duration-300" />
              </Link>

              <Link
                href="/"
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-xl hover:border-cyan-500 hover:text-white hover:bg-cyan-500/10 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <motion.div
                  animate={{ rotate: [0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <RocketLaunchIcon className="w-5 h-5" />
                </motion.div>
                Back to Home
                <motion.div className="w-2 h-2 bg-current rounded-full group-hover:w-4 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}