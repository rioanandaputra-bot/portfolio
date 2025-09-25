"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/constants/personalData";
import Image from "next/image";

const ProjectsPreview = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories
  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    ...Array.from(new Set(projects.map(p => p.category)))
      .map(category => ({
        id: category,
        label: category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' '),
        count: projects.filter(p => p.category === category).length
      }))
  ];

  // Filter projects based on selected category (max 3 per category)
  const filteredProjects = selectedCategory === "all" 
    ? projects.slice(0, 3)
    : projects.filter(p => p.category === selectedCategory).slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center py-12 relative overflow-hidden select-text" id="projects-preview">
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
          Featured Projects
        </h2>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-6">
          Showcasing innovative solutions across different categories and technologies
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                  : "bg-transparent border border-gray-600 text-gray-300 hover:border-purple-500/50 hover:text-purple-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label} ({category.count})
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 relative z-10"
        layout
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group"
            layout
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:border-purple-500/50">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'fullstack' 
                        ? 'bg-purple-500/80 text-white'
                        : project.category === 'web'
                        ? 'bg-blue-500/80 text-white'
                        : 'bg-green-500/80 text-white'
                    }`}>
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      project.status === 'Completed'
                        ? 'bg-green-500/80 text-white'
                        : 'bg-yellow-500/80 text-black'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.excerpt}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded text-purple-200 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 rounded text-gray-400 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                    <span className="text-sm text-purple-300 group-hover:text-purple-200 transition-colors">
                      View Project Details →
                    </span>
                    
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <div className="flex items-center gap-1 text-green-400 text-xs">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Demo
                        </div>
                      )}
                      {project.githubUrl && (
                        <div className="flex items-center gap-1 text-blue-400 text-xs">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Code
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-12 relative z-10"
      >
        <Link
          href="/projects"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/25"
        >
          View All Projects
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <p className="text-gray-400 text-sm mt-3">
          Explore {projects.length} projects across {categories.length - 1} categories
        </p>
      </motion.div>
    </div>
  );
};

export default ProjectsPreview;