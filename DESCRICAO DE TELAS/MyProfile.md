# Meu Perfil

**Rota:** /profile

## Objetivo
Perfil da usuária exibindo dados pessoais editáveis, selos/badges conquistados, posição no ranking e três cadernos ("notebooks") de tarefas agrupadas (planos de missões e ferramentas), com checklists expansíveis e passo a passo detalhado para cada tarefa.

## Conteúdo da tela

Estrutura em duas colunas: coluna esquerda com dados do perfil + selos + ranking; coluna direita com os cadernos de tarefas.

### Cabeçalho geral
- Título: "Meu Perfil"

### Coluna esquerda — Cartão do perfil
- Avatar circular com iniciais "AS" (ao passar o mouse, exibe botão de edição com ícone de lápis — sem ação de upload real).
- Nome: "Ana Silva"
- Handle: "@anasilva.shopee"
- Bio editável (estado inicial): "Vendedora Shopee apaixonada por moda fitness 💪"
  - Clique na bio transforma-a em textarea com 2 linhas; onBlur salva no state local.
- Botão "Salvar Perfil" (sem submit para API; ação visual).

### Coluna esquerda — Card "Meus Selos"
Título do card: "Meus Selos"

Grade de 6 badges (estado e pontos):

1. Emoji 🎯 — Rótulo: "Missão 1 Completa"
   - Descrição: "Concluiu todas as tarefas da Missão 1"
   - Estado: conquistado (earned = true)
   - Pontos: +200 pts
   - Texto para compartilhar: "Completei a Missão 1 — Sua Loja em 7 Dias! 🎯"

2. Emoji 🚀 — Rótulo: "Missão 2 Completa"
   - Descrição: "Concluiu o plano de 7 dias da Missão 2"
   - Estado: bloqueado (earned = false)
   - Pontos: +350 pts
   - Texto para compartilhar: "Completei a Missão 2 — Triplicando Vendas! 🚀"

3. Emoji 🛠️ — Rótulo: "Ferramentas Ativas"
   - Descrição: "Usou todas as ferramentas de aceleração de vendas"
   - Estado: bloqueado
   - Pontos: +150 pts
   - Texto para compartilhar: "Usei todas as ferramentas de aceleração de vendas! 🛠️"

4. Emoji 💰 — Rótulo: "Primeira Venda"
   - Descrição: "Realizou sua primeira venda na Shopee"
   - Estado: conquistado
   - Pontos: +100 pts
   - Texto para compartilhar: "Fiz minha primeira venda na Shopee! 💰"

5. Emoji 🏆 — Rótulo: "50 Vendas"
   - Descrição: "Alcançou 50 vendas na Shopee"
   - Estado: bloqueado
   - Pontos: +500 pts
   - Texto para compartilhar: "Alcancei 50 vendas na Shopee! 🏆"

6. Emoji 💬 — Rótulo: "Voz da Comunidade"
   - Descrição: "Fez 10 comentários úteis na comunidade"
   - Estado: bloqueado
   - Pontos: +80 pts
   - Texto para compartilhar: "Sou uma voz ativa na comunidade Vend.A.I.! 💬"

Ao passar o mouse sobre um badge conquistado, aparece um botão de compartilhar (ícone). Após clique, aparece o feedback "Compartilhado! ✓" por 2 segundos (sem postagem real).

### Coluna esquerda — Card "Minha Posição no Ranking"
- Título: "🏆 Minha Posição no Ranking"
- Posição: "#12"
- Pontos: "{890 + totalPoints} pontos" (onde totalPoints é a soma dos points dos badges conquistados — 200 + 100 = 300; resultado: 1.190 pontos)
- Meta: "Faltam 110 pts para o #11" (barra de progresso em 89%)
- Top 3 do ranking:
  - 🥇 Carla Mendonça — 4.820 pts
  - 🥈 Juliana Torres — 3.910 pts
  - 🥉 Fernanda Rocha — 3.240 pts
- Botão "Como ganhar mais pontos?" → navega para `/points`.

### Coluna direita — Cartão "Minhas Tarefas"
- Título: "📋 Minhas Tarefas"
- Subtítulo: "Clique em uma tarefa para ver o checklist e o passo a passo"
- Cadernos (notebooks) são separados em duas seções: "Pendentes" e "Concluídas", baseadas no progresso (100% = concluída).

Cada card de caderno mostra: emoji, título, data, porcentagem de conclusão (N% e X/Y tarefas), botão de expandir/colapsar. Ao expandir, aparece barra de progresso animada e duas sublistas: "Pendentes" e "Concluídas". Cada tarefa pendente é clicável para marcar concluída (ícone circular) e o texto é clicável para expandir o "passo a passo" (ícone de livro).

