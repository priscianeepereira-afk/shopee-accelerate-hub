// StatusPill — pill de status reutilizavel.
// Variantes semanticas (success/warning/danger/info) + de paleta
// (coral/lavanda/bege). Padrao Bloom: bg cor/8% + texto cor escura
// + opcional dot animado no caso de "online".

import type { LucideIcon } from "lucide-react";

export type StatusVariant =
  | "success" // verde
  | "warning" // amarelo
  | "danger" // vermelho
  | "info" // azul lavanda
  | "coral" // brand
  | "lavanda" // pastel accent
  | "bege" // pastel gutenberg
  | "muted"; // cinza neutro

interface StatusPillProps {
  variant: StatusVariant;
  children: React.ReactNode;
  icon?: LucideIcon;
  /** Mostra um dot animado (ping) ao inves do icone */
  pulseDot?: boolean;
  className?: string;
}

const variantStyles: Record<
  StatusVariant,
  { bg: string; text: string; border: string; dot: string }
> = {
  success: {
    bg: "bg-[#22C55E]/[0.08]",
    text: "text-[#15803d]",
    border: "border-[#22C55E]/20",
    dot: "bg-[#22C55E]",
  },
  warning: {
    bg: "bg-[#F59E0B]/[0.08]",
    text: "text-[#92400E]",
    border: "border-[#F59E0B]/25",
    dot: "bg-[#F59E0B]",
  },
  danger: {
    bg: "bg-[#EF4444]/[0.08]",
    text: "text-[#B91C1C]",
    border: "border-[#EF4444]/25",
    dot: "bg-[#EF4444]",
  },
  info: {
    bg: "bg-[#C8B8D8]/25",
    text: "text-[#6B5A85]",
    border: "border-[#C8B8D8]/40",
    dot: "bg-[#C8B8D8]",
  },
  coral: {
    bg: "bg-[#F15A5A]/10",
    text: "text-[#B23838]",
    border: "border-[#F15A5A]/25",
    dot: "bg-[#F15A5A]",
  },
  lavanda: {
    bg: "bg-[#C8B8D8]/25",
    text: "text-[#6B5A85]",
    border: "border-[#C8B8D8]/40",
    dot: "bg-[#C8B8D8]",
  },
  bege: {
    bg: "bg-[#E8D5B5]/30",
    text: "text-[#8A6B3A]",
    border: "border-[#E8D5B5]/50",
    dot: "bg-[#E8D5B5]",
  },
  muted: {
    bg: "bg-black/[0.04]",
    text: "text-black/50",
    border: "border-black/[0.06]",
    dot: "bg-black/30",
  },
};

export function StatusPill({
  variant,
  children,
  icon: Icon,
  pulseDot,
  className = "",
}: StatusPillProps) {
  const s = variantStyles[variant];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-normal border ${s.bg} ${s.text} ${s.border} ${className}`}
    >
      {pulseDot ? (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${s.dot}`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${s.dot}`}
          />
        </span>
      ) : Icon ? (
        <Icon size={10} strokeWidth={1.5} />
      ) : (
        <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      )}
      {children}
    </span>
  );
}
