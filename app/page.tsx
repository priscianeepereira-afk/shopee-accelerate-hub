import { redirect } from "next/navigation";

export default function RootPage() {
  // Spec (Login.md): rota inicial = /login
  redirect("/login");
}
