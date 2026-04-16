"use client";

// Minhas Integrações
// Front-end only. Baseado em DESCRICAO DE TELAS/MyIntegrations.md.
// Segue _PAGE_PATTERN.md: card unico englobando titulo + subtitulo + conteudo.

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  X,
  ShoppingBag,
  ArrowRight,
  RefreshCw,
  Check,
} from "lucide-react";
import { avatarStyle } from "@/design-system/avatar-tokens";

type StoreStatus = "active" | "pending";

interface Store {
  id: string;
  name: string;
  initials: string;
  status: StoreStatus;
  metrics: string;
}

const stores: Store[] = [
  {
    id: "1",
    name: "Loja Fitness Ana",
    initials: "LF",
    status: "active",
    metrics: "47 pedidos este mês · R$ 3.820,00 faturados",
  },
  {
    id: "2",
    name: "Casa & Estilo Shop",
    initials: "CE",
    status: "active",
    metrics: "23 pedidos este mês · R$ 1.540,00 faturados",
  },
  {
    id: "3",
    name: "Tech Gadgets BR",
    initials: "TG",
    status: "pending",
    metrics: "Aguardando conexão com a Shopee",
  },
];

function StatusDot({ status }: { status: StoreStatus }) {
  const color = status === "active" ? "#22C55E" : "#F59E0B";
  const label =
    status === "active" ? "Integrada e ativa" : "Integração pendente";
  const textColor = status === "active" ? "#15803d" : "#92400E";

  return (
    <div className="inline-flex items-center gap-1.5">
      <span className="relative flex h-2 w-2">
        {status === "active" && (
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
            style={{ backgroundColor: color }}
          />
        )}
        <span
          className="relative inline-flex rounded-full h-2 w-2"
          style={{ backgroundColor: color }}
        />
      </span>
      <span
        className="text-[11px] font-normal"
        style={{ color: textColor }}
      >
        {label}
      </span>
    </div>
  );
}

