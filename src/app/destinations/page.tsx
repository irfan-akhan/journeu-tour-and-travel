"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star, Mountain, Leaf, Sunrise, Snowflake, Search, Calendar, Users, ArrowRight, Sun, Cloud, Umbrella, Download, Quote } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomItineraryCTA from "@/components/custom/CustomItineraryCTA";

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const allDestinations = [
    // Kashmir Destinations
    {
      id: "srinagar",
      name: "Srinagar",
      region: "Kashmir",
      category: "lakes",
      description: "Experience the serene beauty of Dal Lake with traditional houseboats and Mughal gardens",
      image: "/destinations/2.png",
      tours: 18,
      rating: 4.9,
      reviews: 1250,
      price: 299,
      duration: "5 Days",
      featured: true
    },
    {
      id: "gulmarg",
      name: "Gulmarg",
      region: "Kashmir",
      category: "mountains",
      description: "Asia's premier skiing destination with breathtaking gondola rides",
      image: "/destinations/3.png",
      tours: 12,
      rating: 4.8,
      reviews: 890,
      price: 349,
      duration: "4 Days",
      featured: true
    },
    {
      id: "pahalgam",
      name: "Pahalgam",
      region: "Kashmir",
      category: "valleys",
      description: "Pristine valley perfect for trekking and nature lovers",
      image: "/destinations/4.png",
      tours: 15,
      rating: 4.9,
      reviews: 1020,
      price: 319,
      duration: "5 Days"
    },
    {
      id: "sonamarg",
      name: "Sonamarg",
      region: "Kashmir",
      category: "mountains",
      description: "Gateway to Ladakh with spectacular glaciers",
      image: "/destinations/5.png",
      tours: 10,
      rating: 4.7,
      reviews: 650,
      price: 339,
      duration: "4 Days"
    },
    // {
    //   id: "yusmarg",
    //   name: "Yusmarg",
    //   region: "Kashmir",
    //   category: "valleys",
    //   description: "Offbeat meadow destination with untouched beauty",
    //   image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
    //   tours: 8,
    //   rating: 4.6,
    //   reviews: 420,
    //   price: 289,
    //   duration: "3 Days"
    // },
    {
      id: "doodhpathri",
      name: "Doodhpathri",
      region: "Kashmir",
      category: "valleys",
      description: "Valley of Milk with lush green meadows",
      image: "/destinations/6.png",
      tours: 6,
      rating: 4.8,
      reviews: 380,
      price: 279,
      duration: "3 Days"
    },
    {
      id: "gurez-valley",
      name: "Gurez Valley",
      region: "Kashmir",
      category: "remote",
      description: "Hidden paradise with stunning mountain landscapes",
      image: "/destinations/7.png",
      tours: 5,
      rating: 5.0,
      reviews: 290,
      price: 399,
      duration: "6 Days"
    },
    {
      id: "keeren-valley",
      name: "Keeren Valley",
      region: "Kashmir",
      category: "valleys",
      description: "Bowl-shaped valley surrounded by mountains",
      image: "/destinations/8.png",
      tours: 7,
      rating: 4.7,
      reviews: 310,
      price: 269,
      duration: "4 Days"
    },
    {
      id: "verinag",
      name: "Verinag",
      region: "Kashmir",
      category: "springs",
      description: "Mughal garden with natural spring",
      image: "/destinations/9.png",
      tours: 9,
      rating: 4.5,
      reviews: 540,
      price: 259,
      duration: "3 Days"
    },
    // Jammu Destinations
    {
      id: "vaishno-devi",
      name: "Vaishno Devi",
      region: "Jammu",
      category: "spiritual",
      description: "Sacred Hindu pilgrimage site nestled in the Trikuta Mountains",
      image: "/destinations/10.png",
      tours: 25,
      rating: 4.9,
      reviews: 3200,
      price: 189,
      duration: "2 Days",
      featured: true
    },
    {
      id: "patnitop",
      name: "Patnitop",
      region: "Jammu",
      category: "mountains",
      description: "Hill station with panoramic views of the Himalayas",
      image: "/destinations/11.png",
      tours: 10,
      rating: 4.6,
      reviews: 680,
      price: 229,
      duration: "3 Days"
    },
    {
      id: "bahu-fort",
      name: "Bahu Fort",
      region: "Jammu",
      category: "heritage",
      description: "Ancient fort overlooking the Tawi River with temple complex",
      image: "/destinations/12.png",
      tours: 8,
      rating: 4.5,
      reviews: 420,
      price: 149,
      duration: "1 Day"
    },
    {
      id: "mansar-lake",
      name: "Mansar Lake",
      region: "Jammu",
      category: "lakes",
      description: "Sacred lake surrounded by forested hills and temples",
      image: "/destinations/13.png",
      tours: 12,
      rating: 4.7,
      reviews: 550,
      price: 179,
      duration: "2 Days"
    },
    {
      id: "raghunath-temple",
      name: "Raghunath Temple",
      region: "Jammu",
      category: "spiritual",
      description: "Magnificent temple complex dedicated to Lord Rama",
      image: "/destinations/14.png",
      tours: 6,
      rating: 4.8,
      reviews: 890,
      price: 129,
      duration: "1 Day"
    },
    // Leh-Ladakh Destinations
    // {
    //   id: "pangong-lake",
    //   name: "Pangong Lake",
    //   region: "Ladakh",
    //   category: "lakes",
    //   description: "Stunning high-altitude lake that changes colors throughout the day",
    //   image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    //   tours: 22,
    //   rating: 5.0,
    //   reviews: 2100,
    //   price: 599,
    //   duration: "7 Days",
    //   featured: true
    // },
    // {
    //   id: "nubra-valley",
    //   name: "Nubra Valley",
    //   region: "Ladakh",
    //   category: "valleys",
    //   description: "High-altitude desert with sand dunes and double-humped camels",
    //   image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    //   tours: 18,
    //   rating: 4.9,
    //   reviews: 1650,
    //   price: 649,
    //   duration: "8 Days"
    // },
    // {
    //   id: "leh-palace",
    //   name: "Leh Palace",
    //   region: "Ladakh",
    //   category: "heritage",
    //   description: "17th-century royal palace with panoramic views of Leh",
    //   image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
    //   tours: 15,
    //   rating: 4.7,
    //   reviews: 980,
    //   price: 499,
    //   duration: "5 Days"
    // },
    // {
    //   id: "khardung-la",
    //   name: "Khardung La",
    //   region: "Ladakh",
    //   category: "mountains",
    //   description: "One of the world's highest motorable passes at 5,359m",
    //   image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    //   tours: 20,
    //   rating: 4.8,
    //   reviews: 1450,
    //   price: 559,
    //   duration: "6 Days"
    // },
    // {
    //   id: "hemis-monastery",
    //   name: "Hemis Monastery",
    //   region: "Ladakh",
    //   category: "spiritual",
    //   description: "Largest and wealthiest monastery in Ladakh",
    //   image: "https://images.unsplash.com/photo-1609952533942-0157649f8d5c?w=800",
    //   tours: 12,
    //   rating: 4.9,
    //   reviews: 750,
    //   price: 529,
    //   duration: "5 Days"
    // },
    // {
    //   id: "tso-moriri",
    //   name: "Tso Moriri",
    //   region: "Ladakh",
    //   category: "lakes",
    //   description: "Remote high-altitude lake in the Changthang region",
    //   image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800",
    //   tours: 10,
    //   rating: 4.9,
    //   reviews: 620,
    //   price: 679,
    //   duration: "9 Days"
    // }
  ];

  const categories = [
    { id: "all", name: "All Destinations", icon: MapPin },
    { id: "lakes", name: "Lakes", icon: Leaf },
    { id: "mountains", name: "Mountains", icon: Mountain },
    { id: "valleys", name: "Valleys", icon: Sunrise },
    { id: "spiritual", name: "Spiritual", icon: Snowflake },
    { id: "heritage", name: "Heritage", icon: Mountain },
    { id: "remote", name: "Remote", icon: Snowflake },
    { id: "springs", name: "Springs", icon: Leaf }
  ];

  const regions = [
    { id: "all", name: "All Regions" },
    { id: "Kashmir", name: "Kashmir" },
    { id: "Jammu", name: "Jammu" },
    // { id: "Ladakh", name: "Ladakh" }
  ];

  const filteredDestinations = allDestinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || dest.category === selectedCategory;
    const matchesRegion = selectedRegion === "all" || dest.region === selectedRegion;
    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section with Search */}
      <section className="relative h-[90vh] min-h-[700px] overflow-hidden">
      <Navbar />
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            src="/destinations_header.mov"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full object-cover pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#FFD84D] rounded-full animate-pulse"></span>
              <span className="text-white font-semibold text-sm tracking-wider uppercase">
                20+ Handpicked Destinations
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-ubuntu leading-tight">
              <span className="text-[#FFD84D]">DISCOVER PARADISE</span>
              <br />
              Jammu, Kashmir & Ladakh
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-xl text-white/95 mb-8 leading-relaxed max-w-3xl mx-auto">
              Embark on an unforgettable journey through breathtaking landscapes - from Kashmir's pristine valleys,
              to Jammu's spiritual sites, to Ladakh's high-altitude wonders. Your adventure starts here.
            </p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {[
                { icon: "🏔️", text: "20+ Destinations" },
                { icon: "⭐", text: "4.9 Rating" },
                { icon: "🎿", text: "Adventure Tours" },
                { icon: "🏡", text: "Houseboats" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-white font-semibold text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#all-destinations"
                className="group px-8 py-4 bg-[#FFD84D] hover:bg-[#FFC700] text-[#0A4D5C] font-bold rounded-full transition-all duration-300 flex items-center gap-2 shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                <span>Start Exploring</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/40 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Plan My Trip
              </a>
            </motion.div>  */}

            {/* Search Box */}
            {/* <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search Destination</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Where do you want to go?"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BA5B8] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BA5B8] appearance-none bg-white">
                      <option>Any Duration</option>
                      <option>3-4 Days</option>
                      <option>5-6 Days</option>
                      <option>7+ Days</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BA5B8] appearance-none bg-white">
                      <option>Any Size</option>
                      <option>Solo</option>
                      <option>2-4 People</option>
                      <option>5+ People</option>
                    </select>
                  </div>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-ubuntu">Featured Destinations</h2>
            <p className="text-gray-600 text-lg">Handpicked destinations for an unforgettable experience</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {allDestinations.filter(d => d.featured).map((destination) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-5 h-5 fill-[#FFD84D] text-[#FFD84D]" />
                      <span className="font-semibold">{destination.rating}</span>
                      <span className="text-white/80">({destination.reviews} reviews)</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2 font-ubuntu">{destination.name}</h3>
                    <p className="text-white/90 mb-4">{destination.description}</p>
                    <div className="flex items-center justify-end">
                      <Link href={`/destinations/${destination.id}`}>
                        <button className="cursor-pointer px-6 py-3 bg-[#FFD84D] hover:bg-[#FFC700] text-[#0A4D5C] font-bold rounded-lg transition-colors flex items-center gap-2">
                          View Details
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Destinations with Tabs */}
      <section className="py-16 bg-gray-50" id="all-destinations">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-ubuntu">All Destinations</h2>
            <p className="text-gray-600 text-lg">Explore Jammu, Kashmir & Ladakh's beautiful locations</p>
          </div>

          {/* Region Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  selectedRegion === region.id
                    ? "bg-[#FFD84D] text-[#0A4D5C] shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? "bg-[#1BA5B8] text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Destinations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <Link href={`/destinations/${destination.id}`}>
                    {/* Image */}
                    <div className="relative h-[240px] overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white rounded-full shadow-md flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[#FFD84D] text-[#FFD84D]" />
                        <span className="font-semibold text-gray-900">{destination.rating}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        {destination.region}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1BA5B8] transition-colors">
                        {destination.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {destination.description}
                      </p>

                      <div className="pt-4 border-t border-gray-100">
                        <button className="cursor-pointer w-full px-5 py-2.5 bg-[#FFD84D] hover:bg-[#FFC700] text-[#0A4D5C] font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏔️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No destinations found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="px-6 py-3 bg-[#1BA5B8] text-white font-semibold rounded-lg hover:bg-[#0A4D5C] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* When to Visit Kashmir Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-[#1BA5B8] font-semibold mb-2 uppercase tracking-wider text-sm">
                  Traveler's Guide
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-ubuntu">
                  When to Visit Kashmir
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Kashmir transforms with each season, offering distinct experiences year-round. Whether you seek tulip-filled valleys, sunny meadows, or a ski-filled winter wonderland, there's a perfect time for everyone.
                </p>

                {/* Season List */}
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Sunrise className="w-5 h-5 text-[#FFD84D]" />
                      Best for Couples
                    </h3>
                    <p className="text-sm text-gray-600">Spring (March-May): Pleasant weather and flower blooms</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Mountain className="w-5 h-5 text-[#1BA5B8]" />
                      Best for Adventure
                    </h3>
                    <p className="text-sm text-gray-600">Summer (June-August): Perfect for skiing</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Sun className="w-5 h-5 text-[#FFD84D]" />
                      Best for Photography
                    </h3>
                    <p className="text-sm text-gray-600">Autumn (September-November): Golden Chinar leaves and clear skies</p>
                  </div><div>
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Snowflake className="w-5 h-5 text-primary" />
                      Best for Winter Sports
                    </h3>
                    <p className="text-sm text-gray-600">Winter (December - February): Ideal for snow activities and skiing.</p>
                  </div>
                </div>

                {/* <button className="px-6 py-3 bg-[#FFD84D] hover:bg-[#FFC700] text-[#0A4D5C] font-semibold rounded-lg transition-colors flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  DOWNLOAD TRAVEL GUIDE
                </button> */}
              </motion.div>
            </div>

            {/* Right Grid - Seasons */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  season: "Spring",
                  months: "March - May",
                  temp: "10° - 20°",
                  icon: Sunrise,
                  bgColor: "bg-orange-50",
                  iconColor: "text-orange-500",
                  description: "Ideal for sightseeing, blooming, and exploring Kashmir. Daytime is pleasant and comfortable with warm days and cooler nights."
                },
                {
                  season: "Summer",
                  months: "June - August",
                  temp: "20° - 30°",
                  icon: Sun,
                  bgColor: "bg-yellow-50",
                  iconColor: "text-yellow-500",
                  description: "Ideal for trekking, camping, and exploring. High altitude areas like Gulmarg offers respite from heat and humidity elsewhere."
                },
                {
                  season: "Autumn",
                  months: "September - November",
                  temp: "5° - 15°",
                  icon: Leaf,
                  bgColor: "bg-amber-50",
                  iconColor: "text-amber-600",
                  description: "Perfect time to see Chinar trees turning golden, and enjoy clear skies with stunning mountain views and pleasant climate."
                },
                {
                  season: "Winter",
                  months: "December - February",
                  temp: "-2° - 10°",
                  icon: Snowflake,
                  bgColor: "bg-blue-50",
                  iconColor: "text-blue-500",
                  description: "Ideal for snow activities and skiing. Gulmarg gets transformed into a winter wonderland, perfect for adventure seekers."
                }
              ].map((season, index) => {
                const Icon = season.icon;
                return (
                  <motion.div
                    key={season.season}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`${season.bgColor} p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-white ${season.iconColor}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">{season.temp}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{season.season}</h3>
                    <p className="text-sm text-gray-600 mb-3">{season.months}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{season.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

 {/* Custom Itinerary CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <CustomItineraryCTA />
        </div>
      </section>
      
      {/* Beyond Ordinary Travel - Experiences Section */}
      <section className="mb-20 py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-[#FFD84D] font-semibold mb-2 uppercase tracking-[0.2em] text-xs">
                  Curated Experiences
                </p>
                <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 font-ubuntu">
                  Beyond Ordinary Travel
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-xl">
                  Immerse yourself in Kashmir's soul through exclusive experiences that reveal its hidden treasures and timeless traditions.
                </p>
              </motion.div>
            </div>
            {/* <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/experiences">
                <button className="mt-6 md:mt-0 px-8 py-4 bg-[#FFD84D] hover:bg-[#FFC700] text-gray-900 font-semibold rounded-full transition-colors flex items-center gap-2 uppercase tracking-wider text-sm">
                  All Experiences
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div> */}
          </div>

          {/* Experiences Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Shikara Sunset Rides",
                category: "2 Hours",
                image: "/gallery/11.png",
                gradient: "from-orange-500/60 to-transparent"
              },
              {
                title: "Mughal Garden Tours",
                category: "Tour",
                image: "/gallery/18.png",
                gradient: "from-amber-900/60 to-transparent"
              },
              {
                title: "Alpine Treks",
                category: "Multi-Day",
                image: "/gallery/7.png",
                gradient: "from-blue-500/60 to-transparent"
              },
              {
                title: "Wazwan Feasts",
                category: "3 Hours",
                image: "/gallery/wazwan.jpg",
                gradient: "from-red-600/60 to-transparent"
              }
            ].map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[500px] rounded-2xl overflow-hidden"
              >
                {/* Background Image */}
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${experience.gradient} to-black/80`}></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Category Tag */}
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs uppercase tracking-wider">
                      {experience.category}
                    </span>
                  </div>

                  {/* Title & Link */}
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#FFD84D] transition-colors">
                      {experience.title}
                    </h3>
                    {/* <Link href={`/experiences/${experience.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span className="inline-flex items-center gap-2 text-[#FFD84D] font-semibold hover:gap-3 transition-all">
                        Explore
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </Link> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
