"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield, Phone, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { tours } from "@/data/toursData";
import Link from "next/link";
import { SECTION_BACKGROUNDS, BUTTON_GRADIENTS } from "@/constants/theme";
import { useItineraryBuilder } from "@/components/itinerary-builder/context/ItineraryBuilderContext";

interface TourPackage {
  tour: string;
  price: string;
  badge: string;
  link: string;
}

interface Feature {
  text: string;
}

interface TourBookingCTAProps {
  badge?: string;
  title?: string;
  description?: string;
  packages?: TourPackage[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  features?: Feature[];
}

export default function TourBookingCTA({
  badge = "Limited Time Offer - Save 20%",
  title = "Ready to Explore Kashmir?",
  description = "Don't just contact us book your dream tour directly! Instant confirmation, best prices, and expert support.",
  packages = tours.slice(0, 3).map((tour, index) => ({
    tour: tour.title,
    price: "Contact Us",
    badge: tour.badges?.[0] || (index === 0 ? "Most Popular" : index === 1 ? "Best Value" : "Premium"),
    link: `/tours/${tour.id}`
  })),
  primaryButtonText = "View All Tours",
  secondaryButtonText = "Custom Tour Builder",
  features = [
    { text: "Instant Confirmation" },
    { text: "Secure Payment" },
    { text: "24/7 Support" },
    { text: "Best Price Guarantee" },
  ]
}: TourBookingCTAProps) {
  const featureIcons = [CheckCircle, Shield, Phone, Award];
  const { openDrawer } = useItineraryBuilder();

  return (
    <section className={`py-28 ${SECTION_BACKGROUNDS.uniformBlue} text-white relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFD84D] rounded-full blur-3xl"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-[#FFD84D] text-gray-900 mb-8 text-base px-6 py-3 font-bold">
              {badge}
            </Badge>
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl font-ubuntu font-bold mb-6 md:mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 md:mb-12 max-w-4xl mx-auto font-light leading-relaxed px-4">
              {description}
            </p>
          </motion.div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12">
            {packages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{ y: -15, scale: 1.05 }}
              >
                <Card className="p-10 bg-white text-gray-900 relative overflow-hidden group shadow-2xl border-0">
                  <Badge className="absolute top-6 right-6 bg-[#FFD84D] text-gray-900 px-4 py-2 font-bold text-sm">{item.badge}</Badge>
                  <div className="mb-6 mt-8">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-ubuntu font-bold mb-2 sm:mb-3 pr-4">{item.tour}</h3>
                  </div>
                  <Link href={item.link} className="cursor-pointer">
                    <Button className={`w-full cursor-pointer ${BUTTON_GRADIENTS.primary} hover:shadow-xl group-hover:scale-105 transition-all duration-300 py-6 text-lg font-semibold`}>
                      View details
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/tours">
                <Button size="lg" className="bg-[#FFD84D] text-gray-900 hover:bg-[#FFD84D]/90 text-md px-12 py-8 font-bold shadow-2xl">
                  {primaryButtonText}
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={openDrawer}
                className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#0A4D5C] text-md px-12 py-8 font-bold"
              >
                {secondaryButtonText}
              </Button>
            </motion.div>
          </div>

            <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6 flex-wrap text-xs sm:text-sm">
            {features.map((item, index) => {
              const Icon = featureIcons[index];
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-[#FFD84D]" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
