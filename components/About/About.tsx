'use client';

import React from 'react';
import { PageTitle } from '../UI/PageTitle';
import { TextHolder } from '../UI/TextHolder';
import { AboutQueryQuery } from '@/graphql/generated';
import { ImageContainer } from '../UI/ImageContainer';
import { useTranslation } from 'react-i18next';
import ChevronIcon from '@/IconsSVG/ChevronIcon';
import MainLogoIcon from '@/IconsSVG/MainLogoIcon';
import Pattern from '@/IconsSVG/Pattern';

export const About = ({ about }: AboutQueryQuery) => {
  const { t } = useTranslation();
  return (
    <section id="about" className="px-6 md:px-24">
      <PageTitle title={t('aboutUs')} subtitle="Let's Talk About IT" />
      <div className="content md:flex md:gap-24 justify-between">
        <div className="description py-6">
          <TextHolder content={about?.description.raw} readMore theme="dark" />
        </div>
        <div className="person py-6 md:flex md:flex-col md:max-w-lg md:items-center">
          <h2 className="text-[24px] font-semibold">Małgorzata Rycak</h2>
          <ImageContainer image={about?.malgosia_image} />
          <div className="content py-6">
            <TextHolder content={about?.malgosia_description.raw} readMore />
          </div>
        </div>
      </div>
      <div className=" hidden md:flex justify-center pb-12">
        <div className="flex -mt-4 w-[33px] h-[38px]">
          <Pattern fill="black" />
        </div>
        <h3 className="font-bold text-[64px] text-center leading-5 lg:text-5xl lg:leading-[62px]">
          Join us to rock IT
        </h3>
      </div>
    </section>
  );
};
