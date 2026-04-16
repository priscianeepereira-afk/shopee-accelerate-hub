# Catálogo de Fornecedores

**Rota:** `/suppliers`

## Objetivo
Permitir que o usuário encontre e escolha um fornecedor parceiro para visualizar o catálogo de produtos disponíveis para revenda na Shopee.

## Conteúdo da tela

### Cabeçalho
- Título: "Encontre seu Fornecedor"
- Subtítulo: "Escolha um fornecedor parceiro e veja o catálogo de produtos disponíveis"

### Busca
- Campo de busca (input tipo texto) com placeholder "Buscar fornecedor ou produto..."
- Ícone de lupa posicionado no campo
- Filtra em tempo real pelo nome do fornecedor ou categoria

### Lista de fornecedores (grid)
Cada card de fornecedor contém:
- Iniciais (avatar com letras)
- Nome do fornecedor
- Categoria
- Avaliação (nota com ícone de estrela)
- Badge opcional (classificação)
- Texto "Pedido mínimo: {valor}"
- Botão "Ver Catálogo"

Itens mock (6 fornecedores):

1. **ForneceMais Distribuidora** (id: `fornece-mais`, iniciais "FM")
   - Categoria: "Moda Feminina / Acessórios"
   - Avaliação: 4.8
   - Badge: "PARCEIRO VERIFICADO"
   - Pedido mínimo: R$ 300

2. **TechDrop Brasil** (id: `tech-drop`, iniciais "TD")
   - Categoria: "Eletrônicos / Gadgets"
   - Avaliação: 4.6
   - Badge: "PARCEIRO VERIFICADO"
   - Pedido mínimo: R$ 500

3. **Casa & Bem Atacado** (id: `casa-bem`, iniciais "CB")
   - Categoria: "Casa / Organização / Cozinha"
   - Avaliação: 4.9
   - Badge: "DESTAQUE"
   - Pedido mínimo: R$ 250

4. **BelezaFácil Cosméticos** (id: `beleza-facil`, iniciais "BF")
   - Categoria: "Beleza / Skincare / Perfumaria"
   - Avaliação: 4.7
   - Badge: nenhum
   - Pedido mínimo: R$ 200

5. **SportPro Atacado** (id: `sport-pro`, iniciais "SP")
   - Categoria: "Esporte / Fitness / Outdoor"
   - Avaliação: 4.5
   - Badge: nenhum
   - Pedido mínimo: R$ 350

6. **PetParaíso Distribuidora** (id: `pet-paraiso`, iniciais "PP")
   - Categoria: "Pets / Acessórios Animais"
   - Avaliação: 4.8
   - Badge: "NOVO"
   - Pedido mínimo: R$ 180

## Dados e estado
- Lista de fornecedores hardcoded em array local `suppliers` (6 itens com id, iniciais, nome, categoria, avaliação, badge, pedido mínimo).
- Estado local `search` (useState) para o termo de busca.
- Filtragem computada (`filtered`): compara `search` contra nome ou categoria (case-insensitive).
- Sem uso de React Hook Form / Zod / localStorage nesta tela.

## Interações
- Digitar no campo de busca: filtra os cards em tempo real por nome ou categoria.
- Clique em "Ver Catálogo": navega para `/suppliers/{id}` (rota do catálogo de produtos do fornecedor escolhido).

## Observações
- Integração de saída: ao clicar em "Ver Catálogo", o usuário é levado para a tela `SupplierProducts` com o `id` do fornecedor na URL.
- Envolvida pelo `AppLayout` (sidebar de navegação padrão do app).
