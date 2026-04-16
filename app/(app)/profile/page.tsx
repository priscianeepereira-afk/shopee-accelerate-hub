"use client";

// Meu Perfil
// Front-end only. Baseado em DESCRICAO DE TELAS/MyProfile.md.
// Icones 100% lucide-react (mono, stroke 1.5). Zero emoji de UI.

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Pencil,
  Share2,
  Lock,
  Trophy,
  ChevronDown,
  ChevronUp,
  BookOpen,
  CircleDot,
  CheckCircle2,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { avatarStyle } from "@/design-system/avatar-tokens";
import {
  badgeIconMap,
  notebookIconMap,
  podiumPositions,
} from "@/design-system/icon-tokens";

// ============ Mocks ============

interface ProfileBadge {
  id: keyof typeof badgeIconMap;
  label: string;
  desc: string;
  earned: boolean;
  points: number;
  shareText: string;
}

const badges: ProfileBadge[] = [
  {
    id: "m1",
    label: "Missão 1 Completa",
    desc: "Concluiu todas as tarefas da Missão 1",
    earned: true,
    points: 200,
    shareText: "Completei a Missão 1 — Sua Loja em 7 Dias!",
  },
  {
    id: "m2",
    label: "Missão 2 Completa",
    desc: "Concluiu o plano de 7 dias da Missão 2",
    earned: false,
    points: 350,
    shareText: "Completei a Missão 2 — Triplicando Vendas!",
  },
  {
    id: "tools",
    label: "Ferramentas Ativas",
    desc: "Usou todas as ferramentas de aceleração de vendas",
    earned: false,
    points: 150,
    shareText: "Usei todas as ferramentas de aceleração de vendas!",
  },
  {
    id: "first-sale",
    label: "Primeira Venda",
    desc: "Realizou sua primeira venda na Shopee",
    earned: true,
    points: 100,
    shareText: "Fiz minha primeira venda na Shopee!",
  },
  {
    id: "50-sales",
    label: "50 Vendas",
    desc: "Alcançou 50 vendas na Shopee",
    earned: false,
    points: 500,
    shareText: "Alcancei 50 vendas na Shopee!",
  },
  {
    id: "community",
    label: "Voz da Comunidade",
    desc: "Fez 10 comentários úteis na comunidade",
    earned: false,
    points: 80,
    shareText: "Sou uma voz ativa na comunidade Vend.A.I.!",
  },
];

interface Task {
  text: string;
  sub?: string;
  done: boolean;
  steps: string[];
}

interface Notebook {
  id: keyof typeof notebookIconMap;
  title: string;
  date: string;
  tasks: Task[];
}

