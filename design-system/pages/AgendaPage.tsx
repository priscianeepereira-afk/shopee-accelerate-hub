import { useState, useMemo } from 'react';
import { DayPicker } from 'react-day-picker';
import {
  ChevronLeft, ChevronRight, CalendarDays, Video, Zap,
  Clock, User, Users, CheckCircle, Trophy
} from 'lucide-react';
import { format, isSameDay, isAfter } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { mockScheduledEvents } from '../data/mock-data';
import type { MockScheduledEvent } from '../data/mock-data';

/* ─── Event Card ─── */

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
        event.enrolled ? 'border-l-2 border-l-[#fb923c]/40' : ''
      }`}
    >
      {/* Badge row */}
      <div className="flex items-center gap-2 mb-3">
        {event.type === 'aula' ? (
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

      {/* Title & Description */}
      <h4 className="text-[15px] font-normal tracking-[-0.01em] text-black/85 mb-1.5">
        {event.title}
      </h4>
      <p className="text-[13px] font-normal text-black/40 leading-[1.6] mb-3">
        {event.description}
      </p>

      {/* Metadata */}
      <div className="flex items-center gap-4 text-[11px] font-normal text-black/30 mb-4">
        {showDate && (
          <span className="flex items-center gap-1">
            <CalendarDays size={11} strokeWidth={1.5} />
            {format(event.date, "d 'de' MMM", { locale: ptBR })}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Clock size={11} strokeWidth={1.5} />
          {event.time} · {event.duration}
        </span>
        {event.instructor && (
          <span className="flex items-center gap-1">
            <User size={11} strokeWidth={1.5} />
            <span className="text-black/50">{event.instructor}</span>
          </span>
        )}
        {event.spots && (
          <span className="flex items-center gap-1">
            <Users size={11} strokeWidth={1.5} />
            {event.spots} vagas
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {event.enrolled ? (
          <button
            onClick={() => onToggleEnroll(event.id)}
            className="rounded-full px-4 py-1.5 text-[12px] font-normal border border-[#fb923c]/30 text-[#fb923c]/70 hover:bg-[#fb923c]/[0.04] transition-colors"
          >
            Cancelar Inscrição
          </button>
        ) : (
          <button
            onClick={() => onToggleEnroll(event.id)}
            className="rounded-full px-4 py-1.5 text-[12px] font-normal bg-[#fb923c]/15 text-black/70 hover:bg-[#fb923c]/25 transition-colors"
          >
            Quero Participar
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── Main Page ─── */

export default function AgendaPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(2026, 3, 1)
  );
  const [events, setEvents] = useState<MockScheduledEvent[]>(mockScheduledEvents);

  const toggleEnroll = (id: string) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, enrolled: !e.enrolled } : e))
    );
  };

  // Events on selected date
  const selectedDateEvents = useMemo(
    () =>
      selectedDate
        ? events.filter((e) => isSameDay(e.date, selectedDate))
        : [],
    [events, selectedDate]
  );

  // All upcoming events sorted
  const upcomingEvents = useMemo(
    () =>
      [...events]
        .filter((e) => isAfter(e.date, new Date(2026, 2, 31)))
        .sort((a, b) => a.date.getTime() - b.date.getTime()),
    [events]
  );

  // Stats
  const enrolledCount = events.filter((e) => e.enrolled).length;
  const challengeCount = events.filter((e) => e.type === 'desafio').length;

  // Dates that have events (for calendar highlighting)
  const eventDates = events.map((e) => e.date);

  return (
    <div className="space-y-14">
      {/* Page header */}
      <div>
        <h1 className="text-[32px] font-normal tracking-[-0.02em] text-black/85">
          Agenda de Aulas
        </h1>
        <p className="text-[15px] font-normal text-black/35 mt-1">
          Aulas ao vivo e desafios para impulsionar suas vendas.
        </p>
      </div>

      <ShowcaseSection title="Calendário & Eventos" description="Selecione uma data para ver os eventos ou navegue pela lista completa.">
        <div
          className="flex rounded-[14px] border border-black/[0.04] overflow-hidden h-[720px]"
          style={{ background: 'linear-gradient(135deg, rgba(245,201,160,0.10) 0%, rgba(221,214,238,0.12) 50%, rgba(242,196,204,0.08) 100%)' }}
        >
          {/* ── Left column: Calendar + Stats ── */}
          <div className="w-[360px] shrink-0 overflow-y-auto p-6 space-y-5">
            {/* Calendar — card separado com borda cream */}
            <div className="rounded-[14px] border border-[#F5EDE5] bg-white/[0.5] backdrop-blur-md p-4 shadow-[0_1px_4px_rgba(0,0,0,0.02)] overflow-hidden">
              <DayPicker
                mode="single"
                locale={ptBR}
                selected={selectedDate}
                onSelect={setSelectedDate}
                defaultMonth={new Date(2026, 3)}
                modifiers={{ hasEvent: eventDates }}
                modifiersClassNames={{
                  hasEvent: 'bloom-cal-has-event',
                }}
                components={{
                  IconLeft: () => <ChevronLeft size={14} strokeWidth={1.5} />,
                  IconRight: () => <ChevronRight size={14} strokeWidth={1.5} />,
                }}
                classNames={{
                  months: 'flex flex-col space-y-4',
                  month: 'space-y-4',
                  caption: 'flex justify-center pt-1 relative items-center',
                  caption_label: 'text-[14px] font-normal text-black/70',
                  nav: 'space-x-1 flex items-center',
                  nav_button:
                    'h-7 w-7 rounded-full bg-white/[0.5] backdrop-blur-sm border border-[#F5EDE5] inline-flex items-center justify-center text-black/30 hover:bg-white/[0.7] hover:text-black/50 transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.03)]',
                  nav_button_previous: 'absolute left-1',
                  nav_button_next: 'absolute right-1',
                  table: 'w-full border-collapse space-y-1',
                  head_row: 'flex',
                  head_cell:
                    'text-black/25 rounded-md w-10 font-normal text-[11px] text-center',
                  row: 'flex w-full mt-2',
                  cell: 'bloom-cal-cell h-10 w-10 text-center text-[13px] p-0 relative',
                  day: 'bloom-cal-day h-8 w-8 p-0 font-normal rounded-full bg-white/[0.45] backdrop-blur-sm border border-white/[0.5] shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_1px_3px_rgba(0,0,0,0.04)] hover:bg-white/[0.7] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_2px_6px_rgba(0,0,0,0.06)] transition-all text-black/60 inline-flex items-center justify-center',
                  day_range_end: 'day-range-end',
                  day_selected:
                    'bg-[#fb923c] text-white border-[#fb923c]/30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_2px_8px_rgba(251,146,60,0.3)] hover:bg-[#fb923c] hover:text-white focus:bg-[#fb923c] focus:text-white',
                  day_today: 'bg-[#F5C9A0]/20 text-black/70 border-[#F5C9A0]/30',
                  day_outside: 'text-black/15 opacity-40 bg-transparent border-transparent shadow-none',
                  day_disabled: 'text-black/15 bg-transparent border-transparent shadow-none',
                  day_hidden: 'invisible',
                }}
              />

              {/* Calendar legend */}
              <div className="flex items-center gap-4 text-[11px] font-normal text-black/25 px-1 mt-3 pt-3 border-t border-[#F5EDE5]/60">
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

            {/* Quick Stats */}
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
                    {events.length}
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

            {/* Gamification hint */}
            <div className="rounded-[14px] border border-black/[0.04] bg-[#DDD6EE]/10 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Trophy size={14} strokeWidth={1.5} className="text-[#7A64C0]/60" />
                <span className="text-[12px] font-normal text-black/50">
                  Pontuação
                </span>
              </div>
              <p className="text-[11px] font-normal text-black/30 leading-[1.5]">
                Cada aula concluída vale 50 pontos. Desafios completados valem 100 pontos e um selo exclusivo.
              </p>
            </div>
          </div>

          {/* ── Right column: Events ── */}
          <div className="flex-1 overflow-y-auto p-6 border-l border-black/[0.04]">
            {/* Selected date header */}
            {selectedDate && (
              <div className="mb-5">
                <h3 className="text-[18px] font-normal tracking-[-0.01em] text-black/85">
                  {format(selectedDate, "d 'de' MMMM, EEEE", { locale: ptBR })}
                </h3>
                <p className="text-[13px] font-normal text-black/30 mt-0.5">
                  {selectedDateEvents.length === 0
                    ? 'Nenhum evento nesta data'
                    : `${selectedDateEvents.length} evento${selectedDateEvents.length > 1 ? 's' : ''}`}
                </p>
              </div>
            )}

            {/* Events for selected date */}
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-3 mb-8">
                {selectedDateEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onToggleEnroll={toggleEnroll}
                  />
                ))}
              </div>
            ) : (
              selectedDate && (
                <div className="rounded-[14px] border border-black/[0.04] bg-white/60 p-8 text-center mb-8">
                  <CalendarDays
                    size={28}
                    strokeWidth={1.5}
                    className="text-black/15 mx-auto mb-2"
                  />
                  <p className="text-[13px] font-normal text-black/30">
                    Nenhum evento agendado para esta data.
                  </p>
                  <p className="text-[11px] font-normal text-black/20 mt-1">
                    Selecione outra data ou confira os próximos eventos abaixo.
                  </p>
                </div>
              )
            )}

            {/* All upcoming events */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-[15px] font-normal tracking-[-0.01em] text-black/70">
                  Próximos Eventos
                </h3>
                <span className="text-[11px] font-normal text-black/25">
                  {upcomingEvents.length} agendados
                </span>
              </div>
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
            </div>
          </div>
        </div>
      </ShowcaseSection>

      {/* Calendar styles — balão dentro de balão + light glass */}
      <style>{`
        /* Outer cell: the "outer balloon" container */
        .bloom-cal-cell {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1px;
        }

        /* Event day highlight: warm glass bubble */
        .bloom-cal-has-event:not([aria-selected="true"]) {
          background: rgba(245, 201, 160, 0.25) !important;
          border-color: rgba(245, 201, 160, 0.4) !important;
          color: rgba(0, 0, 0, 0.85) !important;
          box-shadow:
            inset 0 1px 2px rgba(255, 255, 255, 0.5),
            0 2px 6px rgba(245, 201, 160, 0.2) !important;
        }

        /* Selected day: strong orange glass */
        .bloom-cal-day[aria-selected="true"] {
          background: #fb923c !important;
          border-color: rgba(251, 146, 60, 0.3) !important;
          color: white !important;
          box-shadow:
            inset 0 1px 2px rgba(255, 255, 255, 0.3),
            0 2px 8px rgba(251, 146, 60, 0.3) !important;
        }
      `}</style>
    </div>
  );
}
