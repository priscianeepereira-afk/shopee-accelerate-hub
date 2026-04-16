# Bloom Design System — Plano de Mudancas (Atualizado v3)

## Contexto

Este plano documenta TODAS as mudancas visuais feitas no design system e serve como guia para aplicar o mesmo padrao em telas pendentes. Use este arquivo como referencia ao abrir um novo chat.

**Projeto:** `/Users/prisc/Downloads/VendeAI-git`
**Design System:** `src/design-system/`
**Referencia visual:** Pasta `design/` (33 screenshots do Behance - Bloom E-commerce Analytics SaaS)

---

## REGRAS VISUAIS ESTABELECIDAS

### 1. Tipografia
- **Font-weight**: Sempre `font-normal` (400). Nunca bold ou semibold
- **Excecao**: Numeros de metricas usam `font-medium` (500)
- **Headings de pagina**: `text-[32px] font-normal tracking-[-0.02em] text-black/85`
- **Subtitulo de pagina**: `text-[15px] font-normal text-black/35`
- **Estilo SF Pro**: Nem fino nem pesado, tracking negativo sutil

### 2. Cores de Texto — Contextual por Fundo
**NUNCA usar cores solidas fixas.** Sempre opacidade sobre black ou white.

| Funcao | Fundo Claro | Fundo Escuro |
|--------|-------------|--------------|
| Heading/Valor | `text-black/85` | `text-white/90` |
| Nome/Label forte | `text-black/70-80` | `text-white/70` |
| Body/Descricao | `text-black/40` | `text-white/40` |
| Caption/Label | `text-black/30` | `text-white/30` |
| Hint/Placeholder | `text-black/20` | `text-white/20` |
| Eyebrow | `text-black/25 tracking-[0.08em]` | `text-white/25` |

### 3. Eyebrow Labels
- Formato: `— TEXTO EM CAPS` ou `— TEXTO —` (dos dois lados)
- Classe: `text-[11px] font-normal text-black/25 tracking-[0.08em]`

### 4. Bordas
- Fundo claro: `border-black/[0.04]` (padrao) ou `border-black/[0.08]` (forte)
- Fundo escuro: `border-white/[0.04]` (padrao) ou `border-white/[0.06]` (forte)
- Baloes de chat: `border-[#F5EDE5]` (bege quente)
- Nunca `border-[#E8E4E0]` solido

### 5. Superficies / Cards
- **Card light**: `bg-[#FAF8F5]` creme + `border-black/[0.04]` + `rounded-[14-16px]` + `overflow-hidden`
- **Card dark**: gradiente translucido rosado + `border-white/[0.06]`
  - `background: linear-gradient(180deg, rgba(60, 40, 60, 0.85) 0%, rgba(30, 20, 35, 0.92) 100%)`
  - `backdropFilter: blur(12px)`
- **Borda colorida no topo**: TODOS os cards tem uma linha fina (3-4px) colorida no topo
  - Cores variam por contexto: verde `#22C55E`, coral `#F15A5A`, indigo `#6366F1`, bege `#E8D5B5`
  - Opacity: 0.4 (light), 0.6-0.8 (dark)
- **ShowcaseSection wrapper**: `bg-white/60 backdrop-blur-sm border-black/[0.04] rounded-[14px]`

### 6. Botoes
- **Shape**: `rounded-full` (pill), nunca `rounded-[8px]`
- **Primary**: `bg-[#F15A5A]/20 text-black/70` + glow `shadow-[0_0_20px_rgba(241,90,90,0.15)]`
- **Secondary**: `bg-black/[0.03] text-black/60 border border-black/[0.04]`
- **Outline**: `border border-black/[0.08] text-black/50`
- **Ghost**: `text-black/40` sem fundo nem borda
- **Dark**: `bg-[#1A1A2E] text-white/90`
- **Glass** (fundo escuro): `bg-white/[0.12] backdrop-blur-md text-white/80 border border-white/[0.08]`
- **Font**: `font-normal` (400), nunca medium/bold
- **Tamanhos**: sm=h-9 px-4, md=h-11 px-6, lg=h-12 px-8

### 7. Icones
- **Lucide React** com `strokeWidth={1.5-1.8}` (fino, estilo iOS)
- **Logo**: `Asterisk` (nunca Flower2)
- **Icones com cor**: cada icone usa uma cor da paleta com fundo translucido `${color}18`
- **Icones inativos**: `text-black/30` ou `strokeWidth={1.5}`

