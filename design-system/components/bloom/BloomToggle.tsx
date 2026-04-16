import { useState } from 'react';
import { cn } from '@/lib/utils';

interface BloomToggleProps {
  options: string[];
  badge?: { index: number; label: string };
  defaultIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
}

export function BloomToggle({ options, badge, defaultIndex = 0, onChange, className }: BloomToggleProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  return (
    <div className={cn('inline-flex items-center rounded-full bg-black/[0.03] border border-black/[0.04] p-1', className)}>
      {options.map((option, index) => (
        <button
          key={option}
          onClick={() => handleClick(index)}
          className={cn(
            'rounded-full px-5 py-2 text-[14px] font-normal tracking-[-0.01em] transition-all duration-200',
            activeIndex === index
              ? 'bg-white text-black/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-black/[0.04]'
              : 'text-black/35 hover:text-black/50'
          )}
        >
          {option}
        </button>
      ))}
      {badge && (
        <span className="rounded-full px-3 py-1.5 text-[12px] font-normal text-[#15803d] bg-[#22C55E]/[0.08] ml-0.5">
          {badge.label}
        </span>
      )}
    </div>
  );
}
