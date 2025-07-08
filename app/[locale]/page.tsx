import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider/TranslationProvider';
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
import Instagram from '@/components/Instagram/Instagram';
import { Header } from '@/components/Header/Header';
import Facebook from '@/components/Facebook/Facebook';

const i18nNamespaces = ['home'];

type NewEventHero = {
  date: string;
  edition: string;
  location: string;
  new: boolean;
  singUpLink: string;
  slug: string;
  title: string;
};
type NewEventLead = {
  lead: {
    name: string;
    position: string[];
    photo: {
      url: string;
      width: number;
      height: number;
    };
    linkedIn: string;
  }[];
  speakers: {
    name: string;
    position: string[];
    photo: {
      url: string;
      width: number;
      height: number;
    };
    linkedIn: string;
  }[];

  singUpLink: string;
  new: boolean;
};

const Home = async ({ params: { locale } }: { params: { locale: Locale } }) => {
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
      <Header isMain locale={locale} />
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
                  label="Lets Talk About IT Linkedin"
                />
                <Youtube
                  className="size-6"
                  href="https://www.youtube.com/@_Lets_talk_about_IT"
                  label="Lets Talk About IT Youtube"
                />
                <Instagram
                  className="size-6"
                  href="https://www.instagram.com/lets_talk_about_it__"
                  label="Lets Talk About IT Instagram"
                />
                <Facebook
                  className="size-6"
                  href="https://www.facebook.com/LetsTalkAboutIT"
                  label="Lets Talk About IT Facebook"
                />
              </div>
              <div className="ml-auto relative right-4 flex">
                <OpenNav locale={locale} />
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
              isMain
              edition={newEvent as NewEventHero}
              translation={t}
            />
          </div>
          <LeadSection edition={newEvent as NewEventLead} translation={t} />
        </>
      )}
      <JoinUs join_us={join_us} locale={locale} />
      <div className="bg-main-black py-20 overflow-hidden">
        <PartnersCarousel locale={locale} isMain translation={t} />
      </div>
    </TranslationsProvider>
  );
};

export default Home;
