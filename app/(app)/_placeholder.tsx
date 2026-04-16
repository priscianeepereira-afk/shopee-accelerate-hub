// Componente compartilhado de placeholder para as rotas internas do app.
// Usado enquanto as telas reais nao sao migradas — so pra permitir navegacao
// e visualizacao da sidebar Bloom com as cores da paleta.

interface PlaceholderProps {
  title: string;
  description?: string;
  accentColor?: string;
}

export function Placeholder({ title, description, accentColor = "#F15A5A" }: PlaceholderProps) {
  return (
    <div className="p-10 max-w-[1100px] mx-auto">
      <p
        className="text-[11px] font-normal tracking-[0.08em] uppercase mb-3"
        style={{ color: `${accentColor}CC` }}
      >
        — PAGINA PLACEHOLDER
      </p>
      <h1 className="text-[32px] font-normal tracking-[-0.02em] text-black/85">
        {title}
      </h1>
      {description && (
        <p className="text-[15px] font-normal text-black/35 mt-2">{description}</p>
      )}

      <div
        className="mt-10 rounded-[14px] border border-black/[0.04] bg-[#FAF8F5] p-8"
        style={{ borderTop: `3px solid ${accentColor}` }}
      >
        <p className="text-[14px] font-normal text-black/40">
          Tela em construcao. Navegue pela sidebar ao lado para ver as cores da paleta
          Bloom sendo aplicadas em cada item.
        </p>
      </div>
    </div>
  );
}
