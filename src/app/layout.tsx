import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}