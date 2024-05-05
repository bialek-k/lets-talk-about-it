'use client';

import React from 'react';
import { PageTitle } from '../UI/PageTitle';
import { TextHolder } from '../UI/TextHolder';
import { Image } from '@/components/UI/Image';
import { AboutRecord } from '@/graphql/generated';

interface AboutProps {
  data: AboutRecord;
}

export const About = ({ data }: AboutProps) => {
  return (
    <section className=" px-6 md:px-24 ">
      <PageTitle title="o nas" subtitle="Let's Talk About IT" />
      <div className="content md:flex md:gap-24 justify-between">
        <div className="description py-6  ">
          <TextHolder
            structuredText
            text={data.description?.value}
            readMore
            theme="dark"
          />
        </div>
        <div className="person py-6 md:flex md:flex-col md:max-w-lg md:items-center">
          <h2 className="text-4xl font-bold">Małgorzata Rycak</h2>
          <Image image={data.malgosiaImage?.responsiveImage} alt="image" />
          <div className="content py-6">
            <TextHolder structuredText text={data.malgosiaDescription?.value} />
          </div>
        </div>
      </div>
    </section>
  );
};
