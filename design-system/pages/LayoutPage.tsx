import { Sparkles } from 'lucide-react';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { BloomFeatureSection } from '../components/bloom/BloomFeatureSection';
import { BloomAccent } from '../components/bloom/BloomAccent';
import { BloomPainPointCard } from '../components/bloom/BloomPainPointCard';
import { BloomPricingCard } from '../components/bloom/BloomPricingCard';
import { BloomToggle } from '../components/bloom/BloomToggle';
import { BloomButton } from '../components/bloom/BloomButton';
import { BloomComparisonTable } from '../components/bloom/BloomComparisonTable';
import { BloomFAQAccordion } from '../components/bloom/BloomFAQAccordion';
import { BloomFooter } from '../components/bloom/BloomFooter';
import { BloomHeatmap } from '../components/bloom/BloomHeatmap';
import { BloomAvatarGroup } from '../components/bloom/BloomAvatar';
import { mockPricingTiers, mockComparisonFeatures, mockFAQ, mockHeatmapData } from '../data/mock-data';

export default function LayoutPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-[32px] font-normal tracking-[-0.02em] text-black/85">Layout</h1>
        <p className="text-[15px] font-normal text-black/35 mt-1">Secoes de pagina completas: hero, features, pricing, FAQ e footer.</p>
      </div>

      {/* Hero — gradiente com cores curingas: laranja pastel → lilás claro → rosa */}
      <ShowcaseSection title="Hero Section" description="Gradiente quente→frio com cores curingas: #F5C9A0 → #DDD6EE → #F2C4CC.">
        <section
          className="relative overflow-hidden rounded-[20px] px-8 py-20 text-center"
          style={{
            background: 'linear-gradient(135deg, #F5C9A0 0%, #FAE0C4 20%, #DDD6EE 50%, #F2C4CC 80%, #FEF2F2 100%)',
          }}
        >
          <p className="text-[11px] font-normal text-black/30 tracking-[0.1em] mb-4">— ANALITICOS E-COMMERCE</p>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.25] backdrop-blur-md border border-white/[0.2] px-4 py-1.5 mb-8">
            <Sparkles size={12} strokeWidth={1.6} className="text-[#7A64C0]/50" />
            <span className="text-[12px] font-normal text-black/50">Seu assistente <span className="bloom-serif-accent">inteligente</span></span>
          </div>

          <h1 className="text-[48px] leading-[1.1] font-normal tracking-[-0.02em] text-black/85 max-w-[600px] mx-auto mb-6">
            Cada venda conta uma <BloomAccent>historia.</BloomAccent>
          </h1>

          <p className="text-[15px] leading-[1.7] text-black/35 max-w-[440px] mx-auto mb-8 font-normal">
            O Bloom transforma os dados da sua loja em insights claros e vivos — receita, canais, produtos, tudo em um so lugar.
          </p>

          <div className="flex items-center justify-center gap-3 mb-8">
            <BloomButton variant="primary" size="lg" className="whitespace-nowrap">Comece gratis</BloomButton>
            <BloomButton variant="ghost" size="lg" className="whitespace-nowrap">Veja como funciona</BloomButton>
          </div>

          <div className="flex items-center justify-center gap-3">
            <BloomAvatarGroup names={['Sarah C', 'Marcus W', 'Emma R', 'John D', 'Lisa K']} size="sm" />
            <span className="text-[13px] font-normal text-black/35">Usado por mais de 3.800 lojistas.</span>
          </div>

          {/* Metric preview com lilás profundo */}
          <div className="mt-12 mx-auto max-w-[150px] rounded-[12px] bg-white/50 backdrop-blur-sm border border-[#C8B8D8]/30 p-4">
            <p className="text-[11px] font-normal text-[#7A64C0]/50 tracking-[0.04em]">RECEITA · ESTE MES</p>
            <p className="text-[22px] font-medium text-black/80 tracking-[-0.02em] mt-1">R$ 42.800</p>
          </div>
        </section>
      </ShowcaseSection>

      {/* Pain Points — card dark com gradiente laranja→lilás, cards light com toques de cor */}
      <ShowcaseSection title="Pain Points" description="Card escuro com gradiente laranja→lilas. Cards claros com borda curinga.">
        <div className="space-y-6">
          <h2 className="text-[40px] leading-[1.15] font-normal tracking-[-0.02em] text-black/85">
            Sua loja esta crescendo.<br />Suas ferramentas <BloomAccent>nao.</BloomAccent>
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Card dark — gradiente rosado original + borda pink light + stat laranja pastel */}
            <div
              className="rounded-[16px] border border-white/[0.06] overflow-hidden flex flex-col justify-between min-h-[200px] text-white"
              style={{
                background: 'linear-gradient(180deg, rgba(60, 40, 60, 0.85) 0%, rgba(30, 20, 35, 0.92) 100%)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="w-full h-[3px]" style={{ backgroundColor: '#F2C4CC', opacity: 0.6 }} />
              <div className="p-6 flex flex-col justify-between flex-1">
                <div className="space-y-2">
                  <h3 className="text-[15px] font-normal text-white/85">Planilhas por todos os lados</h3>
                  <p className="text-[13px] font-normal leading-[1.6] text-white/35">
                    Voce gasta horas em tabelas e formulas ao inves de fazer sua loja crescer.
                  </p>
                </div>
                <div className="pt-4">
                  <p className="text-[32px] font-normal tracking-[-0.02em] text-white/90">73%</p>
                  <p className="text-[11px] font-normal text-white/30 mt-1.5">dos lojistas relatam fadiga de planilhas</p>
                </div>
              </div>
            </div>
            {/* Card light com borda lilás claro */}
            <div className="rounded-[16px] border border-black/[0.04] bg-[#FAF8F5] overflow-hidden min-h-[200px]">
              <div className="w-full h-[3px]" style={{ backgroundColor: '#DDD6EE' }} />
              <div className="p-6">
                <h3 className="text-[15px] font-normal text-black/75">Sempre um dia atrasado</h3>
                <p className="text-[13px] font-normal leading-[1.6] text-black/35 mt-2">
                  Quando seus relatorios ficam prontos, o momento ja passou. Voce toma decisoes baseadas na historia de ontem.
                </p>
              </div>
            </div>
            {/* Card light com borda pink soft */}
            <div className="rounded-[16px] border border-black/[0.04] bg-[#FAF8F5] overflow-hidden min-h-[200px]">
              <div className="w-full h-[3px]" style={{ backgroundColor: '#FFD3E2' }} />
              <div className="p-6">
                <h3 className="text-[15px] font-normal text-black/75">Numeros sem contexto</h3>
                <p className="text-[13px] font-normal leading-[1.6] text-black/35 mt-2">
                  Voce ve uma queda na receita. Mas por que? Qual canal? A maioria das ferramentas diz o que aconteceu — nao por que.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Feature Section — fundo sutil lilas→rosa + heatmap com borda lilás */}
      <ShowcaseSection title="Feature Section" description="Fundo sutil lilas→rosa, borda #DDD6EE, acento #7A64C0.">
        <div
          className="rounded-[16px] p-6 -mx-1"
          style={{ background: 'linear-gradient(135deg, rgba(221,214,238,0.08) 0%, rgba(200,184,216,0.06) 50%, rgba(242,196,204,0.06) 100%)' }}
        >
          <BloomFeatureSection
            eyebrow="Recursos"
            heading={<>Saiba <BloomAccent>exatamente</BloomAccent> quando seus clientes compram</>}
            description="Aprofunde dados e horarios em insights reais. Planeje seu estoque, otimize seus anuncios e nunca perca uma janela de vendas."
          >
            <div className="rounded-[16px] border border-[#DDD6EE]/60 bg-white p-5 shadow-[0_1px_3px_rgba(26,26,46,0.06)]">
              <BloomHeatmap data={mockHeatmapData} headerLabel="Atividade de vendas" headerMetric="1.240" />
            </div>
          </BloomFeatureSection>
        </div>
      </ShowcaseSection>

      {/* Pricing — header com gradiente curinga sutil */}
      <ShowcaseSection title="Pricing Section" description="Heading com gradiente sutil laranja→lilas. Toggle e trust badges.">
        <div className="space-y-6 text-center">
          <div
            className="rounded-[16px] px-8 py-10 -mx-2"
            style={{
              background: 'linear-gradient(135deg, rgba(245,201,160,0.08) 0%, rgba(221,214,238,0.12) 50%, rgba(242,196,204,0.08) 100%)',
            }}
          >
            <h2 className="text-[40px] leading-[1.15] font-normal tracking-[-0.02em] text-black/85">
              Precos simples.<br /><BloomAccent>Resultados serios.</BloomAccent>
            </h2>
            <p className="text-[14px] font-normal text-black/35 max-w-[360px] mx-auto mt-4">
              Um plano claro para cada estagio da sua loja.
            </p>
          </div>

          {/* Trust badges com cores curingas */}
          <div className="flex items-center justify-center gap-6">
            {[
              { dot: 'bg-[#F5C9A0]', label: 'Sem cartao de credito' },
              { dot: 'bg-[#C8B8D8]', label: 'Teste gratis por 14 dias' },
              { dot: 'bg-[#FFD3E2]', label: 'Cancele quando quiser' },
              { dot: 'bg-[#DDD6EE]', label: '+3.800 lojas conectadas' },
            ].map(({ dot, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                <span className="text-[12px] font-normal text-black/35">{label}</span>
              </div>
            ))}
          </div>

          <BloomToggle options={['Mensal', 'Anual']} className="mx-auto" />
          <div className="grid grid-cols-3 gap-4 text-left">
            {mockPricingTiers.map((tier) => (
              <BloomPricingCard key={tier.name} {...tier} />
            ))}
          </div>
        </div>
      </ShowcaseSection>

      {/* Comparison — header com acento lilás profundo */}
      <ShowcaseSection title="Tabela Comparativa" description="Tabela comparativa com acento #7A64C0.">
        <div className="text-center mb-6">
          <h2 className="text-[32px] font-normal tracking-[-0.02em] text-black/85">Compare os planos <BloomAccent>lado a lado.</BloomAccent></h2>
        </div>
        <BloomComparisonTable features={mockComparisonFeatures} />
      </ShowcaseSection>

      {/* FAQ — fundo sutil rosa */}
      <ShowcaseSection title="FAQ" description="Perguntas frequentes com fundo sutil #FEF2F2.">
        <div
          className="max-w-[640px] mx-auto rounded-[16px] px-8 py-8"
          style={{ background: 'linear-gradient(180deg, rgba(254,242,242,0.5) 0%, rgba(221,214,238,0.15) 100%)' }}
        >
          <h2 className="text-[32px] font-normal tracking-[-0.02em] text-black/85 text-center mb-6">
            Perguntas <BloomAccent>respondidas.</BloomAccent>
          </h2>
          <BloomFAQAccordion items={mockFAQ} />
        </div>
      </ShowcaseSection>

      {/* Footer — com divider gradiente curinga */}
      <ShowcaseSection title="Footer" description="Divider gradiente curinga + footer completo.">
        <div className="space-y-0">
          {/* Divider decorativo */}
          <div
            className="h-[2px] rounded-full mb-6 mx-auto max-w-[80%]"
            style={{ background: 'linear-gradient(90deg, transparent, #F5C9A0, #C8B8D8, #F2C4CC, transparent)' }}
          />
          <BloomFooter />
        </div>
      </ShowcaseSection>
    </div>
  );
}
