export type Route = {
  path?: string;
  name: string;
  content?: Route[];
};

export const routes: Route[] = [
  {
    path: '#about',
    name: 'about',
  },
  {
    name: 'events',
    content: [
      {
        path: '/event1',
        name: 'event1',
      },
      {
        path: '/event2',
        name: 'event2',
      },
      {
        path: '/event3',
        name: 'event3',
      },
      {
        path: '/event4',
        name: 'event4',
      },
      {
        path: '/event5',
        name: 'event5',
      },
    ],
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
