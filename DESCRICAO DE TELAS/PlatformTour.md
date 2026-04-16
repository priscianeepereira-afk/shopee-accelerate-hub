# PlatformTour

**Rota:** `/platform-tour` (tela de tour de primeiro acesso)

## Objetivo
Apresenta um tour em vídeo para usuárias recém-chegadas, mostrando os recursos da plataforma Vend.A.I. Usado como primeiro contato guiado.

## Conteúdo da tela

### Navegação
- Link/botão "Voltar ao Dashboard" (com ícone de seta para esquerda) que retorna a `/dashboard`.

### Cabeçalho
- Tag/label: "PRIMEIRO ACESSO"
- Título (h1): "Conhecendo a Plataforma"
- Parágrafo de introdução: "Assista este tour completo e descubra como aproveitar ao máximo cada recurso da Vend.A.I."

### Player de vídeo (mockup)
- Área com botão central de "play" (ícone Play).
- Duração exibida no canto: "10:45".
- Não há vídeo real carregado; é apenas um mockup visual e o botão não inicia reprodução.

### Bloco "Capítulos do Tour"
- Título da seção: "Capítulos do Tour"
- Lista mock de 7 capítulos (timestamp + label):
  1. 0:00 — "Introdução — O que é a Vend.A.I."
  2. 1:20 — "Minhas Integrações — Conectando sua loja"
  3. 3:05 — "Missões — Seu caminho de aprendizado"
  4. 5:10 — "Agenda de Aulas — Aulas ao vivo e desafios"
  5. 6:45 — "Comunidade — Trocando experiências"
  6. 8:00 — "Meu Perfil — Selos, ranking e tarefas"
  7. 9:30 — "Plano PRO — Desbloqueie tudo"
- O primeiro capítulo (índice 0) aparece com um indicador de concluído (ícone CheckCircle2). Os demais exibem um círculo vazio.

## Dados e estado
- Array hardcoded `chapters` (7 itens, cada um com `time` e `label`).
- Não lê nem grava em localStorage.
- Não usa React Query, Framer Motion, nem Recharts.
- Sem parâmetros de rota.
- Sem estado local (`useState`).

## Interações
- Clique em "Voltar ao Dashboard" → `navigate("/dashboard")`.
- O botão de play (área central do vídeo) é apenas um mockup clicável visualmente (hover) — não executa nenhuma ação (sem `onClick`).
- Os itens de capítulo têm estilo de hover mas não têm `onClick`: clicar não faz nada (não pula o vídeo, não navega).

## Observações
- A tela usa `AppLayout` (sidebar global presente).
- Não existe integração com nenhum player de vídeo real; é totalmente estático/mock.
- Apenas o primeiro capítulo é marcado como concluído, de forma hardcoded (condição `i === 0`).
- Não há estado de loading, erro, ou progresso dinâmico.
