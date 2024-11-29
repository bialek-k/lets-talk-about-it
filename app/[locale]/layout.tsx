import i18nConfig from '@/i18nConfig';
import './globals.css';
import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import { dir } from 'i18next';
import Header from '@/components/Header/Header';
import TranslationsProvider from '@/components/TranslationsProvider/TranslationProvider';
import initTranslations from '../i18n';
import Footer from '@/components/Footer/Footer';
const i18nNamespaces = ['home'];
import { IBM_Plex_Sans } from 'next/font/google';

import { request } from '@/lib/request';
import { DocsQueryDocument } from '@/graphql/generated';

export const metadata: Metadata = {
  title: `Let's Talk About IT`,
  description: "Witaj na Let's talk about IT",
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'GraphQL',
    'i18n',
    'SEO',
    'IBM Plex Sans',
    'Google Fonts',
    'Next Font',
  ],
  authors: [
    { name: 'Vincent Slominski', url: 'https://github.com/Okazaki92' },
    { name: 'Krzysztof Białek', url: 'https://github.com/bialek-k' },
  ],
  applicationName: "Let's Talk About IT",
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    description: "Witaj na Let's talk about IT",
    locale: 'pl_PL',
    url: 'https://letstalkaboutit.pl',
    siteName: "Let's Talk About IT",
    images: [
      {
        url: 'https://www.letstalkaboutit.pl/meta-image.png',
        width: 1200,
        height: 630,
        alt: "Let's Talk About IT",
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    creator: '@letstalkaboutit',
    title: `Let's Talk About IT`,
    description: "Witaj na Let's talk about IT",
    card: 'summary_large_image',
    images: ['https://www.letstalkaboutit.pl/meta-image.png'],
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
};

const ibm = IBM_Plex_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  preload: false,
});

export const generateStaticParams = () => {
  return i18nConfig.locales.map((locale) => ({ locale }));
};

const RootLayout = async ({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const { doc } = await request(DocsQueryDocument, { locale });

  return (
    <html lang={locale} dir={dir(locale)} className={ibm.className}>
      <body className={`overflow-x-hidden flex flex-col items-center`}>
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <Header isMain locale={locale} />
          {children}
          <Footer doc={doc} />
        </TranslationsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
