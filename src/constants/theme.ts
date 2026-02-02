/**
 * Centralized Theme Configuration
 * All gradient styles, colors, and design tokens in one place
 */

// ========================================
// BRAND GRADIENTS
// ========================================

export const BRAND_GRADIENTS = {
  // Primary brand gradient (Teal)
  primary: 'bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C]',
  primaryDiagonal: 'bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C]',
  primaryVertical: 'bg-gradient-to-b from-[#1BA5B8] to-[#0A4D5C]',
  primary3Stop: 'bg-gradient-to-r from-[#0A4D5C] via-[#1BA5B8] to-[#0A4D5C]',
  primaryReverse: 'bg-gradient-to-r from-[#0A4D5C] to-[#1BA5B8]',
  primaryLight: 'bg-gradient-to-r from-[#1BA5B8]/80 to-[#0A4D5C]/80',
  primarySubtle: 'bg-gradient-to-r from-[#1BA5B8]/20 to-[#0A4D5C]/20',
  primaryRadial: 'bg-[radial-gradient(circle,#1BA5B8,#0A4D5C)]',
  
  // Accent gradient (Yellow/Gold)
  accent: 'bg-gradient-to-r from-[#FFD84D] to-[#FFA500]',
  accentDiagonal: 'bg-gradient-to-br from-[#FFD84D] to-[#FFA500]',
  accentVertical: 'bg-gradient-to-b from-[#FFD84D] to-[#FFA500]',
  accentShine: 'bg-gradient-to-r from-[#FFD84D] via-[#FFC700] to-[#FFD84D]',
  accentReverse: 'bg-gradient-to-r from-[#FFA500] to-[#FFD84D]',
  accentLight: 'bg-gradient-to-r from-[#FFD84D]/80 to-[#FFA500]/80',
  accentSubtle: 'bg-gradient-to-r from-[#FFD84D]/20 to-[#FFA500]/20',
  
  // Mixed gradients
  mixed: 'bg-gradient-to-r from-[#1BA5B8] via-[#FFD84D] to-[#0A4D5C]',
  mixedDiagonal: 'bg-gradient-to-br from-[#1BA5B8] via-[#FFD84D] to-[#0A4D5C]',
  mixedReverse: 'bg-gradient-to-r from-[#0A4D5C] via-[#FFD84D] to-[#1BA5B8]',
} as const;

// ========================================
// SECTION BACKGROUNDS
// ========================================

export const SECTION_BACKGROUNDS = {
  // Hero sections
  heroMain: 'bg-gradient-to-br from-[#0A4D5C] via-[#1BA5B8] to-[#0A4D5C]',
  heroAlternate: 'bg-gradient-to-br from-gray-900 via-[#0A4D5C] to-gray-900',
  heroVertical: 'bg-gradient-to-b from-[#0A4D5C] via-[#1BA5B8] to-[#0A4D5C]',
  heroDark: 'bg-gradient-to-br from-[#0A4D5C] via-gray-900 to-black',
  heroLight: 'bg-gradient-to-br from-[#1BA5B8] via-cyan-500 to-[#0A4D5C]',
  uniformBlue: 'bg-gradient-to-r from-[#1BA5B8] via-[#1BA5B8] to-[#1BA5B8]',
  
  // Content sections
  lightGray: 'bg-gradient-to-br from-gray-50 to-white',
  lightBlue: 'bg-gradient-to-br from-white via-blue-50/20 to-white',
  lightTeal: 'bg-gradient-to-br from-white via-teal-50/20 to-white',
  lightYellow: 'bg-gradient-to-br from-white via-yellow-50/20 to-white',
  warmWhite: 'bg-gradient-to-br from-orange-50/30 via-white to-yellow-50/30',
  coolWhite: 'bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30',
  
  // Dark sections
  darkSlate: 'bg-gradient-to-b from-[#2C3E50] to-[#1A252F]',
  darkBlue: 'bg-gradient-to-br from-gray-900 via-[#0A4D5C] to-gray-900',
  darkMixed: 'bg-gradient-to-b from-gray-900 via-[#1A252F] to-[#0A4D5C]',
  
  // Special sections
  callbackYellow: 'bg-gradient-to-br from-[#FFD84D] via-[#FFC94D] to-[#FFA500]',
  newsletter: 'bg-gradient-to-r from-[#0A4D5C] via-[#1BA5B8] to-[#0A4D5C]',
  footer: 'bg-gradient-to-b from-[#1A252F] to-[#0A4D5C]',
  testimonial: 'bg-gradient-to-br from-gray-50 via-teal-50/30 to-blue-50/30',
} as const;

