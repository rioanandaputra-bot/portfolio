"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { projects } from "@/constants/personalData";
import Image from "next/image";

const ProjectsPreview = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [focusedProject, setFocusedProject] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  // Get unique categories with enhanced styling
  const categories = [
    { id: "all", label: "All Work", count: projects.length, icon: "🌟" },
    ...Array.from(new Set(projects.map(p => p.category)))
      .map(category => ({
        id: category,
        label: category === 'fullstack' ? 'Full Stack' : 
               category === 'web' ? 'Web Apps' : 
               category === 'mobile' ? 'Mobile' : 'Other',
        count: projects.filter(p => p.category === category).length,
        icon: category === 'fullstack' ? '⚡' : 
              category === 'web' ? '🌐' : 
              category === 'mobile' ? '📱' : '🔧'
      }))
  ];

  // Filter projects (max 3 featured)
  const filteredProjects = selectedCategory === "all" 
    ? projects.slice(0, 3)
    : projects.filter(p => p.category === selectedCategory).slice(0, 3);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 80, 
      rotateX: 10,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.8 
      }
    }
  };

  // Optimized floating elements (reduced for performance)
  const floatingElements = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    x: 20 + (i * 25), // More predictable positioning
    y: 20 + (i * 20),
    delay: i * 0.5,
    duration: 6,
  }));

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen py-20 relative overflow-hidden select-text"
      id="projects-preview"
    >
      {/* Optimized Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Simplified gradient orbs */}
        <motion.div 
          className="absolute top-20 -left-20 w-72 h-72 bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-cyan-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 -right-20 w-64 h-64 bg-gradient-to-l from-orange-500/15 via-red-500/15 to-purple-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Reduced floating particles */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-8, 8, -8],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Simplified Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12 relative z-10"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-full backdrop-blur-sm mb-6"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-lg">�</span>
          <span className="text-gray-300 font-medium text-sm">Featured Work</span>
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Project Showcase
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 max-w-xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Crafting digital solutions that make a difference
        </motion.p>

        {/* Compact Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 p-1.5 bg-gradient-to-r from-[#0300145e] to-[#0300148a] border border-pink-500/20 rounded-xl backdrop-blur-sm max-w-lg mx-auto"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'text-white bg-gradient-to-r from-pink-500 to-purple-500'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-1.5">
                <span className="text-xs">{category.icon}</span>
                {category.label}
                <span className="text-xs opacity-70">({category.count})</span>
              </span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced 3D Project Showcase */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-7xl px-6 relative z-10"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                onFocus={() => setFocusedProject(project.id)}
                onBlur={() => setFocusedProject(null)}
                className="group relative cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                {/* Optimized Project Card */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-pink-500/20 backdrop-blur-sm shadow-xl"
                  animate={{
                    scale: hoveredProject === project.id ? 1.03 : 1,
                    borderColor: hoveredProject === project.id ? "rgba(219, 39, 119, 0.4)" : "rgba(219, 39, 119, 0.2)",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Simplified shimmer effect */}
                  {hoveredProject === project.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    />
                  )}

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={index === 0} // Prioritize first image
                    />
                    
                    {/* Simplified overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Streamlined badges */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-medium backdrop-blur-sm border border-white/20 ${
                        project.category === 'fullstack' 
                          ? 'bg-pink-500/80 text-white'
                          : project.category === 'web'
                          ? 'bg-blue-500/80 text-white'
                          : 'bg-green-500/80 text-white'
                      }`}>
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-medium backdrop-blur-sm border border-white/20 ${
                        project.status === 'Completed'
                          ? 'bg-green-500/80 text-white'
                          : 'bg-yellow-500/80 text-black'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Quick links on hover */}
                    {hoveredProject === project.id && (
                      <motion.div
                        className="absolute bottom-3 right-3 flex gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-green-500/90 rounded-lg flex items-center justify-center text-white text-xs backdrop-blur-sm hover:bg-green-400/90 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            🚀
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-gray-700/90 rounded-lg flex items-center justify-center text-white text-xs backdrop-blur-sm hover:bg-gray-600/90 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            💻
                          </motion.a>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Simplified Content */}
                  <div className="p-5 space-y-3">
                    <motion.h3 
                      className="text-lg font-bold text-white leading-tight line-clamp-2"
                      animate={{ 
                        color: hoveredProject === project.id ? "#ec4899" : "#ffffff"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                      {project.excerpt}
                    </p>

                    {/* Compact tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-pink-500/10 border border-pink-500/20 rounded text-xs text-pink-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 rounded text-gray-400 text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Simplified CTA */}
                    <Link href={`/projects/${project.slug}`} className="block">
                      <motion.div 
                        className="flex items-center justify-between pt-3 border-t border-gray-700/20 group"
                        animate={{ 
                          borderColor: hoveredProject === project.id ? "rgba(219, 39, 119, 0.2)" : "rgba(75, 85, 99, 0.2)"
                        }}
                      >
                        <span className="text-sm text-pink-300 group-hover:text-pink-200 transition-colors">
                          View Details
                        </span>
                        <motion.span
                          className="text-pink-300"
                          animate={{ x: hoveredProject === project.id ? 3 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </Link>
                  </div>

                  {/* Simplified decorative elements */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-pink-500/10 to-transparent rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-bl-2xl" />
                </motion.div>

                {/* Floating Shadow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-3xl blur-xl -z-10"
                  animate={{
                    scale: hoveredProject === project.id ? 1.1 : 0.95,
                    opacity: hoveredProject === project.id ? 0.8 : 0.3,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Compact Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-12 relative z-10"
      >
        <div className="inline-block p-6 bg-gradient-to-r from-[#0300145e] to-[#0300148a] border border-pink-500/20 rounded-2xl backdrop-blur-sm">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
            Want to See More?
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            {projects.length} projects • {categories.length - 1} categories • Multiple tech stacks
          </p>
          
          <Link href="/projects">
            <motion.button
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Browse All Projects</span>
              <motion.svg 
                className="w-4 h-4 ml-2" 
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsPreview;