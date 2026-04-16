import {
  Compass, Map, Link as LinkIcon, Bell, User, MessageCircle,
  CalendarDays, Headphones,
} from 'lucide-react';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { BloomNavbar } from '../components/bloom/BloomNavbar';
import { BloomSidebar } from '../components/bloom/BloomSidebar';
import { BloomAppSidebar } from '../components/bloom/BloomAppSidebar';
import { BloomAppHeader } from '../components/bloom/BloomAppHeader';

const appSidebarDemoSections = [
  {
    title: 'INICIO',
    items: [
      { label: 'Conhecendo a Plataforma', path: '/platform-tour', icon: Compass },
    ],
  },
  {
    title: 'JORNADA',
    items: [
      {
        label: 'Missoes',
        path: '/dashboard',
        icon: Map,
        subItems: [
          { label: 'Missao 1 — Sua Loja no Ar em 7 Dias', path: '/mission/1' },
          { label: 'Missao 2 — Seu Plano de Acao', path: '/mission/2' },
          { label: 'Missao 3 — Ferramentas Prontas', path: '/mission/3' },
          { label: 'Missao 4 — Vendedora Profissional', path: '/mission/4' },
        ],
      },
    ],
  },
  {
    title: 'MINHA LOJA',
    items: [
      {
        label: 'Minhas Integracoes',
        path: '/integrations',
        icon: LinkIcon,
        badge: { text: '3 ativas', variant: 'success' as const },
      },
      {
        label: 'Notificacoes',
        path: '/notifications',
        icon: Bell,
        badge: { text: '4', variant: 'brand' as const },
      },
    ],
  },
  {
    title: 'CONTA',
    items: [
      { label: 'Meu Perfil', path: '/profile', icon: User },
      { label: 'Comunidade', path: '/community', icon: MessageCircle },
      { label: 'Agenda de Aulas', path: '/agenda', icon: CalendarDays },
    ],
  },
];

const appSidebarFooter = {
  label: 'Suporte',
  path: '/support',
  icon: Headphones,
};

