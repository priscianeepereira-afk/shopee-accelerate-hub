import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vend.A.I. — Plataforma de Treinamento",
  description: "Jornada gamificada para vendedoras Shopee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bloom">{children}</body>
    </html>
  );
}
