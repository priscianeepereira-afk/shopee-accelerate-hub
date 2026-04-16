import React from 'react';
import { cn } from '@/lib/utils';

type BloomButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark' | 'outline' | 'glass';
type BloomButtonSize = 'sm' | 'md' | 'lg';

interface BloomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BloomButtonVariant;
  size?: BloomButtonSize;
  children: React.ReactNode;
}

const variantStyles: Record<BloomButtonVariant, string> = {
  primary: 'bg-primary/20 text-black/70 hover:bg-primary/30 shadow-[0_0_20px_hsl(var(--primary)/0.15)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)]',
  secondary: 'bg-black/[0.03] text-black/60 border border-black/[0.04] hover:bg-black/[0.05] hover:text-black/80',
  ghost: 'bg-transparent text-black/40 hover:text-black/60',
  dark: 'bg-[#1A1A2E] text-white/90 hover:bg-[#2A2A3E]',
  outline: 'bg-transparent text-black/50 border border-black/[0.08] hover:bg-black/[0.02] hover:text-black/70',
  glass: 'bg-white/[0.12] backdrop-blur-md text-white/80 border border-white/[0.08] hover:bg-white/[0.18]',
};

const sizeStyles: Record<BloomButtonSize, string> = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-11 px-6 text-[14px]',
  lg: 'h-12 px-8 text-[15px]',
};

export function BloomButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: BloomButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-normal tracking-[-0.01em] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
