# Cadastro / Publicação de Produto na Shopee

**Rota:** `/product/register`

## Objetivo
Formulário para o usuário preencher os dados de um produto e (simular) publicá-lo diretamente na loja Shopee a partir do catálogo do fornecedor.

## Conteúdo da tela

### Cabeçalho
- Título: "Publicar Produto na Shopee"
- Subtítulo: "Preencha os dados abaixo e publique diretamente na sua loja Shopee"

### Seção 1 — Informações do Produto
Quatro campos:

- **Título do Anúncio** — input tipo texto. Valor inicial pré-preenchido: "Conjunto Fitness Feminino".
- **Categoria** — select com opções: "Moda Feminina", "Eletrônicos", "Casa".
- **Descrição do Produto** — textarea (4 linhas). Placeholder: "Descreva seu produto...".
- **Palavras-chave** — input tipo texto. Placeholder: "fitness, feminino, conjunto...".

### Seção 2 — Fotos do Produto
- Área de upload com texto: "Arraste as fotos aqui ou clique para selecionar" (não processa upload real, é apenas visual).
- Três placeholders rotulados "Foto 1", "Foto 2", "Foto 3".

### Seção 3 — Preço e Estoque
Três campos em grid:

- **Preço de venda** — input tipo número. Valor inicial: 69.90.
- **Quantidade em estoque** — input tipo número. Valor inicial: 100.
- **SKU** — input tipo texto. Valor inicial: "FIT-001".

### Seção 4 — Variações
- Label: "Este produto tem variações (cor, tamanho...)" com toggle (switch).
- Quando ativado, exibe um sub-formulário com colunas "Variação", "Preço", "Estoque" e uma linha pré-preenchida com:
  - Variação: "P - Preto"
  - Preço: 69.90
  - Estoque: 50
- Link/botão "+ Adicionar variação" (sem handler real).

### Ações
- Botão "Salvar Rascunho" (sem handler).
- Botão "Publicar na Shopee" (abre o modal de sucesso).

### Modal de sucesso
Exibido ao publicar:
- Ícone de check verde.
- Título: "Produto enviado para a Shopee com sucesso!"
- Texto: "Seu produto será publicado em breve."
- Botão "Fechar".
- Fecha também ao clicar fora do modal (overlay).

## Dados e estado
- Estado local `showSuccess` (useState, boolean) — controla visibilidade do modal.
- Estado local `hasVariations` (useState, boolean) — controla exibição do bloco de variações.
- Sem React Hook Form nem validação Zod.
- Sem persistência em localStorage, sem chamada a API.
- Valores iniciais dos inputs são hardcoded como `defaultValue` (correspondem ao produto "Conjunto Fitness Feminino / FIT-001").

## Interações
- Toggle "variações": alterna `hasVariations` e exibe/oculta a área de variações.
- Botão "+ Adicionar variação": sem ação real (apenas visual).
- Botão "Salvar Rascunho": sem ação real.
- Botão "Publicar na Shopee": seta `showSuccess = true` e abre o modal.
- Botão "Fechar" do modal / clique no overlay: seta `showSuccess = false` (fecha o modal).

## Observações
- Não há validação de campos nem feedback de erro.
- Os dados do formulário não são enviados a lugar nenhum — é uma simulação de publicação.
- Chegada típica: a partir do botão "Selecionar Produto" da tela `SupplierProducts`.
- Envolvida pelo `AppLayout`.
