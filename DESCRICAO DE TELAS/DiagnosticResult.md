# Resultado do Diagnóstico da Loja

**Rota:** `/diagnostic-result`

## Objetivo
Apresentar o resultado do "diagnóstico da loja" — uma avaliação/score da saúde da loja Shopee do usuário — destacando os principais problemas detectados e as soluções recomendadas para cada um.

## O que é "diagnóstico" no contexto
No VendeAI, o diagnóstico é uma análise da loja Shopee do vendedor que gera uma nota de 0 a 100 indicando o grau de otimização/qualidade. A partir dessa nota, são listados os problemas que reduzem a pontuação e orientações de como corrigi-los. É parte da jornada de missões do usuário (Missão 3).

## Conteúdo da tela

### Cabeçalho
- Título: "Diagnóstico da sua Loja"

### Score
- Medidor circular exibindo a pontuação: "62" em destaque, seguido de "/100".
- Legenda abaixo: "Loja em desenvolvimento".

### Lista de problemas detectados
Cada item contém um título (problema) com ícone de alerta e um bloco "Como corrigir:" com a solução recomendada.

1. **"Títulos sem otimização"**
   - Como corrigir: "Use a ferramenta de palavras-chave da Shopee para identificar termos de alto volume e reescreva seus títulos incluindo essas palavras."

2. **"Poucas avaliações"**
   - Como corrigir: "Ative o programa de incentivo a avaliações na Shopee e envie mensagens personalizadas pedindo feedback após cada venda."

3. **"Tempo de resposta alto"**
   - Como corrigir: "Ative as respostas automáticas no painel da Shopee e configure mensagens padrão para as dúvidas mais comuns."

### Ações
- Botão "Refazer Diagnóstico"
- Botão "Voltar ao Dashboard"

## Dados e estado
- Lista de problemas hardcoded em array local `problems` (3 itens com `title` e `solution`).
- Score hardcoded: 62 (também hardcoded na matemática de preenchimento do arco SVG: `62 * 2.64`).
- Legenda "Loja em desenvolvimento" é fixa (não calculada a partir do score).
- Sem React Hook Form / Zod / localStorage nesta tela.

## Interações
- Botão "Refazer Diagnóstico": navega para `/mission/3` (a missão do diagnóstico).
- Botão "Voltar ao Dashboard": navega para `/dashboard`.

## Observações
- Fluxo típico: o usuário chega aqui após completar o questionário da Missão 3 (diagnóstico da loja); o resultado (62/100) é exibido e recomenda ações corretivas.
- Integração com outras telas: Dashboard (botão de voltar) e Mission 3 (refazer diagnóstico).
- Envolvida pelo `AppLayout`.