### 8. Toggle (balao dentro de balao)
- Container externo: `rounded-full bg-black/[0.03] border border-black/[0.04] p-1`
- Item ativo: `bg-white text-black/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-black/[0.04]`
- Item inativo: `text-black/35`
- Badge inline: `bg-[#22C55E]/[0.08] text-[#22C55E]/80 rounded-full` (VERDE, nao vermelho)

### 9. Cor Pink Light (#F2C4CC) — Regra de Uso
Esta cor e a cor de contraste principal para elementos sobre fundos dark/translucidos:
- **CTA do pricing featured**: `bg-[#F2C4CC] text-[#1A1A2E]/80` (solido)
- **Checks do card featured**: circle `bg-[#F2C4CC]/12%` + V stroke `#F2C4CC`
- **Badge MOST POPULAR**: `bg-[#F2C4CC]/15% text-[#F2C4CC]`
- **Estrelas (star rating)**: `fill-[#F2C4CC] text-[#F2C4CC]`
- **Checks dos cards light**: circle `bg-[#22C55E]/10%` + V stroke `#22C55E` (verde)

### 10. Pricing Cards — Especifico
- **Nomes dos planos**: STARTER, PRO, BUSINESS (caps, tracking aberto)
- **CTA**: `h-9` (36px), `w-auto mx-auto px-10` (centralizado, menor em largura), `text-[13px]`
- **CTA featured**: `bg-[#F2C4CC]` solido (Pink Light), texto `#1A1A2E/80`
- **CTA light**: outline `border-black/[0.12] text-black/60`
- **Features desabilitadas**: `text-black/20` + check circle `bg-black/[0.03]` vazio
- **Trust badges**: 4 items com dots coloridos (coral, verde, lavanda, bege)
- **Preco featured**: `text-[60px]`, outros `text-[44px]`

### 11. Testimonial Cards — Especifico
- **Estrelas**: cor `#F2C4CC` (Pink Light), nao amarelo
- **Borda no topo condicionada ao genero**:
  - Mulher: `#D4A0A0`, `#C8B8D8`, `#F2C4CC` (rosa, lavanda, pink)
  - Homem: `#E8D5B5` (bege)
- **Avatar**: suporta foto (`src` prop) ou iniciais com cor da paleta
- **Mock data**: campo `gender: 'female' | 'male'` no MockTestimonial

### 12. Card de Suporte/Conversa (BloomChatBubble)
- **Componente dedicado**: `src/design-system/components/bloom/BloomChatBubble.tsx`
- **Tecnica**: SVG completo como shape do balao (path unico com cauda curva bezier)
- **Cauda**: curva organica no canto superior — direito (aluna) ou esquerdo (suporte)
- **SVG dimensionamento**: `useRef` + `useEffect` para calcular tamanho do conteudo
- **Props**: `side: 'left' | 'right'`, `time?: string`, `children`
- **Balao aluna** (direita): fill `#FAF8F5` creme, stroke `#F5EDE5`
- **Balao suporte** (esquerda): fill `white`, stroke `#F5EDE5`
- **Fundo da secao**: gradiente `#F2C4CC` muito transparente
  - `linear-gradient(180deg, rgba(242,196,204,0.04) 0%, rgba(242,196,204,0.12) 50%, rgba(242,196,204,0.06) 100%)`
- **Timestamps**: `text-[10px] text-black/20`
- **Texto em PT-BR** (portugues)

### 13. Tags / Pills
- Outline only: `border border-black/[0.06] text-black/40 rounded-full`
- Sem preenchimento de fundo
- Hover: borda e texto intensificam

### 14. Charts / Graficos
- Line stroke: `#F15A5A` com gradient translucido
- Grid: `rgba(0,0,0,0.04)` claro ou `rgba(255,255,255,0.04)` escuro
- Eixos: `rgba(0,0,0,0.25)` ou `rgba(255,255,255,0.25)`
- Tooltip: `bg-white/90 backdrop-blur` ou `bg-[#1A1A2E]`

