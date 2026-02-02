"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { useState } from "react";

export default function HeroSearchWidget() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <motion.div
      className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-white/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Destination */}
          <div className="relative">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Destination
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1BA5B8]" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where to?"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#1BA5B8] focus:outline-none transition-all duration-300 font-medium"
              />
            </div>
          </div>

          {/* Date */}
          <div className="relative">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Travel Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1BA5B8]" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#1BA5B8] focus:outline-none transition-all duration-300 font-medium"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="relative">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Guests
            </label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1BA5B8]" />
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#1BA5B8] focus:outline-none transition-all duration-300 font-medium appearance-none"
              >
                <option value="">Select</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3-4">3-4 Guests</option>
                <option value="5+">5+ Guests</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <motion.button
              className="w-full py-4 bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Search className="w-5 h-5" />
              <span>Search Tours</span>
            </motion.button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3 font-semibold">Popular Searches:</p>
          <div className="flex flex-wrap gap-2">
            {["Kashmir Valley", "Ladakh Trek", "Gulmarg Skiing", "Dal Lake", "Pangong Lake"].map((term) => (
              <button
                key={term}
                className="px-4 py-2 bg-gray-100 hover:bg-[#1BA5B8]/10 text-gray-700 hover:text-[#1BA5B8] text-sm font-medium rounded-full transition-all duration-300"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
