import { ArrowLeft, Bell, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BloomButton } from './BloomButton';
import { BloomBadge } from './BloomBadge';
import { BloomAvatar } from './BloomAvatar';

/**
 * BloomAppHeader — header do app logado. Complementa o BloomAppSidebar.
 *
 * Linguagem visual reusa convencoes Bloom:
 * - h-16 (64px)
 * - bg-white/80 backdrop-blur-xl border-b border-black/[0.04] (padrao do BloomNavbar)
 * - Composicao de BloomButton, BloomBadge, BloomAvatar
 *
 * Estrutura: [Voltar (opcional)] <spacer> [Seja PRO] [divider] [Notif] [divider] [Avatar + nome + plano]
 */

export interface BloomAppHeaderUser {
  name: string;
  plan?: string; // ex: "GRATUITO"
  avatarUrl?: string;
}

export interface BloomAppHeaderProps {
  user?: BloomAppHeaderUser;
  notificationCount?: number; // >0 mostra indicador
  showBack?: boolean;
  onBack?: () => void;
  onProClick?: () => void;
  onNotificationsClick?: () => void;
  onAvatarClick?: () => void;
  className?: string;
}

function Divider() {
  return <div className="h-8 w-px bg-black/[0.06]" aria-hidden="true" />;
}

export function BloomAppHeader({
  user,
  notificationCount = 0,
  showBack,
  onBack,
  onProClick,
  onNotificationsClick,
  onAvatarClick,
  className,
}: BloomAppHeaderProps) {
  return (
    <header
      className={cn(
        'h-16 flex items-center justify-between px-6 bg-white/80 backdrop-blur-xl border-b border-black/[0.04]',
        className
      )}
    >
      {/* Esquerda: botao voltar opcional */}
      <div className="flex items-center">
        {showBack && (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[8px] text-[13px] font-normal text-black/50 hover:text-black/80 hover:bg-black/[0.02] transition-all duration-200"
          >
            <ArrowLeft size={16} strokeWidth={1.8} />
            Voltar
          </button>
        )}
      </div>

      {/* Direita */}
      <div className="flex items-center gap-3">
        <BloomButton
          variant="primary"
          size="sm"
          onClick={onProClick}
          className="gap-1.5"
        >
          <Crown size={14} strokeWidth={1.8} />
          Seja PRO
        </BloomButton>

        <Divider />

        <button
          type="button"
          onClick={onNotificationsClick}
          className="relative inline-flex items-center justify-center w-9 h-9 rounded-full text-black/50 hover:bg-black/[0.03] hover:text-black/80 transition-all duration-200"
          aria-label="Notificacoes"
        >
          <Bell size={18} strokeWidth={1.8} />
          {notificationCount > 0 && (
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#EF4444]" />
          )}
        </button>

        {user && (
          <>
            <Divider />
            <button
              type="button"
              onClick={onAvatarClick}
              className="flex items-center gap-2.5 pr-1 group"
            >
              <BloomAvatar name={user.name} size="sm" />
              <div className="hidden sm:flex flex-col items-start leading-tight">
                <span className="text-[13px] font-medium text-black/80 group-hover:text-black/90 transition-colors">
                  {user.name}
                </span>
                {user.plan && (
                  <BloomBadge variant="muted" className="mt-0.5">
                    {user.plan}
                  </BloomBadge>
                )}
              </div>
            </button>
          </>
        )}
      </div>
    </header>
  );
}
