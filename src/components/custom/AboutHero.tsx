"use client";

import { motion } from "framer-motion";
import { Award, Users, MapPin, Heart, Target, Eye } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import { SECTION_BACKGROUNDS, DECORATIVE_GRADIENTS } from "@/constants/theme";

export default function AboutHero() {
  const stats = [
    { icon: Users, value: "200+", label: "Happy Customers" },
    { icon: MapPin, value: "20+", label: "Destinations" },
    { icon: Award, value: "3+", label: "Years Experience" },
    // { icon: Heart, value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section className={`relative min-h-[70vh] flex items-center justify-center ${SECTION_BACKGROUNDS.uniformBlue} overflow-hidden`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
      </div>

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-32 h-32 bg-[#FFD84D]/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-[#FFD84D] font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Kashmir and Beyond
          </motion.span>
          <h1 className="font-ubuntu text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The most loved <br />
            <span className="text-[#FFD84D]">Travel Agency</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We are passionate about connecting explorers with Kashmir's most extraordinary destinations
          </p>
        </motion.div>

        {/* Stats with better design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-md md:max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/30 text-center hover:bg-white/20 transition-all duration-300 cursor-default"
            >
              <div className={`w-16 h-16 ${DECORATIVE_GRADIENTS.iconAccent} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
