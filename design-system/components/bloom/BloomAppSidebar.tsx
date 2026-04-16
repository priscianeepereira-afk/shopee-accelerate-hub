"use client";

import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BloomBadge } from './BloomBadge';

/**
 * BloomAppSidebar — sidebar do app logado.
 *
 * Linguagem visual sincronizada com o BloomSidebar (showcase):
 * - 260px, bg white/80 + backdrop-blur, border-r black/[0.04]
 * - Cada item pode ter activeColor + activeTextColor da paleta Bloom.
 * - Quando ativo: bg = activeColor a ~10%, icone em container tint ~20%, texto
 *   na variante escura da mesma familia (padrao do badge "Economize 20%").
 */

export type BloomAppSidebarBadgeVariant =
  | 'default'
  | 'brand'
  | 'success'
  | 'danger'
  | 'warning'
  | 'muted';

export interface BloomAppSidebarSubItem {
  label: string;
  path: string;
}

export interface BloomAppSidebarItem {
  label: string;
  path: string;
  icon?: LucideIcon;
  badge?: { text: string; variant?: BloomAppSidebarBadgeVariant };
  subItems?: BloomAppSidebarSubItem[];
  /** HEX da paleta — tint do icone + bg quando ativo */
  activeColor?: string;
  /** HEX mais escuro da mesma familia — texto quando ativo */
  activeTextColor?: string;
}

export interface BloomAppSidebarSection {
  title?: string;
  items: BloomAppSidebarItem[];
}

export interface BloomAppSidebarProps {
  logo?: React.ReactNode;
  sections: BloomAppSidebarSection[];
  footerItem?: BloomAppSidebarItem;
  currentPath: string;
  onNavigate: (path: string) => void;
  className?: string;
}

const activePaths = (currentPath: string) => (path: string) => {
  if (path === currentPath) return true;
  if (path === '/') return false;
  return currentPath.startsWith(path + '/');
};

export function BloomAppSidebar({
  logo,
  sections,
  footerItem,
  currentPath,
  onNavigate,
  className,
}: BloomAppSidebarProps) {
  const isActive = activePaths(currentPath);

  const renderItem = (item: BloomAppSidebarItem) => {
    const active = isActive(item.path);
    const anySubActive = item.subItems?.some((s) => isActive(s.path)) ?? false;
    const expanded = active || anySubActive;
    const Icon = item.icon;

    const activeColor = item.activeColor ?? '#F15A5A';
    const activeTextColor = item.activeTextColor ?? '#B23838';
    const showActive = active || anySubActive;

    return (
      <div key={item.path}>
        <button
          type="button"
          onClick={() => onNavigate(item.path)}
          className={cn(
            'flex items-center gap-3 w-full px-3 py-2.5 rounded-[10px] text-[14px] tracking-[-0.01em] transition-all duration-200',
            !showActive && 'text-black/40 font-normal hover:bg-black/[0.02] hover:text-black/60',
            showActive && 'font-medium'
          )}
          style={
            showActive
              ? { backgroundColor: `${activeColor}1A`, color: activeTextColor }
              : undefined
          }
        >
          {Icon && (
            <div
              className="h-7 w-7 rounded-[7px] flex items-center justify-center transition-all duration-200 flex-shrink-0"
              style={{
                backgroundColor: showActive ? `${activeColor}33` : 'transparent',
              }}
            >
              <Icon
                size={16}
                strokeWidth={showActive ? 1.8 : 1.5}
                style={{ color: showActive ? activeTextColor : undefined }}
                className={cn(!showActive && 'text-black/30')}
              />
            </div>
          )}
          <span className="flex-1 text-left whitespace-nowrap truncate">{item.label}</span>
          {item.badge && (
            <BloomBadge variant={item.badge.variant ?? 'default'}>
              {item.badge.text}
            </BloomBadge>
          )}
        </button>

        {expanded && item.subItems && item.subItems.length > 0 && (
          <div className="mt-0.5 space-y-0.5">
            {item.subItems.map((sub) => {
              const subActive = isActive(sub.path);
              return (
                <button
                  key={sub.path}
                  type="button"
                  onClick={() => onNavigate(sub.path)}
                  className={cn(
                    'flex items-center w-full pl-11 pr-3 py-1.5 rounded-[8px] text-[13px] font-normal transition-all duration-200 text-left',
                    subActive
                      ? 'font-medium'
                      : 'text-black/35 hover:text-black/60'
                  )}
                  style={subActive ? { color: activeTextColor } : undefined}
                >
                  {sub.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={cn(
        'w-[260px] bg-white/80 backdrop-blur-xl border-r border-black/[0.04] h-full flex flex-col',
        className
      )}
    >
      {/* Logo slot */}
      {logo !== undefined && (
        <div className="flex items-center px-5 h-16 border-b border-black/[0.04] flex-shrink-0">
          {logo}
        </div>
      )}

      {/* Secoes */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {sections.map((section, idx) => (
          <div key={section.title ?? idx} className={idx > 0 ? 'mt-5' : ''}>
            {section.title && (
              <p className="px-3 mb-2 text-[10px] font-normal tracking-[0.1em] text-black/25 uppercase">
                {section.title}
              </p>
            )}
            <div className="space-y-1">
              {section.items.map((item) => renderItem(item))}
            </div>
          </div>
        ))}
      </nav>

      {/* Item fixo no rodape */}
      {footerItem && (
        <div className="px-3 py-3 border-t border-black/[0.04] flex-shrink-0">
          {renderItem(footerItem)}
        </div>
      )}
    </aside>
  );
}
