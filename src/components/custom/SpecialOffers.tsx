"use client";

import { motion } from "framer-motion";
import { Percent, Clock, Zap, Tag, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import THEME, { SECTION_BACKGROUNDS, BUTTON_GRADIENTS, DECORATIVE_GRADIENTS } from "@/constants/theme";

const deals = [
  {
    id: "kashmir-honeymoon-5n6d-3star",
    title: "Kashmir Honeymoon - Budget Romance (3-Star)",
    originalPrice: 389 * 1.25, // Add 25% as original price
    discountedPrice: 389,
    discount: 20,
    type: "HONEYMOON SPECIAL",
    validUntil: "May 31, 2026",
    duration: "6 Days / 5 Nights",
    image: "/tour_covers/kashmir-honeymoon-5n6d-3star.png",
    description: "Perfect honeymoon for couples seeking romance without breaking the bank. Includes candlelight dinner, Shikara ride, and cozy stays.",
    badge: "Romantic",
    gradient: "from-[#FFD84D]/60 to-[#FFA500]/60",
    highlights: ["Candlelight Dinner", "Shikara Ride", "Houseboat Stay"],
  },
  {
    id: "kashmir-group-5n6d-3star",
    title: "Kashmir Group Tour - 3-Star Comfort",
    originalPrice: 399 * 1.20, // Add 20% as original price
    discountedPrice: 399,
    discount: 17,
    type: "GROUP DEAL",
    validUntil: "May 28, 2026",
    duration: "6 Days / 5 Nights",
    image: "/tour_covers/kashmir-group-5n6d-3star.png",
    description: "Perfect for groups — friends, families or corporate teams. From Dal Lake to meadows, includes deluxe houseboat stay.",
    badge: "Best for Groups",
    gradient: "from-[#1BA5B8]/60 to-[#0A4D5C]/60",
    highlights: ["Houseboat Stay", "Group Friendly", "All Meals"],
  },
  {
    id: "kashmir-7-day-jammu-circuit",
    title: "Kashmir Complete Journey - Jammu to Jammu Circuit",
    originalPrice: 449 * 1.22, // Add 22% as original price
    discountedPrice: 449,
    discount: 18,
    type: "COMPLETE TOUR",
    validUntil: "May 25, 2026",
    duration: "7 Days / 6 Nights",
    image: "/tour_covers/kashmir-7-day-jammu-circuit.png",
    description: "Complete Kashmir circuit from Jammu. Travel through Srinagar, Gulmarg, Sonmarg and Pahalgam experiencing lakes, meadows, and valleys.",
    badge: "Best Value",
    gradient: "from-[#FFD84D]/60 to-[#FFA500]/60",
    highlights: ["Jammu Start/End", "All Destinations", "Complete Circuit"],
  },
];

export default function SpecialOffers() {
  return (
    <section className={`relative py-24 ${THEME.section.uniformBlue} overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-[#1BA5B8]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFD84D]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Percent className="w-5 h-5 text-[#FFD84D]" />
            <span className="text-white font-bold text-sm tracking-wider uppercase">
              Exclusive Deals
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-ubuntu">
            Limited Time Offers
          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Grab these incredible deals before they're gone! Save big on your dream Kashmir vacation
          </p>
        </motion.div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Link href={`/tours/${deal.id}`}>
                <motion.div
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
                  whileHover={{ y: -15 }}
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${deal.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${deal.gradient}`} />

                    {/* Discount Badge */}
                    <motion.div
                      className="absolute top-6 left-6 px-3 py-2 bg-[#FFD84D] rounded-xl shadow-xl"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3 text-gray-900" fill="#0A4D5C" />
                        <span className="text-xl font-black text-gray-900">
                          {deal.discount}% OFF
                        </span>
                      </div>
                    </motion.div>

                    {/* Type Badge */}
                    <div className="absolute top-6 right-6 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-bold text-gray-900 tracking-wider">
                        {deal.type}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <motion.div
                      className="absolute bottom-6 left-6 px-4 py-2 bg-red-500 rounded-full shadow-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-xs font-bold text-white tracking-wider flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {deal.badge}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1BA5B8] transition-colors duration-300 font-ubuntu">
                      {deal.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {deal.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{deal.duration}</span>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {deal.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#1BA5B8]/10 text-[#1BA5B8] text-xs font-semibold rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Price Section */}
                    {/* <div className="flex items-end justify-between mb-6 pb-6 border-b border-gray-200">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-3xl font-black text-[#1BA5B8]">
                            ₹{deal.discountedPrice.toLocaleString()}
                          </span>
                          <span className="text-lg text-gray-400 line-through">
                            ₹{deal.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">Per Person</p>
                      </div>
                    </div> */}

                    {/* Valid Until */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Tag className="w-4 h-4" />
                        <span>Valid until {deal.validUntil}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className={`cursor-pointer w-full py-4 ${THEME.button.primary} text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.02]`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>

                  {/* Corner Shine Effect */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/tours">
            <motion.button
              className="cursor-pointer group px-10 py-5 bg-[#FFD84D] text-gray-900 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View All Tour/Packages</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
