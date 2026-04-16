# Missão 2 — Seu Plano de Ação para Vender nos Próximos 7 Dias

**Rota:** `/mission/2` (página da Missão 2)

## Objetivo
Gerar, via IA simulada, um plano de ação de 7 dias personalizado com base no tempo de loja e na estratégia escolhida pela vendedora. Depois de gerado, o plano é persistido e serve como checklist diário com progresso.

## Conteúdo da tela

### Cabeçalho (sempre visível)
- Botão "Voltar para Missões" (seta à esquerda) que navega para `/dashboard`.
- Título: "Missão 2 — Seu Plano de Ação para Vender nos Próximos 7 Dias"
- Subtítulo: "Receba um passo a passo personalizado com exatamente o que fazer, dia após dia, para destravar suas vendas."

### Abaixo do cabeçalho
A tela alterna entre 4 fases (onboarding, strategy, analyzing, plan) com transições animadas via Framer Motion (`AnimatePresence`).

---

### Fase 1 — Onboarding (`phase === "onboarding"`)

Bloco "Como funciona?":
- Título: "Como funciona?"
- Subtítulo: "Em 3 passos simples, você recebe um plano prático e personalizado."
- 3 passos com rótulo "Passo 1/2/3":
  1. Ícone `Clock` — "Informe o tempo de loja" — "Diga há quantos dias sua loja está ativa na Shopee para calibrar a análise."
  2. Ícone `Target` — "Escolha sua estratégia" — "Selecione o tipo de estratégia que deseja seguir: 100% orgânica, tráfego ou híbrida."
  3. Ícone `Rocket` — "Receba seu plano de 7 dias" — "A IA gera um plano prático e personalizado direto para o seu perfil."

Bloco "Há quanto tempo sua loja está ativa na Shopee?":
- Título com ícone `Clock`
- Descrição: "Isso nos ajuda a calibrar a análise e gerar o plano mais adequado para o seu momento."
- Dois botões em grade:
  - **"Menos de 7 dias"** (🌱): "Minha loja é nova ou ainda não tenho vendas suficientes para análise." — ao clicar, define `storeAge = "new"` e pula direto para a fase `analyzing` (não pergunta estratégia).
  - **"7 dias ou mais"** (🚀): "Já tenho dados de vendas e quero um plano baseado nas minhas métricas reais." — ao clicar, define `storeAge = "established"` e avança para a fase `strategy`.

---

### Fase 2 — Strategy (`phase === "strategy"`)

Bloco "Qual estratégia você quer seguir?":
- Título com ícone `Target`
- Descrição: "Escolha o tipo de abordagem para o seu plano de 7 dias."
- 3 opções em grade:
  - **"100% Orgânica"** (ícone `Zap`): "Sem nenhum investimento financeiro. Foco em otimização de conteúdo, fotos e descrições." Possui badge "Recomendado". Define `strategy = "organic"`.
  - **"Foco em Tráfego"** (ícone `BarChart3`): "Estratégias para atrair mais visitantes via Instagram, Shopee Vídeos e redes sociais." Define `strategy = "traffic"`.
  - **"Híbrida"** (ícone `Sparkles`): "Combina otimização de conteúdo com estratégias de tráfego orgânico e conversão." Define `strategy = "hybrid"`.
- Nota ao final: "* Todas as estratégias são 100% orgânicas. Nunca recomendamos anúncios pagos, troca de produto ou redução de preço."

Qualquer clique em uma das 3 opções transiciona para a fase `analyzing`.

---

### Fase 3 — Analyzing (`phase === "analyzing"`)

Tela de carregamento simulado da IA:
- Ícone `Sparkles` com círculo pulsando ao redor (animação infinita).
- Texto principal: "IA gerando seu plano personalizado..."
- Texto secundário: "Criando um plano de 7 dias com estratégias 100% orgânicas adaptadas ao seu perfil"
- Quatro badges piscando em sequência: "Conteúdo", "Fotos", "Cupons", "Tráfego".
- Após 3 segundos (`setTimeout` de 3000ms), o plano é gerado, salvo em localStorage e a fase muda para `plan`.

---

### Fase 4 — Plan (`phase === "plan"`)

Cabeçalho do plano:
- Ícone `Sparkles` + título condicional: "Plano Concluído! 🎉" (se progresso == 100%) ou "Seu Plano em Andamento" caso contrário.
- Badge com o modo do plano (ex.: "Modo Inicial", "Modo Inteligente").
- Badge "Pendente" com ícone `CalendarDays` (apenas se progresso < 100%).
- Caixa interna: "**Estratégia:** <focusLabel>" + "Plano 100% orgânico — sem gastos financeiros. Siga as tarefas diárias e marque conforme concluir."

