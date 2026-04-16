# Comunidade

**Rota:** /community

## Objetivo
Espaço social da plataforma onde as vendedoras trocam experiências, publicam posts, comentam, curtem e visualizam um ranking geral com destaque para a "Engajada do Mês" e o Top 3 do pódio.

## Conteúdo da tela

A tela está dividida em três colunas: feed principal à esquerda, card "Engajada do Mês" no meio e sidebar direita com ranking.

### Feed da comunidade (coluna principal)
Cabeçalho da seção:
- Título: "Comunidade Vend.A.I."
- Subtítulo: "Troque experiências com outros vendedores"

Selo de status de faturamento (gate de comentário):
- Se usuária tem faturamento maior ou igual a R$ 1.000 (constante `REVENUE_THRESHOLD = 1000`, `USER_REVENUE = 3820`): exibe "Você pode comentar (faturamento: R$ 3.820)"
- Caso contrário: exibe "Comente a partir de R$ 1.000 em faturamento"

Caixa de novo post (aparece somente se `canComment` = true):
- Avatar com iniciais "AS"
- Textarea com placeholder "Compartilhe algo com a comunidade..."
- Botão "Adicionar foto" (não funcional neste mock)
- Botão "Publicar" (limpa o texto, não faz POST real)

Lista de posts mock (4 posts):

Post 1:
- Autor: "Carla Mendonça" (iniciais CM)
- Marcador: "Top 1"
- Selo especial (badge): "🏅 Selo Missão 2 Completa"
- Data: "Há 2 dias"
- Título: "Como consegui 50 vendas no primeiro mês! 🎉"
- Conteúdo: "Gente, vou compartilhar minha jornada! Comecei do zero e em 30 dias cheguei a 50 vendas usando só estratégias orgânicas. O segredo foi: 1) Fotos profissionais com fundo branco 2) Títulos otimizados com palavras-chave 3) Stories diários no Instagram. Quem quiser saber mais, comenta aqui!"
- Curtidas: 34
- Comentários:
  - Juliana Torres (JT, Engajada do Mês): "Incrível, Carla! Vou aplicar essas dicas na minha loja também!" — "Há 1 dia" — 3 úteis
  - Maria Santos (MS): "Quais nichos você trabalha? Tô começando agora." — "Há 6h" — 1 útil

Post 2:
- Autor: "Admin Vend.A.I." (iniciais AA)
- Marcador: "Moderador"
- Data: "Há 1 dia"
- Título: "📢 Dica da Semana: Como usar Shopee Vídeos para aumentar tráfego"
- Conteúdo: "Olá, comunidade! Nesta semana, queremos destacar o poder do Shopee Vídeos. Lojas que publicam vídeos regularmente têm até 3x mais visualizações. Algumas dicas: mantenha os vídeos curtos (15-30s), mostre o produto em uso, e adicione texto na tela. Compartilhem seus resultados!"
- Curtidas: 52
- Comentários:
  - Ana Costa (AC): "Ótima dica! Vou testar essa semana com meus produtos de moda." — "Há 18h" — 8 úteis

Post 3:
- Autor: "João P." (iniciais JP)
- Data: "Há 5 horas"
- Título: "Dúvida sobre frete grátis na Shopee"
- Conteúdo: "Pessoal, vale a pena ativar frete grátis pra todos os produtos ou só pros mais vendidos? Minha margem é apertada em alguns itens. Alguém tem experiência com isso?"
- Curtidas: 8
- Comentários:
  - Fernanda Rocha (FR): "Ativa só pros produtos com margem boa! Os outros você compensa no preço." — "Há 3h" — 5 úteis
  - Carla Mendonça (CM, Top 1): "Concordo com a Fernanda. Eu ativo só pros top 5 produtos." — "Há 2h" — 2 úteis
  - Admin Vend.A.I. (VA, Moderador): "Excelente pergunta, João! Recomendamos frete grátis nos 3-5 produtos com melhor margem. Isso aumenta conversão sem comprometer seu lucro." — "Há 1h" — 12 úteis

Post 4:
- Autor: "Juliana Torres" (iniciais JT)
- Marcador: "Engajada do Mês"
- Selo especial (badge): "🎯 Selo Missão 1 Completa"
- Data: "Há 1 dia"
- Título: "Melhores nichos para começar em 2024"
- Conteúdo: "Depois de muita pesquisa, listei os nichos que mais estão crescendo na Shopee: 1) Moda fitness feminina 2) Acessórios para celular 3) Itens de organização para casa 4) Papelaria criativa. Quem já trabalha com algum desses?"
- Curtidas: 21
- Comentários: (nenhum)

