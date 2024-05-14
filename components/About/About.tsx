'use client';

import React from 'react';
import { PageTitle } from '../UI/PageTitle';
import { TextHolder } from '../UI/TextHolder';
import { AboutRecord } from '@/graphql/generated';
import { useTranslation } from 'react-i18next';
import { Image } from '../UI/Image';

interface AboutProps {
  data: {
    description: {
      value: unknown;
    };
    malgosiaDescription: {
      value: unknown;
    };
    malgosiaImage: {
      basename: string;
      responsiveImage: {
        alt: string;
        base64: string;
        bgColor: string;
        title: string;
        aspectRatio: number;
        height: number;
        sizes: string;
        src: string;
        srcSet: string;
        webpSrcSet: string;
        width: number;
      };
    };
  };
}

export const About = ({ data }: AboutProps) => {
  const { t } = useTranslation();
  return (
    <section id="about" className=" px-6 md:px-24 ">
      <PageTitle title={t('aboutUs')} subtitle="Let's Talk About IT" />
      <div className="content md:flex md:gap-24 justify-between">
        <div className="description py-6">
          <TextHolder
            structuredText
            text={data.description?.value}
            readMore
            theme="dark"
          />
        </div>
        <div className="person py-6 md:flex md:flex-col md:max-w-lg md:items-center">
          <h2 className="text-4xl font-bold">Małgorzata Rycak</h2>
          <div className="pt-10">
            <Image
              alt={data.malgosiaImage?.basename ?? ''}
              image={{
                basename: data.malgosiaImage?.basename ?? '',
                responsiveImage: {
                  src: data.malgosiaImage?.responsiveImage?.src ?? '',
                  aspectRatio:
                    data.malgosiaImage?.responsiveImage?.aspectRatio ?? 1,
                  sizes: data.malgosiaImage?.responsiveImage?.sizes ?? '',
                  srcSet: data.malgosiaImage?.responsiveImage?.srcSet ?? '',
                  webpSrcSet:
                    data.malgosiaImage?.responsiveImage?.webpSrcSet ?? '',
                  base64: data.malgosiaImage?.responsiveImage?.base64 ?? '',
                  height: data.malgosiaImage?.responsiveImage?.height ?? 0,
                  width: data.malgosiaImage?.responsiveImage?.width ?? 0,
                  title: data.malgosiaImage?.responsiveImage?.title ?? '',
                  alt: data.malgosiaImage?.responsiveImage?.alt ?? '',
                  bgColor: data.malgosiaImage?.responsiveImage?.bgColor ?? '',
                },
              }}
            />
          </div>
          <div className="content py-6">
            <TextHolder
              structuredText
              text={data.malgosiaDescription?.value}
              readMore
              theme="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
