import LinesPattern from '@/IconsSVG/LinesPattern';
import initTranslations from '@/app/i18n';
import FilmsGallery from '@/components/FilmsGallery/FilmsGallery';
import { FilmQueryDocument } from '@/graphql/generated';
import { request } from '@/lib/request';
import { RichText } from '@graphcms/rich-text-react-renderer';

const Films = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { film } = await request(FilmQueryDocument, { locale });
  const i18nNamespaces = ['partners'];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <section className="mt-16 md:mt-24 w-full bg-main-black flex justify-center">
      <div className="bg-main-black flex flex-col h-full md:px-24 justify-center md:pb-12 w-full max-w-[1440px]">
        <div className="hidden md:flex justify-end w-full top-24 right-0">
          <LinesPattern fill="white" />
        </div>
        <div className="px-6 md:px-0">
          {film?.title && (
            <h1 className="text-main-white text-[32px] leading-[42px] font-semibold mb-5 mt-[30px]">
              {film.title}
            </h1>
          )}
        </div>

        <div className="flex">
          {film?.description && (
            <div className="md:max-w-full px-6 lg:px-0">
              <RichText
                content={film?.description.raw}
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
          <FilmsGallery links={film?.links} />
        </div>
      </div>
    </section>
  );
};

export default Films;