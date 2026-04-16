// Bloom Design System - Tailwind arbitrary value constants
// These avoid modifying tailwind.config.ts while keeping Bloom values centralized

export const bloomColors = {
  light: '[#F5F0EB]',
  dark: '[#1A1A2E]',
  black: '[#111118]',
  white: '[#FFFFFF]',
  brand: '[#F15A5A]',
  brandHover: '[#E04848]',
  brandLight: '[#FEF2F2]',
  accent: '[#C8B8D8]',
  tertiary: '[#D4A0A0]',
  gutenberg: '[#E8D5B5]',
  textPrimary: '[#1A1A2E]',
  textSecondary: '[#4A4A5A]',
  textMuted: '[#8A8A9A]',
  textOnDarkMuted: '[#A0A0B0]',
  border: '[#E8E4E0]',
  borderStrong: '[#D0CCC8]',
  chartCream: '[#F5EDE5]',
  chartPinkLight: '[#F2C4CC]',
  chartPink: '[#E88E9E]',
  chartPinkDeep: '[#D4607A]',
  chartCoral: '[#F15A5A]',
  heroStart: '[#D8C8E8]',
  heroEnd: '[#F0E8F5]',
  success: '[#22C55E]',
  danger: '[#EF4444]',
  warning: '[#F59E0B]',
} as const;

export const bloomText = {
  display: 'text-[56px] leading-[1.1] font-normal tracking-[-0.02em]',
  h1: 'text-[40px] leading-[1.15] font-medium tracking-[-0.01em]',
  h2: 'text-[32px] leading-[1.2] font-medium tracking-[-0.01em]',
  h3: 'text-[24px] leading-[1.3] font-medium',
  h4: 'text-[20px] leading-[1.4] font-medium',
  body: 'text-[16px] leading-[1.6] font-normal',
  bodySmall: 'text-[14px] leading-[1.5] font-normal',
  caption: 'text-[12px] leading-[1.4] font-normal',
  metric: 'text-[36px] leading-[1.1] font-semibold tracking-[-0.02em]',
  metricSmall: 'text-[24px] leading-[1.2] font-semibold',
} as const;

export const bloomRadius = {
  sm: 'rounded-[6px]',
  md: 'rounded-[8px]',
  lg: 'rounded-[12px]',
  xl: 'rounded-[16px]',
  xxl: 'rounded-[20px]',
  full: 'rounded-full',
  card: 'rounded-[16px]',
  button: 'rounded-[8px]',
  input: 'rounded-[8px]',
} as const;

export const bloomShadow = {
  card: 'shadow-[0_1px_3px_rgba(26,26,46,0.06)]',
  cardHover: 'shadow-[0_4px_16px_rgba(26,26,46,0.10)]',
  cardElevated: 'shadow-[0_8px_30px_rgba(26,26,46,0.12)]',
  button: 'shadow-[0_1px_2px_rgba(26,26,46,0.05)]',
  buttonHover: 'shadow-[0_2px_8px_rgba(241,90,90,0.20)]',
  modal: 'shadow-[0_20px_60px_rgba(26,26,46,0.25)]',
  navbar: 'shadow-[0_1px_3px_rgba(0,0,0,0.05)]',
} as const;
