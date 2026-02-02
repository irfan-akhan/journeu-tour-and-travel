'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useItineraryBuilder } from './context/ItineraryBuilderContext';
import { WIZARD_STEPS, STEP_LABELS, WizardStep } from './types/itinerary';
import { cn } from '@/lib/utils';

export function WizardProgress() {
  const { state, goToStep } = useItineraryBuilder();
  const { currentStep, completedSteps } = state;

  const currentIndex = WIZARD_STEPS.indexOf(currentStep);

  const getStepStatus = (step: WizardStep, index: number) => {
    if (completedSteps.includes(step)) return 'completed';
    if (index === currentIndex) return 'current';
    return 'upcoming';
  };

  const canNavigateToStep = (step: WizardStep, index: number) => {
    // Can navigate to completed steps or current step
    return completedSteps.includes(step) || index <= currentIndex;
  };

  return (
    <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
      {/* Mobile: Show current step only */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Step {currentIndex + 1} of {WIZARD_STEPS.length}
          </span>
          <span className="text-sm font-medium text-[#0A4D5C]">
            {STEP_LABELS[currentStep]}
          </span>
        </div>
        <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / WIZARD_STEPS.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Desktop: Show all steps */}
      <div className="hidden sm:block">
        <div className="flex items-center justify-between">
          {WIZARD_STEPS.map((step, index) => {
            const status = getStepStatus(step, index);
            const canNavigate = canNavigateToStep(step, index);

            return (
              <div key={step} className="flex items-center">
                {/* Step indicator */}
                <button
                  onClick={() => canNavigate && goToStep(step)}
                  disabled={!canNavigate}
                  className={cn(
                    'flex flex-col items-center group',
                    canNavigate ? 'cursor-pointer' : 'cursor-not-allowed'
                  )}
                >
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all',
                      status === 'completed' &&
                        'bg-[#1BA5B8] text-white',
                      status === 'current' &&
                        'bg-[#0A4D5C] text-white ring-4 ring-[#1BA5B8]/20',
                      status === 'upcoming' &&
                        'bg-gray-200 text-gray-500'
                    )}
                  >
                    {status === 'completed' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span
                    className={cn(
                      'mt-1 text-xs transition-colors',
                      status === 'current'
                        ? 'text-[#0A4D5C] font-medium'
                        : 'text-gray-500',
                      canNavigate && 'group-hover:text-[#1BA5B8]'
                    )}
                  >
                    {STEP_LABELS[step]}
                  </span>
                </button>

                {/* Connector line */}
                {index < WIZARD_STEPS.length - 1 && (
                  <div className="flex-1 mx-2 h-0.5 bg-gray-200 min-w-[20px]">
                    <motion.div
                      className="h-full bg-[#1BA5B8]"
                      initial={{ width: 0 }}
                      animate={{
                        width: status === 'completed' || index < currentIndex ? '100%' : '0%',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
