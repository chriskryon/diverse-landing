import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Montserrat } from 'next/font/google';
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })


const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'], // Especificar os pesos que você usará
  variable: '--font-montserrat', // Adicionar como variável CSS
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://diverse-landing.vercel.app"

export const metadata: Metadata = {
  title: "Diverse LTDA",
  description: "Diversidade é o nosso ativo, seu crescimento é nosso objetivo.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Diverse LTDA",
    description: "Diversidade é o nosso ativo, seu crescimento é nosso objetivo.",
    url: siteUrl,
    siteName: "Diverse LTDA",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: 'Logo da Diverse LTDA',
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diverse LTDA",
    description: "Diversidade é o nosso ativo, seu crescimento é nosso objetivo.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}