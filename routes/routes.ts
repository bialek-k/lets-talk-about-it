import { graphqlClient } from '@/lib/graphqlClient';

interface Event {
  edition: string;
}

interface QueryResult {
  allEvents: Event[];
}

const eventsQuery = `
query MyQuery {
    allEvents {
    edition
  }
  
}`;

export const fetchEvents = async () => {
  const results = await graphqlClient.request<QueryResult>(eventsQuery);

  return [
    {
      path: '/about',
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
