'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Mountain, Landmark, Compass, Heart, Palette, Star } from 'lucide-react';
import { useItineraryBuilder } from '../context/ItineraryBuilderContext';
import { WizardNavigation } from '../WizardNavigation';
import { ALL_REGIONAL_DESTINATIONS } from '@/data/regionalDestinations';
import { SelectedActivity } from '../types/itinerary';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categoryIcons = {
  nature: Mountain,
  heritage: Landmark,
  adventure: Compass,
  spiritual: Heart,
  cultural: Palette,
};

const categoryColors = {
  nature: 'text-green-600 bg-green-50',
  heritage: 'text-amber-600 bg-amber-50',
  adventure: 'text-red-600 bg-red-50',
  spiritual: 'text-purple-600 bg-purple-50',
  cultural: 'text-blue-600 bg-blue-50',
};

export function ActivitiesStep() {
  const { state, updateActivities } = useItineraryBuilder();
  const selectedDestinations = state.itinerary.destinations || [];
  const selectedActivities = state.itinerary.activities || [];

  const [activeTab, setActiveTab] = useState(
    selectedDestinations[0]?.id || 'kashmir'
  );

  const toggleActivity = (destId: string, place: {
    name: string;
    category: 'nature' | 'heritage' | 'adventure' | 'spiritual' | 'cultural';
    image: string;
  }) => {
    const activityId = `${destId}-${place.name.toLowerCase().replace(/\s+/g, '-')}`;
    const existing = selectedActivities.find((a) => a.activityId === activityId);

    if (existing) {
      updateActivities(selectedActivities.filter((a) => a.activityId !== activityId));
    } else {
      const newActivity: SelectedActivity = {
        destinationId: destId,
        activityId,
        name: place.name,
        category: place.category,
        image: place.image,
      };
      updateActivities([...selectedActivities, newActivity]);
    }
  };

  const isSelected = (destId: string, placeName: string) => {
    const activityId = `${destId}-${placeName.toLowerCase().replace(/\s+/g, '-')}`;
    return selectedActivities.some((a) => a.activityId === activityId);
  };

  const getActivitiesForDestination = (destId: string) =>
    selectedActivities.filter((a) => a.destinationId === destId);

  // Only show destinations that user has selected
  const relevantDestinations = ALL_REGIONAL_DESTINATIONS.filter((d) =>
    selectedDestinations.some((sd) => sd.id === d.id)
  );

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-hidden">
        <div className="p-6 pb-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            What do you want to do?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Select activities and places you want to visit at each destination.
          </p>
        </div>

        {relevantDestinations.length > 0 ? (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <div className="px-6">
              <TabsList className="w-full justify-start bg-gray-100 p-1 rounded-lg">
                {relevantDestinations.map((dest) => {
                  const count = getActivitiesForDestination(dest.id).length;
                  return (
                    <TabsTrigger
                      key={dest.id}
                      value={dest.id}
                      className="flex-1 data-[state=active]:bg-white data-[state=active]:text-[#0A4D5C] rounded-md"
                    >
                      {dest.name}
                      {count > 0 && (
                        <span className="ml-1.5 px-1.5 py-0.5 text-xs bg-[#1BA5B8] text-white rounded-full">
                          {count}
                        </span>
                      )}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {relevantDestinations.map((dest) => (
              <TabsContent
                key={dest.id}
                value={dest.id}
                className="flex-1 overflow-y-auto px-6 pb-6 mt-4"
              >
                {/* Group places by category */}
                {(['nature', 'adventure', 'heritage', 'spiritual', 'cultural'] as const).map(
                  (category) => {
                    const places = dest.places.filter((p) => p.category === category);
                    if (places.length === 0) return null;

                    const Icon = categoryIcons[category];
                    const colorClass = categoryColors[category];

                    return (
                      <div key={category} className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={cn('p-1.5 rounded-lg', colorClass)}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <h4 className="text-sm font-medium text-gray-700 capitalize">
                            {category}
                          </h4>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {places.map((place) => {
                            const selected = isSelected(dest.id, place.name);
                            return (
                              <motion.button
                                key={place.name}
                                onClick={() => toggleActivity(dest.id, place)}
                                whileTap={{ scale: 0.98 }}
                                className={cn(
                                  'relative rounded-xl overflow-hidden text-left transition-all',
                                  selected
                                    ? 'ring-2 ring-[#1BA5B8]'
                                    : 'ring-1 ring-gray-200 hover:ring-gray-300'
                                )}
                              >
                                {/* Image */}
                                <div className="relative h-24">
                                  <img
                                    src={place.image}
                                    alt={place.name}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                  {/* Must visit badge */}
                                  {place.highlights.length >= 4 && (
                                    <div className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 bg-[#FFD84D] rounded text-xs font-medium text-gray-900">
                                      <Star className="w-3 h-3" />
                                      Must Visit
                                    </div>
                                  )}

                                  {/* Selected indicator */}
                                  {selected && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#1BA5B8] flex items-center justify-center"
                                    >
                                      <Check className="w-4 h-4 text-white" />
                                    </motion.div>
                                  )}

                                  {/* Name */}
                                  <p className="absolute bottom-2 left-2 right-2 text-sm font-medium text-white line-clamp-1">
                                    {place.name}
                                  </p>
                                </div>
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                )}
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="flex items-center justify-center h-40 text-gray-500">
            Please select destinations first
          </div>
        )}
      </div>

      {/* Summary */}
      {selectedActivities.length > 0 && (
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-900">
              {selectedActivities.length}
            </span>{' '}
            {selectedActivities.length === 1 ? 'activity' : 'activities'} selected
          </p>
        </div>
      )}

      <WizardNavigation />
    </div>
  );
}
