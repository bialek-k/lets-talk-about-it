import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  Json: { input: any; output: any; }
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  RichTextAST: { input: any; output: any; }
};

export type About = Entity & Node & {
  __typename?: 'About';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: RichText;
  /** Get the document in other stages */
  documentInStages: Array<About>;
  /** List of About versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<About>;
  malgosia_description: RichText;
  malgosia_image: Asset;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type AboutCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type AboutCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type AboutHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type AboutLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type AboutMalgosia_ImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type AboutPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type AboutPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type AboutUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type AboutUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AboutConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AboutWhereUniqueInput;
};

/** A connection to a list of items. */
export type AboutConnection = {
  __typename?: 'AboutConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AboutEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AboutCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** description input for default locale (en) */
  description: Scalars['RichTextAST']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AboutCreateLocalizationsInput>;
  /** malgosia_description input for default locale (en) */
  malgosia_description: Scalars['RichTextAST']['input'];
  malgosia_image: AssetCreateOneInlineInput;
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AboutCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['RichTextAST']['input'];
  malgosia_description: Scalars['RichTextAST']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AboutCreateLocalizationInput = {
  /** Localization input */
  data: AboutCreateLocalizationDataInput;
  locale: Locale;
};

export type AboutCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AboutCreateLocalizationInput>>;
};

export type AboutCreateManyInlineInput = {
  /** Connect multiple existing About documents */
  connect?: InputMaybe<Array<AboutWhereUniqueInput>>;
  /** Create and connect multiple existing About documents */
  create?: InputMaybe<Array<AboutCreateInput>>;
};

export type AboutCreateOneInlineInput = {
  /** Connect one existing About document */
  connect?: InputMaybe<AboutWhereUniqueInput>;
  /** Create and connect one About document */
  create?: InputMaybe<AboutCreateInput>;
};

/** An edge in a connection. */
export type AboutEdge = {
  __typename?: 'AboutEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: About;
};

/** Identifies documents */
export type AboutManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AboutWhereStageInput>;
  documentInStages_none?: InputMaybe<AboutWhereStageInput>;
  documentInStages_some?: InputMaybe<AboutWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  malgosia_image?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AboutOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AboutUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AboutUpdateLocalizationsInput>;
  /** malgosia_description input for default locale (en) */
  malgosia_description?: InputMaybe<Scalars['RichTextAST']['input']>;
  malgosia_image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AboutUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  malgosia_description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AboutUpdateLocalizationInput = {
  data: AboutUpdateLocalizationDataInput;
  locale: Locale;
};

export type AboutUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AboutCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AboutUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AboutUpsertLocalizationInput>>;
};

export type AboutUpdateManyInlineInput = {
  /** Connect multiple existing About documents */
  connect?: InputMaybe<Array<AboutConnectInput>>;
  /** Create and connect multiple About documents */
  create?: InputMaybe<Array<AboutCreateInput>>;
  /** Delete multiple About documents */
  delete?: InputMaybe<Array<AboutWhereUniqueInput>>;
  /** Disconnect multiple About documents */
  disconnect?: InputMaybe<Array<AboutWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing About documents */
  set?: InputMaybe<Array<AboutWhereUniqueInput>>;
  /** Update multiple About documents */
  update?: InputMaybe<Array<AboutUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple About documents */
  upsert?: InputMaybe<Array<AboutUpsertWithNestedWhereUniqueInput>>;
};

export type AboutUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AboutUpdateManyLocalizationsInput>;
  /** malgosia_description input for default locale (en) */
  malgosia_description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AboutUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  malgosia_description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AboutUpdateManyLocalizationInput = {
  data: AboutUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AboutUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AboutUpdateManyLocalizationInput>>;
};

export type AboutUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AboutUpdateManyInput;
  /** Document search */
  where: AboutWhereInput;
};

export type AboutUpdateOneInlineInput = {
  /** Connect existing About document */
  connect?: InputMaybe<AboutWhereUniqueInput>;
  /** Create and connect one About document */
  create?: InputMaybe<AboutCreateInput>;
  /** Delete currently connected About document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected About document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single About document */
  update?: InputMaybe<AboutUpdateWithNestedWhereUniqueInput>;
  /** Upsert single About document */
  upsert?: InputMaybe<AboutUpsertWithNestedWhereUniqueInput>;
};

export type AboutUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AboutUpdateInput;
  /** Unique document search */
  where: AboutWhereUniqueInput;
};

export type AboutUpsertInput = {
  /** Create document if it didn't exist */
  create: AboutCreateInput;
  /** Update document if it exists */
  update: AboutUpdateInput;
};

export type AboutUpsertLocalizationInput = {
  create: AboutCreateLocalizationDataInput;
  locale: Locale;
  update: AboutUpdateLocalizationDataInput;
};

export type AboutUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AboutUpsertInput;
  /** Unique document search */
  where: AboutWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AboutWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AboutWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AboutWhereStageInput>;
  documentInStages_none?: InputMaybe<AboutWhereStageInput>;
  documentInStages_some?: InputMaybe<AboutWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  malgosia_image?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AboutWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AboutWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References About record uniquely */
export type AboutWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  altText?: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  galleryEvent: Array<Event>;
  galleryWorkshop: Array<Workshop>;
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  logaOrganizatoraWorkshop: Array<Workshop>;
  logosPartner: Array<Partner>;
  malgosia_imageAbout: Array<About>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Returns information you need to upload the asset. The type of upload is dependant on what you pass into asset creations as upload type. */
  upload?: Maybe<AssetUpload>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetGalleryEventArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventWhereInput>;
};


/** Asset system model */
export type AssetGalleryWorkshopArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<WorkshopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkshopWhereInput>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetLogaOrganizatoraWorkshopArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<WorkshopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkshopWhereInput>;
};


/** Asset system model */
export type AssetLogosPartnerArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PartnerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PartnerWhereInput>;
};


/** Asset system model */
export type AssetMalgosia_ImageAboutArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AboutOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AboutWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  /** altText input for default locale (en) */
  altText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  galleryEvent?: InputMaybe<EventCreateManyInlineInput>;
  galleryWorkshop?: InputMaybe<WorkshopCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  logaOrganizatoraWorkshop?: InputMaybe<WorkshopCreateManyInlineInput>;
  logosPartner?: InputMaybe<PartnerCreateManyInlineInput>;
  malgosia_imageAbout?: InputMaybe<AboutCreateManyInlineInput>;
  photoPerson?: InputMaybe<PersonCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  galleryEvent_every?: InputMaybe<EventWhereInput>;
  galleryEvent_none?: InputMaybe<EventWhereInput>;
  galleryEvent_some?: InputMaybe<EventWhereInput>;
  galleryWorkshop_every?: InputMaybe<WorkshopWhereInput>;
  galleryWorkshop_none?: InputMaybe<WorkshopWhereInput>;
  galleryWorkshop_some?: InputMaybe<WorkshopWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logaOrganizatoraWorkshop_every?: InputMaybe<WorkshopWhereInput>;
  logaOrganizatoraWorkshop_none?: InputMaybe<WorkshopWhereInput>;
  logaOrganizatoraWorkshop_some?: InputMaybe<WorkshopWhereInput>;
  logosPartner_every?: InputMaybe<PartnerWhereInput>;
  logosPartner_none?: InputMaybe<PartnerWhereInput>;
  logosPartner_some?: InputMaybe<PartnerWhereInput>;
  malgosia_imageAbout_every?: InputMaybe<AboutWhereInput>;
  malgosia_imageAbout_none?: InputMaybe<AboutWhereInput>;
  malgosia_imageAbout_some?: InputMaybe<AboutWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

