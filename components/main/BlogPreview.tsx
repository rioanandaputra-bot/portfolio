"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slideInFromTop } from "@/utils/motion";
import { blogPosts } from "@/constants/personalData";
import Image from "next/image";

const BlogPreview = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 relative overflow-hidden select-text" id="blog-preview">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-gradient-to-r from-orange-500 to-transparent rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 -right-20 w-64 h-64 bg-gradient-to-l from-pink-500 to-transparent rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 relative z-10"
      >
        <h2 className="text-[32px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-4">
          Latest Articles
        </h2>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto">
          Fresh insights and knowledge sharing about web development, technology, and career growth
        </p>
      </motion.div>

      {/* Blog Cards */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl px-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback untuk gambar yang gagal load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2 py-1 bg-gradient-to-r from-orange-500/90 to-pink-500/90 text-white text-xs rounded-full capitalize">
                    {post.category.replace('-', ' ')}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-white text-xs bg-black/40 px-2 py-1 rounded-full">
                  {post.readTime}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-white font-semibold mb-2 text-sm line-clamp-2 group-hover:text-orange-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-xs line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <div className="flex gap-1">
                    {post.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-md text-orange-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center w-full px-3 py-2 text-xs bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-md hover:from-orange-600 hover:to-pink-600 transition-all duration-300 text-center justify-center group"
                >
                  Read Article
                  <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-semibold"
          >
            <span>Read All Articles</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-gray-400 text-sm mt-2">
            Discover more insights, tutorials, and career tips on our blog
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPreview;