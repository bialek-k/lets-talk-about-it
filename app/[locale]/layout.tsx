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
  description: "Landing page for Let's Talk About IT project",
};

const ibm = IBM_Plex_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const { doc } = await request(DocsQueryDocument, { locale });

  return (
    <html lang={locale} dir={dir(locale)} className={ibm.className}>
      <body className={`${ibm} overflow-x-hidden flex flex-col items-center`}>
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <Header isMain />
          {children}
          <Footer doc={doc} />
        </TranslationsProvider>
      </body>
    </html>
  );
}
