"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Star, MapPin } from "lucide-react";
import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";

export default function FeaturedTours() {
  const tours = [
    {
      id: 1,
      title: "Kashmir Valley Explorer",
      location: "Srinagar, Gulmarg, Pahalgam",
      duration: "7 Days / 6 Nights",
      price: "₹45,999",
      rating: 4.9,
      reviews: 256,
      image: "/images/tours/kashmir-valley.jpg",
      guests: "2-8 People",
      highlights: ["Dal Lake", "Gulmarg Gondola", "Betaab Valley"],
    },
    {
      id: 2,
      title: "Gulmarg Snow Paradise",
      location: "Gulmarg, Srinagar",
      duration: "5 Days / 4 Nights",
      price: "₹32,999",
      rating: 4.8,
      reviews: 189,
      image: "/images/tours/gulmarg-snow.jpg",
      guests: "2-6 People",
      highlights: ["Skiing", "Gondola Ride", "Apharwat Peak"],
    },
    {
      id: 3,
      title: "Ladakh Adventure",
      location: "Leh, Nubra Valley, Pangong",
      duration: "8 Days / 7 Nights",
      price: "₹54,999",
      rating: 5.0,
      reviews: 342,
      image: "/images/tours/ladakh-adventure.jpg",
      guests: "2-10 People",
      highlights: ["Pangong Lake", "Nubra Valley", "Khardung La"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-[#0A4D5C] mb-4">
            Featured Tours
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked experiences showcasing the best of Kashmir and the Himalayas
          </p>
        </motion.div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/tours/${tour.id}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C]"></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[#FFD84D] text-[#FFD84D]" />
                        <span className="font-semibold text-gray-900">{tour.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm">({tour.reviews} reviews)</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-ubuntu text-xl font-bold text-[#0A4D5C] mb-2 group-hover:text-[#1BA5B8] transition-colors">
                      {tour.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{tour.location}</span>
                    </div>

                    {/* Details */}
                    <div className="flex items-center justify-between text-sm text-gray-600 pb-4 border-b border-gray-200 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{tour.guests}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#1BA5B8]/10 text-[#0A4D5C] text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/tours"
            className="inline-block px-8 py-4 bg-[#1BA5B8] text-white font-semibold rounded-full hover:bg-[#0A4D5C] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Tours
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
