'use client';

import { motion } from 'framer-motion';
import { MapPin, Mountain, Calendar, Camera, Sparkles, Award, Users, Star, ArrowRight, Compass } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { KASHMIR_DESTINATION } from '@/data/regionalDestinations';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import THEME, { BRAND_GRADIENTS } from '@/constants/theme';
import CustomItineraryCTA from '@/components/custom/CustomItineraryCTA';

const categoryIcons = {
  nature: Mountain,
  heritage: Sparkles,
  adventure: Camera,
  spiritual: MapPin,
  cultural: Calendar
};

const categoryColors = {
  nature: 'bg-emerald-100 text-emerald-700',
  heritage: 'bg-amber-100 text-amber-700',
  adventure: 'bg-blue-100 text-blue-700',
  spiritual: 'bg-purple-100 text-purple-700',
  cultural: 'bg-pink-100 text-pink-700'
};

export default function KashmirPage() {
  const destination = KASHMIR_DESTINATION;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="relative z-50">
        <Navbar />
      </div>
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={destination.hero_image}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {/* Featured Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-[#FFD84D] rounded-full"></div>
                  <span className="text-white/90 text-xs uppercase tracking-[0.2em] font-medium">
                    Featured Destination
                  </span>
                </motion.div>

                {/* Destination Name */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white font-ubuntu leading-none uppercase">
                  {destination.name}
                </h1>

                {/* Tagline */}
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-2xl">
                  {destination.tagline}
                </p>

                {/* Description */}
                <p className="text-base text-white/80 leading-relaxed max-w-2xl">
                  {destination.description}
                </p>

                {/* CTA Button */}
                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-4"
                >
                  <Link href="#attractions">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-2xl hover:shadow-white/20 transition-all text-sm flex items-center gap-3 group uppercase tracking-wider"
                    >
                      EXPLORE MORE
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div> */}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Right Side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 right-8 md:right-16 z-10 flex flex-col items-center gap-3"
        >
          <span className="text-white/60 text-xs uppercase tracking-wider rotate-90 origin-center">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg
              className="w-5 h-5 text-white/60"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative z-10 -mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${BRAND_GRADIENTS.accentDiagonal} rounded-3xl p-12 shadow-2xl`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-white/90 font-medium">Destinations</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">200+</div>
                <div className="text-white/90 font-medium">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">3+</div>
                <div className="text-white/90 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-white/90 font-medium">Customer Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Places Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Kashmir
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the breathtaking beauty and rich heritage of Paradise on Earth
            </p>
          </motion.div>

          <div className="space-y-0">
            {destination.places.map((place, index) => {
              const IconComponent = categoryIcons[place.category];
              const colorClass = categoryColors[place.category];
              const isEven = index % 2 === 0;

              return (
                <motion.section
                  key={place.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative py-24 overflow-hidden ${
                    index % 3 === 0 ? 'bg-white' : 
                    index % 3 === 1 ? 'bg-gradient-to-br from-[#FFD84D]/10 to-[#FFA500]/10' : 
                    'bg-gradient-to-br from-gray-50 to-slate-50'
                  }`}
                >
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={`absolute ${isEven ? 'top-0 right-0' : 'bottom-0 left-0'} w-96 h-96 bg-[#FFD84D] rounded-full blur-3xl`} />
                  </div>

                  <div className="container mx-auto px-4 relative z-10">
                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}>
                      {/* Content Side */}
                      <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="inline-flex items-center gap-2">
                          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${colorClass}`}>
                            <IconComponent className="w-4 h-4" />
                            {place.category.charAt(0).toUpperCase() + place.category.slice(1)}
                          </span>
                        </div>

                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                          {place.name}
                        </h3>

                        <p className="text-xl text-gray-600 leading-relaxed">
                          {place.description}
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid sm:grid-cols-2 gap-4 pt-6">
                          {place.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="mt-1 w-6 h-6 rounded-full bg-[#FFD84D]/20 flex items-center justify-center flex-shrink-0">
                                <span className="w-2 h-2 rounded-full bg-[#FFD84D]" />
                              </div>
                              <span className="text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* View Tours CTA */}
                        <Link
                          href={`/tours?search=${encodeURIComponent('kashmir')}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFD84D] hover:bg-[#FFA500] text-[#0A4D5C] font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group mt-6"
                        >
                          <Compass className="w-5 h-5" />
                          View Tours to {place.name}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      {/* Image Side */}
                      <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD84D]/20 to-[#FFA500]/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                            <Image
                              src={place.image}
                              alt={place.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </section>
      
       {/* Call to Action */}
      {/* <section className="py-24 bg-gradient-to-br from-[#FFD84D] via-[#FFC700] to-[#FFA500] relative overflow-hidden"> */}
      <section className={`py-24 ${THEME.section.uniformBlue} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFA500]/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium text-sm">
                START YOUR JOURNEY
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Explore Kashmir?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Let us craft your perfect journey to Paradise on Earth with personalized itineraries and expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#0A4D5C] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                Plan Your Trip
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a> */}
              <a
                href="/tours"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FFD84D] text-[#0A4D5C] font-semibold rounded-full hover:bg-[#FFA500] transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                Browse All Tours
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-white text-white" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm">200+ Travelers</span>
              </div>
              {/* <div className="w-1 h-1 bg-white/40 rounded-full"></div> */}
              {/* <div className="flex items-center gap-2"> */}
                {/* <Award className="w-5 h-5" /> */}
                {/* <span className="text-sm">Award Winning</span> */}
              {/* </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Itinerary CTA Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <CustomItineraryCTA
            title="Create Your Kashmir Adventure"
            description="Design your perfect Kashmir journey! Select your favorite destinations, choose activities that excite you, and let us craft a personalized itinerary."
          />
        </div> 
      </section>*/}

      <Footer />
    </main>
  );
}
