"use client";

// Missão 1 — Sua Loja no Ar em 7 Dias
// Front-end only. Baseado em DESCRICAO DE TELAS/Mission1.md.

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Factory,
  Package,
  Coins,
  Lock,
  PlayCircle,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type LessonStatus = "CONCLUÍDA" | "EM ANDAMENTO" | "BLOQUEADA";

interface Lesson {
  id: number;
  icon: LucideIcon;
  title: string;
  desc: string;
  status: LessonStatus;
  extra?: { label: string; path: string };
}

const lessons: Lesson[] = [
  {
    id: 1,
    icon: ClipboardList,
    title: "Aula 1 — Credenciamento na Shopee",
    desc: "Aprenda o passo a passo para criar e verificar sua conta de vendedor na Shopee.",
    status: "CONCLUÍDA",
  },
  {
    id: 2,
    icon: Factory,
    title: "Aula 2 — Escolhendo seu Fornecedor",
    desc: "Descubra como encontrar os melhores fornecedores para o seu nicho.",
    status: "EM ANDAMENTO",
    extra: { label: "Encontrar meu Fornecedor", path: "/suppliers" },
  },
  {
    id: 3,
    icon: Package,
    title: "Aula 3 — Publicando seus Produtos",
    desc: "Aprenda a cadastrar produtos e publicar na Shopee direto desta plataforma.",
    status: "BLOQUEADA",
    extra: { label: "Cadastrar Produto na Shopee", path: "/product/register" },
  },
  {
    id: 4,
    icon: Coins,
    title: "Aula 4 — Vendendo",
    desc: "Estratégias práticas para conseguir suas primeiras vendas.",
    status: "BLOQUEADA",
  },
];

function statusBadge(status: LessonStatus) {
  if (status === "CONCLUÍDA") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-normal bg-[#22C55E]/[0.08] text-[#15803d] border border-[#22C55E]/10">
        Concluída
      </span>
    );
  }
  if (status === "EM ANDAMENTO") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-normal bg-[#F5C9A0]/20 text-[#A8692A] border border-[#F5C9A0]/40">
        Em andamento
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-normal bg-black/[0.03] text-black/40 border border-black/[0.05]">
      <Lock size={9} strokeWidth={1.5} />
      Bloqueada
    </span>
  );
}

export default function Mission1Page() {
  const router = useRouter();

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div
        className="rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40"
        style={{ minHeight: "720px", maxHeight: "calc(100vh - 7rem)" }}
      >
        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-[#fb923c]/80 mb-2">
            Missão 01
          </p>
          <h1 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">
            Sua Loja no Ar em 7 Dias
          </h1>
          <p className="text-[14px] font-normal text-black/35 mt-1 mb-6">
            Configure sua loja e faça sua primeira venda com um plano simples e direto.
          </p>

          {/* Grid de aulas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lessons.map((l, i) => {
              const Icon = l.icon;
              const blocked = l.status === "BLOQUEADA";
              return (
                <motion.div
                  key={l.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className={`rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5 flex flex-col ${
                    blocked ? "opacity-65" : ""
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-black/55 shrink-0 mt-0.5"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="mb-1.5">{statusBadge(l.status)}</div>
                      <h3 className="text-[15px] font-normal tracking-[-0.01em] text-black/85 mb-1.5">
                        {l.title}
                      </h3>
                      <p className="text-[13px] font-normal text-black/45 leading-[1.55]">
                        {l.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4 flex-wrap">
                    <button
                      type="button"
                      onClick={() => router.push(`/lesson/1/${l.id}`)}
                      className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-normal bg-[#fb923c]/15 text-[#A8692A] border border-[#fb923c]/25 hover:bg-[#fb923c]/25 transition-colors"
                    >
                      <PlayCircle size={13} strokeWidth={1.5} />
                      Assistir Aula
                    </button>
                    {l.extra && (
                      <button
                        type="button"
                        onClick={() => router.push(l.extra!.path)}
                        className="inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-[12px] font-normal text-black/55 border border-black/[0.08] hover:bg-black/[0.02] transition-colors"
                      >
                        {l.extra.label}
                        <ArrowRight size={12} strokeWidth={1.5} />
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
