"use client";

// BackLink — link "<- Voltar para X" padronizado.
// Estilo coral, hover escurece. Usa next/navigation.

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackLinkProps {
  to: string;
  label?: string;
  className?: string;
}

export function BackLink({ to, label = "Voltar", className = "" }: BackLinkProps) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push(to)}
      className={`inline-flex items-center gap-1.5 text-[12px] font-normal text-[#fb923c] hover:text-[#A8692A] transition-colors ${className}`}
    >
      <ArrowLeft size={12} strokeWidth={1.5} />
      {label}
    </button>
  );
}
