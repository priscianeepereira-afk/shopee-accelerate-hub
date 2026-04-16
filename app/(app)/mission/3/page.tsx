"use client";

// Missão 3 — Ferramentas Prontas para Acelerar Suas Vendas
// Front-end only. Baseado em DESCRICAO DE TELAS/Mission3.md.

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Camera,
  Video,
  ImagePlus,
  TestTube,
  Sparkles,
  Layers,
  BarChart3,
  Lock,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface Tool {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
  comingSoon?: boolean;
}

const tools: Tool[] = [
  {
    id: "photo-ai",
    icon: Camera,
    title: "Gerador de Fotos com IA",
    desc: "Transforme fotos de fornecedor em imagens profissionais com fundo branco, lifestyle e variações para teste A/B.",
    tags: ["IA", "Fotos"],
  },
  {
    id: "video-ai",
    icon: Video,
    title: "Criador de Vídeos com IA",
    desc: "Gere vídeos curtos dos seus produtos para Shopee Vídeos, Reels e Stories automaticamente.",
    tags: ["IA", "Vídeos"],
  },
  {
    id: "image-editor",
    icon: ImagePlus,
    title: "Editor de Imagens para Anúncios",
    desc: "Adicione textos, selos de promoção e molduras às suas fotos de produto para aumentar a taxa de clique.",
    tags: ["Design", "Anúncios"],
  },
  {
    id: "category-test",
    icon: TestTube,
    title: "Teste de Categorias",
    desc: "Descubra quais categorias estão vendendo mais e cruze com os dados da sua loja para reposicionar produtos.",
    tags: ["Dados", "Categorias"],
  },
  {
    id: "title-optimizer",
    icon: Sparkles,
    title: "Otimizador de Títulos com IA",
    desc: "Gere títulos otimizados com palavras-chave de alto volume de busca na Shopee automaticamente.",
    tags: ["IA", "SEO"],
  },
  {
    id: "description-ai",
    icon: Layers,
    title: "Gerador de Descrições",
    desc: "Crie descrições persuasivas e completas para seus produtos com base nas melhores práticas da Shopee.",
    tags: ["IA", "Descrições"],
    comingSoon: true,
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Análise de Desempenho por Produto",
    desc: "Veja quais produtos estão performando melhor e receba sugestões de otimização baseadas em dados.",
    tags: ["Dados", "Relatórios"],
    comingSoon: true,
  },
];

export default function Mission3Page() {
  const router = useRouter();

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div
        className="rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40"
        style={{ minHeight: "720px", maxHeight: "calc(100vh - 7rem)" }}
      >
        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-[#fb923c]/80 mb-2">
            Missão 03
          </p>
          <h1 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">
            Ferramentas Prontas para Acelerar Suas Vendas
          </h1>
          <p className="text-[14px] font-normal text-black/35 mt-1 mb-6">
            Use recursos já configurados para vender mais, sem precisar entender nada técnico.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((t, i) => {
              const Icon = t.icon;
              const disabled = !!t.comingSoon;
              return (
                <motion.button
                  key={t.id}
                  type="button"
                  disabled={disabled}
                  onClick={() =>
                    !disabled && router.push(`/mission/3/tool/${t.id}`)
                  }
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className={`group text-left rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5 flex flex-col transition-all ${
                    disabled
                      ? "opacity-65 cursor-not-allowed"
                      : "hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-black/[0.08]"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      className="text-black/55"
                    />
                    {disabled && (
                      <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-normal bg-black/[0.03] text-black/40 border border-black/[0.05]">
                        <Lock size={9} strokeWidth={1.5} />
                        Em breve
                      </span>
                    )}
                  </div>
                  <h3 className="text-[15px] font-normal tracking-[-0.01em] text-black/85 mb-1.5">
                    {t.title}
                  </h3>
                  <p className="text-[13px] font-normal text-black/45 leading-[1.55] mb-4 flex-1">
                    {t.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {t.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-normal rounded-full px-2 py-0.5 bg-white/80 text-black/50 border border-black/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {!disabled && (
                      <ArrowRight
                        size={14}
                        strokeWidth={1.5}
                        className="text-black/30 transition-transform group-hover:translate-x-0.5"
                      />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
