import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "J2 Group | Soluções em Embalagens & Fitas Adesivas Industriais",
  description: "Fitas adesivas com metragem real garantida e caixas de papelão reforçadas. Atacado e varejo direto da fábrica com pronta entrega. J2 Group.",
  icons: {
    icon: "/images/logo_j2_group.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-black text-zinc-100 selection:bg-amber-400 selection:text-black"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