### 15. Metric Cards — Especifico
- **Light**: `bg-[#FAF8F5]` + borda colorida no topo
- **Dark**: gradiente translucido rosado + borda colorida no topo
- **Label**: `text-[11px] uppercase tracking-[0.04em]` black/30 ou white/30
- **Valor**: `text-[28px] font-medium` black/85 ou white/90
- **topColor prop**: cada card recebe uma cor (coral, verde, indigo, bege)

### 16. Input (BloomInput)
- **Border radius**: `rounded-[10px]`
- **Border**: `border-black/[0.06]`
- **Background**: `bg-white/60 backdrop-blur-sm`
- **Label**: `text-[13px] font-normal text-black/60`
- **Placeholder**: `text-black/25`
- **Focus**: `ring-[#F15A5A]/15`, `border-[#F15A5A]/30`
- **Error**: `border-[#EF4444]/40`, text `#EF4444/70`
- **Dark variant** (newsletter): `bg-white/[0.04] border-white/[0.06] text-white/80 placeholder-white/20`

---

## STATUS DAS TELAS

### ✅ CONCLUIDAS (9 de 11)

| # | Tela | Arquivo |
|---|------|---------|
| 1 | Overview | `pages/OverviewPage.tsx` |
| 2 | Cores | `pages/ColorsPage.tsx` |
| 3 | Tipografia | `pages/TypographyPage.tsx` |
| 4 | Botoes | `pages/ButtonsPage.tsx` |
| 5 | Cards | `pages/CardsPage.tsx` |
| 6 | Navegacao | `pages/NavigationPage.tsx` |
| 7 | Dashboard | `pages/DashboardPage.tsx` |
| 8 | Formularios | `pages/FormsPage.tsx` |
| 9 | Feedback | `pages/FeedbackPage.tsx` |

### ✅ COMPONENTES AJUSTADOS (22 de 25)

| Componente | Mudancas principais |
|------------|-------------------|
| `ShowcaseSection.tsx` | bg-white/60 backdrop-blur, bordas translucidas |
| `ShowcaseSidebar.tsx` | Secoes, icones coloridos, store selector, Asterisk |
| `ColorSwatch.tsx` | font-normal, opacidades |
| `ComponentPreview.tsx` | Bordas contextuais |
| `BloomButton.tsx` | Pill, rosa translucido, 6 variantes, glass |
| `BloomToggle.tsx` | Balao dentro de balao, badge VERDE |
| `BloomBadge.tsx` | Prop onDark, opacidades contextuais |
| `BloomCard.tsx` | topColor, bg creme #FAF8F5 / translucido rosado, overflow-hidden |
| `BloomMetricCard.tsx` | topColor, dark translucido rosado, font-medium valores |
| `BloomPainPointCard.tsx` | topColor, dark translucido rosado, font-normal |
| `BloomPricingCard.tsx` | CTA h-9 px-10 centralizado, #F2C4CC, checks translucidos, badge pink, features desabilitadas |
| `BloomTestimonialCard.tsx` | Estrelas rosa #F2C4CC, borda por genero, avatar com foto |
| `BloomChatBubble.tsx` | **NOVO** — SVG completo com cauda curva bezier, dimensionamento dinamico |
| `BloomHeatmap.tsx` | Variant dark, eyebrow, badge, dias contextual |
| `BloomProductTable.tsx` | Headers font-normal, opacidades, bordas |
| `BloomLineChart.tsx` | Grid/eixos rgba contextual, tooltip glass |
| `BloomDonutChart.tsx` | Variant dark, legenda contextual |
| `BloomNavbar.tsx` | Asterisk, font-normal, pill rosa Sign In |
| `BloomHero.tsx` | Sparkles glass badge, opacidades, ghost CTA |
| `BloomFooter.tsx` | Asterisk, font-normal, white/ opacidades |
| `BloomInput.tsx` | Bordas black/[0.06], label black/60, rounded-[10px], focus #F15A5A/15 |
| `BloomStarRating.tsx` | Cor #F2C4CC (Pink Light), strokeWidth 1.6, vazias black/[0.04] |

### ⚠️ COMPONENTES PENDENTES DE AJUSTE (3)

