"use client";

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string;
  height?: string;
  lines?: number;
}

export function Skeleton({ 
  className = "", 
  variant = "rectangular",
  width = "100%",
  height,
  lines = 1
}: SkeletonProps) {
  const baseClasses = "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]";
  
  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
    card: "rounded-2xl",
  };

  const variantHeights = {
    text: "h-4",
    circular: height || "h-12",
    rectangular: height || "h-32",
    card: height || "h-64",
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-3 ${className}`} style={{ width }}>
        {Array.from({ length: lines }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`${baseClasses} ${variantClasses.text}`}
            style={{ 
              width: index === lines - 1 ? '70%' : '100%',
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${baseClasses} ${variantClasses[variant]} ${!height ? variantHeights[variant] : ''} ${className}`}
      style={{ width, height }}
    />
  );
}

// Card Skeleton Preset
export function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`p-6 bg-white rounded-2xl shadow-lg ${className}`}>
      <div className="flex items-start gap-4 mb-4">
        <Skeleton variant="circular" width="60px" height="60px" />
        <div className="flex-1">
          <Skeleton variant="text" width="60%" className="mb-2" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="text" lines={3} className="mb-4" />
      <Skeleton variant="rectangular" height="40px" />
    </div>
  );
}

// Contact Card Skeleton
export function ContactCardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`p-8 bg-white rounded-2xl shadow-lg ${className}`}>
      <Skeleton variant="circular" width="64px" height="64px" className="mx-auto mb-4" />
      <Skeleton variant="text" width="70%" className="mx-auto mb-3" />
      <Skeleton variant="text" width="50%" className="mx-auto" />
    </div>
  );
}

// Hero Skeleton
export function HeroSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`py-32 bg-gradient-to-br from-gray-100 to-gray-200 ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <Skeleton variant="text" width="60%" height="60px" className="mx-auto mb-4" />
        <Skeleton variant="text" width="80%" height="80px" className="mx-auto mb-6" />
        <Skeleton variant="text" lines={2} width="60%" className="mx-auto mb-8" />
        <div className="flex gap-4 justify-center">
          <Skeleton variant="rectangular" width="200px" height="56px" />
          <Skeleton variant="rectangular" width="200px" height="56px" />
        </div>
      </div>
    </div>
  );
}

// Gallery Skeleton
export function GallerySkeleton({ items = 6, className = "" }: { items?: number; className?: string }) {
  return (
    <div className={`grid md:grid-cols-3 gap-6 ${className}`}>
      {Array.from({ length: items }).map((_, index) => (
        <Skeleton key={index} variant="card" />
      ))}
    </div>
  );
}

// Form Skeleton
export function FormSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`p-8 bg-white rounded-2xl shadow-lg ${className}`}>
      <Skeleton variant="text" width="40%" className="mb-6" height="32px" />
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Skeleton variant="rectangular" height="48px" />
          <Skeleton variant="rectangular" height="48px" />
        </div>
        <Skeleton variant="rectangular" height="48px" />
        <Skeleton variant="rectangular" height="120px" />
        <Skeleton variant="rectangular" height="56px" />
      </div>
    </div>
  );
}

// Table Skeleton
export function TableSkeleton({ rows = 5, className = "" }: { rows?: number; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg">
          <Skeleton variant="text" width="30%" />
          <Skeleton variant="text" width="50%" className="ml-auto" />
        </div>
      ))}
    </div>
  );
}

// Page Loading Skeleton
export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSkeleton />
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {Array.from({ length: 4 }).map((_, i) => (
            <ContactCardSkeleton key={i} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <FormSkeleton />
          <div className="space-y-6">
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
        <GallerySkeleton />
      </div>
    </div>
  );
}
