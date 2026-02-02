"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface LanguageSupportProps {
  title?: string;
  subtitle?: string;
  languages?: string[];
}

export default function LanguageSupport({
  title = "We Speak Your Language",
  subtitle = "Breaking barriers for seamless communication",
  languages = ["English", "Hindi", "Urdu", "Kashmiri", "Punjabi"]
}: LanguageSupportProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#1BA5B8] via-[#0F95A8] to-[#0A4D5C] overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD84D] rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30"
              >
                <Languages className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-ubuntu font-bold mb-3 md:mb-4 text-white"
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
                className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-light px-4"
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                  <Badge className="bg-white/95 backdrop-blur-sm text-[#1BA5B8] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold shadow-xl border-2 border-white hover:bg-white transition-all duration-300">
                  {lang}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
