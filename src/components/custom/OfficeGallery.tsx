"use client";

import { motion } from "framer-motion";
import { Building2, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface GalleryPhoto {
  name: string;
  desc: string;
  gradient: string;
}

interface OfficeGalleryProps {
  title?: string;
  description?: string;
  photos?: GalleryPhoto[];
  videoButtonText?: string;
}

export default function OfficeGallery({
  title = "Step Inside Our Offices",
  description = "Take a virtual tour of our premium offices across Kashmir. Modern facilities designed for your comfort.",
  photos = [
    { name: "Srinagar - Reception Area", desc: "Warm welcome with traditional Kashmiri hospitality", gradient: "from-blue-500 to-cyan-400" },
    { name: "Gulmarg - Consultation Room", desc: "Private spaces for personalized tour planning", gradient: "from-green-500 to-emerald-400" },
    { name: "Pahalgam - Lounge Area", desc: "Comfortable seating with mountain views", gradient: "from-purple-500 to-pink-400" },
    { name: "Srinagar - Booking Desk", desc: "State-of-the-art booking systems", gradient: "from-orange-500 to-red-400" },
    { name: "Team Workspace", desc: "85+ travel experts at your service", gradient: "from-indigo-500 to-blue-400" },
    { name: "Resource Center", desc: "Maps, brochures, and travel guides", gradient: "from-teal-500 to-cyan-400" },
  ],
  videoButtonText = "Watch Full Office Tour (3:45)"
}: OfficeGalleryProps) {
  return (
    <section className="py-28 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-ubuntu font-bold mb-6 text-gray-900"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-xl max-w-3xl mx-auto font-light"
          >
            {description}
          </motion.p>
        </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-8 md:mb-12">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.08, y: -10 }}
              className="cursor-pointer group"
            >
              <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0">
                <div className={`h-72 bg-gradient-to-br ${photo.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <motion.div 
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur rounded-3xl flex items-center justify-center"
                      >
                        <Building2 className="w-10 h-10" />
                      </motion.div>
                      <Badge className="bg-white/95 text-gray-900 px-4 py-2 text-sm font-semibold">View Photo</Badge>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                    <h3 className="font-ubuntu font-bold text-base sm:text-lg mb-2">{photo.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-light">{photo.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] hover:shadow-2xl transition-all duration-300 text-lg px-10 py-7">
              <Play className="w-6 h-6 mr-3" />
              {videoButtonText}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
