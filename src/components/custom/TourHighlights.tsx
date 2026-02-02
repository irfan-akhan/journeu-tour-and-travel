"use client";

import { motion } from "framer-motion";
import { Check, Star, Sparkles } from "lucide-react";

interface TourHighlightsProps {
  highlights: string[];
  inclusions: string[];
  exclusions?: string[];
}

export default function TourHighlights({ highlights, inclusions, exclusions = [] }: TourHighlightsProps) {
  return (
    <div className="grid md:grid-cols-1 gap-8">
      {/* Highlights
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] text-white rounded-3xl p-8 shadow-xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
            <Star className="w-6 h-6" />
          </div>
          <h3 className="font-ubuntu text-2xl font-bold">Trip Highlights</h3>
        </div>

        <ul className="space-y-4">
          {highlights.map((highlight, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <Sparkles className="w-5 h-5 text-[#FFD84D] flex-shrink-0 mt-0.5" />
              <span className="text-white/90 leading-relaxed">{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div> */}

      {/* Inclusions & Exclusions */}
      <div className="space-y-6">
        {/* Inclusions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg p-8 border-2 border-green-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-xl">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-ubuntu text-2xl font-bold text-gray-900">What's Included</h3>
          </div>

          <ul className="space-y-3">
            {inclusions.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Exclusions */}
        {exclusions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-lg p-8 border-2 border-red-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-100 p-3 rounded-xl">
                <span className="text-red-600 font-bold text-xl">×</span>
              </div>
              <h3 className="font-ubuntu text-2xl font-bold text-gray-900">Not Included</h3>
            </div>

            <ul className="space-y-3">
              {exclusions.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-red-100 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <span className="text-red-600 font-bold text-sm">×</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}
