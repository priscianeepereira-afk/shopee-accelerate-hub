"use client";

import { useState } from 'react';
import {
  LayoutDashboard, Share2, Package, TrendingUp,
  Users, Plug, Settings, Asterisk, ChevronDown,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard, Share2, Package, TrendingUp,
  Users, Plug, Settings,
};

interface SidebarItem {
  label: string;
  icon: string;
  active?: boolean;
  /** HEX da paleta para tint do icone + bg quando ativo */
  activeColor?: string;
  /** HEX mais escuro da mesma familia, usado no texto quando ativo */
  activeTextColor?: string;
}

interface BloomSidebarProps {
  items?: SidebarItem[];
  className?: string;
}

/**
 * Paleta Bloom mapeada por item.
 * Cada item ganha uma cor-familia (bg + icone) e uma variante escura para o texto,
 * seguindo o mesmo padrao do badge "Economize 20%" (bg cor/8% + texto cor escuro).
 */
const defaultItems: SidebarItem[] = [
  { label: 'Visao Geral',    icon: 'LayoutDashboard', active: true, activeColor: '#F15A5A', activeTextColor: '#B23838' },
  { label: 'Canais',         icon: 'Share2',                        activeColor: '#C8B8D8', activeTextColor: '#6B5A85' },
  { label: 'Produtos',       icon: 'Package',                       activeColor: '#F5C9A0', activeTextColor: '#A8692A' },
  { label: 'Margens',        icon: 'TrendingUp',                    activeColor: '#22C55E', activeTextColor: '#15803d' },
  { label: 'Clientes',       icon: 'Users',                         activeColor: '#E88E9E', activeTextColor: '#A13E53' },
  { label: 'Integracoes',    icon: 'Plug',                          activeColor: '#E8D5B5', activeTextColor: '#8A6B3A' },
  { label: 'Configuracoes',  icon: 'Settings',                      activeColor: '#D4A0A0', activeTextColor: '#8E5656' },
];

export function BloomSidebar({ items = defaultItems, className }: BloomSidebarProps) {
  const initialIdx = Math.max(0, items.findIndex((i) => i.active));
  const [activeIdx, setActiveIdx] = useState<number>(initialIdx);

  return (
    <aside
      className={cn(
        'w-[260px] h-full bg-white/80 backdrop-blur-xl border-r border-black/[0.04] flex flex-col overflow-y-auto',
        className
      )}
    >
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
              <p className="text-[13px] font-normal text-black/80">Meu Estudio</p>
              <p className="text-[11px] font-normal text-black/25">Bloom · synced now</p>
            </div>
          </div>
          <ChevronDown size={14} strokeWidth={1.6} className="text-black/25" />
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-3 space-y-1 overflow-y-auto">
        {items.map((item, idx) => {
          const Icon = iconMap[item.icon] || LayoutDashboard;
          const activeColor = item.activeColor ?? '#F15A5A';
          const activeTextColor = item.activeTextColor ?? activeColor;
          const isActive = idx === activeIdx;

          return (
            <button
              key={item.label}
              onClick={() => setActiveIdx(idx)}
              className={cn(
                'flex items-center gap-3 w-full px-3 py-2.5 rounded-[10px] text-[14px] tracking-[-0.01em] transition-all duration-200',
                !isActive && 'text-black/40 font-normal hover:bg-black/[0.02] hover:text-black/60',
                isActive && 'font-medium'
              )}
              style={
                isActive
                  ? { backgroundColor: `${activeColor}1A`, color: activeTextColor }
                  : undefined
              }
            >
              <div
                className="h-7 w-7 rounded-[7px] flex items-center justify-center transition-all duration-200"
                style={{
                  backgroundColor: isActive ? `${activeColor}33` : 'transparent',
                }}
              >
                <Icon
                  size={16}
                  strokeWidth={isActive ? 1.8 : 1.5}
                  style={{ color: isActive ? activeTextColor : undefined }}
                  className={cn(!isActive && 'text-black/30')}
                />
              </div>
              {item.label}
            </button>
          );
        })}
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
