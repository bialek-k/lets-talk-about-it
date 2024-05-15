require('dotenv').config();

import { request as graphqlRequest, Variables } from 'graphql-request';
import { RequestDocument } from 'graphql-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
export function request<TDocument = any>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables
) {
  return graphqlRequest<TDocument, Variables>(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clw5ez35a035f07uosp2vtc7s/master',
    document,
    variables
  );
}
