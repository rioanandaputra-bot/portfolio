import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

interface Props {
  src: string;
  title: string;
  description: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ src, title, description, technologies, liveUrl, githubUrl }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={slideInFromTop}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0300145e] hover:border-[#7042f8aa] transition-all duration-300 group"
    >
      <div className="relative">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="mt-2 text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons for mobile */}
        <div className="flex gap-2 md:hidden">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 text-center bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm rounded hover:from-purple-600 hover:to-cyan-600 transition-all"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 text-center border border-[#7042f861] text-white text-sm rounded hover:border-purple-500 transition-all"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
