import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider/TranslationProvider';
import Facebook from '@/components/Facebook/Facebook';
import Youtube from '@/components/Youtube/Youtube';
import Linkedin from '@/components/Linkedin/Linkedin';
import MainLogo from '@/components/MainLogo/MainLogo';
import { OpenNav } from '@/components/Header/Header';

import { About } from '@/components/About/About';

import JoinUs from '@/components/JoinUs/JoinUs';
import MainTitle from '@/components/MainTitle/MainTitle';
import LinesPattern from '@/IconsSVG/LinesPattern';
import EditionHero from '@/components/EditionHero/EditionHero';
import LeadSection from '@/components/LeadSection/LeadSection';
import PartnersCarousel from '@/components/PartnersCarousel/PartnersCarousel';

import {
  Locale,
  AboutQueryDocument,
  JoinUsQueryDocument,
} from '@/graphql/generated';
import { request } from '@/lib/request';

const i18nNamespaces = ['home'];

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  // const { about } = await request(MyQueryDocument, { locale });
  // const { allJoins } = await request(JoinUsDocument, { locale });
  // const event = await request(EditionsDocument, {
  //   locale,
  //   new: true,
  // });

  const { about } = await request(AboutQueryDocument, { locale });
  const { join_us } = await request(JoinUsQueryDocument, { locale });

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main
        id="main"
        className="flex bg-main-black flex-col items-center justify-between  text-[#F5F5F5] w-full"
      >
        <div className="flex lg:hidden min-w-56 w-full flex-col items-center pt-10">
          <MainLogo className=" w-[100px] h-[100px]" />
          <div className="flex flex-row w-full">
            <div className="flex justify-center gap-6 ml-auto">
              <Linkedin
                className="size-6"
                href="https://www.linkedin.com/groups/14230011/"
              />
              <Facebook
                className="size-6"
                href="https://www.facebook.com/groups/letstalkitpoland"
              />
              <Youtube
                className="size-6"
                href="https://www.youtube.com/@LetstalkTPoland"
              />
            </div>
            <div className="ml-auto relative right-4 flex">
              <OpenNav />
            </div>
          </div>
        </div>
        <div className="pt-[140px] pb-[240px]">
          <MainTitle fill="#E2FF02" />
        </div>
        <div className="mr-auto">
          <LinesPattern fill="#E2FF02" />
        </div>
      </main>
      <About about={about} />

      <JoinUs join_us={join_us} />
      {/*
      {/* <EditionHero
        locale={locale}
        isMain={true}
        edition={event.event?.edition}
        translation={t}
      />
      <LeadSection
        locale={locale}
        edition={event.event?.edition}
        translation={t}
      /> */}
      <div className="bg-main-black py-20 w-full mx-auto">
        {/* <PartnersCarousel locale={locale} isMain={true} translation={t} /> */}
      </div>
    </TranslationsProvider>
  );
}
