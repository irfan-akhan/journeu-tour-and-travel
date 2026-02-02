'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronUp, ChevronDown, Minus, Plus, MapPin } from 'lucide-react';
import { useItineraryBuilder } from '../context/ItineraryBuilderContext';
import { WizardNavigation } from '../WizardNavigation';
import { ALL_REGIONAL_DESTINATIONS } from '@/data/regionalDestinations';
import { SelectedDestination } from '../types/itinerary';
import { cn } from '@/lib/utils';

export function DestinationStep() {
  const { state, updateDestinations } = useItineraryBuilder();
  const [error, setError] = useState<string | null>(null);

  const selectedDestinations = state.itinerary.destinations || [];

  const toggleDestination = (destId: string) => {
    const existing = selectedDestinations.find((d) => d.id === destId);

    if (existing) {
      // Remove destination
      updateDestinations(
        selectedDestinations
          .filter((d) => d.id !== destId)
          .map((d, index) => ({ ...d, order: index }))
      );
    } else {
      // Add destination
      const destData = ALL_REGIONAL_DESTINATIONS.find((d) => d.id === destId);
      if (destData) {
        const newDest: SelectedDestination = {
          id: destData.id,
          name: destData.name,
          tagline: destData.tagline,
          heroImage: destData.hero_image,
          daysAllocated: 3, // Default days
          order: selectedDestinations.length,
        };
        updateDestinations([...selectedDestinations, newDest]);
      }
    }
    setError(null);
  };

  const updateDays = (destId: string, days: number) => {
    const clampedDays = Math.max(1, Math.min(14, days));
    updateDestinations(
      selectedDestinations.map((d) =>
        d.id === destId ? { ...d, daysAllocated: clampedDays } : d
      )
    );
  };

  const moveDestination = (destId: string, direction: 'up' | 'down') => {
    const index = selectedDestinations.findIndex((d) => d.id === destId);
    if (index === -1) return;

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= selectedDestinations.length) return;

    const newDestinations = [...selectedDestinations];
    [newDestinations[index], newDestinations[newIndex]] = [
      newDestinations[newIndex],
      newDestinations[index],
    ];

    updateDestinations(newDestinations.map((d, i) => ({ ...d, order: i })));
  };

  const isSelected = (destId: string) =>
    selectedDestinations.some((d) => d.id === destId);

  const handleNext = () => {
    if (selectedDestinations.length === 0) {
      setError('Please select at least one destination');
      return false;
    }
    return true;
  };

  const totalDays = selectedDestinations.reduce(
    (sum, d) => sum + d.daysAllocated,
    0
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Where would you like to go?
          </h3>
          <p className="text-sm text-gray-600">
            Select destinations and set how many days you want to spend at each.
          </p>
        </div>

        {/* Destination selection */}
        <div className="space-y-3">
          {ALL_REGIONAL_DESTINATIONS.map((dest) => {
            const selected = isSelected(dest.id);
            const selectedDest = selectedDestinations.find(
              (d) => d.id === dest.id
            );
            const isDisabled = dest.disabled;

            return (
              <motion.div
                key={dest.id}
                layout
                className={cn(
                  'rounded-xl border-2 overflow-hidden transition-colors',
                  isDisabled
                    ? 'border-gray-200 bg-gray-50 opacity-60'
                    : selected
                    ? 'border-[#1BA5B8] bg-[#1BA5B8]/5'
                    : 'border-gray-200 hover:border-gray-300'
                )}
              >
                {/* Destination card header */}
                <button
                  onClick={() => !isDisabled && toggleDestination(dest.id)}
                  disabled={isDisabled}
                  className={cn(
                    'w-full flex items-center gap-4 p-4',
                    isDisabled && 'cursor-not-allowed'
                  )}
                >
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={dest.hero_image}
                      alt={dest.name}
                      className={cn(
                        'w-full h-full object-cover',
                        isDisabled && 'grayscale'
                      )}
                    />
                    {selected && !isDisabled && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-[#1BA5B8]/60 flex items-center justify-center"
                      >
                        <Check className="w-6 h-6 text-white" />
                      </motion.div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <h4 className={cn(
                        'font-semibold',
                        isDisabled ? 'text-gray-500' : 'text-gray-900'
                      )}>
                        {dest.name}
                      </h4>
                      {isDisabled && dest.disabledReason && (
                        <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium">
                          {dest.disabledReason}
                        </span>
                      )}
                    </div>
                    <p className={cn(
                      'text-sm',
                      isDisabled ? 'text-gray-400' : 'text-gray-500'
                    )}>
                      {dest.tagline}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {dest.places.length} places to explore
                    </p>
                  </div>

                  {/* Checkbox indicator */}
                  <div
                    className={cn(
                      'w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors',
                      isDisabled
                        ? 'border-gray-300 bg-gray-200'
                        : selected
                        ? 'bg-[#1BA5B8] border-[#1BA5B8]'
                        : 'border-gray-300'
                    )}
                  >
                    {selected && !isDisabled && <Check className="w-4 h-4 text-white" />}
                  </div>
                </button>

                {/* Day allocation panel (when selected) */}
                <AnimatePresence>
                  {selected && selectedDest && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 flex items-center justify-between border-t border-gray-200 pt-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            Days in {dest.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          {/* Reorder buttons */}
                          <div className="flex flex-col -space-y-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                moveDestination(dest.id, 'up');
                              }}
                              disabled={selectedDest.order === 0}
                              className="p-0.5 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                            >
                              <ChevronUp className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                moveDestination(dest.id, 'down');
                              }}
                              disabled={
                                selectedDest.order ===
                                selectedDestinations.length - 1
                              }
                              className="p-0.5 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                            >
                              <ChevronDown className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Day counter */}
                          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateDays(dest.id, selectedDest.daysAllocated - 1);
                              }}
                              disabled={selectedDest.daysAllocated <= 1}
                              className="p-1.5 rounded-md hover:bg-white disabled:opacity-30 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">
                              {selectedDest.daysAllocated}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateDays(dest.id, selectedDest.daysAllocated + 1);
                              }}
                              disabled={selectedDest.daysAllocated >= 14}
                              className="p-1.5 rounded-md hover:bg-white disabled:opacity-30 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Selected summary */}
        {selectedDestinations.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Your Journey
              </span>
              <span className="text-sm text-[#0A4D5C] font-medium">
                {totalDays} {totalDays === 1 ? 'day' : 'days'} total
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              {selectedDestinations
                .sort((a, b) => a.order - b.order)
                .map((dest, index) => (
                  <span key={dest.id} className="flex items-center gap-2">
                    {index > 0 && <span className="text-gray-400">→</span>}
                    <span>
                      {dest.name}{' '}
                      <span className="text-gray-400">
                        ({dest.daysAllocated}d)
                      </span>
                    </span>
                  </span>
                ))}
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <p className="text-sm text-red-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            {error}
          </p>
        )}
      </div>

      <WizardNavigation
        onNext={handleNext}
        nextDisabled={selectedDestinations.length === 0}
      />
    </div>
  );
}
