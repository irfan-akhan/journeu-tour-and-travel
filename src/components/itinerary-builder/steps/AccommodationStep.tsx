'use client';

import { motion } from 'framer-motion';
import { Star, Home, Tent, Building2, Check } from 'lucide-react';
import { useItineraryBuilder } from '../context/ItineraryBuilderContext';
import { WizardNavigation } from '../WizardNavigation';
import { AccommodationPreference } from '../types/itinerary';
import { cn } from '@/lib/utils';

const tiers = [
  {
    id: '3-star' as const,
    label: '3-Star',
    description: 'Comfortable & budget-friendly',
    priceRange: '₹2,500 - ₹4,000/night',
    features: ['Clean rooms', 'Basic amenities', 'Good location'],
    icon: Star,
    stars: 3,
  },
  {
    id: '4-star' as const,
    label: '4-Star',
    description: 'Premium comfort & service',
    priceRange: '₹5,000 - ₹8,000/night',
    features: ['Spacious rooms', 'Restaurant', 'Room service', 'Wi-Fi'],
    icon: Star,
    stars: 4,
    recommended: true,
  },
  {
    id: '5-star' as const,
    label: '5-Star Luxury',
    description: 'World-class luxury experience',
    priceRange: '₹10,000+/night',
    features: ['Suite options', 'Spa & wellness', 'Fine dining', 'Concierge'],
    icon: Star,
    stars: 5,
  },
];

const specialTypes = [
  {
    id: 'houseboat' as const,
    label: 'Houseboat Stay',
    description: 'Traditional Dal Lake experience',
    icon: Home,
    available: ['kashmir'],
  },
  {
    id: 'resort' as const,
    label: 'Resort',
    description: 'Scenic mountain resorts',
    icon: Building2,
    available: ['kashmir', 'jammu', 'leh-ladakh'],
  },
  {
    id: 'camp' as const,
    label: 'Camping',
    description: 'Under the stars experience',
    icon: Tent,
    available: ['leh-ladakh', 'kashmir'],
  },
];

export function AccommodationStep() {
  const { state, updateAccommodation } = useItineraryBuilder();
  const accommodation = state.itinerary.accommodation || {
    tier: undefined,
    specialTypes: [],
  };
  const selectedDestinations = state.itinerary.destinations || [];

  const handleTierSelect = (tier: '3-star' | '4-star' | '5-star') => {
    // Toggle: if already selected, unselect it
    const newTier = accommodation.tier === tier ? undefined : tier;
    updateAccommodation({ ...accommodation, tier: newTier });
  };

  const toggleSpecialType = (type: 'houseboat' | 'resort' | 'camp' | 'boutique') => {
    const newTypes = accommodation.specialTypes.includes(type)
      ? accommodation.specialTypes.filter((t) => t !== type)
      : [...accommodation.specialTypes, type];
    updateAccommodation({ ...accommodation, specialTypes: newTypes });
  };

  // Filter special types based on selected destinations
  const availableSpecialTypes = specialTypes.filter((type) =>
    selectedDestinations.some((dest) => type.available.includes(dest.id))
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Where would you like to stay?
          </h3>
          <p className="text-sm text-gray-600">
            Choose your preferred accommodation level.
          </p>
        </div>

        {/* Tier selection */}
        <div className="space-y-3">
          {tiers.map((tier) => {
            const isSelected = accommodation.tier === tier.id;
            return (
              <motion.button
                key={tier.id}
                onClick={() => handleTierSelect(tier.id)}
                whileTap={{ scale: 0.99 }}
                className={cn(
                  'w-full p-4 rounded-xl border-2 text-left transition-all relative',
                  isSelected
                    ? 'border-[#1BA5B8] bg-[#1BA5B8]/5'
                    : 'border-gray-200 hover:border-gray-300'
                )}
              >
                {tier.recommended && (
                  <span className="absolute -top-2.5 left-4 px-2 py-0.5 bg-[#FFD84D] text-xs font-medium rounded text-gray-900">
                    Recommended
                  </span>
                )}

                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{tier.label}</h4>
                      <div className="flex items-center">
                        {Array.from({ length: tier.stars }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 text-[#FFD84D] fill-[#FFD84D]"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{tier.description}</p>
                    <p className="text-sm font-medium text-[#0A4D5C]">
                      {tier.priceRange}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tier.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={cn(
                      'w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0',
                      isSelected
                        ? 'bg-[#1BA5B8] border-[#1BA5B8]'
                        : 'border-gray-300'
                    )}
                  >
                    {isSelected && <Check className="w-4 h-4 text-white" />}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Special accommodation types */}
        {availableSpecialTypes.length > 0 && (
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Special Experiences (Optional)
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {availableSpecialTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = accommodation.specialTypes.includes(type.id);
                return (
                  <button
                    key={type.id}
                    onClick={() => toggleSpecialType(type.id)}
                    className={cn(
                      'p-4 rounded-xl border-2 text-left transition-all',
                      isSelected
                        ? 'border-[#1BA5B8] bg-[#1BA5B8]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    )}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className={cn(
                          'p-2 rounded-lg',
                          isSelected ? 'bg-[#1BA5B8]/10' : 'bg-gray-100'
                        )}
                      >
                        <Icon
                          className={cn(
                            'w-5 h-5',
                            isSelected ? 'text-[#1BA5B8]' : 'text-gray-500'
                          )}
                        />
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-[#1BA5B8] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="font-medium text-gray-900 text-sm">
                      {type.label}
                    </p>
                    <p className="text-xs text-gray-500">{type.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <WizardNavigation />
    </div>
  );
}
