require('dotenv').config({ path: '.env.local' });
const token = process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN;

import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      'https://graphql.datocms.com': {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    },
  ],
  documents: './graphql/**/*.graphql',
  generates: {
    'gql/': {
      preset: 'client',
      config: {
        documentMode: 'string',
      },
    },
  },
};
export default config;