export enum AssetOrderByInput {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Identifies documents */
export type AssetSingleRelationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  /** altText input for default locale (en) */
  altText?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  galleryEvent?: InputMaybe<EventUpdateManyInlineInput>;
  galleryWorkshop?: InputMaybe<WorkshopUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  logaOrganizatoraWorkshop?: InputMaybe<WorkshopUpdateManyInlineInput>;
  logosPartner?: InputMaybe<PartnerUpdateManyInlineInput>;
  malgosia_imageAbout?: InputMaybe<AboutUpdateManyInlineInput>;
  photoPerson?: InputMaybe<PersonUpdateManyInlineInput>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  /** altText input for default locale (en) */
  altText?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Asset Upload */
export type AssetUpload = {
  __typename?: 'AssetUpload';
  /** Asset Upload Error */
  error?: Maybe<AssetUploadError>;
  /** Expiry Timestamp */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Asset Request Data for upload */
  requestPostData?: Maybe<AssetUploadRequestPostData>;
  /** Asset Request Data for upload */
  status?: Maybe<AssetUploadStatus>;
};

/** Represents asset upload error */
export type AssetUploadError = {
  __typename?: 'AssetUploadError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Asset Upload Request Post Data */
export type AssetUploadRequestPostData = {
  __typename?: 'AssetUploadRequestPostData';
  /** The algorithm to use in the form field. This value should be passed in the `X-Amz-Algorithm` form field. */
  algorithm: Scalars['String']['output'];
  /** The credential to use in the form field. This value should be passed in the `X-Amz-Credential` form field. */
  credential: Scalars['String']['output'];
  /** The date the request was signed, formatted as YYYYMMDDTHHMMSSZ. This value should be passed in the `X-Amz-Date` header. */
  date: Scalars['String']['output'];
  /** The key to use in the form field. This value should be passed in the `Key` form field. */
  key: Scalars['String']['output'];
  /** The policy to use in the form field. This value should be passed in the `Policy` form field. */
  policy: Scalars['String']['output'];
  /** The security token to use in the form field. This field is optional only pass it if its not null. This value should be passed in the `X-Amz-Security-Token` form field if not null. */
  securityToken?: Maybe<Scalars['String']['output']>;
  /** The signature to use in the form field. This value should be passed in the `X-Amz-Signature` form field. */
  signature: Scalars['String']['output'];
  /** The URL to which the file should be uploaded with a POST request. */
  url: Scalars['String']['output'];
};

/** System Asset Upload Status */
export enum AssetUploadStatus {
  AssetCreatePending = 'ASSET_CREATE_PENDING',
  AssetErrorUpload = 'ASSET_ERROR_UPLOAD',
  AssetUpdatePending = 'ASSET_UPDATE_PENDING',
  AssetUploadComplete = 'ASSET_UPLOAD_COMPLETE'
}

/** Identifies documents */
export type AssetUploadWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

/** Identifies documents */
export type AssetUploadWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  altText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  altText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  altText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  altText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  altText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  altText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  altText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  altText_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  galleryEvent_every?: InputMaybe<EventWhereInput>;
  galleryEvent_none?: InputMaybe<EventWhereInput>;
  galleryEvent_some?: InputMaybe<EventWhereInput>;
  galleryWorkshop_every?: InputMaybe<WorkshopWhereInput>;
  galleryWorkshop_none?: InputMaybe<WorkshopWhereInput>;
  galleryWorkshop_some?: InputMaybe<WorkshopWhereInput>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logaOrganizatoraWorkshop_every?: InputMaybe<WorkshopWhereInput>;
  logaOrganizatoraWorkshop_none?: InputMaybe<WorkshopWhereInput>;
  logaOrganizatoraWorkshop_some?: InputMaybe<WorkshopWhereInput>;
  logosPartner_every?: InputMaybe<PartnerWhereInput>;
  logosPartner_none?: InputMaybe<PartnerWhereInput>;
  logosPartner_some?: InputMaybe<PartnerWhereInput>;
  malgosia_imageAbout_every?: InputMaybe<AboutWhereInput>;
  malgosia_imageAbout_none?: InputMaybe<AboutWhereInput>;
  malgosia_imageAbout_some?: InputMaybe<AboutWhereInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Doc = Entity & Node & {
  __typename?: 'Doc';
  coockies: RichText;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Doc>;
  /** List of Doc versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Doc>;
  private_policy: RichText;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  regulation: RichText;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type DocCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type DocCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type DocDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type DocHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type DocLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type DocPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type DocPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type DocScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type DocUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type DocUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type DocConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: DocWhereUniqueInput;
};

/** A connection to a list of items. */
export type DocConnection = {
  __typename?: 'DocConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<DocEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DocCreateInput = {
  /** coockies input for default locale (en) */
  coockies: Scalars['RichTextAST']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<DocCreateLocalizationsInput>;
  /** private_policy input for default locale (en) */
  private_policy: Scalars['RichTextAST']['input'];
  /** regulation input for default locale (en) */
  regulation: Scalars['RichTextAST']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DocCreateLocalizationDataInput = {
  coockies: Scalars['RichTextAST']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  private_policy: Scalars['RichTextAST']['input'];
  regulation: Scalars['RichTextAST']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DocCreateLocalizationInput = {
  /** Localization input */
  data: DocCreateLocalizationDataInput;
  locale: Locale;
};

export type DocCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<DocCreateLocalizationInput>>;
};

export type DocCreateManyInlineInput = {
  /** Connect multiple existing Doc documents */
  connect?: InputMaybe<Array<DocWhereUniqueInput>>;
  /** Create and connect multiple existing Doc documents */
  create?: InputMaybe<Array<DocCreateInput>>;
};

export type DocCreateOneInlineInput = {
  /** Connect one existing Doc document */
  connect?: InputMaybe<DocWhereUniqueInput>;
  /** Create and connect one Doc document */
  create?: InputMaybe<DocCreateInput>;
};

/** An edge in a connection. */
export type DocEdge = {
  __typename?: 'DocEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Doc;
};

/** Identifies documents */
export type DocManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DocWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DocWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DocWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<DocWhereStageInput>;
  documentInStages_none?: InputMaybe<DocWhereStageInput>;
  documentInStages_some?: InputMaybe<DocWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum DocOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type DocUpdateInput = {
  /** coockies input for default locale (en) */
  coockies?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<DocUpdateLocalizationsInput>;
  /** private_policy input for default locale (en) */
  private_policy?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** regulation input for default locale (en) */
  regulation?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type DocUpdateLocalizationDataInput = {
  coockies?: InputMaybe<Scalars['RichTextAST']['input']>;
  private_policy?: InputMaybe<Scalars['RichTextAST']['input']>;
  regulation?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type DocUpdateLocalizationInput = {
  data: DocUpdateLocalizationDataInput;
  locale: Locale;
};

export type DocUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<DocCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<DocUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<DocUpsertLocalizationInput>>;
};

export type DocUpdateManyInlineInput = {
  /** Connect multiple existing Doc documents */
  connect?: InputMaybe<Array<DocConnectInput>>;
  /** Create and connect multiple Doc documents */
  create?: InputMaybe<Array<DocCreateInput>>;
  /** Delete multiple Doc documents */
  delete?: InputMaybe<Array<DocWhereUniqueInput>>;
  /** Disconnect multiple Doc documents */
  disconnect?: InputMaybe<Array<DocWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Doc documents */
  set?: InputMaybe<Array<DocWhereUniqueInput>>;
  /** Update multiple Doc documents */
  update?: InputMaybe<Array<DocUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Doc documents */
  upsert?: InputMaybe<Array<DocUpsertWithNestedWhereUniqueInput>>;
};

export type DocUpdateManyInput = {
  /** coockies input for default locale (en) */
  coockies?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<DocUpdateManyLocalizationsInput>;
  /** private_policy input for default locale (en) */
  private_policy?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** regulation input for default locale (en) */
  regulation?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type DocUpdateManyLocalizationDataInput = {
  coockies?: InputMaybe<Scalars['RichTextAST']['input']>;
  private_policy?: InputMaybe<Scalars['RichTextAST']['input']>;
  regulation?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type DocUpdateManyLocalizationInput = {
  data: DocUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type DocUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<DocUpdateManyLocalizationInput>>;
};

export type DocUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: DocUpdateManyInput;
  /** Document search */
  where: DocWhereInput;
};

export type DocUpdateOneInlineInput = {
  /** Connect existing Doc document */
  connect?: InputMaybe<DocWhereUniqueInput>;
  /** Create and connect one Doc document */
  create?: InputMaybe<DocCreateInput>;
  /** Delete currently connected Doc document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Doc document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Doc document */
  update?: InputMaybe<DocUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Doc document */
  upsert?: InputMaybe<DocUpsertWithNestedWhereUniqueInput>;
};

export type DocUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: DocUpdateInput;
  /** Unique document search */
  where: DocWhereUniqueInput;
};

export type DocUpsertInput = {
  /** Create document if it didn't exist */
  create: DocCreateInput;
  /** Update document if it exists */
  update: DocUpdateInput;
};

export type DocUpsertLocalizationInput = {
  create: DocCreateLocalizationDataInput;
  locale: Locale;
  update: DocUpdateLocalizationDataInput;
};

export type DocUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: DocUpsertInput;
  /** Unique document search */
  where: DocWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type DocWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type DocWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DocWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DocWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DocWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<DocWhereStageInput>;
  documentInStages_none?: InputMaybe<DocWhereStageInput>;
  documentInStages_some?: InputMaybe<DocWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type DocWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DocWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DocWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DocWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<DocWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Doc record uniquely */
export type DocWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum DocumentFileTypes {
  /** Automatically selects the best format for the image based on the browser's capabilities. */
  AutoImage = 'autoImage',
  Avif = 'avif',
  Bmp = 'bmp',
  Gif = 'gif',
  Heic = 'heic',
  Jpg = 'jpg',
  Png = 'png',
  Svg = 'svg',
  Tiff = 'tiff',
  Webp = 'webp'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * JPG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * PNG:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * SVG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * WEBP:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * GIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * TIFF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * AVIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * PDF: 	autoImage, gif, jpg, png, webp, tiff
   *
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  About = 'About',
  /** Asset system model */
  Asset = 'Asset',
  Doc = 'Doc',
  Event = 'Event',
  Film = 'Film',
  JoinUs = 'Join_us',
  Partner = 'Partner',
  Person = 'Person',
  Podcast = 'Podcast',
  Regulation = 'Regulation',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  /** User system model */
  User = 'User',
  Workshop = 'Workshop'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type Event = Entity & Node & {
  __typename?: 'Event';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date?: Maybe<Scalars['Date']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Event>;
  edition?: Maybe<Scalars['String']['output']>;
  gallery: Array<Asset>;
  /** List of Event versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  lead: Array<EventleadUnion>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Event>;
  location?: Maybe<Scalars['String']['output']>;
  /** Zaznacz jeśli to najnowsza edycja */
  new?: Maybe<Scalars['Boolean']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  singUpLink?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  speakers: Array<EventspeakersUnion>;
  /** System stage field */
  stage: Stage;
  title: Array<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type EventCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type EventCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type EventGalleryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type EventHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type EventLeadArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EventLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type EventPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type EventPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type EventSpeakersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EventUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type EventUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type EventConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EventWhereUniqueInput;
};

/** A connection to a list of items. */
export type EventConnection = {
  __typename?: 'EventConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EventEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EventCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  edition?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<AssetCreateManyInlineInput>;
  lead?: InputMaybe<EventleadUnionCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<EventCreateLocalizationsInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  singUpLink?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  speakers?: InputMaybe<EventspeakersUnionCreateManyInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventCreateLocalizationInput = {
  /** Localization input */
  data: EventCreateLocalizationDataInput;
  locale: Locale;
};

export type EventCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<EventCreateLocalizationInput>>;
};

export type EventCreateManyInlineInput = {
  /** Connect multiple existing Event documents */
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  /** Create and connect multiple existing Event documents */
  create?: InputMaybe<Array<EventCreateInput>>;
};

export type EventCreateOneInlineInput = {
  /** Connect one existing Event document */
  connect?: InputMaybe<EventWhereUniqueInput>;
  /** Create and connect one Event document */
  create?: InputMaybe<EventCreateInput>;
};

/** An edge in a connection. */
export type EventEdge = {
  __typename?: 'EventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Event;
};

/** Identifies documents */
export type EventManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<EventWhereStageInput>;
  documentInStages_none?: InputMaybe<EventWhereStageInput>;
  documentInStages_some?: InputMaybe<EventWhereStageInput>;
  edition?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  edition_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  edition_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  edition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  edition_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  edition_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  edition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  edition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  edition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  edition_starts_with?: InputMaybe<Scalars['String']['input']>;
  gallery_every?: InputMaybe<AssetWhereInput>;
  gallery_none?: InputMaybe<AssetWhereInput>;
  gallery_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty. */
  lead_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  lead_some?: InputMaybe<EventleadUnionWhereInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  new_not?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  singUpLink?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  singUpLink_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  singUpLink_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  singUpLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  singUpLink_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  singUpLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  singUpLink_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  singUpLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  singUpLink_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  singUpLink_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  speakers_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  speakers_some?: InputMaybe<EventspeakersUnionWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum EventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  EditionAsc = 'edition_ASC',
  EditionDesc = 'edition_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NewAsc = 'new_ASC',
  NewDesc = 'new_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SingUpLinkAsc = 'singUpLink_ASC',
  SingUpLinkDesc = 'singUpLink_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EventUpdateInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  edition?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<AssetUpdateManyInlineInput>;
  lead?: InputMaybe<EventleadUnionUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<EventUpdateLocalizationsInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  singUpLink?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  speakers?: InputMaybe<EventspeakersUnionUpdateManyInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type EventUpdateLocalizationDataInput = {
  title?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type EventUpdateLocalizationInput = {
  data: EventUpdateLocalizationDataInput;
  locale: Locale;
};

export type EventUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<EventCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<EventUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<EventUpsertLocalizationInput>>;
};

export type EventUpdateManyInlineInput = {
  /** Connect multiple existing Event documents */
  connect?: InputMaybe<Array<EventConnectInput>>;
  /** Create and connect multiple Event documents */
  create?: InputMaybe<Array<EventCreateInput>>;
  /** Delete multiple Event documents */
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  /** Disconnect multiple Event documents */
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Event documents */
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  /** Update multiple Event documents */
  update?: InputMaybe<Array<EventUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Event documents */
  upsert?: InputMaybe<Array<EventUpsertWithNestedWhereUniqueInput>>;
};

export type EventUpdateManyInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  edition?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<EventUpdateManyLocalizationsInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  singUpLink?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type EventUpdateManyLocalizationDataInput = {
  title?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type EventUpdateManyLocalizationInput = {
  data: EventUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type EventUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<EventUpdateManyLocalizationInput>>;
};

export type EventUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EventUpdateManyInput;
  /** Document search */
  where: EventWhereInput;
};

export type EventUpdateOneInlineInput = {
  /** Connect existing Event document */
  connect?: InputMaybe<EventWhereUniqueInput>;
  /** Create and connect one Event document */
  create?: InputMaybe<EventCreateInput>;
  /** Delete currently connected Event document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Event document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Event document */
  update?: InputMaybe<EventUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Event document */
  upsert?: InputMaybe<EventUpsertWithNestedWhereUniqueInput>;
};

export type EventUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EventUpdateInput;
  /** Unique document search */
  where: EventWhereUniqueInput;
};

export type EventUpsertInput = {
  /** Create document if it didn't exist */
  create: EventCreateInput;
  /** Update document if it exists */
  update: EventUpdateInput;
};

export type EventUpsertLocalizationInput = {
  create: EventCreateLocalizationDataInput;
  locale: Locale;
  update: EventUpdateLocalizationDataInput;
};

export type EventUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EventUpsertInput;
  /** Unique document search */
  where: EventWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type EventWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type EventWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<EventWhereStageInput>;
  documentInStages_none?: InputMaybe<EventWhereStageInput>;
  documentInStages_some?: InputMaybe<EventWhereStageInput>;
  edition?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  edition_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  edition_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  edition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  edition_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  edition_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  edition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  edition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  edition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  edition_starts_with?: InputMaybe<Scalars['String']['input']>;
  gallery_every?: InputMaybe<AssetWhereInput>;
  gallery_none?: InputMaybe<AssetWhereInput>;
  gallery_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty. */
  lead_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  lead_some?: InputMaybe<EventleadUnionWhereInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  new_not?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  singUpLink?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  singUpLink_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  singUpLink_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  singUpLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  singUpLink_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  singUpLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  singUpLink_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  singUpLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  singUpLink_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  singUpLink_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  speakers_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  speakers_some?: InputMaybe<EventspeakersUnionWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  title?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  title_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  title_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  title_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  title_not?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type EventWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<EventWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Event record uniquely */
export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type EventleadUnion = Person;

export type EventleadUnionConnectInput = {
  Person?: InputMaybe<PersonConnectInput>;
};

export type EventleadUnionCreateInput = {
  Person?: InputMaybe<PersonCreateInput>;
};

export type EventleadUnionCreateManyInlineInput = {
  /** Create and connect multiple existing EventleadUnion documents */
  create?: InputMaybe<Array<EventleadUnionCreateInput>>;
};

export type EventleadUnionCreateOneInlineInput = {
  /** Create and connect one EventleadUnion document */
  create?: InputMaybe<EventleadUnionCreateInput>;
};

export type EventleadUnionCreateWithPositionInput = {
  Person?: InputMaybe<PersonCreateWithPositionInput>;
};

export type EventleadUnionUpdateInput = {
  Person?: InputMaybe<PersonUpdateInput>;
};

export type EventleadUnionUpdateManyInlineInput = {
  /** Create and connect multiple EventleadUnion component instances */
  create?: InputMaybe<Array<EventleadUnionCreateWithPositionInput>>;
  /** Delete multiple EventleadUnion documents */
  delete?: InputMaybe<Array<EventleadUnionWhereUniqueInput>>;
  /** Update multiple EventleadUnion component instances */
  update?: InputMaybe<Array<EventleadUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple EventleadUnion component instances */
  upsert?: InputMaybe<Array<EventleadUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type EventleadUnionUpdateManyWithNestedWhereInput = {
  Person?: InputMaybe<PersonUpdateManyWithNestedWhereInput>;
};

export type EventleadUnionUpdateOneInlineInput = {
  /** Create and connect one EventleadUnion document */
  create?: InputMaybe<EventleadUnionCreateInput>;
  /** Delete currently connected EventleadUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single EventleadUnion document */
  update?: InputMaybe<EventleadUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EventleadUnion document */
  upsert?: InputMaybe<EventleadUnionUpsertWithNestedWhereUniqueInput>;
};

export type EventleadUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Person?: InputMaybe<PersonUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type EventleadUnionUpdateWithNestedWhereUniqueInput = {
  Person?: InputMaybe<PersonUpdateWithNestedWhereUniqueInput>;
};

export type EventleadUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Person?: InputMaybe<PersonUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type EventleadUnionUpsertWithNestedWhereUniqueInput = {
  Person?: InputMaybe<PersonUpsertWithNestedWhereUniqueInput>;
};

export type EventleadUnionWhereInput = {
  Person?: InputMaybe<PersonWhereInput>;
};

export type EventleadUnionWhereUniqueInput = {
  Person?: InputMaybe<PersonWhereUniqueInput>;
};

export type EventspeakersUnion = Person;

export type EventspeakersUnionConnectInput = {
  Person?: InputMaybe<PersonConnectInput>;
};

export type EventspeakersUnionCreateInput = {
  Person?: InputMaybe<PersonCreateInput>;
};

export type EventspeakersUnionCreateManyInlineInput = {
  /** Create and connect multiple existing EventspeakersUnion documents */
  create?: InputMaybe<Array<EventspeakersUnionCreateInput>>;
};

export type EventspeakersUnionCreateOneInlineInput = {
  /** Create and connect one EventspeakersUnion document */
  create?: InputMaybe<EventspeakersUnionCreateInput>;
};

export type EventspeakersUnionCreateWithPositionInput = {
  Person?: InputMaybe<PersonCreateWithPositionInput>;
};

export type EventspeakersUnionUpdateInput = {
  Person?: InputMaybe<PersonUpdateInput>;
};

export type EventspeakersUnionUpdateManyInlineInput = {
  /** Create and connect multiple EventspeakersUnion component instances */
  create?: InputMaybe<Array<EventspeakersUnionCreateWithPositionInput>>;
  /** Delete multiple EventspeakersUnion documents */
  delete?: InputMaybe<Array<EventspeakersUnionWhereUniqueInput>>;
  /** Update multiple EventspeakersUnion component instances */
  update?: InputMaybe<Array<EventspeakersUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple EventspeakersUnion component instances */
  upsert?: InputMaybe<Array<EventspeakersUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type EventspeakersUnionUpdateManyWithNestedWhereInput = {
  Person?: InputMaybe<PersonUpdateManyWithNestedWhereInput>;
};

export type EventspeakersUnionUpdateOneInlineInput = {
  /** Create and connect one EventspeakersUnion document */
  create?: InputMaybe<EventspeakersUnionCreateInput>;
  /** Delete currently connected EventspeakersUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single EventspeakersUnion document */
  update?: InputMaybe<EventspeakersUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EventspeakersUnion document */
  upsert?: InputMaybe<EventspeakersUnionUpsertWithNestedWhereUniqueInput>;
};

export type EventspeakersUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Person?: InputMaybe<PersonUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type EventspeakersUnionUpdateWithNestedWhereUniqueInput = {
  Person?: InputMaybe<PersonUpdateWithNestedWhereUniqueInput>;
};

export type EventspeakersUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Person?: InputMaybe<PersonUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type EventspeakersUnionUpsertWithNestedWhereUniqueInput = {
  Person?: InputMaybe<PersonUpsertWithNestedWhereUniqueInput>;
};

export type EventspeakersUnionWhereInput = {
  Person?: InputMaybe<PersonWhereInput>;
};

export type EventspeakersUnionWhereUniqueInput = {
  Person?: InputMaybe<PersonWhereUniqueInput>;
};

export type Film = Entity & Node & {
  __typename?: 'Film';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<Film>;
  /** List of Film versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  links: Array<Scalars['String']['output']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Film>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type FilmCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FilmCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FilmDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type FilmHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type FilmLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type FilmPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FilmPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FilmScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type FilmUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FilmUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type FilmConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FilmWhereUniqueInput;
};

/** A connection to a list of items. */
export type FilmConnection = {
  __typename?: 'FilmConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FilmEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FilmCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<FilmCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FilmCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FilmCreateLocalizationInput = {
  /** Localization input */
  data: FilmCreateLocalizationDataInput;
  locale: Locale;
};

export type FilmCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<FilmCreateLocalizationInput>>;
};

export type FilmCreateManyInlineInput = {
  /** Connect multiple existing Film documents */
  connect?: InputMaybe<Array<FilmWhereUniqueInput>>;
  /** Create and connect multiple existing Film documents */
  create?: InputMaybe<Array<FilmCreateInput>>;
};

export type FilmCreateOneInlineInput = {
  /** Connect one existing Film document */
  connect?: InputMaybe<FilmWhereUniqueInput>;
  /** Create and connect one Film document */
  create?: InputMaybe<FilmCreateInput>;
};

/** An edge in a connection. */
export type FilmEdge = {
  __typename?: 'FilmEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Film;
};

/** Identifies documents */
export type FilmManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FilmWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FilmWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FilmWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FilmWhereStageInput>;
  documentInStages_none?: InputMaybe<FilmWhereStageInput>;
  documentInStages_some?: InputMaybe<FilmWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  links_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  links_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  links_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  links_not?: InputMaybe<Array<Scalars['String']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum FilmOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinksAsc = 'links_ASC',
  LinksDesc = 'links_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FilmUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Manage document localizations */
  localizations?: InputMaybe<FilmUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FilmUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FilmUpdateLocalizationInput = {
  data: FilmUpdateLocalizationDataInput;
  locale: Locale;
};

export type FilmUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<FilmCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<FilmUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<FilmUpsertLocalizationInput>>;
};

export type FilmUpdateManyInlineInput = {
  /** Connect multiple existing Film documents */
  connect?: InputMaybe<Array<FilmConnectInput>>;
  /** Create and connect multiple Film documents */
  create?: InputMaybe<Array<FilmCreateInput>>;
  /** Delete multiple Film documents */
  delete?: InputMaybe<Array<FilmWhereUniqueInput>>;
  /** Disconnect multiple Film documents */
  disconnect?: InputMaybe<Array<FilmWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Film documents */
  set?: InputMaybe<Array<FilmWhereUniqueInput>>;
  /** Update multiple Film documents */
  update?: InputMaybe<Array<FilmUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Film documents */
  upsert?: InputMaybe<Array<FilmUpsertWithNestedWhereUniqueInput>>;
};

export type FilmUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<FilmUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FilmUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FilmUpdateManyLocalizationInput = {
  data: FilmUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type FilmUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<FilmUpdateManyLocalizationInput>>;
};

export type FilmUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FilmUpdateManyInput;
  /** Document search */
  where: FilmWhereInput;
};

export type FilmUpdateOneInlineInput = {
  /** Connect existing Film document */
  connect?: InputMaybe<FilmWhereUniqueInput>;
  /** Create and connect one Film document */
  create?: InputMaybe<FilmCreateInput>;
  /** Delete currently connected Film document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Film document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Film document */
  update?: InputMaybe<FilmUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Film document */
  upsert?: InputMaybe<FilmUpsertWithNestedWhereUniqueInput>;
};

export type FilmUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FilmUpdateInput;
  /** Unique document search */
  where: FilmWhereUniqueInput;
};

export type FilmUpsertInput = {
  /** Create document if it didn't exist */
  create: FilmCreateInput;
  /** Update document if it exists */
  update: FilmUpdateInput;
};

export type FilmUpsertLocalizationInput = {
  create: FilmCreateLocalizationDataInput;
  locale: Locale;
  update: FilmUpdateLocalizationDataInput;
};

export type FilmUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FilmUpsertInput;
  /** Unique document search */
  where: FilmWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type FilmWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type FilmWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FilmWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FilmWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FilmWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FilmWhereStageInput>;
  documentInStages_none?: InputMaybe<FilmWhereStageInput>;
  documentInStages_some?: InputMaybe<FilmWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  links_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  links_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  links_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  links_not?: InputMaybe<Array<Scalars['String']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type FilmWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FilmWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FilmWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FilmWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<FilmWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Film record uniquely */
export type FilmWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum Gender {
  Female = 'female',
  Male = 'male'
}

export type ImageBlurInput = {
  /** The amount of blurring to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Adds a border to the image. */
export type ImageBorderInput = {
  /** The background color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  background: Scalars['String']['input'];
  /** The color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  color: Scalars['String']['input'];
  /** The width of the border in pixels. The value must be an integer from 1 to 1000. */
  width: Scalars['Int']['input'];
};

export type ImageCompressInput = {
  /** Preserves the metadata of the image. */
  metadata: Scalars['Boolean']['input'];
};

/**
 * Crops the image to the specified dimensions.
 * The starting points for X and Y coordinates are [0,0], aligning with the top-left corner of the image.
 * The width and height parameters determine the size in pixels of the cropping rectangle.
 * The output will include only the portion of the image within the designated crop area.
 */
export type ImageCropInput = {
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Scalars['Int']['input'];
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Scalars['Int']['input'];
  /** The x coordinate of the image. The value must be an integer from 0 to 10000. */
  x: Scalars['Int']['input'];
  /** The y coordinate of the image. The value must be an integer from 0 to 10000. */
  y: Scalars['Int']['input'];
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageQualityInput = {
  /** The quality of the image. The value must be an integer from 1 to 100. */
  value: Scalars['Int']['input'];
};

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpenInput = {
  /** The amount of sharpening to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Blurs the image. */
  blur?: InputMaybe<ImageBlurInput>;
  /** Adds a border to the image. */
  border?: InputMaybe<ImageBorderInput>;
  /** Compresses the image. */
  compress?: InputMaybe<ImageCompressInput>;
  /** Crops the image to the specified dimensions. */
  crop?: InputMaybe<ImageCropInput>;
  /**
   * Changes the quality of the image. The value must be an integer from 1 to 100.
   * Only supported for the following formats jpeg, jpg, webp, gif, heif, tiff, avif.
   */
  quality?: InputMaybe<ImageQualityInput>;
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
  /** Sharpens the image. */
  sharpen?: InputMaybe<ImageSharpenInput>;
};

export type Join_Us = Entity & Node & {
  __typename?: 'Join_us';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Join_Us>;
  facebook_description: RichText;
  /** List of Join_us versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  linkedin_description: RichText;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Join_Us>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  youtube_description: RichText;
};


export type Join_UsCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type Join_UsCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type Join_UsDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type Join_UsHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type Join_UsLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type Join_UsPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type Join_UsPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type Join_UsScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type Join_UsUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type Join_UsUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type Join_UsConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: Join_UsWhereUniqueInput;
};

/** A connection to a list of items. */
export type Join_UsConnection = {
  __typename?: 'Join_usConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<Join_UsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type Join_UsCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** facebook_description input for default locale (en) */
  facebook_description: Scalars['RichTextAST']['input'];
  /** linkedin_description input for default locale (en) */
  linkedin_description: Scalars['RichTextAST']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<Join_UsCreateLocalizationsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** youtube_description input for default locale (en) */
  youtube_description: Scalars['RichTextAST']['input'];
};

export type Join_UsCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  facebook_description: Scalars['RichTextAST']['input'];
  linkedin_description: Scalars['RichTextAST']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  youtube_description: Scalars['RichTextAST']['input'];
};

export type Join_UsCreateLocalizationInput = {
  /** Localization input */
  data: Join_UsCreateLocalizationDataInput;
  locale: Locale;
};

export type Join_UsCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<Join_UsCreateLocalizationInput>>;
};

export type Join_UsCreateManyInlineInput = {
  /** Connect multiple existing Join_us documents */
  connect?: InputMaybe<Array<Join_UsWhereUniqueInput>>;
  /** Create and connect multiple existing Join_us documents */
  create?: InputMaybe<Array<Join_UsCreateInput>>;
};

export type Join_UsCreateOneInlineInput = {
  /** Connect one existing Join_us document */
  connect?: InputMaybe<Join_UsWhereUniqueInput>;
  /** Create and connect one Join_us document */
  create?: InputMaybe<Join_UsCreateInput>;
};

/** An edge in a connection. */
export type Join_UsEdge = {
  __typename?: 'Join_usEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Join_Us;
};

/** Identifies documents */
export type Join_UsManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<Join_UsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<Join_UsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<Join_UsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<Join_UsWhereStageInput>;
  documentInStages_none?: InputMaybe<Join_UsWhereStageInput>;
  documentInStages_some?: InputMaybe<Join_UsWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum Join_UsOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type Join_UsUpdateInput = {
  /** facebook_description input for default locale (en) */
  facebook_description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** linkedin_description input for default locale (en) */
  linkedin_description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<Join_UsUpdateLocalizationsInput>;
  /** youtube_description input for default locale (en) */
  youtube_description?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type Join_UsUpdateLocalizationDataInput = {
  facebook_description?: InputMaybe<Scalars['RichTextAST']['input']>;
  linkedin_description?: InputMaybe<Scalars['RichTextAST']['input']>;
  youtube_description?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type Join_UsUpdateLocalizationInput = {
  data: Join_UsUpdateLocalizationDataInput;
  locale: Locale;
};

export type Join_UsUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<Join_UsCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<Join_UsUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<Join_UsUpsertLocalizationInput>>;
};

export type Join_UsUpdateManyInlineInput = {
  /** Connect multiple existing Join_us documents */
  connect?: InputMaybe<Array<Join_UsConnectInput>>;
  /** Create and connect multiple Join_us documents */
  create?: InputMaybe<Array<Join_UsCreateInput>>;
  /** Delete multiple Join_us documents */
  delete?: InputMaybe<Array<Join_UsWhereUniqueInput>>;
  /** Disconnect multiple Join_us documents */
  disconnect?: InputMaybe<Array<Join_UsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Join_us documents */
  set?: InputMaybe<Array<Join_UsWhereUniqueInput>>;
  /** Update multiple Join_us documents */
  update?: InputMaybe<Array<Join_UsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Join_us documents */
  upsert?: InputMaybe<Array<Join_UsUpsertWithNestedWhereUniqueInput>>;
};

export type Join_UsUpdateManyInput = {
  /** facebook_description input for default locale (en) */
  facebook_description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** linkedin_description input for default locale (en) */
  linkedin_description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<Join_UsUpdateManyLocalizationsInput>;
  /** youtube_description input for default locale (en) */
  youtube_description?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type Join_UsUpdateManyLocalizationDataInput = {
  facebook_description?: InputMaybe<Scalars['RichTextAST']['input']>;
  linkedin_description?: InputMaybe<Scalars['RichTextAST']['input']>;
  youtube_description?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type Join_UsUpdateManyLocalizationInput = {
  data: Join_UsUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type Join_UsUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<Join_UsUpdateManyLocalizationInput>>;
};

export type Join_UsUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: Join_UsUpdateManyInput;
  /** Document search */
  where: Join_UsWhereInput;
};

export type Join_UsUpdateOneInlineInput = {
  /** Connect existing Join_us document */
  connect?: InputMaybe<Join_UsWhereUniqueInput>;
  /** Create and connect one Join_us document */
  create?: InputMaybe<Join_UsCreateInput>;
  /** Delete currently connected Join_us document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Join_us document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Join_us document */
  update?: InputMaybe<Join_UsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Join_us document */
  upsert?: InputMaybe<Join_UsUpsertWithNestedWhereUniqueInput>;
};

export type Join_UsUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: Join_UsUpdateInput;
  /** Unique document search */
  where: Join_UsWhereUniqueInput;
};

export type Join_UsUpsertInput = {
  /** Create document if it didn't exist */
  create: Join_UsCreateInput;
  /** Update document if it exists */
  update: Join_UsUpdateInput;
};

export type Join_UsUpsertLocalizationInput = {
  create: Join_UsCreateLocalizationDataInput;
  locale: Locale;
  update: Join_UsUpdateLocalizationDataInput;
};

export type Join_UsUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: Join_UsUpsertInput;
  /** Unique document search */
  where: Join_UsWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type Join_UsWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type Join_UsWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<Join_UsWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<Join_UsWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<Join_UsWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<Join_UsWhereStageInput>;
  documentInStages_none?: InputMaybe<Join_UsWhereStageInput>;
  documentInStages_some?: InputMaybe<Join_UsWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type Join_UsWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<Join_UsWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<Join_UsWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<Join_UsWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<Join_UsWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Join_us record uniquely */
export type Join_UsWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  Pl = 'pl'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one about */
  createAbout?: Maybe<About>;
  /** Create an asset. Use the returned info to finish the creation process by uploading the asset. */
  createAsset?: Maybe<Asset>;
  /** Create one doc */
  createDoc?: Maybe<Doc>;
  /** Create one event */
  createEvent?: Maybe<Event>;
  /** Create one film */
  createFilm?: Maybe<Film>;
  /** Create one join_us */
  createJoin_us?: Maybe<Join_Us>;
  /** Create one partner */
  createPartner?: Maybe<Partner>;
  /** Create one podcast */
  createPodcast?: Maybe<Podcast>;
  /** Create one regulation */
  createRegulation?: Maybe<Regulation>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one workshop */
  createWorkshop?: Maybe<Workshop>;
  /** Delete one about from _all_ existing stages. Returns deleted document. */
  deleteAbout?: Maybe<About>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one doc from _all_ existing stages. Returns deleted document. */
  deleteDoc?: Maybe<Doc>;
  /** Delete one event from _all_ existing stages. Returns deleted document. */
  deleteEvent?: Maybe<Event>;
  /** Delete one film from _all_ existing stages. Returns deleted document. */
  deleteFilm?: Maybe<Film>;
  /** Delete one join_us from _all_ existing stages. Returns deleted document. */
  deleteJoin_us?: Maybe<Join_Us>;
  /**
   * Delete many About documents
   * @deprecated Please use the new paginated many mutation (deleteManyAboutsConnection)
   */
  deleteManyAbouts: BatchPayload;
  /** Delete many About documents, return deleted documents */
  deleteManyAboutsConnection: AboutConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Doc documents
   * @deprecated Please use the new paginated many mutation (deleteManyDocsConnection)
   */
  deleteManyDocs: BatchPayload;
  /** Delete many Doc documents, return deleted documents */
  deleteManyDocsConnection: DocConnection;
  /**
   * Delete many Event documents
   * @deprecated Please use the new paginated many mutation (deleteManyEventsConnection)
   */
  deleteManyEvents: BatchPayload;
  /** Delete many Event documents, return deleted documents */
  deleteManyEventsConnection: EventConnection;
  /**
   * Delete many Film documents
   * @deprecated Please use the new paginated many mutation (deleteManyFilmsConnection)
   */
  deleteManyFilms: BatchPayload;
  /** Delete many Film documents, return deleted documents */
  deleteManyFilmsConnection: FilmConnection;
  /**
   * Delete many Join_us documents
   * @deprecated Please use the new paginated many mutation (deleteManyJoin_ussConnection)
   */
  deleteManyJoin_uss: BatchPayload;
  /** Delete many Join_us documents, return deleted documents */
  deleteManyJoin_ussConnection: Join_UsConnection;
  /**
   * Delete many Partner documents
   * @deprecated Please use the new paginated many mutation (deleteManyPartnersConnection)
   */
  deleteManyPartners: BatchPayload;
  /** Delete many Partner documents, return deleted documents */
  deleteManyPartnersConnection: PartnerConnection;
  /**
   * Delete many Podcast documents
   * @deprecated Please use the new paginated many mutation (deleteManyPodcastsConnection)
   */
  deleteManyPodcasts: BatchPayload;
  /** Delete many Podcast documents, return deleted documents */
  deleteManyPodcastsConnection: PodcastConnection;
  /**
   * Delete many Regulation documents
   * @deprecated Please use the new paginated many mutation (deleteManyRegulationsConnection)
   */
  deleteManyRegulations: BatchPayload;
  /** Delete many Regulation documents, return deleted documents */
  deleteManyRegulationsConnection: RegulationConnection;
  /**
   * Delete many Workshop documents
   * @deprecated Please use the new paginated many mutation (deleteManyWorkshopsConnection)
   */
  deleteManyWorkshops: BatchPayload;
  /** Delete many Workshop documents, return deleted documents */
  deleteManyWorkshopsConnection: WorkshopConnection;
  /** Delete one partner from _all_ existing stages. Returns deleted document. */
  deletePartner?: Maybe<Partner>;
  /** Delete one podcast from _all_ existing stages. Returns deleted document. */
  deletePodcast?: Maybe<Podcast>;
  /** Delete one regulation from _all_ existing stages. Returns deleted document. */
  deleteRegulation?: Maybe<Regulation>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one workshop from _all_ existing stages. Returns deleted document. */
  deleteWorkshop?: Maybe<Workshop>;
  /** Publish one about */
  publishAbout?: Maybe<About>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one doc */
  publishDoc?: Maybe<Doc>;
  /** Publish one event */
  publishEvent?: Maybe<Event>;
  /** Publish one film */
  publishFilm?: Maybe<Film>;
  /** Publish one join_us */
  publishJoin_us?: Maybe<Join_Us>;
  /**
   * Publish many About documents
   * @deprecated Please use the new paginated many mutation (publishManyAboutsConnection)
   */
  publishManyAbouts: BatchPayload;
  /** Publish many About documents */
  publishManyAboutsConnection: AboutConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Doc documents
   * @deprecated Please use the new paginated many mutation (publishManyDocsConnection)
   */
  publishManyDocs: BatchPayload;
  /** Publish many Doc documents */
  publishManyDocsConnection: DocConnection;
  /**
   * Publish many Event documents
   * @deprecated Please use the new paginated many mutation (publishManyEventsConnection)
   */
  publishManyEvents: BatchPayload;
  /** Publish many Event documents */
  publishManyEventsConnection: EventConnection;
  /**
   * Publish many Film documents
   * @deprecated Please use the new paginated many mutation (publishManyFilmsConnection)
   */
  publishManyFilms: BatchPayload;
  /** Publish many Film documents */
  publishManyFilmsConnection: FilmConnection;
  /**
   * Publish many Join_us documents
   * @deprecated Please use the new paginated many mutation (publishManyJoin_ussConnection)
   */
  publishManyJoin_uss: BatchPayload;
  /** Publish many Join_us documents */
  publishManyJoin_ussConnection: Join_UsConnection;
  /**
   * Publish many Partner documents
   * @deprecated Please use the new paginated many mutation (publishManyPartnersConnection)
   */
  publishManyPartners: BatchPayload;
  /** Publish many Partner documents */
  publishManyPartnersConnection: PartnerConnection;
  /**
   * Publish many Podcast documents
   * @deprecated Please use the new paginated many mutation (publishManyPodcastsConnection)
   */
  publishManyPodcasts: BatchPayload;
  /** Publish many Podcast documents */
  publishManyPodcastsConnection: PodcastConnection;
  /**
   * Publish many Regulation documents
   * @deprecated Please use the new paginated many mutation (publishManyRegulationsConnection)
   */
  publishManyRegulations: BatchPayload;
  /** Publish many Regulation documents */
  publishManyRegulationsConnection: RegulationConnection;
  /**
   * Publish many Workshop documents
   * @deprecated Please use the new paginated many mutation (publishManyWorkshopsConnection)
   */
  publishManyWorkshops: BatchPayload;
  /** Publish many Workshop documents */
  publishManyWorkshopsConnection: WorkshopConnection;
  /** Publish one partner */
  publishPartner?: Maybe<Partner>;
  /** Publish one podcast */
  publishPodcast?: Maybe<Podcast>;
  /** Publish one regulation */
  publishRegulation?: Maybe<Regulation>;
  /** Publish one workshop */
  publishWorkshop?: Maybe<Workshop>;
  /** Schedule to publish one about */
  schedulePublishAbout?: Maybe<About>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one doc */
  schedulePublishDoc?: Maybe<Doc>;
  /** Schedule to publish one event */
  schedulePublishEvent?: Maybe<Event>;
  /** Schedule to publish one film */
  schedulePublishFilm?: Maybe<Film>;
  /** Schedule to publish one join_us */
  schedulePublishJoin_us?: Maybe<Join_Us>;
  /** Schedule to publish one partner */
  schedulePublishPartner?: Maybe<Partner>;
  /** Schedule to publish one podcast */
  schedulePublishPodcast?: Maybe<Podcast>;
  /** Schedule to publish one regulation */
  schedulePublishRegulation?: Maybe<Regulation>;
  /** Schedule to publish one workshop */
  schedulePublishWorkshop?: Maybe<Workshop>;
  /** Unpublish one about from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAbout?: Maybe<About>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one doc from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishDoc?: Maybe<Doc>;
  /** Unpublish one event from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEvent?: Maybe<Event>;
  /** Unpublish one film from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFilm?: Maybe<Film>;
  /** Unpublish one join_us from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishJoin_us?: Maybe<Join_Us>;
  /** Unpublish one partner from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPartner?: Maybe<Partner>;
  /** Unpublish one podcast from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPodcast?: Maybe<Podcast>;
  /** Unpublish one regulation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishRegulation?: Maybe<Regulation>;
  /** Unpublish one workshop from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishWorkshop?: Maybe<Workshop>;
  /** Unpublish one about from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAbout?: Maybe<About>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one doc from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishDoc?: Maybe<Doc>;
  /** Unpublish one event from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEvent?: Maybe<Event>;
  /** Unpublish one film from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFilm?: Maybe<Film>;
  /** Unpublish one join_us from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishJoin_us?: Maybe<Join_Us>;
  /**
   * Unpublish many About documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAboutsConnection)
   */
  unpublishManyAbouts: BatchPayload;
  /** Find many About documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAboutsConnection: AboutConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Doc documents
   * @deprecated Please use the new paginated many mutation (unpublishManyDocsConnection)
   */
  unpublishManyDocs: BatchPayload;
  /** Find many Doc documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyDocsConnection: DocConnection;
  /**
   * Unpublish many Event documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEventsConnection)
   */
  unpublishManyEvents: BatchPayload;
  /** Find many Event documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEventsConnection: EventConnection;
  /**
   * Unpublish many Film documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFilmsConnection)
   */
  unpublishManyFilms: BatchPayload;
  /** Find many Film documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFilmsConnection: FilmConnection;
  /**
   * Unpublish many Join_us documents
   * @deprecated Please use the new paginated many mutation (unpublishManyJoin_ussConnection)
   */
  unpublishManyJoin_uss: BatchPayload;
  /** Find many Join_us documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyJoin_ussConnection: Join_UsConnection;
  /**
   * Unpublish many Partner documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPartnersConnection)
   */
  unpublishManyPartners: BatchPayload;
  /** Find many Partner documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPartnersConnection: PartnerConnection;
  /**
   * Unpublish many Podcast documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPodcastsConnection)
   */
  unpublishManyPodcasts: BatchPayload;
  /** Find many Podcast documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPodcastsConnection: PodcastConnection;
  /**
   * Unpublish many Regulation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyRegulationsConnection)
   */
  unpublishManyRegulations: BatchPayload;
  /** Find many Regulation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyRegulationsConnection: RegulationConnection;
  /**
   * Unpublish many Workshop documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWorkshopsConnection)
   */
  unpublishManyWorkshops: BatchPayload;
  /** Find many Workshop documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWorkshopsConnection: WorkshopConnection;
  /** Unpublish one partner from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPartner?: Maybe<Partner>;
  /** Unpublish one podcast from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPodcast?: Maybe<Podcast>;
  /** Unpublish one regulation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishRegulation?: Maybe<Regulation>;
  /** Unpublish one workshop from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWorkshop?: Maybe<Workshop>;
  /** Update one about */
  updateAbout?: Maybe<About>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one doc */
  updateDoc?: Maybe<Doc>;
  /** Update one event */
  updateEvent?: Maybe<Event>;
  /** Update one film */
  updateFilm?: Maybe<Film>;
  /** Update one join_us */
  updateJoin_us?: Maybe<Join_Us>;
  /**
   * Update many abouts
   * @deprecated Please use the new paginated many mutation (updateManyAboutsConnection)
   */
  updateManyAbouts: BatchPayload;
  /** Update many About documents */
  updateManyAboutsConnection: AboutConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many docs
   * @deprecated Please use the new paginated many mutation (updateManyDocsConnection)
   */
  updateManyDocs: BatchPayload;
  /** Update many Doc documents */
  updateManyDocsConnection: DocConnection;
  /**
   * Update many events
   * @deprecated Please use the new paginated many mutation (updateManyEventsConnection)
   */
  updateManyEvents: BatchPayload;
  /** Update many Event documents */
  updateManyEventsConnection: EventConnection;
  /**
   * Update many films
   * @deprecated Please use the new paginated many mutation (updateManyFilmsConnection)
   */
  updateManyFilms: BatchPayload;
  /** Update many Film documents */
  updateManyFilmsConnection: FilmConnection;
  /**
   * Update many join_uss
   * @deprecated Please use the new paginated many mutation (updateManyJoin_ussConnection)
   */
  updateManyJoin_uss: BatchPayload;
  /** Update many Join_us documents */
  updateManyJoin_ussConnection: Join_UsConnection;
  /**
   * Update many partners
   * @deprecated Please use the new paginated many mutation (updateManyPartnersConnection)
   */
  updateManyPartners: BatchPayload;
  /** Update many Partner documents */
  updateManyPartnersConnection: PartnerConnection;
  /**
   * Update many podcasts
   * @deprecated Please use the new paginated many mutation (updateManyPodcastsConnection)
   */
  updateManyPodcasts: BatchPayload;
  /** Update many Podcast documents */
  updateManyPodcastsConnection: PodcastConnection;
  /**
   * Update many regulations
   * @deprecated Please use the new paginated many mutation (updateManyRegulationsConnection)
   */
  updateManyRegulations: BatchPayload;
  /** Update many Regulation documents */
  updateManyRegulationsConnection: RegulationConnection;
  /**
   * Update many workshops
   * @deprecated Please use the new paginated many mutation (updateManyWorkshopsConnection)
   */
  updateManyWorkshops: BatchPayload;
  /** Update many Workshop documents */
  updateManyWorkshopsConnection: WorkshopConnection;
  /** Update one partner */
  updatePartner?: Maybe<Partner>;
  /** Update one podcast */
  updatePodcast?: Maybe<Podcast>;
  /** Update one regulation */
  updateRegulation?: Maybe<Regulation>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one workshop */
  updateWorkshop?: Maybe<Workshop>;
  /** Upsert one about */
  upsertAbout?: Maybe<About>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one doc */
  upsertDoc?: Maybe<Doc>;
  /** Upsert one event */
  upsertEvent?: Maybe<Event>;
  /** Upsert one film */
  upsertFilm?: Maybe<Film>;
  /** Upsert one join_us */
  upsertJoin_us?: Maybe<Join_Us>;
  /** Upsert one partner */
  upsertPartner?: Maybe<Partner>;
  /** Upsert one podcast */
  upsertPodcast?: Maybe<Podcast>;
  /** Upsert one regulation */
  upsertRegulation?: Maybe<Regulation>;
  /** Upsert one workshop */
  upsertWorkshop?: Maybe<Workshop>;
};


export type MutationCreateAboutArgs = {
  data: AboutCreateInput;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateDocArgs = {
  data: DocCreateInput;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateFilmArgs = {
  data: FilmCreateInput;
};


export type MutationCreateJoin_UsArgs = {
  data: Join_UsCreateInput;
};


export type MutationCreatePartnerArgs = {
  data: PartnerCreateInput;
};


export type MutationCreatePodcastArgs = {
  data: PodcastCreateInput;
};


export type MutationCreateRegulationArgs = {
  data: RegulationCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateWorkshopArgs = {
  data: WorkshopCreateInput;
};


export type MutationDeleteAboutArgs = {
  where: AboutWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteDocArgs = {
  where: DocWhereUniqueInput;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteFilmArgs = {
  where: FilmWhereUniqueInput;
};


export type MutationDeleteJoin_UsArgs = {
  where: Join_UsWhereUniqueInput;
};


export type MutationDeleteManyAboutsArgs = {
  where?: InputMaybe<AboutManyWhereInput>;
};


export type MutationDeleteManyAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AboutManyWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyDocsArgs = {
  where?: InputMaybe<DocManyWhereInput>;
};


export type MutationDeleteManyDocsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DocManyWhereInput>;
};


export type MutationDeleteManyEventsArgs = {
  where?: InputMaybe<EventManyWhereInput>;
};


export type MutationDeleteManyEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventManyWhereInput>;
};


export type MutationDeleteManyFilmsArgs = {
  where?: InputMaybe<FilmManyWhereInput>;
};


export type MutationDeleteManyFilmsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FilmManyWhereInput>;
};


export type MutationDeleteManyJoin_UssArgs = {
  where?: InputMaybe<Join_UsManyWhereInput>;
};


export type MutationDeleteManyJoin_UssConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Join_UsManyWhereInput>;
};


export type MutationDeleteManyPartnersArgs = {
  where?: InputMaybe<PartnerManyWhereInput>;
};


export type MutationDeleteManyPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PartnerManyWhereInput>;
};


export type MutationDeleteManyPodcastsArgs = {
  where?: InputMaybe<PodcastManyWhereInput>;
};


export type MutationDeleteManyPodcastsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PodcastManyWhereInput>;
};


export type MutationDeleteManyRegulationsArgs = {
  where?: InputMaybe<RegulationManyWhereInput>;
};


export type MutationDeleteManyRegulationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RegulationManyWhereInput>;
};


export type MutationDeleteManyWorkshopsArgs = {
  where?: InputMaybe<WorkshopManyWhereInput>;
};


export type MutationDeleteManyWorkshopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkshopManyWhereInput>;
};


export type MutationDeletePartnerArgs = {
  where: PartnerWhereUniqueInput;
};


export type MutationDeletePodcastArgs = {
  where: PodcastWhereUniqueInput;
};


export type MutationDeleteRegulationArgs = {
  where: RegulationWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteWorkshopArgs = {
  where: WorkshopWhereUniqueInput;
};


export type MutationPublishAboutArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AboutWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishDocArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: DocWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishEventArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: EventWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishFilmArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: FilmWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishJoin_UsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: Join_UsWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAboutsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AboutManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AboutManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyDocsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<DocManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyDocsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<DocManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyEventsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<EventManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<EventManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyFilmsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<FilmManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyFilmsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<FilmManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyJoin_UssArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<Join_UsManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyJoin_UssConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<Join_UsManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPartnersArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PartnerManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PartnerManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPodcastsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PodcastManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPodcastsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PodcastManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyRegulationsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<RegulationManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyRegulationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<RegulationManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyWorkshopsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<WorkshopManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyWorkshopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<WorkshopManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishPartnerArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: PartnerWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishPodcastArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: PodcastWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishRegulationArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: RegulationWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishWorkshopArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: WorkshopWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishAboutArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AboutWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishDocArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: DocWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishEventArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: EventWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishFilmArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: FilmWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishJoin_UsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: Join_UsWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishPartnerArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PartnerWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishPodcastArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PodcastWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishRegulationArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: RegulationWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishWorkshopArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: WorkshopWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationScheduleUnpublishAboutArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AboutWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishDocArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: DocWhereUniqueInput;
};


export type MutationScheduleUnpublishEventArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: EventWhereUniqueInput;
};


export type MutationScheduleUnpublishFilmArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: FilmWhereUniqueInput;
};