const notebooks: Notebook[] = [
  {
    id: "plano7",
    title: "Plano 7 Dias — Foco em Tráfego",
    date: new Intl.DateTimeFormat("pt-BR").format(new Date()),
    tasks: [
      {
        text: "Crie 3 Reels no Instagram",
        sub: "Dia 1",
        done: false,
        steps: [
          "Escolha 3 produtos que você quer destacar",
          "Grave vídeos curtos (15-30s) mostrando o produto em uso",
          "Use músicas em alta no Instagram para aumentar alcance",
          "Adicione o link da sua loja Shopee na bio",
          "Publique os Reels em horários de pico (12h, 18h ou 21h)",
        ],
      },
      {
        text: "Publique no Shopee Vídeos",
        sub: "Dia 2",
        done: false,
        steps: [
          "Acesse o painel do vendedor na Shopee",
          "Vá em 'Central de Marketing' → 'Shopee Vídeos'",
          "Envie pelo menos 2 vídeos curtos dos seus produtos",
          "Use legendas com palavras-chave relevantes",
          "Marque os produtos correspondentes nos vídeos",
        ],
      },
      {
        text: "Stories diários com produtos",
        sub: "Dia 3",
        done: true,
        steps: [
          "Poste pelo menos 5 stories ao longo do dia",
          "Use enquetes e caixas de perguntas para engajar",
          "Adicione links diretos para os produtos na Shopee",
          "Mostre bastidores, embalagens e envios",
          "Salve os melhores stories nos destaques",
        ],
      },
      {
        text: "Otimize títulos para busca",
        sub: "Dia 4",
        done: false,
        steps: [
          "Pesquise os termos mais buscados na Shopee para seu nicho",
          "Reescreva os títulos dos seus 3 principais produtos",
          "Inclua palavras-chave como: marca, tipo, material, tamanho",
          "Mantenha o título com até 120 caracteres",
          "Evite usar CAPS LOCK ou emojis no título",
        ],
      },
      {
        text: "Cupom de seguidor",
        sub: "Dia 5",
        done: false,
        steps: [
          "Acesse 'Central de Marketing' → 'Cupons'",
          "Crie um cupom exclusivo para novos seguidores",
          "Defina desconto entre 5% e 15% com valor mínimo de compra",
          "Configure a validade por 7 dias",
          "Divulgue o cupom nos seus stories e bio",
        ],
      },
      {
        text: "Carrossel de produtos",
        sub: "Dia 6",
        done: false,
        steps: [
          "Selecione seus 5 produtos mais atrativos",
          "Crie um carrossel no Instagram com fotos de qualidade",
          "Na legenda, destaque benefícios de cada produto",
          "Adicione CTA: 'Link na bio para comprar'",
          "Use hashtags relevantes do seu nicho (10-15 hashtags)",
        ],
      },
      {
        text: "Analise tráfego da semana",
        sub: "Dia 7",
        done: false,
        steps: [
          "Acesse 'Dados da Loja' no painel do vendedor",
          "Compare visualizações desta semana vs semana anterior",
          "Identifique qual fonte trouxe mais visitantes",
          "Verifique quais produtos tiveram mais cliques",
          "Dobre a aposta nas estratégias que mais funcionaram",
        ],
      },
    ],
  },
  {
    id: "ferramentas",
    title: "Ferramentas de Vendas — Fotos com IA",
    date: "18/03/2026",
    tasks: [
      {
        text: "Corrigir títulos dos anúncios com palavras-chave",
        done: false,
        steps: [
          "Acesse a lista de produtos no painel do vendedor",
          "Identifique os anúncios com títulos genéricos ou curtos",
          "Pesquise palavras-chave populares na barra de busca da Shopee",
          "Reescreva cada título incluindo: tipo + marca + material + tamanho",
          "Salve e verifique se os títulos têm entre 80-120 caracteres",
        ],
      },
      {
        text: "Configurar respostas automáticas no painel Shopee",
        done: false,
        steps: [
          "Acesse 'Central do Vendedor' → 'Chat'",
          "Vá em 'Configurações de Chat' → 'Respostas Automáticas'",
          "Crie mensagem de boas-vindas: saudação + cupom disponível",
          "Configure resposta para fora do horário comercial",
          "Adicione respostas rápidas para perguntas frequentes (frete, prazo, tamanho)",
        ],
      },
      {
        text: "Solicitar avaliações para últimos 5 compradores",
        done: false,
        steps: [
          "Acesse 'Meus Pedidos' → 'Concluídos'",
          "Identifique os 5 últimos compradores que não avaliaram",
          "Envie mensagem gentil pelo chat pedindo avaliação com foto",
          "Ofereça um cupom de desconto como agradecimento",
          "Acompanhe se as avaliações foram publicadas em 3 dias",
        ],
      },
    ],
  },
  {
    id: "missao1",
    title: "Missão 1 — Sua Loja em 7 Dias",
    date: "10/03/2026",
    tasks: [
      {
        text: "Criar conta de vendedor na Shopee",
        done: true,
        steps: [
          "Acesse shopee.com.br/seller e clique em 'Cadastrar'",
          "Preencha seus dados pessoais e endereço",
          "Verifique seu e-mail e número de celular",
          "Complete o cadastro da loja com nome e logo",
        ],
      },
      {
        text: "Publicar primeiro produto na loja",
        done: true,
        steps: [
          "Acesse 'Meus Produtos' → 'Adicionar Produto'",
          "Tire pelo menos 5 fotos com fundo branco",
          "Escreva título com palavras-chave relevantes",
          "Preencha descrição completa com benefícios e medidas",
          "Defina preço competitivo e estoque disponível",
        ],
      },
      {
        text: "Configurar métodos de envio",
        done: true,
        steps: [
          "Acesse 'Configurações da Loja' → 'Envio'",
          "Ative pelo menos 2 transportadoras (Correios + outra)",
          "Configure peso e dimensões padrão dos seus produtos",
          "Considere ativar 'Frete Grátis' para produtos com boa margem",
        ],
      },
      {
        text: "Criar cupom de boas-vindas",
        done: true,
        steps: [
          "Vá em 'Central de Marketing' → 'Cupons'",
          "Crie cupom de 10% para novos seguidores",
          "Defina valor mínimo de compra para não perder margem",
          "Divulgue o cupom na bio do Instagram e na descrição da loja",
        ],
      },
      {
        text: "Compartilhar loja no Instagram",
        done: true,
        steps: [
          "Copie o link da sua loja na Shopee",
          "Adicione na bio do Instagram",
          "Crie um post de inauguração da loja",
          "Faça stories mostrando seus primeiros produtos",
        ],
      },
    ],
  },
];

