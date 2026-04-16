// MetricCard — card de metrica padronizado.
// Estrutura: icone topo + valor grande + label embaixo.
// Usado em /store, futuro /shopee-ads, /financas.

import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  /** Cor do icone (geralmente da paleta Bloom) */
  iconColor: string;
  value: string;
  label: string;
  /** Variacao opcional vs periodo anterior (ex: "+12.3%") */
  delta?: { value: string; positive?: boolean };
}

export function MetricCard({
  icon: Icon,
  iconColor,
  value,
  label,
  delta,
}: MetricCardProps) {
  return (
    <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5">
      <div className="flex items-center justify-between mb-3">
        <Icon size={20} strokeWidth={1.5} style={{ color: iconColor }} />
        {delta && (
          <span
            className={`text-[10px] font-medium tabular-nums ${
              delta.positive ? "text-[#15803d]" : "text-[#B91C1C]"
            }`}
          >
            {delta.value}
          </span>
        )}
      </div>
      <p className="text-[26px] font-medium text-black/85 tracking-[-0.02em] leading-none tabular-nums">
        {value}
      </p>
      <p className="text-[12px] font-normal text-black/40 mt-2">{label}</p>
    </div>
  );
}
