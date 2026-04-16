import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface DataEntry {
  name: string;
  value: number;
  color: string;
}

interface BloomDonutChartProps {
  data: DataEntry[];
  centerLabel?: string;
  centerValue?: string;
  size?: number;
  variant?: 'light' | 'dark';
  className?: string;
}

export function BloomDonutChart({ data, centerLabel, centerValue, size = 200, variant = 'light', className }: BloomDonutChartProps) {
  const isDark = variant === 'dark';

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      <ResponsiveContainer width={size} height={size}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={size * 0.32}
            outerRadius={size * 0.44}
            paddingAngle={2}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {(centerLabel || centerValue) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {centerValue && (
            <span className={cn('text-[22px] font-medium tracking-[-0.02em]', isDark ? 'text-white/90' : 'text-black/85')}>
              {centerValue}
            </span>
          )}
          {centerLabel && (
            <span className={cn('text-[11px] font-normal', isDark ? 'text-white/30' : 'text-black/25')}>
              {centerLabel}
            </span>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="ml-6 space-y-2.5">
        {data.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className={cn('text-[12px] font-normal', isDark ? 'text-white/40' : 'text-black/35')}>{entry.name}</span>
            <span className={cn('text-[12px] font-medium', isDark ? 'text-white/70' : 'text-black/60')}>{entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
