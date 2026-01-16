import { request as graphqlRequest, Variables } from 'graphql-request';
import { RequestDocument } from 'graphql-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';

const URI = process.env.NEXT_PUBLIC_HYGRAPH_URI as string;

type Locale = 'pl' | 'en';

export function request<TDocument = any>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables & { locale?: Locale }
) {
  // fallback na locale
  const mergedVariables = { ...variables, locale: variables?.locale ?? 'pl' };

  return graphqlRequest<TDocument, typeof mergedVariables>(
    URI,
    document,
    mergedVariables
  );
}
