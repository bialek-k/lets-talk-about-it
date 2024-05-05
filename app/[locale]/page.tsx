import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider/TranslationProvider';
import Facebook from '@/components/Facebook/Facebook';
import Youtube from '@/components/Youtube/Youtube';
import Linkedin from '@/components/Linkedin/Linkedin';
import MainLogo from '@/components/MainLogo/MainLogo';
import { OpenNav } from '@/components/Header/Header';

import { MyQueryDocument, JoinUsDocument } from '@/graphql/generated';
import { About } from '@/components/About/About';
import { request } from '@/lib/request';
import JoinUs from '@/components/JoinUs/JoinUs';

const i18nNamespaces = ['home'];

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const { about } = await request(MyQueryDocument, { locale });
  const { allJoins } = await request(JoinUsDocument, { locale });

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex bg-main-black min-h-screen flex-col items-center justify-between  text-[#F5F5F5] font-sans">
        <div className=" lg:hidden bg-main-black min-w-56 w-full flex flex-col items-center pt-10">
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
      </main>
      <About data={about} />
      <JoinUs data={allJoins[0].social} />
    </TranslationsProvider>
  );
}
