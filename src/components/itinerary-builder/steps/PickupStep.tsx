'use client';

import { useItineraryBuilder } from '../context/ItineraryBuilderContext';
import { PICKUP_LOCATIONS } from '../types/itinerary';
import { cn } from '@/lib/utils';
import { MapPin } from 'lucide-react';

export function PickupStep() {
  const { state, updatePickup, updateDrop, nextStep, prevStep } = useItineraryBuilder();
  const { pickup, drop } = state.itinerary;

  const canContinue = pickup !== '' && drop !== '';

  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">Pickup & Drop Location</h3>
        <p className="text-sm text-gray-500 mt-1">
          Select your preferred arrival and departure points.
        </p>
      </div>

      {/* Pickup */}
      <div className="mb-6">
        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
          <MapPin className="w-4 h-4 text-[#1BA5B8]" />
          Pickup Location
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {PICKUP_LOCATIONS.map((loc) => (
            <button
              key={loc}
              onClick={() => updatePickup(loc)}
              className={cn(
                'text-left px-4 py-3 rounded-lg border-2 text-sm transition-all',
                pickup === loc
                  ? 'border-[#1BA5B8] bg-[#1BA5B8]/10 text-[#0A4D5C] font-semibold'
                  : 'border-gray-200 hover:border-[#1BA5B8]/50 text-gray-700'
              )}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      {/* Drop */}
      <div className="mb-8">
        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
          <MapPin className="w-4 h-4 text-[#FFD84D]" />
          Drop Location
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {PICKUP_LOCATIONS.map((loc) => (
            <button
              key={loc}
              onClick={() => updateDrop(loc)}
              className={cn(
                'text-left px-4 py-3 rounded-lg border-2 text-sm transition-all',
                drop === loc
                  ? 'border-[#1BA5B8] bg-[#1BA5B8]/10 text-[#0A4D5C] font-semibold'
                  : 'border-gray-200 hover:border-[#1BA5B8]/50 text-gray-700'
              )}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="px-6 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={!canContinue}
          className={cn(
            'px-6 py-2.5 rounded-lg font-medium transition-all',
            canContinue
              ? 'bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] text-white hover:from-[#FFD84D] hover:to-[#FFA500] hover:text-gray-900'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          )}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
