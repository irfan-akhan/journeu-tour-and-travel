"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    name: "Srinagar",
    country: "Kashmir Valley",
    visitedPlaces: 12,
      image: "/destinations/2.png",
    description: "The jewel of Kashmir with Dal Lake and Mughal gardens",
    gradient: "from-[#1BA5B8]/80 to-[#0A4D5C]/80",
  },
  {
    id: 2,
    name: "Gulmarg",
    country: "Ski Paradise",
    visitedPlaces: 8,
      image: "/destinations/3.png",
    description: "Asia's premier skiing destination and meadow of flowers",
    gradient: "from-[#FFD84D]/80 to-[#FFA500]/80",
  },
  {
    id: 3,
    name: "Pahalgam",
    country: "Valley of Shepherds",
    visitedPlaces: 10,
      image: "/destinations/4.png",
    description: "Pristine meadows and starting point of Amarnath Yatra",
    gradient: "from-[#0A4D5C]/80 to-[#1BA5B8]/80",
  },
  {
    id: 4,
    name: "Sonmarg",
    country: "Meadow of Gold",
    visitedPlaces: 7,
      image: "/destinations/5.png",
    description: "Gateway to Ladakh with stunning glaciers and lakes",
    gradient: "from-[#1BA5B8]/80 to-[#FFD84D]/80",
  },
  // {
  //   id: 5,
  //   name: "Ladakh",
  //   country: "Land of High Passes",
  //   visitedPlaces: 15,
  //   image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
  //   description: "Breathtaking landscapes and ancient Buddhist monasteries",
  //   gradient: "from-[#FFD84D]/80 to-[#0A4D5C]/80",
  // },
];

export default function DestinationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  // Get visible destinations (current and next)
  const getVisibleDestinations = () => {
    const visible = [];
    for (let i = 0; i < 2; i++) {
      visible.push(destinations[(currentIndex + i) % destinations.length]);
    }
    return visible;
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231BA5B8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
          <motion.p
            className="text-[#1BA5B8] font-semibold text-sm tracking-wider uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Most Visited Locations
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-ubuntu">
            Choose Your Dream Location
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore Kashmir's most breathtaking destinations, each offering unique experiences and unforgettable memories
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {getVisibleDestinations().map((destination, index) => (
              <motion.div
                key={`${destination.id}-${currentIndex}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/destinations/${destination.name.toLowerCase()}`}>
                  <motion.div
                    className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                    whileHover={{ y: -10 }}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${destination.image})`,
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} transition-opacity duration-500 group-hover:opacity-90`} />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {/* Location Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-4 border border-white/30">
                          <MapPin className="w-4 h-4 text-white" />
                          <span className="text-white text-sm font-medium">
                            {destination.visitedPlaces} Visited Places
                          </span>
                        </div>

                        {/* Destination Name */}
                        <h3 className="text-4xl font-bold text-white mb-2 font-ubuntu group-hover:translate-x-2 transition-transform duration-300">
                          {destination.name}
                        </h3>

                        {/* Country/Region */}
                        <p className="text-white/90 text-lg font-medium mb-3">
                          {destination.country}
                        </p>

                        {/* Description */}
                        <p className="text-white/80 text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4">
                          {destination.description}
                        </p>

                        {/* Explore Button */}
                        <motion.div
                          className="inline-flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          whileHover={{ x: 5 }}
                        >
                          <span>Explore Destination</span>
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-white/30 rounded-tr-2xl" />
                    <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-white/30 rounded-bl-2xl" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4">
            <motion.button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-[#1BA5B8] hover:text-white transition-all duration-300 border border-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous destination"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-3 bg-[#1BA5B8]"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to destination ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-[#1BA5B8] hover:text-white transition-all duration-300 border border-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next destination"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/destinations">
            <motion.button
              className="cursor-pointer px-8 py-4 bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover All Destinations
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
