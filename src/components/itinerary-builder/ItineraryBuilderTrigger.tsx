'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useItineraryBuilder } from './context/ItineraryBuilderContext';
import { cn } from '@/lib/utils';

interface ItineraryBuilderTriggerProps {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
}

const variants = {
  primary: 'bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] text-white hover:from-[#FFD84D] hover:to-[#FFA500] hover:text-gray-900',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  outline: 'border-2 border-[#1BA5B8] text-[#1BA5B8] hover:bg-[#1BA5B8] hover:text-white',
  ghost: 'text-[#1BA5B8] hover:bg-[#1BA5B8]/10',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export function ItineraryBuilderTrigger({
  children = 'Build Your Trip',
  variant = 'primary',
  size = 'md',
  className,
  showIcon = true,
}: ItineraryBuilderTriggerProps) {
  const { openDrawer, state } = useItineraryBuilder();

  // Check if there's a saved draft
  const hasDraft = (state.itinerary.destinations?.length || 0) > 0;

  return (
    <motion.button
      onClick={openDrawer}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {showIcon && <MapPin className="w-4 h-4" />}
      <span>{children}</span>
      {hasDraft && (
        <span className="ml-1 px-1.5 py-0.5 text-xs bg-white/20 rounded-full">
          Draft
        </span>
      )}
    </motion.button>
  );
}
