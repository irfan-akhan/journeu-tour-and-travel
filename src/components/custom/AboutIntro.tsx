"use client";

import { motion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";

export default function AboutIntro() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-[#1BA5B8] font-semibold tracking-wider uppercase text-sm">
                About Us
              </span>
            </div>
            <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-[#0A4D5C] mb-6 leading-tight">
              Discover Kashmir <span className="text-[#1BA5B8]">With Us</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Make it easier for everyone to experience the magic of Kashmir and the Himalayas. 
              Our mission is to create memories that last a lifetime for every traveler who chooses us.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Since 2022, we've been crafting extraordinary journeys through Kashmir's pristine valleys, 
              snow-capped mountains, and rich cultural heritage. Every tour is designed with care, 
              passion, and deep local knowledge to ensure authentic experiences.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#1BA5B8]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#1BA5B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A4D5C] mb-1">Handpicked Destinations</h4>
                  <p className="text-sm text-gray-600">All places and activities carefully selected by experts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#1BA5B8]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#1BA5B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A4D5C] mb-1">Trusted by Thousands</h4>
                  <p className="text-sm text-gray-600">Over 200+ satisfied customers worldwide</p>
                </div>
              </div>
              {/* <div className="flex items-start gap-3"> */}
                {/* <div className="w-12 h-12 rounded-full bg-[#1BA5B8]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#1BA5B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div> */}
                {/* <div>
                  <h4 className="font-semibold text-[#0A4D5C] mb-1">Award Winning</h4>
                  <p className="text-sm text-gray-600">Recognized excellence in Kashmir tourism</p>
                </div> */}
              {/* </div> */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-[#1BA5B8]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#1BA5B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A4D5C] mb-1">24/7 Support</h4>
                  <p className="text-sm text-gray-600">Always here when you need us most</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large image */}
              <div className="col-span-2 h-96 rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="/gallery/25.png"
                  alt="Dal Lake, Srinagar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold mb-1">Dal Lake, Srinagar</p>
                  <p className="text-xs opacity-80">Paradise on Earth</p>
                </div>
              </div>
              
              {/* Two smaller images */}
              <div className="h-48 rounded-2xl overflow-hidden shadow-xl relative">
                <img
                  src="/gallery/24.png"
                  alt="Gulmarg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-semibold">Gulmarg</p>
                </div>
              </div>
              <div className="h-48 rounded-2xl overflow-hidden shadow-xl relative">
                <img
                  src="/gallery/23.png"
                  alt="Pahalgam"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-semibold">Pahalgam</p>
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1BA5B8] mb-1">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
