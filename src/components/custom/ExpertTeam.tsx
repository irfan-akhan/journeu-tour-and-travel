"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface ExpertTeamProps {
  title?: string;
  description?: string;
  teamCount?: number;
  buttonText?: string;
}

export default function ExpertTeam({
  title = "85+ Expert Team Members",
  description = "Ready to help you plan your journey",
  teamCount = 80,
  buttonText = "Meet Our Team"
}: ExpertTeamProps) {
  return (
    <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] text-white shadow-xl border-0">
      <div className="flex items-start justify-between mb-5 sm:mb-6">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-ubuntu font-bold mb-1.5 sm:mb-2">{title}</h3>
          <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">{description}</p>
        </div>
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFD84D]/20 rounded-xl flex items-center justify-center flex-shrink-0 ml-3 sm:ml-4">
          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD84D]" />
        </div>
      </div>
      
      <div className="flex -space-x-2 sm:-space-x-3 mb-5 sm:mb-6">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 sm:border-3 border-white shadow-md"
          />
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFD84D] border-2 sm:border-3 border-white flex items-center justify-center font-bold text-gray-900 text-[10px] sm:text-xs shadow-md"
        >
          +{teamCount}
        </motion.div>
      </div>

      <Button variant="outline" className="w-full bg-white text-[#1BA5B8] hover:bg-gray-100 border-0 py-4 sm:py-5 font-semibold text-xs sm:text-sm transition-all hover:shadow-md">
        {buttonText}
      </Button>
    </Card>
  );
}
