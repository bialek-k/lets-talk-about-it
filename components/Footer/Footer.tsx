'use client';

import MainLogoIcon from '@/IconsSVG/MainLogoIcon';
import Facebook from '../Facebook/Facebook';
import Linkedin from '../Linkedin/Linkedin';
import Youtube from '../Youtube/Youtube';
import Link from 'next/link';
import EnvelopeIcon from '@/IconsSVG/EnvelopeIcon';
import { useTranslation } from 'react-i18next';
import { DocsQueryQuery } from '@/graphql/generated';

import { MapWindow } from '@/components/Modal/Modal';
import { useState } from 'react';

import { Data } from '@/components/Modal/Modal';
import BackToTop from '@/IconsSVG/BackToTop';

const Footer = (doc: DocsQueryQuery) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<Data | undefined>();

  const modalOpenHandler = (title: string) => {
    if (title === 'regulations') {
      setModalData({
        title: 'Regulamin',
        content: doc?.doc?.regulation.raw,
      });
      setIsOpen(true);
    }
    if (title === 'privacyPolicy') {
      setModalData({
        title: 'Polityka Prywatności',
        content: doc?.doc?.private_policy.raw,
      });
      setIsOpen(true);
    }
  };

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
          onClick={scrollToTop}
          className="hidden lg:flex ml-auto hover:scale-125"
        >
          <BackToTop />
        </button>
      </div>
      <section className=" flex flex-col items-start justify-center w-full px-4 gap-5 lg:flex-row lg:px-0 lg:gap-0 lg:justify-between ">
        <div className="flex flex-col items-start justify-center gap-5 max-w-[530px] mr-auto lg:mr-0 lg:py-4 lg:pr-[100px] lg:max-w-[390px] lg:w-full">
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
          <a
            className="font-normal text-base flex items-center gap-4 flex-wrap sm:flex-nowrap mt-6"
            href="mailto:letstalkitpoland@gmail.com"
          >
            <EnvelopeIcon />
            letstalkitpoland@gmail.com
          </a>
        </div>
        <div className="flex flex-col lg:items-start lg:pl-[100px] justify-center mr-auto lg:mr-0  lg:pt-4 lg:max-w-[390px] lg:w-full">
          <h4 className="font-medium text-2xl lg:mb-10 mb-5 ">{t('links')}</h4>
          <div className="flex flex-col gap-5 justify-center">
            <button
              onClick={() => modalOpenHandler('regulations')}
              className="text-left"
            >
              {t('regulations')}
            </button>
            <button
              onClick={() => modalOpenHandler('privacyPolicy')}
              className="text-left"
            >
              {t('privacyPolicy')}
            </button>
            <Link href="/#about" className="font-normal text-base">
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
      {isOpen && (
        <MapWindow isOpen={isOpen} setIsOpen={setIsOpen} data={modalData} />
      )}
    </footer>
  );
};

export default Footer;
