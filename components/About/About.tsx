'use client';

import React from 'react';
import { PageTitle } from '../UI/PageTitle';
import { TextHolder } from '../UI/TextHolder';
import { AboutQueryQuery } from '@/graphql/generated';
import { useTranslation } from 'react-i18next';
import Pattern from '@/IconsSVG/Pattern';
import Image from 'next/image';
import Linkedin from '../Linkedin/Linkedin';

export const About = ({ about }: AboutQueryQuery) => {
  const { t } = useTranslation();
  return (
    <section id="about" className="px-6 md:px-24 h-min-screen pb-20 lg:pb-0">
      <PageTitle small title={t('aboutUs')} />
      <div className="content md:flex md:gap-24 justify-between ">
        <div className="description pt-[10px] md:pt-0">
          <p className="text-[24px] mb-6 font-semibold">Let’s Talk About IT</p>
          <div className="hidden md:flex">
            <TextHolder
              content={about?.description.raw}
              customClass="mt-1"
              theme="dark"
              shortText
            />
          </div>
          <div className="md:hidden">
            <TextHolder
              content={about?.description.raw}
              customClass="mt-0"
              theme="dark"
              readMore
            />
          </div>
        </div>
        <div className="person md:flex md:flex-col mt-10 md:mt-0 md:max-w-lg md:items-center">
          <h2 className="text-[24px] font-semibold">Małgorzata Rycak</h2>
          <div className="relative max-w-[325px] container mx-auto mt-6 mb-16">
            <div className="absolute inset-6 bg-[#E2FF00] -left-6 -bottom-6 rounded-xl" />
            <div className="md:h-full  aspect-square realitve z-10 ">
              <Image
                alt={'malgorzata_rycak'}
                src={about?.malgosia_image?.url!}
                width={about?.malgosia_image?.width ?? 300}
                height={about?.malgosia_image?.height ?? 300}
                priority
                className=" rounded-xl absolute "
              />
              <Linkedin
                shouldAnimate
                href={'https://www.linkedin.com/in/malgorzata-rycak/'}
                className="absolute z-30 w-6 h-6 bottom-3 right-3"
              />
            </div>
          </div>
          <div className="content bg-red-40">
            <TextHolder
              content={about?.malgosia_description.raw}
              customClass="mt-0 lg:mt-1 max-w-[325px]"
              customHight="351px"
              theme="dark"
              readMore
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
