# MissionIntro

**Rota:** `/mission/:id` (onde `:id` é `"1"`, `"2"`, `"3"` ou `"4"`)

## Objetivo
Tela de apresentação/intro de uma missão. Mostra para a vendedora o propósito daquela missão, o que ela vai conquistar, e serve de ponte para o conteúdo detalhado da missão.

## Conteúdo da tela

### Cabeçalho da missão
- Ícone da missão (Rocket, Zap, Target ou Crown, conforme a missão)
- Rótulo: "Missão {num}" (ex: "Missão 01", "Missão 02", etc.)
- Título da missão (h1)
- Parágrafo de "promessa" (texto descritivo longo)

### Bloco "O que você vai conquistar"
- Título do bloco: "O que você vai conquistar:"
- Lista numerada com 4 bullets (cada bullet com um número 1–4 ao lado do texto)

### CTA final
- Botão principal com o texto do CTA da missão (varia por missão)

### Conteúdo por missão (valores exatos do mock)

**Missão id=1 — `"01"`**
- Ícone: Rocket
- Título: "Sua Loja no Ar em 7 Dias"
- Promessa: "Em apenas 7 dias, sua loja vai estar no ar, verificada, com produtos cadastrados e pronta para receber suas primeiras vendas. Você vai sair do zero e ter uma loja profissional funcionando na Shopee."
- Bullets:
  1. "Credenciamento Completo na Shopee"
  2. "Fornecedor Ideal Selecionado para Seu Nicho"
  3. "Produtos Cadastrados e Publicados"
  4. "Primeira Venda Realizada"
- CTA: "Vamos Começar! 🚀" → `/mission/1/content`

**Missão id=2 — `"02"`**
- Ícone: Zap
- Título: "Seu Plano de Ação para Vender nos Próximos 7 Dias"
- Promessa: "Receba um passo a passo personalizado com exatamente o que fazer, dia após dia, para destravar suas vendas. Com base no tempo da sua loja e na sua estratégia, vamos montar um roteiro sob medida para você acelerar seus resultados."
- Bullets:
  1. "Diagnóstico Personalizado da Sua Loja"
  2. "Plano de Ação de 7 Dias Sob Medida"
  3. "Estratégias Orgânicas Comprovadas"
  4. "Acompanhamento Diário de Tarefas"
- CTA: "Estou Pronta! ⚡" → `/mission/2/content`

**Missão id=3 — `"03"`**
- Ícone: Target
- Título: "Ferramentas Prontas para Acelerar Suas Vendas"
- Promessa: "Use recursos já configurados para vender mais, sem precisar entender nada técnico. Crie fotos e vídeos com IA, otimize títulos, teste categorias e acelere suas vendas na Shopee."
- Bullets:
  1. "Gerador de Fotos e Vídeos com IA"
  2. "Otimizador de Títulos e Descrições"
  3. "Teste de Categorias com Dados Reais"
  4. "Editor de Imagens para Anúncios"
- CTA: "Acessar Ferramentas! 🚀" → `/mission/3/content`

**Missão id=4 — `"04"`**
- Ícone: Crown
- Título: "Vire uma Vendedora Profissional na Shopee"
- Promessa: "Estruture sua operação, escale com previsibilidade e construa uma loja de verdade. Você vai aprender a usar Shopee Ads, formalizar seu negócio e escalar suas vendas para um nível que você nunca imaginou ser possível."
- Bullets:
  1. "Shopee Ads — Anúncios Patrocinados"
  2. "Formalização com CNPJ e MEI"
  3. "Contabilidade e Gestão Financeira"
  4. "Escala Profissional do Seu Negócio"
- CTA: "Quero Evoluir! 👑" → `/mission/4/content`

## Dados e estado
- Objeto `missionData` hardcoded com as 4 configurações de missão, indexadas por id (`"1"`, `"2"`, `"3"`, `"4"`).
- Lê parâmetro de rota `:id` via `useParams`.
- Default: se `id` for falsy, assume `"1"`.
- Não lê nem grava em localStorage.
- Não usa React Query nem Recharts.
- Usa Framer Motion para animar entrada do bloco principal, dos bullets (delay escalonado) e do botão CTA.

## Interações
- Clique no botão CTA → `navigate(mission.path)` (leva a `/mission/{id}/content`).
- Não há outros botões ou links.

## Observações
- Se `id` não corresponder a uma chave conhecida do `missionData` (ex: `/mission/99`), a tela renderiza `null` — página totalmente em branco, sem mensagem de erro.
- A tela usa `AppLayout`, portanto a sidebar global está presente.
- Não há validação de acesso/desbloqueio: mesmo missões marcadas como "BLOQUEADA" no Dashboard podem ser abertas aqui.