const topRanking = [
  { name: "Carla Mendonça", pts: 4820 },
  { name: "Juliana Torres", pts: 3910 },
  { name: "Fernanda Rocha", pts: 3240 },
];

// ============ Pagina ============

export default function ProfilePage() {
  const router = useRouter();

  const [bio, setBio] = useState(
    "Vendedora Shopee apaixonada por moda fitness."
  );
  const [editBio, setEditBio] = useState(false);
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [expandedNotebook, setExpandedNotebook] = useState<string | null>(
    "plano7"
  );
  const [expandedTask, setExpandedTask] = useState<string | null>(null);
  const [sharedBadge, setSharedBadge] = useState<string | null>(null);

  const toggleTask = (key: string) => {
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isTaskDone = (nbId: string, taskIdx: number, taskDone: boolean) => {
    const key = `${nbId}-${taskIdx}`;
    return checks[key] ?? taskDone;
  };

  const getProgress = (nb: Notebook) => {
    const total = nb.tasks.length;
    const done = nb.tasks.filter((t, i) => isTaskDone(nb.id, i, t.done)).length;
    return Math.round((done / total) * 100);
  };

  const pendingNotebooks = notebooks.filter((nb) => getProgress(nb) < 100);
  const completedNotebooks = notebooks.filter((nb) => getProgress(nb) === 100);

  const earnedBadges = badges.filter((b) => b.earned);
  const totalPoints = useMemo(
    () => earnedBadges.reduce((sum, b) => sum + b.points, 0),
    [earnedBadges]
  );
  const userPoints = 890 + totalPoints;
  const pointsToNext = Math.max(0, 1300 - userPoints);
  const progressToNext = Math.min(100, (userPoints / 1300) * 100);

  const shareBadge = (id: string) => {
    setSharedBadge(id);
    setTimeout(() => setSharedBadge(null), 2000);
  };

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <div
        className="flex rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40"
        style={{ minHeight: "720px", maxHeight: "calc(100vh - 7rem)" }}
      >
        {/* ===== Coluna esquerda — perfil + selos + ranking ===== */}
        <div className="w-[380px] shrink-0 overflow-y-auto p-6 border-r border-black/[0.04]">
          <h1 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">
            Meu Perfil
          </h1>
          <p className="text-[14px] font-normal text-black/35 mt-1 mb-6">
            Seus dados, selos e posição no ranking.
          </p>

          {/* Cartao do perfil */}
          <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5 mb-5">
            <div className="flex flex-col items-center text-center">
              <div className="relative group mb-3">
                <div
                  className="h-20 w-20 rounded-full flex items-center justify-center text-[24px] font-medium text-white"
                  style={avatarStyle("AS", 1.25)}
                >
                  AS
                </div>
                <button
                  type="button"
                  className="absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  aria-label="Editar foto"
                >
                  <Pencil size={16} strokeWidth={1.5} className="text-white" />
                </button>
              </div>
              <h3 className="text-[18px] font-medium tracking-[-0.01em] text-black/85">
                Ana Silva
              </h3>
              <p className="text-[13px] font-normal text-black/35 mb-3">
                @anasilva.shopee
              </p>

              {/* Bio */}
              <div className="w-full">
                {editBio ? (
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    onBlur={() => setEditBio(false)}
                    autoFocus
                    rows={2}
                    className="w-full rounded-[10px] border border-[#F15A5A]/30 bg-white/80 p-3 text-[13px] font-normal text-black/75 focus:outline-none focus:border-[#F15A5A]/50 resize-none"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setEditBio(true)}
                    className="w-full rounded-[10px] border border-dashed border-black/[0.08] bg-white/40 p-3 text-[13px] font-normal text-black/60 leading-[1.55] text-center hover:bg-white/70 hover:border-black/[0.12] transition-colors"
                  >
                    {bio}
                  </button>
                )}
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-full bg-[#F15A5A]/15 text-[#B23838] text-[13px] font-normal px-4 py-2 border border-[#F15A5A]/20 hover:bg-[#F15A5A]/25 transition-colors"
              >
                Salvar Perfil
              </button>
            </div>
          </div>

          {/* Meus selos */}
          <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5 mb-5">
            <h3 className="text-[14px] font-normal text-black/80 mb-4">
              Meus Selos
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {badges.map((b) => {
                const {
                  icon: Icon,
                  color,
                  textColor,
                } = badgeIconMap[b.id];
                const justShared = sharedBadge === b.id;
                return (
                  <div
                    key={b.id}
                    className={`relative group rounded-[12px] border p-3 text-center transition-all ${
                      b.earned
                        ? "bg-white/70 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                        : "bg-black/[0.015] opacity-60"
                    }`}
                    style={{
                      borderColor: b.earned
                        ? `${color}40`
                        : "rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      className="h-9 w-9 rounded-[9px] mx-auto mb-2 flex items-center justify-center"
                      style={{
                        backgroundColor: b.earned ? `${color}22` : "rgba(0,0,0,0.04)",
                      }}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        style={{ color: b.earned ? textColor : "rgba(0,0,0,0.25)" }}
                      />
                    </div>
                    <p
                      className={`text-[10px] font-normal leading-[1.3] mb-1 ${
                        b.earned ? "text-black/75" : "text-black/40"
                      }`}
                    >
                      {b.label}
                    </p>
                    <p
                      className="text-[9px] font-normal"
                      style={{ color: b.earned ? textColor : "rgba(0,0,0,0.25)" }}
                    >
                      +{b.points} pts
                    </p>

                    {!b.earned && (
                      <Lock
                        size={10}
                        strokeWidth={1.5}
                        className="absolute top-1.5 right-1.5 text-black/25"
                      />
                    )}

                    {b.earned && (
                      <button
                        type="button"
                        onClick={() => shareBadge(b.id)}
                        className="absolute top-1.5 right-1.5 h-5 w-5 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ border: `1px solid ${color}60` }}
                        aria-label={`Compartilhar ${b.label}`}
                      >
                        <Share2
                          size={10}
                          strokeWidth={1.5}
                          style={{ color: textColor }}
                        />
                      </button>
                    )}

                    <AnimatePresence>
                      {justShared && (
                        <motion.span
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#22C55E] text-white text-[9px] font-normal rounded-full px-2 py-0.5 whitespace-nowrap inline-flex items-center gap-1"
                        >
                          <CheckCircle2 size={9} strokeWidth={2} />
                          Compartilhado
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ranking */}
          <div className="rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-5">
            <div className="flex items-center gap-2 mb-3">
              <Trophy
                size={16}
                strokeWidth={1.5}
                className="text-[#A8692A]"
              />
              <h3 className="text-[14px] font-normal text-black/80">
                Minha Posição no Ranking
              </h3>
            </div>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[28px] font-medium text-black/85 tracking-[-0.02em]">
                #12
              </span>
              <span className="text-[13px] font-normal text-black/50">
                {userPoints.toLocaleString("pt-BR")} pontos
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-normal text-black/30">
                  Faltam {pointsToNext.toLocaleString("pt-BR")} pts para o #11
                </span>
              </div>
              <div className="h-[4px] rounded-full bg-black/[0.04]">
                <motion.div
                  className="h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressToNext}%` }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background:
                      "linear-gradient(90deg, #F5C9A0, #fb923c)",
                  }}
                />
              </div>
            </div>

            <div className="space-y-1.5 mb-4">
              {topRanking.map((r, i) => {
                const pos = podiumPositions[i];
                const PosIcon = pos.icon;
                return (
                  <div
                    key={r.name}
                    className="flex items-center justify-between text-[12px] px-2 py-1.5 rounded-[8px]"
                  >
                    <span className="flex items-center gap-2 text-black/65">
                      <span
                        className="h-5 w-5 rounded-full inline-flex items-center justify-center"
                        style={{ backgroundColor: `${pos.bg}50` }}
                      >
                        <PosIcon
                          size={11}
                          strokeWidth={1.5}
                          style={{ color: pos.text }}
                        />
                      </span>
                      {r.name}
                    </span>
                    <span className="font-normal text-black/40">
                      {r.pts.toLocaleString("pt-BR")} pts
                    </span>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => router.push("/points")}
              className="w-full py-2 rounded-full border border-[#fb923c]/40 text-[#fb923c] text-[12px] font-normal hover:bg-[#fb923c]/[0.04] transition-colors"
            >
              Como ganhar mais pontos?
            </button>
          </div>
        </div>

        {/* ===== Coluna direita — Cadernos ===== */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center gap-2 mb-1">
            <ClipboardList
              size={18}
              strokeWidth={1.5}
              className="text-[#A8692A]"
            />
            <h2 className="text-[18px] font-normal tracking-[-0.01em] text-black/85">
              Minhas Tarefas
            </h2>
          </div>
          <p className="text-[13px] font-normal text-black/35 mt-0.5 mb-6">
            Clique em uma tarefa para ver o checklist e o passo a passo.
          </p>

          {/* Pendentes */}
          {pendingNotebooks.length > 0 && (
            <>
              <p className="text-[11px] font-normal tracking-[0.08em] uppercase text-black/25 mb-3">
                Pendentes
              </p>
              <div className="space-y-3 mb-6">
                {pendingNotebooks.map((nb) => (
                  <NotebookCard
                    key={nb.id}
                    notebook={nb}
                    icon={notebookIconMap[nb.id]}
                    expanded={expandedNotebook === nb.id}
                    onToggle={() => {
                      setExpandedNotebook((prev) =>
                        prev === nb.id ? null : nb.id
                      );
                      setExpandedTask(null);
                    }}
                    progress={getProgress(nb)}
                    isTaskDone={(i, done) => isTaskDone(nb.id, i, done)}
                    onToggleTask={(i) => toggleTask(`${nb.id}-${i}`)}
                    expandedTask={expandedTask}
                    setExpandedTask={setExpandedTask}
                  />
                ))}
              </div>
            </>
          )}

          {/* Concluidas */}
          {completedNotebooks.length > 0 && (
            <>
              <p className="text-[11px] font-normal tracking-[0.08em] uppercase text-[#15803d]/70 mb-3">
                Concluídas
              </p>
              <div className="space-y-3">
                {completedNotebooks.map((nb) => (
                  <NotebookCard
                    key={nb.id}
                    notebook={nb}
                    icon={notebookIconMap[nb.id]}
                    expanded={expandedNotebook === nb.id}
                    onToggle={() => {
                      setExpandedNotebook((prev) =>
                        prev === nb.id ? null : nb.id
                      );
                      setExpandedTask(null);
                    }}
                    progress={getProgress(nb)}
                    isTaskDone={(i, done) => isTaskDone(nb.id, i, done)}
                    onToggleTask={(i) => toggleTask(`${nb.id}-${i}`)}
                    expandedTask={expandedTask}
                    setExpandedTask={setExpandedTask}
                    completed
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ============ Notebook Card ============

interface NotebookCardProps {
  notebook: Notebook;
  icon: LucideIcon;
  expanded: boolean;
  onToggle: () => void;
  progress: number;
  isTaskDone: (idx: number, done: boolean) => boolean;
  onToggleTask: (idx: number) => void;
  expandedTask: string | null;
  setExpandedTask: (k: string | null) => void;
  completed?: boolean;
}

function NotebookCard({
  notebook,
  icon: Icon,
  expanded,
  onToggle,
  progress,
  isTaskDone,
  onToggleTask,
  expandedTask,
  setExpandedTask,
  completed,
}: NotebookCardProps) {
  const doneCount = notebook.tasks.filter((t, i) =>
    isTaskDone(i, t.done)
  ).length;
  const accentColor = completed ? "#22C55E" : "#fb923c";
  const accentText = completed ? "#15803d" : "#A8692A";
  const accentBg = completed ? "#22C55E22" : "#F5C9A022";

  return (
    <div
      className={`rounded-[14px] border overflow-hidden bg-[#FAF8F5] transition-all ${
        completed
          ? "border-[#22C55E]/15"
          : expanded
          ? "border-[#F5C9A0]/40 shadow-[0_2px_12px_rgba(245,201,160,0.10)]"
          : "border-black/[0.04]"
      }`}
    >
      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-black/[0.01] transition-colors"
      >
        <div
          className="h-10 w-10 rounded-[10px] flex items-center justify-center shrink-0"
          style={{ backgroundColor: accentBg }}
        >
          <Icon size={18} strokeWidth={1.5} style={{ color: accentText }} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-[14px] font-medium tracking-[-0.01em] text-black/85 truncate">
            {notebook.title}
          </h4>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-[11px] font-normal text-black/25">
              {notebook.date}
            </span>
            <span className="text-[11px] font-normal text-black/25">•</span>
            <span
              className="text-[11px] font-normal"
              style={{ color: accentText }}
            >
              {progress}% — {doneCount}/{notebook.tasks.length} tarefas
            </span>
          </div>
        </div>
        {expanded ? (
          <ChevronUp size={16} strokeWidth={1.5} className="text-black/30" />
        ) : (
          <ChevronDown size={16} strokeWidth={1.5} className="text-black/30" />
        )}
      </button>

      {/* Expandido */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-black/[0.04]">
              {/* Barra animada */}
              <div className="mt-4 mb-4">
                <div className="h-[4px] rounded-full bg-black/[0.04] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                    style={{
                      background: completed
                        ? "linear-gradient(90deg, #86efac, #22C55E)"
                        : "linear-gradient(90deg, #F5C9A0, #fb923c)",
                    }}
                  />
                </div>
              </div>

              {/* Tasks */}
              <div className="space-y-1.5">
                {notebook.tasks.map((t, i) => {
                  const done = isTaskDone(i, t.done);
                  const key = `${notebook.id}-${i}`;
                  const taskExpanded = expandedTask === key;

                  return (
                    <div
                      key={i}
                      className={`rounded-[10px] border transition-all ${
                        taskExpanded
                          ? "border-[#F5C9A0]/40 bg-[#F5C9A0]/[0.08]"
                          : "border-transparent"
                      }`}
                    >
                      <div className="flex items-start gap-3 p-2.5">
                        <button
                          type="button"
                          onClick={() => onToggleTask(i)}
                          className="mt-0.5 shrink-0"
                          aria-label={
                            done ? "Marcar como pendente" : "Concluir tarefa"
                          }
                        >
                          {done ? (
                            <CheckCircle2
                              size={18}
                              strokeWidth={1.5}
                              className="text-[#22C55E]"
                            />
                          ) : (
                            <CircleDot
                              size={18}
                              strokeWidth={1.5}
                              className="text-black/25 hover:text-[#fb923c]"
                            />
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedTask(taskExpanded ? null : key)
                          }
                          className="flex-1 text-left"
                        >
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`text-[13px] font-normal ${
                                done
                                  ? "text-black/35 line-through"
                                  : "text-black/75"
                              }`}
                            >
                              {t.text}
                            </span>
                            {t.sub && (
                              <span
                                className="text-[10px] font-normal rounded-full px-2 py-0.5"
                                style={{
                                  backgroundColor: `${accentColor}1A`,
                                  color: accentText,
                                }}
                              >
                                {t.sub}
                              </span>
                            )}
                          </div>
                        </button>
                        <BookOpen
                          size={14}
                          strokeWidth={1.5}
                          className={`mt-1 shrink-0 transition-colors ${
                            taskExpanded
                              ? "text-[#fb923c]"
                              : "text-black/20"
                          }`}
                        />
                      </div>

                      {/* Passo a passo */}
                      <AnimatePresence initial={false}>
                        {taskExpanded && (
                          <motion.ol
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="overflow-hidden list-decimal pl-12 pr-4 pb-3 space-y-1.5 text-[12px] font-normal text-black/55 leading-[1.55]"
                          >
                            {t.steps.map((s, si) => (
                              <li key={si}>{s}</li>
                            ))}
                          </motion.ol>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
