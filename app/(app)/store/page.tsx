"use client";

// Painel da Loja — Loja Fitness Ana
// Front-end only. Mapeado em /Users/prisc/Downloads/VendeAI-git/src/pages/StoreDashboard.tsx
// Refatorado pra usar primitivas da Fase 0: PageShell, BackLink, StatusPill, MetricCard, ModalShell.

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  Package,
  Wallet,
  ShoppingBag,
  TrendingUp,
  Target,
  MousePointerClick,
  Eye,
  Star,
  MessageSquare,
  XCircle,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  Factory,
  Settings,
  Printer,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { BackLink } from "../_components/BackLink";
import {
  StatusPill,
  type StatusVariant,
} from "../_components/StatusPill";
import { MetricCard } from "../_components/MetricCard";
import { ModalShell } from "../_components/ModalShell";

// ============ Mock data ============

type OrderStatus = "aguardando" | "pago" | "enviado" | "entregue";
type ActionType = "label" | "view" | "track";

interface Order {
  id: string;
  product: string;
  client: string;
  value: string;
  status: OrderStatus;
  actions: ActionType[];
}

const metrics: {
  label: string;
  value: string;
  icon: LucideIcon;
  accent: string;
}[] = [
  { label: "Pedidos Hoje", value: "3", icon: Package, accent: "#F15A5A" },
  { label: "Faturado Hoje", value: "R$ 247,80", icon: Wallet, accent: "#F5C9A0" },
  { label: "Pedidos este Mês", value: "47", icon: ShoppingBag, accent: "#C8B8D8" },
  { label: "Faturado este Mês", value: "R$ 3.820,00", icon: TrendingUp, accent: "#22C55E" },
];

type HealthStatus = "green" | "yellow" | "red";

const healthIndicators: {
  label: string;
  value: string;
  threshold: string;
  status: HealthStatus;
  icon: LucideIcon;
}[] = [
  { label: "Taxa de Conversão", value: "3.2%", threshold: "Meta: ≥ 2%", status: "green", icon: Target },
  { label: "Taxa de Cliques", value: "6.1%", threshold: "Meta: ≥ 5%", status: "green", icon: MousePointerClick },
  { label: "Visualizações (7d)", value: "1.240", threshold: "Meta: ≥ 100", status: "green", icon: Eye },
  { label: "Avaliações Positivas", value: "92%", threshold: "Meta: ≥ 80%", status: "green", icon: Star },
  { label: "Tempo de Resposta", value: "12 min", threshold: "Meta: ≤ 30 min", status: "green", icon: MessageSquare },
  { label: "Taxa de Cancelamento", value: "4.8%", threshold: "Meta: ≤ 5%", status: "yellow", icon: XCircle },
];

const orders: Order[] = [
  { id: "#10234", product: "Conjunto Fitness P", client: "Maria L.", value: "R$ 69,90", status: "aguardando", actions: ["label", "view"] },
  { id: "#10233", product: "Fone Bluetooth TWS", client: "João P.", value: "R$ 89,90", status: "pago", actions: ["label", "view"] },
  { id: "#10232", product: "Organizador Gaveta", client: "Carla S.", value: "R$ 34,90", status: "enviado", actions: ["track"] },
  { id: "#10231", product: "Kit Skincare", client: "Fernanda R.", value: "R$ 129,90", status: "entregue", actions: ["view"] },
  { id: "#10230", product: "Fone Bluetooth TWS", client: "Paulo M.", value: "R$ 89,90", status: "entregue", actions: ["view"] },
];

// Mapeia status do pedido pra variante do StatusPill
const orderStatusVariant: Record<
  OrderStatus,
  { variant: StatusVariant; label: string }
> = {
  aguardando: { variant: "coral", label: "Aguardando Envio" },
  pago: { variant: "success", label: "Pago" },
  enviado: { variant: "lavanda", label: "Enviado" },
  entregue: { variant: "muted", label: "Entregue" },
};

const healthStatusConfig: Record<
  HealthStatus,
  { bg: string; border: string; dot: string; text: string; label: string }
> = {
  green: {
    bg: "bg-[#22C55E]/[0.06]",
    border: "border-[#22C55E]/25",
    dot: "bg-[#22C55E]",
    text: "text-[#15803d]",
    label: "OK",
  },
  yellow: {
    bg: "bg-[#F59E0B]/[0.06]",
    border: "border-[#F59E0B]/25",
    dot: "bg-[#F59E0B]",
    text: "text-[#92400E]",
    label: "Atenção",
  },
  red: {
    bg: "bg-[#EF4444]/[0.06]",
    border: "border-[#EF4444]/25",
    dot: "bg-[#EF4444]",
    text: "text-[#B91C1C]",
    label: "Crítico",
  },
};

