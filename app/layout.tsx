import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import ThemeSwitcher from '@/components/theme/ThemeSwitcher';
import './globals.css';

const themeBootstrapScript = `(() => {
  try {
    const stored = localStorage.getItem('portfolio-theme');
    const mode = stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'dark';
    const resolved = mode === 'system'
      ? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
      : mode;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.style.colorScheme = resolved;
  } catch {}
})();`;

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
    <html lang="en" className={geistMono.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=tasa-orbiter@400,500,600,700&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body className="text-ink antialiased">
        <ThemeProvider>
          <div className="site-shell">{children}</div>
          <ThemeSwitcher />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
