'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Calendar,
  Users,
  Star,
  Pencil,
  ChevronRight,
  Mountain,
  Landmark,
  Compass,
  Heart,
  Palette,
} from 'lucide-react';
import { useItineraryBuilder } from '../context/ItineraryBuilderContext';
import { WizardNavigation } from '../WizardNavigation';
import { GeneratedDay, PriceEstimate } from '../types/itinerary';
import { ALL_REGIONAL_DESTINATIONS } from '@/data/regionalDestinations';
import { cn } from '@/lib/utils';
import { format, addDays } from 'date-fns';

const categoryIcons = {
  nature: Mountain,
  heritage: Landmark,
  adventure: Compass,
  spiritual: Heart,
  cultural: Palette,
};

// Pricing constants
const BASE_RATES = {
  '3-star': 2500,
  '4-star': 5000,
  '5-star': 10000,
};

const ACTIVITY_RATES = {
  nature: 500,
  adventure: 1500,
  heritage: 300,
  spiritual: 200,
  cultural: 400,
};

export function ReviewStep() {
  console.log('[ReviewStep] Component rendered');
  const { state, goToStep, getTotalDays } = useItineraryBuilder();
  console.log('[ReviewStep] Current step from state:', state.currentStep);
  const {
    destinations = [],
    dates,
    activities = [],
    accommodation,
    travelers,
    addOns = [],
  } = state.itinerary;

  const totalDays = getTotalDays();
  const totalPeople = (travelers?.adults || 2) + (travelers?.children || 0);

  // Generate day-by-day itinerary
  const generatedItinerary: GeneratedDay[] = useMemo(() => {
    const itinerary: GeneratedDay[] = [];
    let dayCounter = 1;
    const sortedDestinations = [...destinations].sort((a, b) => a.order - b.order);

    sortedDestinations.forEach((dest) => {
      const destData = ALL_REGIONAL_DESTINATIONS.find((d) => d.id === dest.id);
      const destActivities = activities.filter((a) => a.destinationId === dest.id);

      for (let i = 0; i < dest.daysAllocated; i++) {
        const dayActivities = destActivities.slice(
          i * 2,
          i * 2 + 2
        );

        itinerary.push({
          day: dayCounter,
          date: dates?.startDate ? addDays(dates.startDate, dayCounter - 1) : undefined,
          destination: dest.name,
          location: dest.name,
          title:
            dayCounter === 1
              ? `Arrival in ${dest.name}`
              : i === dest.daysAllocated - 1 && dayCounter === totalDays
              ? `Departure from ${dest.name}`
              : `Exploring ${dest.name}`,
          activities: dayActivities.map((a) => a.name),
          highlights: dayActivities.flatMap((a) => {
            const place = destData?.places.find((p) => p.name === a.name);
            return place?.highlights.slice(0, 2) || [];
          }),
          meals: ['Breakfast', 'Dinner'],
          accommodation: accommodation?.tier ? `${accommodation.tier} Hotel` : 'Not specified',
          accommodationTier: accommodation?.tier,
        });

        dayCounter++;
      }
    });

    return itinerary;
  }, [destinations, activities, dates, accommodation, totalDays]);

  // Calculate price estimate
  const priceEstimate: PriceEstimate = useMemo(() => {
    const tier = accommodation?.tier;
    const accommodationCost = tier ? BASE_RATES[tier] * totalDays : 0;

    const activitiesCost = activities.reduce((sum, act) => {
      return sum + (ACTIVITY_RATES[act.category] || 300);
    }, 0);

    const addOnsCost = addOns.reduce((sum, addOn) => {
      switch (addOn.priceType) {
        case 'per-trip':
          return sum + addOn.price;
        case 'per-person':
          return sum + addOn.price * totalPeople;
        case 'per-day':
          return sum + addOn.price * totalDays;
        default:
          return sum + addOn.price;
      }
    }, 0);

    const transportCost = totalDays * 1500; // Base transport cost per day
    const basePrice = accommodationCost + activitiesCost + transportCost;
    const totalPerPerson = basePrice + addOnsCost / totalPeople;
    const grandTotal = basePrice * totalPeople + addOnsCost;

    return {
      basePrice,
      accommodationCost,
      activitiesCost,
      transportCost,
      addOnsCost,
      totalPerPerson: Math.round(totalPerPerson),
      grandTotal: Math.round(grandTotal),
      currency: 'INR',
      note: 'Estimated price - final quote on request',
    };
  }, [accommodation, activities, addOns, totalDays, totalPeople]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Review Your Itinerary
          </h3>
          <p className="text-sm text-gray-600">
            Here&apos;s your custom trip. Make sure everything looks good.
          </p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 gap-3">
          <SummaryCard
            icon={MapPin}
            label="Destinations"
            value={destinations.map((d) => d.name).join(' → ')}
            onEdit={() => goToStep('destinations')}
          />
          <SummaryCard
            icon={Calendar}
            label="Duration"
            value={`${totalDays} days`}
            subValue={
              dates?.startDate
                ? format(dates.startDate, 'MMM d, yyyy')
                : dates?.flexibleMonth
                ? `${dates.flexibleMonth.charAt(0).toUpperCase() + dates.flexibleMonth.slice(1)}`
                : 'Flexible'
            }
            onEdit={() => goToStep('dates')}
          />
          <SummaryCard
            icon={Star}
            label="Accommodation"
            value={accommodation?.tier || 'Not specified'}
            onEdit={() => goToStep('accommodation')}
          />
          <SummaryCard
            icon={Users}
            label="Travelers"
            value={`${travelers?.adults || 2} Adults${
              (travelers?.children || 0) > 0
                ? `, ${travelers?.children} Children`
                : ''
            }`}
            onEdit={() => goToStep('travelers')}
          />
        </div>

        {/* Day-by-day itinerary */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-900">Day-by-Day Itinerary</h4>
            <button
              onClick={() => goToStep('activities')}
              className="text-sm text-[#1BA5B8] hover:underline flex items-center gap-1"
            >
              <Pencil className="w-3 h-3" />
              Edit Activities
            </button>
          </div>

          <div className="space-y-3">
            {generatedItinerary.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  {/* Day number */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {day.day}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h5 className="font-medium text-gray-900">{day.title}</h5>
                      {day.date && (
                        <span className="text-xs text-gray-500">
                          {format(day.date, 'MMM d')}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{day.destination}</p>

                    {day.activities.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {day.activities.map((activity) => {
                          const actData = activities.find(
                            (a) => a.name === activity
                          );
                          const Icon = actData
                            ? categoryIcons[actData.category]
                            : MapPin;
                          return (
                            <span
                              key={activity}
                              className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-white rounded-full text-gray-600"
                            >
                              <Icon className="w-3 h-3" />
                              {activity}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Price breakdown */}
        <div className="bg-gradient-to-br from-[#0A4D5C] to-[#1BA5B8] rounded-xl p-5 text-white">
          <h4 className="font-medium mb-4">Price Estimate</h4>

          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <span className="text-white/80">Accommodation ({totalDays} nights)</span>
              <span>₹{priceEstimate.accommodationCost.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/80">Activities & Experiences</span>
              <span>₹{priceEstimate.activitiesCost.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/80">Transport</span>
              <span>₹{priceEstimate.transportCost.toLocaleString('en-IN')}</span>
            </div>
            {priceEstimate.addOnsCost > 0 && (
              <div className="flex justify-between">
                <span className="text-white/80">Add-ons</span>
                <span>₹{priceEstimate.addOnsCost.toLocaleString('en-IN')}</span>
              </div>
            )}
          </div>

          <div className="border-t border-white/20 pt-3">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm text-white/70">Estimated Total</p>
                <p className="text-2xl font-bold">
                  ₹{priceEstimate.grandTotal.toLocaleString('en-IN')}
                </p>
              </div>
              <p className="text-xs text-white/60">
                ~₹{priceEstimate.totalPerPerson.toLocaleString('en-IN')}/person
              </p>
            </div>
          </div>

          <p className="text-xs text-white/50 mt-3">
            {priceEstimate.note}
          </p>
        </div>
      </div>

      <WizardNavigation nextLabel="Get Quote" />
    </div>
  );
}

function SummaryCard({
  icon: Icon,
  label,
  value,
  subValue,
  onEdit,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  subValue?: string;
  onEdit: () => void;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-500">{label}</span>
        </div>
        <button
          onClick={onEdit}
          className="p-1 text-gray-400 hover:text-[#1BA5B8] transition-colors"
        >
          <Pencil className="w-3 h-3" />
        </button>
      </div>
      <p className="text-sm font-medium text-gray-900 line-clamp-1">{value}</p>
      {subValue && (
        <p className="text-xs text-gray-500 mt-0.5">{subValue}</p>
      )}
    </div>
  );
}