export default function IntegrationsPage() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [storeName, setStoreName] = useState("");

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div
        className="rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40"
        style={{ minHeight: "720px", maxHeight: "calc(100vh - 7rem)" }}
      >
        <div className="flex-1 overflow-y-auto p-6">
          {/* Titulo */}
          <h1 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">
            Minhas Integrações
          </h1>
          <p className="text-[14px] font-normal text-black/35 mt-1 mb-6">
            Selecione uma loja para visualizar o painel de desempenho.
          </p>

          {/* Grid de lojas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stores.map((s) => {
              const isActive = s.status === "active";
              return (
                <div
                  key={s.id}
                  className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5 flex flex-col"
                >
                  {/* Header do card */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="h-12 w-12 rounded-full flex items-center justify-center text-[14px] font-medium text-white shrink-0"
                      style={avatarStyle(s.initials, 1)}
                    >
                      {s.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-normal tracking-[-0.01em] text-black/85 truncate">
                        {s.name}
                      </h3>
                      <div className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-normal bg-[#fb923c]/10 text-[#A8692A] border border-[#fb923c]/20 mt-1">
                        <ShoppingBag size={9} strokeWidth={1.5} />
                        Shopee
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="mb-3">
                    <StatusDot status={s.status} />
                  </div>

                  {/* Metricas */}
                  <p className="text-[12px] font-normal text-black/55 leading-[1.55] mb-4 flex-1">
                    {s.metrics}
                  </p>

                  {/* CTA */}
                  {isActive ? (
                    <button
                      type="button"
                      onClick={() => router.push("/store")}
                      className="group inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-normal bg-[#fb923c]/15 text-[#A8692A] border border-[#fb923c]/25 hover:bg-[#fb923c]/25 transition-colors"
                    >
                      Acessar Painel
                      <ArrowRight
                        size={12}
                        strokeWidth={1.5}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-normal text-[#92400E] border border-[#F59E0B]/40 bg-[#F59E0B]/[0.08] hover:bg-[#F59E0B]/15 transition-colors"
                    >
                      <RefreshCw size={12} strokeWidth={1.5} />
                      Reconectar Shopee
                    </button>
                  )}
                </div>
              );
            })}

            {/* Card Adicionar */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="group rounded-[14px] border-2 border-dashed border-black/[0.10] bg-transparent p-5 flex flex-col items-center justify-center text-center hover:border-[#fb923c]/50 hover:bg-[#fb923c]/[0.03] transition-all min-h-[220px]"
            >
              <div className="h-12 w-12 rounded-full border border-black/[0.08] group-hover:border-[#fb923c]/40 flex items-center justify-center mb-3 transition-colors">
                <Plus
                  size={20}
                  strokeWidth={1.5}
                  className="text-black/40 group-hover:text-[#fb923c] transition-colors"
                />
              </div>
              <p className="text-[14px] font-normal text-black/70 group-hover:text-black/85 transition-colors">
                Adicionar nova loja
              </p>
              <p className="text-[12px] font-normal text-black/35 mt-1">
                Conecte mais uma loja Shopee
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="w-full max-w-[500px] rounded-[16px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.20)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 p-6 border-b border-black/[0.04]">
              <div>
                <h2 className="text-[18px] font-normal tracking-[-0.01em] text-black/85">
                  Conectar Nova Loja Shopee
                </h2>
                <p className="text-[13px] font-normal text-black/40 mt-0.5">
                  Siga os 3 passos para integrar sua loja.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="h-8 w-8 rounded-full inline-flex items-center justify-center text-black/40 hover:bg-black/[0.04] hover:text-black/60 transition-colors shrink-0"
                aria-label="Fechar"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Passos */}
            <div className="p-6 space-y-5">
              {/* Passo 1 */}
              <div className="flex items-start gap-4">
                <span className="h-7 w-7 rounded-full bg-[#fb923c]/15 text-[#A8692A] text-[12px] font-medium inline-flex items-center justify-center shrink-0 border border-[#fb923c]/25">
                  1
                </span>
                <div className="flex-1">
                  <p className="text-[13px] font-normal text-black/80 mb-2">
                    Digite o nome da sua loja
                  </p>
                  <input
                    type="text"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    placeholder="Nome da loja"
                    className="w-full rounded-[10px] border border-black/[0.08] bg-white px-3 py-2 text-[13px] font-normal text-black/80 placeholder:text-black/30 focus:outline-none focus:border-[#fb923c]/50 transition-colors"
                  />
                </div>
              </div>

              {/* Passo 2 */}
              <div className="flex items-start gap-4">
                <span className="h-7 w-7 rounded-full bg-[#fb923c]/15 text-[#A8692A] text-[12px] font-medium inline-flex items-center justify-center shrink-0 border border-[#fb923c]/25">
                  2
                </span>
                <div className="flex-1">
                  <p className="text-[13px] font-normal text-black/80 mb-2">
                    Autorize o acesso via Shopee
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-normal bg-[#fb923c]/15 text-[#A8692A] border border-[#fb923c]/25 hover:bg-[#fb923c]/25 transition-colors"
                  >
                    <ShoppingBag size={12} strokeWidth={1.5} />
                    Conectar com Shopee
                  </button>
                </div>
              </div>

              {/* Passo 3 */}
              <div className="flex items-start gap-4">
                <span className="h-7 w-7 rounded-full bg-black/[0.04] text-black/45 text-[12px] font-medium inline-flex items-center justify-center shrink-0 border border-black/[0.06]">
                  3
                </span>
                <div className="flex-1">
                  <p className="text-[13px] font-normal text-black/80 mb-1">
                    Aguarde a confirmação da integração
                  </p>
                  <p className="text-[12px] font-normal text-black/45 leading-[1.55]">
                    A integração será confirmada em instantes...
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-black/[0.04] bg-[#FAF8F5] flex items-center justify-between">
              <p className="text-[11px] font-normal text-black/40 inline-flex items-center gap-1.5">
                <Check size={11} strokeWidth={1.5} className="text-[#22C55E]" />
                Conexão segura via OAuth oficial da Shopee
              </p>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-[12px] font-normal text-black/50 hover:text-black/70 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
