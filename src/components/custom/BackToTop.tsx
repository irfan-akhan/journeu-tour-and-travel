"use client";

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BackToTopProps {
  showAfter?: number;
  smooth?: boolean;
  className?: string;
}

export default function BackToTop({ 
  showAfter = 400, 
  smooth = true,
  className = "" 
}: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] rounded-full shadow-2xl flex items-center justify-center hover:shadow-[0_8px_30px_rgba(27,165,184,0.4)] transition-all duration-300 border-2 border-white/20 group focus:outline-none focus:ring-4 focus:ring-[#1BA5B8]/50 ${className}`}
          aria-label="Scroll back to top of page"
          role="button"
          tabIndex={0}
        >
          <ArrowUp className="w-6 h-6 text-white group-hover:translate-y-[-2px] transition-transform" />
          
          {/* Pulse animation */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-[#1BA5B8] rounded-full"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
