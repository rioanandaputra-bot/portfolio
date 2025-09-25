"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson", 
    position: "Product Manager",
    company: "TechCorp Inc.",
    content: "Rio delivered exceptional results that transformed our digital presence.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO", 
    company: "StartupXYZ",
    content: "Outstanding collaboration. Delivered scalable solutions that increased engagement by 200%.",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    id: 3,
    name: "Emily Davis",
    position: "Design Lead",
    company: "CreativeStudio", 
    content: "Exceptional precision in implementing design concepts and animations.",
    rating: 5,
    avatar: "👩‍🎨"
  }
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 relative" id="testimonials">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12 relative z-10"
      >
        Client Testimonials
      </motion.h1>
      
      <div className="h-full w-full px-10 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] hover:border-[#7042f8aa] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-white font-semibold text-sm select-text">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs select-text">{testimonial.position} at {testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed select-text">
                  {testimonial.content}
                </p>
                
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
