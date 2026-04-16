import { Asterisk } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BloomButton } from './BloomButton';

interface BloomNavbarProps {
  items?: string[];
  className?: string;
}

export function BloomNavbar({ items = ['Produto', 'Precos', 'Docs'], className }: BloomNavbarProps) {
  return (
    <nav
      className={cn(
        'flex items-center justify-between h-16 px-6 bg-white/80 backdrop-blur-xl border-b border-black/[0.04]',
        className
      )}
    >
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Asterisk size={16} strokeWidth={1.8} className="text-[#F15A5A]/50" />
          <span className="text-[16px] font-normal tracking-[-0.01em] text-black/80">bloom</span>
        </div>
        <div className="flex items-center gap-6">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[14px] font-normal text-black/40 hover:text-black/70 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <BloomButton variant="primary" size="sm">Entrar</BloomButton>
    </nav>
  );
}
