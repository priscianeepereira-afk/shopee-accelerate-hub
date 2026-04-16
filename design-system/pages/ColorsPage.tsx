import { ShowcaseSection } from '../components/ShowcaseSection';
import { ColorSwatch } from '../components/ColorSwatch';
import { BloomButton } from '../components/bloom/BloomButton';

export default function ColorsPage() {
  return (
    <div className="space-y-14">
      <div>
        <h1 className="text-[32px] font-normal tracking-[-0.02em] text-black/85">Cores</h1>
        <p className="text-[15px] font-normal text-black/35 mt-1">Paleta de cores completa do Bloom Design System.</p>
      </div>

      <ShowcaseSection title="Core" description="Cores fundamentais de background e superficie.">
        <div className="grid grid-cols-4 gap-3">
          <ColorSwatch name="Light" hex="#F5F0EB" usage="Background principal" />
          <ColorSwatch name="White" hex="#FFFFFF" usage="Superficies de cards" />
          <ColorSwatch name="Dark" hex="#1A1A2E" usage="Cards escuros, sidebar" dark />
          <ColorSwatch name="Black" hex="#111118" usage="Footer, superficies profundas" dark />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Brand" description="O Primary nunca e usado solido. Sempre com opacidade.">
        <div className="grid grid-cols-4 gap-3">
          <ColorSwatch name="Primary" hex="#F15A5A" usage="Base — nunca usado a 100%" dark />
          <ColorSwatch name="Primary 20%" hex="#F15A5A" usage="Botoes CTA (bg a 20% + glow)" dark />
          <ColorSwatch name="Primary 50%" hex="#F15A5A" usage="Icones ativos na sidebar" dark />
          <ColorSwatch name="Primary Light" hex="#FEF2F2" usage="Background leve de destaque" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Secundarias" description="Cores decorativas usadas em icones, dots e elementos de apoio.">
        <div className="grid grid-cols-4 gap-3">
          <ColorSwatch name="Accent" hex="#C8B8D8" usage="Lavanda — icones, dots" />
          <ColorSwatch name="Tertiary" hex="#D4A0A0" usage="Rosa empoeirado — decorativo" />
          <ColorSwatch name="Gutenberg" hex="#E8D5B5" usage="Bege quente — cards, backgrounds" />
          <ColorSwatch name="Pink" hex="#E88E9E" usage="Charts, heatmap, icones" />
        </div>
      </ShowcaseSection>

      {/* Button Colors */}
      <ShowcaseSection title="Cores dos Botoes" description="Cada variante usa a cor base com opacidade diferente. Nunca solido.">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-3 text-center">
            <BloomButton variant="primary" className="w-full">Primary</BloomButton>
            <p className="text-[11px] font-normal text-black/25">#F15A5A a 20% + glow rosa</p>
            <p className="text-[11px] font-normal text-black/20">Texto: black/70</p>
          </div>
          <div className="space-y-3 text-center">
            <BloomButton variant="secondary" className="w-full">Secondary</BloomButton>
            <p className="text-[11px] font-normal text-black/25">black a 3% + borda black/4%</p>
            <p className="text-[11px] font-normal text-black/20">Texto: black/60</p>
          </div>
          <div className="space-y-3 text-center">
            <BloomButton variant="outline" className="w-full">Outline</BloomButton>
            <p className="text-[11px] font-normal text-black/25">Transparente + borda black/8%</p>
            <p className="text-[11px] font-normal text-black/20">Texto: black/50</p>
          </div>
          <div className="space-y-3 text-center">
            <BloomButton variant="ghost" className="w-full">Ghost</BloomButton>
            <p className="text-[11px] font-normal text-black/25">Transparente, sem borda</p>
            <p className="text-[11px] font-normal text-black/20">Texto: black/40</p>
          </div>
          <div className="space-y-3 text-center">
            <BloomButton variant="dark" className="w-full">Dark</BloomButton>
            <p className="text-[11px] font-normal text-black/25">#1A1A2E solido</p>
            <p className="text-[11px] font-normal text-black/20">Texto: white/90</p>
          </div>
          <div className="rounded-[12px] bg-[#1A1A2E] p-4 space-y-3 text-center">
            <BloomButton variant="glass" className="w-full">Glass</BloomButton>
            <p className="text-[11px] font-normal text-white/25">white a 12% + blur</p>
            <p className="text-[11px] font-normal text-white/20">Texto: white/80</p>
          </div>
        </div>
      </ShowcaseSection>

      {/* Contextual hierarchy */}
      <ShowcaseSection title="Texto — Hierarquia Contextual" description="As cores de texto se adaptam ao fundo. Nunca sao fixas.">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-[12px] border border-black/[0.04] bg-[#F5F0EB]/60 p-5 space-y-3">
            <p className="text-[11px] font-normal text-black/25 tracking-[0.06em]">— FUNDO CLARO</p>
            <p className="text-[22px] font-medium text-black/85 tracking-[-0.02em]">$42,800</p>
            <p className="text-[14px] font-normal text-black/80">Nome do produto</p>
            <p className="text-[13px] font-normal text-black/40">Descricao secundaria</p>
            <p className="text-[12px] font-normal text-black/30">Label ou caption</p>
            <p className="text-[11px] font-normal text-black/20">Hint, placeholder</p>
          </div>
          <div className="rounded-[12px] border border-white/[0.04] bg-[#1A1A2E] p-5 space-y-3">
            <p className="text-[11px] font-normal text-white/30 tracking-[0.06em]">— FUNDO ESCURO</p>
            <p className="text-[22px] font-medium text-white/90 tracking-[-0.02em]">$42,800</p>
            <p className="text-[14px] font-normal text-white/70">Nome do produto</p>
            <p className="text-[13px] font-normal text-white/40">Descricao secundaria</p>
            <p className="text-[12px] font-normal text-white/25">Label ou caption</p>
            <p className="text-[11px] font-normal text-white/15">Hint, placeholder</p>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Bordas" description="Bordas contextuais usando opacidade.">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-[12px] border border-black/[0.04] bg-[#F5F0EB]/60 p-5 space-y-2">
            <p className="text-[11px] font-normal text-black/25 tracking-[0.06em]">— FUNDO CLARO</p>
            <div className="border-t border-black/[0.04] pt-2"><p className="text-[12px] text-black/30">black/[0.04] — padrao</p></div>
            <div className="border-t border-black/[0.08] pt-2"><p className="text-[12px] text-black/30">black/[0.08] — forte</p></div>
          </div>
          <div className="rounded-[12px] border border-white/[0.04] bg-[#1A1A2E] p-5 space-y-2">
            <p className="text-[11px] font-normal text-white/30 tracking-[0.06em]">— FUNDO ESCURO</p>
            <div className="border-t border-white/[0.04] pt-2"><p className="text-[12px] text-white/30">white/[0.04] — padrao</p></div>
            <div className="border-t border-white/[0.08] pt-2"><p className="text-[12px] text-white/30">white/[0.08] — forte</p></div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Charts" description="Paleta de 5 niveis para heatmap e visualizacoes.">
        <div className="grid grid-cols-5 gap-3">
          <ColorSwatch name="Cream" hex="#F5EDE5" usage="Heatmap vazio" />
          <ColorSwatch name="Pink Light" hex="#F2C4CC" usage="Heatmap baixa" />
          <ColorSwatch name="Pink" hex="#E88E9E" usage="Heatmap media" />
          <ColorSwatch name="Pink Deep" hex="#D4607A" usage="Heatmap alta" dark />
          <ColorSwatch name="Coral" hex="#F15A5A" usage="Heatmap max, linhas" dark />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Comunidade" description="Cores dos avatares de badges e aneis da comunidade.">
        <div className="grid grid-cols-4 gap-3">
          <ColorSwatch name="Orange 400" hex="#fb923c" usage="Avatar engajada (from)" dark />
          <ColorSwatch name="Red 400" hex="#f87171" usage="Avatar engajada (to)" dark />
          <ColorSwatch name="Orange 300" hex="#fdba74" usage="Ring avatar engajada" />
          <ColorSwatch name="Amber 400" hex="#fbbf24" usage="Avatar Top 1 (from)" />
        </div>
        <div className="grid grid-cols-4 gap-3 mt-3">
          <ColorSwatch name="Orange 500" hex="#f97316" usage="Avatar Top 1 (to)" dark />
          <ColorSwatch name="Amber 300" hex="#fcd34d" usage="Ring avatar Top 1" />
          <ColorSwatch name="Slate 300" hex="#cbd5e1" usage="Avatar 2º lugar (from)" />
          <ColorSwatch name="Slate 400" hex="#94a3b8" usage="Avatar 2º lugar (to)" dark />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Hero Gradient" description="Gradiente lavanda do hero section.">
        <div className="h-20 rounded-[10px] bg-gradient-to-r from-[#D8C8E8] to-[#F0E8F5] opacity-90" />
      </ShowcaseSection>

      <ShowcaseSection title="Status" description="Cores semanticas — tambem adaptam ao contexto.">
        <div className="grid grid-cols-3 gap-3">
          <ColorSwatch name="Success" hex="#22C55E" usage="Tendencias positivas" dark />
          <ColorSwatch name="Danger" hex="#EF4444" usage="Tendencias negativas" dark />
          <ColorSwatch name="Warning" hex="#F59E0B" usage="Alertas, insights" dark />
        </div>
      </ShowcaseSection>
    </div>
  );
}
