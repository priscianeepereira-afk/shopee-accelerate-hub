import { Routes, Route, Navigate } from 'react-router-dom';
import { ShowcaseSidebar } from './components/ShowcaseSidebar';
import AppLayoutV2 from './layouts/AppLayoutV2';
import './bloom-tokens.css';

import LoginV2 from './app-pages/Login';
import SignupV2 from './app-pages/Signup';
import PlatformTourV2 from './app-pages/PlatformTour';

import OverviewPage from './pages/OverviewPage';
import ColorsPage from './pages/ColorsPage';
import TypographyPage from './pages/TypographyPage';
import ButtonsPage from './pages/ButtonsPage';
import CardsPage from './pages/CardsPage';
import NavigationPage from './pages/NavigationPage';
import DashboardPage from './pages/DashboardPage';
import FormsPage from './pages/FormsPage';
import LayoutPage from './pages/LayoutPage';
import MediaPage from './pages/MediaPage';
import FeedbackPage from './pages/FeedbackPage';
import ComunidadePage from './pages/ComunidadePage';
import AgendaPage from './pages/AgendaPage';

/**
 * Showcase do Bloom Design System (rota /v2/*).
 * Mantém o comportamento original: sidebar showcase + páginas de referência.
 */
export default function BloomDesignSystem() {
  return (
    <div className="bloom flex h-screen bg-[#F5F0EB]">
      <ShowcaseSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-[1100px] mx-auto px-8 py-10">
          <Routes>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<OverviewPage />} />
            <Route path="colors" element={<ColorsPage />} />
            <Route path="typography" element={<TypographyPage />} />
            <Route path="buttons" element={<ButtonsPage />} />
            <Route path="cards" element={<CardsPage />} />
            <Route path="navigation" element={<NavigationPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="forms" element={<FormsPage />} />
            <Route path="layout" element={<LayoutPage />} />
            <Route path="media" element={<MediaPage />} />
            <Route path="feedback" element={<FeedbackPage />} />
            <Route path="comunidade" element={<ComunidadePage />} />
            <Route path="agenda" element={<AgendaPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

/**
 * App V2 (rota /v2/app/*) — hospeda as páginas reais migradas para Bloom.
 *
 * Estrutura de rotas (nested):
 *   - Rotas de AUTH (login, criar-conta) ficam FORA do AppLayoutV2 — fullscreen.
 *   - Rotas do APP ficam DENTRO do AppLayoutV2 — com sidebar + header Bloom.
 *
 * No flip (Fase 4): esta estrutura é transplantada pro App.tsx raiz.
 */
export function AppV2() {
  return (
    <div className="bloom">
      <Routes>
        {/* Rotas de autenticacao (sem layout) */}
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<LoginV2 />} />
        <Route path="criar-conta" element={<SignupV2 />} />

        {/* Rotas do app logado (com sidebar + header) */}
        <Route element={<AppLayoutV2 />}>
          <Route path="platform-tour" element={<PlatformTourV2 />} />
          {/* Próximas páginas V2 registradas aqui conforme migração avança */}
        </Route>
      </Routes>
    </div>
  );
}
