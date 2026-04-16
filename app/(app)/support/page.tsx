"use client";

// Central de Suporte
// Front-end only. Baseado em DESCRICAO DE TELAS/Support.md.
// Segue o padrao Bloom de card: bg creme #FAF8F5, borda black/[0.04],
// rounded-[16px], linha colorida 3px no topo. Icones 100% lucide (mono,
// sem emoji).

import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { supportChannelIcons } from "@/design-system/icon-tokens";

interface SupportOption {
  key: keyof typeof supportChannelIcons;
  title: string;
  desc: string;
  availability: string;
}

const options: SupportOption[] = [
  {
    key: "chat",
    title: "Chat ao Vivo",
    desc: "Converse em tempo real com nossa equipe de suporte.",
    availability: "Online agora",
  },
  {
    key: "ticket",
    title: "Abrir Chamado",
    desc: "Envie uma solicitação detalhada e receba resposta em até 24h.",
    availability: "Resposta em 24h",
  },
  {
    key: "faq",
    title: "FAQ",
    desc: "Encontre respostas para as perguntas mais frequentes.",
    availability: "Sempre disponível",
  },
];

export default function SupportPage() {
  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div
        className="rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40"
        style={{ minHeight: "720px", maxHeight: "calc(100vh - 7rem)" }}
      >
        <div className="flex-1 overflow-y-auto p-8">
          {/* Titulo */}
          <h1 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">
            Central de Suporte
          </h1>
          <p className="text-[14px] font-normal text-black/35 mt-1 mb-8">
            Como podemos ajudar?
          </p>

          {/* Grid de canais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {options.map(({ key, title, desc, availability }) => {
              const { icon: Icon, color, textColor } = supportChannelIcons[key];
              return (
                <button
                  key={key}
                  type="button"
                  className="group relative text-left rounded-[16px] border border-black/[0.04] bg-[#FAF8F5] overflow-hidden flex flex-col transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-black/[0.08]"
                >
                  {/* Borda colorida no topo — padrao Bloom */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ backgroundColor: color }}
                  />

                  <div className="p-7 flex-1 flex flex-col">
                    {/* Container do icone */}
                    <div
                      className="h-14 w-14 rounded-[14px] flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${color}22` }}
                    >
                      <Icon
                        size={26}
                        strokeWidth={1.5}
                        style={{ color: textColor }}
                      />
                    </div>

                    {/* Titulo + descricao */}
                    <h3 className="text-[17px] font-normal tracking-[-0.01em] text-black/85 mb-1.5">
                      {title}
                    </h3>
                    <p className="text-[13px] font-normal text-black/45 leading-[1.6] mb-5 flex-1">
                      {desc}
                    </p>

                    {/* Disponibilidade */}
                    <div className="inline-flex items-center gap-1.5 mb-4">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <span
                        className="text-[11px] font-normal"
                        style={{ color: textColor }}
                      >
                        {availability}
                      </span>
                    </div>
                  </div>

                  {/* Rodape com CTA */}
                  <div
                    className="px-7 py-4 border-t border-black/[0.04] flex items-center justify-between transition-colors"
                    style={{ backgroundColor: `${color}10` }}
                  >
                    <span
                      className="text-[12px] font-normal"
                      style={{ color: textColor }}
                    >
                      Acessar
                    </span>
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      style={{ color: textColor }}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Blocos auxiliares — horario + SLA */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={14} strokeWidth={1.5} className="text-black/40" />
                <span className="text-[12px] font-normal text-black/60">
                  Horário de atendimento
                </span>
              </div>
              <p className="text-[13px] font-normal text-black/55 leading-[1.6]">
                Segunda a sexta, das 9h às 18h (BRT). Fora desse período você pode abrir
                um chamado — respondemos em até 24h úteis.
              </p>
            </div>

            <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck
                  size={14}
                  strokeWidth={1.5}
                  className="text-black/40"
                />
                <span className="text-[12px] font-normal text-black/60">
                  Atendimento humano
                </span>
              </div>
              <p className="text-[13px] font-normal text-black/55 leading-[1.6]">
                Todo chat é atendido por um profissional treinado. Sem robô, sem loop de
                FAQ enrolado — resposta direta pra resolver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