// ========================================
// BUTTON GRADIENTS
// ========================================

export const BUTTON_GRADIENTS = {
  // Primary buttons
  primary: 'bg-gradient-to-r from-[#1BA5B8] to-[#1BA5B8]',
  primaryHover: 'bg-gradient-to-r from-[#FFD84D] to-[#FFA500]',
  primaryActive: 'bg-gradient-to-r from-[#0A4D5C] to-[#084049]',
  primaryDisabled: 'bg-gradient-to-r from-gray-300 to-gray-400',
  
  // Accent buttons
  accent: 'bg-gradient-to-r from-[#FFD84D] via-[#FFC700] to-[#FFD84D]',
  accentHover: 'bg-gradient-to-r from-yellow-400 to-[#FFD84D]',
  accentActive: 'bg-gradient-to-r from-[#FFA500] to-[#FF8C00]',
  
  // Secondary buttons
  secondary: 'bg-gradient-to-r from-gray-100 to-gray-200',
  secondaryHover: 'bg-gradient-to-r from-gray-200 to-gray-300',
  
  // Outline buttons (for border)
  outline: 'bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C]',
  outlineHover: 'bg-gradient-to-r from-[#1BA5B8]/10 to-[#0A4D5C]/10',
  
  // Subtle buttons
  subtleHover: 'bg-gradient-to-r from-[#1BA5B8]/5 to-[#0A4D5C]/5',
  subtleHoverActive: 'bg-gradient-to-r from-[#1BA5B8]/10 to-[#0A4D5C]/10',
  
  // Ghost buttons
  ghost: 'bg-gradient-to-r from-transparent to-transparent',
  ghostHover: 'bg-gradient-to-r from-[#1BA5B8]/10 to-[#0A4D5C]/10',
} as const;

// ========================================
// OVERLAY GRADIENTS
// ========================================

export const OVERLAY_GRADIENTS = {
  // Image overlays - Top to bottom
  darkStrong: 'bg-gradient-to-t from-black/80 via-black/40 to-transparent',
  darkMedium: 'bg-gradient-to-t from-black/70 via-black/30 to-transparent',
  darkSubtle: 'bg-gradient-to-t from-black/60 via-black/20 to-transparent',
  darkLight: 'bg-gradient-to-t from-black/40 via-black/10 to-transparent',
  
  // Bottom to top
  darkBottomStrong: 'bg-gradient-to-b from-black/80 via-black/40 to-transparent',
  darkBottomMedium: 'bg-gradient-to-b from-black/70 via-black/30 to-transparent',
  
  // Side overlays
  darkLeft: 'bg-gradient-to-r from-black/60 via-transparent to-transparent',
  darkRight: 'bg-gradient-to-l from-black/60 via-transparent to-transparent',
  
  // Brand color overlays
  tealOverlay: 'bg-gradient-to-t from-[#0A4D5C]/80 via-[#1BA5B8]/40 to-transparent',
  tealOverlaySubtle: 'bg-gradient-to-t from-[#0A4D5C]/60 via-[#1BA5B8]/20 to-transparent',
  yellowOverlay: 'bg-gradient-to-t from-[#FFA500]/80 via-[#FFD84D]/40 to-transparent',
  
  // Radial overlays
  radialDark: 'bg-[radial-gradient(circle_at_center,transparent_0%,black/60_100%)]',
  radialLight: 'bg-[radial-gradient(circle_at_center,white/20_0%,transparent_70%)]',
  
  // Card hover effects
  brandHover: 'bg-gradient-to-br from-[#1BA5B8]/5 to-[#0A4D5C]/5',
  accentHover: 'bg-gradient-to-br from-[#FFD84D]/5 to-[#FFA500]/5',
} as const;

// ========================================
// DECORATIVE GRADIENTS
// ========================================