export type MutationScheduleUnpublishJoin_UsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: Join_UsWhereUniqueInput;
};


export type MutationScheduleUnpublishPartnerArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PartnerWhereUniqueInput;
};


export type MutationScheduleUnpublishPodcastArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PodcastWhereUniqueInput;
};


export type MutationScheduleUnpublishRegulationArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: RegulationWhereUniqueInput;
};


export type MutationScheduleUnpublishWorkshopArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: WorkshopWhereUniqueInput;
};


export type MutationUnpublishAboutArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AboutWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishDocArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: DocWhereUniqueInput;
};


export type MutationUnpublishEventArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: EventWhereUniqueInput;
};


export type MutationUnpublishFilmArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: FilmWhereUniqueInput;
};


export type MutationUnpublishJoin_UsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: Join_UsWhereUniqueInput;
};


export type MutationUnpublishManyAboutsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AboutManyWhereInput>;
};


export type MutationUnpublishManyAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AboutManyWhereInput>;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyDocsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DocManyWhereInput>;
};


export type MutationUnpublishManyDocsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DocManyWhereInput>;
};


export type MutationUnpublishManyEventsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventManyWhereInput>;
};


export type MutationUnpublishManyEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventManyWhereInput>;
};


export type MutationUnpublishManyFilmsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FilmManyWhereInput>;
};


export type MutationUnpublishManyFilmsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FilmManyWhereInput>;
};


export type MutationUnpublishManyJoin_UssArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Join_UsManyWhereInput>;
};


export type MutationUnpublishManyJoin_UssConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Join_UsManyWhereInput>;
};


export type MutationUnpublishManyPartnersArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PartnerManyWhereInput>;
};


export type MutationUnpublishManyPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PartnerManyWhereInput>;
};


export type MutationUnpublishManyPodcastsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PodcastManyWhereInput>;
};


export type MutationUnpublishManyPodcastsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PodcastManyWhereInput>;
};


export type MutationUnpublishManyRegulationsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RegulationManyWhereInput>;
};


export type MutationUnpublishManyRegulationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<RegulationManyWhereInput>;
};


export type MutationUnpublishManyWorkshopsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<WorkshopManyWhereInput>;
};


export type MutationUnpublishManyWorkshopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<WorkshopManyWhereInput>;
};


export type MutationUnpublishPartnerArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PartnerWhereUniqueInput;
};


export type MutationUnpublishPodcastArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PodcastWhereUniqueInput;
};


export type MutationUnpublishRegulationArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: RegulationWhereUniqueInput;
};


export type MutationUnpublishWorkshopArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: WorkshopWhereUniqueInput;
};


