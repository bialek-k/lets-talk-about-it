import type { MetadataRoute } from 'next';
import {
  EventsRoutesDocument,
  WorkshopsRoutesDocument,
} from '@/graphql/generated';
import { request } from '@/lib/request';
import {
  getLanguageAlternates,
  getLocalizedUrl,
  SEO_LOCALES,
  type SeoLocale,
} from '@/lib/seo';

type LocalizedRecords = {
  locale: SeoLocale;
  records: { id: string; slug?: string | null }[];
};

const getContentRoutes = (
  section: 'events' | 'workshops',
  localizedRecords: LocalizedRecords[]
): MetadataRoute.Sitemap => {
  const translations = new Map<string, Partial<Record<SeoLocale, string>>>();

  localizedRecords.forEach(({ locale, records }) => {
    records.forEach(({ id, slug }) => {
      if (!slug?.trim()) return;

      const languages = translations.get(id) ?? {};
      languages[locale] = getLocalizedUrl(`/${section}/${slug}`, locale);
      translations.set(id, languages);
    });
  });

  return Array.from(translations.values()).flatMap((languages) =>
    SEO_LOCALES.flatMap((locale) => {
      const url = languages[locale];
      return url
        ? [{ url, changeFrequency: 'weekly' as const, alternates: { languages } }]
        : [];
    })
  );
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const localizedContent = await Promise.all(
    SEO_LOCALES.map(async (locale) => {
      const [{ events }, { workshops }] = await Promise.all([
        request(EventsRoutesDocument, { locale }),
        request(WorkshopsRoutesDocument, { locale }),
      ]);

      return { locale, events, workshops };
    })
  );

  const staticRoutes: MetadataRoute.Sitemap = [
    '/',
    '/films',
    '/podcasts',
    '/partners',
  ].flatMap((path) =>
    SEO_LOCALES.map((locale) => ({
      url: getLocalizedUrl(path, locale),
      changeFrequency: path === '/' ? ('yearly' as const) : ('weekly' as const),
      alternates: { languages: getLanguageAlternates(path) },
    }))
  );

  return [
    ...staticRoutes,
    ...getContentRoutes(
      'events',
      localizedContent.map(({ locale, events }) => ({ locale, records: events }))
    ),
    ...getContentRoutes(
      'workshops',
      localizedContent.map(({ locale, workshops }) => ({
        locale,
        records: workshops,
      }))
    ),
  ];
};

export default sitemap;
