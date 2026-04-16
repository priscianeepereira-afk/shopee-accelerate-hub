# Login

**Rota:** `/` (tela inicial / login)

## Objetivo
Tela de autenticação da plataforma Vend.A.I. Permite que a vendedora entre na aplicação informando email e senha antes de acessar o restante do sistema.

## Conteúdo da tela

### Cabeçalho/Logo
- Título "Vend.A.I."
- Subtítulo/tagline: "Sua jornada de vendas começa aqui"

### Formulário de login
Campos do formulário:
- Campo "Email" — input do tipo `email`, placeholder "seu@email.com"
- Campo "Senha" — input do tipo `password`, placeholder "••••••••"

CTA:
- Botão de submit com o texto "Entrar"

## Dados e estado
- Sem dados mock. Nenhum usuário/credencial é validado.
- Não lê nem grava em localStorage.
- Não usa React Query, Recharts.
- Usa Framer Motion para animar a entrada do card (fade + scale).
- Estado local com `useState`: `email` (string) e `password` (string).
- Não há parâmetros de rota.

## Interações
- `onChange` do input Email atualiza o state `email`.
- `onChange` do input Senha atualiza o state `password`.
- `onSubmit` do formulário: `e.preventDefault()` e em seguida `navigate("/integrations")` — ou seja, qualquer submit (mesmo com campos vazios) redireciona para a rota `/integrations`.
- Não há validação de campos, não há chamada de API, não há mensagem de erro.
- Não há link de "esqueci minha senha", nem botão de cadastro, nem login social.

## Observações
- Login é puramente simulado: nenhuma credencial é verificada. Qualquer submit entra na plataforma.
- Não existe estado de loading nem estado de erro.
- A tela é renderizada fora do `AppLayout` (sem sidebar).
