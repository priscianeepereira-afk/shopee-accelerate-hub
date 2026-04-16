import React from 'react';
import { cn } from '@/lib/utils';
import { BloomAccent } from './BloomAccent';

interface BloomFeatureSectionProps {
  eyebrow?: string;
  heading: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

export function BloomFeatureSection({
  eyebrow, heading, description, children, reverse = false, className
}: BloomFeatureSectionProps) {
  return (
    <section className={cn('py-16', className)}>
      <div className={cn(
        'flex items-center gap-12',
        reverse ? 'flex-row-reverse' : 'flex-row'
      )}>
        {/* Text */}
        <div className="flex-1 space-y-4">
          {eyebrow && (
            <div className="flex items-center gap-2">
              {['Visao de receita', 'Analise de canais', 'Atividade de vendas'].map((tab, i) => (
                <span
                  key={tab}
                  className={cn(
                    'text-[13px] font-medium pb-1',
                    i === 0 ? 'text-[#1A1A2E] border-b-2 border-[#F15A5A]' : 'text-[#8A8A9A]'
                  )}
                >
                  {tab}
                </span>
              ))}
            </div>
          )}
          <h2 className="text-[40px] leading-[1.15] font-medium tracking-[-0.01em] text-[#1A1A2E]">
            {heading}
          </h2>
          {description && (
            <p className="text-[16px] leading-[1.6] text-[#4A4A5A] max-w-[440px]">
              {description}
            </p>
          )}
        </div>

        {/* Visual */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </section>
  );
}
