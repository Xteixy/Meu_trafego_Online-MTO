import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/hooks/use-auth"
import { ChatSupport } from "@/components/chat-support"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    default: "MTO - Meu Tráfego Online | Produtos Eletrônicos & Serviços Digitais Premium",
    template: "%s | MTO - Meu Tráfego Online",
  },
  description:
    "Produtos eletrônicos de alta performance e serviços digitais que multiplicam resultados. Tráfego, SEO, desenvolvimento full stack, e-commerce e automação empresarial.",
  keywords: [
    "produtos eletrônicos",
    "tráfego online",
    "SEO",
    "desenvolvimento web",
    "e-commerce",
    "automação empresarial",
    "marketing digital",
  ],
  authors: [{ name: "MTO - Meu Tráfego Online" }],
  creator: "MTO - Meu Tráfego Online",
  publisher: "MTO - Meu Tráfego Online",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mto.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MTO - Meu Tráfego Online | Produtos Eletrônicos & Serviços Digitais Premium",
    description: "Produtos eletrônicos de alta performance e serviços digitais que multiplicam resultados.",
    url: "https://mto.com.br",
    siteName: "MTO - Meu Tráfego Online",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MTO - Meu Tráfego Online",
    description: "Produtos eletrônicos de alta performance e serviços digitais que multiplicam resultados.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider>
          <AuthProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
        <ChatSupport />
        <Toaster />
      </body>
    </html>
  )
}
