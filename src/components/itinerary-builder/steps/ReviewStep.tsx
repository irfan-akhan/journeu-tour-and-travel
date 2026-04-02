'use client';

import { useState } from 'react';
import { useItineraryBuilder } from '../context/ItineraryBuilderContext';
import { cn } from '@/lib/utils';
import { Minus, Plus } from 'lucide-react';

export function ReviewStep() {
  const { state, updateTravelers, prevStep, submitInquiry } = useItineraryBuilder();
  const { itinerary, isSubmitting } = state;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { travelers } = itinerary;

  const adjustTraveler = (type: 'adults' | 'children', delta: number) => {
    const current = travelers[type];
    const next = Math.max(type === 'adults' ? 1 : 0, current + delta);
    updateTravelers({ ...travelers, [type]: next });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = 'Name is required';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Valid email is required';
    if (!phone.trim()) e.phone = 'Phone number is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    await submitInquiry(
      { name, email, phone, preferredContactMethod: 'phone' },
      notes || undefined
    );
  };

  const reviewRows: Array<{ label: string; value: string | null }> = [
    {
      label: 'Duration',
      value: itinerary.duration?.label ?? null,
    },
    {
      label: 'Pickup',
      value: itinerary.pickup || null,
    },
    {
      label: 'Drop',
      value: itinerary.drop || null,
    },
    {
      label: 'Places to Visit',
      value: itinerary.places.length > 0 ? itinerary.places.join(', ') : null,
    },
    {
      label: 'Night Stays',
      value: itinerary.stays.length > 0 ? itinerary.stays.join(', ') : null,
    },
    {
      label: 'Inclusions',
      value: itinerary.inclusions.length > 0 ? itinerary.inclusions.join(', ') : 'None selected',
    },
    {
      label: 'Add-Ons',
      value: itinerary.addons.length > 0 ? itinerary.addons.join(', ') : 'None selected',
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Summary */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Review Your Itinerary</h3>
        <div className="rounded-xl border border-gray-200 divide-y divide-gray-100 overflow-hidden">
          {reviewRows.map(({ label, value }) => (
            <div key={label} className="flex gap-4 px-4 py-3 text-sm">
              <span className="w-32 flex-shrink-0 text-gray-400 font-medium">{label}</span>
              <span className="text-gray-800 leading-snug">{value ?? <span className="text-gray-400 italic">Not selected</span>}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Travelers */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Number of Travelers</h4>
        <div className="flex gap-6">
          {(['adults', 'children'] as const).map((type) => (
            <div key={type} className="flex items-center gap-3">
              <span className="text-sm text-gray-600 w-16 capitalize">{type}</span>
              <button
                onClick={() => adjustTraveler(type, -1)}
                className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#1BA5B8] transition-colors"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-6 text-center font-semibold text-gray-900">{travelers[type]}</span>
              <button
                onClick={() => adjustTraveler(type, 1)}
                className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#1BA5B8] transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact info */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Your Contact Details</h4>
        <div className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={cn(
                'w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors',
                errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#1BA5B8]'
              )}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                'w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors',
                errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#1BA5B8]'
              )}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={cn(
                'w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors',
                errors.phone ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#1BA5B8]'
              )}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>
          <textarea
            placeholder="Additional notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#1BA5B8] text-sm outline-none transition-colors resize-none"
          />
        </div>
      </div>

      <p className="text-xs text-gray-400">
        Prices are on request. Our team will reach out with a personalised quote within 24 hours.
      </p>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="px-6 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={cn(
            'px-6 py-2.5 rounded-lg font-medium transition-all',
            isSubmitting
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] text-white hover:from-[#FFD84D] hover:to-[#FFA500] hover:text-gray-900'
          )}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
        </button>
      </div>
    </div>
  );
}
