"use client";

// Dashboard — Sua Jornada na Shopee (hub das 4 Missões)
// Front-end only. Baseado em DESCRICAO DE TELAS/Dashboard.md.
// Segue _PAGE_PATTERN.md: card unico englobando titulo + conteudo.

import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Rocket,
  Zap,
  Target,
  Crown,
  Lock,
  ChevronRight,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { avatarStyle } from "@/design-system/avatar-tokens";
import { podiumPositions } from "@/design-system/icon-tokens";

type Status = "EM ANDAMENTO" | "BLOQUEADA" | "CONCLUÍDA";

interface Mission {
  id: "1" | "2" | "3" | "4";
  number: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  status: Status;
  activeNote?: string;
}

const missions: Mission[] = [
  {
    id: "1",
    number: "01",
    icon: Rocket,
    title: "Sua Loja no Ar em 7 Dias",
    desc: "Configure sua loja e faça sua primeira venda com um plano simples e direto.",
    status: "EM ANDAMENTO",
    activeNote: "Você está a 3 passos de começar a vender todos os dias",
  },
  {
    id: "2",
    number: "02",
    icon: Zap,
    title: "Seu Plano de Ação para Vender nos Próximos 7 Dias",
    desc: "Receba um passo a passo personalizado com exatamente o que fazer, dia após dia, para destravar suas vendas.",
    status: "BLOQUEADA",
  },
  {
    id: "3",
    number: "03",
    icon: Target,
    title: "Ferramentas Prontas para Acelerar Suas Vendas",
    desc: "Use recursos já configurados para vender mais, sem precisar entender nada técnico.",
    status: "BLOQUEADA",
  },
  {
    id: "4",
    number: "04",
    icon: Crown,
    title: "Vire uma Vendedora Profissional na Shopee",
    desc: "Estruture sua operação, escale com previsibilidade e construa uma loja de verdade.",
    status: "BLOQUEADA",
  },
];

const topSellers = [
  { initials: "CM", name: "Carla M.", revenue: 12500 },
  { initials: "JT", name: "Juliana T.", revenue: 9800 },
  { initials: "FR", name: "Fernanda R.", revenue: 7600 },
];

