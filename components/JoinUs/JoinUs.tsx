'use client';

import { PageTitle } from '../UI/PageTitle';
import { JoinUsQueryQuery } from '@/graphql/generated';
import { JoinUsItem } from './JoinUsItem';
import LinkedinIcon_yellow from '@/IconsSVG/LinkedinIcon_yellow';
import FacebookIcon_yellow from '@/IconsSVG/FacebookIcon_yellow';
import YoutubeIcon_yellow from '@/IconsSVG/YoutubeIcon_yellow';
import { useTranslation } from 'react-i18next';

interface JoinUsProps {
  join_us: JoinUsQueryQuery['join_us'];
  locale: string;
}

const JoinUs: React.FC<JoinUsProps> = ({ join_us, locale }) => {
  const { t } = useTranslation();

  return (
    <section
      id="#joinus"
      className="px-6 md:px-24 bg-main-black w-full py-12 flex flex-col items-center"
    >
      <PageTitle color="white" title={t('joinUs')} />
      <div className="flex flex-wrap md:flex-col-3 justify-center gap-6 lg:gap-20">
        {join_us?.linkedin_description && (
          <JoinUsItem
            social={join_us.linkedin_description.raw}
            icon={<LinkedinIcon_yellow />}
            small
            longText
            customClass={locale === 'en' ? 'lg:pb-[20px]' : ''}
            navigateDirection="https://www.linkedin.com/groups/14230011/"
          />
        )}
        {join_us?.facebook_description && (
          <JoinUsItem
            social={join_us.facebook_description.raw}
            icon={<FacebookIcon_yellow />}
            small
            longText
            customClass="lg:mt-1"
            navigateDirection="https://www.facebook.com/groups/letstalkitpoland"
          />
        )}
        {join_us?.youtube_description && (
          <JoinUsItem
            social={join_us.youtube_description.raw}
            icon={<YoutubeIcon_yellow />}
            small
            longText
            customClass={locale === 'en' ? 'mt-1 lg:mt-1' : ''}
            navigateDirection="https://www.youtube.com/@LetstalkTPoland"
          />
        )}
      </div>
    </section>
  );
};
export default JoinUs;
