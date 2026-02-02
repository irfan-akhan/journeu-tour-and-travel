"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleries = [
    {
      title: "Dal Lake Serenity",
      location: "Srinagar",
      description: "Shikara rides at sunset on the iconic Dal Lake",
    },
    {
      title: "Snow Paradise",
      location: "Gulmarg",
      description: "World-class skiing and snowboarding destination",
    },
    {
      title: "Valley of Shepherds",
      location: "Pahalgam",
      description: "Pristine meadows and Lidder river adventures",
    },
    {
      title: "Moonland Beauty",
      location: "Ladakh",
      description: "Otherworldly landscapes of Nubra Valley",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleries.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleries.length) % galleries.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#FFD84D]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#1BA5B8]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#1BA5B8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Our Gallery
          </span>
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-[#0A4D5C] mb-4">
            Explore Our <span className="text-[#1BA5B8]">Photos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses of the breathtaking beauty and unforgettable experiences awaiting you
          </p>
        </motion.div>

        {/* Gallery Slider */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Gradient placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-[#1BA5B8] via-[#0A4D5C] to-[#FFD84D] relative">
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className="text-[#FFD84D] text-sm font-semibold mb-2 block">
                      {galleries[currentIndex].location}
                    </span>
                    <h3 className="font-ubuntu text-3xl font-bold text-white mb-2">
                      {galleries[currentIndex].title}
                    </h3>
                    <p className="text-white/90">
                      {galleries[currentIndex].description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-[#0A4D5C]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-[#0A4D5C]" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {galleries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-[#1BA5B8]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {galleries.map((gallery, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative h-32 rounded-2xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-4 ring-[#1BA5B8] shadow-xl scale-105"
                    : "hover:scale-105 shadow-lg"
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C]">
                  <div className={`absolute inset-0 ${
                    index === currentIndex ? "bg-black/10" : "bg-black/40"
                  }`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">{gallery.location}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
