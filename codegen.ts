import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: [
		{
			"https://graphql.datocms.com": {
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
				},
			},
		},
	],
	documents: ["src/**/*.{ts,tsx,js}"],
	ignoreNoDocuments: true,
	generates: {
		"./gql/": {
			preset: "client",
			plugins: [],
		},
	},
};

export default config;