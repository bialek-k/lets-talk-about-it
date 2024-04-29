import { graphqlClient } from '@/lib/graphqlClient';

const aboutQuery = `
query MyQuery {
  about {
    id
    title
    description {
      value
    }
    malgosiaDescription {
      value
    }
  }
}`;

const page = async () => {
  const results = await graphqlClient.request(aboutQuery);

  return (
    <section>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </section>
  );
};

export default page;