function statusChip(status: Status) {
  if (status === "EM ANDAMENTO") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-normal bg-[#F5C9A0]/20 text-[#A8692A] border border-[#F5C9A0]/40">
        <span className="h-1.5 w-1.5 rounded-full bg-[#fb923c] animate-pulse" />
        Em andamento
      </span>
    );
  }
  if (status === "CONCLUÍDA") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-normal bg-[#22C55E]/[0.08] text-[#15803d] border border-[#22C55E]/10">
        Concluída
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-normal bg-black/[0.03] text-black/40 border border-black/[0.05]">
      <Lock size={10} strokeWidth={1.5} />
      Bloqueada
    </span>
  );
}

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div
        className="flex rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40"
        style={{ minHeight: "720px", maxHeight: "calc(100vh - 7rem)" }}
      >
        {/* ===== Coluna principal — Roteiro ===== */}
        <div className="flex-1 overflow-y-auto p-6">
          <h1 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">
            Sua Jornada na Shopee
          </h1>
          <p className="text-[14px] font-normal text-black/35 mt-1 mb-6">
            Execute cada missão e avance de iniciante a vendedora profissional — sem travar no caminho.
          </p>

          <div className="space-y-3">
            {missions.map((m, i) => {
              const Icon = m.icon;
              const blocked = m.status === "BLOQUEADA";
              return (
                <div key={m.id}>
                  <motion.button
                    type="button"
                    onClick={() => router.push(`/mission/${m.id}`)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    className={`group w-full rounded-[14px] border bg-[#FAF8F5] p-5 text-left transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-black/[0.08] ${
                      blocked ? "opacity-70" : ""
                    }`}
                    style={{
                      borderColor:
                        m.status === "EM ANDAMENTO"
                          ? "rgba(245,201,160,0.5)"
                          : "rgba(0,0,0,0.04)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Numero + icone */}
                      <div className="shrink-0 flex flex-col items-center gap-1">
                        <span className="text-[10px] font-normal tracking-[0.08em] text-black/25">
                          MISSÃO
                        </span>
                        <span className="text-[22px] font-medium text-black/85 tracking-[-0.02em]">
                          {m.number}
                        </span>
                        <Icon size={18} strokeWidth={1.5} className="text-black/40 mt-1" />
                      </div>

                      {/* Conteudo */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          {statusChip(m.status)}
                        </div>
                        <h3 className="text-[16px] font-normal tracking-[-0.01em] text-black/85 mb-1">
                          {m.title}
                        </h3>
                        <p className="text-[13px] font-normal text-black/45 leading-[1.55]">
                          {m.desc}
                        </p>
                        {m.activeNote && (
                          <p className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-normal text-[#A8692A]">
                            <ArrowRight size={11} strokeWidth={1.5} />
                            {m.activeNote}
                          </p>
                        )}
                      </div>

                      {/* Chevron */}
                      <ChevronRight
                        size={18}
                        strokeWidth={1.5}
                        className="text-black/25 mt-1 transition-transform group-hover:translate-x-0.5"
                      />
                    </div>
                  </motion.button>

                  {/* Seta entre missoes */}
                  {i < missions.length - 1 && (
                    <div className="flex justify-center py-1">
                      <span className="h-6 w-[1px] bg-black/[0.08]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== Coluna direita — Parabens + Top 3 ===== */}
        <aside className="w-[320px] shrink-0 border-l border-black/[0.04] overflow-y-auto p-6 space-y-5">
          {/* Parabens */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-[14px] border border-[#F5C9A0]/30 overflow-hidden relative"
            style={{
              background:
                "linear-gradient(165deg, rgba(245,201,160,0.35) 0%, rgba(221,214,238,0.30) 60%, rgba(242,196,204,0.25) 100%)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#fb923c]/60" />
            <div className="p-5">
              <p className="text-[11px] font-normal tracking-[0.08em] uppercase text-[#A8692A]/80 mb-2">
                Parabéns
              </p>
              <p className="text-[14px] font-normal text-black/75 leading-[1.55]">
                Em apenas{" "}
                <span className="font-medium text-[#A8692A]">7 dias</span> sua loja
                da Shopee estará no ar. Complete a Missão 1 e comece a vender!
              </p>
              <div className="mt-4 inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fb923c] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fb923c]" />
                </span>
                <span className="text-[11px] font-normal text-[#A8692A]">
                  Missão 1 em andamento
                </span>
              </div>
            </div>
          </motion.div>

          {/* Top 3 da Plataforma */}
          <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5">
            <h3 className="text-[14px] font-normal text-black/80">
              Top 3 da Plataforma
            </h3>
            <p className="text-[11px] font-normal text-black/30 mb-4">
              As que mais vendem na plataforma
            </p>

            <div className="space-y-2">
              {topSellers.map((s, i) => {
                const pos = podiumPositions[i];
                const PosIcon = pos.icon;
                return (
                  <div
                    key={s.initials}
                    className="flex items-center gap-3 p-2 rounded-[10px] hover:bg-black/[0.02] transition-colors"
                  >
                    <span
                      className="h-6 w-6 rounded-full inline-flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${pos.bg}50` }}
                    >
                      <PosIcon
                        size={12}
                        strokeWidth={1.5}
                        style={{ color: pos.text }}
                      />
                    </span>
                    <div
                      className="h-8 w-8 rounded-full flex items-center justify-center text-[11px] font-medium text-white shrink-0"
                      style={avatarStyle(s.initials, 1)}
                    >
                      {s.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] font-normal text-black/70 truncate">
                        {s.name}
                      </p>
                      <p className="text-[10px] font-normal text-black/30">
                        R$ {s.revenue.toLocaleString("pt-BR")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => router.push("/community")}
              className="mt-4 w-full inline-flex items-center justify-center gap-1 text-[12px] font-normal text-[#fb923c] hover:text-[#A8692A] transition-colors"
            >
              Ver ranking completo na Comunidade
              <ArrowRight size={12} strokeWidth={1.5} />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
