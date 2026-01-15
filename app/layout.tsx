import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jay Parrack Website Publishing | Custom Websites for Local Businesses',
  description:
    'Custom-built, lightning-fast websites for small businesses. No templates, no monthly builders — just clean code you own. Serving local businesses with affordable, modern web design.',
  keywords: [
    'web design',
    'custom websites',
    'small business websites',
    'local business web design',
    'affordable web development',
    'SEO optimized websites',
  ],
  authors: [{ name: 'Jay Parrack' }],
  creator: 'Jay Parrack',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Jay Parrack Website Publishing',
    description:
      'Custom-built, lightning-fast websites for local businesses. No templates. No monthly fees. Just results.',
    siteName: 'Jay Parrack Website Publishing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jay Parrack Website Publishing',
    description:
      'Custom-built, lightning-fast websites for local businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
