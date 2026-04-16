# NotFound

**Rota:** `*` (rota catch-all — qualquer URL que não corresponda a rotas definidas)

## Objetivo
Página de erro 404 exibida quando o usuário tenta acessar uma rota que não existe na aplicação.

## Conteúdo da tela

### Bloco central
- Título (h1): "404"
- Parágrafo: "Oops! Page not found"
- Link âncora com o texto "Return to Home" que aponta para `/`.

## Dados e estado
- Sem dados mock.
- Não lê nem grava em localStorage.
- Não usa React Query, Framer Motion, nem Recharts.
- Usa `useLocation` (react-router-dom) para ler o pathname atual.
- Usa `useEffect` para, no mount e a cada mudança de pathname, logar um erro no console: `"404 Error: User attempted to access non-existent route:"` seguido do pathname.
- Não há parâmetros de rota específicos (é o catch-all).

## Interações
- Clique no link "Return to Home" → navega para `/` (via `<a href="/">`, navegação tradicional de HTML — não usa `navigate` do react-router).

## Observações
- Textos desta tela estão em inglês ("Oops! Page not found", "Return to Home", "404"), ao contrário do restante do app que está em PT-BR.
- Não está envolvida pelo `AppLayout` (sem sidebar).
- O efeito colateral é apenas um `console.error` — útil para diagnóstico, sem interação com o usuário.
