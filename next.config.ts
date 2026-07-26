import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Esta landing não possui rotas ou dados dinâmicos: gere HTML estático
  // para que a Vercel publique uma raiz / real, sem exigir o worker do Vinext.
  output: "export",
};

export default nextConfig;
