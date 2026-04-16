"use client";

// Missão 2 — Seu Plano de Ação para Vender nos Próximos 7 Dias
// Front-end only. Baseado em DESCRICAO DE TELAS/Mission2.md.
// State machine: onboarding → strategy → analyzing → plan.
// Persistencia em localStorage (mission2_diagnostic) — sem API.

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Target,
  Rocket,
  Zap,
  BarChart3,
  Sparkles,
  CalendarDays,
  Lock,
  Circle,
  CheckCircle2,
  ArrowRight,
  Pencil,
  Camera,
  FileText,
  Ticket,
  Smartphone,
  Star,
  Clapperboard,
  Package,
  type LucideIcon,
} from "lucide-react";

type Phase = "onboarding" | "strategy" | "analyzing" | "plan";
type StoreAge = "new" | "established" | null;
type Strategy = "organic" | "traffic" | "hybrid" | null;

interface PlanTask {
  day: number;
  iconKey: string;
  title: string;
  desc: string;
}

interface GeneratedPlan {
  mode: string;
  focusLabel: string;
  planTitle: string;
  tasks: PlanTask[];
}

interface StoredDiagnostic {
  plan: GeneratedPlan;
  createdAt: string;
  completedTasks: number[];
}

const STORAGE_KEY = "mission2_diagnostic";

// Mapeamento emoji → lucide (sem emoji de UI)
const taskIconMap: Record<string, LucideIcon> = {
  title: Pencil,
  photo: Camera,
  text: FileText,
  coupon: Ticket,
  social: Smartphone,
  star: Star,
  chart: BarChart3,
  video: Clapperboard,
  package: Package,
};

// ============ Geracao do plano ============

function generatePlan(storeAge: StoreAge, strategy: Strategy): GeneratedPlan {
  if (storeAge === "new") {
    return {
      mode: "Modo Inicial",
      focusLabel: "Boas Práticas para Lojas Novas",
      planTitle: "Plano 7 Dias — Boas Práticas Iniciais",
      tasks: [
        { day: 1, iconKey: "title", title: "Otimize títulos com palavras-chave", desc: "Reescrever títulos dos 3 principais produtos com palavras-chave de alto volume." },
        { day: 2, iconKey: "photo", title: "Atualize fotos com fundo branco", desc: "Pelo menos 5 fotos por anúncio com fundo branco." },
        { day: 3, iconKey: "text", title: "Melhore as descrições", desc: "Destaque benefícios, medidas e diferenciais." },
        { day: 4, iconKey: "coupon", title: "Configure cupom de boas-vindas", desc: "Cupom exclusivo para novos seguidores." },
        { day: 5, iconKey: "social", title: "Divulgue no Instagram", desc: "3 posts com link direto para a Shopee." },
        { day: 6, iconKey: "star", title: "Peça avaliações", desc: "Mensagem para últimos compradores pedindo avaliação com foto." },
        { day: 7, iconKey: "chart", title: "Analise e ajuste", desc: "Revise métricas da semana e ajuste o que precisar." },
      ],
    };
  }
  if (strategy === "traffic") {
    return {
      mode: "Modo Inteligente",
      focusLabel: "Foco em Tráfego Orgânico",
      planTitle: "Plano 7 Dias — Foco em Tráfego",
      tasks: [
        { day: 1, iconKey: "social", title: "Crie 3 Reels no Instagram", desc: "Vídeos curtos (15-30s) mostrando o produto em uso." },
        { day: 2, iconKey: "video", title: "Publique no Shopee Vídeos", desc: "Pelo menos 2 vídeos com legendas e produtos marcados." },
        { day: 3, iconKey: "social", title: "Stories diários com produtos", desc: "5 stories com enquetes e links diretos." },
        { day: 4, iconKey: "title", title: "Otimize títulos para busca", desc: "Pesquise palavras-chave e reescreva os títulos." },
        { day: 5, iconKey: "coupon", title: "Cupom de seguidor", desc: "Crie cupom exclusivo para seguidores novos." },
        { day: 6, iconKey: "photo", title: "Carrossel de produtos", desc: "5 produtos mais atrativos em carrossel no Instagram." },
        { day: 7, iconKey: "chart", title: "Analise tráfego da semana", desc: "Compare visualizações e identifique a melhor fonte." },
      ],
    };
  }
  if (strategy === "hybrid") {
    return {
      mode: "Modo Inteligente",
      focusLabel: "Estratégia Híbrida — Conteúdo + Conversão",
      planTitle: "Plano 7 Dias — Estratégia Híbrida",
      tasks: [
        { day: 1, iconKey: "title", title: "Reescreva títulos atrativos", desc: "Títulos com benefício claro e palavras-chave." },
        { day: 2, iconKey: "photo", title: "Nova foto principal", desc: "Foto de capa de alta qualidade que converta." },
        { day: 3, iconKey: "social", title: "Crie 3 Reels no Instagram", desc: "Vídeos curtos mostrando o produto." },
        { day: 4, iconKey: "coupon", title: "Cupom de urgência 48h", desc: "Cupom com validade curta para gerar urgência." },
        { day: 5, iconKey: "video", title: "Vídeo do produto em ação", desc: "Grave vídeo mostrando uso real do produto." },
        { day: 6, iconKey: "star", title: "Solicite avaliações com foto", desc: "Mensagem gentil pedindo avaliação com foto." },
        { day: 7, iconKey: "chart", title: "Analise resultados da semana", desc: "Veja o que funcionou melhor e dobre a aposta." },
      ],
    };
  }
  // organic (default para established)
  return {
    mode: "Modo Inteligente",
    focusLabel: "Foco em Conversão Orgânica",
    planTitle: "Plano 7 Dias — Foco em Conversão",
    tasks: [
      { day: 1, iconKey: "text", title: "Reescreva descrições", desc: "Destaque benefícios, medidas e diferenciais em cada produto." },
      { day: 2, iconKey: "video", title: "Vídeo do produto em ação", desc: "Grave vídeo curto mostrando o produto em uso." },
      { day: 3, iconKey: "coupon", title: "Cupom de urgência", desc: "Cupom com validade 48h para gerar urgência." },
      { day: 4, iconKey: "star", title: "Responda todas as avaliações", desc: "Responda todas as avaliações, positivas e negativas." },
      { day: 5, iconKey: "photo", title: "Fotos com contexto", desc: "Fotos mostrando o produto em uso ou ambientado." },
      { day: 6, iconKey: "package", title: "Ofereça frete grátis", desc: "Ative frete grátis nos 3-5 produtos com melhor margem." },
      { day: 7, iconKey: "chart", title: "Revise taxa de conversão", desc: "Identifique gargalos e priorize melhorias." },
    ],
  };
}

