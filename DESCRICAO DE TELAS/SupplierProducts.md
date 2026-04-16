# Catálogo de Produtos do Fornecedor

**Rota:** `/suppliers/:id`

## Objetivo
Mostrar o catálogo de produtos oferecidos por um fornecedor específico (identificado pelo parâmetro `:id` da rota) para que o usuário selecione um produto e siga para o cadastro na Shopee.

## Conteúdo da tela

### Topo
- Botão "Voltar para Fornecedores" (com ícone de seta).
- Título: "Catálogo de Produtos"
- Subtítulo: "Fornecedor: {id}" — exibe o id do fornecedor capturado da URL.

### Filtros
Três selects (valores placeholders, não funcionais):
- Select "Categoria" (apenas uma opção: "Categoria")
- Select "Faixa de Preço" (apenas uma opção: "Faixa de Preço")
- Select de ordenação com opções: "Mais Vendidos", "Menor Preço", "Maior Margem"

### Grid de produtos
Cada card contém:
- Área de imagem (placeholder com ícone genérico de pacote)
- Nome do produto
- SKU
- Texto "Atacado: {custo}"
- Texto "Venda por: {preço}"
- Badge "Margem: {margem}"
- Texto "Estoque: {quantidade} un"
- Botão "Selecionar Produto"

Itens mock (8 produtos — os mesmos são exibidos independentemente do `id` do fornecedor):

1. **Conjunto Fitness Feminino** — SKU: FIT-001 — Atacado: R$ 28,90 — Venda: R$ 69,90 — Margem: 58% — Estoque: 240
2. **Fone Bluetooth TWS** — SKU: TEC-015 — Atacado: R$ 22,50 — Venda: R$ 59,90 — Margem: 62% — Estoque: 180
3. **Organizador de Gaveta** — SKU: CAS-008 — Atacado: R$ 12,00 — Venda: R$ 34,90 — Margem: 65% — Estoque: 320
4. **Kit Skincare Facial** — SKU: BEL-003 — Atacado: R$ 35,00 — Venda: R$ 89,90 — Margem: 61% — Estoque: 150
5. **Camiseta Dry Fit Esportiva** — SKU: FIT-022 — Atacado: R$ 18,90 — Venda: R$ 49,90 — Margem: 62% — Estoque: 400
6. **Smartwatch Básico** — SKU: TEC-030 — Atacado: R$ 45,00 — Venda: R$ 119,90 — Margem: 62% — Estoque: 90
7. **Porta Temperos Giratório** — SKU: CAS-019 — Atacado: R$ 25,00 — Venda: R$ 64,90 — Margem: 61% — Estoque: 200
8. **Coleira LED para Pets** — SKU: PET-007 — Atacado: R$ 14,00 — Venda: R$ 39,90 — Margem: 64% — Estoque: 280

## Dados e estado
- Lista de produtos hardcoded em array local `products` (8 itens com nome, SKU, custo, preço, margem, estoque).
- Parâmetro de rota: `:id` (obtido via `useParams`).
- Sem React Hook Form / Zod / localStorage.
- Os filtros (selects) são puramente visuais e não alteram a lista.

## Interações
- Botão "Voltar para Fornecedores": navega para `/suppliers`.
- Botão "Selecionar Produto" (em cada card): navega para `/product/register` (sem passar o produto selecionado como parâmetro).
- Selects de filtro/ordenação: não possuem handler — são inertes.

## Observações
- A lista de produtos é a mesma para qualquer fornecedor — não há diferenciação por `id`.
- Integração de saída: "Selecionar Produto" leva para a tela `ProductRegistration`.
- Envolvida pelo `AppLayout`.
