/**
 * Prefixa caminhos durante a migração Bloom (Fases 0-3): todo link/navegação
 * nas páginas V2 passa por `appPath("/dashboard")` e vira "/v2/app/dashboard".
 *
 * No flip final (Fase 4), o corpo desta função vira `return path;` — identity —
 * e todas as páginas passam a responder em "/" sem nenhuma outra edição.
 *
 * Regra pros subagentes: em src/design-system/app-pages/*, toda string de rota
 * em `navigate(...)`, `to=...`, `<Link to=...>` deve passar por `appPath()`.
 */

const V2_PREFIX = "/v2/app";

export function appPath(path: string): string {
  if (!path.startsWith("/")) {
    return `${V2_PREFIX}/${path}`;
  }
  return `${V2_PREFIX}${path}`;
}
