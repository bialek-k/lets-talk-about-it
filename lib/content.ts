import { cache } from 'react';
import {
  EditionQueryDocument,
  WorkshopsQueryDocument,
} from '@/graphql/generated';
import { request } from '@/lib/request';
import type { SeoLocale } from '@/lib/seo';

// Share CMS reads between generateMetadata and the page during one render.
export const getEvent = cache((locale: SeoLocale, edition: string) =>
  request(EditionQueryDocument, { locale, edition })
);

export const getWorkshop = cache((locale: SeoLocale, slug: string) =>
  request(WorkshopsQueryDocument, { locale, slug })
);

export function formatContentDate(date: unknown, locale: SeoLocale): string {
  if (typeof date !== 'string' && typeof date !== 'number') return '';

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return '';

  return new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : 'pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Warsaw',
  }).format(parsedDate);
}
