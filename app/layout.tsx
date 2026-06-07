import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Lid & Ladle | Botanical Infusion Mixes',
    template: '%s | Lid & Ladle',
  },
  description:
    'Handcrafted botanical infusion mixes from South Africa. Add beauty and flavour to any drink — water, wine, gin, tea, and more.',
  keywords: [
    'botanical infusion',
    'infusion mix',
    'South Africa',
    'Lid and Ladle',
    'drink infusion',
    'herbal infusion',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://lidandladle.co.za',
    siteName: 'Lid & Ladle',
  },
  icons: {
    icon: '/images/Lid_Ladle_Favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-brand-text bg-brand-bg">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
