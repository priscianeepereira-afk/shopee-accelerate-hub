/**
 * Icon Tokens — Bloom Design System
 *
 * Mapeamento central de ícones da aplicação. Toda a ferramenta usa APENAS
 * `lucide-react` (stroke monocromático, sem emoji colorido). Se precisar de
 * um ícone novo, adicione aqui para manter consistência.
 *
 * Convenções:
 * - `strokeWidth={1.5}` (padrão Bloom)
 * - A cor vem do `color` inline ou `className="text-..."` do contexto, nunca
 *   hardcoded no ícone.
 */

import {
  // Missões / jornada
  Target,
  Rocket,
  Wrench,
  Coins,
  Trophy,
  MessageSquare,
  // Navegação / UI
  ClipboardList,
  Crown,
  Medal,
  Award,
  BookOpen,
  MessageCircle,
  Ticket,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

/**
 * Badges / selos da tela de perfil.
 * Cada id tem um ícone + cor família da paleta Bloom + variante escura para texto.
 */
export const badgeIconMap: Record<
  string,
  { icon: LucideIcon; color: string; textColor: string }
> = {
  m1: { icon: Target, color: "#F15A5A", textColor: "#B23838" }, // Missão 1 — coral
  m2: { icon: Rocket, color: "#fb923c", textColor: "#A8692A" }, // Missão 2 — laranja
  tools: { icon: Wrench, color: "#8A8A9A", textColor: "#525258" }, // Ferramentas — grafite
  "first-sale": { icon: Coins, color: "#22C55E", textColor: "#15803d" }, // Primeira Venda — verde
  "50-sales": { icon: Trophy, color: "#E8D5B5", textColor: "#8A6B3A" }, // 50 Vendas — bege
  community: { icon: MessageSquare, color: "#C8B8D8", textColor: "#6B5A85" }, // Voz — lavanda
};

/**
 * Cadernos de tarefas (notebooks) da tela de perfil.
 */
export const notebookIconMap: Record<string, LucideIcon> = {
  plano7: Rocket,
  ferramentas: Wrench,
  missao1: Target,
};

/**
 * Posições do pódio (1º, 2º, 3º) — cores da família "medalha" dentro da paleta Bloom.
 * Aplicadas em badge redondo numerado (substitui emojis 🥇🥈🥉).
 */
export const podiumPositions = [
  { icon: Crown, bg: "#F5C9A0", text: "#A8692A", label: "1º" }, // gold — laranja pastel
  { icon: Medal, bg: "#C8B8D8", text: "#6B5A85", label: "2º" }, // silver — lavanda
  { icon: Award, bg: "#E8D5B5", text: "#8A6B3A", label: "3º" }, // bronze — bege
] as const;

/**
 * Canais de suporte — cor família + ícone + variante escura.
 */
export const supportChannelIcons = {
  chat: { icon: MessageCircle, color: "#22C55E", textColor: "#15803d" },
  ticket: { icon: Ticket, color: "#F5C9A0", textColor: "#A8692A" },
  faq: { icon: HelpCircle, color: "#C8B8D8", textColor: "#6B5A85" },
} as const;

// Re-export dos ícones mais usados para atalho
export {
  Target,
  Rocket,
  Wrench,
  Coins,
  Trophy,
  MessageSquare,
  ClipboardList,
  Crown,
  Medal,
  Award,
  BookOpen,
  MessageCircle,
  Ticket,
  HelpCircle,
};
