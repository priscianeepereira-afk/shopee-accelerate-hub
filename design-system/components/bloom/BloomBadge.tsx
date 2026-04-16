import React from 'react';
import { cn } from '@/lib/utils';

type BloomBadgeVariant = 'default' | 'brand' | 'success' | 'danger' | 'warning' | 'muted';

interface BloomBadgeProps {
  children: React.ReactNode;
  variant?: BloomBadgeVariant;
  onDark?: boolean;
  className?: string;
}

const lightVariants: Record<BloomBadgeVariant, string> = {
  default: 'bg-black/[0.03] text-black/50 border-black/[0.06]',
  brand: 'bg-[#F15A5A]/[0.06] text-[#F15A5A]/80 border-[#F15A5A]/10',
  success: 'bg-[#22C55E]/[0.08] text-[#15803d] border-[#22C55E]/10',
  danger: 'bg-[#EF4444]/[0.06] text-[#EF4444]/80 border-[#EF4444]/10',
  warning: 'bg-[#F59E0B]/[0.06] text-[#D97706]/80 border-[#F59E0B]/10',
  muted: 'bg-black/[0.02] text-black/30 border-black/[0.04]',
};

const darkVariants: Record<BloomBadgeVariant, string> = {
  default: 'bg-white/[0.06] text-white/50 border-white/[0.08]',
  brand: 'bg-[#F15A5A]/[0.12] text-[#F15A5A]/90 border-[#F15A5A]/15',
  success: 'bg-[#22C55E]/[0.08] text-[#15803d] border-[#22C55E]/15',
  danger: 'bg-[#EF4444]/[0.12] text-[#EF4444]/90 border-[#EF4444]/15',
  warning: 'bg-[#F59E0B]/[0.12] text-[#F59E0B]/90 border-[#F59E0B]/15',
  muted: 'bg-white/[0.04] text-white/30 border-white/[0.06]',
};

export function BloomBadge({ children, variant = 'default', onDark = false, className }: BloomBadgeProps) {
  const styles = onDark ? darkVariants : lightVariants;
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-normal border transition-colors',
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
