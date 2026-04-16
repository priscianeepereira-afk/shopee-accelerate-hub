import { BloomChatBubble } from '../components/bloom/BloomChatBubble';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { ComponentPreview } from '../components/ComponentPreview';
import { BloomCard, BloomCardHeader, BloomCardTitle, BloomCardDescription, BloomCardContent } from '../components/bloom/BloomCard';
import { BloomMetricCard } from '../components/bloom/BloomMetricCard';
import { BloomPainPointCard } from '../components/bloom/BloomPainPointCard';
import { BloomTestimonialCard } from '../components/bloom/BloomTestimonialCard';
import { BloomPricingCard } from '../components/bloom/BloomPricingCard';
import { BloomToggle } from '../components/bloom/BloomToggle';
import { mockMetrics, mockTestimonials, mockPricingTiers } from '../data/mock-data';

const metricColors = ['#F5C9A0', '#F2C4CC', '#7A64C0', '#DDD6EE'];

const testimonialTopColors: Record<string, string> = {
  'Sarah Chen': '#F2C4CC',
  'Marcus Wright': '#F5C9A0',
  'Emma Rodriguez': '#C8B8D8',
};

export default function CardsPage() {
  return (
    <div className="space-y-14">
      <div>
        <h1 className="text-[32px] font-normal tracking-[-0.02em] text-black/85">Cards</h1>
        <p className="text-[15px] font-normal text-black/35 mt-1">Todos os tipos de cards do design system.</p>
      </div>

      {/* Card Base */}
      <ShowcaseSection title="Card Base" description="Claro (creme) e escuro (translucido rosado) com borda curinga no topo.">
        <div className="grid grid-cols-2 gap-3">
          <BloomCard hover topColor="#DDD6EE">
            <BloomCardHeader>
              <BloomCardTitle className="text-black/80">Card Claro</BloomCardTitle>
              <BloomCardDescription>Fundo creme, borda lilas claro no topo.</BloomCardDescription>
            </BloomCardHeader>
            <BloomCardContent>
              <p className="text-[13px] font-normal text-black/40">Conteudo do card aqui.</p>
            </BloomCardContent>
          </BloomCard>
          <BloomCard variant="dark" hover topColor="#F2C4CC">
            <BloomCardHeader>
              <BloomCardTitle className="text-white/85">Card Escuro</BloomCardTitle>
              <BloomCardDescription className="text-white/30">Translucido rosado, borda pink light no topo.</BloomCardDescription>
            </BloomCardHeader>
            <BloomCardContent>
              <p className="text-[13px] font-normal text-white/40">Conteudo do card aqui.</p>
            </BloomCardContent>
          </BloomCard>
        </div>
      </ShowcaseSection>

      {/* Metric Cards light — sem barColor (so barra em cima) */}
      <ShowcaseSection title="Metric Cards (Claro)" description="Fundo creme com borda curinga no topo. Sem barra bottom.">
        <div className="grid grid-cols-4 gap-3">
          {mockMetrics.map((m, i) => {
            const { barColor, ...rest } = m;
            return <BloomMetricCard key={m.label} {...rest} topColor={metricColors[i]} />;
          })}
        </div>
      </ShowcaseSection>

      {/* Metric Cards dark — sem barColor */}
      <ShowcaseSection title="Metric Cards (Escuro)" description="Translucido rosado + borda curinga no topo. Sem barra bottom.">
        <ComponentPreview darkBg>
          <div className="grid grid-cols-4 gap-3">
            {mockMetrics.map((m, i) => {
              const { barColor, ...rest } = m;
              return <BloomMetricCard key={`dark-${m.label}`} {...rest} variant="dark" topColor={metricColors[i]} />;
            })}
          </div>
        </ComponentPreview>
      </ShowcaseSection>

      {/* Pain Point Cards */}
      <ShowcaseSection title="Pain Point Cards" description="Escuro translucido + borda pink light. Claro creme.">
        <div className="grid grid-cols-3 gap-3">
          <BloomPainPointCard
            title="Planilhas por todos os lados"
            description="Receita em uma aba. Pedidos em outra. Canais em uma terceira. Voce gasta mais tempo coletando dados do que lendo."
            stat="73%"
            statLabel="dos lojistas verificam as metricas tarde demais para agir"
            variant="dark"
            topColor="#F2C4CC"
          />
          <BloomPainPointCard
            title="Sempre um dia atrasado"
            description="Quando seus relatorios ficam prontos, o momento ja passou. Voce toma decisoes baseadas na historia de ontem."
            variant="light"
          />
          <BloomPainPointCard
            title="Numeros sem contexto"
            description="Voce ve uma queda na receita. Mas por que? Qual canal? Qual produto? A maioria das ferramentas diz o que aconteceu — nao por que."
            variant="light"
          />
        </div>
      </ShowcaseSection>

      {/* Suporte / Conversa — fundo com toque de lilas */}
      <ShowcaseSection title="Card de Suporte / Conversa" description="Baloes SVG com cauda curva organica. Fundo gradiente rosa→lilas.">
        <div className="rounded-[20px] px-6 py-10" style={{ background: 'linear-gradient(180deg, rgba(242,196,204,0.04) 0%, rgba(221,214,238,0.08) 50%, rgba(242,196,204,0.06) 100%)' }}>
          <div className="max-w-[520px] mx-auto space-y-3">
            <div className="text-center mb-6">
              <p className="text-[11px] font-normal text-black/25 tracking-[0.08em]">— SUPORTE —</p>
              <p className="text-[13px] font-normal text-black/30 mt-2">Hoje, 14:32</p>
            </div>

            <BloomChatBubble side="right" time="14:32">
              Oi! Estou com dificuldade pra entender o heatmap de vendas. O que significam as cores mais fortes?
            </BloomChatBubble>

            <BloomChatBubble side="left" time="14:33">
              Oi! As cores mais fortes no heatmap indicam os horarios com maior volume de vendas. Quanto mais intenso o rosa, mais pedidos naquele periodo.
            </BloomChatBubble>

            <BloomChatBubble side="right" time="14:34">
              Entendi! E consigo filtrar por semana ou so aparece o mes inteiro?
            </BloomChatBubble>

            <BloomChatBubble side="left" time="14:35">
              Voce pode usar o toggle no topo da pagina: 7 dias, 30 dias ou 90 dias. Assim vc ve exatamente o periodo que precisa. Quer que eu te mostre?
            </BloomChatBubble>

            <BloomChatBubble side="right" time="14:35">
              Sim, por favor! Muito obrigada pelo suporte rapido
            </BloomChatBubble>
          </div>
        </div>
      </ShowcaseSection>

      {/* Testimonial Cards — cores curingas nos cards internos, sem borda no wrapper */}
      <ShowcaseSection title="Testimonial Cards" description="Estrelas #F2C4CC. Borda curinga: mulher (pink/lavanda), homem (laranja pastel).">
        <div className="grid grid-cols-3 gap-3">
          {mockTestimonials.map((t) => (
            <BloomTestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </ShowcaseSection>

      {/* Pricing Section */}
      <ShowcaseSection title="Pricing Cards" description="CTA compacto. Featured: botao #F2C4CC solido. Cores curingas nos badges.">
        <div className="space-y-8">
          {/* Header com fundo sutil gradiente curinga */}
          <div
            className="rounded-[16px] px-8 py-10 -mx-2 text-center space-y-4"
            style={{ background: 'linear-gradient(135deg, rgba(245,201,160,0.08) 0%, rgba(221,214,238,0.12) 50%, rgba(242,196,204,0.08) 100%)' }}
          >
            <p className="text-[11px] font-normal text-black/25 tracking-[0.08em]">— COMECE AGORA —</p>
            <h2 className="text-[32px] font-normal tracking-[-0.02em] text-black/85">
              Precos simples.<br />
              <span className="bloom-serif-accent text-black/65">Resultados serios.</span>
            </h2>
            <p className="text-[14px] font-normal text-black/35 max-w-[360px] mx-auto">
              Um plano claro para cada estagio da sua loja. Sem taxas escondidas, sem analista necessario.
            </p>
          </div>

          <div className="flex justify-center">
            <BloomToggle
              options={['Mensal', 'Anual']}
              badge={{ index: 1, label: 'Economize 20%' }}
            />
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

          <div className="grid grid-cols-3 gap-3">
            {mockPricingTiers.map((tier) => (
              <BloomPricingCard key={tier.name} {...tier} />
            ))}
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
