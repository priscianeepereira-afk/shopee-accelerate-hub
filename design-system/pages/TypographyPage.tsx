import { ShowcaseSection } from '../components/ShowcaseSection';
import { BloomAccent } from '../components/bloom/BloomAccent';
import { Star } from 'lucide-react';

export default function TypographyPage() {
  return (
    <div className="space-y-14">
      <div>
        <h1 className="text-[32px] font-normal tracking-[-0.02em] text-[#1A1A2E]/90">Tipografia</h1>
        <p className="text-[15px] font-normal text-black/35 mt-1">Familias tipograficas, escala e padroes de texto.</p>
      </div>

      {/* Font Families */}
      <ShowcaseSection title="Familias" description="Inter para UI e Playfair Display para acentos em italico.">
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-3">
            <p className="text-[48px] font-normal text-[#1A1A2E]/80 tracking-[-0.03em]" style={{ fontFamily: 'Inter' }}>Aa</p>
            <p className="text-[14px] font-normal text-[#1A1A2E]/80">Inter</p>
            <p className="text-[13px] font-normal text-black/30 leading-[1.6]">Usada para todo texto de interface: headings, corpo, labels, botoes.</p>
            <div className="space-y-1.5 pt-2">
              <p className="text-[14px] font-light text-black/40">Light 300</p>
              <p className="text-[14px] font-normal text-black/40">Regular 400</p>
              <p className="text-[14px] font-medium text-black/40">Medium 500</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-[48px] italic text-[#1A1A2E]/80 tracking-[-0.03em]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Aa</p>
            <p className="text-[14px] font-normal text-[#1A1A2E]/80">Playfair Display</p>
            <p className="text-[13px] font-normal text-black/30 leading-[1.6]">Usada em italico para palavras de destaque dentro de headings.</p>
            <div className="pt-2 space-y-2.5">
              <p className="text-[22px] font-normal text-[#1A1A2E]/85 tracking-[-0.01em]">Cada venda conta uma <BloomAccent>historia.</BloomAccent></p>
              <p className="text-[22px] font-normal text-[#1A1A2E]/85 tracking-[-0.01em]">Suas ferramentas <BloomAccent>nao.</BloomAccent></p>
              <p className="text-[22px] font-normal text-[#1A1A2E]/85 tracking-[-0.01em]">precisa <BloomAccent>florescer.</BloomAccent></p>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Type Scale */}
      <ShowcaseSection title="Escala Tipografica" description="Todos os headings usam weight regular (400), nao bold.">
        <div className="space-y-6">
          {[
            { name: 'Display', classes: 'text-[48px] leading-[1.1] font-normal tracking-[-0.02em]', spec: '48px / 1.1 / Regular 400' },
            { name: 'H1', classes: 'text-[36px] leading-[1.15] font-normal tracking-[-0.02em]', spec: '36px / 1.15 / Regular 400' },
            { name: 'H2', classes: 'text-[28px] leading-[1.2] font-normal tracking-[-0.01em]', spec: '28px / 1.2 / Regular 400' },
            { name: 'H3', classes: 'text-[22px] leading-[1.3] font-normal tracking-[-0.01em]', spec: '22px / 1.3 / Regular 400' },
            { name: 'H4', classes: 'text-[18px] leading-[1.4] font-normal', spec: '18px / 1.4 / Regular 400' },
            { name: 'Body', classes: 'text-[15px] leading-[1.6] font-normal', spec: '15px / 1.6 / Regular 400' },
            { name: 'Body Small', classes: 'text-[13px] leading-[1.5] font-normal', spec: '13px / 1.5 / Regular 400' },
            { name: 'Caption', classes: 'text-[11px] leading-[1.4] font-normal', spec: '11px / 1.4 / Regular 400' },
          ].map(({ name, classes, spec }) => (
            <div key={name} className="flex items-baseline justify-between border-b border-black/[0.04] pb-4 last:border-0 last:pb-0">
              <p className={`${classes} text-[#1A1A2E]/85`}>A raposa marrom rapida</p>
              <div className="text-right flex-shrink-0 ml-6">
                <p className="text-[13px] font-normal text-[#1A1A2E]/70">{name}</p>
                <p className="text-[11px] font-normal text-black/25">{spec}</p>
              </div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* Eyebrow / Label Pattern */}
      <ShowcaseSection title="Eyebrow Labels" description="Padrao '— LABEL' usado antes de secoes. Caps, tracking aberto, cinza claro.">
        <div className="space-y-6">
          {['O PROBLEMA', 'O QUE VOCE RECEBE', 'ATIVIDADE DE VENDAS', 'ANALITICOS E-COMMERCE'].map((label) => (
            <div key={label} className="space-y-2">
              <p className="text-[11px] font-normal text-black/30 tracking-[0.1em]">— {label}</p>
              <p className="text-[28px] font-normal tracking-[-0.01em] text-[#1A1A2E]/85">Titulo da secao aqui</p>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* Metrics */}
      <ShowcaseSection title="Metricas" description="Valores numericos de dashboard. Weight regular a medium, nao bold.">
        <div className="flex items-baseline gap-14">
          <div>
            <p className="text-[32px] leading-[1.1] font-medium tracking-[-0.02em] text-[#1A1A2E]/90">R$ 42.800</p>
            <p className="text-[11px] font-normal text-black/25 mt-1.5">Metric Large — 32px / Medium 500</p>
          </div>
          <div>
            <p className="text-[24px] leading-[1.1] font-medium tracking-[-0.02em] text-[#1A1A2E]/90">R$ 30.800</p>
            <p className="text-[11px] font-normal text-black/25 mt-1.5">Metric — 24px / Medium 500</p>
          </div>
          <div>
            <p className="text-[18px] leading-[1.2] font-medium tracking-[-0.01em] text-[#1A1A2E]/90">1,240</p>
            <p className="text-[11px] font-normal text-black/25 mt-1.5">Metric Small — 18px / Medium 500</p>
          </div>
          <div>
            <p className="text-[32px] leading-[1.1] font-normal tracking-[-0.02em] text-[#1A1A2E]/85">73%</p>
            <p className="text-[11px] font-normal text-black/25 mt-1.5">Stat — 32px / Regular 400</p>
          </div>
        </div>
      </ShowcaseSection>

      {/* Pills / Tags */}
      <ShowcaseSection title="Tags e Pills" description="Labels de integracao e filtro com borda fina, sem preenchimento.">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {['Google Analytics', 'Meta Ads', 'Klaviyo'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full border border-black/[0.08] text-[12px] font-normal text-black/50"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[11px] font-normal text-black/25">Outline pills — border only, 12px, regular weight</p>
        </div>
      </ShowcaseSection>

      {/* Insight Callout */}
      <ShowcaseSection title="Callout / Insight" description="Box de destaque para insights automaticos.">
        <div className="max-w-[400px] rounded-[10px] bg-[#FEF9E7]/60 border border-[#F59E0B]/10 px-4 py-3 flex items-start gap-2.5">
          <Star size={14} strokeWidth={1.6} className="text-[#F59E0B]/70 mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-[13px] font-medium text-[#1A1A2E]/70">Insight principal: </span>
            <span className="text-[13px] font-normal text-black/40">Sua loja recebe 3x mais pedidos aos sabados a tarde. O Bloom mostra isso automaticamente.</span>
          </div>
        </div>
      </ShowcaseSection>

      {/* Body Text Hierarchy */}
      <ShowcaseSection title="Hierarquia de Corpo" description="Textos de corpo com opacidades graduais, nao cores solidas.">
        <div className="max-w-[480px] space-y-4">
          <p className="text-[15px] font-normal text-[#1A1A2E]/85 leading-[1.7]">
            Entenda os dados da sua loja como nunca antes — receita, estoque, analiticos, tudo em um so lugar.
          </p>
          <p className="text-[13px] font-normal text-black/40 leading-[1.6]">
            Veja quais dias e horarios geram mais pedidos. Planeje campanhas, reposicoes e escalas da equipe com base em atividade real — nao suposicoes.
          </p>
          <p className="text-[11px] font-normal text-black/25 leading-[1.5]">
            pedidos este mes em todos os dias.
          </p>
        </div>
      </ShowcaseSection>
    </div>
  );
}
