# Próximos Passos

**Rota:** /next-steps (acessada a partir da Missão 4)

## Objetivo
Trilha educacional complementar à Missão 4, com 5 "aulas" sobre profissionalização da operação do vendedor Shopee (CNPJ, contabilidade, regime tributário, emissão de nota fiscal e escala). Algumas aulas já estão desbloqueadas e outras permanecem bloqueadas.

## Conteúdo da tela

### Cabeçalho
- Botão "Voltar para Missão 4" → `/mission/4/content`.
- Título: "📋 Próximos Passos".
- Subtítulo: "Tudo que você precisa saber para profissionalizar sua operação: CNPJ, contabilidade, nota fiscal e escala."

### Lista de aulas
Cada item mostra: ícone (ou cadeado se bloqueada), título, descrição, duração e botão de play (ou cadeado).

Mock (5 aulas):
1. "Por que abrir um CNPJ?" — ícone Building2 — duração "12 min" — desbloqueada.
   - Descrição: "Entenda as vantagens de formalizar sua operação na Shopee: mais credibilidade, acesso a funcionalidades exclusivas e economia com impostos."
2. "Qual contabilidade eu indico" — ícone Receipt — "8 min" — desbloqueada.
   - Descrição: "Conheça a contabilidade parceira do nosso ecossistema que vai te ajudar a abrir seu CNPJ de forma simples e com o menor custo."
3. "MEI, ME ou Simples Nacional?" — ícone FileText — "15 min" — desbloqueada.
   - Descrição: "Descubra qual tipo de empresa é ideal para o seu faturamento atual e como pagar menos imposto legalmente."
4. "Bling: Emissão de Nota Fiscal" — ícone Receipt — "10 min" — bloqueada.
   - Descrição: "Aprenda a integrar o Bling à sua operação para emitir nota fiscal automaticamente a cada venda na Shopee."
5. "Escala: preparando seu negócio" — ícone TrendingUp — "14 min" — bloqueada.
   - Descrição: "Organize processos, estoque e atendimento para suportar um volume maior de vendas com qualidade."

## Dados e estado
- Array `lessons` mockado hardcoded com 5 objetos (`id`, `title`, `description`, `icon`, `duration`, `unlocked`).
- Animações de entrada via Framer Motion (`motion.div`) com delay progressivo por item.
- Sem localStorage, sem React Query, sem Recharts.

## Interações
- Botão "Voltar para Missão 4" → `/mission/4/content`.
- Cada aula é exibida como clicável (cursor pointer), mas não há handler de clique — bloqueadas ou não, não navegam.

## Observações
- Aulas bloqueadas aparecem em estado visual atenuado e substituem o ícone e o botão de play por um cadeado.
- A tela é estática e apenas apresenta a trilha — sem progresso persistente.
