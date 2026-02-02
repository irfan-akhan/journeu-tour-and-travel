'use client';

import { motion } from 'framer-motion';
import {
  Car,
  Camera,
  Heart,
  Shield,
  Utensils,
  Music,
  Sparkles,
  Check,
} from 'lucide-react';
import { useItineraryBuilder } from '../context/ItineraryBuilderContext';
import { WizardNavigation } from '../WizardNavigation';
import { SelectedAddOn } from '../types/itinerary';
import { cn } from '@/lib/utils';

const availableAddOns: Array<
  Omit<SelectedAddOn, 'id'> & { id: string; icon: typeof Car; disabled?: boolean; disabledReason?: string }
> = [
  {
    id: 'private-vehicle',
    name: 'Private Vehicle Upgrade',
    price: 5000,
    priceType: 'per-day',
    description: 'Upgrade to a premium SUV with dedicated driver',
    icon: Car,
  },
  {
    id: 'photography',
    name: 'Professional Photography',
    price: 15000,
    priceType: 'per-trip',
    description: 'Professional photographer for memorable moments',
    icon: Camera,
  },
  {
    id: 'candlelight-dinner',
    name: 'Candlelight Dinner',
    price: 3500,
    priceType: 'per-person',
    description: 'Romantic dinner setup at scenic location',
    icon: Heart,
  },
  {
    id: 'travel-insurance',
    name: 'Travel Insurance',
    price: 500,
    priceType: 'per-person',
    description: 'Comprehensive coverage for your trip',
    icon: Shield,
  },
  {
    id: 'cooking-class',
    name: 'Kashmiri Cooking Class',
    price: 2000,
    priceType: 'per-person',
    description: 'Learn to cook authentic Kashmiri dishes',
    icon: Utensils,
    disabled: true,
    disabledReason: 'Coming Soon',
  },
  {
    id: 'cultural-show',
    name: 'Cultural Evening',
    price: 2500,
    priceType: 'per-trip',
    description: 'Traditional music and dance performance',
    icon: Music,
  },
  {
    id: 'shikara-sunrise',
    name: 'Sunrise Shikara Ride',
    price: 1500,
    priceType: 'per-trip',
    description: 'Early morning ride on Dal Lake',
    icon: Sparkles,
  },
];

const priceTypeLabels = {
  'per-trip': '/trip',
  'per-person': '/person',
  'per-day': '/day',
};

export function AddOnsStep() {
  const { state, updateAddOns, getTotalDays } = useItineraryBuilder();
  const selectedAddOns = state.itinerary.addOns || [];
  const travelers = state.itinerary.travelers || { adults: 2, children: 0 };
  const totalDays = getTotalDays();

  const toggleAddOn = (addOn: (typeof availableAddOns)[number]) => {
    const existing = selectedAddOns.find((a) => a.id === addOn.id);

    if (existing) {
      updateAddOns(selectedAddOns.filter((a) => a.id !== addOn.id));
    } else {
      const { icon, ...addOnData } = addOn;
      updateAddOns([...selectedAddOns, addOnData]);
    }
  };

  const isSelected = (addOnId: string) =>
    selectedAddOns.some((a) => a.id === addOnId);

  // Calculate total add-ons cost
  const calculateAddOnCost = (addOn: SelectedAddOn) => {
    const totalPeople = travelers.adults + travelers.children;
    switch (addOn.priceType) {
      case 'per-trip':
        return addOn.price;
      case 'per-person':
        return addOn.price * totalPeople;
      case 'per-day':
        return addOn.price * totalDays;
      default:
        return addOn.price;
    }
  };

  const totalAddOnsCost = selectedAddOns.reduce(
    (sum, addOn) => sum + calculateAddOnCost(addOn),
    0
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Enhance your experience
          </h3>
          <p className="text-sm text-gray-600">
            Add special experiences to make your trip unforgettable.
          </p>
        </div>

        {/* Add-ons grid */}
        <div className="space-y-3">
          {availableAddOns.map((addOn) => {
            const Icon = addOn.icon;
            const selected = isSelected(addOn.id);
            const cost = calculateAddOnCost(addOn);
            const isDisabled = addOn.disabled;

            return (
              <motion.button
                key={addOn.id}
                onClick={() => !isDisabled && toggleAddOn(addOn)}
                disabled={isDisabled}
                whileTap={isDisabled ? {} : { scale: 0.99 }}
                className={cn(
                  'w-full flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all',
                  isDisabled
                    ? 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                    : selected
                    ? 'border-[#1BA5B8] bg-[#1BA5B8]/5'
                    : 'border-gray-200 hover:border-gray-300'
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    'p-2.5 rounded-xl flex-shrink-0',
                    isDisabled
                      ? 'bg-gray-100'
                      : selected
                      ? 'bg-[#1BA5B8]/10'
                      : 'bg-gray-100'
                  )}
                >
                  <Icon
                    className={cn(
                      'w-5 h-5',
                      isDisabled
                        ? 'text-gray-400'
                        : selected
                        ? 'text-[#1BA5B8]'
                        : 'text-gray-500'
                    )}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className={cn(
                          'font-medium',
                          isDisabled ? 'text-gray-500' : 'text-gray-900'
                        )}>
                          {addOn.name}
                        </h4>
                        {isDisabled && addOn.disabledReason && (
                          <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium">
                            {addOn.disabledReason}
                          </span>
                        )}
                      </div>
                      <p className={cn(
                        'text-sm mt-0.5',
                        isDisabled ? 'text-gray-400' : 'text-gray-500'
                      )}>
                        {addOn.description}
                      </p>
                    </div>
                    <div
                      className={cn(
                        'w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5',
                        isDisabled
                          ? 'border-gray-300 bg-gray-200'
                          : selected
                          ? 'bg-[#1BA5B8] border-[#1BA5B8]'
                          : 'border-gray-300'
                      )}
                    >
                      {selected && !isDisabled && <Check className="w-3 h-3 text-white" />}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className={cn(
                      'text-sm font-medium',
                      isDisabled ? 'text-gray-400' : 'text-[#0A4D5C]'
                    )}>
                      ₹{addOn.price.toLocaleString('en-IN')}
                      <span className={cn(
                        'font-normal',
                        isDisabled ? 'text-gray-300' : 'text-gray-400'
                      )}>
                        {priceTypeLabels[addOn.priceType]}
                      </span>
                    </span>
                    {selected && !isDisabled && addOn.priceType !== 'per-trip' && (
                      <span className="text-xs text-gray-500">
                        (₹{cost.toLocaleString('en-IN')} total)
                      </span>
                    )}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Total cost summary */}
      {selectedAddOns.length > 0 && (
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              {selectedAddOns.length}{' '}
              {selectedAddOns.length === 1 ? 'add-on' : 'add-ons'} selected
            </span>
            <span className="text-sm font-medium text-[#0A4D5C]">
              +₹{totalAddOnsCost.toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      )}

      <WizardNavigation nextLabel="Review Itinerary" />
    </div>
  );
}
