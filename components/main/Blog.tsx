"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { slideInFromTop } from "@/utils/motion";
import { blogPosts } from "@/constants/personalData";

const Blog = () => {
  // Show only latest 3 posts on home page
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div
      className="flex flex-col items-center justify-center py-20 relative overflow-hidden"
      id="blog"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 -left-32 w-96 h-96 bg-gradient-to-r from-purple-500 to-transparent rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 -right-32 w-96 h-96 bg-gradient-to-l from-cyan-500 to-transparent rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/2 left-20 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-300"></div>
      </div>

      <motion.h1 
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 relative z-10"
      >
        Latest Blog Posts
      </motion.h1>
      
      <div className="h-full w-full px-10 max-w-[1400px] relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromTop}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Insights and tutorials on web development, technology trends, and software engineering best practices
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] hover:border-[#7042f8aa] transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300">
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1).replace('-', ' ')}
                  </span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">⏱️ {post.readTime}</span>
                  
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 border border-[#7042f861] rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            View All Posts →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;