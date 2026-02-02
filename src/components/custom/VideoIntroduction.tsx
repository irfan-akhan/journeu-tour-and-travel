"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Video {
  title: string;
  duration: string;
  views: string;
  gradient: string;
}

interface VideoIntroductionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  mainVideoTitle?: string;
  mainVideoDescription?: string;
  videos?: Video[];
}

export default function VideoIntroduction({
  // eyebrow = "Meet Our Team",
  title = "Our Stories",
  description = "Discover what makes Journeu your perfect travel partner",
  // mainVideoTitle = "Why Choose Journeu?",
  // mainVideoDescription = "Hear from our founder about our commitment to crafting unforgettable journeys",
  videos = [
    // { title: "Office Tour", duration: "2:30", views: "1.2K", gradient: "from-green-400 to-blue-500" },
    // { title: "Customer Stories", duration: "4:15", views: "856", gradient: "from-orange-400 to-pink-500" },
    // { title: "Safety Standards", duration: "3:45", views: "643", gradient: "from-cyan-400 to-blue-500" },
  ]
}: VideoIntroductionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-28 bg-gradient-to-br from-gray-50 via-purple-50/30 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* <p className="text-[#1BA5B8] font-semibold mb-3 md:mb-4 tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm">
                {eyebrow}
              </p> */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-ubuntu font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
                {title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-light px-4">
                {description}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={handlePlayPause}
            className="relative bg-black rounded-3xl overflow-hidden aspect-video group cursor-pointer shadow-2xl mb-10"
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              src="/contact_page_about.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              onEnded={handleVideoEnd}
              playsInline
            />

            {/* Overlay - hides when playing */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-[#FFD84D] rounded-full blur-2xl opacity-50 animate-pulse" />
                    <div className="relative w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-4 border-white/40 shadow-2xl">
                      <Play className="w-12 h-12 text-white ml-2" />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pause indicator - shows briefly when playing */}
            <AnimatePresence>
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <Pause className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <Card className="p-5 cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group">
                  <div className={`aspect-video bg-gradient-to-br ${video.gradient} rounded-xl mb-4 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center border-2 border-white/50"
                      >
                        <Play className="w-7 h-7 text-white ml-1" />
                      </motion.div>
                    </div>
                  </div>
                    <h4 className="font-ubuntu font-bold text-base sm:text-lg mb-2">{video.title}</h4>
                    <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                    <span className="font-medium">{video.duration}</span>
                    <span>•</span>
                    <span>{video.views} views</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
