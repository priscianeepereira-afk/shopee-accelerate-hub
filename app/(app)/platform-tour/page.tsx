"use client";

// Conhecendo a Plataforma — tour em video (mock)
// Front-end only. Baseado em DESCRICAO DE TELAS/PlatformTour.md.
// Segue o padrao de criacao de tela (_PAGE_PATTERN.md):
// card unico englobando titulo + subtitulo + conteudo.

import { useRouter } from "next/navigation";
import { ArrowLeft, Play, CheckCircle2, Circle } from "lucide-react";

const chapters: { time: string; label: string }[] = [
  { time: "0:00", label: "Introdução — O que é a Vend.A.I." },
  { time: "1:20", label: "Minhas Integrações — Conectando sua loja" },
  { time: "3:05", label: "Missões — Seu caminho de aprendizado" },
  { time: "5:10", label: "Agenda de Aulas — Aulas ao vivo e desafios" },
  { time: "6:45", label: "Comunidade — Trocando experiências" },
  { time: "8:00", label: "Meu Perfil — Selos, ranking e tarefas" },
  { time: "9:30", label: "Plano PRO — Desbloqueie tudo" },
];

export default function PlatformTourPage() {
  const router = useRouter();

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div
        className="rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40"
        style={{ minHeight: "720px", maxHeight: "calc(100vh - 7rem)" }}
      >
        <div className="flex-1 overflow-y-auto p-6">
          {/* Link voltar */}
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="inline-flex items-center gap-1.5 text-[12px] font-normal text-black/40 hover:text-black/60 transition-colors mb-5"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Voltar ao Dashboard
          </button>

          {/* Eyebrow + Titulo */}
          <p className="text-[11px] font-normal tracking-[0.1em] uppercase text-[#F15A5A]/80 mb-2">
            Primeiro acesso
          </p>
          <h1 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">
            Conhecendo a Plataforma
          </h1>
          <p className="text-[14px] font-normal text-black/35 mt-1 mb-6 max-w-[680px]">
            Assista este tour completo e descubra como aproveitar ao máximo cada recurso
            da Vend.A.I.
          </p>

          {/* Grid: Player + Capitulos */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-5">
            {/* Player mockup */}
            <div
              className="relative rounded-[14px] border border-black/[0.04] overflow-hidden aspect-video"
              style={{
                background:
                  "linear-gradient(135deg, #1A1A2E 0%, #2A1F3D 40%, #3A2040 70%, #4A2540 100%)",
              }}
            >
              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 25% 25%, #F5C9A0 0%, transparent 50%), radial-gradient(circle at 75% 75%, #C8B8D8 0%, transparent 50%)",
                }}
              />

              {/* Play button central */}
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Reproduzir tour"
              >
                <span
                  className="h-20 w-20 rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-[0_8px_32px_rgba(241,90,90,0.35)]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(245,201,160,0.95), rgba(241,90,90,0.95))",
                  }}
                >
                  <Play
                    size={28}
                    strokeWidth={1.5}
                    className="text-white ml-1"
                    fill="currentColor"
                  />
                </span>
              </button>

              {/* Duracao */}
              <span className="absolute bottom-4 right-4 rounded-full bg-black/60 backdrop-blur-sm text-white/90 text-[11px] font-normal px-3 py-1">
                10:45
              </span>

              {/* Badge PRIMEIRO ACESSO no canto */}
              <span className="absolute top-4 left-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-[10px] font-normal tracking-[0.08em] uppercase px-3 py-1">
                Tour guiado
              </span>
            </div>

            {/* Capitulos */}
            <div className="rounded-[14px] border border-black/[0.04] bg-white/60 p-5">
              <h3 className="text-[15px] font-normal tracking-[-0.01em] text-black/85 mb-4">
                Capítulos do Tour
              </h3>
              <ul className="space-y-1">
                {chapters.map((ch, i) => {
                  const done = i === 0;
                  return (
                    <li key={ch.time}>
                      <button
                        type="button"
                        className="flex items-start gap-3 w-full text-left px-3 py-2.5 rounded-[10px] hover:bg-black/[0.02] transition-colors"
                      >
                        {done ? (
                          <CheckCircle2
                            size={16}
                            strokeWidth={1.5}
                            className="text-[#22C55E] shrink-0 mt-0.5"
                          />
                        ) : (
                          <Circle
                            size={16}
                            strokeWidth={1.5}
                            className="text-black/20 shrink-0 mt-0.5"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-[13px] font-normal leading-[1.4] ${
                              done ? "text-black/75" : "text-black/60"
                            }`}
                          >
                            {ch.label}
                          </p>
                          <p className="text-[11px] font-normal text-black/25 mt-0.5">
                            {ch.time}
                          </p>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Rodape com dica */}
          <div className="mt-6 rounded-[14px] border border-[#F15A5A]/15 bg-[#F15A5A]/[0.04] p-5">
            <p className="text-[13px] font-normal text-black/60 leading-[1.6]">
              <strong className="font-medium text-black/75">Dica:</strong> assista o tour
              completo antes de começar a Missão 1. Você vai entender como a plataforma
              conecta cada etapa e evitar retrabalho depois.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
