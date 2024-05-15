'use client';

import React from 'react';
import { PageTitle } from '../UI/PageTitle';
import { TextHolder } from '../UI/TextHolder';
import { AboutQueryQuery } from '@/graphql/generated';
import { ImageContainer } from '../UI/ImageContainer';

export const About = ({ about }: AboutQueryQuery) => {
  return (
    <section id="about" className="px-6 md:px-24">
      <PageTitle title="o nas" subtitle="Let's Talk About IT" />
      <div className="content md:flex md:gap-24 justify-between">
        <div className="description py-6">
          <TextHolder content={about?.description.raw} readMore theme="dark" />
        </div>
        <div className="person py-6 md:flex md:flex-col md:max-w-lg md:items-center">
          <h2 className="text-4xl font-bold">Małgorzata Rycak</h2>
          <ImageContainer image={about?.malgosia_image} />
          <div className="content py-6">
            <TextHolder content={about?.malgosia_description.raw} />
          </div>
        </div>
      </div>
    </section>
  );
};
