'use client';

import { PageTitle } from '../UI/PageTitle';
import { JoinUsQueryQuery } from '@/graphql/generated';
import { JoinUsItem } from './JoinUsItem';
import LinkedinIcon_yellow from '@/IconsSVG/LinkedinIcon_yellow';
import YoutubeIcon_yellow from '@/IconsSVG/YoutubeIcon_yellow';
import { useTranslation } from 'react-i18next';
import InstagramIcon_yellow from '@/IconsSVG/InstagramIcon_yellow';

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
            label="LinkedIn"
            social={join_us.linkedin_description.raw}
            icon={<LinkedinIcon_yellow />}
            small
            longText
            customClass={
              locale === 'en'
                ? 'mt-0 md:mt-1 marker:text-black'
                : 'mt-0 lg:mt-1 marker:text-black'
            }
            navigateDirection="https://www.linkedin.com/groups/14230011/"
          />
        )}
        {join_us?.youtube_description && (
          <JoinUsItem
            label="YouTube"
            social={join_us.youtube_description.raw}
            icon={<YoutubeIcon_yellow />}
            small
            longText
            customClass={
              locale === 'en'
                ? 'mt-0 md:mt-1 marker:text-black'
                : 'mt-0 lg:mt-1 marker:text-black'
            }
            navigateDirection="https://www.youtube.com/@_Lets_talk_about_IT"
          />
        )}
        {join_us?.facebook_description && (
          <JoinUsItem
            label="Facebook"
            social={join_us.facebook_description.raw}
            icon={<InstagramIcon_yellow />}
            small
            longText
            customClass={
              locale === 'en'
                ? 'mt-0 marker:text-black'
                : 'mt-1 lg:mt-0 marker:text-black'
            }
            navigateDirection="https://www.facebook.com/share/1CTbxm5ZMe/"
          />
        )}
      </div>
    </section>
  );
};
export default JoinUs;
