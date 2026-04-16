// AppLayoutV2 — layout real do app logado no Bloom.
// Compoe BloomAppSidebar + BloomAppHeader + main area com Framer page transition.
//
// Usado via nested routes (React Router v6): as rotas filhas renderizam dentro
// do <Outlet />. Rotas de auth (Login/Signup) nao devem ser filhas desse layout.

import { Outlet, useLocation, useNavigate } from "react-router-dom";
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
  BloomAppSidebarSection,
  BloomAppSidebarItem,
} from "@/design-system/components/bloom/BloomAppSidebar";
import { BloomAppHeader } from "@/design-system/components/bloom/BloomAppHeader";
import { appPath } from "@/design-system/app-pages/_routing";

const V2_PREFIX = "/v2/app";

const sections: BloomAppSidebarSection[] = [
  {
    title: "INICIO",
    items: [
      { label: "Conhecendo a Plataforma", path: "/platform-tour", icon: Compass },
    ],
  },
  {
    title: "JORNADA",
    items: [
      {
        label: "Missoes",
        path: "/dashboard",
        icon: Map,
        subItems: [
          { label: "Missao 1 — Sua Loja no Ar em 7 Dias", path: "/mission/1" },
          { label: "Missao 2 — Seu Plano de Acao", path: "/mission/2" },
          { label: "Missao 3 — Ferramentas Prontas", path: "/mission/3" },
          { label: "Missao 4 — Vendedora Profissional", path: "/mission/4" },
        ],
      },
    ],
  },
  {
    title: "MINHA LOJA",
    items: [
      {
        label: "Minhas Integracoes",
        path: "/integrations",
        icon: LinkIcon,
        badge: { text: "3 ativas", variant: "success" },
      },
      {
        label: "Notificacoes",
        path: "/notifications",
        icon: Bell,
        badge: { text: "4", variant: "brand" },
      },
    ],
  },
  {
    title: "CONTA",
    items: [
      { label: "Meu Perfil", path: "/profile", icon: User },
      { label: "Comunidade", path: "/community", icon: MessageCircle },
      { label: "Agenda de Aulas", path: "/agenda", icon: CalendarDays },
    ],
  },
];

const footerItem: BloomAppSidebarItem = {
  label: "Suporte",
  path: "/support",
  icon: Headphones,
};

// Paginas "root" onde NAO aparece o botao Voltar no header.
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

/**
 * Remove o prefixo V2 da rota atual pra casar com os paths canonicos da sidebar.
 * Apos o flip (Fase 4) o prefixo some e esta funcao vira no-op.
 */
function canonicalPath(pathname: string): string {
  if (pathname.startsWith(V2_PREFIX)) {
    const rest = pathname.slice(V2_PREFIX.length);
    return rest || "/";
  }
  return pathname;
}

export default function AppLayoutV2() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = canonicalPath(location.pathname);
  const showBack = !rootPaths.has(currentPath);

  const handleNavigate = (path: string) => navigate(appPath(path));

  return (
    <div className="bloom flex h-screen w-screen bg-[#F5F0EB]">
      <BloomAppSidebar
        logo={
          <span className="text-[20px] font-semibold text-[#F15A5A] tracking-[-0.01em]">
            Vend.A.I.
          </span>
        }
        sections={sections}
        footerItem={footerItem}
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <BloomAppHeader
          user={{ name: "Ana Silva", plan: "GRATUITO" }}
          notificationCount={4}
          showBack={showBack}
          onBack={() => navigate(-1)}
          onProClick={() => handleNavigate("/upgrade")}
          onNotificationsClick={() => handleNavigate("/notifications")}
          onAvatarClick={() => handleNavigate("/profile")}
        />

        <main className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
