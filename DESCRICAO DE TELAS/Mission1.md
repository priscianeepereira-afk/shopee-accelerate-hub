# Missão 1 — Sua Loja no Ar em 7 Dias

**Rota:** `/mission/1` (página da Missão 1)

## Objetivo
Apresentar à vendedora o conteúdo didático da primeira missão: configurar a loja Shopee e realizar a primeira venda, organizado em 4 aulas sequenciais com estados de progresso.

## Conteúdo da tela

### Cabeçalho
- Título: "Missão 1 — Sua Loja no Ar em 7 Dias"
- Subtítulo: "Configure sua loja e faça sua primeira venda com um plano simples e direto."

### Grade de aulas (4 cards)
Cada card exibe: ícone (emoji), título, descrição curta, badge de status, botão "Assistir Aula" e (opcionalmente) um botão de ação extra. Se o status for "BLOQUEADA", o card aparece em estado bloqueado com um ícone de cadeado e o badge ganha prefixo "🔒 ".

Lista completa das aulas mockadas:

1. **Aula 1 — Credenciamento na Shopee**
   - Ícone: 📋
   - Descrição: "Aprenda o passo a passo para criar e verificar sua conta de vendedor na Shopee"
   - Status: "CONCLUÍDA"
   - Ação extra: nenhuma

2. **Aula 2 — Escolhendo seu Fornecedor**
   - Ícone: 🏭
   - Descrição: "Descubra como encontrar os melhores fornecedores para o seu nicho"
   - Status: "EM ANDAMENTO"
   - Ação extra: botão "Encontrar meu Fornecedor" que navega para `/suppliers`

3. **Aula 3 — Publicando seus Produtos**
   - Ícone: 📦
   - Descrição: "Aprenda a cadastrar produtos e publicar na Shopee direto desta plataforma"
   - Status: "BLOQUEADA"
   - Ação extra: botão "Cadastrar Produto na Shopee" que navega para `/product/register`

4. **Aula 4 — Vendendo**
   - Ícone: 💰
   - Descrição: "Estratégias práticas para conseguir suas primeiras vendas"
   - Status: "BLOQUEADA"
   - Ação extra: nenhuma

## Dados e estado
- Todas as aulas vêm de uma lista mock hardcoded dentro do próprio arquivo (constante `lessons`).
- Não lê nem grava em localStorage.
- Não usa React Query, Framer Motion ou Recharts.
- Usa apenas React Router (hook `useNavigate`) e ícone `Lock` do pacote `lucide-react`.
- Não há parâmetros de rota.

## Fases/Estados
A tela é estática (sem múltiplas fases). Os estados são representados por valor fixo do campo `status` em cada aula: "CONCLUÍDA", "EM ANDAMENTO" ou "BLOQUEADA". O status muda apenas a aparência do card (estado bloqueado aplica opacidade reduzida) e o prefixo do badge.

## Interações
- Botão "Assistir Aula" (presente em todos os cards): navega para `/lesson/1/<índice+1>`, ou seja, `/lesson/1/1`, `/lesson/1/2`, `/lesson/1/3`, `/lesson/1/4`.
- Botão "Encontrar meu Fornecedor" (Aula 2): navega para `/suppliers`.
- Botão "Cadastrar Produto na Shopee" (Aula 3): navega para `/product/register`.
- Os botões aparecem renderizados mesmo em aulas bloqueadas (a tela não desabilita cliques, apenas reduz a opacidade do card).

## Observações
- Não há lógica real de desbloqueio: o status vem do mock hardcoded e não muda com base em progresso do usuário.
- A página é renderizada dentro de `AppLayout` (sidebar da aplicação).
