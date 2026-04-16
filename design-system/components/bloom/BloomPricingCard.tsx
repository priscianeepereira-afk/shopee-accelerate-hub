import { cn } from '@/lib/utils';
import type { PricingFeature } from '../../data/mock-data';

interface BloomPricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  featured?: boolean;
  topColor?: string;
  className?: string;
}

export function BloomPricingCard({
  name, price, period, description, features, cta, featured = false, topColor = '#22C55E', className
}: BloomPricingCardProps) {
  return (
    <div
      className={cn(
        'rounded-[16px] border flex flex-col transition-all duration-200 overflow-hidden relative',
        featured
          ? 'border-white/[0.06] text-white'
          : 'bg-[#FAF8F5] border-black/[0.04]',
        featured && 'border-t-0',
        className
      )}
      style={featured ? {
        background: 'linear-gradient(180deg, rgba(60, 40, 60, 0.85) 0%, rgba(30, 20, 35, 0.92) 100%)',
        backdropFilter: 'blur(12px)',
      } : undefined}
    >
      {/* Top color bar */}
      <div
        className={featured ? 'absolute top-0 left-0 right-0 z-10' : 'w-full'}
        style={{
          background: featured
            ? `linear-gradient(90deg, ${topColor}, ${topColor}80)`
            : topColor,
          opacity: featured ? 0.8 : 0.4,
          height: '3px',
        }}
      />

      <div className="p-5 flex flex-col flex-1 text-center">
        {/* Badge */}
        {featured && (
          <div className="mb-3">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-normal bg-[#F5C9A0]/[0.15] text-[#F5C9A0] border border-[#F5C9A0]/[0.1]">
              MAIS POPULAR
            </span>
          </div>
        )}

        {/* Header */}
        <div className="space-y-2 pb-4 border-b border-current/[0.06]">
          <p className={cn('text-[12px] font-normal tracking-[0.08em] uppercase', featured ? 'text-white/35' : 'text-black/30')}>
            {name}
          </p>
          {featured && (
            <p className="text-[12px] font-normal text-white/35">
              {description}
            </p>
          )}
          <div>
            <span className={cn(
              'font-normal leading-none tracking-[-0.03em]',
              featured ? 'text-[48px] text-white/90' : 'text-[36px] text-black/85'
            )}>
              {price}
            </span>
          </div>
          <p className={cn('text-[12px] font-normal', featured ? 'text-white/25' : 'text-black/25')}>
            por mes · faturado mensalmente
          </p>
          {!featured && (
            <p className="text-[12px] font-normal text-black/40">
              {description}
            </p>
          )}
        </div>

        {/* Features */}
        <ul className="flex-1 space-y-2.5 py-4 text-left">
          {features.map(({ text, available }) => (
            <li key={text} className="flex items-center gap-2.5">
              {available ? (
                <div className={cn(
                  'h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0',
                  featured ? 'bg-[#F2C4CC]/[0.12]' : 'bg-[#22C55E]/[0.1]'
                )}>
                  <svg width="8" height="7" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke={featured ? '#F2C4CC' : '#22C55E'}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <div className="h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 bg-black/[0.03]">
                  <svg width="8" height="7" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/10"/>
                  </svg>
                </div>
              )}
              <span className={cn(
                'text-[12px] font-normal min-w-0',
                !available ? 'text-black/20' : featured ? 'text-white/50' : 'text-black/50'
              )}>
                {text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {featured ? (
          <button className="w-auto mx-auto h-8 px-8 rounded-full text-[12px] font-normal tracking-[-0.01em] transition-all duration-200 bg-[#F2C4CC] text-[#1A1A2E]/80 hover:bg-[#F2C4CC]/85 whitespace-nowrap">
            {cta}
          </button>
        ) : (
          <button
            className="w-auto mx-auto h-8 px-8 rounded-full text-[12px] font-normal tracking-[-0.01em] transition-all duration-200 whitespace-nowrap hover:opacity-80"
            style={{
              backgroundColor: `${topColor}20`,
              color: topColor === '#22C55E' ? '#15803d' : topColor,
              border: `1px solid ${topColor}30`,
            }}
          >
            {cta}
          </button>
        )}
      </div>
    </div>
  );
}