// ============ LiveClock ============

function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now)
    return (
      <div
        className="rounded-[14px] border border-white/[0.06] p-5 min-h-[232px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(60,40,60,0.85) 0%, rgba(30,20,35,0.92) 100%)",
        }}
      />
    );

  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  const isBefore18 = now.getHours() < 18;

  return (
    <div
      className="rounded-[14px] border border-white/[0.06] p-5 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(60,40,60,0.92) 0%, rgba(30,20,35,0.96) 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F15A5A]/60" />

      <p className="text-[42px] font-medium text-white/90 tracking-[-0.02em] leading-none font-mono tabular-nums">
        {hh}:{mm}:{ss}
      </p>
      <p className="text-[11px] font-normal text-white/40 mt-1 mb-4">Horário atual</p>

      <div className="flex items-center gap-1.5 mb-1">
        <AlertTriangle size={12} strokeWidth={1.5} className="text-[#F59E0B]" />
        <span className="text-[12px] font-medium text-white/85">Horário de Corte</span>
      </div>
      <p className="text-[11px] font-normal text-white/45 leading-[1.5] mb-4">
        Pedidos pagos após o horário de corte serão enviados no dia seguinte.
      </p>

      <div className="flex items-center justify-between mb-2">
        <div className="inline-flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-[#F15A5A] text-white text-[10px] font-medium inline-flex items-center justify-center">
            S
          </span>
          <span className="text-[12px] font-normal text-white/80">Shopee</span>
        </div>
        <span className="text-[11px] font-normal text-white/55">
          Envio hoje até: <strong className="font-medium text-white/80">18:00</strong>
        </span>
      </div>

      {isBefore18 ? (
        <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-normal bg-[#22C55E]/15 text-[#4ade80] border border-[#22C55E]/25">
          <CheckCircle2 size={10} strokeWidth={1.5} />
          Ainda dá tempo hoje
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-normal bg-[#F15A5A]/15 text-[#fb923c] border border-[#F15A5A]/25">
          <AlertTriangle size={10} strokeWidth={1.5} />
          Envio amanhã
        </span>
      )}

      <p className="text-[9px] italic text-white/25 mt-4 leading-[1.5]">
        * Os horários de corte serão alimentados dinamicamente pelo backend conforme regras da Shopee.
      </p>
    </div>
  );
}

// ============ Pagina ============

export default function StoreDashboardPage() {
  const router = useRouter();
  const [labelModal, setLabelModal] = useState<string | null>(null);
  const [paymentModal, setPaymentModal] = useState(false);

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div
        className="flex flex-col rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40"
        style={{ minHeight: "720px", maxHeight: "calc(100vh - 7rem)" }}
      >
        <div className="flex-1 overflow-y-auto p-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[12px] font-normal text-black/40 mb-2">
            <button
              type="button"
              onClick={() => router.push("/integrations")}
              className="hover:text-[#fb923c] transition-colors"
            >
              Minhas Integrações
            </button>
            <ChevronRight size={12} strokeWidth={1.5} className="text-black/25" />
            <span className="text-black/70 font-medium">Loja Fitness Ana</span>
          </nav>

          <BackLink to="/integrations" label="Voltar para Minhas Integrações" className="mb-4" />

          <h1 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">
            Painel da Loja — Loja Fitness Ana
          </h1>
          <p className="text-[14px] font-normal text-black/35 mt-1 mb-6">
            Gerencie tudo relacionado à sua loja Shopee aqui.
          </p>

          {/* Metricas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {metrics.map((m) => (
              <MetricCard
                key={m.label}
                icon={m.icon}
                iconColor={m.accent}
                value={m.value}
                label={m.label}
              />
            ))}
          </div>

          {/* Saude da Loja */}
          <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-6 mb-6">
            <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
              <div>
                <h2 className="text-[16px] font-normal tracking-[-0.01em] text-black/85">
                  Saúde da Loja
                </h2>
                <p className="text-[12px] font-normal text-black/40 mt-0.5">
                  Visão geral dos indicadores — dados alimentados pela integração Shopee
                </p>
              </div>
              <StatusPill variant="success">Saudável</StatusPill>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
              {healthIndicators.map((h) => {
                const s = healthStatusConfig[h.status];
                const Icon = h.icon;
                return (
                  <div
                    key={h.label}
                    className={`rounded-[12px] border ${s.border} ${s.bg} p-4`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon size={16} strokeWidth={1.5} className="text-black/55" />
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-normal ${s.text}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                        {s.label}
                      </span>
                    </div>
                    <p className="text-[20px] font-medium text-black/85 tracking-[-0.02em] leading-none">
                      {h.value}
                    </p>
                    <p className="text-[11px] font-normal text-black/55 mt-1.5">
                      {h.label}
                    </p>
                    <p className="text-[10px] font-normal text-black/30 mt-0.5">
                      {h.threshold}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 pt-3 border-t border-black/[0.04] flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-normal text-black/40">
                <span className="h-2 w-2 rounded-full bg-[#22C55E]" /> OK — dentro da meta
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-normal text-black/40">
                <span className="h-2 w-2 rounded-full bg-[#F59E0B]" /> Atenção — precisa melhorar
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-normal text-black/40">
                <span className="h-2 w-2 rounded-full bg-[#EF4444]" /> Crítico — melhoria urgente
              </span>
            </div>
          </div>

          {/* 2 colunas */}
          <div className="flex gap-5 flex-col lg:flex-row">
            {/* Esquerda — Pedidos */}
            <div className="flex-[3] min-w-0">
              <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Package size={16} strokeWidth={1.5} className="text-black/55" />
                  <h2 className="text-[16px] font-normal tracking-[-0.01em] text-black/85">
                    Meus Pedidos
                  </h2>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-[12px]">
                    <thead>
                      <tr className="border-b border-black/[0.04] text-left">
                        <th className="pb-3 font-normal text-[11px] tracking-[0.04em] uppercase text-black/35">
                          # Pedido
                        </th>
                        <th className="pb-3 font-normal text-[11px] tracking-[0.04em] uppercase text-black/35">
                          Produto
                        </th>
                        <th className="pb-3 font-normal text-[11px] tracking-[0.04em] uppercase text-black/35">
                          Cliente
                        </th>
                        <th className="pb-3 font-normal text-[11px] tracking-[0.04em] uppercase text-black/35">
                          Valor
                        </th>
                        <th className="pb-3 font-normal text-[11px] tracking-[0.04em] uppercase text-black/35">
                          Status
                        </th>
                        <th className="pb-3 font-normal text-[11px] tracking-[0.04em] uppercase text-black/35">
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((o) => {
                        const cfg = orderStatusVariant[o.status];
                        return (
                          <tr
                            key={o.id}
                            className="border-b border-black/[0.04] last:border-0 hover:bg-black/[0.015] transition-colors"
                          >
                            <td className="py-3 font-medium text-black/75 tabular-nums">
                              {o.id}
                            </td>
                            <td className="py-3 text-black/70">{o.product}</td>
                            <td className="py-3 text-black/55">{o.client}</td>
                            <td className="py-3 font-medium text-black/75 tabular-nums">
                              {o.value}
                            </td>
                            <td className="py-3">
                              <StatusPill variant={cfg.variant}>{cfg.label}</StatusPill>
                            </td>
                            <td className="py-3">
                              <div className="flex gap-1.5 flex-wrap">
                                {o.actions.includes("label") && (
                                  <button
                                    type="button"
                                    onClick={() => setLabelModal(o.id)}
                                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-normal bg-[#F15A5A]/15 text-[#B23838] border border-[#F15A5A]/25 hover:bg-[#F15A5A]/25 transition-colors"
                                  >
                                    <Printer size={10} strokeWidth={1.5} />
                                    Etiqueta
                                  </button>
                                )}
                                {o.actions.includes("view") && (
                                  <button
                                    type="button"
                                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-normal text-black/60 border border-black/[0.08] hover:bg-black/[0.03] transition-colors"
                                  >
                                    <Eye size={10} strokeWidth={1.5} />
                                    Ver
                                  </button>
                                )}
                                {o.actions.includes("track") && (
                                  <button
                                    type="button"
                                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-normal text-black/60 border border-black/[0.08] hover:bg-black/[0.03] transition-colors"
                                  >
                                    <Truck size={10} strokeWidth={1.5} />
                                    Rastrear
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Direita */}
            <div className="flex-[2] space-y-5 min-w-[320px]">
              {/* Pagar Fornecedor */}
              <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F15A5A]/50" />
                <div className="flex items-center gap-2 mb-3">
                  <Wallet size={16} strokeWidth={1.5} className="text-black/55" />
                  <h2 className="text-[15px] font-normal tracking-[-0.01em] text-black/85">
                    Pagar Fornecedor
                  </h2>
                </div>
                <p className="text-[13px] font-normal text-black/70">
                  ForneceMais Distribuidora
                </p>
                <p className="text-[22px] font-medium text-[#B23838] tracking-[-0.02em] mt-1">
                  R$ 840,00
                  <span className="text-[12px] font-normal text-black/40 ml-2">em aberto</span>
                </p>
                <p className="text-[11px] font-normal text-black/35 mt-1 mb-4">
                  Vencimento: 30/04/2025
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 py-2 rounded-full border border-black/[0.08] text-[12px] font-normal text-black/65 hover:bg-black/[0.03] transition-colors"
                  >
                    Ver Detalhes
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentModal(true)}
                    className="flex-1 py-2 rounded-full bg-[#F15A5A]/15 text-[#B23838] text-[12px] font-normal border border-[#F15A5A]/25 hover:bg-[#F15A5A]/25 transition-colors"
                  >
                    Pagar Agora
                  </button>
                </div>
              </div>

              {/* Gestao Rapida + LiveClock */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Settings size={14} strokeWidth={1.5} className="text-black/55" />
                    <h2 className="text-[14px] font-normal tracking-[-0.01em] text-black/85">
                      Gestão Rápida
                    </h2>
                  </div>
                  <div className="space-y-0.5">
                    {[
                      { icon: Package, label: "Cadastrar Novo Produto", path: "/product/register" },
                      { icon: BarChart3, label: "Ver Relatório de Vendas", path: "" },
                      { icon: Factory, label: "Falar com Fornecedor", path: "" },
                      { icon: Settings, label: "Configurações da Loja", path: "" },
                    ].map((a) => {
                      const Icon = a.icon;
                      return (
                        <button
                          key={a.label}
                          type="button"
                          onClick={() => a.path && router.push(a.path)}
                          className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-[8px] text-[12px] font-normal text-black/65 hover:bg-black/[0.03] hover:text-black/85 transition-colors text-left"
                        >
                          <Icon size={14} strokeWidth={1.5} className="text-black/40 shrink-0" />
                          {a.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <LiveClock />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Etiqueta */}
      <ModalShell
        open={!!labelModal}
        onClose={() => setLabelModal(null)}
        title={`Etiqueta de Envio — ${labelModal ?? ""}`}
        subtitle="Shopee Express — Sedex"
      >
        <div className="space-y-4">
          <div className="rounded-[12px] border-2 border-dashed border-black/[0.08] p-5 text-center bg-[#FAF8F5]">
            <div className="mx-auto w-52 h-16 rounded-[8px] bg-white border border-black/[0.06] flex items-center justify-center mb-3 font-mono text-[11px] text-black/55 tracking-wider">
              ||||| |||| ||||| ||||
            </div>
            <p className="text-[13px] font-medium text-black/80 tabular-nums">
              SP123456789BR
            </p>
            <p className="text-[11px] font-normal text-black/40 mt-0.5">
              Código de rastreio
            </p>
          </div>

          <div className="space-y-1.5 text-[12px] font-normal">
            <p>
              <span className="text-black/40">Destinatário:</span>{" "}
              <span className="text-black/80">Maria L.</span>
            </p>
            <p>
              <span className="text-black/40">Endereço:</span>{" "}
              <span className="text-black/80">Rua das Flores, 123 — São Paulo/SP</span>
            </p>
            <p>
              <span className="text-black/40">Produto:</span>{" "}
              <span className="text-black/80">Conjunto Fitness P</span>
            </p>
          </div>

          <button
            type="button"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#F15A5A]/15 text-[#B23838] text-[13px] font-normal border border-[#F15A5A]/25 hover:bg-[#F15A5A]/25 transition-colors"
          >
            <Printer size={14} strokeWidth={1.5} />
            Imprimir Etiqueta
          </button>
        </div>
      </ModalShell>

      {/* Modal Pagamento */}
      <ModalShell
        open={paymentModal}
        onClose={() => setPaymentModal(false)}
        title="Confirmar Pagamento"
        maxWidth="440px"
      >
        <div className="space-y-4">
          <div className="rounded-[12px] bg-[#FAF8F5] border border-black/[0.04] p-4">
            <p className="text-[11px] font-normal text-black/40">Fornecedor</p>
            <p className="text-[14px] font-normal text-black/80 mt-0.5">
              ForneceMais Distribuidora
            </p>
            <p className="text-[24px] font-medium text-[#B23838] tracking-[-0.02em] mt-2">
              R$ 840,00
            </p>
          </div>

          <p className="text-[12px] font-normal text-black/50 leading-[1.55]">
            Ao confirmar, o pagamento será processado via PIX.
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPaymentModal(false)}
              className="flex-1 py-2.5 rounded-full border border-black/[0.08] text-[12px] font-normal text-black/65 hover:bg-black/[0.03] transition-colors"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={() => setPaymentModal(false)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#F15A5A]/15 text-[#B23838] text-[12px] font-normal border border-[#F15A5A]/25 hover:bg-[#F15A5A]/25 transition-colors"
            >
              <CheckCircle2 size={12} strokeWidth={1.5} />
              Confirmar Pagamento
            </button>
          </div>
        </div>
      </ModalShell>
    </div>
  );
}
