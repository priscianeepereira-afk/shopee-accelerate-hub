/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Silencia o warning sobre múltiplos lockfiles (o projeto raiz usa Vite)
  outputFileTracingRoot: new URL(".", import.meta.url).pathname,
};

export default nextConfig;
