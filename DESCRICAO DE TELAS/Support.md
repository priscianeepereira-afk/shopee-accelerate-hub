# Central de Suporte

**Rota:** /support

## Objetivo
Hub simples com três opções de atendimento ao usuário: chat ao vivo, abertura de chamado e FAQ.

## Conteúdo da tela

### Cabeçalho
- Título: "Central de Suporte"
- Subtítulo: "Como podemos ajudar?"

### Grade de opções de atendimento (3 cards)
Cada card possui um ícone, um título e uma descrição.

1. "Chat ao Vivo"
   - Descrição: "Converse em tempo real com nossa equipe de suporte"

2. "Abrir Chamado"
   - Descrição: "Envie uma solicitação detalhada e receba resposta em até 24h"

3. "FAQ"
   - Descrição: "Encontre respostas para as perguntas mais frequentes"

## Dados e estado
- Mock hardcoded: array `options` com três objetos `{ icon, title, desc }`.
- Sem `useState`, sem `useEffect`, sem localStorage, sem navegação interna.
- Sem bibliotecas externas de animação/visualização.

## Interações
- Cada card é clicável (cursor indica ação), mas não há handler de onClick definido — nenhuma ação é disparada atualmente.
- Não há formulários, abas, modais ou submit.

## Observações
- Tela puramente informativa no estado atual; os três cards são placeholders sem destino.
- Não há lista detalhada de FAQ nem canais de atendimento reais vinculados.
- Nenhum estado vazio ou condicional.
