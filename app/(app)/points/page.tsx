"use client";

// Guia de Pontuação
// Front-end only. Baseado em DESCRICAO DE TELAS/PointsGuide.md.
// Usa primitivas Fase 0: PageShell, BackLink.

import {
  GraduationCap,
  Target,
  ShoppingBag,
  Star,
  Package,
  TrendingUp,
  MessageSquare,
  Wrench,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { PageShell } from "../_components/PageShell";
import { BackLink } from "../_components/BackLink";

interface PointAction {
  icon: LucideIcon;
  iconColor: string;
  label: string;
  pts: number;
}

const actions: PointAction[] = [
  { icon: GraduationCap, iconColor: "#C8B8D8", label: "Concluir uma aula", pts: 50 },
  { icon: Target, iconColor: "#F15A5A", label: "Completar uma Missão", pts: 500 },
  { icon: ShoppingBag, iconColor: "#22C55E", label: "Realizar uma venda na Shopee", pts: 100 },
  { icon: Star, iconColor: "#E8D5B5", label: "Receber avaliação 5 estrelas", pts: 80 },
  { icon: Package, iconColor: "#fb923c", label: "Cadastrar um produto na Shopee", pts: 30 },
  { icon: TrendingUp, iconColor: "#22C55E", label: "Atingir meta semanal de vendas", pts: 300 },
  { icon: MessageSquare, iconColor: "#C8B8D8", label: "Participar da comunidade", pts: 20 },
  { icon: Wrench, iconColor: "#D4A0A0", label: "Usar ferramenta de aceleração de vendas", pts: 150 },
];

const userPoints = 890;

export default function PointsPage() {
  return (
    <PageShell
      title="Como Aumentar sua Pontuação"
      subtitle="Cada ação dentro da plataforma e na Shopee gera pontos para você."
    >
      <BackLink to="/profile" label="Voltar para Meu Perfil" className="mb-6" />

      {/* Card de saldo */}
      <div
        className="rounded-[16px] border border-[#F5C9A0]/30 overflow-hidden relative p-6 mb-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(245,201,160,0.20) 0%, rgba(221,214,238,0.18) 60%, rgba(242,196,204,0.15) 100%)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#fb923c]/60" />
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-white/70 backdrop-blur-sm border border-[#F5C9A0]/40 flex items-center justify-center shrink-0">
            <Trophy size={20} strokeWidth={1.5} className="text-[#A8692A]" />
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-normal tracking-[0.08em] uppercase text-[#A8692A]/80 mb-1">
              Seu saldo
            </p>
            <p className="text-[32px] font-medium text-black/85 tracking-[-0.02em] leading-none tabular-nums">
              {userPoints.toLocaleString("pt-BR")}
              <span className="text-[16px] font-normal text-black/45 ml-2">pontos</span>
            </p>
            <p className="text-[13px] font-normal text-black/55 mt-2 leading-[1.55]">
              Continue evoluindo — cada ação na plataforma e na Shopee soma à sua pontuação.
            </p>
          </div>
        </div>
      </div>

      {/* Lista de acoes */}
      <p className="text-[11px] font-normal tracking-[0.08em] uppercase text-black/30 mb-3">
        Ações que geram pontos
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {actions.map((a) => {
          const Icon = a.icon;
          return (
            <div
              key={a.label}
              className="rounded-[12px] border border-black/[0.04] bg-[#FAF8F5] p-4 flex items-center gap-3"
            >
              <div
                className="h-9 w-9 rounded-[9px] flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${a.iconColor}22` }}
              >
                <Icon size={16} strokeWidth={1.5} style={{ color: a.iconColor }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-normal text-black/75 leading-[1.4]">
                  {a.label}
                </p>
              </div>
              <span className="text-[14px] font-medium text-[#15803d] tabular-nums shrink-0">
                +{a.pts}
                <span className="text-[10px] font-normal text-black/40 ml-1">pts</span>
              </span>
            </div>
          );
        })}
      </div>

      {/* Mensagem motivacional */}
      <div className="mt-6 rounded-[14px] border border-[#F15A5A]/15 bg-[#F15A5A]/[0.04] p-5">
        <p className="text-[13px] font-normal text-black/65 leading-[1.6]">
          <strong className="font-medium text-black/80">Use a Shopee para tudo:</strong>{" "}
          cada venda, avaliação e produto cadastrado gera pontuação aqui na plataforma.
        </p>
      </div>
    </PageShell>
  );
}
