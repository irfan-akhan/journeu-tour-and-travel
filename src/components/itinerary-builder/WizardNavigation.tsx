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
  const { nextStep, prevStep, canGoPrev, state, getTotalDays } = useItineraryBuilder();

  const handleNext = async () => {
    console.log('[WizardNavigation] handleNext called, current step:', state.currentStep);
    if (onNext) {
      console.log('[WizardNavigation] onNext callback exists, calling it...');
      const canProceed = await onNext();
      console.log('[WizardNavigation] onNext returned:', canProceed);
      if (canProceed === false) {
        console.log('[WizardNavigation] Navigation blocked by onNext returning false');
        return;
      }
    }
    console.log('[WizardNavigation] Calling nextStep()');
    nextStep();
  };

  const totalDays = getTotalDays();
  const estimatedPrice = state.itinerary.estimatedPrice?.grandTotal || 0;

  return (
    <div className="sticky bottom-0 px-6 py-4 bg-white border-t border-gray-200 shadow-lg">
      {/* Quick summary */}
      {totalDays > 0 && (
        <div className="flex items-center justify-between mb-3 text-sm">
          <span className="text-gray-600">
            {totalDays} {totalDays === 1 ? 'day' : 'days'} trip
          </span>
          {estimatedPrice > 0 && (
            <span className="font-medium text-[#0A4D5C]">
              Est. ₹{estimatedPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      )}

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
