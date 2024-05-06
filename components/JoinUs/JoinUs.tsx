'use client';

import React from 'react';

import { Image as DatoImage } from 'react-datocms';

import { JoinRecord, SocialRecord } from '@/graphql/generated';
import { TextHolder } from '../UI/TextHolder';
import { PageTitle } from '../UI/PageTitle';

interface JoinUsProps {
  data: any;
}

const JoinUs = ({ data }: JoinUsProps) => {
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
        {data.map((social: any) => {
          return (
            <div
              key={social.id}
              className="socialItem py-6 flex flex-col items-center"
            >
              <div className="icon w-24 mb-12">
                <DatoImage data={social.icon?.responsiveImage} />
              </div>

              <TextHolder
                structuredText
                text={social.description}
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
