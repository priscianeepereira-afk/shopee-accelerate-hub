# Descrição das Telas — VendeAI

Este diretório contém 1 documento markdown por tela do app, descrevendo **apenas conteúdo e funcionalidade** — sem nada sobre design, cores, tamanhos, ou componentes visuais. A ideia é servir como spec funcional pra construir cada tela usando o Bloom Design System, sem se prender à aparência da versão Lovable atual.

## Telas por fluxo

### Autenticação
- [Login.md](Login.md) — Formulário de login (email + senha).

### Jornada / Missões
- [Dashboard.md](Dashboard.md) — Hub principal com 4 missões, painel de parabéns e Top 3 vendedoras.
- [MissionIntro.md](MissionIntro.md) — Intro de cada missão (1–4) com promessa, bullets e CTA.
- [Mission1.md](Mission1.md) — Hub de aulas da Missão 1 (Sua Loja no Ar em 7 Dias).
- [Mission2.md](Mission2.md) — Gerador de plano de ação IA com 4 fases, 4 variantes de plano e persistência em localStorage (a tela mais complexa do app).
- [Mission3.md](Mission3.md) — Grade de 7 ferramentas (5 ativas + 2 "Em breve").
- [Mission4.md](Mission4.md) — Hub de 3 cards (Próximos Passos, Shopee Ads, Finanças).
- [LessonVideo.md](LessonVideo.md) — Player de aula (placeholder).
- [NextSteps.md](NextSteps.md) — Trilha com 5 aulas sequenciais.
- [DiagnosticResult.md](DiagnosticResult.md) — Resultado do diagnóstico (score 62/100 fixo).
- [PointsGuide.md](PointsGuide.md) — Guia de pontos com 8 ações + saldo.

### Minha Loja
- [StoreDashboard.md](StoreDashboard.md) — Dashboard da loja Shopee com métricas, saúde da loja, pedidos.
- [ShopeeAdsDashboard.md](ShopeeAdsDashboard.md) — Métricas de anúncios Shopee, produtos e campanhas.
- [FinanceDashboard.md](FinanceDashboard.md) — Lucro, deduções, ROAS, CPA, ROI.
- [MyIntegrations.md](MyIntegrations.md) — Integrações de loja (3 mocks + adicionar).
- [SupplierCatalog.md](SupplierCatalog.md) — Catálogo de fornecedores (6 mocks).
- [SupplierProducts.md](SupplierProducts.md) — Produtos de fornecedor selecionado (8 mocks).
- [ProductRegistration.md](ProductRegistration.md) — Cadastro de produto (4 seções + modal de sucesso).

### Conta / Social
- [MyProfile.md](MyProfile.md) — Perfil, 6 badges, 3 notebooks com 15 tarefas (a segunda tela mais complexa).
- [Community.md](Community.md) — Feed (4 posts), ranking, engajada do mês, gate de faturamento.
- [CalendarAgenda.md](CalendarAgenda.md) — Agenda de aulas/eventos (5 mocks) + inscrições.
- [Notifications.md](Notifications.md) — Abas Plataforma (4) + Fornecedor (4).
- [Support.md](Support.md) — 3 cards de canais de atendimento.
- [UpgradePlan.md](UpgradePlan.md) — Comparativo Free vs Pro com 10 features.

### Utilitárias
- [PlatformTour.md](PlatformTour.md) — Tour da plataforma (vídeo mockado + 7 capítulos).
- [NotFound.md](NotFound.md) — 404 (única tela em inglês).

## Como usar estes docs

Cada documento segue o mesmo template:

- **Objetivo** — pra que serve a tela
- **Conteúdo da tela** — elementos, textos exatos, listas de mocks
- **Dados e estado** — mocks, localStorage, bibliotecas
- **Fases/Estados** — quando aplicável (ex: Mission2 tem 4 fases)
- **Interações** — o que cada botão/input faz
- **Observações** — comportamentos não-óbvios, fluxos condicionais

Os textos PT-BR exatos aparecem entre aspas. Listas de items mock (missões, badges, eventos, planos) são enumeradas exaustivamente.

## Descobertas úteis levantadas durante a documentação

- **Login** não valida credenciais — qualquer submit vai pra `/integrations`.
- **Dashboard**: missões "BLOQUEADA" continuam clicáveis (bloqueio só visual).
- **MissionIntro**: se `:id` inválido, renderiza `null` (tela branca sem erro).
- **PlatformTour** é totalmente estático (botão play e capítulos sem `onClick`).
- **SupplierProducts** ignora o `:id` da URL — mostra sempre a mesma lista.
- **ProductRegistration** é 100% simulado (sem validação, sem envio real).
- **DiagnosticResult** tem score hardcoded (62) — o arco SVG também.
- **NotFound** é a única tela em inglês e a única fora do `AppLayout`.
