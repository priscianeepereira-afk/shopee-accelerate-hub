import { ShowcaseSection } from '../components/ShowcaseSection';
import { ComponentPreview } from '../components/ComponentPreview';
import { BloomStarRating } from '../components/bloom/BloomStarRating';
import { BloomBadge } from '../components/bloom/BloomBadge';

export default function FeedbackPage() {
  return (
    <div className="space-y-14">
      <div>
        <h1 className="text-[32px] font-normal tracking-[-0.02em] text-black/85">Feedback</h1>
        <p className="text-[15px] font-normal text-black/35 mt-1">Estrelas, badges e indicadores de status.</p>
      </div>

      <ShowcaseSection title="Star Rating" description="Estrelas preenchidas #F59E0B/80. Vazias: black/4% fill, black/8% stroke.">
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-3">
              <BloomStarRating rating={rating} />
              <span className="text-[13px] font-normal text-black/40">{rating} estrela{rating !== 1 ? 's' : ''}</span>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Star Rating — Tamanhos" description="12px, 16px (default), 24px.">
        <div className="flex items-end gap-8">
          {[
            { size: 12, label: '12px' },
            { size: 16, label: '16px (default)' },
            { size: 24, label: '24px' },
          ].map(({ size, label }) => (
            <div key={size} className="space-y-1.5">
              <BloomStarRating rating={5} size={size} />
              <p className="text-[11px] font-normal text-black/20">{label}</p>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* Badges light */}
      <ShowcaseSection title="Badges (fundo claro)" description="bg color/6-8%, texto color/80, borda color/10. Sem borda forte.">
        <div className="flex items-center gap-3 flex-wrap">
          <BloomBadge variant="default">Default</BloomBadge>
          <BloomBadge variant="brand">Brand</BloomBadge>
          <BloomBadge variant="success">Success</BloomBadge>
          <BloomBadge variant="danger">Danger</BloomBadge>
          <BloomBadge variant="warning">Warning</BloomBadge>
          <BloomBadge variant="muted">Muted</BloomBadge>
        </div>
      </ShowcaseSection>

      {/* Badges dark */}
      <ShowcaseSection title="Badges (fundo escuro)" description="Mesmas variantes com prop onDark — cores adaptam automaticamente.">
        <ComponentPreview darkBg>
          <div className="flex items-center gap-3 flex-wrap">
            <BloomBadge variant="default" onDark>Default</BloomBadge>
            <BloomBadge variant="brand" onDark>Brand</BloomBadge>
            <BloomBadge variant="success" onDark>+12%</BloomBadge>
            <BloomBadge variant="danger" onDark>-2.1%</BloomBadge>
            <BloomBadge variant="warning" onDark>Warning</BloomBadge>
            <BloomBadge variant="muted" onDark>Muted</BloomBadge>
          </div>
        </ComponentPreview>
      </ShowcaseSection>

      {/* Badges usage */}
      <ShowcaseSection title="Badges — Uso em contexto" description="Labels em black/40, badges inline.">
        <div className="space-y-3">
          {[
            { label: 'Tendencia de receita', badge: '+12.5%', variant: 'success' as const },
            { label: 'AOV', badge: '-2.1%', variant: 'danger' as const },
            { label: 'Status', badge: 'E-commerce analytics', variant: 'brand' as const },
            { label: 'Plano', badge: 'Starter', variant: 'muted' as const },
          ].map(({ label, badge, variant }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-[13px] font-normal text-black/40">{label}:</span>
              <BloomBadge variant={variant}>{badge}</BloomBadge>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* Status Indicators */}
      <ShowcaseSection title="Status Indicators" description="Dots com cor da paleta, labels text-black/40.">
        <div className="space-y-3">
          {[
            { label: 'Online', color: '#22C55E', opacity: '60' },
            { label: 'Processando', color: '#F59E0B', opacity: '60' },
            { label: 'Offline', color: '#EF4444', opacity: '60' },
            { label: 'Inativo', color: '#8A8A9A', opacity: '40' },
          ].map(({ label, color, opacity }) => (
            <div key={label} className="flex items-center gap-2.5">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color, opacity: Number(opacity) / 100 }} />
              <span className="text-[13px] font-normal text-black/40">{label}</span>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* Live badge */}
      <ShowcaseSection title="Live Badge" description="Badge especial com dot animado. Usado no dashboard.">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-normal bg-[#22C55E]/[0.08] text-[#15803d] border border-[#22C55E]/10">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]/60" />
            Live
          </span>
          <span className="text-[11px] font-normal text-black/20">bg green/8%, text green/80, dot green/60</span>
        </div>
      </ShowcaseSection>
    </div>
  );
}
