import type { MetadataRoute } from 'next';
import {
  EventsRoutesDocument,
  WorkshopsRoutesDocument,
} from '@/graphql/generated';
import { request } from '@/lib/request';

const sitemap = async ({
  locale = 'pl',
}: {
  locale: string;
}): Promise<MetadataRoute.Sitemap> => {
  const { events } = await request(EventsRoutesDocument);
  const { workshops } = await request(WorkshopsRoutesDocument, { locale });

  const eventsRoutes = events.filter(Boolean).map((event) => ({
    url: `https://www.letstalkaboutit.pl/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    alternates: {
      languages: {
        en: `https://.../en/events/${event.slug}`,
        pl: `https://.../events/${event.slug}`,
      },
    },
  }));

  const workshopsRoutes = workshops.map((workshop) => ({
    url: `https://www.letstalkaboutit.pl/workshops/${workshop.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    alternates: {
      languages: {
        en: `https://.../en/workshops/${workshop.slug}`,
        pl: `https://.../workshops/${workshop.slug}`,
      },
    },
  }));
  return [
    {
      url: 'https://www.letstalkaboutit.pl',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      alternates: {
        languages: {
          en: 'https://www.letstalkaboutit.pl/en',
        },
      },
    },
    {
      url: 'https://www.letstalkaboutit.pl/films',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
    },
    {
      url: 'https://www.letstalkaboutit.pl/podcasts',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
    },
    {
      url: 'https://www.letstalkaboutit.pl/partners',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
    },
    ...eventsRoutes,
    ...workshopsRoutes,
  ];
};

export default sitemap;
