// Signup V2 — mesmo fundo gradiente warm→cool do Login, usando BloomInput
// (referência "Input" na FormsPage do design system).
// Campos: Email, Nome Completo, Senha (4–6 caracteres, qualquer), Confirmar Senha.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BloomInput } from "@/design-system/components/bloom/BloomInput";
import { BloomButton } from "@/design-system/components/bloom/BloomButton";
import { appPath } from "./_routing";

type Errors = {
  email?: string;
  fullName?: string;
  password?: string;
  confirmPassword?: string;
};

export default function SignupV2() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): Errors => {
    const next: Errors = {};
    if (!email.trim()) next.email = "Informe seu e-mail";
    if (!fullName.trim()) next.fullName = "Informe seu nome completo";
    if (password.length < 4 || password.length > 6) {
      next.password = "A senha deve ter entre 4 e 6 caracteres";
    }
    if (confirmPassword !== password) {
      next.confirmPassword = "As senhas não coincidem";
    }
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      navigate(appPath("/integrations"));
    }
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
        noValidate
      >
        <div className="text-center space-y-2">
          <h3 className="text-[26px] md:text-[32px] font-normal text-black/85 tracking-[-0.015em]">
            Criar conta
          </h3>
          <p className="text-[14px] md:text-[15px] font-normal text-black/40">
            É rápido, leva menos de um minuto
          </p>
        </div>

        <BloomInput
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="voce@exemplo.com"
          autoComplete="email"
          error={errors.email}
          className="!h-12 !text-[15px] !px-4"
        />

        <BloomInput
          label="Nome completo"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Seu nome completo"
          autoComplete="name"
          error={errors.fullName}
          className="!h-12 !text-[15px] !px-4"
        />

        <BloomInput
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="******"
          autoComplete="new-password"
          minLength={4}
          maxLength={6}
          error={errors.password}
          className="!h-12 !text-[15px] !px-4"
        />

        <BloomInput
          label="Confirmar senha"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Repita a senha"
          autoComplete="new-password"
          minLength={4}
          maxLength={6}
          error={errors.confirmPassword}
          className="!h-12 !text-[15px] !px-4"
        />

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center rounded-full h-12 md:h-[52px] px-8 text-[15px] md:text-[16px] font-normal tracking-[-0.01em] transition-all duration-200 bg-[#fdba74]/40 text-black/70 hover:bg-[#fdba74]/55 border border-[#f97316]/30"
        >
          Criar conta
        </button>

        <BloomButton
          type="button"
          variant="ghost"
          size="lg"
          className="w-full"
          onClick={() => navigate(appPath("/login"))}
        >
          Já tenho conta
        </BloomButton>
      </motion.form>
    </div>
  );
}
