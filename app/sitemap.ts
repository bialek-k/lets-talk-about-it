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

  const eventsRoutes = events.map((event) => ({
    url: `https://www.letstalkaboutit.pl/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.5,
  }));

  const workshopsRoutes = workshops.map((workshop) => ({
    url: `https://www.letstalkaboutit.pl/workshops/${workshop.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.5,
  }));
  return [
    {
      url: 'https://www.letstalkaboutit.pl',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      alternates: {
        languages: {
          en: 'https://www.letstalkaboutit.pl/en',
        },
      },
      priority: 1,
    },
    {
      url: 'https://www.letstalkaboutit.pl/films',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://www.letstalkaboutit.pl/partners',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...eventsRoutes,
    ...workshopsRoutes,
  ];
};

export default sitemap;
