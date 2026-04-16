# Padrão de criação de tela — Vend.A.I. (app logado)

Todas as telas dentro de `app/(app)/` seguem este padrão único para manter
consistência visual. Não desviar sem discussão prévia.

## Estrutura

```tsx
"use client"; // se tiver interatividade

export default function MinhaTelaPage() {
  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      {/* Card único que engloba TUDO: título, subtítulo e conteúdo */}
      <div
        className="flex rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40"
        style={{ minHeight: "720px", maxHeight: "calc(100vh - 7rem)" }}
      >
        {/* Coluna primária (ou única) — contém o título */}
        <div className="flex-1 overflow-y-auto p-6">
          <h1 className="text-[24px] font-normal tracking-[-0.01em] text-black/85">
            Título da Tela
          </h1>
          <p className="text-[14px] font-normal text-black/35 mt-1 mb-6">
            Subtítulo curto explicando a tela.
          </p>

          {/* conteúdo */}
        </div>

        {/* Colunas secundárias opcionais (sidebar, ranking, etc.)
            separadas por border-l black/[0.04] */}
      </div>
    </div>
  );
}
```

## Tokens fixos

| Elemento | Classes |
|---|---|
| Container externo | `p-6 max-w-[1400px] mx-auto` |
| Card raiz | `rounded-[14px] border border-black/[0.04] overflow-hidden bg-white/40` |
| Altura do card | `minHeight: "720px"`, `maxHeight: "calc(100vh - 7rem)"` |
| Título (H1) | `text-[24px] font-normal tracking-[-0.01em] text-black/85` |
| Subtítulo | `text-[14px] font-normal text-black/35 mt-1 mb-6` |
| Padding coluna | `p-6` |
| Sub-header interno (H3) | `text-[18px] font-normal tracking-[-0.01em] text-black/85` |
| Caption/meta | `text-[13px] font-normal text-black/35` ou `text-[11px] text-black/30` |

## Regras

- **Sempre** um único card raiz envolvendo título + subtítulo + conteúdo.
- **Nunca** colocar o `<h1>` ou subtítulo fora do card.
- **Font-weight**: sempre `font-normal` (exceção: números de métrica = `font-medium`).
- **Cores de texto**: sempre opacidade sobre black/white (`text-black/85`, `text-black/35`, etc.), nunca cores sólidas fixas de cinza.
- **Bordas**: sempre com opacidade (`border-black/[0.04]`, `border-white/[0.06]`).

## Exemplos em produção

- `app/(app)/community/page.tsx` — 3 colunas (feed + engajada + ranking)
- `app/(app)/agenda/page.tsx` — 2 colunas (calendário + eventos)
