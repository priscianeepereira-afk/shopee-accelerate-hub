// PlatformTour V2 — migrado para Bloom. Smoke test do AppLayoutV2.
// Preserva conteudo, textos PT-BR e navegacao do original.
// Visual convertido para linguagem Bloom: BloomBadge, cores e tokens Bloom.

import { useNavigate } from "react-router-dom";
import { Play, ArrowLeft, CheckCircle2 } from "lucide-react";
import { BloomBadge } from "@/design-system/components/bloom/BloomBadge";
import { appPath } from "./_routing";

const chapters = [
  { time: "0:00", label: "Introdução — O que é a Vend.A.I." },
  { time: "1:20", label: "Minhas Integrações — Conectando sua loja" },
  { time: "3:05", label: "Missões — Seu caminho de aprendizado" },
  { time: "5:10", label: "Agenda de Aulas — Aulas ao vivo e desafios" },
  { time: "6:45", label: "Comunidade — Trocando experiências" },
  { time: "8:00", label: "Meu Perfil — Selos, ranking e tarefas" },
  { time: "9:30", label: "Plano PRO — Desbloqueie tudo" },
];

export default function PlatformTourV2() {
  const navigate = useNavigate();

  return (
    <div className="p-8 md:p-10 max-w-5xl mx-auto">
      <button
        type="button"
        onClick={() => navigate(appPath("/dashboard"))}
        className="inline-flex items-center gap-2 text-[13px] font-normal text-black/50 hover:text-black/80 mb-6 transition-colors"
      >
        <ArrowLeft size={16} strokeWidth={1.8} />
        Voltar ao Dashboard
      </button>

      <div className="mb-8 space-y-3">
        <BloomBadge variant="brand">PRIMEIRO ACESSO</BloomBadge>
        <h1 className="text-[28px] md:text-[32px] font-normal tracking-[-0.015em] text-black/85">
          Conhecendo a Plataforma
        </h1>
        <p className="text-[15px] font-normal text-black/50 max-w-2xl">
          Assista este tour completo e descubra como aproveitar ao máximo cada recurso da Vend.A.I.
        </p>
      </div>

      {/* Video player mockup */}
      <div className="w-full aspect-video rounded-[16px] bg-[#1A1A2E] flex items-center justify-center mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F15A5A]/10 to-transparent" />
        <button
          type="button"
          className="h-20 w-20 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/25 transition-colors z-10 border border-white/10"
          aria-label="Reproduzir"
        >
          <Play className="h-9 w-9 text-white ml-1" strokeWidth={1.5} />
        </button>
        <span className="absolute bottom-4 right-4 text-[11px] text-white/70 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
          10:45
        </span>
      </div>

      {/* Chapters */}
      <div className="rounded-[16px] border border-[#E8E4E0] bg-white p-6">
        <h2 className="text-[16px] font-medium text-black/85 mb-4">
          Capítulos do Tour
        </h2>
        <div className="space-y-1">
          {chapters.map((ch, i) => (
            <button
              key={ch.time}
              type="button"
              className="w-full flex items-center gap-3 p-3 rounded-[10px] hover:bg-[#F5F0EB] transition-colors group text-left"
            >
              <span className="text-[12px] font-mono font-medium text-[#F15A5A] w-10 flex-shrink-0">
                {ch.time}
              </span>
              <div className="h-6 w-6 rounded-full border border-[#E8E4E0] group-hover:border-[#F15A5A]/40 flex items-center justify-center flex-shrink-0 transition-colors">
                {i === 0 && (
                  <CheckCircle2 className="h-5 w-5 text-[#22C55E]" strokeWidth={1.8} />
                )}
              </div>
              <span className="text-[14px] font-normal text-black/75">{ch.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