export const DECORATIVE_GRADIENTS = {
  // Icon backgrounds
  iconPrimary: 'bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C]',
  iconAccent: 'bg-gradient-to-br from-[#FFD84D] to-[#FFA500]',
  iconMixed: 'bg-gradient-to-br from-[#1BA5B8] via-[#0A4D5C] to-[#FFD84D]',
  iconBlue: 'bg-gradient-to-br from-blue-500 to-cyan-600',
  iconGreen: 'bg-gradient-to-br from-green-500 to-teal-600',
  iconPurple: 'bg-gradient-to-br from-purple-500 to-pink-600',
  iconOrange: 'bg-gradient-to-br from-orange-500 to-red-600',
  
  // Glow effects
  glowPrimary: 'bg-gradient-to-br from-[#1BA5B8]/20 to-transparent',
  glowAccent: 'bg-gradient-to-br from-[#FFD84D]/20 to-transparent',
  glowWhite: 'bg-gradient-to-br from-white/20 to-transparent',
  glowBlue: 'bg-gradient-to-br from-blue-500/20 to-transparent',
  glowPurple: 'bg-gradient-to-br from-purple-500/20 to-transparent',
  
  // Text gradients (use with bg-clip-text text-transparent)
  textPrimary: 'bg-gradient-to-r from-[#0A4D5C] to-[#1BA5B8]',
  textAccent: 'bg-gradient-to-r from-[#FFD84D] via-yellow-300 to-[#FFD84D]',
  textMixed: 'bg-gradient-to-r from-[#0A4D5C] via-[#1BA5B8] to-[#0A4D5C]',
  textGold: 'bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600',
  textSilver: 'bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500',
  textRainbow: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500',
  
  // Decorative lines/dividers
  dividerHorizontal: 'bg-gradient-to-r from-transparent via-[#1BA5B8] to-transparent',
  dividerVertical: 'bg-gradient-to-b from-transparent via-[#1BA5B8] to-transparent',
  dividerAccent: 'bg-gradient-to-r from-transparent via-[#FFD84D] to-transparent',
} as const;

// ========================================
// CARD & COMPONENT GRADIENTS
// ========================================

export const COMPONENT_GRADIENTS = {
  // Card backgrounds
  cardSubtle: 'bg-gradient-to-br from-gray-50 to-white',
  cardLight: 'bg-gradient-to-br from-white via-gray-50 to-white',
  cardBlue: 'bg-gradient-to-br from-blue-50 via-white to-cyan-50',
  cardGreen: 'bg-gradient-to-br from-green-50 to-blue-50',
  cardYellow: 'bg-gradient-to-br from-yellow-50 via-white to-orange-50',
  cardPurple: 'bg-gradient-to-br from-purple-50 via-white to-pink-50',
  cardTeal: 'bg-gradient-to-br from-teal-50 via-white to-cyan-50',
  cardWarm: 'bg-gradient-to-br from-orange-50/50 via-white to-yellow-50/50',
  
  // Card borders (decorative)
  borderPrimary: 'bg-gradient-to-br from-[#1BA5B8] to-[#0A4D5C]',
  borderAccent: 'bg-gradient-to-br from-[#FFD84D] to-[#FFA500]',
  borderTop: 'bg-gradient-to-b from-[#1BA5B8] to-[#0A4D5C]',
  borderBottom: 'bg-gradient-to-t from-[#1BA5B8] to-[#0A4D5C]',
  borderHorizontal: 'bg-gradient-to-r from-[#1BA5B8]/30 to-transparent',
  borderVertical: 'bg-gradient-to-b from-[#1BA5B8]/30 to-transparent',
  
  // Special states
  ctaBox: 'bg-gradient-to-br from-[#0A4D5C] via-[#1BA5B8] to-[#0A4D5C]',
  featureBox: 'bg-gradient-to-r from-[#1BA5B8]/10 to-[#FFD84D]/10',
  highlightBox: 'bg-gradient-to-br from-[#FFD84D]/20 via-white to-[#FFA500]/20',
  
  // Badge gradients
  badgePrimary: 'bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C]',
  badgeAccent: 'bg-gradient-to-r from-[#FFD84D] to-[#FFA500]',
  badgeSuccess: 'bg-gradient-to-r from-green-500 to-emerald-600',
  badgeWarning: 'bg-gradient-to-r from-yellow-500 to-orange-600',
  badgeError: 'bg-gradient-to-r from-red-500 to-rose-600',
  badgeInfo: 'bg-gradient-to-r from-blue-500 to-cyan-600',
} as const;

// ========================================
// LOADING & PLACEHOLDER GRADIENTS
// ========================================

