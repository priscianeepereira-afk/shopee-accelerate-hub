// PageShell — wrapper padrao para telas single-column.
// Aplica o padrao definido em _PAGE_PATTERN.md:
// - container p-6 max-w-[1400px] mx-auto
// - card unico rounded-[14px] border-black/[0.04] bg-white/40
// - h1 24px + subtitulo 14px
// - inner overflow-y-auto p-6
//
// Para telas multi-column (community, agenda, store), use <PageCard>
// que so fornece o card externo, sem padding/header.

import type { ReactNode } from "react";

interface PageShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div
        className="flex flex-col rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40"
        style={{ minHeight: "720px", maxHeight: "calc(100vh - 7rem)" }}
      >
        <div className="flex-1 overflow-y-auto p-6">
          <h1 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[14px] font-normal text-black/35 mt-1 mb-6">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

// Variant para telas multi-column. Fornece so o frame do card.
interface PageCardProps {
  children: ReactNode;
  /** Bg do card. Default: bg-white/40 */
  className?: string;
}

export function PageCard({ children, className = "bg-white/40" }: PageCardProps) {
  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div
        className={`flex rounded-[14px] border border-black/[0.04] overflow-hidden ${className}`}
        style={{ minHeight: "720px", maxHeight: "calc(100vh - 7rem)" }}
      >
        {children}
      </div>
    </div>
  );
}
