import { useState } from 'react';
import { Asterisk, Sparkles } from 'lucide-react';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { ComponentPreview } from '../components/ComponentPreview';
import { BloomButton } from '../components/bloom/BloomButton';
import { BloomToggle } from '../components/bloom/BloomToggle';

function LiquidGlassToggle({ options, defaultIndex = 0 }: { options: string[]; defaultIndex?: number }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div
      className="inline-flex items-center rounded-full p-1 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.25) 100%)',
        backdropFilter: 'blur(40px) saturate(1.8)',
        WebkitBackdropFilter: 'blur(40px) saturate(1.8)',
        border: '1px solid rgba(255,255,255,0.45)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.5)',
      }}
    >
      {options.map((option, index) => (
        <button
          key={option}
          onClick={() => setActiveIndex(index)}
          className="relative rounded-full px-5 py-2 text-[14px] font-normal tracking-[-0.01em] transition-all duration-300 ease-out whitespace-nowrap"
          style={
            activeIndex === index
              ? {
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.45) 100%)',
                  backdropFilter: 'blur(20px) brightness(1.15)',
                  WebkitBackdropFilter: 'blur(20px) brightness(1.15)',
                  border: '1px solid rgba(255,255,255,0.6)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06), 0 0.5px 0 rgba(255,255,255,0.7) inset, 0 -0.5px 1px rgba(0,0,0,0.03) inset',
                  color: 'rgba(0,0,0,0.75)',
                }
              : {
                  background: 'transparent',
                  border: '1px solid transparent',
                  color: 'rgba(0,0,0,0.3)',
                }
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default function ButtonsPage() {
  return (
    <div className="space-y-14">
      <div>
        <h1 className="text-[32px] font-normal tracking-[-0.02em] text-black/85">Botoes</h1>
        <p className="text-[15px] font-normal text-black/35 mt-1">Variantes, tamanhos e estados.</p>
      </div>

      {/* Variants */}
      <ShowcaseSection title="Variantes" description="6 variantes. Primary usa rosa translucido 20% com glow difuso.">
        <div className="space-y-6">
          <div className="flex items-center gap-4 flex-wrap">
            <BloomButton variant="primary" className="whitespace-nowrap">Comece gratis</BloomButton>
            <BloomButton variant="secondary">Secundario</BloomButton>
            <BloomButton variant="outline">Contorno</BloomButton>
            <BloomButton variant="ghost" className="whitespace-nowrap">Veja como funciona</BloomButton>
            <BloomButton variant="dark">Escuro</BloomButton>
          </div>
          {/* Cor de cada variante */}
          <div className="grid grid-cols-5 gap-3">
            {[
              { name: 'Primary', bg: 'primary', opacity: '20%', text: 'black/70', extra: '+ glow primary' },
              { name: 'Secondary', bg: 'black', opacity: '3%', text: 'black/60', extra: '+ borda 4%' },
              { name: 'Outline', bg: 'transparent', opacity: '—', text: 'black/50', extra: 'borda 8%' },
              { name: 'Ghost', bg: 'transparent', opacity: '—', text: 'black/40', extra: 'sem borda' },
              { name: 'Dark', bg: '#1A1A2E', opacity: '100%', text: 'white/90', extra: 'solido' },
            ].map(({ name, bg, opacity, text, extra }) => (
              <div key={name} className="space-y-1">
                <p className="text-[11px] font-normal text-black/50">{name}</p>
                <p className="text-[10px] font-normal text-black/25">bg: {bg} a {opacity}</p>
                <p className="text-[10px] font-normal text-black/25">text: {text}</p>
                <p className="text-[10px] font-normal text-black/20">{extra}</p>
              </div>
            ))}
          </div>
        </div>
      </ShowcaseSection>

      {/* Glass on dark */}
      <ShowcaseSection title="Glass (fundo escuro)" description="Backdrop-blur + white/12%. Badge 'assistente inteligente' com Sparkles.">
        <ComponentPreview darkBg>
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.12] backdrop-blur-md border border-white/[0.08] px-4 py-2">
              <Sparkles size={12} strokeWidth={1.6} className="text-white/50" />
              <span className="text-[13px] font-normal text-white/70">Seu assistente <span className="bloom-serif-accent">inteligente</span></span>
            </div>
            <button className="inline-flex items-center justify-center rounded-full h-11 px-6 text-[14px] font-normal tracking-[-0.01em] whitespace-nowrap transition-all duration-200 bg-[#F2C4CC] text-[#1A1A2E]/80 hover:bg-[#F2C4CC]/85">Comece gratis</button>
            <BloomButton variant="glass">Botao glass</BloomButton>
          </div>
        </ComponentPreview>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Tamanhos" description="Pill shape (rounded-full) em todos. Padding generoso.">
        <div className="space-y-4">
          <div className="flex items-end gap-4">
            <div className="text-center space-y-2">
              <BloomButton variant="primary" size="sm">Pequeno</BloomButton>
              <p className="text-[10px] font-normal text-black/20">h-9 px-4 · 13px</p>
            </div>
            <div className="text-center space-y-2">
              <BloomButton variant="primary" size="md">Medio</BloomButton>
              <p className="text-[10px] font-normal text-black/20">h-11 px-6 · 14px</p>
            </div>
            <div className="text-center space-y-2">
              <BloomButton variant="primary" size="lg">Grande</BloomButton>
              <p className="text-[10px] font-normal text-black/20">h-12 px-8 · 15px</p>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* States */}
      <ShowcaseSection title="Estados" description="Desabilitado reduz opacidade a 40%.">
        <div className="flex items-center gap-4">
          <BloomButton variant="primary">Normal</BloomButton>
          <BloomButton variant="primary" disabled>Desabilitado</BloomButton>
          <BloomButton variant="outline">Normal</BloomButton>
          <BloomButton variant="outline" disabled>Desabilitado</BloomButton>
        </div>
      </ShowcaseSection>

      {/* Full width */}
      <ShowcaseSection title="Largura total" description="Preenchendo o container. Usado em pricing cards e formularios.">
        <div className="max-w-[320px] space-y-3">
          <BloomButton variant="primary" className="w-full">Comece gratis</BloomButton>
          <BloomButton variant="outline" className="w-full">Veja como funciona</BloomButton>
          <BloomButton variant="ghost" className="w-full">Ja tem uma conta?</BloomButton>
        </div>
      </ShowcaseSection>

      {/* Toggle */}
      <ShowcaseSection title="Toggle (balao dentro de balao)" description="Container pill externo bg black/3%. Item ativo: white + shadow + borda. Badge inline.">
        <div className="space-y-6">
          <div>
            <p className="text-[11px] font-normal text-black/25 tracking-[0.06em] mb-3">— COM BADGE</p>
            <BloomToggle
              options={['Mensal', 'Anual']}
              badge={{ index: 1, label: 'Economize 20%' }}
            />
          </div>
          <div>
            <p className="text-[11px] font-normal text-black/25 tracking-[0.06em] mb-3">— SIMPLES</p>
            <BloomToggle options={['Visao Geral', 'Produtos']} />
          </div>
          <div>
            <p className="text-[11px] font-normal text-black/25 tracking-[0.06em] mb-3">— 3 OPCOES</p>
            <BloomToggle options={['7 dias', '30 dias', '90 dias']} />
          </div>

          {/* Liquid Glass */}
          <div className="pt-4 border-t border-black/[0.04]">
            <p className="text-[11px] font-normal text-black/25 tracking-[0.06em] mb-3">— LIQUID GLASS (APPLE)</p>
            <div className="space-y-4">
              <div className="rounded-[16px] p-6" style={{
                background: 'linear-gradient(135deg, #F5C9A0 0%, #FAE0C4 30%, #E8D5B5 60%, #D4A0A0 100%)',
              }}>
                <div className="space-y-4">
                  <LiquidGlassToggle options={['Mensal', 'Anual']} />
                  <div className="flex items-center gap-3">
                    <LiquidGlassToggle options={['Visao Geral', 'Produtos', 'Analitico']} />
                    <button className="inline-flex items-center justify-center rounded-full h-11 px-6 text-[14px] font-normal tracking-[-0.01em] whitespace-nowrap transition-all duration-200 text-black/70 hover:shadow-[0_0_30px_rgba(251,146,60,0.25)]" style={{ backgroundColor: 'rgba(251,146,60,0.20)', boxShadow: '0 0 20px rgba(251,146,60,0.15)' }}>Orange 400</button>
                  </div>
                </div>
              </div>
              <div className="rounded-[16px] p-6" style={{
                background: 'linear-gradient(135deg, #DDD6EE 0%, #C8B8D8 30%, #7A64C0 60%, #4A3580 100%)',
              }}>
                <LiquidGlassToggle options={['7 dias', '30 dias', '90 dias']} defaultIndex={1} />
              </div>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Navbar */}
      <ShowcaseSection title="Navbar" description="Links font-normal black/40. Entrar como pill primary rosa translucido.">
        <div className="flex items-center justify-between py-3 px-2">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Asterisk size={14} strokeWidth={1.8} className="text-primary/40" />
              <span className="text-[15px] font-normal text-black/80">bloom</span>
            </div>
            <div className="flex items-center gap-6">
              {['Produto', 'Precos', 'Docs'].map((item) => (
                <span key={item} className="text-[14px] font-normal text-black/40 cursor-pointer hover:text-black/70 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <BloomButton variant="primary" size="sm">Entrar</BloomButton>
        </div>
      </ShowcaseSection>

      {/* Tags / Pills */}
      <ShowcaseSection title="Tags / Pills" description="Outline only, sem preenchimento. Usadas para filtros e integracoes.">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {['Google Analytics', 'Meta Ads', 'Klaviyo', 'Shopify'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-black/[0.06] text-[12px] font-normal text-black/40 hover:border-black/[0.12] hover:text-black/60 transition-all cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[10px] font-normal text-black/20">Borda black/6%, texto black/40, hover eleva ambos</p>
        </div>
      </ShowcaseSection>

      {/* Specs */}
      <ShowcaseSection title="Especificacoes" description="Resumo tecnico.">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          {[
            { label: 'Raio da Borda', value: 'full (pill) — rounded-full' },
            { label: 'BG Primario', value: 'primary a 20% — nunca solido' },
            { label: 'Brilho Primario', value: 'shadow 0 0 20px hsl(primary/0.15)' },
            { label: 'Peso da Fonte', value: 'font-normal (400) — nunca bold' },
            { label: 'Familia da Fonte', value: 'Inter, tracking -0.01em' },
            { label: 'Transicao', value: 'all 200ms ease-out' },
            { label: 'Anel de Foco', value: '2px primary/30, offset 2px' },
            { label: 'Desabilitado', value: 'opacity 40%, pointer-events none' },
          ].map(({ label, value }) => (
            <div key={label} className="space-y-1">
              <p className="text-[12px] font-normal text-black/60">{label}</p>
              <p className="text-[12px] font-normal text-black/25">{value}</p>
            </div>
          ))}
        </div>
      </ShowcaseSection>
    </div>
  );
}