#### Caderno 1 — "Plano 7 Dias — Foco em Tráfego" (emoji 🚀)
- Data: data atual localizada em pt-BR
- 7 tarefas:

1. "Crie 3 Reels no Instagram" — sub: "Dia 1" — done: false
   Passo a passo:
   - "Escolha 3 produtos que você quer destacar"
   - "Grave vídeos curtos (15-30s) mostrando o produto em uso"
   - "Use músicas em alta no Instagram para aumentar alcance"
   - "Adicione o link da sua loja Shopee na bio"
   - "Publique os Reels em horários de pico (12h, 18h ou 21h)"

2. "Publique no Shopee Vídeos" — sub: "Dia 2" — done: false
   Passo a passo:
   - "Acesse o painel do vendedor na Shopee"
   - "Vá em 'Central de Marketing' → 'Shopee Vídeos'"
   - "Envie pelo menos 2 vídeos curtos dos seus produtos"
   - "Use legendas com palavras-chave relevantes"
   - "Marque os produtos correspondentes nos vídeos"

3. "Stories diários com produtos" — sub: "Dia 3" — done: true
   Passo a passo:
   - "Poste pelo menos 5 stories ao longo do dia"
   - "Use enquetes e caixas de perguntas para engajar"
   - "Adicione links diretos para os produtos na Shopee"
   - "Mostre bastidores, embalagens e envios"
   - "Salve os melhores stories nos destaques"

4. "Otimize títulos para busca" — sub: "Dia 4" — done: false
   Passo a passo:
   - "Pesquise os termos mais buscados na Shopee para seu nicho"
   - "Reescreva os títulos dos seus 3 principais produtos"
   - "Inclua palavras-chave como: marca, tipo, material, tamanho"
   - "Mantenha o título com até 120 caracteres"
   - "Evite usar CAPS LOCK ou emojis no título"

5. "Cupom de seguidor" — sub: "Dia 5" — done: false
   Passo a passo:
   - "Acesse 'Central de Marketing' → 'Cupons'"
   - "Crie um cupom exclusivo para novos seguidores"
   - "Defina desconto entre 5% e 15% com valor mínimo de compra"
   - "Configure a validade por 7 dias"
   - "Divulgue o cupom nos seus stories e bio"

6. "Carrossel de produtos" — sub: "Dia 6" — done: false
   Passo a passo:
   - "Selecione seus 5 produtos mais atrativos"
   - "Crie um carrossel no Instagram com fotos de qualidade"
   - "Na legenda, destaque benefícios de cada produto"
   - "Adicione CTA: 'Link na bio para comprar'"
   - "Use hashtags relevantes do seu nicho (10-15 hashtags)"

7. "Analise tráfego da semana" — sub: "Dia 7" — done: false
   Passo a passo:
   - "Acesse 'Dados da Loja' no painel do vendedor"
   - "Compare visualizações desta semana vs semana anterior"
   - "Identifique qual fonte trouxe mais visitantes"
   - "Verifique quais produtos tiveram mais cliques"
   - "Dobre a aposta nas estratégias que mais funcionaram"

#### Caderno 2 — "Ferramentas de Vendas — Fotos com IA" (emoji 🛠️)
- Data: "18/03/2026"
- 3 tarefas (sem subrótulo):

1. "Corrigir títulos dos anúncios com palavras-chave" — done: false
   Passo a passo:
   - "Acesse a lista de produtos no painel do vendedor"
   - "Identifique os anúncios com títulos genéricos ou curtos"
   - "Pesquise palavras-chave populares na barra de busca da Shopee"
   - "Reescreva cada título incluindo: tipo + marca + material + tamanho"
   - "Salve e verifique se os títulos têm entre 80-120 caracteres"

2. "Configurar respostas automáticas no painel Shopee" — done: false
   Passo a passo:
   - "Acesse 'Central do Vendedor' → 'Chat'"
   - "Vá em 'Configurações de Chat' → 'Respostas Automáticas'"
   - "Crie mensagem de boas-vindas: saudação + cupom disponível"
   - "Configure resposta para fora do horário comercial"
   - "Adicione respostas rápidas para perguntas frequentes (frete, prazo, tamanho)"

3. "Solicitar avaliações para últimos 5 compradores" — done: false
   Passo a passo:
   - "Acesse 'Meus Pedidos' → 'Concluídos'"
   - "Identifique os 5 últimos compradores que não avaliaram"
   - "Envie mensagem gentil pelo chat pedindo avaliação com foto"
   - "Ofereça um cupom de desconto como agradecimento"
   - "Acompanhe se as avaliações foram publicadas em 3 dias"

#### Caderno 3 — "Missão 1 — Sua Loja em 7 Dias" (emoji 🎯)
- Data: "10/03/2026"
- 5 tarefas, todas done: true (caderno está 100% concluído → aparece na seção "Concluídas"):