Aviso de cooldown (somente se `daysRemaining > 0`):
- Ícone `Lock` + texto: "Próximo diagnóstico disponível em X dia(s)" + "Execute as tarefas do plano atual antes de solicitar um novo diagnóstico."

Botão "Solicitar Novo Diagnóstico" (ícone `Sparkles`):
- Aparece somente se `canRequestNewDiagnostic()` retorna true (dias restantes == 0).
- Ao clicar: apaga o plano do localStorage e volta para a fase `onboarding`.

Bloco de tarefas:
- Título: "📋 <planTitle>" (ex.: "Plano 7 Dias — Boas Práticas Iniciais").
- Data: "Gerado em <data em formato pt-BR>".
- Texto com link: "Plano salvo automaticamente em **Meu Perfil → Tarefas**" (o link navega para `/profile`).
- Barra de progresso com label "Progresso" + contador "X/7 tarefas".
- Lista com 7 cartões de tarefa (um por dia); cada cartão mostra: número do dia, ícone emoji, título, descrição e um círculo de checkbox à direita (ícone `Circle` ou `CheckCircle2`).
- Clicar no círculo alterna o estado concluído da tarefa (tarefas concluídas ficam com texto riscado).
- Botão "Ver no Meu Perfil → Tarefas Pendentes" que navega para `/profile`.
- Nota final: "* Este plano contém apenas estratégias orgânicas. A IA nunca recomenda anúncios pagos, troca de produto, redução de preço ou qualquer ação que envolva gasto financeiro."

## Dados e estado

### Estado local (React `useState`)
- `phase`: "onboarding" | "strategy" | "analyzing" | "plan" | "cooldown"
- `storeAge`: "new" | "established" | null
- `strategy`: "organic" | "traffic" | "hybrid" | null
- `completed`: array de números (dias concluídos)
- `plan`: objeto `GeneratedPlan` ou null

### localStorage
- Chave: **`mission2_diagnostic`**
- Formato (JSON):
  ```json
  {
    "plan": {
      "mode": "Modo Inicial" | "Modo Inteligente",
      "focusLabel": "<texto da estratégia>",
      "planTitle": "<título do plano>",
      "tasks": [
        { "day": 1, "icon": "<emoji>", "title": "<título>", "desc": "<descrição>" },
        ...7 itens
      ]
    },
    "createdAt": "<ISO string com data de geração>",
    "completedTasks": [1, 3, ...]
  }
  ```
- Ao montar a página (`useEffect`): se houver plano salvo, carrega-o e vai direto para a fase `plan`.
- Cada toggle de tarefa chama `updateDiagnosticTasks` que reescreve o array `completedTasks` no localStorage.
- "Solicitar Novo Diagnóstico": executa `localStorage.removeItem("mission2_diagnostic")`.

### Geração do plano (função `generatePlan`)
Decide qual dos 4 conjuntos de 7 tarefas retornar conforme `storeAge` + `strategy`:

1. **Se `storeAge === "new"`** → ignora estratégia:
   - Modo: "Modo Inicial"
   - Foco: "Boas Práticas para Lojas Novas"
   - Título: "Plano 7 Dias — Boas Práticas Iniciais"
   - Tarefas:
     1. ✍️ "Otimize títulos com palavras-chave" — reescrever títulos dos 3 principais produtos com palavras-chave de alto volume.
     2. 📸 "Atualize fotos com fundo branco" — pelo menos 5 fotos por anúncio com fundo branco.
     3. 📝 "Melhore as descrições" — destacar benefícios, medidas e diferenciais.
     4. 🎟️ "Configure cupom de boas-vindas" — cupom para novos seguidores.
     5. 📱 "Divulgue no Instagram" — 3 posts com link para Shopee.
     6. ⭐ "Peça avaliações" — mensagem para últimos compradores pedindo avaliação com foto.
     7. 📊 "Analise e ajuste" — revisar métricas da semana.

