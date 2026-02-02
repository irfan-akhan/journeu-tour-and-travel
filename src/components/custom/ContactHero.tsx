"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Send } from "lucide-react";
import { SECTION_BACKGROUNDS, DECORATIVE_GRADIENTS, BUTTON_GRADIENTS } from "@/constants/theme";

export default function ContactHero() {
  return (
    <section className={`relative ${SECTION_BACKGROUNDS.uniformBlue} text-white py-20 sm:py-28 md:py-36 lg:py-40 overflow-hidden`}>
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ 
          rotate: 360, 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-20 right-10 md:right-32 w-72 h-72 md:w-96 md:h-96 ${DECORATIVE_GRADIENTS.glowAccent} rounded-full blur-3xl`}
      />
      <motion.div
        animate={{ 
          rotate: -360, 
          scale: [1, 1.4, 1],
          x: [0, -40, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 md:left-20 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-tr from-[#FFD84D]/30 to-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"
      />

      {/* Floating Icons */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[10%] hidden lg:block"
      >
        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/20">
          <Phone className="w-8 h-8 text-[#FFD84D]" />
        </div>
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-40 right-[8%] hidden lg:block"
      >
        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/20">
          <Mail className="w-9 h-9 text-[#FFD84D]" />
        </div>
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 12, 0]
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 right-[15%] hidden lg:block"
      >
        <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/20">
          <MessageSquare className="w-7 h-7 text-[#FFD84D]" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-8"
          >
            <span className="w-2 h-2 bg-[#FFD84D] rounded-full animate-pulse" />
            <span className="text-[#FFD84D] font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs md:text-sm">
              We're Here For You
            </span>
            <span className="w-2 h-2 bg-[#FFD84D] rounded-full animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-ubuntu font-bold mb-6 leading-[1.1] tracking-tight"
          >
            Let's Start Your
            <span className={`block ${DECORATIVE_GRADIENTS.textAccent} bg-clip-text text-transparent mt-2`}>
              Journey Together
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto mb-10 px-4"
          >
            Your dream adventure to Kashmir & the Himalayas begins with a conversation. 
            <span className="block mt-2 text-white/80">Our expert team is ready to craft your perfect escape.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative ${BUTTON_GRADIENTS.accent} text-gray-900 px-10 py-5 rounded-2xl font-bold text-md shadow-2xl hover:shadow-[#FFD84D]/50 transition-all duration-300 overflow-hidden`}
            >
              <span className="relative z-10 flex items-center gap-3">
                Send Us a Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className={`absolute inset-0 ${BUTTON_GRADIENTS.accentHover} opacity-0 group-hover:opacity-100 transition-opacity`}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.a>

            <motion.a
              href="tel:+916005571959"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-xl flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call Now: +916005571959
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "24/7", label: "Available" },
              { value: "20+", label: "Experts" },
              { value: "<15min", label: "Response" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-ubuntu font-bold text-[#FFD84D] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/70 font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 md:h-24 text-gray-50" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}
