import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Serif_JP, Geist_Mono } from 'next/font/google'
import './globals.css'

const notoSerifJP = Noto_Serif_JP({
  variable: '--font-noto-serif-jp',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portafolio — Desarrollador Backend',
  description:
    'Portafolio de desarrollador backend con enfoque en .NET, TypeScript y NestJS. Estética minimalista japonesa.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#f2efe6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`bg-background ${notoSerifJP.variable} ${geistMono.variable}`}
    >
      <body className="font-serif antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
