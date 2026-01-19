'use client';

import { PageTitle } from '../UI/PageTitle';
import { JoinUsQueryQuery } from '@/graphql/generated';
import LinkedinIcon_yellow from '@/IconsSVG/LinkedinIcon_yellow';
import YoutubeIcon_yellow from '@/IconsSVG/YoutubeIcon_yellow';
import { useTranslation } from 'react-i18next';
import InstagramIcon_yellow from '@/IconsSVG/InstagramIcon_yellow';
import { RichText } from '@graphcms/rich-text-react-renderer';
import FacebookIcon_yellow from '@/IconsSVG/FacebookIcon_yellow';
import { SocialSlider } from '@/components/JoinUs/SocialSlider';

interface JoinUsProps {
  join_us: JoinUsQueryQuery['join_us'];
  locale: string;
}

const socialList = [
  {
    name: 'LinkedIn',
    icon: <LinkedinIcon_yellow />,
    url: 'https://www.linkedin.com/company/letstalkaboutitpoland',
  },
  {
    name: 'YouTube',
    icon: <YoutubeIcon_yellow />,
    url: 'https://www.youtube.com/@_Lets_talk_about_IT',
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon_yellow />,
    url: 'https://www.instagram.com/stories/lets_talk_about_it__/',
  },
  {
    name: 'Facebook',
    icon: <FacebookIcon_yellow />,
    url: 'https://www.facebook.com/profile.php?id=61573447823038',
  },
];

const JoinUs = ({ join_us, locale }: JoinUsProps) => {
  const { t } = useTranslation();

  return (
    <section
      id="#joinus"
      className="lg:px-24 bg-main-black flex items-center flex-col w-full py-12 overflow-x-hidden"
    >
      <div className="max-w-screen-large_desktop w-full px-4 lg:px-24">
        <PageTitle color="white" title={t('joinUs')} />
        <SocialSlider items={socialList} />
        <div className="w-full flex items-start flex-col max-w-4xl mt-10">
          <RichText
            content={join_us?.linkedin_description.raw!}
            renderers={{
              p: ({ children }) => (
                <p className="text-main-white text-left w-full text-lg lg:text-xl font-normal mb-6">
                  {children}
                </p>
              ),
              h3: ({ children }) => (
                <h3 className="text-main-white text-left w-full text-2xl lg:text-3xl font-semibold mb-6 mt-10">
                  {children}
                </h3>
              ),
            }}
          ></RichText>
          <RichText
            content={join_us?.youtube_description.raw!}
            renderers={{
              h3: ({ children }) => (
                <h3 className="text-main-white text-left w-full text-2xl lg:text-3xl font-normal mb-6">
                  {children}
                </h3>
              ),

              ul: ({ children }) => (
                <ul className="list-disc list-inside text-main-white text-left w-full text-lg lg:text-xl font-normal mb-6">
                  {children}
                </ul>
              ),
            }}
          ></RichText>
        </div>
      </div>
    </section>
  );
};
export default JoinUs;
