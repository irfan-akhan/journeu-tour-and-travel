'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Sparkles } from 'lucide-react';
import { ItineraryBuilderTrigger } from '@/components/itinerary-builder/ItineraryBuilderTrigger';

interface CustomItineraryCTAProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function CustomItineraryCTA({
  title = "Can't find what you're looking for?",
  description = "Build your own custom itinerary! Choose your destinations, select activities, set your dates, and we'll create a personalized trip just for you.",
  className = '',
}: CustomItineraryCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0A4D5C] to-[#1BA5B8] ${className}`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Create Your Perfect Trip</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/80 mb-6">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Multiple destinations</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Flexible dates</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Any group size</span>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <ItineraryBuilderTrigger
            variant="secondary"
            size="lg"
            className="!bg-[#FFD84D] !text-[#0A4D5C] hover:!bg-white hover:!text-[#0A4D5C] shadow-2xl"
          >
            Build Custom Itinerary
          </ItineraryBuilderTrigger>
        </div>
      </div>
    </motion.div>
  );
}