export type MutationUpdateAboutArgs = {
  data: AboutUpdateInput;
  where: AboutWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateDocArgs = {
  data: DocUpdateInput;
  where: DocWhereUniqueInput;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateFilmArgs = {
  data: FilmUpdateInput;
  where: FilmWhereUniqueInput;
};


export type MutationUpdateJoin_UsArgs = {
  data: Join_UsUpdateInput;
  where: Join_UsWhereUniqueInput;
};


export type MutationUpdateManyAboutsArgs = {
  data: AboutUpdateManyInput;
  where?: InputMaybe<AboutManyWhereInput>;
};


export type MutationUpdateManyAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AboutUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AboutManyWhereInput>;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyDocsArgs = {
  data: DocUpdateManyInput;
  where?: InputMaybe<DocManyWhereInput>;
};


export type MutationUpdateManyDocsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: DocUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DocManyWhereInput>;
};


export type MutationUpdateManyEventsArgs = {
  data: EventUpdateManyInput;
  where?: InputMaybe<EventManyWhereInput>;
};


export type MutationUpdateManyEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: EventUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventManyWhereInput>;
};


export type MutationUpdateManyFilmsArgs = {
  data: FilmUpdateManyInput;
  where?: InputMaybe<FilmManyWhereInput>;
};


export type MutationUpdateManyFilmsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: FilmUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FilmManyWhereInput>;
};


export type MutationUpdateManyJoin_UssArgs = {
  data: Join_UsUpdateManyInput;
  where?: InputMaybe<Join_UsManyWhereInput>;
};


export type MutationUpdateManyJoin_UssConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: Join_UsUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Join_UsManyWhereInput>;
};


export type MutationUpdateManyPartnersArgs = {
  data: PartnerUpdateManyInput;
  where?: InputMaybe<PartnerManyWhereInput>;
};


export type MutationUpdateManyPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PartnerUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PartnerManyWhereInput>;
};


export type MutationUpdateManyPodcastsArgs = {
  data: PodcastUpdateManyInput;
  where?: InputMaybe<PodcastManyWhereInput>;
};


export type MutationUpdateManyPodcastsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PodcastUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PodcastManyWhereInput>;
};


export type MutationUpdateManyRegulationsArgs = {
  data: RegulationUpdateManyInput;
  where?: InputMaybe<RegulationManyWhereInput>;
};


export type MutationUpdateManyRegulationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: RegulationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RegulationManyWhereInput>;
};


export type MutationUpdateManyWorkshopsArgs = {
  data: WorkshopUpdateManyInput;
  where?: InputMaybe<WorkshopManyWhereInput>;
};


export type MutationUpdateManyWorkshopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: WorkshopUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<WorkshopManyWhereInput>;
};


export type MutationUpdatePartnerArgs = {
  data: PartnerUpdateInput;
  where: PartnerWhereUniqueInput;
};


export type MutationUpdatePodcastArgs = {
  data: PodcastUpdateInput;
  where: PodcastWhereUniqueInput;
};


