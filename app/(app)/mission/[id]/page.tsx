import { Placeholder } from "../../_placeholder";

const titles: Record<string, string> = {
  "1": "Missão 1 — Sua Loja no Ar em 7 Dias",
  "2": "Missão 2 — Seu Plano de Ação",
  "3": "Missão 3 — Ferramentas Prontas",
  "4": "Missão 4 — Vendedora Profissional",
};

export default async function MissionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const title = titles[id] ?? `Missão ${id}`;
  return (
    <Placeholder
      title={title}
      description="Conteudo da missao sera construido na proxima etapa."
      accentColor="#F5C9A0"
    />
  );
}
