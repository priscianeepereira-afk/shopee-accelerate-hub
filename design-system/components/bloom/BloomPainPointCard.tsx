import { cn } from '@/lib/utils';

interface BloomPainPointCardProps {
  title: string;
  description?: string;
  stat?: string;
  statLabel?: string;
  variant?: 'dark' | 'light';
  topColor?: string;
  className?: string;
}

export function BloomPainPointCard({
  title, description, stat, statLabel, variant = 'light', topColor, className
}: BloomPainPointCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'rounded-[16px] border flex flex-col justify-between min-h-[200px] transition-all duration-200 overflow-hidden relative',
        isDark
          ? 'border-white/[0.06] text-white'
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
        <div className="absolute top-0 left-0 right-0 z-10" style={{ backgroundColor: topColor, opacity: isDark ? 0.8 : 0.4, height: '3px' }} />
      )}

      <div className="p-6 flex flex-col justify-between flex-1">
        <div className="space-y-2">
          <h3 className={cn('text-[15px] font-normal', isDark ? 'text-white/85' : 'text-black/75')}>
            {title}
          </h3>
          {description && (
            <p className={cn('text-[13px] font-normal leading-[1.6]', isDark ? 'text-white/35' : 'text-black/35')}>
              {description}
            </p>
          )}
        </div>

        {stat && (
          <div className="pt-4">
            <span className={cn('text-[32px] font-normal leading-none tracking-[-0.02em]', isDark ? 'text-white/85' : 'text-black/80')}>
              {stat}
            </span>
            {statLabel && (
              <p className={cn('text-[11px] font-normal mt-1.5', isDark ? 'text-white/25' : 'text-black/25')}>
                {statLabel}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
