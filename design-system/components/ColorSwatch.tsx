interface ColorSwatchProps {
  name: string;
  hex: string;
  usage?: string;
  dark?: boolean;
}

export function ColorSwatch({ name, hex, usage, dark = false }: ColorSwatchProps) {
  return (
    <div className="space-y-2">
      <div
        className="h-[88px] rounded-[10px] border border-black/[0.04] flex items-end p-2.5"
        style={{ backgroundColor: hex, opacity: 0.9 }}
      >
        <span className={`text-[11px] font-normal tracking-[0.01em] ${dark ? 'text-white/70' : 'text-black/40'}`}>{hex}</span>
      </div>
      <div>
        <p className="text-[13px] font-normal text-[#1A1A2E]/80">{name}</p>
        {usage && <p className="text-[11px] font-normal text-black/25">{usage}</p>}
      </div>
    </div>
  );
}