export const PLACEHOLDER_GRADIENTS = {
  skeleton: 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200',
  skeletonDark: 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700',
  loading: 'bg-gradient-to-br from-gray-200 to-gray-300',
  loadingShimmer: 'bg-gradient-to-r from-transparent via-white/60 to-transparent',
  mapPlaceholder: 'bg-gradient-to-br from-[#1BA5B8]/5 via-blue-50 to-[#0A4D5C]/5',
  imagePlaceholder: 'bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100',
  videoPlaceholder: 'bg-gradient-to-br from-gray-800 via-gray-900 to-black',
  contentPlaceholder: 'bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100',
} as const;

// ========================================
// OPACITY SYSTEM
// ========================================

export const OPACITY_LEVELS = {
  // For overlays
  overlayStrong: '/80',
  overlayMedium: '/60',
  overlayLight: '/40',
  overlaySubtle: '/20',
  overlayMinimal: '/10',
  overlayHint: '/5',
} as const;

// ========================================
// GRADIENT DIRECTIONS
// ========================================

export const GRADIENT_DIRECTIONS = {
  horizontal: 'gradient-to-r',
  vertical: 'gradient-to-b',
  diagonalBR: 'gradient-to-br',  // bottom-right
  diagonalBL: 'gradient-to-bl',  // bottom-left
  diagonalTR: 'gradient-to-tr',  // top-right
  diagonalTL: 'gradient-to-tl',  // top-left
  toTop: 'gradient-to-t',
  toBottom: 'gradient-to-b',
} as const;

// ========================================
// SPECIALIZED USE CASES
// ========================================

export const SPECIALIZED_GRADIENTS = {
  // Tour cards
  tourCardOverlay: (customColors?: string) => 
    customColors ? `bg-gradient-to-t ${customColors}` : 'bg-gradient-to-t from-[#1BA5B8]/80 to-[#0A4D5C]/80',
  
  // Service cards
  serviceHover: (fromColor: string, toColor: string) => 
    `bg-gradient-to-br from-${fromColor} to-${toColor}`,
  
  // FAQ/Feature cards with custom icon colors
  featureIcon: (fromColor: string, toColor: string) => 
    `bg-gradient-to-br from-${fromColor} to-${toColor}`,
} as const;

// ========================================
// PRESET COMBINATIONS
// ========================================

export const GRADIENT_PRESETS = {
  // Button with hover
  primaryButton: {
    base: BUTTON_GRADIENTS.primary,
    hover: BUTTON_GRADIENTS.primaryHover,
  },
  
  // Hero section
  hero: {
    background: SECTION_BACKGROUNDS.uniformBlue,
    overlay: OVERLAY_GRADIENTS.darkMedium,
  },
  
  // Card with hover effect
  card: {
    background: COMPONENT_GRADIENTS.cardSubtle,
    hoverOverlay: OVERLAY_GRADIENTS.brandHover,
  },
  
  // Icon with glow
  icon: {
    background: DECORATIVE_GRADIENTS.iconPrimary,
    glow: DECORATIVE_GRADIENTS.glowPrimary,
  },
} as const;

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Get a gradient with custom opacity
 */
export const withOpacity = (gradient: string, opacity: keyof typeof OPACITY_LEVELS) => {
  return gradient.replace(/\]/g, OPACITY_LEVELS[opacity] + ']');
};

/**
 * Combine multiple gradients (for layered effects)
 */
export const combineGradients = (...gradients: string[]) => {
  return gradients.join(' ');
};

/**
 * Get responsive gradient (different on mobile vs desktop)
 */
export const responsiveGradient = (mobile: string, desktop: string) => {
  return `${mobile} md:${desktop}`;
};

// ========================================
// EXPORT ALL
// ========================================

export const THEME = {
  brand: BRAND_GRADIENTS,
  section: SECTION_BACKGROUNDS,
  button: BUTTON_GRADIENTS,
  overlay: OVERLAY_GRADIENTS,
  decorative: DECORATIVE_GRADIENTS,
  component: COMPONENT_GRADIENTS,
  placeholder: PLACEHOLDER_GRADIENTS,
  opacity: OPACITY_LEVELS,
  direction: GRADIENT_DIRECTIONS,
  specialized: SPECIALIZED_GRADIENTS,
  presets: GRADIENT_PRESETS,
  utils: {
    withOpacity,
    combineGradients,
    responsiveGradient,
  },
} as const;

export default THEME;
