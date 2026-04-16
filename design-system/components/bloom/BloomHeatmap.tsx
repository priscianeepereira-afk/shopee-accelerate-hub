import { cn } from '@/lib/utils';
import { BloomBadge } from './BloomBadge';

const HEATMAP_COLORS = ['#F5EDE5', '#F2C4CC', '#E88E9E', '#D4607A', '#F15A5A'];

interface BloomHeatmapProps {
  data: number[][];
  headerMetric?: string;
  headerLabel?: string;
  headerBadge?: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export function BloomHeatmap({ data, headerMetric, headerLabel, headerBadge, variant = 'light', className }: BloomHeatmapProps) {
  const days = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'];
  const isDark = variant === 'dark';

  return (
    <div className={cn('space-y-4', className)}>
      {(headerMetric || headerLabel) && (
        <div>
          <div className="flex items-center justify-between">
            {headerLabel && (
              <p className={cn('text-[11px] font-normal tracking-[0.06em]', isDark ? 'text-white/30' : 'text-black/25')}>
                — {headerLabel.toUpperCase()}
              </p>
            )}
            {headerBadge && (
              <BloomBadge variant="success" onDark={isDark}>{headerBadge}</BloomBadge>
            )}
          </div>
          {headerMetric && (
            <p className={cn('text-[22px] font-medium tracking-[-0.02em] mt-1', isDark ? 'text-white/90' : 'text-black/85')}>
              {headerMetric}
            </p>
          )}
          {headerLabel && (
            <p className={cn('text-[12px] font-normal mt-0.5', isDark ? 'text-white/25' : 'text-black/25')}>
              pedidos este mes em todos os dias.
            </p>
          )}
        </div>
      )}

      <div className="space-y-1">
        {data.map((row, rowIdx) => (
          <div key={rowIdx} className="flex items-center gap-1">
            <span className={cn('text-[10px] font-normal w-7 text-right mr-1', isDark ? 'text-white/25' : 'text-black/20')}>
              {days[rowIdx] || ''}
            </span>
            {row.map((intensity, colIdx) => (
              <div
                key={`${rowIdx}-${colIdx}`}
                className="h-7 flex-1 rounded-[3px] transition-colors"
                style={{ backgroundColor: HEATMAP_COLORS[Math.min(intensity, 4)] }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-1.5 justify-end">
        <span className={cn('text-[10px] font-normal', isDark ? 'text-white/20' : 'text-black/20')}>Menos</span>
        {HEATMAP_COLORS.map((color, i) => (
          <div key={i} className="h-2.5 w-2.5 rounded-[2px]" style={{ backgroundColor: color }} />
        ))}
        <span className={cn('text-[10px] font-normal', isDark ? 'text-white/20' : 'text-black/20')}>Mais</span>
      </div>
    </div>
  );
}
