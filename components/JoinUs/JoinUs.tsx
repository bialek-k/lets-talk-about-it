'use client';
import React from 'react';

import { PageTitle } from '../UI/PageTitle';
import { JoinUsQueryQuery } from '@/graphql/generated';
import { JoinUsItem } from './JoinUsItem';

import LinkedinIcon_yellow from '@/IconsSVG/LinkedinIcon_yellow';
import FacebookIcon_yellow from '@/IconsSVG/FacebookIcon_yellow';
import YoutubeIcon_yellow from '@/IconsSVG/YoutubeIcon_yellow';
import { useTranslation } from 'react-i18next';

const JoinUs = ({ join_us }: JoinUsQueryQuery) => {
  const { t } = useTranslation();
  return (
    <section
      id="#joinus"
      className="px-6 md:px-24 bg-main-black w-full py-12 flex flex-col items-center"
    >
      <PageTitle color="white" title={t('joinUs')} />
      <div className="flex flex-wrap md:flex-col-3 justify-center gap-6 lg:gap-20">
        {join_us?.facebook_description && (
          <JoinUsItem
            social={join_us.facebook_description.raw}
            icon={<FacebookIcon_yellow />}
            small
          />
        )}
        {join_us?.linkedin_description && (
          <JoinUsItem
            social={join_us.linkedin_description.raw}
            icon={<LinkedinIcon_yellow />}
            small
          />
        )}
        {join_us?.youtube_description && (
          <JoinUsItem
            social={join_us.youtube_description.raw}
            icon={<YoutubeIcon_yellow />}
            small
          />
        )}
      </div>
    </section>
  );
};
export default JoinUs;
