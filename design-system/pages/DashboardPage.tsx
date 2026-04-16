import { Asterisk, LayoutDashboard, Package, Share2, TrendingUp, Users, Plug, Settings } from 'lucide-react';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { ComponentPreview } from '../components/ComponentPreview';
import { BloomMetricCard } from '../components/bloom/BloomMetricCard';
import { BloomLineChart } from '../components/bloom/BloomLineChart';
import { BloomDonutChart } from '../components/bloom/BloomDonutChart';
import { BloomHeatmap } from '../components/bloom/BloomHeatmap';
import { BloomProductTable } from '../components/bloom/BloomProductTable';
import { BloomChannelList } from '../components/bloom/BloomChannelList';
import { BloomRecentOrders } from '../components/bloom/BloomRecentOrders';
import { BloomSmartInsights } from '../components/bloom/BloomSmartInsights';
import {
  mockMetrics, mockRevenueChartData, mockRevenueWeekly, mockChannelBreakdown,
  mockHeatmapData, mockProducts, mockRecentOrders, mockSmartInsights
} from '../data/mock-data';

const metricColors = ['#F5C9A0', '#F2C4CC', '#7A64C0', '#DDD6EE'];

export default function DashboardPage() {
  return (
    <div className="space-y-14">
      <div>
        <h1 className="text-[32px] font-normal tracking-[-0.02em] text-black/85">Dashboard</h1>
        <p className="text-[15px] font-normal text-black/35 mt-1">Widgets, graficos e tabelas para visualizacao de dados.</p>
      </div>

      <ShowcaseSection title="Metric Cards" description="Cores curingas no topo. Sem barra bottom. Valores em R$.">
        <div className="grid grid-cols-4 gap-3">
          {mockMetrics.map((m, i) => {
            const { barColor, ...rest } = m;
            return <BloomMetricCard key={m.label} {...rest} topColor={metricColors[i]} />;
          })}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Metric Cards (Dark)" description="Fundo escuro — cores curingas no topo. Sem barra bottom.">
        <ComponentPreview darkBg>
          <div className="grid grid-cols-4 gap-3">
            {mockMetrics.map((m, i) => {
              const { barColor, ...rest } = m;
              return <BloomMetricCard key={`dark-${m.label}`} {...rest} variant="dark" topColor={metricColors[i]} />;
            })}
          </div>
        </ComponentPreview>
      </ShowcaseSection>

      <ShowcaseSection title="Line Chart" description="Stroke #F15A5A com gradient translucido. Valores em R$.">
        <BloomLineChart data={mockRevenueChartData} height={260} />
      </ShowcaseSection>

      <ShowcaseSection title="Lista de Canais" description="Lista vertical de canais com barras horizontais coloridas.">
        <BloomChannelList channels={mockChannelBreakdown} />
      </ShowcaseSection>

      <ShowcaseSection title="Pedidos Recentes" description="Feed de pedidos recentes com avatar, valor e status badge.">
        <BloomRecentOrders orders={mockRecentOrders} />
      </ShowcaseSection>

      <ShowcaseSection title="Insights Inteligentes" description="Notificacoes inteligentes com icones, descricao e timestamp.">
        <BloomSmartInsights insights={mockSmartInsights} />
      </ShowcaseSection>

      <ShowcaseSection title="Heatmap (Claro)" description="Eyebrow black/25, metrica black/85, badge success translucido.">
        <BloomHeatmap
          data={mockHeatmapData}
          headerLabel="Atividade de vendas"
          headerMetric="1.240"
          headerBadge="+12% vs ult. mes"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Heatmap (Escuro)" description="Mesma estrutura, cores invertidas para white/ com opacidade.">
        <ComponentPreview darkBg>
          <BloomHeatmap
            data={mockHeatmapData}
            headerLabel="Atividade de vendas"
            headerMetric="1.240"
            headerBadge="+12% vs ult. mes"
            variant="dark"
          />
        </ComponentPreview>
      </ShowcaseSection>

      <ShowcaseSection title="Tabela de Produtos" description="Colunas simplificadas: Produto, Receita (R$), Tendencia.">
        <BloomProductTable products={mockProducts} />
      </ShowcaseSection>

      {/* Full Dashboard Composition */}
      <ShowcaseSection title="Dashboard Completo" description="Composicao integrada fiel ao Behance com sidebar, header e todos os widgets.">
        <div className="flex rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40">
          {/* Sidebar */}
          <div className="w-[220px] shrink-0 border-r border-black/[0.04] bg-white/80 flex flex-col">
            {/* Logo */}
            <div className="px-5 py-4 flex items-center gap-2">
              <Asterisk size={16} strokeWidth={1.8} className="text-primary/40" />
              <span className="text-[15px] font-normal text-black/80">bloom</span>
            </div>

            {/* Store selector */}
            <div className="mx-4 mb-4 px-3 py-2 rounded-[10px] bg-black/[0.02] border border-black/[0.04]">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#22C55E]/60" />
                <div>
                  <p className="text-[12px] font-normal text-black/70">Mira Studio</p>
                  <p className="text-[10px] font-normal text-black/25">Shopify · sincronizado 2m atras</p>
                </div>
              </div>
            </div>

            {/* Nav sections */}
            <div className="px-3 flex-1">
              <p className="text-[10px] font-normal text-black/20 tracking-[0.08em] uppercase px-2 mb-2">ANALITICOS</p>
              <NavItem icon={<LayoutDashboard size={15} strokeWidth={1.5} />} label="Visao Geral" active />
              <NavItem icon={<Package size={15} strokeWidth={1.5} />} label="Produtos" />
              <NavItem icon={<Share2 size={15} strokeWidth={1.5} />} label="Canais" badge="Live" />

              <p className="text-[10px] font-normal text-black/20 tracking-[0.08em] uppercase px-2 mb-2 mt-5">RELATORIOS</p>
              <NavItem icon={<TrendingUp size={15} strokeWidth={1.5} />} label="Receita" />
              <NavItem icon={<Users size={15} strokeWidth={1.5} />} label="Clientes" />

              <p className="text-[10px] font-normal text-black/20 tracking-[0.08em] uppercase px-2 mb-2 mt-5">CONFIGURACOES</p>
              <NavItem icon={<Settings size={15} strokeWidth={1.5} />} label="Integracoes" />
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-black/[0.04]">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-[#C8B8D8]/20 flex items-center justify-center text-[10px] font-normal text-black/40">SL</div>
                <div>
                  <p className="text-[12px] font-normal text-black/60">Sophie L.</p>
                  <p className="text-[10px] font-normal text-black/25">Plano Pro</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-5 space-y-4">
            {/* Header bar */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <span className="text-[14px] font-normal text-black/80">Visao Geral</span>
                <div className="inline-flex items-center rounded-full bg-black/[0.03] border border-black/[0.04] p-0.5">
                  <span className="rounded-full px-3 py-1 text-[12px] font-normal bg-white text-black/70 shadow-[0_1px_2px_rgba(0,0,0,0.04)] border border-black/[0.04]">7 dias</span>
                  <span className="px-3 py-1 text-[12px] font-normal text-black/30">30 dias</span>
                  <span className="px-3 py-1 text-[12px] font-normal text-black/30">90 dias</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] font-normal text-black/30">Novembro 2025</span>
                <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-normal bg-[#22C55E]/[0.08] text-[#15803d] border border-[#22C55E]/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]/60" />
                  Live
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-4 gap-3">
              {mockMetrics.map((m, i) => {
                const { barColor, ...rest } = m;
                return <BloomMetricCard key={`full-${m.label}`} {...rest} topColor={metricColors[i]} />;
              })}
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <div className="rounded-[14px] border border-black/[0.04] bg-white/60 backdrop-blur-sm p-5">
                  <p className="text-[11px] font-normal text-black/25 tracking-[0.06em] mb-4">— RECEITA · ULTIMOS 30 DIAS</p>
                  <BloomLineChart data={mockRevenueWeekly} height={180} />
                </div>
              </div>
              <div>
                <div className="rounded-[14px] border border-black/[0.04] bg-white/60 backdrop-blur-sm p-5">
                  <BloomChannelList channels={mockChannelBreakdown} />
                </div>
              </div>
            </div>

            {/* Middle row: Products + Orders + Heatmap */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-[14px] border border-black/[0.04] bg-white/60 backdrop-blur-sm p-5">
                <BloomProductTable products={mockProducts} maxItems={5} showViewAll />
              </div>
              <div className="rounded-[14px] border border-black/[0.04] bg-white/60 backdrop-blur-sm p-5">
                <BloomRecentOrders orders={mockRecentOrders} />
              </div>
              <div className="rounded-[14px] border border-black/[0.04] bg-white/60 backdrop-blur-sm p-5">
                <BloomHeatmap
                  data={mockHeatmapData}
                  headerLabel="Atividade de vendas"
                  headerMetric="1.240"
                  headerBadge="+12% vs ult. mes"
                />
              </div>
            </div>

            {/* Smart Insights */}
            <BloomSmartInsights insights={mockSmartInsights} />
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}

/* Sidebar nav item helper */
function NavItem({ icon, label, active, badge }: { icon: React.ReactNode; label: string; active?: boolean; badge?: string }) {
  return (
    <div className={`flex items-center gap-2.5 px-2 py-2 rounded-[8px] mb-0.5 cursor-pointer transition-colors ${active ? 'bg-primary/[0.06] text-primary' : 'text-black/40 hover:bg-black/[0.02] hover:text-black/60'}`}>
      {icon}
      <span className="text-[13px] font-normal flex-1">{label}</span>
      {badge && (
        <span className="text-[10px] font-normal rounded-full px-2 py-0.5 bg-[#22C55E]/[0.08] text-[#15803d]">{badge}</span>
      )}
    </div>
  );
}
