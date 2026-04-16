/**
 * Avatar Tokens — Bloom Design System
 *
 * Paleta padrao de 3 tons de laranja pastel usada como fallback dos avatares
 * (quando a usuaria ainda nao subiu foto, exibimos as iniciais).
 *
 * - Os 3 tons conversam entre si (mesma familia laranja-pastel, saturacao crescente).
 * - Cada tom tem um `ring` ~15% mais escuro que o `bg` para dar volume e legibilidade.
 * - A atribuicao e deterministica por seed (ex: iniciais), entao a mesma pessoa
 *   sempre aparece com o mesmo tom em qualquer lugar da UI.
 */

export interface AvatarTone {
  /** Cor de preenchimento (fundo do avatar) */
  bg: string;
  /** Borda/ring mais escura na mesma familia (~15% mais escuro) */
  ring: string;
}

export const avatarOrangeTones: readonly AvatarTone[] = [
  { bg: "#F5C9A0", ring: "#D9A878" }, // tom 1 — peach claro
  { bg: "#F5B580", ring: "#D99560" }, // tom 2 — peach medio
  { bg: "#EE9A5E", ring: "#C57840" }, // tom 3 — peach profundo
] as const;

/** Hash deterministico simples para estabilizar a escolha do tom por seed. */
function hashSeed(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return h;
}

/**
 * Retorna um dos 3 tons de laranja pastel para usar em avatar.
 * @param seed string (ex: iniciais "JT") ou numero (ex: id do usuario)
 */
export function getAvatarTone(seed: string | number): AvatarTone {
  const n = typeof seed === "number" ? seed : hashSeed(seed);
  return avatarOrangeTones[n % avatarOrangeTones.length];
}

/**
 * Estilo pronto para inline `style` de um avatar circular.
 * Aplica bg + ring interno (box-shadow) na mesma familia.
 */
export function avatarStyle(seed: string | number, ringWidth = 1): React.CSSProperties {
  const tone = getAvatarTone(seed);
  return {
    backgroundColor: tone.bg,
    boxShadow: `inset 0 0 0 ${ringWidth}px ${tone.ring}`,
  };
}
