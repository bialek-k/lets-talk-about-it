import LinesPattern from '@/IconsSVG/LinesPattern';
import initTranslations from '@/app/i18n';
import FilmsGallery from '@/components/FilmsGallery/FilmsGallery';
import { PodcastsQueryDocument } from '@/graphql/generated';
import { request } from '@/lib/request';
import { RichText } from '@graphcms/rich-text-react-renderer';

const Podcasts = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { podcast } = await request(PodcastsQueryDocument, { locale });
  const i18nNamespaces = ['partners'];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <section className="pt-10 md:pt-20 lg:pt-24 w-full bg-main-black flex justify-center">
      <div className="bg-main-black flex flex-col h-full md:px-24 justify-center md:pb-12 w-full max-w-[1440px]">
        <div className="hidden md:flex justify-end w-full top-24 right-0">
          <LinesPattern fill="white" />
        </div>
        <div className="px-6 md:px-0">
          {podcast?.title && (
            <h1 className="text-main-white text-[32px] leading-[42px] font-semibold mb-5 mt-[30px]">
              {podcast.title}
            </h1>
          )}
        </div>

        <div className="flex">
          {podcast?.description && (
            <div className="md:max-w-full flex flex-col gap-4 px-6 lg:px-0">
              <RichText
                content={podcast?.description.raw}
                renderers={{
                  p: ({ children }) => (
                    <p className="m-0 lg:text-2xl text-main-white">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>
          )}
        </div>
        <div className="px-6 pt-10">
          <FilmsGallery links={podcast?.links} />
        </div>
      </div>
    </section>
  );
};

export default Podcasts;
