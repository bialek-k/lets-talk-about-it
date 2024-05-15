require('dotenv').config({ path: '.env.local' });

import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema:
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clw5ez35a035f07uosp2vtc7s/master',
  documents: './**/*.graphql',
  generates: {
    'graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
  },
};
export default config;
