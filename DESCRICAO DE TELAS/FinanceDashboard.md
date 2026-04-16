# Finanças — Visão Geral

**Rota:** /financas

## Objetivo
Dashboard financeiro que mostra ao vendedor quanto efetivamente está lucrando na Shopee, decompondo faturamento bruto, deduções (comissão, frete, anúncios, impostos) e métricas complementares (ROAS, CPA, ROI, ticket médio etc.), com configuração de tipo tributário (CPF ou CNPJ) e alíquota DAS.

## Conteúdo da tela

### Navegação superior
- Botão "Voltar à Missão 4" (navega para `/mission/4/content`).
- Título: "Finanças — Visão Geral".
- Subtítulo: "Saiba exatamente quanto você está lucrando na Shopee".
- Seletor de período à direita, com opções: "Últimos 7 dias" (padrão), "Últimos 15 dias", "Últimos 30 dias". Estado em `period`.

### Configuração de Tributação
- Ícone + texto "Tipo de cadastro:".
- Dois botões de seleção:
  - "CPF (Pessoa Física)" — estado `taxType = "cpf"` (padrão).
  - "CNPJ (MEI / Empresa)" — estado `taxType = "cnpj"`.
- Quando CNPJ selecionado, aparece campo "Alíquota DAS:" (input numérico, padrão 6, limites 0 a 30) com sufixo "%".

### KPIs principais (4 cards)
Calculados a partir dos mocks:
- Mock base: `faturamentoBruto = R$ 8.450,00` (112 pedidos).
- `taxaShopee` = 20% do bruto = R$ 1.690,00.
- `gastoAds` = R$ 430,50.
- `custoProdutos` = 35% do bruto = R$ 2.957,50.
- `imposto` = alíquota × bruto (apenas se CNPJ); com 6% = R$ 507,00.
- `faturamentoLiquido` = bruto − taxaShopee − gastoAds − custoProdutos − imposto.
  - CPF: R$ 3.372,00. CNPJ (6%): R$ 2.865,00.

Cards:
1. "Faturamento Bruto" — `R$ 8.450,00` — subtítulo "112 pedidos".
2. "Faturamento Líquido" — valor de `faturamentoLiquido` — subtítulo "Após todas deduções".
3. "Lucro" — mesmo valor de `faturamentoLiquido` — subtítulo "Margem X.X%" (líquido / bruto × 100).
4. "ROAS" — `roas = faturamentoBruto / gastoAds` ≈ 19.6x — subtítulo "Retorno sobre Ads".

Coloração condicional: lucro/líquido positivos em verde, negativos em vermelho; ROAS ≥5 verde, ≥3 amarelo, <3 vermelho.

### Card "💸 Deduções do Faturamento"
Linhas (com ícone):
- "Comissão + Frete Shopee (~20%)" — valor `taxaShopee`.
- "Custo dos Produtos (~35%)" — valor `custoProdutos`.
- "Gasto com Anúncios" — valor `gastoAds`.
- (Condicional CNPJ) "Imposto (X% DAS)" — valor `imposto`.

Linha divisória com:
- "Total Deduções" — soma das deduções acima.
- Linha final destacada: "= Lucro Final" — valor do faturamento líquido.

### Card "📊 Métricas Complementares"
Lista de 5 métricas com indicador de "bom" (up) / "ruim" (down) / neutro:
- "CPA (Custo por Aquisição)" — `gastoAds / 67` ≈ R$ 6,43 — bom se < 10.
- "ROI" — `(faturamentoLiquido / (gastoAds + custoProdutos)) × 100` — bom se > 30%.
- "Ticket Médio" — `faturamentoBruto / 112` ≈ R$ 75,45 — sempre marcado como bom.
- "Vendas Pendentes (Carrinho)" — R$ 1.240,00 — neutro (sem indicador).
- "Pedidos Cancelados" — R$ 320,00 — marcado como ruim.

## Dados e estado
- Todos os valores são mocks hardcoded e cálculos derivados feitos em render.
- Estado local (useState):
  - `taxType`: "cpf" | "cnpj" (padrão "cpf").
  - `taxRate`: número (padrão 6).
  - `period`: string (padrão "7d").
- Sem localStorage, sem React Query.
- Animações de entrada Framer Motion nos cards e blocos.
- Sem Recharts (esta tela não tem gráficos).

## Interações
- Botão "Voltar à Missão 4" → `/mission/4/content`.
- Seletor de período (não altera dados mock).
- Botões "CPF"/"CNPJ" alternam `taxType`, o que faz aparecer/desaparecer o input de alíquota e o item de imposto no bloco de deduções, recalculando o lucro.
- Input "Alíquota DAS" atualiza `taxRate` (recalcula imposto).

## Observações
- O valor de "Lucro" é idêntico ao "Faturamento Líquido" no código atual (não há diferenciação de despesa adicional).
- Quando `faturamentoLiquido < 0`, os KPIs "Faturamento Líquido" e "Lucro" ficam marcados como negativos.
- Denominadores (67 vendas via ads, 112 pedidos) são constantes hardcoded dentro dos cálculos.
