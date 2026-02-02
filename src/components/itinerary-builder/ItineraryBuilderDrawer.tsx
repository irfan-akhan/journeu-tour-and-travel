'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCcw } from 'lucide-react';
import { useItineraryBuilder } from './context/ItineraryBuilderContext';
import { ItineraryBuilderWizard } from './ItineraryBuilderWizard';
import { useState } from 'react';

export function ItineraryBuilderDrawer() {
  const { state, closeDrawer, resetBuilder } = useItineraryBuilder();
  const { isDrawerOpen } = state;
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleReset = () => {
    resetBuilder();
    setShowResetConfirm(false);
  };

  // Handle escape key to close drawer
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        closeDrawer();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isDrawerOpen, closeDrawer]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={closeDrawer}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[580px] lg:w-[640px] bg-white shadow-2xl z-[101] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Build your custom itinerary"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C]">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Build Your Dream Trip
                </h2>
                <p className="text-sm text-white/80">
                  Create a personalized itinerary
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                  aria-label="Start fresh"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span className="hidden sm:inline">Start Fresh</span>
                </button>
                <button
                  onClick={closeDrawer}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Reset Confirmation */}
            <AnimatePresence>
              {showResetConfirm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-3 bg-amber-50 border-b border-amber-200 flex items-center justify-between gap-4">
                    <p className="text-sm text-amber-800">
                      Clear all selections and start over?
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setShowResetConfirm(false)}
                        className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleReset}
                        className="px-3 py-1 text-sm bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                      >
                        Clear Draft
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <ItineraryBuilderWizard />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