| Componente | O que falta |
|------------|------------|
| `BloomFAQAccordion.tsx` | hover → text-[#F15A5A]/70, body → text-black/40, divider → border-black/[0.04], chevron → text-black/25 |
| `BloomFeatureSection.tsx` | tabs cores solidas → opacidades, heading font-medium → font-normal, eyebrow "— LABEL" |
| `BloomComparisonTable.tsx` | headers font-medium → font-normal, bordas → black/[0.04], cells → text-black/40 |

### ❌ PAGINAS PENDENTES (2 de 11)

#### 10. Layout (`pages/LayoutPage.tsx`)
**Componentes que usa e precisam ajuste:** BloomFeatureSection, BloomComparisonTable, BloomFAQAccordion
**Na pagina:**
- [ ] Heading e subtitulo: `text-[32px] font-normal tracking-[-0.02em] text-black/85`
- [ ] `space-y-14`
- [ ] Todos os textos solidos → opacidades

#### 11. Midia (`pages/MediaPage.tsx`)
**Na pagina:**
- [ ] Heading e subtitulo: mesma regra
- [ ] Labels/specs: cores solidas → opacidades
- [ ] `space-y-14`

---

## CHECKLIST RAPIDO PARA TELAS PENDENTES

1. [ ] Heading: `text-[32px] font-normal tracking-[-0.02em] text-black/85`
2. [ ] Subtitulo: `text-[15px] font-normal text-black/35`
3. [ ] Spacing: `space-y-14`
4. [ ] Textos nunca `text-[#1A1A2E]` solido → `text-black/{opacidade}`
5. [ ] Nunca `font-medium/font-semibold` em labels (exceto metricas)
6. [ ] Bordas nunca `border-[#E8E4E0]` → `border-black/[0.04]`
7. [ ] Specs: label `text-black/60`, valor `text-black/25`
8. [ ] Cards light: `bg-[#FAF8F5]` + topColor
9. [ ] Cards dark: gradiente translucido rosado + topColor

---

## PALETA DE CORES FINAL

| Cor | Hex | Uso |
|-----|-----|-----|
| Light (creme) | `#FAF8F5` | Cards light, superficies |
| Background | `#F5F0EB` | Fundo da pagina |
| Borda Chat | `#F5EDE5` | Bordas dos baloes de chat |
| Dark | `#1A1A2E` | Base para gradiente dark |
| Black | `#111118` | Footer |
| Brand Primary | `#F15A5A` | CTA translucido 20%, icones, heatmap max |
| Pink Light | `#F2C4CC` | CTA solido em dark, checks, estrelas, badge MOST POPULAR |
| Accent Lavanda | `#C8B8D8` | Icones, dots, decorativo, borda testimonial feminino |
| Tertiary Rosa | `#D4A0A0` | Borda testimonial feminino |
| Gutenberg Bege | `#E8D5B5` | Borda testimonial masculino, icones |
| Pink | `#E88E9E` | Charts, heatmap media |
| Pink Deep | `#D4607A` | Heatmap alta |
| Success | `#22C55E` | Checks light, badges, trends positivos, toggle badge |
| Danger | `#EF4444` | Trends negativos |
| Warning | `#F59E0B` | Alertas, insights |
| Indigo | `#6366F1` | Borda Business, metric card |
| Chat BG | `rgba(242,196,204,0.04-0.12)` | Gradiente fundo chat suporte |

---

## ARQUIVOS CRIADOS/MODIFICADOS (TOTAL)

### Arquivos novos criados nesta sessao:
- `design.json` — tokens visuais completos
- `src/design-system/` — toda a estrutura (43+ arquivos)
- `DESIGN-SYSTEM-PLAN.md` — este documento
- `CLAUDE.md` — guia para Claude Code

### Mock data atualizado:
- `src/design-system/data/mock-data.ts`
  - `MockPricingTier` agora tem `features: PricingFeature[]` (com `available: boolean`), `topColor`, nomes STARTER/PRO/BUSINESS
  - `MockTestimonial` agora tem `gender: 'female' | 'male'`

### Unica modificacao no codigo existente:
- `src/App.tsx` — adicionada rota `/design-system/*` (linha 66)

---

## COMO RODAR

```bash
export PATH="$HOME/.local/node-v20.18.1-darwin-arm64/bin:$PATH"
cd /Users/prisc/Downloads/VendeAI-git
npm install    # se necessario
npm run build  # verificar erros
npm run dev    # porta 8080
# http://localhost:8080/design-system
```
