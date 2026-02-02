"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ScrollProgressProps {
  color?: string;
  height?: string;
  showPercentage?: boolean;
  className?: string;
}

export default function ScrollProgress({ 
  color = "bg-gradient-to-r from-[#1BA5B8] via-[#FFD84D] to-[#1BA5B8]",
  height = "h-1",
  showPercentage = false,
  className = ""
}: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 ${className}`}>
        <div className={`w-full bg-gray-200/30 backdrop-blur-sm ${height}`}>
          <motion.div
            className={`${height} ${color} shadow-lg`}
            style={{ width: `${scrollProgress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          >
            {/* Glow effect */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/30 blur-sm" />
          </motion.div>
        </div>
      </div>

      {/* Optional Percentage Display */}
      {showPercentage && scrollProgress > 5 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-20 right-8 z-50 w-16 h-16 bg-white/90 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center border-2 border-[#1BA5B8]"
        >
          <span className="text-sm font-bold text-[#1BA5B8]">
            {Math.round(scrollProgress)}%
          </span>
        </motion.div>
      )}
    </>
  );
}
