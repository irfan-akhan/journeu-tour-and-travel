"use client";

import THEME from "@/constants/theme";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

interface GoogleMapSectionProps {
  tourTitle: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export default function GoogleMapSection({ 
  tourTitle, 
  coordinates = { lat: 34.0837, lng: 74.7973 } // Kashmir Valley default
}: GoogleMapSectionProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapUrl = apiKey 
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${coordinates.lat},${coordinates.lng}&zoom=10`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
    >
      <div className="p-10 pb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className={`${THEME.section.uniformBlue} w-2 h-14 rounded-full`}></div>
          <h2 className={`${THEME.section.uniformBlue} font-ubuntu text-4xl font-bold bg-clip-text text-transparent`}>
            Location & Route
          </h2>
        </div>
        <p className="text-gray-700 text-lg mb-6">
          Explore the stunning locations covered in this {tourTitle} adventure. From majestic mountains to serene valleys, discover where your journey will take you.
        </p>
      </div>

      {/* Map Container */}
      <div className="relative h-[500px] w-full bg-gray-100">
        {mapUrl ? (
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg font-semibold mb-2">Map Unavailable</p>
              <p className="text-gray-500 text-sm">Google Maps API key not configured</p>
            </div>
          </div>
        )}
        
        {/* Map Overlay Info */}
        {mapUrl && (
          <>
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 max-w-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{tourTitle}</h4>
                  <p className="text-sm text-gray-600">Kashmir Valley, India</p>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href={`https://www.google.com/maps/dir//${coordinates.lat},${coordinates.lng}/@${coordinates.lat},${coordinates.lng},12z`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 right-6 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0A4D5C] to-[#1BA5B8] text-white font-semibold rounded-xl shadow-2xl hover:shadow-[#1BA5B8]/50 hover:scale-105 transition-all"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </>
        )}
      </div>
    </motion.div>
  );
}
