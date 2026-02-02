"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building2, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GoogleMapComponent from "./GoogleMap";
import GoogleMapsProvider from "./GoogleMapsProvider";

interface Office {
  name: string;
  phone: string;
  email: string;
  address: string;
  image: string;
  lat?: number;
  lng?: number;
}

interface OfficeLocationsProps {
  eyebrow?: string;
  title?: string;
  offices?: Office[];
  showMap?: boolean;
  mapTitle?: string;
  mapDescription?: string;
}

export default function OfficeLocations({
  // eyebrow = "Our Location",
  // title = "Offices Around Kashmir ",
  offices = [
    {
      name: "Srinagar Office",
      phone: "+91 6005 571959",
      email: "contact@journeu.com",
      address: "Dal Lake Road, Srinagar, Kashmir 190001",
      image: "from-blue-400 to-cyan-500",
      lat: 34.0837,
      lng: 74.7973,
    },
    {
      name: "Gulmarg Office",
      phone: "+91 6005 571959",
      email: "contact@journeu.com",
      address: "Main Market, Gulmarg, Kashmir 193403",
      image: "from-green-400 to-teal-500",
      lat: 34.0484,
      lng: 74.3805,
    },
    {
      name: "Pahalgam Office",
      phone: "+91 6005 571959",
      email: "contact@journeu.com",
      address: "Main Bazaar, Pahalgam, Kashmir 192126",
      image: "from-purple-400 to-pink-500",
      lat: 34.0161,
      lng: 75.3150,
    },
  ],
  showMap = true,
  mapTitle = "Find Us on the Map",
  mapDescription = "Explore our office locations across Kashmir & Himalayas"
}: OfficeLocationsProps) {
  return (
    <>
      {/* <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#1BA5B8] font-semibold mb-4 tracking-[0.3em] uppercase text-sm">
                {eyebrow}
              </p>
              <h2 className="text-5xl md:text-7xl font-ubuntu font-bold text-gray-900 leading-tight">
                {title}
              </h2>
            </motion.div>
          </div> */}

          {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -8 }}
              > */}
                {/* <Card className="overflow-hidden group cursor-pointer shadow-xl hover:shadow-[0_20px_50px_rgba(27,165,184,0.35)] transition-all duration-500 border-0 bg-white relative"> */}
                  {/* Gradient border effect */}
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-[#1BA5B8] via-[#0A4D5C] to-[#1BA5B8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-lg" />
                  
                  <div className="relative"> */}
                    {/* Image Header */}
                    {/* <div className={`h-48 bg-gradient-to-br ${office.image} relative overflow-hidden`}> */}
                      {/* Animated overlay */}
                      {/* <motion.div 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" 
                      /> */}
                      
                      {/* Decorative pattern */}
                      {/* <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:24px_24px]" />
                      </div> */}

                      {/* Animated MapPin Icon */}
                      {/* <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="relative"
                        > */}
                          {/* Glow effect */}
                          {/* <div className="absolute inset-0 bg-white/30 rounded-full blur-xl scale-125 animate-pulse" />
                          <MapPin className="relative w-16 h-16 text-white drop-shadow-2xl" />
                        </motion.div>
                      </div> */}

                      {/* Office index badge */}
                      {/* <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-[#1BA5B8] font-bold text-base font-ubuntu">{index + 1}</span>
                      </div>
                    </div> */}

                    {/* Card Content */}
                    {/* <div className="p-6 bg-white">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg sm:text-xl font-ubuntu font-bold flex-1">{office.name}</h3>
                        <div className="w-9 h-9 bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] rounded-lg flex items-center justify-center flex-shrink-0 ml-3 group-hover:scale-110 transition-transform">
                          <Building2 className="w-4 h-4 text-white" />
                        </div>
                      </div> */}

                      {/* Contact Details */}
                      {/* <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                        <div className="flex items-center gap-3 text-sm group/item">
                          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover/item:bg-[#1BA5B8] transition-colors flex-shrink-0">
                            <Phone className="w-4 h-4 text-[#1BA5B8] group-hover/item:text-white transition-colors" />
                          </div>
                          <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-[#1BA5B8] transition-colors font-medium flex-1">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3 text-sm group/item">
                          <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center group-hover/item:bg-[#1BA5B8] transition-colors flex-shrink-0">
                            <Mail className="w-4 h-4 text-[#1BA5B8] group-hover/item:text-white transition-colors" />
                          </div>
                          <a href={`mailto:${office.email}`} className="hover:text-[#1BA5B8] transition-colors font-medium flex-1 truncate">
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-start gap-3 text-sm group/item">
                          <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#1BA5B8] transition-colors">
                            <MapPin className="w-4 h-4 text-[#1BA5B8] group-hover/item:text-white transition-colors mt-0" />
                          </div>
                          <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#1BA5B8] transition-colors font-medium flex-1 leading-snug"
                          >
                            {office.address}
                          </a>
                        </div>
                      </div> */}

                      {/* Action Buttons */}
                      {/* <div className="grid grid-cols-2 gap-2">
                        <Button 
                          size="sm"
                          className="bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] hover:shadow-lg transition-all py-5 font-semibold text-xs group-hover:scale-105"
                        >
                          <MapPin className="w-3 h-3 mr-1.5" />
                          Directions
                        </Button>
                        <Button 
                          size="sm"
                          variant="outline"
                          className="border-2 border-gray-200 hover:border-[#1BA5B8] hover:bg-[#1BA5B8] hover:text-white transition-all py-5 font-semibold text-xs"
                        >
                          <Phone className="w-3 h-3 mr-1.5" />
                          Call Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card> */}
              {/* </motion.div> */}
            {/* ))} */}
          {/* </div> */}
        {/* </div> */}
      {/* </section> */}

      {showMap && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h3 className="text-3xl md:text-4xl font-ubuntu font-bold mb-4 text-gray-900">
                {mapTitle}
              </h3>
              <p className="text-gray-600 text-lg">{mapDescription}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GoogleMapsProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                <GoogleMapComponent
                  locations={offices.map(office => ({
                    lat: office.lat || 34.0837,
                    lng: office.lng || 74.7973,
                    title: office.name,
                    address: office.address,
                    phone: office.phone,
                    email: office.email,
                  }))}
                  center={{
                    lat: 34.0837,
                    lng: 74.7973,
                  }}
                  zoom={9}
                  height="600px"
                  showControls={true}
                  isPlaceholder={!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                />
              </GoogleMapsProvider>
            </motion.div>

            {/* Map Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center"
            >
              <Badge className="bg-[#1BA5B8] text-white px-6 py-2">
                Click markers to view office details
              </Badge>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
