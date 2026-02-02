'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Baby,
  Minus,
  Plus,
  Check,
  Camera,
  Accessibility,
  UtensilsCrossed,
} from 'lucide-react';
import { useItineraryBuilder } from '../context/ItineraryBuilderContext';
import { WizardNavigation } from '../WizardNavigation';
import { TravelersInfo } from '../types/itinerary';
import { cn } from '@/lib/utils';

const dietaryOptions = [
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'jain', label: 'Jain' },
  { id: 'halal', label: 'Halal' },
] as const;

const occasionTypes = [
  { id: 'honeymoon', label: 'Honeymoon', emoji: '💕' },
  { id: 'anniversary', label: 'Anniversary', emoji: '🎉' },
  { id: 'birthday', label: 'Birthday', emoji: '🎂' },
  { id: 'celebration', label: 'Celebration', emoji: '🥳' },
] as const;

export function TravelersStep() {
  const { state, updateTravelers } = useItineraryBuilder();
  const travelers = state.itinerary.travelers || {
    adults: 2,
    children: 0,
    specialRequirements: {
      dietary: [],
      accessibility: false,
      photographyFocus: false,
    },
  };

  const updateField = <K extends keyof TravelersInfo>(
    field: K,
    value: TravelersInfo[K]
  ) => {
    updateTravelers({ ...travelers, [field]: value });
  };

  const updateRequirement = <
    K extends keyof TravelersInfo['specialRequirements']
  >(
    field: K,
    value: TravelersInfo['specialRequirements'][K]
  ) => {
    updateTravelers({
      ...travelers,
      specialRequirements: {
        ...travelers.specialRequirements,
        [field]: value,
      },
    });
  };

  const toggleDietary = (option: (typeof dietaryOptions)[number]['id']) => {
    const current = travelers.specialRequirements.dietary;
    const newDietary = current.includes(option)
      ? current.filter((d) => d !== option)
      : [...current, option];
    updateRequirement('dietary', newDietary);
  };

  const setOccasion = (type: (typeof occasionTypes)[number]['id'] | 'none') => {
    if (type === 'none') {
      updateTravelers({ ...travelers, specialOccasion: undefined });
    } else {
      updateTravelers({
        ...travelers,
        specialOccasion: { type, notes: '' },
      });
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Who&apos;s traveling?
          </h3>
          <p className="text-sm text-gray-600">
            Tell us about your group and any special requirements.
          </p>
        </div>

        {/* Travelers count */}
        <div className="space-y-4">
          {/* Adults */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg">
                <Users className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Adults</p>
                <p className="text-xs text-gray-500">Age 12+</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-lg p-1">
              <button
                onClick={() => updateField('adults', Math.max(1, travelers.adults - 1))}
                disabled={travelers.adults <= 1}
                className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-30 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-medium">{travelers.adults}</span>
              <button
                onClick={() => updateField('adults', Math.min(20, travelers.adults + 1))}
                disabled={travelers.adults >= 20}
                className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-30 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg">
                <Baby className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Children</p>
                <p className="text-xs text-gray-500">Age 2-11</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-lg p-1">
              <button
                onClick={() =>
                  updateField('children', Math.max(0, travelers.children - 1))
                }
                disabled={travelers.children <= 0}
                className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-30 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-medium">
                {travelers.children}
              </span>
              <button
                onClick={() =>
                  updateField('children', Math.min(10, travelers.children + 1))
                }
                disabled={travelers.children >= 10}
                className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-30 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Special occasion */}
        <div className="pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Special occasion? (Optional)
          </h4>
          <div className="flex flex-wrap gap-2">
            {occasionTypes.map((occasion) => {
              const isSelected = travelers.specialOccasion?.type === occasion.id;
              return (
                <button
                  key={occasion.id}
                  onClick={() =>
                    setOccasion(isSelected ? 'none' : occasion.id)
                  }
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all',
                    isSelected
                      ? 'border-[#1BA5B8] bg-[#1BA5B8]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  )}
                >
                  <span>{occasion.emoji}</span>
                  <span className="text-sm font-medium">{occasion.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Special requirements */}
        <div className="pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Special requirements
          </h4>

          {/* Dietary */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <UtensilsCrossed className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">Dietary preferences</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {dietaryOptions.map((option) => {
                const isSelected =
                  travelers.specialRequirements.dietary.includes(option.id);
                return (
                  <button
                    key={option.id}
                    onClick={() => toggleDietary(option.id)}
                    className={cn(
                      'px-3 py-1.5 rounded-full border text-sm transition-all',
                      isSelected
                        ? 'border-[#1BA5B8] bg-[#1BA5B8]/10 text-[#0A4D5C]'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    )}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Other options */}
          <div className="space-y-3">
            <button
              onClick={() =>
                updateRequirement(
                  'photographyFocus',
                  !travelers.specialRequirements.photographyFocus
                )
              }
              className={cn(
                'w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all',
                travelers.specialRequirements.photographyFocus
                  ? 'border-[#1BA5B8] bg-[#1BA5B8]/5'
                  : 'border-gray-200 hover:border-gray-300'
              )}
            >
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium">Photography focus</span>
              </div>
              <div
                className={cn(
                  'w-5 h-5 rounded border-2 flex items-center justify-center',
                  travelers.specialRequirements.photographyFocus
                    ? 'bg-[#1BA5B8] border-[#1BA5B8]'
                    : 'border-gray-300'
                )}
              >
                {travelers.specialRequirements.photographyFocus && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>
            </button>

            <button
              onClick={() =>
                updateRequirement(
                  'accessibility',
                  !travelers.specialRequirements.accessibility
                )
              }
              className={cn(
                'w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all',
                travelers.specialRequirements.accessibility
                  ? 'border-[#1BA5B8] bg-[#1BA5B8]/5'
                  : 'border-gray-200 hover:border-gray-300'
              )}
            >
              <div className="flex items-center gap-3">
                <Accessibility className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium">Accessibility needs</span>
              </div>
              <div
                className={cn(
                  'w-5 h-5 rounded border-2 flex items-center justify-center',
                  travelers.specialRequirements.accessibility
                    ? 'bg-[#1BA5B8] border-[#1BA5B8]'
                    : 'border-gray-300'
                )}
              >
                {travelers.specialRequirements.accessibility && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      <WizardNavigation />
    </div>
  );
}
