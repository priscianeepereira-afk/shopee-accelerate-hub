# Minhas Integrações

**Rota:** /integrations

## Objetivo
Lista as lojas Shopee conectadas (ou com integração pendente) do usuário, permitindo abrir o painel de cada loja ou conectar uma nova loja através de um assistente em 3 passos.

## Conteúdo da tela

### Cabeçalho
- Título: "Minhas Integrações".
- Subtítulo: "Selecione uma loja para visualizar o painel de desempenho".

### Grade de lojas (3 cards mockados + 1 card "Adicionar")
Cada card de loja mostra: avatar com inicial "S", nome, badge "Shopee", status (bolinha 🟢 ou 🟡 + label), métricas resumidas, e botão de ação.

1. "Loja Fitness Ana"
   - Status: "🟢 Integrada e ativa".
   - Métricas: "47 pedidos este mês · R$ 3.820,00 faturados".
   - CTA: "Acessar Painel" → `/store`.

2. "Casa & Estilo Shop"
   - Status: "🟢 Integrada e ativa".
   - Métricas: "23 pedidos este mês · R$ 1.540,00 faturados".
   - CTA: "Acessar Painel" → `/store` (mesma rota — só navega se ativa).

3. "Tech Gadgets BR"
   - Status: "🟡 Integração pendente".
   - Métricas: "Aguardando conexão com a Shopee".
   - CTA: "Reconectar Shopee" (visual, não navega).

4. Card "Adicionar nova loja"
   - Ícone "+" e texto "Adicionar nova loja" + "Conecte mais uma loja Shopee".
   - Clique abre o modal de conexão.

### Modal "Conectar Nova Loja Shopee"
Três passos numerados:
- Passo 1: "Digite o nome da sua loja" — input "Nome da loja".
- Passo 2: "Autorize o acesso via Shopee" — botão "Conectar com Shopee".
- Passo 3: "Aguarde a confirmação da integração" — texto "A integração será confirmada em instantes...".

## Dados e estado
- Array `stores` mockado hardcoded com 3 itens.
- Estado local `addModal` (boolean) controla abertura do modal.
- Sem localStorage, sem React Query, sem Recharts, sem Framer Motion.

## Interações
- Clique em "Acessar Painel" (apenas em lojas ativas) → `/store`.
- Clique em "Reconectar Shopee" — sem handler.
- Clique em "Adicionar nova loja" abre o modal de conexão.
- Input "Nome da loja" e botão "Conectar com Shopee" dentro do modal — sem persistência/handler.

## Observações
- Todas as lojas têm a mesma rota de destino (`/store`) independentemente do nome — a listagem é apenas ilustrativa.
- O botão CTA só é funcional quando `status === "active"`.
