import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BloomChatBubbleProps {
  children: React.ReactNode;
  side: 'left' | 'right';
  time?: string;
  className?: string;
}

export function BloomChatBubble({ children, side, time, className }: BloomChatBubbleProps) {
  const isRight = side === 'right';
  const contentRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 360, h: 100 });

  useEffect(() => {
    if (contentRef.current) {
      const { offsetWidth, offsetHeight } = contentRef.current;
      setSize({ w: offsetWidth, h: offsetHeight });
    }
  }, [children]);

  const r = 20; // corner radius
  const tail = 22; // tail height above bubble
  const w = size.w;
  const h = size.h;

  // Path do balao direito: cauda sobe do canto superior direito
  const rightPath = `
    M ${r} 0
    L ${w - r - 8} 0
    Q ${w - 4} 0, ${w} ${-tail}
    C ${w - 2} ${-tail + 8}, ${w - 5} ${-2}, ${w - 8} ${4}
    Q ${w - 12} ${10}, ${w} ${r}
    L ${w} ${h - r}
    Q ${w} ${h}, ${w - r} ${h}
    L ${r} ${h}
    Q 0 ${h}, 0 ${h - r}
    L 0 ${r}
    Q 0 0, ${r} 0
    Z
  `;

  // Path do balao esquerdo: cauda sobe do canto superior esquerdo
  const leftPath = `
    M ${r + 8} 0
    L ${w - r} 0
    Q ${w} 0, ${w} ${r}
    L ${w} ${h - r}
    Q ${w} ${h}, ${w - r} ${h}
    L ${r} ${h}
    Q 0 ${h}, 0 ${h - r}
    L 0 ${r}
    Q 12 ${10}, 8 ${4}
    C 5 ${-2}, 2 ${-tail + 8}, 0 ${-tail}
    Q 4 0, ${r + 8} 0
    Z
  `;

  return (
    <div className={cn('flex', isRight ? 'justify-end' : 'justify-start', className)}>
      <div className="relative max-w-[360px]" style={{ paddingTop: `${tail}px` }}>
        {/* SVG balao */}
        <svg
          className="absolute top-0 left-0"
          width={w}
          height={h + tail}
          viewBox={`0 ${-tail} ${w} ${h + tail}`}
          fill="none"
          style={{ overflow: 'visible' }}
        >
          <path
            d={isRight ? rightPath : leftPath}
            fill={isRight ? '#FAF8F5' : '#FFFFFF'}
            stroke="#F5EDE5"
            strokeWidth="1"
          />
        </svg>

        {/* Conteudo */}
        <div
          ref={contentRef}
          className={cn('relative z-10', isRight ? 'px-5 py-4 pr-6' : 'px-5 py-4 pl-6')}
        >
          <div className="text-[13px] font-normal text-black/55 leading-[1.7]">
            {children}
          </div>
          {time && (
            <p className={cn('text-[10px] font-normal text-black/20 mt-2', isRight ? 'text-right' : 'text-left')}>
              {time}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
