import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient("https://graphql.datocms.com/", {
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
	},
});