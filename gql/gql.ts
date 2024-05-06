/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query About($locale: SiteLocale) {\n  about(locale: $locale) {\n    description {\n      value\n    }\n    malgosiaDescription {\n      value\n    }\n    malgosiaImage {\n      responsiveImage(imgixParams: {fit: crop, w: 300, h: 300, auto: format, q: 75}) {\n        alt\n        base64\n        bgColor\n        title\n        aspectRatio\n        height\n        sizes\n        src\n        srcSet\n        webpSrcSet\n        width\n      }\n    }\n  }\n}": types.AboutDocument,
    "query Editions($locale: SiteLocale, $edition: String) {\n  event(locale: $locale, filter: {edition: {eq: $edition}}) {\n    id\n    title\n    edition\n    new\n    date\n    sign\n    location\n    lead {\n      name\n      role\n      image {\n        responsiveImage(imgixParams: {fit: crop, w: 300, h: 300, auto: format, q: 75}) {\n          alt\n          base64\n          bgColor\n          title\n          aspectRatio\n          height\n          sizes\n          src\n          srcSet\n          webpSrcSet\n          width\n        }\n      }\n    }\n    speakers {\n      name\n      role\n      image {\n        responsiveImage(imgixParams: {fit: crop, w: 300, h: 300, auto: format, q: 75}) {\n          alt\n          base64\n          bgColor\n          title\n          aspectRatio\n          height\n          sizes\n          src\n          srcSet\n          webpSrcSet\n          width\n        }\n      }\n    }\n  }\n}": types.EditionsDocument,
    "query EventRoutes {\n  allEvents {\n    edition\n  }\n}": types.EventRoutesDocument,
    "query JoinUs($locale: SiteLocale) {\n  allJoins(locale: $locale) {\n    social {\n      id\n      name\n      description {\n        value\n      }\n      icon {\n        responsiveImage(imgixParams: {fit: crop, w: 300, h: 300, auto: format, q: 75}) {\n          alt\n          base64\n          bgColor\n          title\n          aspectRatio\n          height\n          sizes\n          src\n          srcSet\n          webpSrcSet\n          width\n        }\n      }\n    }\n  }\n}": types.JoinUsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query About($locale: SiteLocale) {\n  about(locale: $locale) {\n    description {\n      value\n    }\n    malgosiaDescription {\n      value\n    }\n    malgosiaImage {\n      responsiveImage(imgixParams: {fit: crop, w: 300, h: 300, auto: format, q: 75}) {\n        alt\n        base64\n        bgColor\n        title\n        aspectRatio\n        height\n        sizes\n        src\n        srcSet\n        webpSrcSet\n        width\n      }\n    }\n  }\n}"): typeof import('./graphql').AboutDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Editions($locale: SiteLocale, $edition: String) {\n  event(locale: $locale, filter: {edition: {eq: $edition}}) {\n    id\n    title\n    edition\n    new\n    date\n    sign\n    location\n    lead {\n      name\n      role\n      image {\n        responsiveImage(imgixParams: {fit: crop, w: 300, h: 300, auto: format, q: 75}) {\n          alt\n          base64\n          bgColor\n          title\n          aspectRatio\n          height\n          sizes\n          src\n          srcSet\n          webpSrcSet\n          width\n        }\n      }\n    }\n    speakers {\n      name\n      role\n      image {\n        responsiveImage(imgixParams: {fit: crop, w: 300, h: 300, auto: format, q: 75}) {\n          alt\n          base64\n          bgColor\n          title\n          aspectRatio\n          height\n          sizes\n          src\n          srcSet\n          webpSrcSet\n          width\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').EditionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query EventRoutes {\n  allEvents {\n    edition\n  }\n}"): typeof import('./graphql').EventRoutesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query JoinUs($locale: SiteLocale) {\n  allJoins(locale: $locale) {\n    social {\n      id\n      name\n      description {\n        value\n      }\n      icon {\n        responsiveImage(imgixParams: {fit: crop, w: 300, h: 300, auto: format, q: 75}) {\n          alt\n          base64\n          bgColor\n          title\n          aspectRatio\n          height\n          sizes\n          src\n          srcSet\n          webpSrcSet\n          width\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').JoinUsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
