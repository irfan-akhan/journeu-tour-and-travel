"use client";

import THEME from "@/constants/theme";
import { motion } from "framer-motion";
import { Star, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Tour {
  id: string;
  title: string;
  image: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  category: string;
}

interface SimilarToursProps {
  tours: Tour[];
}

export default function SimilarTours({ tours }: SimilarToursProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-10 border border-gray-200">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className={`${THEME.section.uniformBlue} w-2 h-14 rounded-full`}></div>
          <h2 className={`${THEME.section.uniformBlue} font-ubuntu text-4xl font-bold bg-clip-text text-transparent`}>
            You Might Also Like
          </h2>
        </div>
        <Link href="/tours">
          <button className={`${THEME.button.primary} cursor-pointer flex items-center gap-2 px-6 py-3  text-white font-semibold rounded-xl hover:shadow-lg transition-all`}>
            View All Tours
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tours.map((tour, index) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <Link href={`/tours/${tour.id}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-[#FFD84D] text-[#0A4D5C] text-xs font-bold rounded-full shadow-lg">
                      {tour.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-ubuntu text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1BA5B8] transition-colors line-clamp-2">
                    {tour.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#FFD84D] text-[#FFD84D]" />
                      <span className="font-semibold">{tour.rating}</span>
                      <span className="text-gray-400">({tour.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
