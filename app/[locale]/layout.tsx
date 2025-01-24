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
  description:
    'Najlepsza społeczność i ogólnopolskie konferencje na żywo dla IT',
  keywords: [
    'letstalkaboutit',
    'lets talk about it',
    'lets talk it',
    "let's talk about it",
    'konferencje dla IT',
    'konferencje IT',
    'wydarzenia IT',
    'społeczność IT',
    'grupa IT',
    'relacje IT',
    'networking IT',
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
    description:
      'Najlepsza społeczność i ogólnopolskie konferencje na żywo dla IT',
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
  verification: {
    google: 'WC6CBGcV2Xyo5_E5rhAAr-PxT0kRm9PPvjh-jBdnW8E',
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
