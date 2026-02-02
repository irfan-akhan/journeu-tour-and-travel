"use client";

import THEME from "@/constants/theme";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

interface CallButtonProps {
  phoneNumber: string;
}

export default function CallButton({ phoneNumber }: CallButtonProps) {
  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`${THEME.button.primary} cursor-pointer fixed bottom-28 right-6 z-50 p-4 text-white rounded-full shadow-2xl hover:shadow-[#1BA5B8]/50 transition-all group`}
    >
      <Phone className="w-7 h-7" />
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray text-gray-900 px-4 py-2 rounded-xl shadow-lg font-semibold whitespace-nowrap hidden group-hover:block"
      >
        Call Us Now
      </motion.span>
    </motion.button>
  );
}
