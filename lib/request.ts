import { request as graphqlRequest, Variables } from 'graphql-request';
import { RequestDocument } from 'graphql-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
export function request<TDocument = any>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables
) {
  return graphqlRequest<TDocument, Variables>(
    'https://graphql.datocms.com/',
    document,
    variables,
    {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
    }
  );
}
