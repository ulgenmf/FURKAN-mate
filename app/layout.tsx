import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Roboto } from 'next/font/google'

import '@/styles/globals.css'
import { cn } from '@/lib/utils'
// import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/sonner'
import { Header } from '@/components/header'
import Link from 'next/link'
import { fetchAndStoreModels } from './actions'

export const metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    default: '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    template: `%s - Next.js AI Chatbot`
  },
  description: 'An AI-powered chatbot template built with Next.js and Vercel.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

const jakarta = Plus_Jakarta_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable,
          roboto.className
        )}
      >
        <Toaster position="top-center" />
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
          </div> */}
          <div className="flex flex-col min-h-screen">
            {/* <Header /> */}
            <main className="flex flex-col flex-1   bg-background">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
