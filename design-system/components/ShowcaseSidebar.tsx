import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Asterisk, Droplets, Type, RectangleHorizontal, Layers,
  PanelLeft, BarChart3, TextCursorInput, LayoutTemplate, ImageIcon, Bell,
  ChevronDown, Users, CalendarDays
} from 'lucide-react';

// Cada icone tem uma cor de preenchimento da paleta quando ativo
const sections = [
  {
    label: 'DESIGN TOKENS',
    items: [
      { path: 'overview', label: 'Overview', icon: Asterisk, activeColor: '#F15A5A' },
      { path: 'colors', label: 'Cores', icon: Droplets, activeColor: '#C8B8D8' },
      { path: 'typography', label: 'Tipografia', icon: Type, activeColor: '#4A4A5A' },
    ],
  },
  {
    label: 'COMPONENTES',
    items: [
      { path: 'buttons', label: 'Botoes', icon: RectangleHorizontal, activeColor: '#F15A5A' },
      { path: 'cards', label: 'Cards', icon: Layers, activeColor: '#E8D5B5' },
      { path: 'navigation', label: 'Navegacao', icon: PanelLeft, activeColor: '#D4A0A0' },
      { path: 'forms', label: 'Formularios', icon: TextCursorInput, activeColor: '#8A8A9A' },
      { path: 'feedback', label: 'Feedback', icon: Bell, activeColor: '#F59E0B' },
    ],
  },
  {
    label: 'VISUALIZACAO',
    items: [
      { path: 'dashboard', label: 'Dashboard', icon: BarChart3, activeColor: '#E88E9E' },
      { path: 'layout', label: 'Layout', icon: LayoutTemplate, activeColor: '#C8B8D8' },
      { path: 'media', label: 'Midia', icon: ImageIcon, activeColor: '#D4A0A0' },
      { path: 'comunidade', label: 'Comunidade', icon: Users, activeColor: '#F15A5A' },
      { path: 'agenda', label: 'Agenda', icon: CalendarDays, activeColor: '#F5C9A0' },
    ],
  },
];

export function ShowcaseSidebar() {
  return (
    <aside className="w-[260px] h-screen sticky top-0 bg-white/80 backdrop-blur-xl border-r border-black/[0.04] flex flex-col overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 h-16 border-b border-black/[0.04] flex-shrink-0">
        <Asterisk size={18} strokeWidth={1.8} className="text-[#F15A5A]/80" />
        <span className="text-[17px] font-normal tracking-[-0.01em] text-black/85">bloom</span>
      </div>

      {/* Store Selector */}
      <div className="px-4 py-3 border-b border-black/[0.04]">
        <div className="flex items-center justify-between px-3 py-2.5 rounded-[10px] border border-black/[0.04] bg-black/[0.015] cursor-pointer hover:bg-black/[0.03] transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="h-2 w-2 rounded-full bg-[#22C55E]/70" />
            <div>
              <p className="text-[13px] font-normal text-black/80">Design System</p>
              <p className="text-[11px] font-normal text-black/25">Bloom · synced now</p>
            </div>
          </div>
          <ChevronDown size={14} strokeWidth={1.6} className="text-black/25" />
        </div>
      </div>

      {/* Nav sections */}
      <nav className="flex-1 px-3 py-2 overflow-y-auto">
        {sections.map((section, sIdx) => (
          <div key={section.label} className={cn(sIdx > 0 ? 'mt-6' : 'mt-3')}>
            <p className="text-[10px] font-normal text-black/20 uppercase tracking-[0.1em] px-3 mb-2">
              {section.label}
            </p>
            <div className="space-y-1">
              {section.items.map(({ path, label, icon: Icon, activeColor }) => (
                <NavLink
                  key={path}
                  to={`/design-system/${path}`}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-[14px] tracking-[-0.01em] transition-all duration-200',
                      isActive
                        ? 'bg-black/[0.03] text-black/85 font-medium'
                        : 'text-black/40 font-normal hover:bg-black/[0.02] hover:text-black/60'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div
                        className={cn(
                          'h-7 w-7 rounded-[7px] flex items-center justify-center transition-all duration-200',
                          isActive
                            ? 'opacity-100'
                            : 'opacity-100'
                        )}
                        style={{
                          backgroundColor: isActive ? `${activeColor}18` : 'transparent',
                        }}
                      >
                        <Icon
                          size={16}
                          strokeWidth={isActive ? 1.8 : 1.5}
                          style={{
                            color: isActive ? activeColor : undefined,
                          }}
                          className={cn(!isActive && 'text-black/30')}
                        />
                      </div>
                      {label}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-black/[0.04] flex-shrink-0">
        <p className="text-[11px] font-normal text-black/20">
          Baseado no projeto Bloom · Behance
        </p>
      </div>
    </aside>
  );
}
