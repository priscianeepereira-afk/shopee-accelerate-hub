# Painel da Loja — Loja Fitness Ana

**Rota:** /store

## Objetivo
Dashboard operacional de uma loja Shopee específica ("Loja Fitness Ana"), com métricas de pedidos/faturamento, indicadores de saúde da loja, lista de pedidos, pagamento de fornecedor, gestão rápida e relógio/horário de corte para envio.

## Conteúdo da tela

### Navegação superior
- Breadcrumb: "Minhas Integrações" (link para `/integrations`) → "Loja Fitness Ana".
- Link "← Voltar para Minhas Integrações" → `/integrations`.
- Título: "Painel da Loja — Loja Fitness Ana".
- Subtítulo: "Gerencie tudo relacionado à sua loja Shopee aqui".

### Cards de métricas (4 cards)
- "Pedidos Hoje" — valor "3" — 📦.
- "Faturado Hoje" — "R$ 247,80" — 💰.
- "Pedidos este Mês" — "47" — 📊.
- "Faturado este Mês" — "R$ 3.820,00" — 🚀.

### Bloco "Saúde da Loja"
- Título "Saúde da Loja" com subtítulo "Visão geral dos indicadores — dados alimentados pela integração Shopee".
- Badge de status geral: "Saudável".
- Grade com 6 indicadores (cada um com ícone, valor, label e meta):
  1. 🎯 "Taxa de Conversão" — "3.2%" — meta "Meta: ≥ 2%" — status OK.
  2. 👆 "Taxa de Cliques" — "6.1%" — "Meta: ≥ 5%" — OK.
  3. 👀 "Visualizações (7d)" — "1.240" — "Meta: ≥ 100" — OK.
  4. ⭐ "Avaliações Positivas" — "92%" — "Meta: ≥ 80%" — OK.
  5. 💬 "Tempo de Resposta" — "12 min" — "Meta: ≤ 30 min" — OK.
  6. 🚫 "Taxa de Cancelamento" — "4.8%" — "Meta: ≤ 5%" — Atenção (amarelo).
- Legenda dos status: "OK — Dentro da meta", "Atenção — Precisa melhorar", "Crítico — Melhoria urgente".

### Tabela "Meus Pedidos"
Colunas (nesta ordem): "# Pedido", "Produto", "Cliente", "Valor", "Status", "Ações".

Linhas mock (5):
1. "#10234" — "Conjunto Fitness P" — "Maria L." — "R$ 69,90" — "Aguardando Envio" — ações: "Gerar Etiqueta", "Ver Pedido".
2. "#10233" — "Fone Bluetooth TWS" — "João P." — "R$ 89,90" — "Pago" — "Gerar Etiqueta", "Ver Pedido".
3. "#10232" — "Organizador Gaveta" — "Carla S." — "R$ 34,90" — "Enviado" — "Rastrear".
4. "#10231" — "Kit Skincare" — "Fernanda R." — "R$ 129,90" — "Entregue" — "Ver Pedido".
5. "#10230" — "Fone Bluetooth TWS" — "Paulo M." — "R$ 89,90" — "Entregue" — "Ver Pedido".

### Card "Pagar Fornecedor"
- Fornecedor: "ForneceMais Distribuidora".
- Valor: "R$ 840,00 em aberto".
- Vencimento: "30/04/2025".
- Botões: "Ver Detalhes" e "Pagar Agora" (abre modal de pagamento).

### Card "Gestão Rápida"
Lista de 4 atalhos com emoji:
- 📦 "Cadastrar Novo Produto" → `/product/register`.
- 📊 "Ver Relatório de Vendas" (sem rota).
- 🏭 "Falar com Fornecedor" (sem rota).
- ⚙️ "Configurações da Loja" (sem rota).

### Relógio / Horário de Corte (componente LiveClock)
- Relógio ao vivo em formato HH:MM:SS atualizado a cada segundo.
- Legenda: "Horário atual".
- Aviso "⚠️ Horário de Corte" com texto "Pedidos pagos após o horário de corte serão enviados no dia seguinte."
- Linha "Shopee — Envio hoje até: 18:00".
- Pill condicional: "✓ Ainda dá tempo hoje" (se hora < 18) ou "⚠ Envio amanhã" (se hora ≥ 18).
- Rodapé em itálico: "* Os horários de corte serão alimentados dinamicamente pelo backend conforme regras da Shopee."

### Modal "Etiqueta de Envio"
Aberto ao clicar em "Gerar Etiqueta" de um pedido:
- Título: "Etiqueta de Envio — #<id do pedido>".
- Código de barras representado em fonte mono ("||||| |||| ||||| ||||").
- Código de rastreio: "SP123456789BR".
- Linha: "Shopee Express — Sedex".
- Dados hardcoded: Destinatário "Maria L.", Endereço "Rua das Flores, 123 — São Paulo/SP", Produto "Conjunto Fitness P".
- Botão "Imprimir Etiqueta".

### Modal "Confirmar Pagamento"
Aberto ao clicar em "Pagar Agora":
- Bloco com Fornecedor "ForneceMais Distribuidora" e valor "R$ 840,00".
- Texto: "Ao confirmar, o pagamento será processado via PIX."
- Botões: "Cancelar" (fecha modal) e "Confirmar Pagamento ✓" (apenas fecha o modal).

## Dados e estado
- Arrays mockados `metrics` e `orders` hardcoded no arquivo.
- Indicadores de saúde também hardcoded inline dentro do JSX.
- Estados locais (useState): `labelModal` (id do pedido ou null), `paymentModal` (boolean).
- `LiveClock` usa `useState` + `useEffect` com `setInterval` para atualizar a cada 1 s.
- Sem localStorage, sem React Query, sem Recharts, sem Framer Motion nesta tela.

## Interações
- Links do breadcrumb e "Voltar" → `/integrations`.
- Botão "Gerar Etiqueta" (apenas pedidos com status "Aguardando Envio" ou "Pago") abre modal de etiqueta.
- Botão "Ver Pedido" e "Rastrear" — visuais, sem handler.
- Botão "Pagar Agora" abre modal de pagamento.
- Botão "Cadastrar Novo Produto" navega para `/product/register`; demais botões de gestão rápida não têm destino.
- Badge de status "Ainda dá tempo hoje" / "Envio amanhã" muda automaticamente ao cruzar 18:00.

## Observações
- Lista de ações por pedido é controlada pelo array `actions` de cada objeto (`label`, `view`, `track`).
- Estado de saúde dos indicadores é atribuído manualmente no mock (5 OK, 1 Atenção).
- Dados do modal de etiqueta não refletem o pedido clicado — são fixos.
