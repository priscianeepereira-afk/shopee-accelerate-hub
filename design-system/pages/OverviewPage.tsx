import { Asterisk, Droplets, Type, RectangleHorizontal, Layers, BarChart3, LayoutTemplate } from 'lucide-react';
import { BloomAccent } from '../components/bloom/BloomAccent';

const stats = [
  { icon: Droplets, label: 'Cores', count: '20+', color: '#C8B8D8' },
  { icon: Type, label: 'Estilos tipograficos', count: '10', color: '#4A4A5A' },
  { icon: RectangleHorizontal, label: 'Variantes de botao', count: '5', color: '#F15A5A' },
  { icon: Layers, label: 'Tipos de card', count: '7', color: '#E8D5B5' },
  { icon: BarChart3, label: 'Widgets de dados', count: '5', color: '#E88E9E' },
  { icon: LayoutTemplate, label: 'Secoes de layout', count: '6', color: '#D4A0A0' },
];

export default function OverviewPage() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Asterisk size={28} strokeWidth={1.8} className="text-[#F15A5A]/40" />
          <h1 className="text-[36px] leading-[1.15] font-normal tracking-[-0.02em] text-black/85">
            Bloom Design System
          </h1>
        </div>
        <p className="text-[15px] leading-[1.7] font-normal text-black/35 max-w-[560px]">
          Sistema de design completo baseado no projeto Bloom — uma plataforma SaaS de analytics para
          e-commerce com estetica premium e minimalista.
        </p>
      </div>

      {/* Stats — cada icone com cor da paleta */}
      <div>
        <p className="text-[11px] font-normal text-black/25 tracking-[0.08em] mb-4">— COMPONENTES</p>
        <div className="grid grid-cols-3 gap-3">
          {stats.map(({ icon: Icon, label, count, color }) => (
            <div key={label} className="rounded-[14px] border border-black/[0.04] bg-white/60 backdrop-blur-sm p-5">
              <div
                className="h-7 w-7 rounded-[7px] flex items-center justify-center mb-3"
                style={{ backgroundColor: `${color}18` }}
              >
                <Icon size={15} strokeWidth={1.5} style={{ color: `${color}99` }} />
              </div>
              <p className="text-[22px] font-medium tracking-[-0.02em] text-black/85">{count}</p>
              <p className="text-[12px] font-normal text-black/30 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Design Principles */}
      <div>
        <p className="text-[11px] font-normal text-black/25 tracking-[0.08em] mb-4">— PRINCIPIOS</p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { title: 'Clareza', desc: 'Cada metrica e informacao deve ser compreensivel em segundos.' },
            { title: 'Minimalismo', desc: 'Remover tudo que nao agrega valor. Espacos em branco sao intencionais.' },
            { title: 'Confianca', desc: 'O design transmite profissionalismo e seguranca para donos de lojas.' },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-[14px] border border-black/[0.04] bg-white/60 backdrop-blur-sm p-5">
              <h3 className="text-[14px] font-normal text-black/70 mb-2">{title}</h3>
              <p className="text-[13px] font-normal text-black/30 leading-[1.6]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contextual Typography Demo */}
      <div>
        <p className="text-[11px] font-normal text-black/25 tracking-[0.08em] mb-4">— TIPOGRAFIA CONTEXTUAL</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[14px] border border-black/[0.04] bg-white/60 backdrop-blur-sm p-6 space-y-2">
            <p className="text-[11px] font-normal text-black/20 tracking-[0.06em]">— FUNDO CLARO</p>
            <p className="text-[24px] font-medium text-black/85 tracking-[-0.02em]">R$ 42.800</p>
            <p className="text-[13px] font-normal text-black/40">Receita este mes</p>
            <p className="text-[11px] font-normal text-black/25">vs R$ 36.200 ult. mes</p>
          </div>
          <div className="rounded-[14px] border border-white/[0.04] bg-[#1A1A2E] p-6 space-y-2">
            <p className="text-[11px] font-normal text-white/25 tracking-[0.06em]">— FUNDO ESCURO</p>
            <p className="text-[24px] font-medium text-white/90 tracking-[-0.02em]">R$ 42.800</p>
            <p className="text-[13px] font-normal text-white/40">Receita este mes</p>
            <p className="text-[11px] font-normal text-white/20">vs R$ 36.200 ult. mes</p>
          </div>
        </div>
      </div>

      {/* Identity */}
      <div>
        <p className="text-[11px] font-normal text-black/25 tracking-[0.08em] mb-4">— IDENTIDADE VISUAL</p>
        <div className="rounded-[14px] border border-black/[0.04] bg-white/60 backdrop-blur-sm p-8 flex items-center gap-12">
          <div>
            <p className="text-[72px] font-normal text-black/75 leading-none tracking-[-0.03em]">Aa</p>
            <div className="mt-3 space-y-1">
              <p className="text-[13px] font-light text-black/20">Light</p>
              <p className="text-[13px] font-normal text-black/20">Regular</p>
              <p className="text-[13px] font-medium text-black/20">Medium</p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-2.5">
            {[
              { name: 'Light', color: '#F5F0EB', dark: false },
              { name: 'Dark', color: '#1A1A2E', dark: true },
              { name: 'Black', color: '#111118', dark: true },
              { name: 'Brand Primary', color: '#F15A5A', dark: true },
              { name: 'Secondary Accent', color: '#C8B8D8', dark: false },
              { name: 'Tertiary Brand', color: '#D4A0A0', dark: false },
              { name: 'Tertiary Text', color: '#8A8A9A', dark: false },
              { name: 'Gutenberg Primary', color: '#E8D5B5', dark: false },
              { name: 'Secondary Text', color: '#4A4A5A', dark: true },
            ].map(({ name, color, dark }) => (
              <div
                key={name}
                className="h-[52px] rounded-[8px] flex items-end p-2"
                style={{ backgroundColor: color, opacity: 0.85 }}
              >
                <span className={`text-[9px] font-normal tracking-[0.02em] ${dark ? 'text-white/60' : 'text-black/40'}`}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Serif Pattern */}
      <div>
        <p className="text-[11px] font-normal text-black/25 tracking-[0.08em] mb-4">— PADRAO SERIF</p>
        <div className="rounded-[14px] border border-black/[0.04] bg-white/60 backdrop-blur-sm p-8 space-y-3">
          <p className="text-[28px] font-normal tracking-[-0.01em] text-black/85">
            Cada venda conta uma <BloomAccent>historia.</BloomAccent>
          </p>
          <p className="text-[28px] font-normal tracking-[-0.01em] text-black/85">
            Suas ferramentas <BloomAccent>nao.</BloomAccent>
          </p>
          <p className="text-[28px] font-normal tracking-[-0.01em] text-black/85">
            Sua loja merece <BloomAccent>florescer.</BloomAccent>
          </p>
        </div>
      </div>
    </div>
  );
}
