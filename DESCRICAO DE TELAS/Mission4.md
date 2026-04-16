# Missão 4 — Vire uma Vendedora Profissional na Shopee

**Rota:** `/mission/4` (página da Missão 4)

## Objetivo
Apresentar três pilares avançados para quem quer profissionalizar a operação da Shopee: próximos passos formais (CNPJ, contabilidade etc.), uso de Shopee Ads e gestão financeira com lucro real. Serve como hub de acesso a três áreas especializadas.

## Conteúdo da tela

### Cabeçalho
- Título: "Missão 4 — Vire uma Vendedora Profissional na Shopee"
- Subtítulo: "Estruture sua operação, escale com previsibilidade e construa uma loja de verdade."

### Grade de 3 cards

#### Card 1 — Próximos Passos
- Ícone: `GraduationCap`
- Título: "Próximos Passos"
- Descrição: "Aulas sobre CNPJ, contabilidade, nota fiscal com Bling e como escalar sua operação"
- Lista de bullets (com check verde):
  - "Abertura de CNPJ"
  - "Contabilidade indicada"
  - "Nota fiscal com Bling"
  - "Preparação para escala"
- Botão: "📋 Ver Próximos Passos" → navega para `/proximos-passos`

#### Card 2 — Shopee Ads — Painel Inteligente
- Ícone: `Target`
- Título: "Shopee Ads — Painel Inteligente"
- Descrição: "Saiba exatamente qual produto anunciar com base na taxa de conversão, não no volume de vendas"
- Lista de bullets (com check verde):
  - "Produto ideal para anunciar"
  - "Gestão de campanhas"
  - "ROAS e CPC em tempo real"
  - "Recomendações automáticas"
- Botão: "🎯 Acessar Shopee Ads" → navega para `/shopee-ads`

#### Card 3 — Finanças — Lucro Real
- Ícone: `Wallet`
- Título: "Finanças — Lucro Real"
- Descrição: "Visualize seu lucro real com todas as deduções: comissão, impostos, ads e custo de produtos"
- Lista de bullets (com check verde):
  - "Faturamento líquido real"
  - "Configuração CPF ou CNPJ"
  - "ROAS, CPA e ROI"
  - "Vendas pendentes e canceladas"
- Botão: "💰 Acessar Finanças" → navega para `/financas`

## Dados e estado
- Os 3 cards e suas listas vêm de conteúdo hardcoded dentro do próprio JSX (não há constante exportada).
- Não lê nem grava em localStorage.
- Não usa React Query nem Recharts.
- **Framer Motion**: cada card tem animação de entrada (fade + slide vertical) com delays escalonados (0.05s, 0.1s, 0.2s).
- Não há parâmetros de rota.

## Fases/Estados
Tela estática — não possui fases. Todos os cards estão sempre disponíveis (não há lógica de bloqueio).

## Interações
- Botão "Ver Próximos Passos": navega para `/proximos-passos`.
- Botão "Acessar Shopee Ads": navega para `/shopee-ads`.
- Botão "Acessar Finanças": navega para `/financas`.

## Observações
- Funciona como um hub/menu: toda a lógica real está nas três rotas de destino.
- Página renderizada dentro de `AppLayout`.
