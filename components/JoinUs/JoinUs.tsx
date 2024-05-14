'use client';

import React from 'react';

import { Image as DatoImage } from 'react-datocms';

import { TextHolder } from '../UI/TextHolder';
import { PageTitle } from '../UI/PageTitle';
import { useTranslation } from 'react-i18next';

interface JoinUsProps {
  data: any;
}

const JoinUs = ({ data }: JoinUsProps) => {
  const { t } = useTranslation();
  return (
    <section
      id="#joinus"
      className=" mx-auto px-6 md:px-24 bg-main-black py-12 flex flex-col items-center"
    >
      <PageTitle color="white" title={t('joinUs')} />
      <div className="cols md:flex md:flex-col gap-12">
        {data.map((social: any) => {
          return (
            <div
              key={social.id}
              className="socialItem py-6 flex flex-col items-center"
            >
              <div className="icon w-24 mb-12">
                <DatoImage data={social.icon?.responsiveImage} />
              </div>
              <div className="content">
                <TextHolder
                  structuredText
                  text={social.description}
                  readMore
                  theme="light"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default JoinUs;
