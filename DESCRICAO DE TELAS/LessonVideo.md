# Aula — Vídeo de Conteúdo

**Rota:** `/lesson/:missionId/:lessonId` (ex.: `/lesson/1/2`)

## Objetivo
Exibir o conteúdo em vídeo de uma aula específica dentro de uma missão. É a tela de destino dos botões "Assistir Aula" das páginas de missão.

## Conteúdo da tela

### Cabeçalho
- Botão "Voltar para Missão <missionId>" (com seta) — o número da missão é preenchido dinamicamente a partir do parâmetro de rota.

### Área de vídeo (mock)
- Bloco em formato de vídeo (aspect ratio widescreen) funcionando como placeholder.
- Botão circular central com ícone `Play` (apenas visual — não há player de vídeo real integrado).

### Texto abaixo do vídeo
- Título: "Aula <lessonId> — Conteúdo da Aula" (o número vem do parâmetro de rota).
- Parágrafo descritivo: "Este é o conteúdo da aula selecionada. Aqui você encontrará o vídeo completo com explicações passo a passo, dicas práticas e exercícios para aplicar na sua loja Shopee."

## Dados e estado
- Não possui estado local nem efeitos.
- Lê dois parâmetros da URL via `useParams`: `missionId` e `lessonId`.
- Não lê nem grava em localStorage.
- Não usa React Query, Framer Motion nem Recharts.
- Usa apenas `useNavigate` e `useParams` do React Router e ícones `Play` e `ArrowLeft` do `lucide-react`.

## Fases/Estados
Tela estática — não possui fases.

## Interações
- Botão "Voltar para Missão <missionId>": navega para `/mission/<missionId>` (ex.: se `missionId` = 1, vai para `/mission/1`).
- Botão circular de play: possui apenas efeito de hover (troca de aparência). Nenhum clique dispara a reprodução — não há player implementado.

## Observações
- O conteúdo textual e o vídeo são genéricos; não existe lógica para buscar dados específicos da aula a partir de `missionId`/`lessonId`.
- Página renderizada dentro de `AppLayout`.
