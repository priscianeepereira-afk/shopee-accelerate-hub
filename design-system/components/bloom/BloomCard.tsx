import React from 'react';
import { cn } from '@/lib/utils';

interface BloomCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
  hover?: boolean;
  topColor?: string;
}

export function BloomCard({ children, className, variant = 'light', hover = false, topColor }: BloomCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'rounded-[16px] border transition-all duration-200 overflow-hidden relative',
        isDark
          ? 'border-white/[0.06] text-white'
          : 'bg-[#FAF8F5] border-black/[0.04]',
        isDark && topColor && 'border-t-0',
        hover && 'hover:shadow-[0_4px_16px_rgba(26,26,46,0.08)] hover:-translate-y-0.5',
        className
      )}
      style={isDark ? {
        background: 'linear-gradient(180deg, rgba(60, 40, 60, 0.85) 0%, rgba(30, 20, 35, 0.92) 100%)',
        backdropFilter: 'blur(12px)',
      } : undefined}
    >
      {topColor && (
        <div
          className="absolute top-0 left-0 right-0 z-10"
          style={{
            backgroundColor: topColor,
            opacity: isDark ? 0.8 : 0.4,
            height: '3px',
          }}
        />
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

export function BloomCardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('space-y-1.5', className)}>{children}</div>;
}

export function BloomCardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn('text-[15px] font-normal leading-none', className)}>{children}</h3>;
}

export function BloomCardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('text-[13px] font-normal text-black/30', className)}>{children}</p>;
}

export function BloomCardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('pt-4', className)}>{children}</div>;
}
