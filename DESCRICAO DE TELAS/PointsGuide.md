# Guia de Pontuação

**Rota:** `/points-guide`

## Objetivo
Explicar ao usuário como ele pode aumentar sua pontuação na plataforma, listando as ações que geram pontos e seu saldo atual.

## Conteúdo da tela

### Cabeçalho
- Título: "Como Aumentar sua Pontuação"
- Subtítulo: "Cada ação dentro da plataforma e na Shopee gera pontos para você"

### Lista de ações que geram pontos
Cada item mostra a ação à esquerda e os pontos à direita (prefixados com "+" e sufixados com "pts"):

1. "Concluir uma aula" — +50 pts
2. "Completar uma Missão" — +500 pts
3. "Realizar uma venda na Shopee" — +100 pts
4. "Receber avaliação 5 estrelas" — +80 pts
5. "Cadastrar um produto na Shopee" — +30 pts
6. "Atingir meta semanal de vendas" — +300 pts
7. "Participar da comunidade" — +20 pts
8. "Usar ferramenta de aceleração de vendas" — +150 pts

### Bloco de saldo
- Texto: "Você tem 890 pontos"
- Subtexto: "Continue evoluindo! 🚀"

### Mensagem motivacional
- Texto: "Use a Shopee para tudo: cada venda, avaliação e produto cadastrado gera pontuação aqui na plataforma!"

### Ação
- Botão "Voltar ao Dashboard".

## Dados e estado
- Lista de ações hardcoded em array local `actions` (8 itens: ação e pts).
- Saldo de pontos hardcoded: 890.
- Sem React Hook Form / Zod / localStorage.

## Interações
- Botão "Voltar ao Dashboard": navega para `/dashboard`.

## Observações
- Tela puramente informativa; não há nenhuma lógica de atribuição ou cálculo de pontos.
- Integração: ponto de referência do sistema de gamificação (missões, vendas, avaliações) descrito no app.
- Envolvida pelo `AppLayout`.
