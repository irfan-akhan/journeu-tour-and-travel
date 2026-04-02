'use client';

import { useItineraryBuilder } from '../context/ItineraryBuilderContext';
import { PLACE_GROUPS } from '../types/itinerary';
import { cn } from '@/lib/utils';

export function PlacesStep() {
  const { state, updatePlaces, nextStep, prevStep } = useItineraryBuilder();
  const selected = state.itinerary.places;

  const toggle = (place: string) => {
    if (selected.includes(place)) {
      updatePlaces(selected.filter((p) => p !== place));
    } else {
      updatePlaces([...selected, place]);
    }
  };

  const canContinue = selected.length > 0;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">Places to Visit</h3>
        <p className="text-sm text-gray-500 mt-1">
          Pick the destinations you want to explore. Select as many as you like.
        </p>
      </div>

      <div className="space-y-6">
        {PLACE_GROUPS.map((group) => (
          <div key={group.region}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              {group.region}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {group.places.map((place) => {
                const isSelected = selected.includes(place);
                return (
                  <button
                    key={place}
                    onClick={() => toggle(place)}
                    className={cn(
                      'text-left px-3 py-2.5 rounded-lg border-2 text-sm transition-all',
                      isSelected
                        ? 'border-[#1BA5B8] bg-[#1BA5B8]/10 text-[#0A4D5C] font-semibold'
                        : 'border-gray-200 hover:border-[#1BA5B8]/50 text-gray-700'
                    )}
                  >
                    {place}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {selected.length > 0 && (
        <p className="mt-4 text-xs text-[#1BA5B8] font-medium">
          {selected.length} place{selected.length > 1 ? 's' : ''} selected
        </p>
      )}

      <div className="mt-8 flex justify-between">
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
