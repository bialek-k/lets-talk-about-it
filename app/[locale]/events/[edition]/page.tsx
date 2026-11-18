import initTranslations from '@/app/i18n';
import Edition from '@/components/Edition/Edition';
import TranslationsProvider from '@/components/TranslationsProvider/TranslationProvider';
import { formatContentDate, getEvent } from '@/lib/content';
import { createPageMetadata, getSeoLocale } from '@/lib/seo';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type EventPageProps = {
  params: { locale: string; edition: string };
};

export async function generateMetadata({
  params: { locale, edition },
}: EventPageProps): Promise<Metadata> {
  const seoLocale = getSeoLocale(locale);
  const { event } = await getEvent(seoLocale, edition);
  if (!event) notFound();

  const eventTitle = event.title
    .map((line) => line.trim())
    .filter(Boolean)
    .join(' ');
  const editionLabel =
    event.edition != null
      ? `${seoLocale === 'pl' ? 'Edycja' : 'Edition'} ${event.edition}`
      : seoLocale === 'pl'
        ? 'Wydarzenie'
        : 'Event';
  const details = [event.location, formatContentDate(event.date, seoLocale)]
    .filter(Boolean)
    .join(' · ');
  const description = [
    `${editionLabel} LET’S TALK ABOUT IT${eventTitle ? `: ${eventTitle}` : ''}.`,
    details ? `${details}.` : '',
    seoLocale === 'pl'
      ? 'Temat spotkania i prelegenci społeczności IT.'
      : 'Explore the topic and speakers at this IT community event.',
  ]
    .filter(Boolean)
    .join(' ');

  return createPageMetadata({
    locale: seoLocale,
    path: `/events/${event.slug || edition}`,
    title: [eventTitle, editionLabel, 'LET’S TALK ABOUT IT']
      .filter(Boolean)
      .join(' | '),
    description,
  });
}

const EventPage = async ({ params: { locale, edition } }: EventPageProps) => {
  const i18nNamespaces = ['edition'];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Edition locale={getSeoLocale(locale)} edition={edition} translation={t} />
    </TranslationsProvider>
  );
};

export default EventPage;
