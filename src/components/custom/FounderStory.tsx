"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function FounderStory() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#FFD84D]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#1BA5B8]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#1BA5B8] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Our Story
            </span>
            <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-[#0A4D5C] mb-4">
              It All Began With <span className="text-[#1BA5B8]">A Dream</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Placeholder gradient */}
                <div className="w-full h-full bg-gradient-to-br from-[#1BA5B8] via-[#0A4D5C] to-[#FFD84D] relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Quote overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <Quote className="w-12 h-12 text-[#FFD84D] mb-4" />
                    <p className="text-white text-lg italic mb-2">
                      "Kashmir isn't just a destination—it's a feeling, a connection to nature and culture that stays with you forever."
                    </p>
                    <p className="text-white/80 text-sm">— Founder, Journeu</p>
                  </div>
                </div>
              </div>

              {/* Floating element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1BA5B8] mb-1">2022</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-[#0A4D5C] font-semibold">Back in 2022,</strong> {`a passionate Kashmiri native with a deep love for the region’s unparalleled beauty saw what many travelers were missing—the real Kashmir. Beyond postcard views lay untold stories, hidden corners, and a warmth of hospitality that only locals truly understand, yet few visitors ever experienced.
With nothing more than determination, a maxed-out credit card, and an unshakable belief that travel should uplift both visitors and local communities, Journeu was born.`}
                </p>
                <p>
                  {` What began as a one-person effort, curating small group journeys with heart and honesty, steadily grew into Kashmir’s most trusted travel agency. While the scale has evolved, the purpose has never changed: to craft authentic, sustainable, and transformative travel experiences that reflect the true spirit of Kashmir and directly support the people who call it home.`}
                </p>
                <p>
                  {`Today, Journeu proudly stands as a bridge between travelers and the land we love—having helped 200+ travelers discover Kashmir’s magic, partnered with 50+ local businesses, and remained deeply committed to responsible tourism at every step of the journey.`}
                </p>

                {/* Timeline highlights */}
                <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200">
                  <div>
                    <div className="text-[#1BA5B8] font-semibold mb-1">2022</div>
                    <div className="text-sm">First tour with 6 travelers</div>
                  </div>
                  {/* <div>
                    <div className="text-[#1BA5B8] font-semibold mb-1">2012</div>
                    <div className="text-sm">Expanded to Ladakh tours</div>
                  </div> */}
                  {/* <div>
                    <div className="text-[#1BA5B8] font-semibold mb-1">2016</div>
                    <div className="text-sm">Won "Best Kashmir Tour Operator"</div>
                  </div> */}
                  <div>
                    <div className="text-[#1BA5B8] font-semibold mb-1">2025</div>
                    <div className="text-sm">150+ happy travelers served</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
