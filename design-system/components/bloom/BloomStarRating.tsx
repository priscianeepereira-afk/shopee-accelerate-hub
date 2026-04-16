import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BloomStarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  className?: string;
}

export function BloomStarRating({ rating, maxStars = 5, size = 16, className }: BloomStarRatingProps) {
  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {Array.from({ length: maxStars }, (_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.6}
          className={cn(
            'transition-colors',
            i < rating ? 'fill-[#F2C4CC] text-[#F2C4CC]' : 'fill-black/[0.04] text-black/[0.08]'
          )}
        />
      ))}
    </div>
  );
}
