import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const display = DM_Serif_Display({ variable: "--font-display", subsets: ["latin"], weight: "400" });
const body = Manrope({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Encontro de Empresários | 21 de agosto em Alphaville",
  description: "Um encontro presencial para empresários, sócios e gestores que buscam estratégia prática, conexões qualificadas e decisões mais maduras. 21 de agosto, em Alphaville/SP.",
  icons: { icon: "/brand/logo-encontro-empresarios.png" },
  openGraph: { title: "Encontro de Empresários", description: "Estratégia prática, conexões empresariais e conversas presenciais em Alphaville.", type: "website" },
  twitter: { card: "summary_large_image", title: "Encontro de Empresários" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>; }
