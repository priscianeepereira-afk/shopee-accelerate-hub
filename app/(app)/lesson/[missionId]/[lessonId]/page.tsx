"use client";

// Aula — Video de Conteudo
// Front-end only. Baseado em DESCRICAO DE TELAS/LessonVideo.md.
// Usa primitivas Fase 0: PageShell, BackLink.

import { use, useState } from "react";
import {
  Play,
  CheckCircle2,
  Circle,
  Lock,
  ChevronRight,
  Clock,
} from "lucide-react";
import { PageShell } from "../../../_components/PageShell";
import { BackLink } from "../../../_components/BackLink";

interface LessonStub {
  id: number;
  title: string;
  duration: string;
  status: "concluida" | "atual" | "bloqueada";
}

// Mock de aulas por missao (espelha estrutura da Missao 1)
const lessonsByMission: Record<string, LessonStub[]> = {
  "1": [
    { id: 1, title: "Aula 1 — Credenciamento na Shopee", duration: "12 min", status: "concluida" },
    { id: 2, title: "Aula 2 — Escolhendo seu Fornecedor", duration: "18 min", status: "atual" },
    { id: 3, title: "Aula 3 — Publicando seus Produtos", duration: "22 min", status: "bloqueada" },
    { id: 4, title: "Aula 4 — Vendendo", duration: "15 min", status: "bloqueada" },
  ],
  "2": [
    { id: 1, title: "Aula 1 — Diagnóstico Inicial", duration: "10 min", status: "atual" },
  ],
  "3": [
    { id: 1, title: "Aula 1 — Visão Geral das Ferramentas", duration: "14 min", status: "atual" },
  ],
  "4": [
    { id: 1, title: "Aula 1 — Profissionalização", duration: "20 min", status: "atual" },
  ],
};

export default function LessonPage({
  params,
}: {
  params: Promise<{ missionId: string; lessonId: string }>;
}) {
  const { missionId, lessonId } = use(params);
  const [completed, setCompleted] = useState(false);

  const lessons = lessonsByMission[missionId] ?? [];
  const currentLesson = lessons.find((l) => l.id === Number(lessonId));
  const currentIdx = lessons.findIndex((l) => l.id === Number(lessonId));
  const prevLesson = currentIdx > 0 ? lessons[currentIdx - 1] : null;
  const nextLesson = currentIdx < lessons.length - 1 ? lessons[currentIdx + 1] : null;

  const lessonTitle = currentLesson?.title ?? `Aula ${lessonId}`;
  const duration = currentLesson?.duration ?? "—";

  return (
    <PageShell title={lessonTitle}>
      <BackLink
        to={`/mission/${missionId}`}
        label={`Voltar para Missão ${missionId}`}
        className="mb-4"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5">
        {/* Player */}
        <div>
          <div
            className="relative rounded-[14px] border border-black/[0.04] overflow-hidden aspect-video"
            style={{
              background:
                "linear-gradient(135deg, #1A1A2E 0%, #2A1F3D 40%, #3A2040 70%, #4A2540 100%)",
            }}
          >
            {/* Overlay decorativo */}
            <div
              className="absolute inset-0 opacity-[0.10]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 25% 25%, #F5C9A0 0%, transparent 50%), radial-gradient(circle at 75% 75%, #C8B8D8 0%, transparent 50%)",
              }}
            />

            <button
              type="button"
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Reproduzir aula"
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
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-sm text-white/90 text-[11px] font-normal px-3 py-1">
              <Clock size={11} strokeWidth={1.5} />
              {duration}
            </span>

            {/* Badge missao */}
            <span className="absolute top-4 left-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-[10px] font-normal tracking-[0.08em] uppercase px-3 py-1">
              Missão {missionId} · Aula {lessonId}
            </span>
          </div>

          {/* Descricao */}
          <div className="mt-5 rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5">
            <p className="text-[14px] font-normal text-black/65 leading-[1.7]">
              Este é o conteúdo da aula selecionada. Aqui você encontrará o vídeo
              completo com explicações passo a passo, dicas práticas e exercícios para
              aplicar na sua loja Shopee.
            </p>
          </div>

          {/* Marcar concluida + navegacao */}
          <div className="mt-5 flex items-center justify-between flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setCompleted((c) => !c)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-normal transition-colors border ${
                completed
                  ? "bg-[#22C55E]/[0.08] text-[#15803d] border-[#22C55E]/25"
                  : "bg-white/60 text-black/65 border-black/[0.08] hover:bg-black/[0.03]"
              }`}
            >
              {completed ? (
                <>
                  <CheckCircle2 size={14} strokeWidth={1.5} />
                  Aula concluída
                </>
              ) : (
                <>
                  <Circle size={14} strokeWidth={1.5} />
                  Marcar como concluída
                </>
              )}
            </button>

            <div className="flex items-center gap-2">
              {prevLesson && (
                <a
                  href={`/lesson/${missionId}/${prevLesson.id}`}
                  className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-[12px] font-normal text-black/60 border border-black/[0.08] hover:bg-black/[0.03] transition-colors"
                >
                  ← Aula anterior
                </a>
              )}
              {nextLesson && (
                <a
                  href={`/lesson/${missionId}/${nextLesson.id}`}
                  className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-[12px] font-normal bg-[#fb923c]/15 text-[#A8692A] border border-[#fb923c]/25 hover:bg-[#fb923c]/25 transition-colors"
                >
                  Próxima aula
                  <ChevronRight size={12} strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar de aulas da missao */}
        <aside className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5 self-start">
          <p className="text-[11px] font-normal tracking-[0.08em] uppercase text-black/30 mb-3">
            Aulas da Missão {missionId}
          </p>
          <div className="space-y-1">
            {lessons.map((l) => {
              const isCurrent = l.id === Number(lessonId);
              const blocked = l.status === "bloqueada";
              const Icon =
                l.status === "concluida"
                  ? CheckCircle2
                  : blocked
                  ? Lock
                  : Circle;
              const iconColor =
                l.status === "concluida"
                  ? "text-[#22C55E]"
                  : blocked
                  ? "text-black/25"
                  : isCurrent
                  ? "text-[#fb923c]"
                  : "text-black/40";

              return (
                <a
                  key={l.id}
                  href={blocked ? undefined : `/lesson/${missionId}/${l.id}`}
                  className={`flex items-start gap-2.5 px-2.5 py-2 rounded-[10px] transition-colors ${
                    isCurrent
                      ? "bg-[#fb923c]/[0.08] border border-[#fb923c]/25"
                      : blocked
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-black/[0.02]"
                  }`}
                >
                  <Icon size={14} strokeWidth={1.5} className={`${iconColor} mt-0.5 shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-[12px] font-normal leading-[1.4] ${
                        isCurrent
                          ? "text-black/85 font-medium"
                          : blocked
                          ? "text-black/40"
                          : "text-black/65"
                      }`}
                    >
                      {l.title}
                    </p>
                    <p className="text-[10px] font-normal text-black/30 mt-0.5">
                      {l.duration}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
