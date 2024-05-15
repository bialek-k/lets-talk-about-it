import { EventsRoutesDocument } from '@/graphql/generated';
import { request } from '@/lib/request';

export const fetchEvents = async () => {
  // const results = await request(EventRoutesDocument);

  const { events } = await request(EventsRoutesDocument);
  console.log(events);

  return [
    {
      path: '/#about',
      name: 'about',
    },
    {
      name: 'events',
      content: events.map((event) => ({
        path: `/events/${event.slug}`,
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
      path: '#contact',
      name: 'contact',
    },
  ];
};
