import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BloomAccent } from './BloomAccent';
import { BloomButton } from './BloomButton';
import { BloomAvatarGroup } from './BloomAvatar';

interface BloomHeroProps {
  className?: string;
}

export function BloomHero({ className }: BloomHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-[20px] px-8 py-20 text-center',
        'bg-gradient-to-b from-[#D8C8E8] via-[#E8D8F0] to-[#F0E8F5]',
        className
      )}
    >
      {/* Eyebrow */}
      <p className="text-[11px] font-normal text-black/30 tracking-[0.1em] mb-4">— ANALITICOS E-COMMERCE</p>

      {/* Badge glass */}
      <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.15] backdrop-blur-md border border-white/[0.1] px-4 py-1.5 mb-8">
        <Sparkles size={12} strokeWidth={1.6} className="text-black/40" />
        <span className="text-[12px] font-normal text-black/50">Seu assistente <span className="bloom-serif-accent">inteligente</span></span>
      </div>

      {/* Heading */}
      <h1 className="text-[48px] leading-[1.1] font-normal tracking-[-0.02em] text-black/85 max-w-[600px] mx-auto mb-6">
        Cada venda conta uma <BloomAccent>historia.</BloomAccent>
      </h1>

      {/* Subtitle */}
      <p className="text-[15px] leading-[1.7] text-black/35 max-w-[440px] mx-auto mb-8 font-normal">
        O Bloom transforma os dados da sua loja em insights claros e vivos — receita, canais, produtos, tudo em um so lugar.
      </p>

      {/* CTAs */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <BloomButton variant="primary" size="lg" className="whitespace-nowrap">Comece gratis</BloomButton>
        <BloomButton variant="ghost" size="lg" className="whitespace-nowrap">Veja como funciona</BloomButton>
      </div>

      {/* Social Proof */}
      <div className="flex items-center justify-center gap-3">
        <BloomAvatarGroup names={['Sarah C', 'Marcus W', 'Emma R', 'John D', 'Lisa K']} size="sm" />
        <span className="text-[13px] font-normal text-black/35">Usado por mais de 3.800 lojistas.</span>
      </div>

      {/* Metric preview */}
      <div className="mt-12 mx-auto max-w-[150px] rounded-[12px] bg-white/50 backdrop-blur-sm border border-white/30 p-4">
        <p className="text-[11px] font-normal text-black/25 tracking-[0.04em]">RECEITA · ESTE MES</p>
        <p className="text-[22px] font-medium text-black/80 tracking-[-0.02em] mt-1">R$ 42.800</p>
      </div>
    </section>
  );
}
