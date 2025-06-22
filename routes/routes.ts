import {
  EventsRoutesDocument,
  WorkshopsRoutesDocument,
} from '@/graphql/generated';
import { request } from '@/lib/request';
import path from 'path';

export const fetchEvents = async ({ locale = 'pl' }: { locale: string }) => {
  // const results = await request(EventRoutesDocument);

  const { events } = await request(EventsRoutesDocument);
  const { workshops } = await request(WorkshopsRoutesDocument, { locale });

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
      name: 'workshops',
      content: workshops.map((workshop) => ({
        path: `/workshops/${workshop.slug}`,
        name: `${workshop.title}`,
      })),
    },
    {
      path: '/films',
      name: 'films',
    },
    // {
    //   path: '/podcasts',
    //   name: 'podcasts',
    // },
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
