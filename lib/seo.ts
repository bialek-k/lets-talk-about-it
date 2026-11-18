import type { Metadata } from 'next';

export const SITE_URL = 'https://www.letstalkaboutit.pl';
export const SEO_LOCALES = ['pl', 'en'] as const;
export type SeoLocale = (typeof SEO_LOCALES)[number];

const pageContent = {
  pl: {
    home: {
      title: 'LET’S TALK ABOUT IT - Wydarzenia | Networking | Power skills',
      description:
        'LET’S TALK ABOUT IT - Największa społeczność IT w Polsce. Dołącz do naszych ogólnopolskich konferencji na żywo, poznaj ekspertów, rozwijaj swoje umiejętności i buduj relacje w branży IT.',
    },
    films: {
      title: 'LET’S TALK ABOUT IT - Filmy z konferencji',
      description:
        'Obejrzyj nagrania z konferencji LET’S TALK ABOUT IT. Poznaj wystąpienia i rozmowy o branży IT, networkingu i power skills.',
    },
    podcasts: {
      title: 'LET’S TALK ABOUT IT - Podcasty',
      description:
        'Posłuchaj podcastów z udziałem LET’S TALK ABOUT IT. Rozmowy o społeczności IT, rozwoju zawodowym, relacjach i power skills.',
    },
    partners: {
      title: 'LET’S TALK ABOUT IT - Partnerzy',
      description:
        'Poznaj partnerów i sponsorów LET’S TALK ABOUT IT, którzy wspierają nasze wydarzenia i rozwój społeczności IT.',
    },
  },
  en: {
    home: {
      title: 'LET’S TALK ABOUT IT - Events | Networking | Power skills',
      description:
        'LET’S TALK ABOUT IT - The largest IT community in Poland. Join our in-person conferences across Poland, meet experts, develop your skills and build relationships in IT.',
    },
    films: {
      title: 'LET’S TALK ABOUT IT - Conference videos',
      description:
        'Watch recordings from LET’S TALK ABOUT IT conferences. Explore talks and conversations about IT, networking and power skills.',
    },
    podcasts: {
      title: 'LET’S TALK ABOUT IT - Podcasts',
      description:
        'Listen to podcasts featuring LET’S TALK ABOUT IT. Conversations about the IT community, career development, relationships and power skills.',
    },
    partners: {
      title: 'LET’S TALK ABOUT IT - Partners',
      description:
        'Meet the partners and sponsors of LET’S TALK ABOUT IT who support our events and the growth of the IT community.',
    },
  },
};

export function getSeoLocale(locale: string): SeoLocale {
  return locale === 'en' ? 'en' : 'pl';
}

export function getLocalizedUrl(path: string, locale: SeoLocale): string {
  const pathname = path === '/' ? '' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return `${SITE_URL}${locale === 'en' ? '/en' : ''}${pathname}`;
}

export function getLanguageAlternates(path: string): Record<SeoLocale, string> {
  return {
    pl: getLocalizedUrl(path, 'pl'),
    en: getLocalizedUrl(path, 'en'),
  };
}

function createMetadata(
  locale: SeoLocale,
  title: string,
  description: string
): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      type: 'website',
      siteName: "Let's Talk About IT",
      title,
      description,
      locale: locale === 'en' ? 'en_GB' : 'pl_PL',
      images: [
        {
          url: `${SITE_URL}/meta-image.png`,
          width: 300,
          height: 300,
          alt: "Let's Talk About IT",
        },
      ],
    },
  };
}

// Root defaults deliberately omit page URLs, so children cannot inherit
// the homepage as their canonical URL.
export function getDefaultMetadata(locale: SeoLocale): Metadata {
  const { title, description } = pageContent[locale].home;
  return createMetadata(locale, title, description);
}

export function createPageMetadata({
  locale,
  path,
  title,
  description,
  languages,
}: {
  locale: SeoLocale;
  path: string;
  title: string;
  description: string;
  languages?: Partial<Record<SeoLocale, string>>;
}): Metadata {
  const metadata = createMetadata(locale, title, description);
  const url = getLocalizedUrl(path, locale);

  return {
    ...metadata,
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: { ...metadata.openGraph, url },
  };
}

export function getStaticPageMetadata(
  page: keyof (typeof pageContent)['pl'],
  locale: SeoLocale
): Metadata {
  const path = page === 'home' ? '/' : `/${page}`;
  return createPageMetadata({
    locale,
    path,
    ...pageContent[locale][page],
    languages: getLanguageAlternates(path),
  });
}
