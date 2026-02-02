"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import EnquiryModal from "@/components/custom/EnquiryModal";

interface StickyBookingBarProps {
  tourTitle: string;
  price?: number;
  tourId?: string;
}

export default function StickyBookingBar({ tourTitle, price, tourId }: StickyBookingBarProps) {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 400], [0, 1]);
  const y = useTransform(scrollY, [300, 400], [100, 0]);

  return (
    <>
      <motion.div
        style={{ opacity, y }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-2xl border-t-2 border-[#1BA5B8]"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Tour Info */}
            <div className="flex-1">
              <h3 className="font-ubuntu text-lg font-bold text-gray-900 line-clamp-1">
                {tourTitle}
              </h3>
              <p className="text-sm text-gray-600 mt-1">Contact us for pricing and availability</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              {/* Phone */}
              <a
                href="tel:+916005571959"
                className="hidden md:flex items-center gap-2 px-4 py-3 bg-white border-2 border-[#1BA5B8] text-[#1BA5B8] font-semibold rounded-xl hover:bg-[#1BA5B8] hover:text-white transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              {/* Enquire */}
              <motion.button
                onClick={() => setIsEnquiryModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#0A4D5C] text-white font-semibold rounded-xl hover:bg-[#1BA5B8] transition-all shadow-lg"
              >
                Enquire Now
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enquiry Modal - Outside motion.div to avoid transform clipping */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        tourTitle={tourTitle}
        tourId={tourId}
      />
    </>
  );
}
