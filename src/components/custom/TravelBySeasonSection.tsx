"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import THEME from "@/constants/theme";

export default function TravelBySeasonSection() {
  const seasons = [
    {
      season: "Spring",
      months: "March - May",
      temp: "15°C - 25°C",
      title: "Blooming Paradise",
      description: "Witness Kashmir's famous tulip gardens in full bloom. Perfect for sightseeing and photography.",
      highlights: ["Tulip Festival", "Mild Weather", "Fewer Crowds"],
      color: `${THEME.section.uniformBlue}`,
      bestFor: "Photography & Gardens",
    },
    {
      season: "Summer",
      months: "June - August",
      temp: "20°C - 30°C",
      title: "Peak Season",
      description: "Ideal weather for trekking, river rafting, and exploring high-altitude destinations.",
      highlights: ["Perfect Weather", "Trekking", "Water Sports"],
      color: "from-yellow-400 to-orange-500",
      bestFor: "Adventure Activities",
    },
    {
      season: "Autumn",
      months: "September - November",
      temp: "10°C - 20°C",
      title: "Golden Season",
      description: "Experience stunning fall foliage and harvest season. Best for peaceful retreats.",
      highlights: ["Fall Colors", "Apple Harvest", "Pleasant Climate"],
      color: `${THEME.section.uniformBlue}`,
      bestFor: "Scenic Beauty",
    },
    {
      season: "Winter",
      months: "December - February",
      temp: "-5°C - 10°C",
      title: "Snow Wonderland",
      description: "Gulmarg transforms into a skiing paradise. Experience snow-covered landscapes.",
      highlights: ["Skiing", "Snowboarding", "Winter Sports"],
      color: "from-yellow-400 to-orange-500",
      bestFor: "Snow Activities",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#FFD84D]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#1BA5B8]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#1BA5B8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Plan Your Visit
          </span>
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-[#0A4D5C] mb-4">
            Travel By <span className="text-[#1BA5B8]">Season</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kashmir offers unique experiences in every season. Choose the perfect time for your adventure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {seasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${item.color} p-6 text-white relative`}>
                  <div className="absolute top-4 right-4">
                    <Calendar className="w-6 h-6 text-white/80" />
                  </div>
                  <h3 className="font-ubuntu text-2xl font-bold mb-2">{item.season}</h3>
                  <p className="text-white/90 text-sm mb-1">{item.months}</p>
                  <p className="text-white/80 text-xs">{item.temp}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-ubuntu text-xl font-bold text-[#0A4D5C] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-4">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#1BA5B8] rounded-full"></div>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Best for tag */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-xs text-[#1BA5B8] font-semibold uppercase">
                      Best for: {item.bestFor}
                    </span>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="px-6 pb-6">
                  <Link
                    href="/tours"
                    className="flex items-center justify-center gap-2 text-[#1BA5B8] font-semibold text-sm group-hover:gap-4 transition-all duration-300"
                  >
                    <span>Explore Tours</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            Not sure which season is right for you?
          </p>
          <Link
            href="/contact"
            className={`${THEME.button.primary} inline-block px-8 py-4 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300`}
          >
            Talk to Our Travel Experts
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
