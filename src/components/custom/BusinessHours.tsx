"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

interface HoursRow {
  day: string;
  hours: string;
}

interface BusinessHoursProps {
  title?: string;
  description?: string;
  peakSeasonLabel?: string;
  peakSeasonNote?: string;
  peakHours: HoursRow[];
  offSeasonLabel?: string;
  offSeasonHours: HoursRow[];
  emergencyNote?: string;
}

export default function BusinessHours({
  title = "When We're Here For You",
  description = "Round-the-clock support with flexible hours across all seasons",
  peakSeasonLabel = "Peak Season (May - September)",
  peakSeasonNote = "Extended hours for high demand",
  peakHours,
  offSeasonLabel = "Off-Season Hours (October - April)",
  offSeasonHours,
  emergencyNote = "For travelers currently on tour or urgent matters, call our emergency hotline anytime."
}: BusinessHoursProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-ubuntu font-bold mb-3 md:mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-gray-600 px-4"
          >
            {description}
          </motion.p>
        </div>

        <Card className="overflow-hidden">
          <div className="bg-[#1BA5B8] text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">{peakSeasonLabel}</h3>
                <p className="text-sm sm:text-base text-white/90">{peakSeasonNote}</p>
              </div>
              <Badge className="bg-[#FFD84D] text-gray-900">Current</Badge>
            </div>
          </div>
          <div className="p-6">
            <table className="w-full">
              <tbody className="divide-y">
                {peakHours.map((row, index) => (
                  <tr key={index}>
                    <td className="py-2 sm:py-3 text-sm sm:text-base font-medium">{row.day}</td>
                    <td className="py-2 sm:py-3 text-sm sm:text-base text-right text-gray-600">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 p-6 border-t">
            <h4 className="text-sm sm:text-base font-bold mb-3">{offSeasonLabel}</h4>
            <table className="w-full">
              <tbody className="divide-y">
                {offSeasonHours.map((row, index) => (
                  <tr key={index}>
                    <td className="py-2 text-sm">{row.day}</td>
                    <td className="py-2 text-right text-sm text-gray-600">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-t border-yellow-200 p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <p className="font-semibold text-gray-900 mb-1">Emergency Support: 24/7</p>
              <p className="text-gray-600 leading-relaxed">{emergencyNote}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
