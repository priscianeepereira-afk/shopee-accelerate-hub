"use client";

// Agenda de Aulas e Desafios
// Front-end only. Baseado em DESCRICAO DE TELAS/CalendarAgenda.md e no visual
// do Bloom Design System (design-system/pages/AgendaPage.tsx).
//
// - 2 colunas: Calendário + Resumo | Eventos do dia + Próximos Eventos
// - Mocks importados de design-system/data/mock-data.ts
// - Calendário custom (sem react-day-picker) pra nao adicionar dependencia
// - Estado local com useState (sem API, sem localStorage)

import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Video,
  Zap,
  Clock,
  User,
  Users,
  CheckCircle,
  Trophy,
  ExternalLink,
} from "lucide-react";
import {
  mockScheduledEvents,
  type MockScheduledEvent,
} from "@/design-system/data/mock-data";

// ============ Helpers de data (locale pt-BR via Intl) ============

const WEEKDAYS_SHORT = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

const fmtMonthYear = (d: Date) =>
  new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(d);

const fmtLongDate = (d: Date) =>
  new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    weekday: "long",
  }).format(d);

const fmtShortDate = (d: Date) =>
  new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit" }).format(d);

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1);
const addMonths = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth() + n, 1);

// Gera 6 semanas (42 celulas) a partir do primeiro dia da grade
function buildMonthGrid(visibleMonth: Date): Date[] {
  const first = startOfMonth(visibleMonth);
  const startWeekday = first.getDay(); // 0 = domingo
  const gridStart = new Date(first);
  gridStart.setDate(first.getDate() - startWeekday);
  const cells: Date[] = [];
  for (let i = 0; i < 42; i++) {
    cells.push(new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i));
  }
  return cells;
}

// ============ Event Card ============

