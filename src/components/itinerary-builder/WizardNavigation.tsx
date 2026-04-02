'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useItineraryBuilder } from './context/ItineraryBuilderContext';
import { cn } from '@/lib/utils';

interface WizardNavigationProps {
  onNext?: () => boolean | void | Promise<boolean | void>; // Return false to prevent navigation
  nextLabel?: React.ReactNode;
  nextDisabled?: boolean;
  showPrev?: boolean;
  hideNext?: boolean;
  showSkip?: boolean;
  skipLabel?: string;
}

export function WizardNavigation({
  onNext,
  nextLabel = 'Continue',
  nextDisabled = false,
  showPrev = true,
  hideNext = false,
  showSkip = false,
  skipLabel = 'Skip this step',
}: WizardNavigationProps) {
  const { nextStep, prevStep, canGoPrev } = useItineraryBuilder();

  const handleNext = async () => {
    if (onNext) {
      const canProceed = await onNext();
      if (canProceed === false) return;
    }
    nextStep();
  };

  return (
    <div className="sticky bottom-0 px-6 py-4 bg-white border-t border-gray-200 shadow-lg">
      {/* Navigation buttons */}
      <div className="flex items-center gap-3">
        {showPrev && canGoPrev() && (
          <motion.button
            onClick={prevStep}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-1 px-4 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </motion.button>
        )}

        {showSkip && (
          <button
            onClick={() => nextStep()}
            className="px-4 py-2.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            {skipLabel}
          </button>
        )}

        {!hideNext && (
          <motion.button
            onClick={handleNext}
            disabled={nextDisabled}
            whileHover={nextDisabled ? {} : { scale: 1.02 }}
            whileTap={nextDisabled ? {} : { scale: 0.98 }}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all',
              nextDisabled
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] text-white hover:from-[#FFD84D] hover:to-[#FFA500] hover:text-gray-900'
            )}
          >
            <span>{nextLabel}</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </div>
  );
}
