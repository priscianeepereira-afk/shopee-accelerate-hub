# Missão 3 — Ferramentas Prontas para Acelerar Suas Vendas

**Rota:** `/mission/3` (página da Missão 3)

## Objetivo
Listar um conjunto de ferramentas (muitas com IA) que a vendedora pode acessar para otimizar fotos, vídeos, títulos, descrições e análise de desempenho, sem precisar de conhecimento técnico.

## Conteúdo da tela

### Cabeçalho
- Título: "Missão 3 — Ferramentas Prontas para Acelerar Suas Vendas"
- Subtítulo: "Use recursos já configurados para vender mais, sem precisar entender nada técnico."

### Grade de ferramentas
7 cards listados. Cada card contém: ícone, título, descrição, lista de tags e (quando aplicável) badge "Em breve" com ícone de cadeado.

Lista completa das ferramentas mockadas:

1. **Gerador de Fotos com IA**
   - id: `photo-ai`
   - Ícone: `Camera`
   - Descrição: "Transforme fotos de fornecedor em imagens profissionais com fundo branco, lifestyle e variações para teste A/B."
   - Status: disponível
   - Tags: "IA", "Fotos"

2. **Criador de Vídeos com IA**
   - id: `video-ai`
   - Ícone: `Video`
   - Descrição: "Gere vídeos curtos dos seus produtos para Shopee Vídeos, Reels e Stories automaticamente."
   - Status: disponível
   - Tags: "IA", "Vídeos"

3. **Editor de Imagens para Anúncios**
   - id: `image-editor`
   - Ícone: `ImagePlus`
   - Descrição: "Adicione textos, selos de promoção e molduras às suas fotos de produto para aumentar a taxa de clique."
   - Status: disponível
   - Tags: "Design", "Anúncios"

4. **Teste de Categorias**
   - id: `category-test`
   - Ícone: `TestTube`
   - Descrição: "Descubra quais categorias estão vendendo mais e cruze com os dados da sua loja para reposicionar produtos."
   - Status: disponível
   - Tags: "Dados", "Categorias"

5. **Otimizador de Títulos com IA**
   - id: `title-optimizer`
   - Ícone: `Sparkles`
   - Descrição: "Gere títulos otimizados com palavras-chave de alto volume de busca na Shopee automaticamente."
   - Status: disponível
   - Tags: "IA", "SEO"

6. **Gerador de Descrições**
   - id: `description-ai`
   - Ícone: `Layers`
   - Descrição: "Crie descrições persuasivas e completas para seus produtos com base nas melhores práticas da Shopee."
   - Status: "Em breve"
   - Tags: "IA", "Descrições"

7. **Análise de Desempenho por Produto**
   - id: `analytics`
   - Ícone: `BarChart3`
   - Descrição: "Veja quais produtos estão performando melhor e receba sugestões de otimização baseadas em dados."
   - Status: "Em breve"
   - Tags: "Dados", "Relatórios"

## Dados e estado
- Lista de ferramentas vem do mock hardcoded no próprio arquivo (constante `tools`).
- Estado local: `hoveredTool` (string ou null) controla o card em hover para aplicar efeito de destaque no ícone.
- Não lê nem grava em localStorage.
- Não usa React Query nem Recharts.
- **Framer Motion** é usado para animar a entrada de cada card (fade + slide) com delay escalonado.
- Não há parâmetros de rota.

## Fases/Estados
Tela estática (sem múltiplas fases). Cada ferramenta tem apenas dois estados possíveis:
- **available**: card clicável e navegável.
- **coming_soon**: card com opacidade reduzida, badge "Em breve" com ícone `Lock` e clique desabilitado.

## Interações
- **Clique em card disponível**: navega para `/mission/3/tool/<id>` — exemplos: `/mission/3/tool/photo-ai`, `/mission/3/tool/video-ai`, `/mission/3/tool/image-editor`, `/mission/3/tool/category-test`, `/mission/3/tool/title-optimizer`.
- **Clique em card "Em breve"**: não faz nada (verificação `!isComingSoon && navigate(...)`).
- **Hover sobre cards disponíveis**: altera o visual do ícone (aciona `setHoveredTool(tool.id)`).

## Observações
- Dos 7 cards listados, 5 são clicáveis e 2 estão marcados como "Em breve".
- Página renderizada dentro de `AppLayout`.
