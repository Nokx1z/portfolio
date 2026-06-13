import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Serif_JP, Geist_Mono, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { TechBackground } from '@/components/tech-background'
import { ThemeToggle } from '@/components/theme-toggle'
import { siteConfig } from '@/lib/data'
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

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Nokx1z',
  description:
    'Portafolio profesional de Enyell Duarte, desarrollador backend especializado en arquitectura de sistemas y optimización.',
}

export const viewport: Viewport = {
  themeColor: '#fafafa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`bg-background ${notoSerifJP.variable} ${geistMono.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-serif antialiased">
        <ThemeProvider>
          <TechBackground />
          {children}
          <ThemeToggle />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
