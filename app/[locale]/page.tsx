import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider/TranslationProvider';
import Facebook from '@/components/Facebook/Facebook';
import Youtube from '@/components/Youtube/Youtube';
import Linkedin from '@/components/Linkedin/Linkedin';
import MainLogo from '@/components/MainLogo/MainLogo';
import { OpenNav } from '@/components/Header/Header';
import { graphqlClient } from '@/lib/graphqlClient';

import { MyQueryDocument } from '@/graphql/generated';
import { About } from '@/components/About/About';
import { request } from '@/lib/request';

const i18nNamespaces = ['home'];

const aboutQuery = `
query MyQuery($locale: SiteLocale) {
  about(locale: $locale) {
    id
    title
    description {
      value
    }
    malgosiaDescription {
      value
    }
  }
}`;

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const { about } = await request(MyQueryDocument, { locale });

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main
        id="main"
        className="flex bg-main-black min-h-screen flex-col items-center justify-between  text-[#F5F5F5] font-sans w-full"
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
        <section></section>
      </main>
      <About data={about} />
    </TranslationsProvider>
  );
}
