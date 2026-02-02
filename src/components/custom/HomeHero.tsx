"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Star, Users, Award } from "lucide-react";
import Link from "next/link";
import FloatingElements from "./FloatingElements";
import { SECTION_BACKGROUNDS, OVERLAY_GRADIENTS } from "@/constants/theme";

export default function HomeHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const stats = [
    { icon: Users, value: "200+", label: "Happy Travelers" },
    { icon: MapPin, value: "20+", label: "Destinations" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: Award, value: "3+", label: "Years Experience" },
  ];

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${SECTION_BACKGROUNDS.uniformBlue} pt-16 md:pt-20`}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src="/homepage_master.mov"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      
      {/* Dark Overlay */}
      <div className={`absolute inset-0 ${OVERLAY_GRADIENTS.darkMedium}`}></div>

      {/* Animated Background Pattern with Parallax */}
      <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
      </motion.div>

      {/* Floating Elements */}
      <FloatingElements />

      <motion.div 
        className="relative z-10 container mx-auto px-4 py-20"
        style={{ opacity, scale }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Luxury Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6"
            >
              <span className="text-[#FFD84D] text-sm font-semibold tracking-[0.2em] uppercase">
                Kashmir & Beyond
              </span>
            </motion.div>

            <h1 className="font-ubuntu text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-[#FFD84D]">Kashmir</span><br />Delightful Timeless Unforgettable
            
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
              Unrivaled expertise for unique travel experiences
            </p>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto font-light">
              We're here to take you there — discover breathtaking landscapes, luxury accommodations, and unforgettable adventures
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/tours">
              <motion.button
                className="cursor-pointer px-8 py-4 bg-[#FFD84D] text-[#0A4D5C] font-semibold rounded-full hover:bg-[#FFE066] transition-all duration-300 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Packages
              </motion.button>
            </Link>
            <Link href="/destinations">
              <motion.button
                className="cursor-pointer px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore destinations
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <stat.icon className="w-8 h-8 text-[#FFD84D] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/70 text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
