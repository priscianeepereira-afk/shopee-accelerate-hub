import React from 'react';
import { cn } from '@/lib/utils';

interface BloomAccentProps {
  children: React.ReactNode;
  className?: string;
}

export function BloomAccent({ children, className }: BloomAccentProps) {
  return (
    <span className={cn('bloom-serif-accent', className)}>
      {children}
    </span>
  );
}
