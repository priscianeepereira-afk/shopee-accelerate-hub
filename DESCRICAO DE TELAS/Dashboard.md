# Dashboard

**Rota:** `/dashboard`

## Objetivo
Tela principal da jornada da vendedora na Shopee. Mostra o roteiro com as 4 missões (progresso e bloqueio), uma mensagem de boas-vindas/parabéns e o ranking das top 3 vendedoras da plataforma.

## Conteúdo da tela

### Área principal — Roteiro de Missões
- Título (h1): "Sua Jornada na Shopee (Passo a Passo Guiado)"
- Subtítulo: "Execute cada missão e avance de iniciante a vendedora profissional — sem travar no caminho."

Lista de 4 missões exibidas em sequência (com setas entre cada card). Cada card contém número, ícone, título, descrição, status, e — se ativa — uma nota adicional.

As 4 missões mock:

1. Missão "01"
   - Título: "Sua Loja no Ar em 7 Dias"
   - Descrição: "Configure sua loja e faça sua primeira venda com um plano simples e direto."
   - Status: "EM ANDAMENTO"
   - Nota ativa: "Você está a 3 passos de começar a vender todos os dias"
   - Destino ao clicar: `/mission/1`

2. Missão "02"
   - Título: "Seu Plano de Ação para Vender nos Próximos 7 Dias"
   - Descrição: "Receba um passo a passo personalizado com exatamente o que fazer, dia após dia, para destravar suas vendas."
   - Status: "BLOQUEADA"
   - Destino ao clicar: `/mission/2`

3. Missão "03"
   - Título: "Ferramentas Prontas para Acelerar Suas Vendas"
   - Descrição: "Use recursos já configurados para vender mais, sem precisar entender nada técnico."
   - Status: "BLOQUEADA"
   - Destino ao clicar: `/mission/3`

4. Missão "04"
   - Título: "Vire uma Vendedora Profissional na Shopee"
   - Descrição: "Estruture sua operação, escale com previsibilidade e construa uma loja de verdade."
   - Status: "BLOQUEADA"
   - Destino ao clicar: `/mission/4`

Entre cada card há um indicador de seta para a próxima missão. Missões bloqueadas exibem um ícone de cadeado e um emoji 🔒 antes do texto do status.

### Painel lateral — Parabéns
- Título: "Parabéns! 🎉"
- Texto: "Em apenas 7 dias a sua loja da Shopee estará no ar. Complete a Missão 1 e comece a vender!" (a expressão "7 dias" aparece em destaque).
- Indicador pulsante com o texto: "Missão 1 em andamento"

### Painel lateral — Top 3 da Plataforma
- Título: "Top 3 da Plataforma"
- Subtítulo: "As que mais vendem na plataforma"
- Lista mock de 3 vendedoras, cada item com medalha, iniciais em avatar, nome e receita:
  - 🥇 Carla M. (CM) — R$ 12.500
  - 🥈 Juliana T. (JT) — R$ 9.800
  - 🥉 Fernanda R. (FR) — R$ 7.600
- Botão/link: "Ver ranking completo na Comunidade →"

## Dados e estado
- Arrays hardcoded `missions` (4 itens) e `topSellers` (3 itens).
- Não lê nem grava em localStorage.
- Não usa React Query nem Recharts.
- Usa Framer Motion para animar entrada dos cards de missão (delay escalonado por índice) e do card de parabéns.
- Não há parâmetros de rota.
- Status é derivado da string da missão (`"EM ANDAMENTO"` ou `"BLOQUEADA"`).

## Interações
- Clique em qualquer card de missão → `navigate(m.path)` (vai para `/mission/1`, `/mission/2`, `/mission/3` ou `/mission/4`). Missões bloqueadas também navegam ao serem clicadas (não há bloqueio funcional, apenas visual).
- Clique no botão "Ver ranking completo na Comunidade →" → `navigate("/community")`.
- Hover nos cards aplica efeito de elevação (transição CSS).

## Observações
- A tela é envolvida pelo `AppLayout` (sidebar global).
- Apesar do label "BLOQUEADA", os cards bloqueados permanecem clicáveis e navegáveis.
- O rótulo `activeNote` só aparece na missão 1 (a única com esse campo no mock).
- Os ícones das missões são derivados da ordem do array (Rocket, Target, Zap, Crown).
