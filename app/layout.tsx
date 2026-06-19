import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/lib/cart-context'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WorkFuel — Premium Office Snack Delivery in Johannesburg',
  description:
    'WorkFuel delivers premium snack and beverage boxes to offices across Johannesburg. Keep your team energized, motivated, and productive every single day.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#103d2f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} bg-background`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <CartProvider>
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