export type MutationUpdateRegulationArgs = {
  data: RegulationUpdateInput;
  where: RegulationWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateWorkshopArgs = {
  data: WorkshopUpdateInput;
  where: WorkshopWhereUniqueInput;
};


export type MutationUpsertAboutArgs = {
  upsert: AboutUpsertInput;
  where: AboutWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertDocArgs = {
  upsert: DocUpsertInput;
  where: DocWhereUniqueInput;
};


export type MutationUpsertEventArgs = {
  upsert: EventUpsertInput;
  where: EventWhereUniqueInput;
};


export type MutationUpsertFilmArgs = {
  upsert: FilmUpsertInput;
  where: FilmWhereUniqueInput;
};


export type MutationUpsertJoin_UsArgs = {
  upsert: Join_UsUpsertInput;
  where: Join_UsWhereUniqueInput;
};


export type MutationUpsertPartnerArgs = {
  upsert: PartnerUpsertInput;
  where: PartnerWhereUniqueInput;
};


export type MutationUpsertPodcastArgs = {
  upsert: PodcastUpsertInput;
  where: PodcastWhereUniqueInput;
};


export type MutationUpsertRegulationArgs = {
  upsert: RegulationUpsertInput;
  where: RegulationWhereUniqueInput;
};


export type MutationUpsertWorkshopArgs = {
  upsert: WorkshopUpsertInput;
  where: WorkshopWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Partner = Entity & Node & {
  __typename?: 'Partner';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: RichText;
  /** Get the document in other stages */
  documentInStages: Array<Partner>;
  /** List of Partner versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Partner>;
  logos: Array<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PartnerCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PartnerCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PartnerDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PartnerHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PartnerLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type PartnerLogosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type PartnerPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PartnerPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PartnerScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PartnerUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PartnerUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PartnerConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PartnerWhereUniqueInput;
};

/** A connection to a list of items. */
export type PartnerConnection = {
  __typename?: 'PartnerConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PartnerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PartnerCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** description input for default locale (en) */
  description: Scalars['RichTextAST']['input'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PartnerCreateLocalizationsInput>;
  logos: AssetCreateManyInlineInput;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PartnerCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['RichTextAST']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PartnerCreateLocalizationInput = {
  /** Localization input */
  data: PartnerCreateLocalizationDataInput;
  locale: Locale;
};

export type PartnerCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PartnerCreateLocalizationInput>>;
};

export type PartnerCreateManyInlineInput = {
  /** Connect multiple existing Partner documents */
  connect?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  /** Create and connect multiple existing Partner documents */
  create?: InputMaybe<Array<PartnerCreateInput>>;
};

export type PartnerCreateOneInlineInput = {
  /** Connect one existing Partner document */
  connect?: InputMaybe<PartnerWhereUniqueInput>;
  /** Create and connect one Partner document */
  create?: InputMaybe<PartnerCreateInput>;
};

/** An edge in a connection. */
export type PartnerEdge = {
  __typename?: 'PartnerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Partner;
};

/** Identifies documents */
export type PartnerManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PartnerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PartnerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PartnerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PartnerWhereStageInput>;
  documentInStages_none?: InputMaybe<PartnerWhereStageInput>;
  documentInStages_some?: InputMaybe<PartnerWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logos_every?: InputMaybe<AssetWhereInput>;
  logos_none?: InputMaybe<AssetWhereInput>;
  logos_some?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PartnerOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PartnerUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<PartnerUpdateLocalizationsInput>;
  logos?: InputMaybe<AssetUpdateManyInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerUpdateLocalizationInput = {
  data: PartnerUpdateLocalizationDataInput;
  locale: Locale;
};

export type PartnerUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PartnerCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PartnerUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PartnerUpsertLocalizationInput>>;
};

export type PartnerUpdateManyInlineInput = {
  /** Connect multiple existing Partner documents */
  connect?: InputMaybe<Array<PartnerConnectInput>>;
  /** Create and connect multiple Partner documents */
  create?: InputMaybe<Array<PartnerCreateInput>>;
  /** Delete multiple Partner documents */
  delete?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  /** Disconnect multiple Partner documents */
  disconnect?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Partner documents */
  set?: InputMaybe<Array<PartnerWhereUniqueInput>>;
  /** Update multiple Partner documents */
  update?: InputMaybe<Array<PartnerUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Partner documents */
  upsert?: InputMaybe<Array<PartnerUpsertWithNestedWhereUniqueInput>>;
};

export type PartnerUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PartnerUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerUpdateManyLocalizationInput = {
  data: PartnerUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PartnerUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PartnerUpdateManyLocalizationInput>>;
};

export type PartnerUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PartnerUpdateManyInput;
  /** Document search */
  where: PartnerWhereInput;
};

export type PartnerUpdateOneInlineInput = {
  /** Connect existing Partner document */
  connect?: InputMaybe<PartnerWhereUniqueInput>;
  /** Create and connect one Partner document */
  create?: InputMaybe<PartnerCreateInput>;
  /** Delete currently connected Partner document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Partner document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Partner document */
  update?: InputMaybe<PartnerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Partner document */
  upsert?: InputMaybe<PartnerUpsertWithNestedWhereUniqueInput>;
};

export type PartnerUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PartnerUpdateInput;
  /** Unique document search */
  where: PartnerWhereUniqueInput;
};

export type PartnerUpsertInput = {
  /** Create document if it didn't exist */
  create: PartnerCreateInput;
  /** Update document if it exists */
  update: PartnerUpdateInput;
};

export type PartnerUpsertLocalizationInput = {
  create: PartnerCreateLocalizationDataInput;
  locale: Locale;
  update: PartnerUpdateLocalizationDataInput;
};

export type PartnerUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PartnerUpsertInput;
  /** Unique document search */
  where: PartnerWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PartnerWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PartnerWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PartnerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PartnerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PartnerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PartnerWhereStageInput>;
  documentInStages_none?: InputMaybe<PartnerWhereStageInput>;
  documentInStages_some?: InputMaybe<PartnerWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  logos_every?: InputMaybe<AssetWhereInput>;
  logos_none?: InputMaybe<AssetWhereInput>;
  logos_some?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PartnerWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PartnerWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PartnerWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PartnerWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PartnerWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Partner record uniquely */
export type PartnerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Person = Entity & {
  __typename?: 'Person';
  gender?: Maybe<Gender>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  linkedIn?: Maybe<Scalars['String']['output']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Person>;
  name: Scalars['String']['output'];
  photo?: Maybe<Asset>;
  position: Array<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** System updatedAt field */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PersonLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type PersonPhotoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type PersonUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PersonConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PersonWhereUniqueInput;
};

/** A connection to a list of items. */
export type PersonConnection = {
  __typename?: 'PersonConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PersonEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PersonCreateInput = {
  gender?: InputMaybe<Gender>;
  linkedIn?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PersonCreateLocalizationsInput>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<AssetCreateOneInlineInput>;
  /** position input for default locale (en) */
  position?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PersonCreateLocalizationDataInput = {
  position?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PersonCreateLocalizationInput = {
  /** Localization input */
  data: PersonCreateLocalizationDataInput;
  locale: Locale;
};

export type PersonCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PersonCreateLocalizationInput>>;
};

export type PersonCreateManyInlineInput = {
  /** Create and connect multiple existing Person documents */
  create?: InputMaybe<Array<PersonCreateInput>>;
};

export type PersonCreateOneInlineInput = {
  /** Create and connect one Person document */
  create?: InputMaybe<PersonCreateInput>;
};

export type PersonCreateWithPositionInput = {
  /** Document to create */
  data: PersonCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PersonEdge = {
  __typename?: 'PersonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Person;
};

/** Identifies documents */
export type PersonManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  /** All values that are contained in given list. */
  gender_in?: InputMaybe<Array<InputMaybe<Gender>>>;
  /** Any other value that exists and is not equal to the given value. */
  gender_not?: InputMaybe<Gender>;
  /** All values that are not contained in given list. */
  gender_not_in?: InputMaybe<Array<InputMaybe<Gender>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  linkedIn?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  linkedIn_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  linkedIn_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  linkedIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  linkedIn_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  linkedIn_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  linkedIn_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  linkedIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  linkedIn_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  linkedIn_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<AssetWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum PersonOrderByInput {
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkedInAsc = 'linkedIn_ASC',
  LinkedInDesc = 'linkedIn_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PersonParent = Event | Workshop;

export type PersonParentConnectInput = {
  Event?: InputMaybe<EventConnectInput>;
  Workshop?: InputMaybe<WorkshopConnectInput>;
};

export type PersonParentCreateInput = {
  Event?: InputMaybe<EventCreateInput>;
  Workshop?: InputMaybe<WorkshopCreateInput>;
};

export type PersonParentCreateManyInlineInput = {
  /** Connect multiple existing PersonParent documents */
  connect?: InputMaybe<Array<PersonParentWhereUniqueInput>>;
  /** Create and connect multiple existing PersonParent documents */
  create?: InputMaybe<Array<PersonParentCreateInput>>;
};

export type PersonParentCreateOneInlineInput = {
  /** Connect one existing PersonParent document */
  connect?: InputMaybe<PersonParentWhereUniqueInput>;
  /** Create and connect one PersonParent document */
  create?: InputMaybe<PersonParentCreateInput>;
};

export type PersonParentUpdateInput = {
  Event?: InputMaybe<EventUpdateInput>;
  Workshop?: InputMaybe<WorkshopUpdateInput>;
};

export type PersonParentUpdateManyInlineInput = {
  /** Connect multiple existing PersonParent documents */
  connect?: InputMaybe<Array<PersonParentConnectInput>>;
  /** Create and connect multiple PersonParent documents */
  create?: InputMaybe<Array<PersonParentCreateInput>>;
  /** Delete multiple PersonParent documents */
  delete?: InputMaybe<Array<PersonParentWhereUniqueInput>>;
  /** Disconnect multiple PersonParent documents */
  disconnect?: InputMaybe<Array<PersonParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PersonParent documents */
  set?: InputMaybe<Array<PersonParentWhereUniqueInput>>;
  /** Update multiple PersonParent documents */
  update?: InputMaybe<Array<PersonParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PersonParent documents */
  upsert?: InputMaybe<Array<PersonParentUpsertWithNestedWhereUniqueInput>>;
};

export type PersonParentUpdateManyWithNestedWhereInput = {
  Event?: InputMaybe<EventUpdateManyWithNestedWhereInput>;
  Workshop?: InputMaybe<WorkshopUpdateManyWithNestedWhereInput>;
};

export type PersonParentUpdateOneInlineInput = {
  /** Connect existing PersonParent document */
  connect?: InputMaybe<PersonParentWhereUniqueInput>;
  /** Create and connect one PersonParent document */
  create?: InputMaybe<PersonParentCreateInput>;
  /** Delete currently connected PersonParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PersonParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PersonParent document */
  update?: InputMaybe<PersonParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PersonParent document */
  upsert?: InputMaybe<PersonParentUpsertWithNestedWhereUniqueInput>;
};

export type PersonParentUpdateWithNestedWhereUniqueInput = {
  Event?: InputMaybe<EventUpdateWithNestedWhereUniqueInput>;
  Workshop?: InputMaybe<WorkshopUpdateWithNestedWhereUniqueInput>;
};

export type PersonParentUpsertWithNestedWhereUniqueInput = {
  Event?: InputMaybe<EventUpsertWithNestedWhereUniqueInput>;
  Workshop?: InputMaybe<WorkshopUpsertWithNestedWhereUniqueInput>;
};

export type PersonParentWhereInput = {
  Event?: InputMaybe<EventWhereInput>;
  Workshop?: InputMaybe<WorkshopWhereInput>;
};

export type PersonParentWhereUniqueInput = {
  Event?: InputMaybe<EventWhereUniqueInput>;
  Workshop?: InputMaybe<WorkshopWhereUniqueInput>;
};

export type PersonUpdateInput = {
  gender?: InputMaybe<Gender>;
  linkedIn?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<PersonUpdateLocalizationsInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<AssetUpdateOneInlineInput>;
  /** position input for default locale (en) */
  position?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PersonUpdateLocalizationDataInput = {
  position?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PersonUpdateLocalizationInput = {
  data: PersonUpdateLocalizationDataInput;
  locale: Locale;
};

export type PersonUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PersonCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PersonUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PersonUpsertLocalizationInput>>;
};

export type PersonUpdateManyInlineInput = {
  /** Create and connect multiple Person component instances */
  create?: InputMaybe<Array<PersonCreateWithPositionInput>>;
  /** Delete multiple Person documents */
  delete?: InputMaybe<Array<PersonWhereUniqueInput>>;
  /** Update multiple Person component instances */
  update?: InputMaybe<Array<PersonUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Person component instances */
  upsert?: InputMaybe<Array<PersonUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PersonUpdateManyInput = {
  gender?: InputMaybe<Gender>;
  linkedIn?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PersonUpdateManyLocalizationsInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** position input for default locale (en) */
  position?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PersonUpdateManyLocalizationDataInput = {
  position?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PersonUpdateManyLocalizationInput = {
  data: PersonUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PersonUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PersonUpdateManyLocalizationInput>>;
};

export type PersonUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PersonUpdateManyInput;
  /** Document search */
  where: PersonWhereInput;
};

export type PersonUpdateOneInlineInput = {
  /** Create and connect one Person document */
  create?: InputMaybe<PersonCreateInput>;
  /** Delete currently connected Person document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Person document */
  update?: InputMaybe<PersonUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Person document */
  upsert?: InputMaybe<PersonUpsertWithNestedWhereUniqueInput>;
};

export type PersonUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<PersonUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PersonWhereUniqueInput;
};

export type PersonUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PersonUpdateInput;
  /** Unique document search */
  where: PersonWhereUniqueInput;
};

export type PersonUpsertInput = {
  /** Create document if it didn't exist */
  create: PersonCreateInput;
  /** Update document if it exists */
  update: PersonUpdateInput;
};

export type PersonUpsertLocalizationInput = {
  create: PersonCreateLocalizationDataInput;
  locale: Locale;
  update: PersonUpdateLocalizationDataInput;
};

export type PersonUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<PersonUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PersonWhereUniqueInput;
};

export type PersonUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PersonUpsertInput;
  /** Unique document search */
  where: PersonWhereUniqueInput;
};

/** Identifies documents */
export type PersonWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PersonWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PersonWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  /** All values that are contained in given list. */
  gender_in?: InputMaybe<Array<InputMaybe<Gender>>>;
  /** Any other value that exists and is not equal to the given value. */
  gender_not?: InputMaybe<Gender>;
  /** All values that are not contained in given list. */
  gender_not_in?: InputMaybe<Array<InputMaybe<Gender>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  linkedIn?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  linkedIn_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  linkedIn_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  linkedIn_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  linkedIn_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  linkedIn_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  linkedIn_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  linkedIn_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  linkedIn_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  linkedIn_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<AssetWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  position?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  position_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  position_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  position_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  position_not?: InputMaybe<Array<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** References Person record uniquely */
export type PersonWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Podcast = Entity & Node & {
  __typename?: 'Podcast';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<Podcast>;
  /** List of Podcast versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  links: Array<Scalars['String']['output']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Podcast>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PodcastCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PodcastCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PodcastDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PodcastHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PodcastLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type PodcastPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PodcastPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PodcastScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PodcastUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PodcastUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PodcastConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PodcastWhereUniqueInput;
};

/** A connection to a list of items. */
export type PodcastConnection = {
  __typename?: 'PodcastConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PodcastEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PodcastCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PodcastCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PodcastCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PodcastCreateLocalizationInput = {
  /** Localization input */
  data: PodcastCreateLocalizationDataInput;
  locale: Locale;
};

export type PodcastCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PodcastCreateLocalizationInput>>;
};

export type PodcastCreateManyInlineInput = {
  /** Connect multiple existing Podcast documents */
  connect?: InputMaybe<Array<PodcastWhereUniqueInput>>;
  /** Create and connect multiple existing Podcast documents */
  create?: InputMaybe<Array<PodcastCreateInput>>;
};

export type PodcastCreateOneInlineInput = {
  /** Connect one existing Podcast document */
  connect?: InputMaybe<PodcastWhereUniqueInput>;
  /** Create and connect one Podcast document */
  create?: InputMaybe<PodcastCreateInput>;
};

/** An edge in a connection. */
export type PodcastEdge = {
  __typename?: 'PodcastEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Podcast;
};

/** Identifies documents */
export type PodcastManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PodcastWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PodcastWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PodcastWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PodcastWhereStageInput>;
  documentInStages_none?: InputMaybe<PodcastWhereStageInput>;
  documentInStages_some?: InputMaybe<PodcastWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  links_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  links_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  links_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  links_not?: InputMaybe<Array<Scalars['String']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PodcastOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinksAsc = 'links_ASC',
  LinksDesc = 'links_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PodcastUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Manage document localizations */
  localizations?: InputMaybe<PodcastUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PodcastUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PodcastUpdateLocalizationInput = {
  data: PodcastUpdateLocalizationDataInput;
  locale: Locale;
};

export type PodcastUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PodcastCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PodcastUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PodcastUpsertLocalizationInput>>;
};

export type PodcastUpdateManyInlineInput = {
  /** Connect multiple existing Podcast documents */
  connect?: InputMaybe<Array<PodcastConnectInput>>;
  /** Create and connect multiple Podcast documents */
  create?: InputMaybe<Array<PodcastCreateInput>>;
  /** Delete multiple Podcast documents */
  delete?: InputMaybe<Array<PodcastWhereUniqueInput>>;
  /** Disconnect multiple Podcast documents */
  disconnect?: InputMaybe<Array<PodcastWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Podcast documents */
  set?: InputMaybe<Array<PodcastWhereUniqueInput>>;
  /** Update multiple Podcast documents */
  update?: InputMaybe<Array<PodcastUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Podcast documents */
  upsert?: InputMaybe<Array<PodcastUpsertWithNestedWhereUniqueInput>>;
};

export type PodcastUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PodcastUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PodcastUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PodcastUpdateManyLocalizationInput = {
  data: PodcastUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PodcastUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PodcastUpdateManyLocalizationInput>>;
};

export type PodcastUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PodcastUpdateManyInput;
  /** Document search */
  where: PodcastWhereInput;
};

export type PodcastUpdateOneInlineInput = {
  /** Connect existing Podcast document */
  connect?: InputMaybe<PodcastWhereUniqueInput>;
  /** Create and connect one Podcast document */
  create?: InputMaybe<PodcastCreateInput>;
  /** Delete currently connected Podcast document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Podcast document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Podcast document */
  update?: InputMaybe<PodcastUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Podcast document */
  upsert?: InputMaybe<PodcastUpsertWithNestedWhereUniqueInput>;
};

export type PodcastUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PodcastUpdateInput;
  /** Unique document search */
  where: PodcastWhereUniqueInput;
};

export type PodcastUpsertInput = {
  /** Create document if it didn't exist */
  create: PodcastCreateInput;
  /** Update document if it exists */
  update: PodcastUpdateInput;
};

export type PodcastUpsertLocalizationInput = {
  create: PodcastCreateLocalizationDataInput;
  locale: Locale;
  update: PodcastUpdateLocalizationDataInput;
};

export type PodcastUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PodcastUpsertInput;
  /** Unique document search */
  where: PodcastWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PodcastWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PodcastWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PodcastWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PodcastWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PodcastWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PodcastWhereStageInput>;
  documentInStages_none?: InputMaybe<PodcastWhereStageInput>;
  documentInStages_some?: InputMaybe<PodcastWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  links?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  links_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  links_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  links_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  links_not?: InputMaybe<Array<Scalars['String']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PodcastWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PodcastWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PodcastWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PodcastWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PodcastWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Podcast record uniquely */
export type PodcastWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single about */
  about?: Maybe<About>;
  /** Retrieve document version */
  aboutVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple abouts */
  abouts: Array<About>;
  /** Retrieve multiple abouts using the Relay connection interface */
  aboutsConnection: AboutConnection;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single doc */
  doc?: Maybe<Doc>;
  /** Retrieve document version */
  docVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple docs */
  docs: Array<Doc>;
  /** Retrieve multiple docs using the Relay connection interface */
  docsConnection: DocConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single event */
  event?: Maybe<Event>;
  /** Retrieve document version */
  eventVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple events */
  events: Array<Event>;
  /** Retrieve multiple events using the Relay connection interface */
  eventsConnection: EventConnection;
  /** Retrieve a single film */
  film?: Maybe<Film>;
  /** Retrieve document version */
  filmVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple films */
  films: Array<Film>;
  /** Retrieve multiple films using the Relay connection interface */
  filmsConnection: FilmConnection;
  /** Retrieve a single join_us */
  join_us?: Maybe<Join_Us>;
  /** Retrieve document version */
  join_usVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple join_uss */
  join_uss: Array<Join_Us>;
  /** Retrieve multiple join_uss using the Relay connection interface */
  join_ussConnection: Join_UsConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single partner */
  partner?: Maybe<Partner>;
  /** Retrieve document version */
  partnerVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple partners */
  partners: Array<Partner>;
  /** Retrieve multiple partners using the Relay connection interface */
  partnersConnection: PartnerConnection;
  /** Retrieve a single podcast */
  podcast?: Maybe<Podcast>;
  /** Retrieve document version */
  podcastVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple podcasts */
  podcasts: Array<Podcast>;
  /** Retrieve multiple podcasts using the Relay connection interface */
  podcastsConnection: PodcastConnection;
  /** Retrieve a single regulation */
  regulation?: Maybe<Regulation>;
  /** Retrieve document version */
  regulationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple regulations */
  regulations: Array<Regulation>;
  /** Retrieve multiple regulations using the Relay connection interface */
  regulationsConnection: RegulationConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve a single workshop */
  workshop?: Maybe<Workshop>;
  /** Retrieve document version */
  workshopVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple workshops */
  workshops: Array<Workshop>;
  /** Retrieve multiple workshops using the Relay connection interface */
  workshopsConnection: WorkshopConnection;
};


