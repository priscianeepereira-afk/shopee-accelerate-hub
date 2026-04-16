# Upgrade de Plano

**Rota:** /upgrade

## Objetivo
Página de comparação entre plano gratuito e plano Pro do Vend.A.I., com alternância entre cobrança mensal e anual, destacando a proposta de valor do Pro e a garantia de reembolso.

## Conteúdo da tela

### Cabeçalho de promoção
- Etiqueta superior: "VEND.A.I. PRO"
- Título: "Desbloqueie todo o potencial da sua loja"
- Subtítulo: "Acesse todas as missões, aulas ao vivo ilimitadas, comunidade exclusiva e ferramentas avançadas para acelerar suas vendas na Shopee."

### Toggle de ciclo de cobrança
Dois botões:
- "Mensal"
- "Anual" (com selo "-20%")

Default selecionado: "Anual".

### Cards de planos (grade de 2)

#### Plano "Gratuito"
- Subtítulo: "Para quem está começando"
- Preço: "R$ 0/mês"
- Botão: "Plano Atual" (desabilitado)
- Lista de features (marca check ou X conforme disponibilidade):
  - "Missão 1 — Sua Loja na Shopee" — incluído
  - "Missão 2 — Plano de 7 Dias" — incluído
  - "Missão 3 — Ferramentas de Vendas" — incluído parcialmente (Básico)
  - "Missão 4 — Próximo Nível" — não incluído
  - "Aulas ao vivo" — incluído parcialmente (1/mês)
  - "Desafios da comunidade" — não incluído
  - "Comunidade — postar e comentar" — não incluído
  - "Catálogo de fornecedores premium" — não incluído
  - "Dashboard avançado da loja" — incluído parcialmente (Básico)
  - "Suporte prioritário" — não incluído

#### Plano "Pro"
- Subtítulo: "Para quem quer acelerar de verdade"
- Preço:
  - "Mensal": "R$ 49,90/mês"
  - "Anual": "R$ 39,90/mês" com nota "Economia de R$ 120/ano"
- Botão: "Assinar PRO" (com ícone de coroa)
- Lista de features (todas com check):
  - "Missão 1 — Sua Loja na Shopee"
  - "Missão 2 — Plano de 7 Dias"
  - "Missão 3 — Ferramentas de Vendas (Ilimitado)"
  - "Missão 4 — Próximo Nível"
  - "Aulas ao vivo (Todas)"
  - "Desafios da comunidade"
  - "Comunidade — postar e comentar"
  - "Catálogo de fornecedores premium"
  - "Dashboard avançado da loja (Completo)"
  - "Suporte prioritário"

### Bloco de garantia
- Título: "Garantia de 7 dias"
- Texto: "Experimente o plano Pro por 7 dias. Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia."

## Dados e estado
- Mocks hardcoded: array `features` (10 itens, com `label`, `free`, `pro`, `icon`). Preços: `{ monthly: "49,90", annual: "39,90" }`.
- useState:
  - `selectedPlan` ("monthly" | "annual", inicial "annual")
- Sem localStorage, sem chamadas de API, sem useEffect.
- Bibliotecas visuais usadas: cards e botões do shadcn/ui.

## Interações
- Clique em "Mensal" ou "Anual": atualiza `selectedPlan`; afeta o preço exibido no card Pro e a mensagem de economia.
- Botão "Plano Atual": desabilitado, sem ação.
- Botão "Assinar PRO": sem handler (apenas visual, não dispara checkout real).
- Nenhum formulário ou input de pagamento.

## Observações
- O valor exibido de economia ("R$ 120/ano") aparece somente quando `selectedPlan = "annual"`.
- Textos parenteses ao lado das features ("Básico", "Ilimitado", "1/mês", "Todas", "Completo") aparecem apenas quando a feature é uma string em vez de boolean.
- Não há fluxo pós-checkout, confirmação, comparação mais detalhada ou FAQ de cobrança — apenas a garantia de 7 dias.
- A página não sabe se a usuária já é Pro; o card Gratuito está sempre como "Plano Atual".
