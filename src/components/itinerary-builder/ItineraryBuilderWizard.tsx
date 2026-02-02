'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useItineraryBuilder } from './context/ItineraryBuilderContext';
import { WizardProgress } from './WizardProgress';
import { DestinationStep } from './steps/DestinationStep';
import { DatesStep } from './steps/DatesStep';
import { ActivitiesStep } from './steps/ActivitiesStep';
import { AccommodationStep } from './steps/AccommodationStep';
import { TravelersStep } from './steps/TravelersStep';
import { AddOnsStep } from './steps/AddOnsStep';
import { ReviewStep } from './steps/ReviewStep';
import { SubmitStep } from './steps/SubmitStep';

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

export function ItineraryBuilderWizard() {
  const { state } = useItineraryBuilder();
  const { currentStep, isSuccess } = state;
  console.log('[ItineraryBuilderWizard] Rendering, currentStep:', currentStep, 'isSuccess:', isSuccess);

  // If submission was successful, show success screen
  if (isSuccess) {
    return <SuccessScreen />;
  }

  const renderStep = () => {
    switch (currentStep) {
      case 'destinations':
        return <DestinationStep />;
      case 'dates':
        return <DatesStep />;
      case 'activities':
        return <ActivitiesStep />;
      case 'accommodation':
        return <AccommodationStep />;
      case 'travelers':
        return <TravelersStep />;
      case 'addons':
        return <AddOnsStep />;
      case 'review':
        return <ReviewStep />;
      case 'submit':
        return <SubmitStep />;
      default:
        return <DestinationStep />;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <WizardProgress />

      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentStep}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={1}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function SuccessScreen() {
  const { state, resetBuilder, closeDrawer } = useItineraryBuilder();

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="w-20 h-20 rounded-full bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] flex items-center justify-center mb-6"
      >
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Inquiry Submitted!
        </h3>
        <p className="text-gray-600 mb-4">
          Our travel experts will contact you within 24 hours with a personalized quote.
        </p>

        {state.referenceId && (
          <p className="text-sm text-gray-500 mb-6">
            Reference: <span className="font-mono font-medium">{state.referenceId}</span>
          </p>
        )}

        <div className="flex flex-col gap-3">
          <button
            onClick={() => {
              resetBuilder();
              closeDrawer();
            }}
            className="px-6 py-2.5 bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] text-white rounded-lg font-medium hover:from-[#FFD84D] hover:to-[#FFA500] hover:text-gray-900 transition-all"
          >
            Done
          </button>
          <button
            onClick={resetBuilder}
            className="px-6 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Create Another Itinerary
          </button>
        </div>
      </motion.div>
    </div>
  );
}
