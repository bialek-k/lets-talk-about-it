'use client';

import React from 'react';

import {
  Image as DatoImage,
  ResponsiveImageType,
  StructuredTextDocument,
} from 'react-datocms';

import { JoinRecord, SocialRecord } from '@/graphql/generated';
import { TextHolder } from '../UI/TextHolder';
import { PageTitle } from '../UI/PageTitle';

interface JoinUsProps {
  social: SocialRecord[];
}

interface ItemProps {
  id: string;
  icon: ResponsiveImageType;
  description: StructuredTextDocument;
}

const JoinUs = ({ social }: JoinUsProps) => {
  return (
    <section
      id="#joinus"
      className=" mx-auto px-6 md:px-24 bg-main-black py-12 flex flex-col items-center"
    >
      <PageTitle
        color="white"
        title="dołącz do naszej
społeczności"
      />
      <div className="cols md:flex md:flex-cols-3 gap-12">
        {social.map((item: any) => {
          return (
            <div
              key={item.id}
              className="itemItem py-6 flex flex-col items-center"
            >
              <div className="icon w-24 mb-12">
                <DatoImage data={item.icon?.responsiveImage} />
              </div>

              <TextHolder
                structuredText
                text={item.description}
                readMore
                theme="light"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default JoinUs;
