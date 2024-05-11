import { EventRoutesDocument } from '@/graphql/generated';
import { request } from '@/lib/request';

export const fetchEvents = async () => {
  const results = await request(EventRoutesDocument);

  return [
    {
      path: '/#about',
      name: 'about',
    },
    {
      name: 'events',
      content: results.allEvents.map((event) => ({
        path: `/events/${event.edition}`,
        name: `event ${event.edition}`,
      })),
    },
    {
      path: '/podcasts',
      name: 'podcasts',
    },
    {
      path: '/partners',
      name: 'partners',
    },
    {
      path: '/contact',
      name: 'contact',
    },
  ];
};