1. "Criar conta de vendedor na Shopee"
   Passo a passo:
   - "Acesse shopee.com.br/seller e clique em 'Cadastrar'"
   - "Preencha seus dados pessoais e endereço"
   - "Verifique seu e-mail e número de celular"
   - "Complete o cadastro da loja com nome e logo"

2. "Publicar primeiro produto na loja"
   Passo a passo:
   - "Acesse 'Meus Produtos' → 'Adicionar Produto'"
   - "Tire pelo menos 5 fotos com fundo branco"
   - "Escreva título com palavras-chave relevantes"
   - "Preencha descrição completa com benefícios e medidas"
   - "Defina preço competitivo e estoque disponível"

3. "Configurar métodos de envio"
   Passo a passo:
   - "Acesse 'Configurações da Loja' → 'Envio'"
   - "Ative pelo menos 2 transportadoras (Correios + outra)"
   - "Configure peso e dimensões padrão dos seus produtos"
   - "Considere ativar 'Frete Grátis' para produtos com boa margem"

4. "Criar cupom de boas-vindas"
   Passo a passo:
   - "Vá em 'Central de Marketing' → 'Cupons'"
   - "Crie cupom de 10% para novos seguidores"
   - "Defina valor mínimo de compra para não perder margem"
   - "Divulgue o cupom na bio do Instagram e na descrição da loja"

5. "Compartilhar loja no Instagram"
   Passo a passo:
   - "Copie o link da sua loja na Shopee"
   - "Adicione na bio do Instagram"
   - "Crie um post de inauguração da loja"
   - "Faça stories mostrando seus primeiros produtos"

### Formulário de edição do perfil
- Bio: campo textarea, editável por clique no texto, sem label explícita, 2 linhas, salva no blur.
- Botão "Salvar Perfil": submit visual.
- Avatar: sem upload real — apenas hover mostra o ícone de lápis.
- Não há validações de formulário ativas nesta tela (campos adicionais como nome/handle são estáticos).

## Dados e estado
- Mocks hardcoded: `notebooks` (3 cadernos), `badges` (6 selos), `ranking` (3 posições do pódio) — declarados no topo do arquivo.
- useState:
  - `bio` (string, inicial "Vendedora Shopee apaixonada por moda fitness 💪")
  - `editBio` (boolean, controla modo de edição)
  - `checks` (objeto chave `${notebookId}-${taskIdx}` → boolean, controla tasks marcadas pelo usuário além das já `done`)
  - `expandedNotebook` (id do caderno atualmente aberto | null)
  - `expandedTask` (chave da tarefa com passo a passo aberto | null)
  - `sharedBadge` (id do badge recém-compartilhado | null, reset após 2s)
- Cálculos derivados:
  - `getProgress(nb)`: % de tarefas marcadas ou já done
  - `isNotebookComplete(nb)`: progresso = 100
  - `pendingNotebooks` e `completedNotebooks`: separam os cadernos nas duas seções
  - `earnedBadges` e `totalPoints`: soma dos pontos dos badges conquistados (300 no mock)
- Sem localStorage.
- Bibliotecas visuais usadas: Framer Motion (expand/collapse, barra de progresso animada, tooltip "Compartilhado!").

## Interações
- Clique no avatar (hover): exibe overlay de edição (sem função real).
- Clique na bio: entra em modo de edição; onBlur sai do modo.
- Botão "Salvar Perfil": sem ação implementada.
- Clique em um badge conquistado (hover): aparece o botão de compartilhar; clique chama `shareBadge` (feedback de 2s "Compartilhado! ✓").
- Botão "Como ganhar mais pontos?": `navigate("/points")`.
- Clique no cabeçalho de um caderno: alterna `expandedNotebook` e reseta `expandedTask`.
- Clique no ícone circular de uma tarefa pendente: marca/desmarca via `toggleTask` (atualiza `checks`).
- Clique no texto de uma tarefa pendente com passo a passo: expande/colapsa a lista numerada de steps.
- Tarefas já concluídas (done: true ou marcadas) aparecem riscadas na sublista "Concluídas".

## Observações
- O caderno "Missão 1" começa 100% concluído, então é exibido automaticamente na seção "Concluídas". Os demais ficam em "Pendentes" até completarem todas as tarefas.
- Os pontos do ranking refletem somatória dinâmica: 890 + totalPoints. No estado inicial, totalPoints = 300 (badges "Missão 1 Completa" e "Primeira Venda"), resultando em 1.190 pts.
- Não há persistência: marcar tarefas, editar bio ou compartilhar selos não sobrevive ao reload.
- A função de compartilhar selo exibe apenas um toast local; não há post real na comunidade.
- A tela não cobre edição de nome ou handle — apenas bio.
