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
  title: "Let's Talk About IT",
  description: "Witaj na Let's talk about IT",
  keywords: [
    'letstalkaboutit',
    "let's talk about it",
    "let's talk about it blog",
    "let's talk about it artykuły",
    'IT',
    'programowanie',
    'technologia',
    'blog',
    'artykuły',
    'porady',
    'wiedza',
    'informatyka',
    'nauka',
    'rozwój',
    'kariera',
    'praca',
    'studia',
    'szkolenia',
    'konferencje',
    'webinar',
    'wydarzenia',
    'społeczność',
    'forum',
    'dyskusje',
  ],
  robots: 'index, follow',
  authors: [
    { name: 'Vincent Slominski', url: 'https://github.com/Okazaki92' },
    { name: 'Krzysztof Białek', url: 'https://github.com/bialek-k' },
  ],
  openGraph: {
    type: 'website',
    url: 'https://letstalkaboutit.pl',
    title: "Let's Talk About IT",
    description: "Witaj na Let's talk about IT",
    siteName: "Let's Talk About IT",
    locale: 'pl_PL',
    images: [
      {
        url: 'https://www.letstalkaboutit.pl/meta-image.png',
        width: 1200,
        height: 630,
        alt: "Let's Talk About IT",
      },
    ],
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
