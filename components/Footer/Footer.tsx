'use client';

import MainLogoIcon from '@/IconsSVG/MainLogoIcon';
import Linkedin from '../Linkedin/Linkedin';
import Youtube from '../Youtube/Youtube';
import Link from 'next/link';
import EnvelopeIcon from '@/IconsSVG/EnvelopeIcon';
import { useTranslation } from 'react-i18next';
import { DocsQueryQuery, type PartnersQueryQuery } from '@/graphql/generated';
import BackToTop from '@/IconsSVG/BackToTop';
import Instagram from '../Instagram/Instagram';
import { BecomePartner } from '@/components/BecomePartner/BecomePartner';
import { PrivacyPolicy } from '@/components/PrivacyPolicy/PrivacyPolicy';
import Facebook from '@/components/Facebook/Facebook';

interface Props {
  doc?: DocsQueryQuery['doc'] | null;
  partner?: PartnersQueryQuery['partner'] | null;
}

const Footer = ({ doc, partner }: Props) => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      id="contact"
      className="w-full flex flex-col gap-10 items-center justify-center mx-auto pb-5 lg:pb-16 lg:px-[100px] pt-[80px] max-w-[1440px]"
    >
      <div className="flex items-center justify-center lg:justify-between  h-[100px] w-full ml-4 lg:ml-0">
        <div className="w-[100px] h-[100px] mr-auto">
          <MainLogoIcon />
        </div>
        <button
          aria-label="Powrót na górę strony"
          type="button"
          onClick={scrollToTop}
          className="hidden lg:flex ml-auto hover:scale-125"
        >
          <BackToTop />
        </button>
      </div>
      <section className="grid gap-5 pl-4 self-start lg:pl-0 desktop:grid-cols-7 desktop:gap-">
        <BecomePartner partner={partner} />
        <div
          id="followUs"
          className="border-b border-black border-solid pb-5 flex flex-col gap-5 desktop:border-b-0 desktop:border-l desktop:pb-0 desktop:pl-10 desktop:col-span-2"
        >
          <h4 className="font-medium text-xl lg:mb-5">{t('followUs')}</h4>
          <p className="font-normal text-base">{t('socialMediaMessage')}</p>
          <div className="flex gap-6">
            <Linkedin
              label={`Linkedin grupy "Let's Talk About IT"`}
              className="size-8"
              href="https://www.linkedin.com/groups/14230011/"
            />
            <Youtube
              label={`Youtube grupy "Let's Talk About IT"`}
              className="size-8"
              href="https://www.youtube.com/@_Lets_talk_about_IT"
            />
            <Instagram
              label={`Instagram grupy "Let's Talk About IT"`}
              className="size-8"
              href="https://www.instagram.com/lets_talk_about_it__"
            />
            <Facebook
              label={`Facebook grupy "Let's Talk About IT"`}
              className="size-8"
              href="https://www.facebook.com/share/1CTbxm5ZMe/"
            />
          </div>
        </div>
        <div className="border-b border-black border-solid pb-5 desktop:border-b-0 desktop:border-x desktop:pb-0 desktop:pl-10 desktop:col-span-2">
          <h4 className="font-medium text-xl mb-5 ">{t('contact')}</h4>
          <p className="font-normal text-base">{t('haveQuestions')}</p>
          <p className="font-normal text-base">{t('contactUs')}</p>
          <div className="flex gap-2 pt-5">
            <EnvelopeIcon />
            <strong className="text-black font-normal">
              <a href="mailto:contact@letstalkaboutit.pl">
                contact@letstalkaboutit.pl
              </a>
            </strong>
          </div>
        </div>
        <div className="border-black border-solid desktop:border- desktop:pl-5">
          <h4 className="font-medium text-xl mb-5 ">{t('links')}</h4>
          <div className="flex flex-col gap-5 justify-center">
            <PrivacyPolicy doc={doc} />
            <Link
              href="/#about"
              rel="noopener noreferrer"
              className="font-normal text-base"
              aria-label='Powrót na stronę "O nas"'
            >
              {t('about')}
            </Link>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center">
        <div className="flex flex-col lg:flex-row-reverse lg:gap-1">
          <p className="font-normal text-base text-center">{t('rights')}</p>
          <p className="font-normal text-base text-center">{t('owner')}</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-1">
          <p className="font-normal text-base text-center">
            Karolina Bożemska, Krzysztof Białek,
          </p>
          <p className="font-normal text-base text-center">Vincent Słomiński</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
