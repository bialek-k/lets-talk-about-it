require('dotenv').config();

import { request as graphqlRequest, Variables } from 'graphql-request';
import { RequestDocument } from 'graphql-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';

const URI = process.env.NEXT_PUBLIC_HYGRAPH_URI as string;

type Locale = 'pl' | 'en';

export function request<TDocument = any>(
  document: RequestDocument | TypedDocumentNode<TDocument, { locale: Locale }>,
  variables?: { locale?: Locale }
) {
  const locale: Locale = variables?.locale ?? 'pl';

  return graphqlRequest<TDocument, { locale: Locale }>(URI, document, {
    locale,
  });
}
