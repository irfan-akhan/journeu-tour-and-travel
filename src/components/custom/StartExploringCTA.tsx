"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import THEME, { SECTION_BACKGROUNDS } from "@/constants/theme";

export default function StartExploringCTA() {
  const scrollToItinerary = () => {
    const itinerarySection = document.getElementById("itinerary-section");
    if (itinerarySection) {
      itinerarySection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden"
    >
      {/* Background with gradient */}
      <div className={`absolute inset-0 ${THEME.section.uniformBlue} opacity-95`}></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FFD84D]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 text-center py-20 px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFD84D]/20 backdrop-blur-sm rounded-full border border-[#FFD84D]/30 mb-6"
        >
          <Sparkles className="w-5 h-5 text-[#FFD84D]" />
          <span className="text-white font-semibold">Your Adventure Awaits</span>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-ubuntu text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Ready to Begin?
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-white/90 text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
        >
          Discover the detailed day-by-day journey that awaits you on this incredible adventure
        </motion.p>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToItinerary}
          className="group inline-flex items-center gap-3 px-10 py-5 bg-[#FFD84D] text-[#0A4D5C] font-bold text-xl rounded-full shadow-2xl hover:shadow-[#FFD84D]/50 transition-all"
        >
          START EXPLORING
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
}