export type QueryAboutArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AboutWhereUniqueInput;
};


export type QueryAboutVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAboutsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AboutOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AboutWhereInput>;
};


export type QueryAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AboutOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AboutWhereInput>;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryDocArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: DocWhereUniqueInput;
};


export type QueryDocVersionArgs = {
  where: VersionWhereInput;
};


export type QueryDocsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<DocOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<DocWhereInput>;
};


export type QueryDocsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<DocOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<DocWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryEventArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: EventWhereUniqueInput;
};


export type QueryEventVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFilmArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FilmWhereUniqueInput;
};


export type QueryFilmVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFilmsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FilmOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<FilmWhereInput>;
};


export type QueryFilmsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FilmOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<FilmWhereInput>;
};


export type QueryJoin_UsArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: Join_UsWhereUniqueInput;
};


export type QueryJoin_UsVersionArgs = {
  where: VersionWhereInput;
};


export type QueryJoin_UssArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<Join_UsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<Join_UsWhereInput>;
};


export type QueryJoin_UssConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<Join_UsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<Join_UsWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPartnerArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PartnerWhereUniqueInput;
};


export type QueryPartnerVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPartnersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PartnerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PartnerWhereInput>;
};


export type QueryPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PartnerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PartnerWhereInput>;
};


export type QueryPodcastArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PodcastWhereUniqueInput;
};


export type QueryPodcastVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPodcastsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PodcastOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PodcastWhereInput>;
};


export type QueryPodcastsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PodcastOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PodcastWhereInput>;
};


export type QueryRegulationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: RegulationWhereUniqueInput;
};


export type QueryRegulationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryRegulationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<RegulationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<RegulationWhereInput>;
};


export type QueryRegulationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<RegulationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<RegulationWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryWorkshopArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: WorkshopWhereUniqueInput;
};


export type QueryWorkshopVersionArgs = {
  where: VersionWhereInput;
};


export type QueryWorkshopsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<WorkshopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<WorkshopWhereInput>;
};


export type QueryWorkshopsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<WorkshopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<WorkshopWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

export type Regulation = Entity & Node & {
  __typename?: 'Regulation';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Regulation>;
  /** List of Regulation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Regulation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  regulamin?: Maybe<RichText>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type RegulationCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type RegulationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type RegulationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type RegulationHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type RegulationLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type RegulationPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type RegulationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type RegulationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type RegulationUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type RegulationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type RegulationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: RegulationWhereUniqueInput;
};

/** A connection to a list of items. */
export type RegulationConnection = {
  __typename?: 'RegulationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<RegulationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type RegulationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<RegulationCreateLocalizationsInput>;
  /** regulamin input for default locale (en) */
  regulamin?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RegulationCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  regulamin?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RegulationCreateLocalizationInput = {
  /** Localization input */
  data: RegulationCreateLocalizationDataInput;
  locale: Locale;
};

export type RegulationCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<RegulationCreateLocalizationInput>>;
};

export type RegulationCreateManyInlineInput = {
  /** Connect multiple existing Regulation documents */
  connect?: InputMaybe<Array<RegulationWhereUniqueInput>>;
  /** Create and connect multiple existing Regulation documents */
  create?: InputMaybe<Array<RegulationCreateInput>>;
};

export type RegulationCreateOneInlineInput = {
  /** Connect one existing Regulation document */
  connect?: InputMaybe<RegulationWhereUniqueInput>;
  /** Create and connect one Regulation document */
  create?: InputMaybe<RegulationCreateInput>;
};

/** An edge in a connection. */
export type RegulationEdge = {
  __typename?: 'RegulationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Regulation;
};

/** Identifies documents */
export type RegulationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RegulationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RegulationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RegulationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<RegulationWhereStageInput>;
  documentInStages_none?: InputMaybe<RegulationWhereStageInput>;
  documentInStages_some?: InputMaybe<RegulationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum RegulationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RegulationUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<RegulationUpdateLocalizationsInput>;
  /** regulamin input for default locale (en) */
  regulamin?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RegulationUpdateLocalizationDataInput = {
  regulamin?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RegulationUpdateLocalizationInput = {
  data: RegulationUpdateLocalizationDataInput;
  locale: Locale;
};

export type RegulationUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<RegulationCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<RegulationUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<RegulationUpsertLocalizationInput>>;
};

export type RegulationUpdateManyInlineInput = {
  /** Connect multiple existing Regulation documents */
  connect?: InputMaybe<Array<RegulationConnectInput>>;
  /** Create and connect multiple Regulation documents */
  create?: InputMaybe<Array<RegulationCreateInput>>;
  /** Delete multiple Regulation documents */
  delete?: InputMaybe<Array<RegulationWhereUniqueInput>>;
  /** Disconnect multiple Regulation documents */
  disconnect?: InputMaybe<Array<RegulationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Regulation documents */
  set?: InputMaybe<Array<RegulationWhereUniqueInput>>;
  /** Update multiple Regulation documents */
  update?: InputMaybe<Array<RegulationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Regulation documents */
  upsert?: InputMaybe<Array<RegulationUpsertWithNestedWhereUniqueInput>>;
};

export type RegulationUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<RegulationUpdateManyLocalizationsInput>;
  /** regulamin input for default locale (en) */
  regulamin?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RegulationUpdateManyLocalizationDataInput = {
  regulamin?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RegulationUpdateManyLocalizationInput = {
  data: RegulationUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type RegulationUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<RegulationUpdateManyLocalizationInput>>;
};

export type RegulationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: RegulationUpdateManyInput;
  /** Document search */
  where: RegulationWhereInput;
};

export type RegulationUpdateOneInlineInput = {
  /** Connect existing Regulation document */
  connect?: InputMaybe<RegulationWhereUniqueInput>;
  /** Create and connect one Regulation document */
  create?: InputMaybe<RegulationCreateInput>;
  /** Delete currently connected Regulation document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Regulation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Regulation document */
  update?: InputMaybe<RegulationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Regulation document */
  upsert?: InputMaybe<RegulationUpsertWithNestedWhereUniqueInput>;
};

export type RegulationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RegulationUpdateInput;
  /** Unique document search */
  where: RegulationWhereUniqueInput;
};

export type RegulationUpsertInput = {
  /** Create document if it didn't exist */
  create: RegulationCreateInput;
  /** Update document if it exists */
  update: RegulationUpdateInput;
};

export type RegulationUpsertLocalizationInput = {
  create: RegulationCreateLocalizationDataInput;
  locale: Locale;
  update: RegulationUpdateLocalizationDataInput;
};

export type RegulationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RegulationUpsertInput;
  /** Unique document search */
  where: RegulationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type RegulationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type RegulationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RegulationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RegulationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RegulationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<RegulationWhereStageInput>;
  documentInStages_none?: InputMaybe<RegulationWhereStageInput>;
  documentInStages_some?: InputMaybe<RegulationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type RegulationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RegulationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RegulationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RegulationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<RegulationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Regulation record uniquely */
export type RegulationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = About | Asset | Doc | Event | Film | Join_Us | Partner | Podcast | Regulation | Workshop;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export type Workshop = Entity & Node & {
  __typename?: 'Workshop';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<Workshop>;
  gallery: Array<Asset>;
  /** List of Workshop versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  lead: Array<WorkshopleadUnion>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Workshop>;
  location?: Maybe<Scalars['String']['output']>;
  logo: Array<Asset>;
  /** Zaznacz jeśli to najnowsza edycja */
  new?: Maybe<Scalars['Boolean']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  signUp?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type WorkshopCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type WorkshopCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type WorkshopDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type WorkshopGalleryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type WorkshopHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type WorkshopLeadArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type WorkshopLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type WorkshopLogoArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type WorkshopPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type WorkshopPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type WorkshopScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type WorkshopUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type WorkshopUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type WorkshopConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: WorkshopWhereUniqueInput;
};

/** A connection to a list of items. */
export type WorkshopConnection = {
  __typename?: 'WorkshopConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<WorkshopEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type WorkshopCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  gallery?: InputMaybe<AssetCreateManyInlineInput>;
  lead?: InputMaybe<WorkshopleadUnionCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<WorkshopCreateLocalizationsInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<AssetCreateManyInlineInput>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  signUp?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type WorkshopCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type WorkshopCreateLocalizationInput = {
  /** Localization input */
  data: WorkshopCreateLocalizationDataInput;
  locale: Locale;
};

export type WorkshopCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<WorkshopCreateLocalizationInput>>;
};

export type WorkshopCreateManyInlineInput = {
  /** Connect multiple existing Workshop documents */
  connect?: InputMaybe<Array<WorkshopWhereUniqueInput>>;
  /** Create and connect multiple existing Workshop documents */
  create?: InputMaybe<Array<WorkshopCreateInput>>;
};

export type WorkshopCreateOneInlineInput = {
  /** Connect one existing Workshop document */
  connect?: InputMaybe<WorkshopWhereUniqueInput>;
  /** Create and connect one Workshop document */
  create?: InputMaybe<WorkshopCreateInput>;
};

/** An edge in a connection. */
export type WorkshopEdge = {
  __typename?: 'WorkshopEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Workshop;
};

/** Identifies documents */
export type WorkshopManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WorkshopWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WorkshopWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WorkshopWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<WorkshopWhereStageInput>;
  documentInStages_none?: InputMaybe<WorkshopWhereStageInput>;
  documentInStages_some?: InputMaybe<WorkshopWhereStageInput>;
  gallery_every?: InputMaybe<AssetWhereInput>;
  gallery_none?: InputMaybe<AssetWhereInput>;
  gallery_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty. */
  lead_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  lead_some?: InputMaybe<WorkshopleadUnionWhereInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  logo_every?: InputMaybe<AssetWhereInput>;
  logo_none?: InputMaybe<AssetWhereInput>;
  logo_some?: InputMaybe<AssetWhereInput>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  new_not?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  signUp?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  signUp_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  signUp_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  signUp_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  signUp_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  signUp_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  signUp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  signUp_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  signUp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  signUp_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum WorkshopOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NewAsc = 'new_ASC',
  NewDesc = 'new_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SignUpAsc = 'signUp_ASC',
  SignUpDesc = 'signUp_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type WorkshopUpdateInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  gallery?: InputMaybe<AssetUpdateManyInlineInput>;
  lead?: InputMaybe<WorkshopleadUnionUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<WorkshopUpdateLocalizationsInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<AssetUpdateManyInlineInput>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  signUp?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type WorkshopUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type WorkshopUpdateLocalizationInput = {
  data: WorkshopUpdateLocalizationDataInput;
  locale: Locale;
};

export type WorkshopUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<WorkshopCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<WorkshopUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<WorkshopUpsertLocalizationInput>>;
};

export type WorkshopUpdateManyInlineInput = {
  /** Connect multiple existing Workshop documents */
  connect?: InputMaybe<Array<WorkshopConnectInput>>;
  /** Create and connect multiple Workshop documents */
  create?: InputMaybe<Array<WorkshopCreateInput>>;
  /** Delete multiple Workshop documents */
  delete?: InputMaybe<Array<WorkshopWhereUniqueInput>>;
  /** Disconnect multiple Workshop documents */
  disconnect?: InputMaybe<Array<WorkshopWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Workshop documents */
  set?: InputMaybe<Array<WorkshopWhereUniqueInput>>;
  /** Update multiple Workshop documents */
  update?: InputMaybe<Array<WorkshopUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Workshop documents */
  upsert?: InputMaybe<Array<WorkshopUpsertWithNestedWhereUniqueInput>>;
};

export type WorkshopUpdateManyInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<WorkshopUpdateManyLocalizationsInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  signUp?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type WorkshopUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type WorkshopUpdateManyLocalizationInput = {
  data: WorkshopUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type WorkshopUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<WorkshopUpdateManyLocalizationInput>>;
};

export type WorkshopUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WorkshopUpdateManyInput;
  /** Document search */
  where: WorkshopWhereInput;
};

