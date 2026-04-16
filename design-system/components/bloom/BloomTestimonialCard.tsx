import { cn } from '@/lib/utils';
import { BloomStarRating } from './BloomStarRating';
import { BloomAvatar } from './BloomAvatar';

interface BloomTestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar?: string;
  gender?: 'female' | 'male';
  className?: string;
}

// Cores curingas de borda por genero
const femaleColors = ['#F2C4CC', '#C8B8D8', '#FFD3E2'];
const maleColors = ['#F5C9A0', '#F5C9A0', '#F5C9A0'];

function getTopColor(name: string, gender: 'female' | 'male' = 'female') {
  const colors = gender === 'female' ? femaleColors : maleColors;
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export function BloomTestimonialCard({ name, role, quote, rating, avatar, gender = 'female', className }: BloomTestimonialCardProps) {
  const topColor = getTopColor(name, gender);

  return (
    <div
      className={cn(
        'rounded-[16px] border border-black/[0.04] bg-[#FAF8F5] space-y-4 transition-all duration-200 hover:shadow-[0_4px_16px_rgba(26,26,46,0.06)] overflow-hidden',
        className
      )}
    >
      {/* Borda colorida no topo */}
      <div className="w-full h-[3px]" style={{ backgroundColor: topColor, opacity: 0.5 }} />

      <div className="px-6 pb-6 space-y-4">
        <BloomStarRating rating={rating} />
        <p className="text-[13px] font-normal text-black/45 leading-[1.7]">"{quote}"</p>
        <div className="flex items-center gap-3 pt-1">
          <BloomAvatar name={name} src={avatar} size="sm" />
          <div>
            <p className="text-[13px] font-normal text-black/75">{name}</p>
            <p className="text-[11px] font-normal text-black/30">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
