import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider/TranslationProvider';
import Facebook from '@/components/Facebook/Facebook';
import Youtube from '@/components/Youtube/Youtube';
import Linkedin from '@/components/Linkedin/Linkedin';
import MainLogo from '@/components/MainLogo/MainLogo';

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
  NewEventQueryDocument,
} from '@/graphql/generated';
import { request } from '@/lib/request';
import OpenNav from '@/components/OpenNav/OpenNav';

const i18nNamespaces = ['home'];

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const { about } = await request(AboutQueryDocument, { locale });
  const { join_us } = await request(JoinUsQueryDocument, { locale });
  const {
    events: [newEvent],
  } = await request(NewEventQueryDocument, { locale });

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
        <div className="w-full max-w-[1440px]">
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
          <div className="py-[190px] lg:py-[250px]">
            <MainTitle fill="#E2FF02" />
          </div>
          <div className="mr-auto">
            <LinesPattern fill="#E2FF02" />
          </div>
        </div>
      </main>
      <About about={about} />
      {newEvent.new && (
        <>
          <div
            id="mainEvent"
            className="w-full  flex justify-center bg-main-yellow"
          >
            <EditionHero
              locale={locale}
              isMain={true}
              edition={newEvent}
              translation={t}
            />
          </div>
          <LeadSection locale={locale} edition={newEvent} translation={t} />
        </>
      )}
      <JoinUs join_us={join_us} />
      <div className="bg-main-black py-20 w-full mx-auto">
        <PartnersCarousel locale={locale} isMain={true} translation={t} />
      </div>
    </TranslationsProvider>
  );
}
