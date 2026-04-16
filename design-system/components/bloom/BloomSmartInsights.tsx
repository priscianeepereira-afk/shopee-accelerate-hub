import { Rocket, TrendingDown, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InsightItem {
  icon: 'rocket' | 'trending-down' | 'calendar';
  title: string;
  description: string;
  time: string;
}

interface BloomSmartInsightsProps {
  insights: InsightItem[];
  className?: string;
}

const iconConfig = {
  rocket: {
    Icon: Rocket,
    containerClass: 'bg-[#22C55E]/[0.08]',
    iconClass: 'text-[#22C55E]/70',
  },
  'trending-down': {
    Icon: TrendingDown,
    containerClass: 'bg-[#EF4444]/[0.08]',
    iconClass: 'text-[#EF4444]/70',
  },
  calendar: {
    Icon: Calendar,
    containerClass: 'bg-[#F59E0B]/[0.08]',
    iconClass: 'text-[#F59E0B]/70',
  },
} as const;

export function BloomSmartInsights({ insights, className }: BloomSmartInsightsProps) {
  return (
    <div className={cn('bg-[#FAF8F5] rounded-[14px] border border-black/[0.04] p-5', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-normal text-black/25 tracking-[0.08em]">
          — INSIGHTS INTELIGENTES
        </span>
        <button className="text-[11px] font-normal text-black/25 hover:text-black/40 transition-colors">
          Dispensar tudo
        </button>
      </div>

      {/* Insight list */}
      <div>
        {insights.map((insight, index) => {
          const { Icon, containerClass, iconClass } = iconConfig[insight.icon];

          return (
            <div
              key={index}
              className={cn(
                'flex items-start gap-3 py-3',
                index < insights.length - 1 && 'border-b border-black/[0.03]'
              )}
            >
              {/* Icon circle */}
              <div
                className={cn(
                  'flex h-7 w-7 shrink-0 items-center justify-center rounded-full',
                  containerClass
                )}
              >
                <Icon size={14} strokeWidth={1.5} className={iconClass} />
              </div>

              {/* Content */}
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="text-[13px] font-normal text-black/70">
                  {insight.title}
                </span>
                <span className="text-[12px] font-normal text-black/40">
                  {insight.description}
                </span>
              </div>

              {/* Time */}
              <span className="text-[11px] font-normal text-black/20 shrink-0 pt-0.5">
                {insight.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