export default function NavigationPage() {
  return (
    <div className="space-y-14">
      <div>
        <h1 className="text-[32px] font-normal tracking-[-0.02em] text-black/85">Navegacao</h1>
        <p className="text-[15px] font-normal text-black/35 mt-1">Navbar do site e sidebar do dashboard.</p>
      </div>

      <ShowcaseSection title="Navbar" description="Logo Asterisk, links font-normal black/40, Sign In pill rosa translucido.">
        <div className="border border-black/[0.04] rounded-[12px] overflow-hidden">
          <BloomNavbar />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Dashboard Sidebar" description="Secoes separadas, icones com cor da paleta quando ativo, store selector com dot verde.">
        <div className="border border-black/[0.04] rounded-[12px] overflow-hidden h-[520px]">
          <BloomSidebar />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="App Sidebar"
        description="Sidebar do app logado com secoes hierarquicas (INICIO, JORNADA, MINHA LOJA, CONTA), sub-items expansiveis, badges, e item fixo no rodape."
      >
        <div className="border border-black/[0.04] rounded-[12px] overflow-hidden h-[640px] bg-[#F5F0EB]">
          <BloomAppSidebar
            logo={
              <div className="flex items-center gap-2">
                <span className="text-[18px] font-semibold text-[#F15A5A] tracking-[-0.01em]">
                  Vend.A.I.
                </span>
              </div>
            }
            sections={appSidebarDemoSections}
            footerItem={appSidebarFooter}
            currentPath="/mission/2"
            onNavigate={() => {}}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="App Header"
        description="Header do app logado: botao Seja PRO (primary pill + Crown), notificacoes com indicador, avatar com nome e plano."
      >
        <div className="border border-black/[0.04] rounded-[12px] overflow-hidden">
          <BloomAppHeader
            user={{ name: 'Ana Silva', plan: 'GRATUITO' }}
            notificationCount={3}
            onProClick={() => {}}
            onNotificationsClick={() => {}}
            onAvatarClick={() => {}}
          />
        </div>
        <div className="border border-black/[0.04] rounded-[12px] overflow-hidden mt-3">
          <BloomAppHeader
            user={{ name: 'Ana Silva', plan: 'GRATUITO' }}
            notificationCount={0}
            showBack
            onBack={() => {}}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Especificacoes" description="Detalhes tecnicos atualizados.">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <p className="text-[11px] font-normal text-black/25 tracking-[0.06em] mb-3">— NAVBAR</p>
            <div className="space-y-2">
              {[
                { label: 'Altura', value: '64px' },
                { label: 'Background', value: 'white/80 + backdrop-blur-xl' },
                { label: 'Border', value: 'border-black/[0.04]' },
                { label: 'Logo', value: 'Asterisk strokeWidth 1.8, text-[#F15A5A]/50' },
                { label: 'Links', value: 'font-normal text-black/40' },
                { label: 'CTA', value: 'BloomButton primary (pill rosa)' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-3">
                  <p className="text-[12px] font-normal text-black/60 w-24 flex-shrink-0">{label}</p>
                  <p className="text-[12px] font-normal text-black/25">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-normal text-black/25 tracking-[0.06em] mb-3">— SIDEBAR</p>
            <div className="space-y-2">
              {[
                { label: 'Largura', value: '260px' },
                { label: 'Background', value: 'white/80 + backdrop-blur-xl' },
                { label: 'Secoes', value: 'DESIGN TOKENS, COMPONENTES, VISUALIZACAO' },
                { label: 'Item ativo', value: 'bg-black/[0.03], font-medium, icone colorido' },
                { label: 'Item inativo', value: 'text-black/40, font-normal, icone black/30' },
                { label: 'Icone ativo', value: 'Cor da paleta + fundo ${color}18' },
                { label: 'Item radius', value: '10px (rounded-[10px])' },
                { label: 'Store selector', value: 'Dot verde + chevron + borda black/[0.04]' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-3">
                  <p className="text-[12px] font-normal text-black/60 w-24 flex-shrink-0">{label}</p>
                  <p className="text-[12px] font-normal text-black/25">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-normal text-black/25 tracking-[0.06em] mb-3">— APP SIDEBAR</p>
            <div className="space-y-2">
              {[
                { label: 'Largura', value: '240px' },
                { label: 'Background', value: 'bg-white border-r #E8E4E0' },
                { label: 'Logo slot', value: 'h-16 px-5 border-b #E8E4E0' },
                { label: 'Secao titulo', value: 'text-[10px] tracking-[0.12em] black/25 uppercase' },
                { label: 'Item ativo', value: 'bg-[#FEF2F2] text-[#F15A5A]' },
                { label: 'Item inativo', value: 'text-[#4A4A5A] hover:bg-[#F5F0EB]' },
                { label: 'Item radius', value: '8px' },
                { label: 'Sub-item', value: 'pl-11, text-[13px] sem icone' },
                { label: 'Footer', value: 'border-t #E8E4E0, mesmo estilo do item' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-3">
                  <p className="text-[12px] font-normal text-black/60 w-24 flex-shrink-0">{label}</p>
                  <p className="text-[12px] font-normal text-black/25">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-normal text-black/25 tracking-[0.06em] mb-3">— APP HEADER</p>
            <div className="space-y-2">
              {[
                { label: 'Altura', value: '64px (h-16)' },
                { label: 'Background', value: 'white/80 + backdrop-blur-xl' },
                { label: 'Border', value: 'border-b black/[0.04]' },
                { label: 'Seja PRO', value: 'BloomButton primary sm + Crown 14px' },
                { label: 'Notif btn', value: 'w-9 h-9 rounded-full ghost + dot #EF4444' },
                { label: 'Divider', value: 'h-8 w-px bg-black/[0.06]' },
                { label: 'Avatar', value: 'BloomAvatar size="sm" + nome + BloomBadge plano' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-3">
                  <p className="text-[12px] font-normal text-black/60 w-24 flex-shrink-0">{label}</p>
                  <p className="text-[12px] font-normal text-black/25">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
