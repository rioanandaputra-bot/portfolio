"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { personalInfo } from "@/constants/personalData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: personalInfo.email,
      description: "Send me an email anytime",
      action: `mailto:${personalInfo.email}`,
      color: "purple"
    },
    {
      icon: "📱",
      title: "Phone",
      value: personalInfo.phone,
      description: "Call me during business hours",
      action: `tel:${personalInfo.phone}`,
      color: "cyan"
    },
    {
      icon: "📍",
      title: "Location",
      value: personalInfo.location,
      description: "Based in",
      action: "#",
      color: "green"
    }
  ];

  return (
    <div
      className="flex flex-col items-center justify-center py-20 relative overflow-hidden"
      id="contact"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500 to-transparent rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-cyan-500 to-transparent rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-32 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
      </div>

      <motion.h1 
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 relative z-10"
      >
        Get In Touch
      </motion.h1>
      
      <div className="h-full w-full px-10 max-w-[1400px] relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromTop}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into exceptional digital experiences. Let&apos;s discuss how we can bring your vision to life with innovative technology solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Contact Methods Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              variants={slideInFromTop}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] hover:border-[#7042f8aa] transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                method.color === 'purple' ? 'from-purple-500 to-pink-500' :
                method.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                'from-green-500 to-emerald-500'
              }`}></div>
              
              <div className="relative z-10 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${
                  method.color === 'purple' ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30' :
                  method.color === 'cyan' ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/30' :
                  'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30'
                }`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {method.title}
                </h3>
                <p className={`font-medium mb-1 ${
                  method.color === 'purple' ? 'text-purple-400' :
                  method.color === 'cyan' ? 'text-cyan-400' :
                  'text-green-400'
                }`}>
                  {method.value}
                </p>
                <p className="text-gray-400 text-sm">
                  {method.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="w-6 h-6 border border-current rounded-full"></div>
              </div>
              <div className="absolute bottom-3 left-3 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="w-4 h-4 bg-current rounded-full"></div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Why Work With Me */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={slideInFromLeft(0.3)}
              className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
                  Partnership Benefits
                </h2>
                
                <div className="space-y-6">
                  {[
                    { icon: "⚡", title: "Rapid Delivery", desc: "Efficient development with 24-hour communication" },
                    { icon: "🎯", title: "Strategic Solutions", desc: "Technology aligned with business objectives" },
                    { icon: "🔧", title: "Quality Assurance", desc: "Clean, scalable, and maintainable code" },
                    { icon: "🤝", title: "Collaborative Process", desc: "Transparent workflow with regular updates" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={slideInFromLeft(0.4)}
              className="text-center"
            >
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex justify-center gap-4">
                {[
                  { name: "GitHub", url: personalInfo.social.github, color: "from-gray-500 to-gray-700" },
                  { name: "LinkedIn", url: personalInfo.social.linkedin, color: "from-blue-500 to-blue-700" },
                  { name: "Instagram", url: personalInfo.social.instagram, color: "from-pink-500 to-purple-600" }
                ].map((social, index) => (
                  social.url && (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white font-bold hover:scale-110 transform transition-all duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {social.name[0]}
                    </motion.a>
                  )
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              variants={slideInFromRight(0.3)}
              className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861]"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#0300145e] border border-[#7042f861] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#0300145e] border border-[#7042f861] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#0300145e] border border-[#7042f861] text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="project">💼 Project Inquiry</option>
                      <option value="collaboration">🤝 Collaboration</option>
                      <option value="job">💼 Job Opportunity</option>
                      <option value="consultation">💡 Consultation</option>
                      <option value="other">💬 Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-[#0300145e] border border-[#7042f861] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:from-purple-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <span>🚀</span>
                      </span>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromTop}
          className="text-center mt-16"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-30 animate-pulse"></div>
            <div className="relative bg-[#0300145e] border border-[#7042f861] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3">
                Ready to Start Something Amazing?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you have a clear vision or just a spark of an idea, 
                I&apos;m here to help bring it to life with cutting-edge technology and creative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  📄 Download Resume
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border border-[#7042f861] text-white font-medium rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                >
                  👀 View My Work
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;