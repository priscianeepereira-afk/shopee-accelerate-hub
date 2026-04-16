"use client";

// Layout do app logado (Next.js App Router) — adaptado do AppLayoutV2.
// Usa apenas componentes Bloom já existentes no DS:
//   - BloomAppSidebar (+ tipos BloomAppSidebarSection, BloomAppSidebarItem)
//   - BloomAppHeader
// Troca react-router (useLocation/useNavigate/Outlet) por next/navigation:
//   - usePathname, useRouter, children.

import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Compass,
  Map,
  Link as LinkIcon,
  Bell,
  User,
  MessageCircle,
  CalendarDays,
  Headphones,
} from "lucide-react";
import {
  BloomAppSidebar,
  type BloomAppSidebarSection,
} from "@/design-system/components/bloom/BloomAppSidebar";
import { BloomAppHeader } from "@/design-system/components/bloom/BloomAppHeader";

// Paleta Bloom por item — cada um ganha uma cor-familia (bg + icone) + variante
// escura para o texto, seguindo o padrao do badge "Economize 20%" (verde).
const sections: BloomAppSidebarSection[] = [
  {
    title: "INÍCIO",
    items: [
      {
        label: "Conhecendo a Plataforma",
        path: "/platform-tour",
        icon: Compass,
        activeColor: "#F15A5A", // Coral (brand — tela de intro)
        activeTextColor: "#B23838",
      },
    ],
  },
  {
    title: "JORNADA",
    items: [
      {
        label: "Missões",
        path: "/dashboard",
        icon: Map,
        activeColor: "#F5C9A0", // Laranja pastel (jornada / warm)
        activeTextColor: "#A8692A",
        subItems: [
          { label: "Missão 1 — Sua Loja no Ar em 7 Dias", path: "/mission/1" },
          { label: "Missão 2 — Seu Plano de Ação", path: "/mission/2" },
          { label: "Missão 3 — Ferramentas Prontas", path: "/mission/3" },
          { label: "Missão 4 — Vendedora Profissional", path: "/mission/4" },
        ],
      },
    ],
  },
  {
    title: "MINHA LOJA",
    items: [
      {
        label: "Minhas Integrações",
        path: "/integrations",
        icon: LinkIcon,
        activeColor: "#22C55E", // Verde Success — mesmo do botao "Economize 20%"
        activeTextColor: "#15803d",
      },
      {
        label: "Notificações",
        path: "/notifications",
        icon: Bell,
        badge: { text: "4", variant: "brand" },
        activeColor: "#E88E9E", // Pink charts
        activeTextColor: "#A13E53",
      },
    ],
  },
  {
    title: "CONTA",
    items: [
      {
        label: "Meu Perfil",
        path: "/profile",
        icon: User,
        activeColor: "#C8B8D8", // Lavanda (Accent — roxo)
        activeTextColor: "#6B5A85",
      },
      {
        label: "Comunidade",
        path: "/community",
        icon: MessageCircle,
        activeColor: "#E8D5B5", // Bege Gutenberg
        activeTextColor: "#8A6B3A",
      },
      {
        label: "Agenda de Aulas",
        path: "/agenda",
        icon: CalendarDays,
        activeColor: "#D4A0A0", // Rosa empoeirado (Tertiary)
        activeTextColor: "#8E5656",
      },
      {
        label: "Suporte",
        path: "/support",
        icon: Headphones,
        activeColor: "#cbd5e1", // Slate — neutro, destaca sem competir com os itens de produto
        activeTextColor: "#475569",
      },
    ],
  },
];

// Rotas "root" (nessas o header não mostra botão Voltar)
const rootPaths = new Set([
  "/dashboard",
  "/platform-tour",
  "/integrations",
  "/notifications",
  "/profile",
  "/community",
  "/agenda",
  "/support",
]);

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const showBack = !rootPaths.has(pathname);

  const handleNavigate = (path: string) => router.push(path);

  return (
    <div className="flex h-screen w-screen bg-[#F5F0EB]">
      <BloomAppSidebar
        logo={
          <span className="text-[20px] font-semibold text-[#F15A5A] tracking-[-0.01em]">
            Vend.A.I.
          </span>
        }
        sections={sections}
        currentPath={pathname}
        onNavigate={handleNavigate}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <BloomAppHeader
          user={{ name: "Ana Silva", plan: "GRATUITO" }}
          notificationCount={4}
          showBack={showBack}
          onBack={() => router.back()}
          onProClick={() => handleNavigate("/upgrade")}
          onNotificationsClick={() => handleNavigate("/notifications")}
          onAvatarClick={() => handleNavigate("/profile")}
        />

        <main className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
