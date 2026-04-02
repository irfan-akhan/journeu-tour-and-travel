'use client';

import { useItineraryBuilder } from '../context/ItineraryBuilderContext';
import { DURATION_OPTIONS } from '../types/itinerary';
import { cn } from '@/lib/utils';

export function DurationStep() {
  const { state, updateDuration, nextStep } = useItineraryBuilder();
  const selected = state.itinerary.duration;

  const handleSelect = (opt: typeof DURATION_OPTIONS[number]) => {
    updateDuration(opt);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">Select Duration</h3>
        <p className="text-sm text-gray-500 mt-1">
          Choose your number of days and nights.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {DURATION_OPTIONS.map((opt) => {
          const isSelected = selected?.label === opt.label;
          return (
            <button
              key={opt.label}
              onClick={() => handleSelect(opt)}
              className={cn(
                'flex flex-col items-center justify-center p-4 rounded-xl border-2 text-center transition-all',
                isSelected
                  ? 'border-[#1BA5B8] bg-[#1BA5B8]/10 text-[#0A4D5C] font-semibold'
                  : 'border-gray-200 hover:border-[#1BA5B8]/50 text-gray-700'
              )}
            >
              <span className="text-sm font-medium leading-snug">{opt.label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={nextStep}
          disabled={!selected}
          className={cn(
            'px-6 py-2.5 rounded-lg font-medium transition-all',
            selected
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
