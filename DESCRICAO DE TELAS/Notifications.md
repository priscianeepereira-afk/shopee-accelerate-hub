# Central de Notificações

**Rota:** /notifications

## Objetivo
Centralizar todas as notificações da usuária em dois grupos: notificações da plataforma Vend.A.I. e notificações relacionadas aos fornecedores, permitindo navegar para o recurso correspondente a cada aviso.

## Conteúdo da tela

### Cabeçalho
- Título: "Central de Notificações"
- Ação à direita: botão "Marcar todas como lidas" (sem handler real)

### Abas
Duas abas: "Plataforma" e "Fornecedor" (default selecionada: "Plataforma").

### Aba "Plataforma" — 4 notificações
1. Emoji 🏭, estado novo
   - Título: "Novo fornecedor disponível!"
   - Descrição: "SportPro Atacado acaba de entrar na plataforma. Confira o catálogo!"
   - Tempo: "há 2 horas"
   - CTA: "Ver Fornecedor" → navega para `/suppliers`

2. Emoji 🎯, estado novo
   - Título: "Missão 2 desbloqueada!"
   - Descrição: "Parabéns! Você completou a Missão 1. A Missão 2 está liberada para você."
   - Tempo: "há 1 dia"
   - CTA: "Acessar Missão 2" → navega para `/mission/2`

3. Emoji 📣, estado novo
   - Título: "Novas ferramentas disponíveis!"
   - Descrição: "Adicionamos o Gerador de Fotos com IA e o Otimizador de Títulos. Experimente agora!"
   - Tempo: "há 2 dias"
   - CTA: "Ver Ferramentas" → navega para `/mission/3`

4. Emoji 🏆, estado lido
   - Título: "Você subiu no ranking!"
   - Descrição: "Você passou para a 12ª posição. Continue usando a Shopee para ganhar mais pontos!"
   - Tempo: "há 3 dias"
   - CTA: "Ver Ranking" → navega para `/dashboard`

### Aba "Fornecedor" — 4 notificações
1. Emoji 🆕, estado novo
   - Título: "ForneceMais atualizou o catálogo"
   - Descrição: "3 novos produtos foram adicionados ao catálogo da ForneceMais Distribuidora."
   - Tempo: "há 3 horas"
   - CTA: "Ver Catálogo" → navega para `/suppliers/1`

2. Emoji 💰, estado novo
   - Título: "Promoção especial do fornecedor"
   - Descrição: "TechDrop Brasil está com 15% de desconto em gadgets por tempo limitado!"
   - Tempo: "há 5 horas"
   - CTA: "Aproveitar Oferta" → navega para `/suppliers/2`

3. Emoji 📦, estado lido
   - Título: "Pedido ao fornecedor atualizado"
   - Descrição: "Seu pedido #F-0892 junto à ForneceMais foi confirmado e está em separação."
   - Tempo: "há 1 dia"
   - CTA: "Ver Pedido" → navega para `/store`

4. Emoji ⚠️, estado lido
   - Título: "Produto com estoque baixo"
   - Descrição: "O produto 'Conjunto Fitness Feminino' da ForneceMais está com estoque baixo (12 un)."
   - Tempo: "há 2 dias"
   - CTA: "Repor Estoque" → navega para `/suppliers/1`

### Estrutura de cada card de notificação
- Emoji à esquerda
- Título (negrito)
- Etiqueta "NEW" exibida quando `isNew = true`
- Descrição
- Tempo relativo
- Botão CTA que navega para a rota indicada no mock

## Dados e estado
- Mocks hardcoded: arrays `platformNotifs` (4 itens) e `supplierNotifs` (4 itens). Cada item tem `emoji`, `isNew`, `title`, `desc`, `time`, `cta`, `path`.
- Sem useState/useEffect de lógica (apenas estado interno do componente Tabs do shadcn/ui).
- Sem localStorage.
- Bibliotecas visuais usadas: componente Tabs do shadcn/ui (Radix).

## Interações
- Clique nas abas "Plataforma" / "Fornecedor": alterna a lista exibida.
- Clique no botão "Marcar todas como lidas": sem comportamento conectado (apenas estilização).
- Clique no CTA de cada card: chama `navigate(path)` para o destino da notificação (rotas: `/suppliers`, `/mission/2`, `/mission/3`, `/dashboard`, `/suppliers/1`, `/suppliers/2`, `/store`).

## Observações
- Distinção visual "novo" vs "lido" é controlada pela flag `isNew`; afeta o destaque lateral do card e a presença do badge "NEW".
- Não existe estado vazio: as duas abas sempre têm itens no mock.
- Não há paginação, filtros adicionais nem marcação individual de leitura.
