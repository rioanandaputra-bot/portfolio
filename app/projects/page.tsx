"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/constants/personalData";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/sub/Breadcrumb";
import CategoryFilter from "@/components/sub/CategoryFilter";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Get unique categories from projects
  const allCategories = ["all", ...Array.from(new Set(projects.map(project => project.category)))];
  
  // Filter projects based on selected category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 pt-20">
        <Breadcrumb />
        
        {/* Hero Section */}
        <div className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-8"
          >
            A collection of projects showcasing my expertise in full-stack development, 
            mobile applications, and innovative web solutions. Each project represents 
            unique challenges solved with cutting-edge technologies.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="px-6">
          <CategoryFilter
            categories={allCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/projects/${project.slug}`}>
                    <div className="bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:border-purple-500/50">
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

                        {/* Project Links */}
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            {project.liveUrl && (
                              <div className="flex items-center gap-1 text-green-400 text-xs">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
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
                          
                          <span className="text-xs text-gray-500">
                            {project.startDate.split(' ')[1]} {project.startDate.split(' ')[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Projects Found */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="mb-4">
                <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No projects found</h3>
              <p className="text-gray-400">Try selecting a different category.</p>
            </motion.div>
          )}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border-y border-purple-500/20">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {projects.length}
                </div>
                <div className="text-gray-300 mt-2">Total Projects</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {projects.filter(p => p.status === 'Completed').length}
                </div>
                <div className="text-gray-300 mt-2">Completed</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {allCategories.length - 1}
                </div>
                <div className="text-gray-300 mt-2">Categories</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {Array.from(new Set(projects.flatMap(p => p.technologies))).length}
                </div>
                <div className="text-gray-300 mt-2">Technologies</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-gray-300 mb-8">
              I&apos;m always open to discussing new opportunities and exciting projects. 
              Let&apos;s build something amazing together.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 font-semibold"
            >
              Get In Touch
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}