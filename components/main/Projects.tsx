"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "../sub/ProjectCard";
import { projects } from "@/constants/personalData";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        Featured Projects
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="h-full w-full flex flex-col md:flex-row gap-10 px-10"
      >
        {projects.slice(0, 3).map((project, index) => (
          <div key={project.id} id={`project-${project.id}`} className="scroll-mt-24">
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          </div>
        ))}
      </motion.div>
      
      {/* View More Projects Button */}
      {projects.length > 3 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10"
        >
          <Link 
            href="/projects"
            className="py-3 px-8 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            View All Projects →
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
