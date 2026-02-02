'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CalendarRange, Sun, Cloud, Snowflake, Leaf } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format, addDays } from 'date-fns';
import { useItineraryBuilder } from '../context/ItineraryBuilderContext';
import { WizardNavigation } from '../WizardNavigation';
import { TripDates } from '../types/itinerary';
import { cn } from '@/lib/utils';
import 'react-day-picker/dist/style.css';

const seasons = [
  {
    id: 'spring',
    label: 'Spring',
    months: 'Mar - May',
    icon: Leaf,
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    id: 'summer',
    label: 'Summer',
    months: 'Jun - Aug',
    icon: Sun,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    id: 'autumn',
    label: 'Autumn',
    months: 'Sep - Nov',
    icon: Leaf,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    id: 'winter',
    label: 'Winter',
    months: 'Dec - Feb',
    icon: Snowflake,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
];

export function DatesStep() {
  const { state, updateDates, getTotalDays } = useItineraryBuilder();
  const dates = state.itinerary.dates || { type: 'flexible', totalDays: getTotalDays() };

  const [dateType, setDateType] = useState<'flexible' | 'fixed'>(dates.type);
  const [selectedRange, setSelectedRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: dates.startDate,
    to: dates.endDate,
  });
  const [flexibleMonth, setFlexibleMonth] = useState<string>(
    dates.flexibleMonth || ''
  );

  const totalDays = getTotalDays();

  // Sync totalDays from destinations when this step loads
  useEffect(() => {
    if (dates.totalDays !== totalDays) {
      updateDates({
        ...dates,
        totalDays,
      });
    }
  }, [totalDays]);

  const handleDateTypeChange = (type: 'flexible' | 'fixed') => {
    setDateType(type);
    const newDates: TripDates = {
      type,
      totalDays,
      ...(type === 'flexible'
        ? { flexibleMonth }
        : { startDate: selectedRange.from, endDate: selectedRange.to }),
    };
    updateDates(newDates);
  };

  const handleRangeSelect = (range: { from?: Date; to?: Date } | undefined) => {
    if (range) {
      setSelectedRange({ from: range.from, to: range.to });
      updateDates({
        type: 'fixed',
        totalDays,
        startDate: range.from,
        endDate: range.to || (range.from ? addDays(range.from, totalDays - 1) : undefined),
      });
    }
  };

  const handleFlexibleMonthSelect = (month: string) => {
    setFlexibleMonth(month);
    updateDates({
      type: 'flexible',
      totalDays,
      flexibleMonth: month,
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            When do you want to travel?
          </h3>
          <p className="text-sm text-gray-600">
            Your trip is {totalDays} days. Choose your preferred dates.
          </p>
        </div>

        {/* Date type selector */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleDateTypeChange('flexible')}
            className={cn(
              'flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left',
              dateType === 'flexible'
                ? 'border-[#1BA5B8] bg-[#1BA5B8]/5'
                : 'border-gray-200 hover:border-gray-300'
            )}
          >
            <Calendar className={cn(
              'w-5 h-5',
              dateType === 'flexible' ? 'text-[#1BA5B8]' : 'text-gray-400'
            )} />
            <div>
              <p className="font-medium text-gray-900">Flexible</p>
              <p className="text-xs text-gray-500">Pick a month</p>
            </div>
          </button>

          <button
            onClick={() => handleDateTypeChange('fixed')}
            className={cn(
              'flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left',
              dateType === 'fixed'
                ? 'border-[#1BA5B8] bg-[#1BA5B8]/5'
                : 'border-gray-200 hover:border-gray-300'
            )}
          >
            <CalendarRange className={cn(
              'w-5 h-5',
              dateType === 'fixed' ? 'text-[#1BA5B8]' : 'text-gray-400'
            )} />
            <div>
              <p className="font-medium text-gray-900">Fixed Dates</p>
              <p className="text-xs text-gray-500">Select exact dates</p>
            </div>
          </button>
        </div>

        {/* Flexible: Season selection */}
        {dateType === 'flexible' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <p className="text-sm font-medium text-gray-700">
              Select your preferred season
            </p>
            <div className="grid grid-cols-2 gap-3">
              {seasons.map((season) => {
                const Icon = season.icon;
                const isSelected = flexibleMonth === season.id;
                return (
                  <button
                    key={season.id}
                    onClick={() => handleFlexibleMonthSelect(season.id)}
                    className={cn(
                      'flex items-center gap-3 p-4 rounded-xl border-2 transition-all',
                      isSelected
                        ? 'border-[#1BA5B8] bg-[#1BA5B8]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    )}
                  >
                    <div className={cn('p-2 rounded-lg', season.bg)}>
                      <Icon className={cn('w-5 h-5', season.color)} />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">{season.label}</p>
                      <p className="text-xs text-gray-500">{season.months}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Season info */}
            {flexibleMonth && (
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  {flexibleMonth === 'spring' &&
                    'Spring in Kashmir brings blooming tulips and pleasant weather. Perfect for sightseeing and garden visits.'}
                  {flexibleMonth === 'summer' &&
                    'Summer is ideal for outdoor activities. Enjoy trekking, golfing, and escaping the heat of the plains.'}
                  {flexibleMonth === 'autumn' &&
                    'Autumn offers stunning foliage and fewer crowds. Great for photography and peaceful exploration.'}
                  {flexibleMonth === 'winter' &&
                    'Winter transforms Kashmir into a snowy paradise. Perfect for skiing in Gulmarg and snow experiences.'}
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Fixed: Calendar */}
        {dateType === 'fixed' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <p className="text-sm font-medium text-gray-700">
              Select your travel dates
            </p>
            <div className="border rounded-xl p-4 flex justify-center">
              <DayPicker
                mode="range"
                selected={selectedRange}
                onSelect={handleRangeSelect}
                numberOfMonths={1}
                disabled={{ before: new Date() }}
                modifiers={{
                  suggested: selectedRange.from
                    ? {
                        from: selectedRange.from,
                        to: addDays(selectedRange.from, totalDays - 1),
                      }
                    : undefined,
                }}
                modifiersStyles={{
                  suggested: {
                    backgroundColor: '#1BA5B8',
                    color: 'white',
                    borderRadius: '0',
                  },
                }}
                styles={{
                  caption: { color: '#0A4D5C' },
                  day: { borderRadius: '8px' },
                }}
              />
            </div>

            {selectedRange.from && (
              <div className="bg-gray-50 rounded-xl p-4 text-sm">
                <p className="text-gray-600">
                  <span className="font-medium text-gray-900">
                    {format(selectedRange.from, 'MMM d, yyyy')}
                  </span>
                  {' → '}
                  <span className="font-medium text-gray-900">
                    {format(
                      selectedRange.to ||
                        addDays(selectedRange.from, totalDays - 1),
                      'MMM d, yyyy'
                    )}
                  </span>
                </p>
              </div>
            )}
          </motion.div>
        )}
      </div>

      <WizardNavigation />
    </div>
  );
}
