"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, MapPin, Users, Star, Clock, Mountain, Compass } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tours } from "@/data/toursData";
import THEME from "@/constants/theme";
import CustomItineraryCTA from "@/components/custom/CustomItineraryCTA";

const durations = ["Any Duration", "1-4 Days", "4-7 Days", "8-10 Days", "11-14 Days"];
const themeOptions = [
  { value: "All Themes", label: "All Themes" },
  { value: "adventure", label: "Adventure" },
  { value: "family-leisure", label: "Family & Leisure" },
  { value: "honeymoon", label: "Honeymoon" },
  { value: "luxury", label: "Luxury" },
  { value: "culture-heritage", label: "Cultural & Heritage" },
  { value: "corporate-group", label: "Corporate & Group" },
  // { value: "adventure-group", label: "Adventure Group" },
  { value: "nature", label: "Nature" },
  { value: "nature-offbeat", label: "Nature & Off-beat" },
  { value: "pilgrimage-scenic", label: "Pilgrimage & Scenic" },
  { value: "budget", label: "Budget" },
  { value: "romantic", label: "Romantic" },
];

function ToursContent() {
  const searchParams = useSearchParams();
  const [selectedDuration, setSelectedDuration] = useState("Any Duration");
  const [selectedTheme, setSelectedTheme] = useState("All Themes");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Set search query and theme from URL parameters on mount
  useEffect(() => {
    const searchParam = searchParams.get('search');
    const categoryParam = searchParams.get('category');
    
    if (searchParam) {
      setSearchQuery(searchParam);
    }
    
    if (categoryParam) {
      // Map URL category values to theme values
      const categoryMap: { [key: string]: string } = {
        'adventure': 'adventure',
        'cultural': 'culture-heritage',
        'honeymoon': 'honeymoon',
        'family': 'family-leisure',
        'group': 'corporate-group',
        'luxury': 'luxury'
      };
      console.log("selecged theme param", categoryParam); 
      const mappedTheme = categoryMap[categoryParam] || categoryParam;
      console.log("mappedTheme theme param", mappedTheme); 

      setSelectedTheme(mappedTheme);
    }
  }, [searchParams]);

  const filteredTours = tours.filter(tour => {
    // Duration matching with proper range checking
    let matchesDuration = selectedDuration === "Any Duration";
    if (!matchesDuration && tour.duration) {
      const tourDays = parseInt(tour.duration.match(/\d+/)?.[0] || "0");
      
      if (selectedDuration === "1-4 Days") {
        matchesDuration = tourDays >= 1 && tourDays <= 4;
      } else if (selectedDuration === "4-7 Days") {
        matchesDuration = tourDays >= 4 && tourDays <= 7;
      } else if (selectedDuration === "8-10 Days") {
        matchesDuration = tourDays >= 8 && tourDays <= 10;
      } else if (selectedDuration === "11-14 Days") {
        matchesDuration = tourDays >= 11 && tourDays <= 14;
      }
    }
    
    const matchesTheme = selectedTheme === "All Themes" ||
      (tour.theme && tour.theme.toLowerCase().includes(selectedTheme.toLowerCase())) ||
      (tour.title && tour.title.toLowerCase().includes(selectedTheme.toLowerCase()));
    
    // Enhanced search to include title, description, category, and theme
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery || 
      (tour.title && tour.title.toLowerCase().includes(searchLower)) || 
      (tour.description && tour.description.toLowerCase().includes(searchLower)) ||
      (tour.category && tour.category.toLowerCase().includes(searchLower)) ||
      (tour.theme && tour.theme.toLowerCase().includes(searchLower));
    
    return matchesDuration && matchesTheme && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pb-16">
      {/* Hero Section */}
      <section className={`${THEME.section.uniformBlue} relative text-white py-42 min-h-[60vh] overflow-hidden`}>
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            src="/homepage_master.mov"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <Compass className="w-16 h-16 text-[#FFD84D]" />
            </motion.div>
            
            <h1 className="font-ubuntu text-5xl md:text-7xl font-bold mb-6">
              Discover Your Journey
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Handcrafted travel experiences across Kashmir's most breathtaking destinations
            </p>
            
            <div className="flex items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>20+ Destinations</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#FFD84D]" />
                <span>4.9 Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>200+ Happy Travelers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-8 relative z-20">
        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-6 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tours by name or destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#1BA5B8] focus:outline-none transition-all"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-4 bg-[#0A4D5C] text-white rounded-2xl hover:bg-[#1BA5B8] transition-all"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1BA5B8] focus:outline-none"
                >
                  {durations.map(d => <option key={d}>{d}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Theme</label>
                <select
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1BA5B8] focus:outline-none"
                >
                  {themeOptions.map(c => <option key={c.label} value={c.value}>{c.label}</option>)}
                </select>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredTours.length} {filteredTours.length === 1 ? 'Tour' : 'Tours'} Found
          </h2>
          
          {selectedTheme !== "All Themes" && (
            <span className="px-4 py-2 bg-[#1BA5B8]/10 text-[#0A4D5C] rounded-full font-semibold">
              {themeOptions.find(t => t.value === selectedTheme)?.label || selectedTheme}
            </span>
          )}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/tours/${tour.id}`}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Badges */}
                    {tour.badges && tour.badges.length > 0 && (
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {tour.badges.map(badge => (
                          <span
                            key={badge}
                            className="px-3 py-1 bg-[#FFD84D] text-[#0A4D5C] text-xs font-bold rounded-full shadow-lg"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {tour.category && (
                        <span className="px-3 py-1 bg-[#1BA5B8]/10 text-[#0A4D5C] text-xs font-semibold rounded-full">
                          {tour.category}
                        </span>
                      )}
                      {tour.theme && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                          {tour.theme}
                        </span>
                      )}
                    </div>

                    {tour.title && (
                      <h3 className="font-ubuntu text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1BA5B8] transition-colors">
                        {tour.title}
                      </h3>
                    )}

                    {tour.description && (
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {tour.description}
                      </p>
                    )}

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      {tour.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{tour.duration}</span>
                        </div>
                      )}
                      {tour.groupSize && (
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{tour.groupSize}</span>
                        </div>
                      )}
                      {tour.rating && tour.reviews && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-[#FFD84D] text-[#FFD84D]" />
                          <span className="font-semibold">{tour.rating}</span>
                          <span className="text-gray-400">({tour.reviews})</span>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <button className={`${THEME.button.primary} cursor-pointer w-full py-3 text-white font-semibold rounded-xl hover:shadow-lg transition-all group-hover:scale-105`}>
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredTours.length === 0 && (
          <div className="text-center py-20">
            <Mountain className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No tours found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
            <button
              onClick={() => {
                setSelectedDuration("Any Duration");
                setSelectedTheme("All Themes");
                setSearchQuery("");
              }}
              className="px-8 py-3 bg-[#1BA5B8] text-white font-semibold rounded-xl hover:bg-[#0A4D5C] transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Custom Itinerary CTA Section */}
        <CustomItineraryCTA className="mt-20" />
      </div>
    </div>
    
    <Footer />
    </>
  );
}

export default function ToursPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1BA5B8] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading tours...</p>
        </div>
      </div>
    }>
      <ToursContent />
    </Suspense>
  );
}
