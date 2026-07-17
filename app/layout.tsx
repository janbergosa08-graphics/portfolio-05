import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://janbergosa.vercel.app'),
  title: 'Jan Bergosa — Product UI/UX Designer',
  description:
    'Product UI/UX designer for web apps and dashboards. I reduce user friction, clarify requirements, and help teams ship with cleaner handoff.',
  openGraph: {
    title: 'Jan Bergosa — Product UI/UX Designer',
    description:
      'Product UI/UX designer for web apps and dashboards. I reduce user friction, clarify requirements, and help teams ship with cleaner handoff.',
    url: 'https://janbergosa.vercel.app',
    siteName: 'Jan Bergosa',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jan Bergosa — Product UI/UX Designer portfolio hero',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jan Bergosa — Product UI/UX Designer',
    description:
      'Product UI/UX designer for web apps and dashboards. I reduce user friction, clarify requirements, and help teams ship with cleaner handoff.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="text-ink antialiased">
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}
