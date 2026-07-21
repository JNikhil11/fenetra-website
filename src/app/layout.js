import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Fenetra Industries — Premium Polymer & Plastic Raw Material Supplier',
    template: '%s | Fenetra Industries',
  },
  description: 'Fenetra Industries is a leading manufacturer and trader of virgin and reprocessed plastic polymer granules — PP, ABS, PC, PPCP, RP-PPCP, PP-B120MA. Serving automotive, packaging, and consumer goods industries across India. Reliance Authorized Distributor.',
  keywords: ['polymer granules', 'plastic raw material', 'PP granules', 'ABS granules', 'PPCP', 'reprocessed plastic', 'polymer supplier India', 'Fenetra Industries', 'Sriperumbudur', 'Reliance distributor'],
  authors: [{ name: 'Fenetra Industries' }],
  openGraph: {
    title: 'Fenetra Industries — Premium Polymer & Plastic Raw Material Supplier',
    description: 'Leading manufacturer and trader of virgin and reprocessed plastic polymer granules across India.',
    url: 'https://fenetraindustries.com',
    siteName: 'Fenetra Industries',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
