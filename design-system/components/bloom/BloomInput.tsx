import React from 'react';
import { cn } from '@/lib/utils';

interface BloomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const BloomInput = React.forwardRef<HTMLInputElement, BloomInputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="text-[13px] font-normal text-black/60">{label}</label>
        )}
        <input
          ref={ref}
          className={cn(
            'flex h-10 w-full rounded-[10px] border bg-white/60 backdrop-blur-sm px-3.5 py-2 text-[14px] font-normal text-black/80 placeholder:text-black/25',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-[#fb923c]/15 focus:border-[#fb923c]/30',
            'disabled:cursor-not-allowed disabled:opacity-40',
            error ? 'border-[#EF4444]/40' : 'border-black/[0.06]',
            className
          )}
          {...props}
        />
        {error && <p className="text-[12px] font-normal text-[#EF4444]/70">{error}</p>}
      </div>
    );
  }
);

BloomInput.displayName = 'BloomInput';
