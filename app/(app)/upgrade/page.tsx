"use client";

// Upgrade de Plano
// Front-end only. Baseado em DESCRICAO DE TELAS/UpgradePlan.md.
// Usa primitiva Fase 0: PageShell.

import { useState } from "react";
import {
  Crown,
  Check,
  X,
  Shield,
  Sparkles,
} from "lucide-react";
import { PageShell } from "../_components/PageShell";

type Cycle = "monthly" | "annual";

interface FeatureRow {
  label: string;
  free: boolean | string;
  pro: boolean | string;
}

const features: FeatureRow[] = [
  { label: "Missão 1 — Sua Loja na Shopee", free: true, pro: true },
  { label: "Missão 2 — Plano de 7 Dias", free: true, pro: true },
  { label: "Missão 3 — Ferramentas de Vendas", free: "Básico", pro: "Ilimitado" },
  { label: "Missão 4 — Próximo Nível", free: false, pro: true },
  { label: "Aulas ao vivo", free: "1/mês", pro: "Todas" },
  { label: "Desafios da comunidade", free: false, pro: true },
  { label: "Comunidade — postar e comentar", free: false, pro: true },
  { label: "Catálogo de fornecedores premium", free: false, pro: true },
  { label: "Dashboard avançado da loja", free: "Básico", pro: "Completo" },
  { label: "Suporte prioritário", free: false, pro: true },
];

const prices = { monthly: "49,90", annual: "39,90" };

function FeatureItem({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <Check
        size={14}
        strokeWidth={2}
        className="text-[#22C55E] shrink-0 mt-0.5"
      />
    );
  }
  if (value === false) {
    return (
      <X size={14} strokeWidth={2} className="text-black/20 shrink-0 mt-0.5" />
    );
  }
  return (
    <Check
      size={14}
      strokeWidth={2}
      className="text-[#22C55E]/70 shrink-0 mt-0.5"
    />
  );
}

export default function UpgradePage() {
  const [cycle, setCycle] = useState<Cycle>("annual");
  const proPrice = cycle === "annual" ? prices.annual : prices.monthly;

  return (
    <PageShell title="Upgrade de Plano">
      {/* Hero */}
      <div className="text-center mb-8 max-w-[640px] mx-auto">
        <p className="text-[11px] font-normal tracking-[0.12em] uppercase text-[#fb923c]/80 mb-2">
          Vend.A.I. PRO
        </p>
        <h2 className="text-[28px] font-normal tracking-[-0.02em] text-black/85 leading-[1.2]">
          Desbloqueie todo o potencial da sua loja
        </h2>
        <p className="text-[14px] font-normal text-black/45 mt-2 leading-[1.55]">
          Acesse todas as missões, aulas ao vivo ilimitadas, comunidade exclusiva e
          ferramentas avançadas para acelerar suas vendas na Shopee.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-1 rounded-full bg-black/[0.03] p-1">
          <button
            type="button"
            onClick={() => setCycle("monthly")}
            className={`px-5 py-1.5 rounded-full text-[12px] font-normal transition-colors ${
              cycle === "monthly"
                ? "bg-white text-black/85 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                : "text-black/50 hover:text-black/70"
            }`}
          >
            Mensal
          </button>
          <button
            type="button"
            onClick={() => setCycle("annual")}
            className={`inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-[12px] font-normal transition-colors ${
              cycle === "annual"
                ? "bg-white text-black/85 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                : "text-black/50 hover:text-black/70"
            }`}
          >
            Anual
            <span className="rounded-full px-2 py-0.5 text-[10px] font-medium bg-[#22C55E]/[0.10] text-[#15803d]">
              -20%
            </span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[920px] mx-auto">
        {/* Free */}
        <div className="rounded-[16px] border border-black/[0.04] bg-[#FAF8F5] p-7">
          <p className="text-[11px] font-normal tracking-[0.08em] uppercase text-black/40 mb-1">
            Gratuito
          </p>
          <p className="text-[13px] font-normal text-black/45 mb-4">
            Para quem está começando
          </p>
          <p className="text-[36px] font-medium text-black/85 tracking-[-0.02em] leading-none">
            R$ 0
            <span className="text-[14px] font-normal text-black/40 ml-1">/mês</span>
          </p>

          <button
            type="button"
            disabled
            className="mt-5 w-full py-2.5 rounded-full border border-black/[0.06] text-[12px] font-normal text-black/35 bg-black/[0.02] cursor-not-allowed"
          >
            Plano Atual
          </button>

          <ul className="mt-6 space-y-2.5">
            {features.map((f) => (
              <li key={f.label} className="flex items-start gap-2.5">
                <FeatureItem value={f.free} />
                <span
                  className={`text-[12px] font-normal leading-[1.5] ${
                    f.free === false ? "text-black/35" : "text-black/70"
                  }`}
                >
                  {f.label}
                  {typeof f.free === "string" && (
                    <span className="text-black/40"> ({f.free})</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pro */}
        <div className="relative rounded-[16px] border border-[#F15A5A]/30 bg-[#FAF8F5] p-7 shadow-[0_8px_30px_rgba(241,90,90,0.08)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F15A5A]" />

          <div className="flex items-center justify-between mb-1">
            <p className="text-[11px] font-normal tracking-[0.08em] uppercase text-[#B23838]">
              Vend.A.I. Pro
            </p>
            <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-normal bg-[#F15A5A]/10 text-[#B23838] border border-[#F15A5A]/25">
              <Sparkles size={10} strokeWidth={1.5} />
              Mais popular
            </span>
          </div>
          <p className="text-[13px] font-normal text-black/45 mb-4">
            Para quem quer acelerar de verdade
          </p>

          <p className="text-[36px] font-medium text-black/85 tracking-[-0.02em] leading-none">
            R$ {proPrice}
            <span className="text-[14px] font-normal text-black/40 ml-1">/mês</span>
          </p>
          {cycle === "annual" && (
            <p className="text-[11px] font-normal text-[#15803d] mt-1">
              Economia de R$ 120/ano · cobrado anualmente
            </p>
          )}

          <button
            type="button"
            className="mt-5 w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#F15A5A] text-white text-[13px] font-medium hover:bg-[#D04A4A] transition-colors shadow-[0_2px_8px_rgba(241,90,90,0.25)]"
          >
            <Crown size={14} strokeWidth={1.8} />
            Assinar PRO
          </button>

          <ul className="mt-6 space-y-2.5">
            {features.map((f) => (
              <li key={f.label} className="flex items-start gap-2.5">
                <FeatureItem value={f.pro} />
                <span className="text-[12px] font-normal text-black/75 leading-[1.5]">
                  {f.label}
                  {typeof f.pro === "string" && (
                    <span className="text-black/45"> ({f.pro})</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Garantia */}
      <div className="mt-6 max-w-[920px] mx-auto rounded-[14px] border border-[#22C55E]/20 bg-[#22C55E]/[0.04] p-5 flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-[#22C55E]/15 flex items-center justify-center shrink-0">
          <Shield size={18} strokeWidth={1.5} className="text-[#15803d]" />
        </div>
        <div>
          <h3 className="text-[14px] font-medium text-black/80">
            Garantia de 7 dias
          </h3>
          <p className="text-[12px] font-normal text-black/55 leading-[1.55] mt-0.5">
            Experimente o plano Pro por 7 dias. Se não gostar, devolvemos 100% do seu
            dinheiro. Sem perguntas, sem burocracia.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