export type WorkshopUpdateOneInlineInput = {
  /** Connect existing Workshop document */
  connect?: InputMaybe<WorkshopWhereUniqueInput>;
  /** Create and connect one Workshop document */
  create?: InputMaybe<WorkshopCreateInput>;
  /** Delete currently connected Workshop document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Workshop document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Workshop document */
  update?: InputMaybe<WorkshopUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Workshop document */
  upsert?: InputMaybe<WorkshopUpsertWithNestedWhereUniqueInput>;
};

export type WorkshopUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WorkshopUpdateInput;
  /** Unique document search */
  where: WorkshopWhereUniqueInput;
};

export type WorkshopUpsertInput = {
  /** Create document if it didn't exist */
  create: WorkshopCreateInput;
  /** Update document if it exists */
  update: WorkshopUpdateInput;
};

export type WorkshopUpsertLocalizationInput = {
  create: WorkshopCreateLocalizationDataInput;
  locale: Locale;
  update: WorkshopUpdateLocalizationDataInput;
};

export type WorkshopUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WorkshopUpsertInput;
  /** Unique document search */
  where: WorkshopWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type WorkshopWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type WorkshopWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WorkshopWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WorkshopWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WorkshopWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  documentInStages_every?: InputMaybe<WorkshopWhereStageInput>;
  documentInStages_none?: InputMaybe<WorkshopWhereStageInput>;
  documentInStages_some?: InputMaybe<WorkshopWhereStageInput>;
  gallery_every?: InputMaybe<AssetWhereInput>;
  gallery_none?: InputMaybe<AssetWhereInput>;
  gallery_some?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty. */
  lead_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  lead_some?: InputMaybe<WorkshopleadUnionWhereInput>;
  location?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>;
  logo_every?: InputMaybe<AssetWhereInput>;
  logo_none?: InputMaybe<AssetWhereInput>;
  logo_some?: InputMaybe<AssetWhereInput>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  new_not?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  signUp?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  signUp_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  signUp_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  signUp_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  signUp_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  signUp_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  signUp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  signUp_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  signUp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  signUp_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type WorkshopWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WorkshopWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WorkshopWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WorkshopWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<WorkshopWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Workshop record uniquely */
export type WorkshopWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type WorkshopleadUnion = Person;

export type WorkshopleadUnionConnectInput = {
  Person?: InputMaybe<PersonConnectInput>;
};

export type WorkshopleadUnionCreateInput = {
  Person?: InputMaybe<PersonCreateInput>;
};

export type WorkshopleadUnionCreateManyInlineInput = {
  /** Create and connect multiple existing WorkshopleadUnion documents */
  create?: InputMaybe<Array<WorkshopleadUnionCreateInput>>;
};

export type WorkshopleadUnionCreateOneInlineInput = {
  /** Create and connect one WorkshopleadUnion document */
  create?: InputMaybe<WorkshopleadUnionCreateInput>;
};

export type WorkshopleadUnionCreateWithPositionInput = {
  Person?: InputMaybe<PersonCreateWithPositionInput>;
};

export type WorkshopleadUnionUpdateInput = {
  Person?: InputMaybe<PersonUpdateInput>;
};

export type WorkshopleadUnionUpdateManyInlineInput = {
  /** Create and connect multiple WorkshopleadUnion component instances */
  create?: InputMaybe<Array<WorkshopleadUnionCreateWithPositionInput>>;
  /** Delete multiple WorkshopleadUnion documents */
  delete?: InputMaybe<Array<WorkshopleadUnionWhereUniqueInput>>;
  /** Update multiple WorkshopleadUnion component instances */
  update?: InputMaybe<Array<WorkshopleadUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple WorkshopleadUnion component instances */
  upsert?: InputMaybe<Array<WorkshopleadUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type WorkshopleadUnionUpdateManyWithNestedWhereInput = {
  Person?: InputMaybe<PersonUpdateManyWithNestedWhereInput>;
};

export type WorkshopleadUnionUpdateOneInlineInput = {
  /** Create and connect one WorkshopleadUnion document */
  create?: InputMaybe<WorkshopleadUnionCreateInput>;
  /** Delete currently connected WorkshopleadUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single WorkshopleadUnion document */
  update?: InputMaybe<WorkshopleadUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single WorkshopleadUnion document */
  upsert?: InputMaybe<WorkshopleadUnionUpsertWithNestedWhereUniqueInput>;
};

export type WorkshopleadUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Person?: InputMaybe<PersonUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type WorkshopleadUnionUpdateWithNestedWhereUniqueInput = {
  Person?: InputMaybe<PersonUpdateWithNestedWhereUniqueInput>;
};

export type WorkshopleadUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Person?: InputMaybe<PersonUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type WorkshopleadUnionUpsertWithNestedWhereUniqueInput = {
  Person?: InputMaybe<PersonUpsertWithNestedWhereUniqueInput>;
};

export type WorkshopleadUnionWhereInput = {
  Person?: InputMaybe<PersonWhereInput>;
};

export type WorkshopleadUnionWhereUniqueInput = {
  Person?: InputMaybe<PersonWhereUniqueInput>;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  DescendantsOf = 'descendants_of',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type DocsQueryQueryVariables = Exact<{
  locale: Locale;
}>;


export type DocsQueryQuery = { __typename?: 'Query', doc?: { __typename?: 'Doc', coockies: { __typename?: 'RichText', raw: any }, private_policy: { __typename?: 'RichText', raw: any }, regulation: { __typename?: 'RichText', raw: any } } | null };

export type EditionQueryQueryVariables = Exact<{
  locale: Locale;
  edition: Scalars['String']['input'];
}>;


export type EditionQueryQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id: string, title: Array<string>, new?: boolean | null, date?: any | null, edition?: string | null, location?: string | null, slug?: string | null, singUpLink?: string | null, lead: Array<{ __typename?: 'Person', id: string, gender?: Gender | null, name: string, position: Array<string>, linkedIn?: string | null, photo?: { __typename?: 'Asset', fileName: string, width?: number | null, height?: number | null, url: string } | null }>, speakers: Array<{ __typename?: 'Person', id: string, name: string, position: Array<string>, linkedIn?: string | null, photo?: { __typename?: 'Asset', fileName: string, width?: number | null, height?: number | null, url: string } | null }>, gallery: Array<{ __typename?: 'Asset', width?: number | null, height?: number | null, url: string, fileName: string }> } | null, assetsConnection: { __typename?: 'AssetConnection', aggregate: { __typename?: 'Aggregate', count: number } } };

export type EventsRoutesQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsRoutesQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, slug?: string | null, edition?: string | null }> };

export type EventGalleryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  first?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
}>;


export type EventGalleryQuery = { __typename?: 'Query', assetsConnection: { __typename?: 'AssetConnection', aggregate: { __typename?: 'Aggregate', count: number }, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, pageSize?: number | null }, edges: Array<{ __typename?: 'AssetEdge', cursor: string, node: { __typename?: 'Asset', id: string, fileName: string, height?: number | null, width?: number | null, url: string } }> } };

export type NewEventQueryQueryVariables = Exact<{
  locale: Locale;
}>;


export type NewEventQueryQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, title: Array<string>, new?: boolean | null, date?: any | null, edition?: string | null, location?: string | null, singUpLink?: string | null, slug?: string | null, lead: Array<{ __typename?: 'Person', id: string, name: string, position: Array<string>, linkedIn?: string | null, photo?: { __typename?: 'Asset', width?: number | null, height?: number | null, url: string } | null }>, speakers: Array<{ __typename?: 'Person', id: string, name: string, position: Array<string>, linkedIn?: string | null, photo?: { __typename?: 'Asset', width?: number | null, height?: number | null, url: string } | null }>, gallery: Array<{ __typename?: 'Asset', width?: number | null, height?: number | null, url: string, fileName: string }> }> };

export type JoinUsQueryQueryVariables = Exact<{
  locale: Locale;
}>;


export type JoinUsQueryQuery = { __typename?: 'Query', join_us?: { __typename?: 'Join_us', facebook_description: { __typename?: 'RichText', raw: any }, linkedin_description: { __typename?: 'RichText', raw: any }, youtube_description: { __typename?: 'RichText', raw: any } } | null };

export type PartnersQueryQueryVariables = Exact<{
  locale: Locale;
}>;


export type PartnersQueryQuery = { __typename?: 'Query', partner?: { __typename?: 'Partner', title?: string | null, description: { __typename?: 'RichText', raw: any }, logos: Array<{ __typename?: 'Asset', id: string, height?: number | null, width?: number | null, url: string, fileName: string }> } | null };

export type PodcastsQueryQueryVariables = Exact<{
  locale: Locale;
}>;


export type PodcastsQueryQuery = { __typename?: 'Query', podcast?: { __typename?: 'Podcast', title?: string | null, links: Array<string>, description?: { __typename?: 'RichText', raw: any } | null } | null };

export type RegulationsQueryQueryVariables = Exact<{
  locale: Locale;
}>;


export type RegulationsQueryQuery = { __typename?: 'Query', regulation?: { __typename?: 'Regulation', title?: string | null, regulamin?: { __typename?: 'RichText', raw: any } | null } | null };

export type WorkshopsQueryQueryVariables = Exact<{
  locale: Locale;
  slug: Scalars['String']['input'];
}>;


export type WorkshopsQueryQuery = { __typename?: 'Query', workshop?: { __typename?: 'Workshop', id: string, title: string, new?: boolean | null, signUp?: string | null, date?: any | null, location?: string | null, slug?: string | null, logo: Array<{ __typename?: 'Asset', width?: number | null, height?: number | null, url: string, fileName: string }>, description?: { __typename?: 'RichText', raw: any, html: string } | null, lead: Array<{ __typename?: 'Person', id: string, name: string, gender?: Gender | null, position: Array<string>, linkedIn?: string | null, photo?: { __typename?: 'Asset', fileName: string, width?: number | null, height?: number | null, url: string } | null }>, gallery: Array<{ __typename?: 'Asset', width?: number | null, height?: number | null, url: string, fileName: string }> } | null, assetsConnection: { __typename?: 'AssetConnection', aggregate: { __typename?: 'Aggregate', count: number } } };

export type WorkshopsRoutesQueryVariables = Exact<{
  locale: Locale;
}>;


export type WorkshopsRoutesQuery = { __typename?: 'Query', workshops: Array<{ __typename?: 'Workshop', id: string, slug?: string | null, title: string }> };

export type AboutQueryQueryVariables = Exact<{
  locale: Locale;
}>;


export type AboutQueryQuery = { __typename?: 'Query', about?: { __typename?: 'About', title: string, description: { __typename?: 'RichText', raw: any }, malgosia_description: { __typename?: 'RichText', raw: any }, malgosia_image: { __typename?: 'Asset', url: string, width?: number | null, height?: number | null, fileName: string } } | null };

export type AssetsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AssetsQueryQuery = { __typename?: 'Query', assets: Array<{ __typename?: 'Asset', id: string, url: string, width?: number | null, height?: number | null, fileName: string }> };

export type FilmQueryQueryVariables = Exact<{
  locale: Locale;
}>;


export type FilmQueryQuery = { __typename?: 'Query', film?: { __typename?: 'Film', title?: string | null, links: Array<string>, description?: { __typename?: 'RichText', raw: any } | null } | null };


export const DocsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DocsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"doc"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"clwchj88i4bkj07upbsdpxkds","block":false}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coockies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"private_policy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"regulation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}}]}}]}}]} as unknown as DocumentNode<DocsQueryQuery, DocsQueryQueryVariables>;
export const EditionQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EditionQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"edition"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"edition"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"new"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"edition"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"singUpLink"}},{"kind":"Field","name":{"kind":"Name","value":"lead"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speakers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assetsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"galleryEvent_every"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"edition"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<EditionQueryQuery, EditionQueryQueryVariables>;
export const EventsRoutesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventsRoutes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"EnumValue","value":"PUBLISHED"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"slug_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"edition"}}]}}]}}]} as unknown as DocumentNode<EventsRoutesQuery, EventsRoutesQueryVariables>;
export const EventGalleryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventGallery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"5"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assetsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"galleryEvent_every"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<EventGalleryQuery, EventGalleryQueryVariables>;
export const NewEventQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewEventQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"new"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"edition"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"singUpLink"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"lead"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"speakers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}}]}}]}}]}}]} as unknown as DocumentNode<NewEventQueryQuery, NewEventQueryQueryVariables>;
export const JoinUsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"JoinUsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"join_us"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"clw7o3sj94j4007usyxtpzp1q","block":false}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facebook_description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkedin_description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"youtube_description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}}]}}]}}]} as unknown as DocumentNode<JoinUsQueryQuery, JoinUsQueryQueryVariables>;
export const PartnersQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PartnersQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"partner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"clw7sout213xu07w5n05dsj1z","block":false}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"EnumValue","value":"en"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}}]}}]}}]}}]} as unknown as DocumentNode<PartnersQueryQuery, PartnersQueryQueryVariables>;
export const PodcastsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PodcastsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"podcast"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"cmc60qvice0n007w6myx03dtt","block":false}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"}}]}}]}}]} as unknown as DocumentNode<PodcastsQueryQuery, PodcastsQueryQueryVariables>;
export const RegulationsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RegulationsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regulation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"cmdh7hcc2osl807uw46bmgvbh","block":false}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"regulamin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}}]}}]}}]} as unknown as DocumentNode<RegulationsQueryQuery, RegulationsQueryQueryVariables>;
export const WorkshopsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WorkshopsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workshop"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"new"}},{"kind":"Field","name":{"kind":"Name","value":"signUp"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"EnumValue","value":"en"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lead"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"linkedIn"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assetsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"galleryWorkshop_every"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<WorkshopsQueryQuery, WorkshopsQueryQueryVariables>;
export const WorkshopsRoutesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WorkshopsRoutes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workshops"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"EnumValue","value":"PUBLISHED"}},{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"createdAt_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<WorkshopsRoutesQuery, WorkshopsRoutesQueryVariables>;
export const AboutQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AboutQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"clw6y1gcx6my207w6oxtppa4c","block":false}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"malgosia_description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"malgosia_image"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}}]}}]}}]}}]} as unknown as DocumentNode<AboutQueryQuery, AboutQueryQueryVariables>;
export const AssetsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AssetsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fileName"},"value":{"kind":"StringValue","value":"attachment.jpeg","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}}]}}]}}]} as unknown as DocumentNode<AssetsQueryQuery, AssetsQueryQueryVariables>;
export const FilmQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FilmQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"film"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"cm3syw0rr3eh907urd5rupbcm","block":false}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"}}]}}]}}]} as unknown as DocumentNode<FilmQueryQuery, FilmQueryQueryVariables>;