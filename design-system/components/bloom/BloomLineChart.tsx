import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface DataPoint {
  [key: string]: string | number;
  revenue: number;
}

interface BloomLineChartProps {
  data: DataPoint[];
  dataKey?: string;
  height?: number;
  variant?: 'light' | 'dark';
  className?: string;
}

export function BloomLineChart({ data, dataKey, height = 240, variant = 'light', className }: BloomLineChartProps) {
  const xKey = dataKey || (data[0] && 'week' in data[0] ? 'week' : 'month');
  const isDark = variant === 'dark';

  return (
    <div className={cn('w-full', className)}>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="bloomGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F15A5A" stopOpacity={isDark ? 0.2 : 0.1} />
              <stop offset="95%" stopColor="#F15A5A" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)'}
            vertical={false}
          />
          <XAxis
            dataKey={xKey}
            axisLine={false}
            tickLine={false}
            tick={{ fill: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)', fontSize: 11 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)', fontSize: 11 }}
            tickFormatter={(v) => `R$ ${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#1A1A2E' : 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(8px)',
              border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.04)',
              borderRadius: '10px',
              fontSize: '12px',
              color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            }}
            formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Revenue']}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#F15A5A"
            strokeWidth={1.5}
            fill="url(#bloomGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
