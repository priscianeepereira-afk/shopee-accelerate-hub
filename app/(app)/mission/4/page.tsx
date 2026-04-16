"use client";

// Missão 4 — Vire uma Vendedora Profissional na Shopee
// Front-end only. Baseado em DESCRICAO DE TELAS/Mission4.md.

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Target,
  Wallet,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
  cta: string;
  path: string;
}

const pillars: Pillar[] = [
  {
    icon: GraduationCap,
    title: "Próximos Passos",
    desc: "Aulas sobre CNPJ, contabilidade, nota fiscal com Bling e como escalar sua operação.",
    bullets: [
      "Abertura de CNPJ",
      "Contabilidade indicada",
      "Nota fiscal com Bling",
      "Preparação para escala",
    ],
    cta: "Ver Próximos Passos",
    path: "/proximos-passos",
  },
  {
    icon: Target,
    title: "Shopee Ads — Painel Inteligente",
    desc: "Saiba exatamente qual produto anunciar com base na taxa de conversão, não no volume de vendas.",
    bullets: [
      "Produto ideal para anunciar",
      "Gestão de campanhas",
      "ROAS e CPC em tempo real",
      "Recomendações automáticas",
    ],
    cta: "Acessar Shopee Ads",
    path: "/shopee-ads",
  },
  {
    icon: Wallet,
    title: "Finanças — Lucro Real",
    desc: "Visualize seu lucro real com todas as deduções: comissão, impostos, ads e custo de produtos.",
    bullets: [
      "Faturamento líquido real",
      "Configuração CPF ou CNPJ",
      "ROAS, CPA e ROI",
      "Vendas pendentes e canceladas",
    ],
    cta: "Acessar Finanças",
    path: "/financas",
  },
];

export default function Mission4Page() {
  const router = useRouter();

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div
        className="rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40"
        style={{ minHeight: "720px", maxHeight: "calc(100vh - 7rem)" }}
      >
        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-[#fb923c]/80 mb-2">
            Missão 04
          </p>
          <h1 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">
            Vire uma Vendedora Profissional na Shopee
          </h1>
          <p className="text-[14px] font-normal text-black/35 mt-1 mb-6">
            Estruture sua operação, escale com previsibilidade e construa uma loja de verdade.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-6 flex flex-col"
                >
                  <Icon size={26} strokeWidth={1.5} className="text-black/55 mb-4" />
                  <h3 className="text-[16px] font-normal tracking-[-0.01em] text-black/85 mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-[13px] font-normal text-black/45 leading-[1.55] mb-5">
                    {p.desc}
                  </p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check
                          size={14}
                          strokeWidth={2}
                          className="text-[#22C55E] shrink-0 mt-0.5"
                        />
                        <span className="text-[12px] font-normal text-black/60 leading-[1.5]">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => router.push(p.path)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-normal bg-[#fb923c]/15 text-[#A8692A] border border-[#fb923c]/25 hover:bg-[#fb923c]/25 transition-colors"
                  >
                    {p.cta}
                    <ArrowRight size={13} strokeWidth={1.5} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
