'use client';

import { useItineraryBuilder } from '../context/ItineraryBuilderContext';
import { INCLUSIONS_LIST } from '../types/itinerary';
import { cn } from '@/lib/utils';

export function InclusionsStep() {
  const { state, updateInclusions, nextStep, prevStep } = useItineraryBuilder();
  const selected = state.itinerary.inclusions;

  const toggle = (item: string) => {
    if (selected.includes(item)) {
      updateInclusions(selected.filter((i) => i !== item));
    } else {
      updateInclusions([...selected, item]);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">Select Inclusions</h3>
        <p className="text-sm text-gray-500 mt-1">
          Add services as per your requirement. All optional.
        </p>
      </div>

      <div className="space-y-2">
        {INCLUSIONS_LIST.map((item) => {
          const isSelected = selected.includes(item);
          return (
            <button
              key={item}
              onClick={() => toggle(item)}
              className={cn(
                'w-full text-left px-4 py-3 rounded-lg border-2 text-sm transition-all flex items-center gap-3',
                isSelected
                  ? 'border-[#1BA5B8] bg-[#1BA5B8]/10 text-[#0A4D5C] font-semibold'
                  : 'border-gray-200 hover:border-[#1BA5B8]/50 text-gray-700'
              )}
            >
              <span
                className={cn(
                  'w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all',
                  isSelected ? 'border-[#1BA5B8] bg-[#1BA5B8]' : 'border-gray-300'
                )}
              >
                {isSelected && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              {item}
            </button>
          );
        })}
      </div>

      {selected.length > 0 && (
        <p className="mt-4 text-xs text-[#1BA5B8] font-medium">
          {selected.length} inclusion{selected.length > 1 ? 's' : ''} selected
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
          className="px-6 py-2.5 rounded-lg font-medium bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] text-white hover:from-[#FFD84D] hover:to-[#FFA500] hover:text-gray-900 transition-all"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
