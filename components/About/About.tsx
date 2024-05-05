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
    <section className="container mx-auto px-4 ">
      <PageTitle title="o nas" subtitle="Let's Talk About IT" />
      <div className="content  py-6">
        <TextHolder
          structuredText
          text={data.description?.value}
          readMore
          theme="dark"
        />
      </div>
      <div className="person py-6">
        <h2 className="text-4xl font-bold">Małgorzata Rycak</h2>

        <Image image={data.malgosiaImage?.responsiveImage} alt="image" />
        <div className="content py-6">
          <TextHolder structuredText text={data.malgosiaDescription?.value} />
        </div>
      </div>
    </section>
  );
};
