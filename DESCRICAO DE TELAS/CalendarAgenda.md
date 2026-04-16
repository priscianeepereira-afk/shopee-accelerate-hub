# Agenda de Aulas e Desafios

**Rota:** /agenda

## Objetivo
Calendário mensal que lista aulas ao vivo e desafios programados na plataforma, permite selecionar datas para ver eventos do dia e gerenciar inscrição em cada evento.

## Conteúdo da tela

Estrutura em duas colunas: calendário + resumo à esquerda; lista de eventos (selecionado e próximos) à direita.

### Cabeçalho
- Título: "Agenda de Aulas e Desafios"
- Subtítulo: "Confira as próximas aulas ao vivo e desafios da plataforma"

### Coluna esquerda — Calendário
- Calendário mensal em modo de seleção única, com localização pt-BR.
- Data padrão selecionada: 1 de abril de 2026.
- Dias com eventos recebem marcação visual (modifier `hasEvent`).
- Legenda abaixo do calendário:
  - "Dia com evento"
  - "Selecionado"

### Coluna esquerda — Card "Resumo"
Título: "Resumo"
Indicadores:
- "Aulas inscritas" — contagem dinâmica de eventos com `enrolled = true` (inicial: 2)
- "Próximos eventos" — contagem de eventos com data maior ou igual a hoje
- "Desafios ativos" — contagem de eventos com `type = "desafio"` (inicial: 2)

### Coluna direita — Eventos do dia selecionado
Título dinâmico com formato: "DD de MMMM, dia da semana" (locale pt-BR).
- Se não há eventos no dia: card central com ícone de calendário e texto "Nenhum evento nesta data".
- Se há eventos: lista de cards de evento.

### Coluna direita — Próximos Eventos
Título: "Próximos Eventos"
Lista cronológica de todos os eventos futuros (mostra data DD/MM em cada card).

### Eventos mock (5)

1. ID "1" — 01/04/2026 às 19:00
   - Tipo: "Aula ao Vivo"
   - Título: "Como Triplicar suas Vendas pelo Instagram"
   - Descrição: "Aprenda estratégias orgânicas para divulgar seus produtos da Shopee no Instagram e triplicar suas vendas sem gastar com anúncios."
   - Instrutora: "Juliana Torres"
   - Duração: "1h30"
   - Vagas: 120
   - Status inicial: "Inscrita"

2. ID "2" — 08/04/2026 às 20:00
   - Tipo: "Desafio"
   - Título: "Desafio 7 Dias — TikTok Shop"
   - Descrição: "Participe do desafio de 7 dias e aprenda a criar conteúdo viral no TikTok para impulsionar suas vendas na Shopee."
   - Instrutora: "Carla Mendonça"
   - Duração: "45min + tarefas diárias"
   - Vagas: 80
   - Status inicial: não inscrita

3. ID "3" — 15/04/2026 às 19:00
   - Tipo: "Aula ao Vivo"
   - Título: "Otimização de Anúncios na Shopee"
   - Descrição: "Descubra como criar títulos irresistíveis e fotos que convertem para seus produtos na Shopee."
   - Instrutora: "Fernanda Rocha"
   - Duração: "1h"
   - Vagas: 150
   - Status inicial: não inscrita

4. ID "4" — 22/04/2026 às 20:00
   - Tipo: "Desafio"
   - Título: "Desafio — Primeira Venda em 48h"
   - Descrição: "Desafio relâmpago para quem ainda não fez a primeira venda. Acompanhamento ao vivo com mentoria."
   - Instrutora: "Juliana Torres"
   - Duração: "1h + acompanhamento"
   - Vagas: 50
   - Status inicial: não inscrita

5. ID "5" — 29/04/2026 às 19:00
   - Tipo: "Aula ao Vivo"
   - Título: "Shopee Vídeos — Guia Completo"
   - Descrição: "Aprenda a criar vídeos que vendem dentro da própria Shopee. Do roteiro à publicação."
   - Instrutora: "Carla Mendonça"
   - Duração: "1h15"
   - Vagas: 100
   - Status inicial: "Inscrita"

### Estrutura de cada card de evento
- Etiqueta do tipo: "Aula ao Vivo" (com ícone de vídeo) ou "Desafio" (com ícone de raio).
- Etiqueta "Inscrita" (com check) quando `enrolled = true`.
- Título do evento.
- Descrição.
- Linha de metadados: data DD/MM (só na lista de "Próximos Eventos"), horário + duração, "com {instrutora}", "{N} vagas".
- Botão principal:
  - Se não inscrita: "Quero Participar"
  - Se inscrita: "Cancelar Inscrição"
- Botão adicional (somente quando inscrita): "Adicionar ao Google Agenda" (sem ação real).

## Dados e estado
- Mock hardcoded: array `scheduledEvents` (5 eventos) — tipo `ScheduledEvent` com `id`, `date`, `time`, `title`, `description`, `type` ("aula" | "desafio"), `enrolled`, `instructor`, `duration`, `spots`.
- useState:
  - `selectedDate` (Date, inicial: 1/abril/2026)
  - `events` (cópia local do mock para permitir alternância de `enrolled`)
- Derivados:
  - `eventDates` (array de Date para marcar dias no calendário)
  - `selectedEvents` (eventos do dia atualmente selecionado)
  - `upcomingEvents` (filtrados por data atual ou futura, ordenados por data crescente)
- Sem localStorage.
- Bibliotecas visuais usadas: Radix/shadcn Calendar, `date-fns` com `ptBR` locale para formatação.

## Interações
- Selecionar data no calendário: atualiza `selectedDate`; a seção superior da direita recarrega os eventos do dia.
- Botão "Quero Participar" / "Cancelar Inscrição": chama `toggleEnroll(id)` que alterna `enrolled` do evento localmente; afeta o card, a etiqueta "Inscrita" e o contador "Aulas inscritas" do resumo.
- Botão "Adicionar ao Google Agenda": sem handler (link visual).

## Observações
- O filtro "Próximos eventos" usa `new Date()` em tempo de render, então o resultado depende da data do sistema — em 16/04/2026, por exemplo, mostraria os eventos 3, 4 e 5.
- Se o usuário seleciona um dia sem eventos, aparece o estado vazio "Nenhum evento nesta data".
- O mesmo evento pode aparecer tanto na seção "Eventos do dia" quanto em "Próximos Eventos" (duplicação intencional).
- Inscrever/cancelar não persiste entre reloads.
- Não há formulário; toda a interação é via clique nos botões dos cards.
