"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Star,
  Heart,
  TrendingUp,
  Filter,
  DollarSign,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { COMPONENT_GRADIENTS, BUTTON_GRADIENTS, DECORATIVE_GRADIENTS } from "@/constants/theme";
import EnquiryModal from "@/components/custom/EnquiryModal";
import { tours as allTours } from "@/data/toursData";

// Transform tours data to match component format
const tours = allTours.slice(0, 6).map((tour, index) => {
  const gradients = [
    "from-[#1BA5B8]/80 to-[#0A4D5C]/80",
    "from-amber-500/80 to-orange-600/80",
    "from-rose-500/80 to-pink-600/80",
    "from-emerald-500/80 to-teal-600/80",
    "from-[#FFD84D]/80 to-[#FFA500]/80",
    "from-purple-500/80 to-indigo-600/80"
  ];

  return {
    id: tour.id,
    title: tour.title || "Kashmir Tour",
    image: tour.image || "/images/default-tour.jpg",
    destination: tour.description?.split('.')[0] || "Kashmir Valley",
    duration: parseInt(tour.duration?.match(/\d+/)?.[0] || "6"),
    price: (tour.price || 0) * 100, // Convert to proper display format
    originalPrice: tour.originalPrice ? tour.originalPrice * 100 : (tour.price || 0) * 100 * 1.25,
    rating: tour.rating || 4.8,
    reviews: tour.reviews || 100,
    theme: tour.theme || "family-leisure",
    gradient: gradients[index % gradients.length],
    highlights: tour.badges?.slice(0, 3) || ["Premium Experience", "Expert Guide", "All Inclusive"],
    maxGuests: parseInt(tour.groupSize?.split('-')[1] || tour.groupSize || "12"),
    isBestseller: tour.featured || false,
  };
});

export default function FilterableTours() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<{ title: string; id: string } | null>(null);

  const handleEnquireClick = (e: React.MouseEvent, tour: { title: string; id: string }) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedTour(tour);
    setIsEnquiryModalOpen(true);
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#1BA5B8]/10 to-[#FFD84D]/10 rounded-full mb-6 border border-[#1BA5B8]/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Filter className="w-5 h-5 text-[#1BA5B8]" />
            <span className="text-[#1BA5B8] font-bold text-sm tracking-wider uppercase">
              Find Your Perfect Tour
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-ubuntu">
             Featured <span className="text-[#1BA5B8]">Tours</span>
          </h2>
        </motion.div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/tours/${tour.id}`}>
                <motion.div
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#1BA5B8]"
                  whileHover={{ y: -10 }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${tour.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${tour.gradient}`} />

                    {/* Bestseller Badge */}
                    {tour.isBestseller && (
                      <div className="absolute top-4 left-4 px-4 py-2 bg-[#FFD84D] rounded-full shadow-lg flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-gray-900" />
                        <span className="text-xs font-black text-gray-900">BESTSELLER</span>
                      </div>
                    )}

                    {/* Wishlist Button */}
                    <motion.button
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className="w-5 h-5 text-gray-700" />
                    </motion.button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title & Rating */}
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1BA5B8] transition-colors duration-300 mb-2 font-ubuntu">
                        {tour.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-[#FFD84D]" fill="#FFD84D" />
                          <span className="text-sm font-bold text-gray-900">{tour.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-[#1BA5B8]" />
                        <span>{tour.destination}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#1BA5B8]" />
                          <span>{tour.duration} Days</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#1BA5B8]" />
                          <span>Max {tour.maxGuests}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tour.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <span className="text-sm text-gray-600">Contact us for pricing</span>
                      </div>
                      <motion.button
                        onClick={(e) => handleEnquireClick(e, { title: tour.title, id: tour.id })}
                        className={`px-6 py-3 ${BUTTON_GRADIENTS.primary} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Enquire Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enquiry Modal */}
      {selectedTour && (
        <EnquiryModal
          isOpen={isEnquiryModalOpen}
          onClose={() => {
            setIsEnquiryModalOpen(false);
            setSelectedTour(null);
          }}
          tourTitle={selectedTour.title}
          tourId={selectedTour.id}
        />
      )}
    </section>
  );
}
