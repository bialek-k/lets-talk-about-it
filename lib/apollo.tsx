import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
 uri: "https://graphql.datocms.com/",
 cache: new InMemoryCache(),
 headers: {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "Bearer " + process.env.DATOCMS_API_TOKEN,
 },
});
