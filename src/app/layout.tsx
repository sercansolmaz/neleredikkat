import type { Metadata } from 'next';
import type { Viewport } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://neleredikkat.com'),
  title: {
    default: 'NelerDikkat.com - Karar Vermeden Önce Kontrol Et',
    template: '%s | NelerDikkat.com'
  },
  description: 'Bir ürün alırken, hizmet seçerken veya önemli bir karar verirken nelere dikkat etmen gerektiğini kısa rehberler ve uygulanabilir kontrol listeleriyle öğren.',
  keywords: ['nelere dikkat edilmeli', 'kontrol listesi', 'alışveriş rehberi', 'laptop alırken', 'ikinci el araba', 'klima alırken', 'ev kiralarken'],
  authors: [{ name: 'NelerDikkat Editorial' }],
  creator: 'NelerDikkat',
  publisher: 'NelerDikkat.com',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://neleredikkat.com',
    siteName: 'NelerDikkat.com',
    title: 'NelerDikkat.com - Karar Vermeden Önce Kontrol Et',
    description: 'Tüketici kararları için kısa rehberler, uygulanabilir interaktif kontrol listeleri ve kırmızı bayraklar.'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="font-sans bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* Simple Analytics — privacy-first analytics */}
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
            style={{ position: 'absolute', left: '-9999px' }}
          />
        </noscript>
      </body>
    </html>
  );
}
