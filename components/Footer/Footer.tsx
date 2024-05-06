'use client';

import LinesPattern from '@/IconsSVG/LinesPattern';
import MainLogoIcon from '@/IconsSVG/MainLogoIcon';
import Facebook from '../Facebook/Facebook';
import Linkedin from '../Linkedin/Linkedin';
import Youtube from '../Youtube/Youtube';
import Link from 'next/link';
import EnvelopeIcon from '@/IconsSVG/EnvelopeIcon';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full flex flex-col gap-10 items-center justify-center mx-auto font-sans pb-5 lg:pt-20 lg:pb-16 lg:px-[100px]">
      <div className="lg:invisible visible w-full flex items-center justify-end">
        <LinesPattern fill="#0C0C0C" />
      </div>
      <div className="flex items-center justify-center w-[100px] h-[100px] mr-auto ml-4 lg:ml-0">
        <MainLogoIcon />
      </div>
      <section className=" flex flex-col items-center justify-center w-full px-4 gap-5 lg:flex-row lg:px-0 lg:gap-0 lg:justify-between ">
        <div className="flex flex-col items-start justify-center gap-5 max-w-[530px] mr-auto lg:mr-0 lg:py-4 lg:max-w-[390px] lg:w-full">
          <h4 className="font-medium text-2xl lg:mb-5">{t('followUs')}</h4>
          <p className="font-normal text-base">{t('socialMediaMessage')}</p>
          <div className="flex gap-6">
            <Linkedin
              className="size-8"
              href="https://www.linkedin.com/groups/14230011/"
            />
            <Facebook
              className="size-8"
              href="https://www.facebook.com/groups/letstalkitpoland"
            />
            <Youtube
              className="size-8"
              href="https://www.youtube.com/@LetstalkTPoland"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center max-w-[530px] mr-auto lg:mr-0 lg:border-r lg:border-l desktop-media-max:border-b border-solid border-main-black py-4 desktop-media-max:border-t lg:px-[100px]">
          <h4 className="font-medium text-2xl mb-5 lg:mb-10">{t('contact')}</h4>
          <p className="font-normal text-base">{t('haveQuestions')}</p>
          <p className="font-normal text-base">{t('contactUs')}</p>
          <Link
            className="font-normal text-base flex items-center gap-4 flex-wrap sm:flex-nowrap mt-6"
            href="mailto:letstalkitpoland@gmail.com"
          >
            <EnvelopeIcon />
            letstalkitpoland@gmail.com
          </Link>
        </div>
        <div className="flex flex-col lg:items-end justify-center mr-auto lg:mr-0  lg:py-4 lg:max-w-[390px] lg:w-full">
          <div className="flex flex-col gap-5 justify-center">
            <h4 className="font-medium text-2xl lg:mb-5 ">{t('links')}</h4>
            <Link href="" className="font-normal text-base">
              {t('regulations')}
            </Link>
            <Link href="" className="font-normal text-base">
              {t('privacyPolicy')}
            </Link>
            <Link href="" className="font-normal text-base">
              {t('Events')}
            </Link>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center">
        <p className="font-normal text-base text-center">{t('rights')}</p>
        <p className="font-normal text-base text-center">{t('owner')}</p>
        <p className="font-normal text-base text-center">{t('madeBy')}</p>
      </div>
    </footer>
  );
};

export default Footer;
