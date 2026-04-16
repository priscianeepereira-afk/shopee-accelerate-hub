"use client";

// ModalShell — wrapper de modal padronizado.
// Estrutura: backdrop blur + card centrado + header (titulo + X) + body + footer opcional.
// Fecha via X, clique no backdrop ou Escape.

import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

interface ModalShellProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
  /** Largura maxima. Default: 480px */
  maxWidth?: string;
}

export function ModalShell({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,
  maxWidth = "480px",
}: ModalShellProps) {
  // Fecha com Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="w-full rounded-[16px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.20)] overflow-hidden"
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 p-6 border-b border-black/[0.04]">
          <div>
            <h3 className="text-[16px] font-normal tracking-[-0.01em] text-black/85">
              {title}
            </h3>
            {subtitle && (
              <p className="text-[12px] font-normal text-black/40 mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-8 w-8 rounded-full inline-flex items-center justify-center text-black/40 hover:bg-black/[0.04] hover:text-black/60 transition-colors shrink-0"
            aria-label="Fechar"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">{children}</div>

        {/* Footer opcional */}
        {footer && (
          <div className="px-6 py-4 border-t border-black/[0.04] bg-[#FAF8F5]">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
