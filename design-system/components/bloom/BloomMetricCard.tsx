import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BloomBadge } from './BloomBadge';

interface BloomMetricCardProps {
  label: string;
  value: string;
  trend?: number;
  subtitle?: string;
  barColor?: string;
  topColor?: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export function BloomMetricCard({ label, value, trend, subtitle, barColor, topColor, variant = 'light', className }: BloomMetricCardProps) {
  const isPositive = trend && trend > 0;
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'rounded-[14px] border overflow-hidden transition-all duration-200 relative',
        isDark
          ? 'border-white/[0.06]'
          : 'bg-[#FAF8F5] border-black/[0.04]',
        isDark && topColor && 'border-t-0',
        className
      )}
      style={isDark ? {
        background: 'linear-gradient(180deg, rgba(60, 40, 60, 0.85) 0%, rgba(30, 20, 35, 0.92) 100%)',
        backdropFilter: 'blur(12px)',
      } : undefined}
    >
      {/* Top color bar */}
      {topColor && (
        <div className={isDark ? "absolute top-0 left-0 right-0 z-10 h-[2px]" : "w-full h-[2px]"} style={{ backgroundColor: topColor, opacity: isDark ? 0.8 : 0.4 }} />
      )}

      <div className="p-5 space-y-3 pb-4">
        <p className={cn('text-[11px] font-normal tracking-[0.04em] uppercase', isDark ? 'text-white/30' : 'text-black/30')}>
          {label}
        </p>
        <div className="space-y-1">
          <span className={cn('text-[28px] leading-[1.1] font-medium tracking-[-0.02em] block whitespace-nowrap', isDark ? 'text-white/90' : 'text-black/85')}>
            {value}
          </span>
          {subtitle && (
            <p className={cn('text-[11px] font-normal', isDark ? 'text-white/25' : 'text-black/30')}>
              {subtitle}
            </p>
          )}
        </div>
        {trend !== undefined && (
          <div className="mt-2">
            <BloomBadge variant={isPositive ? 'success' : 'danger'} onDark={isDark}>
              {isPositive ? <TrendingUp size={11} strokeWidth={1.6} className="mr-1" /> : <TrendingDown size={11} strokeWidth={1.6} className="mr-1" />}
              {isPositive ? '+' : ''}{trend}%
            </BloomBadge>
          </div>
        )}
      </div>

      {/* Bottom color bar */}
      {barColor && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{ backgroundColor: barColor, opacity: isDark ? 0.5 : 0.3 }}
        />
      )}
    </div>
  );
}
