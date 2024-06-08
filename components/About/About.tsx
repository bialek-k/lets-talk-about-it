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
import Image from 'next/image';
import Linkedin from '../Linkedin/Linkedin';

export const About = ({ about }: AboutQueryQuery) => {
  const { t } = useTranslation();
  return (
    <section id="about" className="px-6 md:px-24 h-min-screen">
      <PageTitle title={t('aboutUs')} />
      <div className="content md:flex md:gap-24 justify-between ">
        <div className="description  ">
          <p className="text-[24px] font-semibold">Let’s Talk About IT</p>
          <TextHolder
            content={about?.description.raw}
            customClass="mt-1"
            theme="dark"
          />
        </div>
        <div className="person md:flex md:flex-col md:max-w-lg md:items-center">
          <h2 className="text-[24px] font-semibold">Małgorzata Rycak</h2>
          <div className="relative  container mx-auto mt-4 mb-16">
            <div className="absolute inset-6 bg-[#E2FF00] -left-6 -bottom-6 rounded" />
            <div className="h-full aspect-square realitve z-10 ">
              <Image
                alt={'malgorzata_rycak'}
                src={about?.malgosia_image?.url!}
                objectFit="contain"
                layout="fill"
                className=" rounded absolute "
              />

              <Linkedin
                href={'https://www.linkedin.com/in/malgorzata-rycak/'}
                className="absolute z-30 w-6 h-6 bottom-3 right-3"
              />
            </div>
          </div>
          {/* <ImageContainer
            link="https://www.linkedin.com/in/malgorzata-rycak/"
            alt="Małgorzata Rycak"
            image={about?.malgosia_image}
          /> */}
          <div className="content bg-red-40">
            <TextHolder
              content={about?.malgosia_description.raw}
              customClass="mt-2"
              theme="dark"
            />
          </div>
        </div>
      </div>
      <div className=" hidden md:flex justify-center mt-8 py-12">
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
