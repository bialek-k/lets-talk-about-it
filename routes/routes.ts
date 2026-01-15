import {
  EventsRoutesDocument,
  WorkshopsRoutesDocument,
} from '@/graphql/generated';
import { request } from '@/lib/request';

export type NavLink = {
  path: string;
  name: string;
  location?: string;
  date?: string;
  title?: string;
};

export type NavGroup = {
  name: string;
  content: NavLink[];
};

export type NavSection =
  | NavLink
  | {
      name: string;
      content: (NavLink | NavGroup)[];
    };

export const fetchEvents = async ({ locale = 'pl' }: { locale: string }) => {
  const { events } = await request(EventsRoutesDocument, { locale });
  const { workshops } = await request(WorkshopsRoutesDocument, { locale });

  return [
    {
      path: '/#about',
      name: 'about',
    },
    {
      name: 'mainEvents',
      content: [
        {
          name: 'events',
          content: events.map((event) => ({
            path: `/events/${event.slug}`,
            name: `event ${event.edition}`,
            location: event.location,
            date: event.date,
            title: event.title,
          })),
        },
        {
          name: 'workshops',
          content: workshops.map((workshop) => ({
            path: `/workshops/${workshop.slug}`,
            name: `${workshop.title}`,
            location: workshop.location,
            date: workshop.date,
            title: workshop.title,
          })),
        },
      ],
    },
    {
      name: 'multimedia',
      content: [
        {
          path: '/films',
          name: 'films',
        },
        {
          path: '/podcasts',
          name: 'podcasts',
        },
      ],
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
