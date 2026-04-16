"use client";

// Central de Notificações
// Front-end only. Baseado em DESCRICAO DE TELAS/Notifications.md.
// Usa primitivas Fase 0: PageShell, StatusPill.

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Factory,
  Target,
  Megaphone,
  Trophy,
  Sparkles,
  Wallet,
  Package,
  AlertTriangle,
  CheckCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { PageShell } from "../_components/PageShell";
import { StatusPill } from "../_components/StatusPill";

type TabKey = "platform" | "supplier";

interface Notif {
  icon: LucideIcon;
  iconColor: string;
  isNew: boolean;
  title: string;
  desc: string;
  time: string;
  cta: string;
  path: string;
}

const platformNotifs: Notif[] = [
  {
    icon: Factory,
    iconColor: "#C8B8D8",
    isNew: true,
    title: "Novo fornecedor disponível!",
    desc: "SportPro Atacado acaba de entrar na plataforma. Confira o catálogo!",
    time: "há 2 horas",
    cta: "Ver Fornecedor",
    path: "/suppliers",
  },
  {
    icon: Target,
    iconColor: "#F15A5A",
    isNew: true,
    title: "Missão 2 desbloqueada!",
    desc: "Parabéns! Você completou a Missão 1. A Missão 2 está liberada para você.",
    time: "há 1 dia",
    cta: "Acessar Missão 2",
    path: "/mission/2",
  },
  {
    icon: Megaphone,
    iconColor: "#fb923c",
    isNew: true,
    title: "Novas ferramentas disponíveis!",
    desc: "Adicionamos o Gerador de Fotos com IA e o Otimizador de Títulos. Experimente agora!",
    time: "há 2 dias",
    cta: "Ver Ferramentas",
    path: "/mission/3",
  },
  {
    icon: Trophy,
    iconColor: "#E8D5B5",
    isNew: false,
    title: "Você subiu no ranking!",
    desc: "Você passou para a 12ª posição. Continue usando a Shopee para ganhar mais pontos!",
    time: "há 3 dias",
    cta: "Ver Ranking",
    path: "/dashboard",
  },
];

const supplierNotifs: Notif[] = [
  {
    icon: Sparkles,
    iconColor: "#22C55E",
    isNew: true,
    title: "ForneceMais atualizou o catálogo",
    desc: "3 novos produtos foram adicionados ao catálogo da ForneceMais Distribuidora.",
    time: "há 3 horas",
    cta: "Ver Catálogo",
    path: "/suppliers/1",
  },
  {
    icon: Wallet,
    iconColor: "#F5C9A0",
    isNew: true,
    title: "Promoção especial do fornecedor",
    desc: "TechDrop Brasil está com 15% de desconto em gadgets por tempo limitado!",
    time: "há 5 horas",
    cta: "Aproveitar Oferta",
    path: "/suppliers/2",
  },
  {
    icon: Package,
    iconColor: "#C8B8D8",
    isNew: false,
    title: "Pedido ao fornecedor atualizado",
    desc: "Seu pedido #F-0892 junto à ForneceMais foi confirmado e está em separação.",
    time: "há 1 dia",
    cta: "Ver Pedido",
    path: "/store",
  },
  {
    icon: AlertTriangle,
    iconColor: "#F59E0B",
    isNew: false,
    title: "Produto com estoque baixo",
    desc: "O produto 'Conjunto Fitness Feminino' da ForneceMais está com estoque baixo (12 un).",
    time: "há 2 dias",
    cta: "Repor Estoque",
    path: "/suppliers/1",
  },
];

function NotifCard({ n }: { n: Notif }) {
  const router = useRouter();
  const Icon = n.icon;
  return (
    <div
      className={`rounded-[14px] border bg-[#FAF8F5] p-5 transition-all hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] ${
        n.isNew ? "border-l-2" : "border-black/[0.04]"
      }`}
      style={n.isNew ? { borderColor: `${n.iconColor}50`, borderLeftColor: n.iconColor } : undefined}
    >
      <div className="flex items-start gap-4">
        <Icon
          size={22}
          strokeWidth={1.5}
          style={{ color: n.iconColor }}
          className="shrink-0 mt-0.5"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-1.5 flex-wrap">
            <h3 className="text-[14px] font-medium tracking-[-0.01em] text-black/85">
              {n.title}
            </h3>
            <div className="flex items-center gap-2 shrink-0">
              {n.isNew && <StatusPill variant="coral">Novo</StatusPill>}
              <span className="text-[11px] font-normal text-black/30">{n.time}</span>
            </div>
          </div>
          <p className="text-[13px] font-normal text-black/55 leading-[1.55] mb-3">
            {n.desc}
          </p>
          <button
            type="button"
            onClick={() => router.push(n.path)}
            className="group inline-flex items-center gap-1.5 text-[12px] font-normal text-[#fb923c] hover:text-[#A8692A] transition-colors"
          >
            {n.cta}
            <ArrowRight
              size={12}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NotificationsPage() {
  const [tab, setTab] = useState<TabKey>("platform");
  const data = tab === "platform" ? platformNotifs : supplierNotifs;
  const newCount = data.filter((n) => n.isNew).length;

  return (
    <PageShell title="Central de Notificações">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        {/* Tabs */}
        <div className="inline-flex items-center gap-1 rounded-full bg-black/[0.03] p-1">
          {(
            [
              { key: "platform" as const, label: "Plataforma" },
              { key: "supplier" as const, label: "Fornecedor" },
            ]
          ).map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-normal transition-colors ${
                  active
                    ? "bg-white text-black/85 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                    : "text-black/50 hover:text-black/70"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="inline-flex items-center gap-3">
          <span className="text-[12px] font-normal text-black/40">
            {newCount} {newCount === 1 ? "nova" : "novas"}
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-[12px] font-normal text-black/55 hover:text-black/75 transition-colors"
          >
            <CheckCheck size={13} strokeWidth={1.5} />
            Marcar todas como lidas
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {data.map((n, i) => (
          <NotifCard key={`${tab}-${i}`} n={n} />
        ))}
      </div>
    </PageShell>
  );
}
