// Login V2 — alinhado ao spec funcional em V2/descricao de telas/Login.md.
// Usa exclusivamente componentes do Bloom Design System:
//   - BloomInput (label + campo)
//   - BloomButton (CTA "Entrar")
// Fora do AppLayout (sem sidebar). Submit sem validação → /integrations.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BloomInput } from "@/design-system/components/bloom/BloomInput";
import { BloomButton } from "@/design-system/components/bloom/BloomButton";
import { appPath } from "./_routing";

export default function LoginV2() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Spec: nenhuma validação, qualquer submit navega para /integrations
    navigate(appPath("/integrations"));
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-12"
      style={{
        background:
          "linear-gradient(135deg, rgba(245,201,160,0.32) 0%, rgba(250,224,196,0.22) 20%, rgba(221,214,238,0.26) 50%, rgba(242,196,204,0.22) 80%, rgba(254,242,242,0.18) 100%)",
      }}
    >
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="w-full max-w-[440px] space-y-6 md:space-y-7"
      >
        {/* Cabeçalho / Logo — conforme spec */}
        <div className="text-center space-y-2">
          <h1 className="text-[28px] md:text-[34px] font-normal text-black/85 tracking-[-0.02em]">
            Vend.A.I.
          </h1>
          <p className="text-[14px] md:text-[15px] font-normal text-black/40">
            Sua jornada de vendas começa aqui
          </p>
        </div>

        {/* Formulário de login */}
        <BloomInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          autoComplete="email"
          className="!h-12 !text-[15px] !px-4"
        />

        <BloomInput
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          autoComplete="current-password"
          className="!h-12 !text-[15px] !px-4"
        />

        {/* CTA único — spec define apenas "Entrar" */}
        <BloomButton
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
        >
          Entrar
        </BloomButton>
      </motion.form>
    </div>
  );
}