Ações por post:
- Botão curtir (coração): incrementa/decrementa likes, alterna estado
- Botão comentários: expande/recolhe lista de comentários
- Cada comentário tem botão "útil" (joinha) que alterna marcação e soma +1 à contagem
- Campo de resposta ao pé do post (apenas se `canComment`): input com placeholder "Escreva um comentário...", botão de enviar; Enter envia. Posts sem permissão mostram "Alcance R$ 1.000 em faturamento para comentar"

Selos possíveis nos usuários:
- "Moderador" (quando `isModerator`)
- "Top 1" (quando `isTop1`)
- "Engajada do Mês" (quando `isEngajada`)

### Card "Engajada do Mês" (coluna central)
- Rótulo: "Engajada do Mês"
- Avatar com iniciais "JT"
- Nome: "Juliana Torres"
- Texto explicativo: "A engajada do mês recebe um selo especial e um prêmio exclusivo. Renova todo dia 1º."
- Estatísticas: "87 comentários • 234 respostas"
- Mês de referência: "Março 2026"

### Ranking da Plataforma (sidebar direita)
Cabeçalho:
- Título: "Ranking da Plataforma"
- Subtítulo: "Pontuação geral baseada em missões, vendas e engajamento"

Pódio (Top 3, exibidos na ordem 2º — 1º — 3º):
1. Carla Mendonça (CM) — 4.820 pts — badge "👑 Top 1" — receita mock 12.500
2. Juliana Torres (JT) — 3.910 pts — receita mock 9.800
3. Fernanda Rocha (FR) — 3.240 pts — receita mock 7.600

Lista 4º ao 10º:
4. Maria Santos (MS) — 2.980 pts
5. Ana Costa (AC) — 2.450 pts
6. Patrícia Lima (PL) — 2.100 pts
7. Roberta Silva (RS) — 1.870 pts
8. Luciana Alves (LA) — 1.540 pts
9. Débora Nunes (DN) — 1.320 pts
10. Camila Reis (CR) — 1.100 pts

Bloco "Sua posição":
- Texto: "Você está em 12º lugar"
- Pontuação: "890 pts"
- Botão: "Como ganhar mais pontos?"

Legenda de selos:
- "Top 1 — Líder do ranking geral"
- "Engajada do Mês — Mais ativa na comunidade"
- "Selos de Missão — Conquistas desbloqueadas"

## Dados e estado
- Mocks hardcoded: `mockPosts` (4 posts com comentários), `fullRanking` (10 posições), `engajadaDoMes` (Juliana Torres com 87 comentários e 234 reações), constante `CURRENT_MONTH = "Março 2026"`.
- Gate de participação: constantes `REVENUE_THRESHOLD = 1000` e `USER_REVENUE = 3820`.
- useState: `posts`, `newPost`, `expandedComments` (mapa postId → bool), `replyText` (mapa postId → string), `likedPosts` (array de postIds), `usefulComments` (array de chaves "postId-commentIdx").
- Sem localStorage e sem chamadas de API.
- Bibliotecas visuais usadas: Framer Motion (animações de expand/colapso de comentários).

## Interações
- Clique em curtir: adiciona/remove postId do estado `likedPosts` e atualiza contador de `likes`.
- Clique em contador de comentários: expande ou recolhe a seção de comentários daquele post.
- Clique em "útil" em comentário: alterna se a chave está em `usefulComments` e reflete no contador +1 localmente.
- Digitar e pressionar Enter (ou clicar no botão de enviar) no campo de resposta: adiciona um novo comentário ao post com user "Ana S." (AS), texto digitado, time "Agora" e 0 úteis; expande a lista de comentários.
- Botão "Publicar" no formulário de novo post: limpa o campo (não persiste).
- Botão "Como ganhar mais pontos?" no ranking: não tem navegação aqui (na sidebar da tela Community); no ranking interno não está vinculado a navegação específica.

## Observações
- O fluxo condicional principal é o gate de comentário baseado em faturamento: se `USER_REVENUE < REVENUE_THRESHOLD`, ocultam-se a caixa de novo post e o campo de resposta e aparece o aviso "Alcance R$ 1.000 em faturamento para comentar".
- Posts sem comentários não exibem seção expandível, apenas contador 0.
- Mensagens do "Admin Vend.A.I." recebem estilização diferenciada em header e comentários (marcador de moderador).
- A página depende dos componentes `CommunityFeed` e `CommunityRanking` (em `src/components/community/`).
