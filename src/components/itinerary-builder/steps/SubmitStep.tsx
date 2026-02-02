'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, User, Loader2 } from 'lucide-react';
import { z } from 'zod';
import { useItineraryBuilder } from '../context/ItineraryBuilderContext';
import { WizardNavigation } from '../WizardNavigation';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s+()-]{10,}$/, 'Please enter a valid phone number'),
  preferredContactMethod: z.enum(['email', 'phone', 'whatsapp']),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactMethods = [
  { id: 'email' as const, label: 'Email', icon: Mail },
  { id: 'phone' as const, label: 'Call', icon: Phone },
  { id: 'whatsapp' as const, label: 'WhatsApp', icon: MessageCircle },
];

export function SubmitStep() {
  console.log('[SubmitStep] Component rendered - submit step reached!');
  const { state, submitInquiry } = useItineraryBuilder();
  console.log('[SubmitStep] Current itinerary state:', state.itinerary);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    preferredContactMethod: 'email',
  });
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async () => {
    // Validate form
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof ContactFormData;
          fieldErrors[field] = issue.message;
        });
        setErrors(fieldErrors);
        return false;
      }
    }

    setIsSubmitting(true);

    console.log('[SubmitStep] === SUBMIT DETAILS ===');
    console.log('[SubmitStep] Contact Info:', formData);
    console.log('[SubmitStep] Additional Notes:', additionalNotes);
    console.log('[SubmitStep] Full Itinerary:', JSON.stringify(state.itinerary, null, 2));
    console.log('[SubmitStep] Destinations:', state.itinerary.destinations);
    console.log('[SubmitStep] Dates:', state.itinerary.dates);
    console.log('[SubmitStep] Activities:', state.itinerary.activities);
    console.log('[SubmitStep] Accommodation:', state.itinerary.accommodation);
    console.log('[SubmitStep] Travelers:', state.itinerary.travelers);
    console.log('[SubmitStep] Add-ons:', state.itinerary.addOns);
    console.log('[SubmitStep] Estimated Price:', state.itinerary.estimatedPrice);
    console.log('[SubmitStep] ======================');

    try {
      await submitInquiry(formData, additionalNotes);
      toast.success('Inquiry submitted successfully!');
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to submit inquiry'
      );
      setIsSubmitting(false);
    }

    return false; // Don't auto-advance, the success screen will show
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Get Your Quote
          </h3>
          <p className="text-sm text-gray-600">
            Our travel experts will contact you within 24 hours with a
            personalized quote.
          </p>
        </div>

        {/* Contact form */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="John Doe"
                className={cn(
                  'w-full pl-10 pr-4 py-3 rounded-xl border bg-white transition-colors',
                  errors.name
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-200 focus:border-[#1BA5B8] focus:ring-[#1BA5B8]'
                )}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="john@example.com"
                className={cn(
                  'w-full pl-10 pr-4 py-3 rounded-xl border bg-white transition-colors',
                  errors.email
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-200 focus:border-[#1BA5B8] focus:ring-[#1BA5B8]'
                )}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+91 98765 43210"
                className={cn(
                  'w-full pl-10 pr-4 py-3 rounded-xl border bg-white transition-colors',
                  errors.phone
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-200 focus:border-[#1BA5B8] focus:ring-[#1BA5B8]'
                )}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Preferred contact method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Contact Method
            </label>
            <div className="grid grid-cols-3 gap-2">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const isSelected =
                  formData.preferredContactMethod === method.id;
                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() =>
                      handleChange('preferredContactMethod', method.id)
                    }
                    className={cn(
                      'flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all',
                      isSelected
                        ? 'border-[#1BA5B8] bg-[#1BA5B8]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    )}
                  >
                    <Icon
                      className={cn(
                        'w-5 h-5',
                        isSelected ? 'text-[#1BA5B8]' : 'text-gray-400'
                      )}
                    />
                    <span
                      className={cn(
                        'text-sm',
                        isSelected
                          ? 'text-[#0A4D5C] font-medium'
                          : 'text-gray-600'
                      )}
                    >
                      {method.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Additional notes */}
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Additional Notes (Optional)
            </label>
            <textarea
              id="notes"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              placeholder="Any special requests or questions?"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#1BA5B8] focus:ring-[#1BA5B8] transition-colors resize-none"
            />
          </div>
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-500">
          By submitting this form, you agree to be contacted by our team
          regarding your travel inquiry. We respect your privacy and will never
          share your information with third parties.
        </p>
      </div>

      <WizardNavigation
        onNext={handleSubmit}
        nextLabel={
          isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </span>
          ) : (
            'Submit Inquiry'
          )
        }
        nextDisabled={isSubmitting}
      />
    </div>
  );
}
