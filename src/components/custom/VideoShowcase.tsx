"use client";

import THEME from "@/constants/theme";
import { motion } from "framer-motion";
import { Play, Mountain, Heart, Award, Sparkles } from "lucide-react";
import { useState } from "react";

const highlights = [
  {
    icon: Mountain,
    title: "20+ Destinations",
    description: "Across Kashmir & Ladakh",
  },
  {
    icon: Heart,
    title: "200+ Travelers",
    description: "Happy customers worldwide",
  },
  {
    icon: Award,
    title: "10+ Awards",
    description: "Industry recognition",
  },
  {
    icon: Sparkles,
    title: "100% Verified",
    description: "Authentic experiences",
  },
];

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Kashmir travel video from YouTube shorts
  const videoUrl = "/homepage_square.mov";
  const thumbnailUrl = "/destinations/kashmir/srinagar/01.jpg?w=1920&h=1080&fit=crop";

  return (
    <section className={`${THEME.section.uniformBlue} relative py-24 overflow-hidden`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Play className="w-5 h-5 text-[#FFD84D]" />
            <span className="text-white font-bold text-sm tracking-wider uppercase">
              Watch Our Story
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-ubuntu">
            Experience Kashmir Like
            <br />
            <span className="text-[#FFD84D]">Never Before</span>
          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Watch how we've been creating unforgettable memories for travelers from around the world
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {!isPlaying ? (
                <>
                  {/* Thumbnail */}
                  <div
                    className="relative h-[400px] lg:h-[500px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${thumbnailUrl})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Play Button */}
                    <motion.button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="relative"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {/* Outer Ring */}
                        <motion.div
                          className="absolute inset-0 w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />

                        {/* Play Button Circle */}
                        <div className="relative w-28 h-28 rounded-full bg-[#FFD84D] shadow-2xl flex items-center justify-center group-hover:bg-[#FFE066] transition-colors duration-300">
                          <Play
                            className="w-12 h-12 text-[#0A4D5C] ml-2"
                            fill="#0A4D5C"
                            strokeWidth={0}
                          />
                        </div>
                      </motion.div>
                    </motion.button>

                    {/* Duration Badge */}
                    <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                      <span className="text-sm font-bold text-gray-900">
                        3:45
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                // Video iframe (replace with actual video URL)
                <div className="relative h-[400px] lg:h-[500px] bg-black">
                  <video
                    className="w-full h-full object-cover"
                    src={videoUrl}
                    autoPlay
                    controls
                    playsInline
                  />
                </div>
              )}

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#FFD84D] rounded-tl-3xl opacity-50" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#FFD84D] rounded-br-3xl opacity-50" />
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-6 -right-6 px-8 py-6 bg-white rounded-2xl shadow-2xl hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4">
                <div className={`${THEME.section.uniformBlue} w-12 h-12 rounded-full flex items-center justify-center`}>
                  <Heart className="w-6 h-6 text-white" fill="white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Happy Travelers</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-ubuntu">
                Discover the Paradise on Earth
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                From the snow-capped peaks of the Himalayas to the serene waters of Dal Lake, 
                Kashmir offers experiences that will take your breath away. Watch our video to 
                see why thousands of travelers choose us to explore this magnificent region.
              </p>
              <p className="text-white/70 leading-relaxed">
                With 3+ years of expertise, we've crafted the perfect journeys that showcase 
                the best of Kashmir's natural beauty, rich culture, and warm hospitality. 
                Let us take you on an adventure you'll cherish forever.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <Icon className="w-10 h-10 text-[#FFD84D] mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="text-xl font-bold text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-white/70 text-sm">
                        {highlight.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="/tours"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFD84D] text-[#0A4D5C] font-bold rounded-full shadow-xl hover:shadow-2xl hover:bg-[#FFE066] transition-all duration-300"
              >
                <span>Explore Our Tours</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
