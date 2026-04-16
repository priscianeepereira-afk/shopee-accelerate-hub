import { cn } from '@/lib/utils';

interface BloomAvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles = {
  sm: 'h-8 w-8 text-[12px]',
  md: 'h-10 w-10 text-[14px]',
  lg: 'h-12 w-12 text-[16px]',
};

const bgColors = [
  'bg-[#F15A5A]',
  'bg-[#C8B8D8]',
  'bg-[#D4A0A0]',
  'bg-[#E8D5B5]',
  'bg-[#E88E9E]',
];

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

function getColorIndex(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % bgColors.length;
}

export function BloomAvatar({ name, src, size = 'md', className }: BloomAvatarProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium text-white overflow-hidden',
        sizeStyles[size],
        !src && bgColors[getColorIndex(name)],
        className
      )}
    >
      {src ? (
        <img src={src} alt={name} className="h-full w-full object-cover" />
      ) : (
        getInitials(name)
      )}
    </div>
  );
}

interface BloomAvatarGroupProps {
  names: string[];
  size?: 'sm' | 'md' | 'lg';
  max?: number;
  className?: string;
}

export function BloomAvatarGroup({ names, size = 'sm', max = 4, className }: BloomAvatarGroupProps) {
  const visible = names.slice(0, max);
  const remaining = names.length - max;

  return (
    <div className={cn('flex items-center -space-x-2', className)}>
      {visible.map((name) => (
        <BloomAvatar
          key={name}
          name={name}
          size={size}
          className="ring-2 ring-white"
        />
      ))}
      {remaining > 0 && (
        <div className={cn(
          'inline-flex items-center justify-center rounded-full bg-[#F5F0EB] text-[#4A4A5A] font-medium ring-2 ring-white',
          sizeStyles[size]
        )}>
          +{remaining}
        </div>
      )}
    </div>
  );
}