function EventCard({
  event,
  onToggleEnroll,
  showDate,
}: {
  event: MockScheduledEvent;
  onToggleEnroll: (id: string) => void;
  showDate?: boolean;
}) {
  return (
    <div
      className={`rounded-[14px] border border-black/[0.04] bg-white/60 p-5 transition-all hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${
        event.enrolled ? "border-l-2 border-l-[#fb923c]/40" : ""
      }`}
    >
      {/* Badges */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        {event.type === "aula" ? (
          <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-normal bg-[#F5C9A0]/20 text-[#fb923c] border border-[#fb923c]/10">
            <Video size={11} strokeWidth={1.5} />
            Aula ao Vivo
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-normal bg-[#DDD6EE]/30 text-[#7A64C0] border border-[#7A64C0]/10">
            <Zap size={11} strokeWidth={1.5} />
            Desafio
          </span>
        )}
        {event.enrolled && (
          <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-normal bg-[#22C55E]/[0.08] text-[#15803d] border border-[#22C55E]/10">
            <CheckCircle size={10} strokeWidth={1.5} />
            Inscrita
          </span>
        )}
      </div>

      {/* Title + description */}
      <h4 className="text-[15px] font-normal tracking-[-0.01em] text-black/85 mb-1.5">
        {event.title}
      </h4>
      <p className="text-[13px] font-normal text-black/50 leading-[1.6] mb-3">
        {event.description}
      </p>

      {/* Metadata */}
      <div className="flex items-center gap-4 text-[11px] font-normal text-black/35 mb-4 flex-wrap">
        {showDate && (
          <span className="flex items-center gap-1">
            <CalendarDays size={11} strokeWidth={1.5} />
            {fmtShortDate(event.date)}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Clock size={11} strokeWidth={1.5} />
          {event.time}
          {event.duration ? ` · ${event.duration}` : ""}
        </span>
        {event.instructor && (
          <span className="flex items-center gap-1">
            <User size={11} strokeWidth={1.5} />
            <span className="text-black/55">com {event.instructor}</span>
          </span>
        )}
        {event.spots !== undefined && (
          <span className="flex items-center gap-1">
            <Users size={11} strokeWidth={1.5} />
            {event.spots} vagas
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 flex-wrap">
        {event.enrolled ? (
          <>
            <button
              type="button"
              onClick={() => onToggleEnroll(event.id)}
              className="rounded-full px-4 py-1.5 text-[12px] font-normal border border-[#fb923c]/30 text-[#fb923c]/80 hover:bg-[#fb923c]/[0.04] transition-colors"
            >
              Cancelar Inscrição
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12px] font-normal text-black/50 hover:text-black/70 transition-colors"
            >
              <ExternalLink size={12} strokeWidth={1.5} />
              Adicionar ao Google Agenda
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => onToggleEnroll(event.id)}
            className="rounded-full px-4 py-1.5 text-[12px] font-normal bg-[#fb923c]/15 text-black/70 border border-[#fb923c]/25 hover:bg-[#fb923c]/25 transition-colors"
          >
            Quero Participar
          </button>
        )}
      </div>
    </div>
  );
}

// ============ Calendar custom ============

interface CalendarProps {
  value: Date;
  onChange: (d: Date) => void;
  eventDates: Date[];
}

function Calendar({ value, onChange, eventDates }: CalendarProps) {
  const [visibleMonth, setVisibleMonth] = useState<Date>(startOfMonth(value));
  const cells = useMemo(() => buildMonthGrid(visibleMonth), [visibleMonth]);
  const today = new Date();

  const hasEvent = (d: Date) => eventDates.some((ed) => isSameDay(ed, d));

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={() => setVisibleMonth((m) => addMonths(m, -1))}
          className="h-7 w-7 rounded-full bg-white/[0.5] backdrop-blur-sm border border-[#F5EDE5] inline-flex items-center justify-center text-black/40 hover:bg-white/[0.7] hover:text-black/60 transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
          aria-label="Mês anterior"
        >
          <ChevronLeft size={14} strokeWidth={1.5} />
        </button>
        <span className="text-[14px] font-normal text-black/70 capitalize">
          {fmtMonthYear(visibleMonth)}
        </span>
        <button
          type="button"
          onClick={() => setVisibleMonth((m) => addMonths(m, 1))}
          className="h-7 w-7 rounded-full bg-white/[0.5] backdrop-blur-sm border border-[#F5EDE5] inline-flex items-center justify-center text-black/40 hover:bg-white/[0.7] hover:text-black/60 transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
          aria-label="Próximo mês"
        >
          <ChevronRight size={14} strokeWidth={1.5} />
        </button>
      </div>

      {/* Weekdays row */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {WEEKDAYS_SHORT.map((w) => (
          <div
            key={w}
            className="h-8 flex items-center justify-center text-[11px] font-normal text-black/25"
          >
            {w}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, idx) => {
          const inMonth = d.getMonth() === visibleMonth.getMonth();
          const selected = isSameDay(d, value);
          const isToday = isSameDay(d, today);
          const hasEv = hasEvent(d);

          return (
            <button
              type="button"
              key={idx}
              onClick={() => onChange(d)}
              className="h-10 w-full flex items-center justify-center"
            >
              <span
                className={[
                  "h-8 w-8 rounded-full inline-flex items-center justify-center text-[13px] font-normal transition-all",
                  "border",
                  !inMonth && "text-black/20 border-transparent bg-transparent",
                  inMonth && !selected && !hasEv && "bg-white/[0.5] border-white/[0.5] text-black/60 hover:bg-white/[0.75]",
                  inMonth && !selected && hasEv && "bg-[#F5C9A0]/25 border-[#F5C9A0]/40 text-black/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_2px_6px_rgba(245,201,160,0.2)]",
                  selected && "bg-[#fb923c] border-[#fb923c]/30 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_2px_8px_rgba(251,146,60,0.3)]",
                  inMonth && isToday && !selected && "ring-1 ring-[#F5C9A0]/60",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {d.getDate()}
              </span>
            </button>
          );
        })}
      </div>

      {/* Legenda */}
      <div className="flex items-center gap-4 text-[11px] font-normal text-black/30 px-1 mt-3 pt-3 border-t border-[#F5EDE5]/60">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F5C9A0]/50" />
          Dia com evento
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#fb923c]" />
          Selecionado
        </span>
      </div>
    </div>
  );
}

// ============ Pagina ============

export default function AgendaPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2026, 3, 1));
  const [events, setEvents] = useState<MockScheduledEvent[]>(mockScheduledEvents);

  const toggleEnroll = (id: string) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, enrolled: !e.enrolled } : e))
    );
  };

  const selectedEvents = useMemo(
    () => events.filter((e) => isSameDay(e.date, selectedDate)),
    [events, selectedDate]
  );

  const upcomingEvents = useMemo(() => {
    const now = new Date();
    // zera horário para comparar só o dia
    const today0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return [...events]
      .filter((e) => e.date.getTime() >= today0.getTime())
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }, [events]);

  const enrolledCount = events.filter((e) => e.enrolled).length;
  const challengeCount = events.filter((e) => e.type === "desafio").length;

  const eventDates = events.map((e) => e.date);

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div
        className="flex rounded-[14px] border border-black/[0.04] overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(245,201,160,0.10) 0%, rgba(221,214,238,0.12) 50%, rgba(242,196,204,0.08) 100%)",
          minHeight: "720px",
          maxHeight: "calc(100vh - 7rem)",
        }}
      >
        {/* ===== Coluna esquerda: Calendário + Resumo ===== */}
        <div className="w-[360px] shrink-0 overflow-y-auto p-6 space-y-5">
          <div className="rounded-[14px] border border-[#F5EDE5] bg-white/[0.5] backdrop-blur-md p-4 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
            <Calendar
              value={selectedDate}
              onChange={setSelectedDate}
              eventDates={eventDates}
            />
          </div>

          {/* Resumo */}
          <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-4 space-y-3">
            <h3 className="text-[13px] font-normal text-black/70">Resumo</h3>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-normal text-black/30">
                  Aulas inscritas
                </span>
                <span className="text-[14px] font-medium text-[#fb923c]">
                  {enrolledCount}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-normal text-black/30">
                  Próximos eventos
                </span>
                <span className="text-[14px] font-medium text-black/85">
                  {upcomingEvents.length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-normal text-black/30">
                  Desafios ativos
                </span>
                <span className="text-[14px] font-medium text-[#7A64C0]">
                  {challengeCount}
                </span>
              </div>
            </div>
          </div>

          {/* Pontuação hint */}
          <div className="rounded-[14px] border border-black/[0.04] bg-[#DDD6EE]/10 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy size={14} strokeWidth={1.5} className="text-[#7A64C0]/60" />
              <span className="text-[12px] font-normal text-black/50">Pontuação</span>
            </div>
            <p className="text-[11px] font-normal text-black/35 leading-[1.5]">
              Cada aula concluída vale 50 pontos. Desafios completados valem 100 pontos e
              um selo exclusivo.
            </p>
          </div>
        </div>

        {/* ===== Coluna direita: Eventos ===== */}
        <div className="flex-1 overflow-y-auto p-6 border-l border-black/[0.04]">
          {/* Titulo da tela — padrao: inside card, 24px */}
          <h1 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">
            Agenda de Aulas e Desafios
          </h1>
          <p className="text-[14px] font-normal text-black/35 mt-1 mb-6">
            Confira as próximas aulas ao vivo e desafios da plataforma.
          </p>

          {/* Selected date header */}
          <div className="mb-5">
            <h3 className="text-[18px] font-normal tracking-[-0.01em] text-black/85 capitalize">
              {fmtLongDate(selectedDate)}
            </h3>
            <p className="text-[13px] font-normal text-black/35 mt-0.5">
              {selectedEvents.length === 0
                ? "Nenhum evento nesta data"
                : `${selectedEvents.length} evento${selectedEvents.length > 1 ? "s" : ""}`}
            </p>
          </div>

          {selectedEvents.length > 0 ? (
            <div className="space-y-3 mb-8">
              {selectedEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onToggleEnroll={toggleEnroll}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[14px] border border-black/[0.04] bg-white/60 p-8 text-center mb-8">
              <CalendarDays
                size={28}
                strokeWidth={1.5}
                className="text-black/15 mx-auto mb-2"
              />
              <p className="text-[13px] font-normal text-black/35">
                Nenhum evento agendado para esta data.
              </p>
              <p className="text-[11px] font-normal text-black/25 mt-1">
                Selecione outra data ou confira os próximos eventos abaixo.
              </p>
            </div>
          )}

          {/* Próximos eventos */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-[15px] font-normal tracking-[-0.01em] text-black/70">
                Próximos Eventos
              </h3>
              <span className="text-[11px] font-normal text-black/25">
                {upcomingEvents.length} agendados
              </span>
            </div>
            {upcomingEvents.length > 0 ? (
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <EventCard
                    key={`upcoming-${event.id}`}
                    event={event}
                    onToggleEnroll={toggleEnroll}
                    showDate
                  />
                ))}
              </div>
            ) : (
              <p className="text-[12px] font-normal text-black/30">
                Nenhum evento futuro agendado.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
