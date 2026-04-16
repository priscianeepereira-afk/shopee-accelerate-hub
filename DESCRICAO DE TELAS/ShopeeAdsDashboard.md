# Shopee Ads — Painel Inteligente

**Rota:** /shopee-ads

## Objetivo
Painel de recomendações de Shopee Ads baseado em taxa de conversão (não apenas volume de vendas), mostrando quais produtos o vendedor deve anunciar, aumentar investimento ou pausar, além de acompanhar suas campanhas ativas.

## Conteúdo da tela

### Navegação superior
- Botão "Voltar à Missão 4" (navega para `/mission/4/content`).
- Título: "Shopee Ads — Painel Inteligente".
- Subtítulo: "Recomendações automáticas baseadas em **taxa de conversão**, não apenas volume de vendas."

### KPIs principais (cards)
Calculados a partir dos produtos mockados:
- "Investido (7d)" — soma dos gastos (mock = R$ 430,50).
- "Receita Ads (7d)" — soma das receitas (mock = R$ 6.060,00).
- "ROAS Geral" — receita total / gasto total (mock ≈ 14.1x), formatado com 1 casa decimal.
- "Cliques Totais" — valor fixo "1.805".

### Abas
Dois separadores (`Tabs`), padrão inicial "products":
- Aba "📦 Produtos — O que Anunciar"
- Aba "📊 Campanhas Ativas"

### Aba "Produtos — O que Anunciar"
- Caixa de dica fixa com título "Dica de Expert" e texto: "Não anuncie o produto que mais vende — anuncie o que tem **maior taxa de conversão**. Um produto com alta conversão gasta menos por venda e traz mais retorno no investimento."
- Lista de 5 produtos, ordenada por taxa de conversão decrescente, com rank numérico (1 a 5).
- Por produto exibe: emoji, nome, badge ("RECOMENDADO" quando `status = recommended` e "PAUSAR" quando `status = pause`), texto de recomendação, e métricas em colunas:
  - "Conversão" (em %)
  - "Vendas"
  - "ROAS" (formato `Nx`)
  - "CPC" (em R$)
- Botão de ação por produto, variável conforme status: "↑ Aumentar" (recommended), "⏸ Pausar" (pause), "⚠ Revisar" (warning) ou "✓ Manter" (active).

Produtos mock (valores iniciais, antes da ordenação por conversão):
1. "Kit Organizador de Maquiagem Acrílico" 💄 — conversão 18.7%, vendas 42, views 1.240, CTR 4.2, CPC R$ 0,35, gasto R$ 48,50, receita R$ 1.260,00, ROAS 25.98x, status `recommended`, recomendação "🚀 Melhor taxa de conversão — Aumente o orçamento!".
2. "Fone Bluetooth TWS com LED" 🎧 — conversão 14.3%, vendas 89, views 3.200, CTR 3.8, CPC R$ 0,42, gasto R$ 112,00, receita R$ 2.670,00, ROAS 23.84x, status `active`, recomendação "✅ Boa conversão — Manter campanha ativa".
3. "Capa de Celular Samsung A54 Transparente" 📱 — conversão 5.1%, vendas 156, views 8.400, CTR 2.1, CPC R$ 0,28, gasto R$ 89,00, receita R$ 780,00, ROAS 8.76x, status `warning`, recomendação "⚠️ Alta venda, baixa conversão — Não é ideal para Ads".
4. "Escova Alisadora Elétrica 2 em 1" 💇 — conversão 12.5%, vendas 31, views 980, CTR 5.1, CPC R$ 0,38, gasto R$ 36,00, receita R$ 930,00, ROAS 25.83x, status `recommended`, recomendação "🚀 Alto CTR e conversão — Suba o orçamento!".
5. "Meias Esportivas Kit 5 Pares" 🧦 — conversão 2.8%, vendas 210, views 12.000, CTR 1.4, CPC R$ 0,22, gasto R$ 145,00, receita R$ 420,00, ROAS 2.90x, status `pause`, recomendação "🛑 ROAS baixo — Pause esta campanha".

### Aba "Campanhas Ativas"
Tabela com as seguintes colunas (nesta ordem):
- "Campanha" (com ícone Play/Pause conforme status)
- "Tipo" (badge)
- "Orçamento" (R$/dia)
- "Gasto" (valor + barra de progresso calculada como gasto/orçamento × 100)
- "Cliques"
- "CTR" (clicks/impressions × 100, com 1 casa)
- "Ação" (botão "⏸ Pausar" se ativa, "▶ Ativar" se pausada)

Linhas mock (4 campanhas):
1. "Descoberta de Produtos" — tipo "Descoberta", orçamento R$ 30,00/dia, gasto R$ 24,50, 320 cliques, 8.400 impressões, status `active`.
2. "Busca - Kit Maquiagem" — tipo "Busca", orçamento R$ 20,00/dia, gasto R$ 18,20, 180 cliques, 4.200 impressões, status `active`.
3. "Busca - Fone Bluetooth" — tipo "Busca", orçamento R$ 25,00/dia, gasto R$ 22,00, 210 cliques, 5.100 impressões, status `active`.
4. "Loja - Geral" — tipo "Loja", orçamento R$ 15,00/dia, gasto R$ 8,30, 95 cliques, 2.800 impressões, status `paused`.

## Dados e estado
- Arrays mockados `mockProducts` e `campaigns` hardcoded no arquivo.
- KPIs agregados calculados in-memory a cada render (reduce).
- Sem localStorage, sem React Query, sem Recharts.
- Animações de entrada via Framer Motion (`motion.div`) nos cards KPI e nos itens da lista de produtos.

## Interações
- Botão "Voltar à Missão 4" → `/mission/4/content`.
- Troca entre abas "Produtos" e "Campanhas".
- Botões de ação por produto ("Aumentar"/"Pausar"/"Revisar"/"Manter") — sem handler (visual).
- Botões "Pausar"/"Ativar" por campanha — sem handler (visual).

## Observações
- Classificação condicional por cor semântica (sucesso/aviso/destaque) baseada em faixas: conversão ≥10 / ≥5 / <5; ROAS ≥10 / ≥5 / <5.
- Lista de produtos sempre ordenada por `conversions` decrescente no render.
- CTR da aba Campanhas é calculado em tempo real; não está no objeto mock.