2. **Se `strategy === "traffic"`**:
   - Modo: "Modo Inteligente"
   - Foco: "Foco em Tráfego Orgânico"
   - Título: "Plano 7 Dias — Foco em Tráfego"
   - Tarefas:
     1. 📱 "Crie 3 Reels no Instagram"
     2. 🎬 "Publique no Shopee Vídeos" (pelo menos 2 vídeos)
     3. 📸 "Stories diários com produtos" (5 stories com enquetes/links)
     4. ✍️ "Otimize títulos para busca"
     5. 🎟️ "Cupom de seguidor"
     6. 📱 "Carrossel de produtos" (5 produtos mais atrativos)
     7. 📊 "Analise tráfego da semana"

3. **Se `strategy === "hybrid"`**:
   - Modo: "Modo Inteligente"
   - Foco: "Estratégia Híbrida — Conteúdo + Conversão"
   - Título: "Plano 7 Dias — Estratégia Híbrida"
   - Tarefas:
     1. ✍️ "Reescreva títulos atrativos"
     2. 📸 "Nova foto principal"
     3. 📱 "Crie 3 Reels no Instagram"
     4. 🎟️ "Cupom de urgência 48h"
     5. 🎬 "Vídeo do produto em ação"
     6. ⭐ "Solicite avaliações com foto"
     7. 📊 "Analise resultados da semana"

4. **Caso padrão (`strategy === "organic"` ou qualquer outro, com `storeAge === "established"`)**:
   - Modo: "Modo Inteligente"
   - Foco: "Foco em Conversão Orgânica"
   - Título: "Plano 7 Dias — Foco em Conversão"
   - Tarefas:
     1. 📝 "Reescreva descrições"
     2. 🎬 "Vídeo do produto em ação"
     3. 🎟️ "Cupom de urgência"
     4. ⭐ "Responda todas as avaliações"
     5. 📸 "Fotos com contexto"
     6. 📦 "Ofereça frete grátis"
     7. 📊 "Revise taxa de conversão"

### Cooldown de diagnóstico
- Função `getDaysRemaining()` calcula `7 - floor((agora - createdAt) / 1 dia)`, mínimo 0.
- Função `canRequestNewDiagnostic()` retorna true quando `daysRemaining <= 0`.
- Enquanto o cooldown está ativo, o botão de novo diagnóstico fica oculto e um aviso é exibido.

### Bibliotecas
- **Framer Motion**: `motion`, `AnimatePresence` para transições entre fases, animação do loader e aparição das tarefas.
- **React Router**: `useNavigate` para navegar para `/dashboard` e `/profile`.
- Não usa React Query nem Recharts.
- Não há parâmetros de rota.

## Fases/Estados

| Fase | O que aparece | Ação do usuário | Transição |
|---|---|---|---|
| `onboarding` | "Como funciona?" + escolha do tempo de loja | Clica em "Menos de 7 dias" ou "7 dias ou mais" | "new" → `analyzing` (pulando strategy); "established" → `strategy` |
| `strategy` | 3 cards de estratégia | Clica em Orgânica / Tráfego / Híbrida | → `analyzing` |
| `analyzing` | Loader de IA animado | (espera) | após 3 s, plano é gerado, salvo no localStorage, transita para `plan` |
| `plan` | Plano com 7 tarefas, progresso, botão de novo diagnóstico | Marca/desmarca tarefas; pode pedir novo diagnóstico se cooldown expirou | Novo diagnóstico → `onboarding` (após apagar localStorage) |
| `cooldown` | (tipo declarado mas não usado como fase separada — o aviso de cooldown aparece dentro da fase `plan`) | — | — |

## Interações
- **Botão "Voltar para Missões"**: navega para `/dashboard`.
- **Cards de "Tempo de loja"**: definem `storeAge` e avançam.
- **Cards de "Estratégia"**: definem `strategy` e avançam para `analyzing`.
- **Checkbox de cada tarefa** (`toggle(day)`): adiciona ou remove o dia do array `completed`; atualiza localStorage.
- **Botão "Solicitar Novo Diagnóstico"**: só habilitado fora do cooldown; apaga plano salvo e reinicia o fluxo.
- **Link "Meu Perfil → Tarefas"** e **botão "Ver no Meu Perfil → Tarefas Pendentes"**: navegam para `/profile`.

## Observações
- Ao carregar a tela, se já existe plano salvo, pula o onboarding inteiro e vai direto para `plan`.
- Se a vendedora escolheu "Menos de 7 dias", a fase `strategy` é pulada completamente — o plano usa o conjunto "Modo Inicial" independente da estratégia.
- O cooldown é de 7 dias contados a partir de `createdAt` do diagnóstico atual.
- O campo `completedTasks` é zerado toda vez que um novo plano é gerado.
- A página está envelopada em `AppLayout`.
