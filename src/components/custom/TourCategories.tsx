"use client";

import THEME from "@/constants/theme";
import { motion } from "framer-motion";
import { Mountain, Sparkles, Heart, Users, Crown, Compass } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: 1,
    icon: Mountain,
    title: "Adventure Tours",
    description: "Trekking, rafting, and extreme sports",
    tourCount: 8,
    gradient: "from-[#1BA5B8] to-[#1BA5B8]",
    link: "/tours?search=adventure",
  },
  {
    id: 2,
    icon: Sparkles,
    title: "Cultural Tours",
    description: "Heritage sites and local experiences",
    tourCount: 3,
    gradient: "from-[#FFD84D] to-[#FFA500]",
    link: "/tours?search=cultural",
  },
  {
    id: 3,
    icon: Heart,
    title: "Honeymoon Packages",
    description: "Romantic getaways for couples",
    tourCount: 3,
    gradient: "from-rose-500 to-pink-600",
    link: "/tours?search=honeymoon",
  },
  {
    id: 4,
    icon: Users,
    title: "Family Tours",
    description: "Fun-filled trips for all ages",
    tourCount: 9,
    gradient: "from-[#FFD84D] to-[#FFA500]",
    link: "/tours?search=family",
  },
  {
    id: 5,
    icon: Users,
    title: "Group Tours",
    description: "Social adventures with fellow travelers",
    tourCount: 2,
    gradient: "from-[#1BA5B8] to-[#1BA5B8]",
    link: "/tours?search=group",
  },
  {
    id: 6,
    icon: Crown,
    title: "Luxury Tours",
    description: "Premium experiences and 5-star comfort",
    tourCount: 3,
    gradient: "from-[#FFD84D] to-[#FFA500]",
    link: "/tours?search=luxury",
  },
];

export default function TourCategories() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231BA5B8' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1BA5B8]/10 to-[#FFD84D]/10 rounded-full mb-4 border border-[#1BA5B8]/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Compass className="w-5 h-5 text-[#1BA5B8]" />
            <span className="text-[#1BA5B8] font-bold text-sm tracking-wider uppercase">
              Explore Categories
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-ubuntu">
            Choose Your Perfect
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1BA5B8] to-[#FFD84D]">
              Travel Style
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            From adrenaline-pumping adventures to serene cultural journeys, find the perfect tour that matches your travel dreams
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link href={category.link}>
                  <motion.div
                    className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent overflow-hidden h-full"
                    whileHover={{ y: -12, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Gradient Background on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      initial={false}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon Container */}
                      <motion.div
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${category.gradient} mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                      </motion.div>

                      {/* Tour Count Badge */}
                      {/* <div className="absolute top-6 right-6">
                        <motion.div
                          className="px-4 py-2 bg-gray-100 group-hover:bg-white/20 rounded-full transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="text-sm font-bold text-gray-700 group-hover:text-white transition-colors duration-300">
                            {category.tourCount} Tours
                          </span>
                        </motion.div>
                      </div> */}

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300 font-ubuntu">
                        {category.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 group-hover:text-white/90 leading-relaxed mb-6 transition-colors duration-300">
                        {category.description}
                      </p>

                      {/* Explore Link */}
                      <motion.div
                        className="inline-flex items-center gap-2 font-semibold text-[#1BA5B8] group-hover:text-white transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span>Explore Tours</span>
                        <motion.svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </motion.svg>
                      </motion.div>
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gray-200 group-hover:border-white/30 rounded-tl-3xl transition-colors duration-300" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gray-200 group-hover:border-white/30 rounded-br-3xl transition-colors duration-300" />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
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
              className={`${THEME.button.primary} group px-10 py-5 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 inline-flex items-center gap-3`}
              style={{
                backgroundSize: "200% 100%",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View All Tours</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
