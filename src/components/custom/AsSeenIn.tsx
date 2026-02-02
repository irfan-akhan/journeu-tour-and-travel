"use client";

import { motion } from "framer-motion";

export default function AsSeenIn() {
  const media = [
    { name: "National Geographic", logo: "🌍" },
    { name: "Travel + Leisure", logo: "✈️" },
    { name: "Condé Nast Traveler", logo: "🏆" },
    { name: "Lonely Planet", logo: "🗺️" },
    { name: "Forbes Travel", logo: "💼" },
    { name: "BBC Travel", logo: "📺" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-10 border border-gray-100"
    >
      <h2 className="font-ubuntu text-3xl font-bold text-center text-gray-900 mb-8">
        As Featured In
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {media.map((outlet, index) => (
          <motion.div
            key={outlet.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center gap-3 p-4 hover:scale-110 transition-transform cursor-pointer"
          >
            <div className="text-5xl">{outlet.logo}</div>
            <span className="text-xs font-semibold text-gray-600 text-center">
              {outlet.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