// ============ Storage helpers ============

function readDiagnostic(): StoredDiagnostic | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function writeDiagnostic(d: StoredDiagnostic) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
}

function clearDiagnostic() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

function daysRemaining(createdAt: string): number {
  const elapsed = (Date.now() - new Date(createdAt).getTime()) / 86400000;
  return Math.max(0, 7 - Math.floor(elapsed));
}

// ============ Pagina ============

export default function Mission2Page() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("onboarding");
  const [storeAge, setStoreAge] = useState<StoreAge>(null);
  const [strategy, setStrategy] = useState<Strategy>(null);
  const [plan, setPlan] = useState<GeneratedPlan | null>(null);
  const [completed, setCompleted] = useState<number[]>([]);
  const [createdAt, setCreatedAt] = useState<string>("");

  // Carrega plano do localStorage no mount
  useEffect(() => {
    const d = readDiagnostic();
    if (d) {
      setPlan(d.plan);
      setCompleted(d.completedTasks ?? []);
      setCreatedAt(d.createdAt);
      setPhase("plan");
    }
  }, []);

  // Loader → Plan após 3s
  useEffect(() => {
    if (phase !== "analyzing") return;
    const t = setTimeout(() => {
      const p = generatePlan(storeAge, strategy);
      const now = new Date().toISOString();
      writeDiagnostic({ plan: p, createdAt: now, completedTasks: [] });
      setPlan(p);
      setCreatedAt(now);
      setCompleted([]);
      setPhase("plan");
    }, 3000);
    return () => clearTimeout(t);
  }, [phase, storeAge, strategy]);

  const toggleDay = (day: number) => {
    setCompleted((prev) => {
      const next = prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day];
      if (plan) {
        writeDiagnostic({ plan, createdAt, completedTasks: next });
      }
      return next;
    });
  };

  const resetDiagnostic = () => {
    clearDiagnostic();
    setPlan(null);
    setCompleted([]);
    setStoreAge(null);
    setStrategy(null);
    setCreatedAt("");
    setPhase("onboarding");
  };

  const progress = plan ? Math.round((completed.length / 7) * 100) : 0;
  const cooldownDays = createdAt ? daysRemaining(createdAt) : 0;
  const canRequestNew = cooldownDays === 0;

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div
        className="rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40"
        style={{ minHeight: "720px", maxHeight: "calc(100vh - 7rem)" }}
      >
        <div className="flex-1 overflow-y-auto p-6">
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="inline-flex items-center gap-1.5 text-[12px] font-normal text-black/40 hover:text-black/60 transition-colors mb-4"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Voltar para Missões
          </button>

          <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-[#fb923c]/80 mb-2">
            Missão 02
          </p>
          <h1 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">
            Seu Plano de Ação para Vender nos Próximos 7 Dias
          </h1>
          <p className="text-[14px] font-normal text-black/35 mt-1 mb-6">
            Receba um passo a passo personalizado com exatamente o que fazer, dia após dia, para destravar suas vendas.
          </p>

          <AnimatePresence mode="wait">
            {/* ===== Onboarding ===== */}
            {phase === "onboarding" && (
              <motion.div
                key="onboarding"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Como funciona */}
                <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-6">
                  <h3 className="text-[15px] font-normal tracking-[-0.01em] text-black/85">
                    Como funciona?
                  </h3>
                  <p className="text-[13px] font-normal text-black/45 mt-1 mb-5">
                    Em 3 passos simples, você recebe um plano prático e personalizado.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        step: "Passo 1",
                        icon: Clock,
                        title: "Informe o tempo de loja",
                        desc: "Diga há quantos dias sua loja está ativa na Shopee para calibrar a análise.",
                      },
                      {
                        step: "Passo 2",
                        icon: Target,
                        title: "Escolha sua estratégia",
                        desc: "Selecione o tipo de estratégia: 100% orgânica, tráfego ou híbrida.",
                      },
                      {
                        step: "Passo 3",
                        icon: Rocket,
                        title: "Receba seu plano de 7 dias",
                        desc: "A IA gera um plano prático e personalizado direto para o seu perfil.",
                      },
                    ].map(({ step, icon: Icon, title, desc }) => (
                      <div
                        key={step}
                        className="rounded-[12px] border border-black/[0.04] bg-white/60 p-4"
                      >
                        <p className="text-[10px] font-normal tracking-[0.08em] uppercase text-black/30 mb-2">
                          {step}
                        </p>
                        <Icon size={18} strokeWidth={1.5} className="text-black/55 mb-2" />
                        <p className="text-[13px] font-normal text-black/80 mb-1">{title}</p>
                        <p className="text-[12px] font-normal text-black/40 leading-[1.5]">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tempo de loja */}
                <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock size={16} strokeWidth={1.5} className="text-black/55" />
                    <h3 className="text-[15px] font-normal tracking-[-0.01em] text-black/85">
                      Há quanto tempo sua loja está ativa na Shopee?
                    </h3>
                  </div>
                  <p className="text-[13px] font-normal text-black/45 mb-4">
                    Isso nos ajuda a calibrar a análise e gerar o plano mais adequado para o seu momento.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setStoreAge("new");
                        setPhase("analyzing");
                      }}
                      className="text-left rounded-[12px] border border-black/[0.04] bg-white/60 p-5 hover:border-[#fb923c]/40 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all"
                    >
                      <p className="text-[14px] font-normal text-black/85 mb-1">
                        Menos de 7 dias
                      </p>
                      <p className="text-[12px] font-normal text-black/45 leading-[1.55]">
                        Minha loja é nova ou ainda não tenho vendas suficientes para análise.
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setStoreAge("established");
                        setPhase("strategy");
                      }}
                      className="text-left rounded-[12px] border border-black/[0.04] bg-white/60 p-5 hover:border-[#fb923c]/40 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all"
                    >
                      <p className="text-[14px] font-normal text-black/85 mb-1">
                        7 dias ou mais
                      </p>
                      <p className="text-[12px] font-normal text-black/45 leading-[1.55]">
                        Já tenho dados de vendas e quero um plano baseado nas minhas métricas reais.
                      </p>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ===== Strategy ===== */}
            {phase === "strategy" && (
              <motion.div
                key="strategy"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-6"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Target size={16} strokeWidth={1.5} className="text-black/55" />
                  <h3 className="text-[15px] font-normal tracking-[-0.01em] text-black/85">
                    Qual estratégia você quer seguir?
                  </h3>
                </div>
                <p className="text-[13px] font-normal text-black/45 mb-4">
                  Escolha o tipo de abordagem para o seu plano de 7 dias.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    {
                      key: "organic" as Strategy,
                      icon: Zap,
                      title: "100% Orgânica",
                      desc: "Sem nenhum investimento financeiro. Foco em otimização de conteúdo, fotos e descrições.",
                      recommended: true,
                    },
                    {
                      key: "traffic" as Strategy,
                      icon: BarChart3,
                      title: "Foco em Tráfego",
                      desc: "Estratégias para atrair mais visitantes via Instagram, Shopee Vídeos e redes sociais.",
                    },
                    {
                      key: "hybrid" as Strategy,
                      icon: Sparkles,
                      title: "Híbrida",
                      desc: "Combina otimização de conteúdo com estratégias de tráfego orgânico e conversão.",
                    },
                  ].map(({ key, icon: Icon, title, desc, recommended }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setStrategy(key);
                        setPhase("analyzing");
                      }}
                      className="relative text-left rounded-[12px] border border-black/[0.04] bg-white/60 p-5 hover:border-[#fb923c]/40 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all"
                    >
                      {recommended && (
                        <span className="absolute top-3 right-3 text-[9px] font-normal tracking-[0.06em] uppercase rounded-full px-2 py-0.5 bg-[#22C55E]/[0.08] text-[#15803d] border border-[#22C55E]/10">
                          Recomendado
                        </span>
                      )}
                      <Icon size={18} strokeWidth={1.5} className="text-black/55 mb-3" />
                      <p className="text-[14px] font-normal text-black/85 mb-1">{title}</p>
                      <p className="text-[12px] font-normal text-black/45 leading-[1.55]">
                        {desc}
                      </p>
                    </button>
                  ))}
                </div>

                <p className="text-[11px] font-normal text-black/30 mt-4">
                  * Todas as estratégias são 100% orgânicas. Nunca recomendamos anúncios pagos, troca de produto ou redução de preço.
                </p>
              </motion.div>
            )}

            {/* ===== Analyzing ===== */}
            {phase === "analyzing" && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-12 text-center"
              >
                <div className="relative inline-flex items-center justify-center mb-5">
                  <span className="absolute inline-flex h-16 w-16 rounded-full bg-[#fb923c]/20 animate-ping" />
                  <span className="relative inline-flex h-16 w-16 rounded-full bg-[#fb923c]/10 items-center justify-center border border-[#fb923c]/30">
                    <Sparkles size={24} strokeWidth={1.5} className="text-[#fb923c]" />
                  </span>
                </div>
                <h3 className="text-[18px] font-normal tracking-[-0.01em] text-black/85">
                  IA gerando seu plano personalizado...
                </h3>
                <p className="text-[13px] font-normal text-black/45 mt-2 max-w-[440px] mx-auto">
                  Criando um plano de 7 dias com estratégias 100% orgânicas adaptadas ao seu perfil.
                </p>
                <div className="flex items-center justify-center gap-2 mt-5 flex-wrap">
                  {["Conteúdo", "Fotos", "Cupons", "Tráfego"].map((label, i) => (
                    <motion.span
                      key={label}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      className="text-[11px] font-normal rounded-full px-3 py-1 bg-white/60 text-black/60 border border-black/[0.06]"
                    >
                      {label}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ===== Plan ===== */}
            {phase === "plan" && plan && (
              <motion.div
                key="plan"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                {/* Header do plano */}
                <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles size={18} strokeWidth={1.5} className="text-[#fb923c]" />
                        <h3 className="text-[18px] font-normal tracking-[-0.01em] text-black/85">
                          {progress === 100
                            ? "Plano Concluído!"
                            : "Seu Plano em Andamento"}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-normal bg-[#fb923c]/[0.10] text-[#A8692A] border border-[#fb923c]/20">
                          {plan.mode}
                        </span>
                        {progress < 100 && (
                          <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-normal bg-black/[0.03] text-black/45 border border-black/[0.05]">
                            <CalendarDays size={10} strokeWidth={1.5} />
                            Pendente
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[10px] border border-black/[0.04] bg-white/60 p-4">
                    <p className="text-[13px] font-normal text-black/75">
                      <span className="font-medium">Estratégia:</span> {plan.focusLabel}
                    </p>
                    <p className="text-[12px] font-normal text-black/45 mt-1 leading-[1.55]">
                      Plano 100% orgânico — sem gastos financeiros. Siga as tarefas diárias e marque conforme concluir.
                    </p>
                  </div>
                </div>

                {/* Cooldown / Novo diagnostico */}
                {!canRequestNew ? (
                  <div className="rounded-[14px] border border-black/[0.04] bg-black/[0.02] p-4 flex items-start gap-3">
                    <Lock size={14} strokeWidth={1.5} className="text-black/40 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[13px] font-normal text-black/75">
                        Próximo diagnóstico disponível em{" "}
                        <span className="font-medium">{cooldownDays} dia{cooldownDays > 1 ? "s" : ""}</span>
                      </p>
                      <p className="text-[12px] font-normal text-black/45 leading-[1.55] mt-0.5">
                        Execute as tarefas do plano atual antes de solicitar um novo diagnóstico.
                      </p>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={resetDiagnostic}
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-normal bg-[#fb923c]/15 text-[#A8692A] border border-[#fb923c]/25 hover:bg-[#fb923c]/25 transition-colors"
                  >
                    <Sparkles size={13} strokeWidth={1.5} />
                    Solicitar Novo Diagnóstico
                  </button>
                )}

                {/* Bloco de tarefas */}
                <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <CalendarDays size={16} strokeWidth={1.5} className="text-black/55" />
                    <h3 className="text-[15px] font-normal tracking-[-0.01em] text-black/85">
                      {plan.planTitle}
                    </h3>
                  </div>
                  {createdAt && (
                    <p className="text-[11px] font-normal text-black/30">
                      Gerado em{" "}
                      {new Intl.DateTimeFormat("pt-BR").format(new Date(createdAt))}
                    </p>
                  )}
                  <p className="text-[12px] font-normal text-black/45 mt-1">
                    Plano salvo automaticamente em{" "}
                    <button
                      type="button"
                      onClick={() => router.push("/profile")}
                      className="font-medium text-[#A8692A] hover:underline"
                    >
                      Meu Perfil → Tarefas
                    </button>
                    .
                  </p>

                  {/* Barra de progresso */}
                  <div className="mt-4 mb-5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-normal text-black/40">Progresso</span>
                      <span className="text-[11px] font-normal text-[#A8692A]">
                        {completed.length}/7 tarefas
                      </span>
                    </div>
                    <div className="h-[4px] rounded-full bg-black/[0.04] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                        style={{
                          background: "linear-gradient(90deg, #F5C9A0, #fb923c)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Tarefas */}
                  <div className="space-y-2">
                    {plan.tasks.map((t) => {
                      const done = completed.includes(t.day);
                      const TaskIcon = taskIconMap[t.iconKey] ?? FileText;
                      return (
                        <motion.div
                          key={t.day}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: t.day * 0.04 }}
                          className="flex items-start gap-3 rounded-[12px] border border-black/[0.04] bg-white/60 p-4"
                        >
                          <div className="flex flex-col items-center shrink-0">
                            <span className="text-[10px] font-normal tracking-[0.06em] uppercase text-black/30">
                              Dia
                            </span>
                            <span className="text-[18px] font-medium text-black/85 tracking-[-0.02em]">
                              {t.day}
                            </span>
                          </div>
                          <TaskIcon
                            size={18}
                            strokeWidth={1.5}
                            className="text-black/55 shrink-0 mt-1"
                          />
                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-[13px] font-normal ${
                                done ? "text-black/35 line-through" : "text-black/80"
                              }`}
                            >
                              {t.title}
                            </p>
                            <p className="text-[12px] font-normal text-black/45 leading-[1.55] mt-0.5">
                              {t.desc}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleDay(t.day)}
                            className="shrink-0 mt-1"
                            aria-label={done ? "Desmarcar" : "Marcar como concluída"}
                          >
                            {done ? (
                              <CheckCircle2
                                size={20}
                                strokeWidth={1.5}
                                className="text-[#22C55E]"
                              />
                            ) : (
                              <Circle
                                size={20}
                                strokeWidth={1.5}
                                className="text-black/25"
                              />
                            )}
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => router.push("/profile")}
                    className="mt-5 inline-flex items-center gap-1 text-[12px] font-normal text-[#fb923c] hover:text-[#A8692A] transition-colors"
                  >
                    Ver no Meu Perfil → Tarefas Pendentes
                    <ArrowRight size={12} strokeWidth={1.5} />
                  </button>

                  <p className="text-[11px] font-normal text-black/30 mt-4 leading-[1.55]">
                    * Este plano contém apenas estratégias orgânicas. A IA nunca recomenda
                    anúncios pagos, troca de produto, redução de preço ou qualquer ação
                    que envolva gasto financeiro.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
