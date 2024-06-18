import EnvelopIconYellow from '@/IconsSVG/EnvelopIcon_yellow';
import LinesPattern from '@/IconsSVG/LinesPattern';
import initTranslations from '@/app/i18n';
import { PartnersQueryDocument } from '@/graphql/generated';
import { request } from '@/lib/request';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';

const Partners = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { partner } = await request(PartnersQueryDocument, { locale });
  const i18nNamespaces = ['partners'];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <section className="mt-16 md:mt-24 w-full bg-main-black flex justify-center">
      <div className="bg-main-black flex flex-col h-full md:px-24 justify-center md:pb-12 w-full max-w-[1440px]">
        <div className="hidden md:flex justify-end w-full top-24 right-0">
          <LinesPattern fill="white" />
        </div>
        <div className="px-6 md:px-0">
          {partner?.title && (
            <h1 className="text-main-white text-[32px] leading-[42px] font-semibold mb-5 mt-[30px]">
              {partner?.title}
            </h1>
          )}
        </div>

        <div className="flex">
          {partner?.description && (
            <div className="md:max-w-full px-6 lg:px-0">
              <RichText
                content={partner?.description.raw}
                renderers={{
                  p: ({ children }) => (
                    <p className="m-0 lg:text-2xl text-main-white">
                      {children}
                    </p>
                  ),
                }}
              />
              <div className="pt-8 flex gap-2">
                <EnvelopIconYellow />
                <strong className="text-main-yellow">
                  <a href="mailto:etstalkitpoland@gmail.com">
                    letstalkitpoland@gmail.com
                  </a>
                </strong>
              </div>
            </div>
          )}
        </div>

        {/** MOBILE LOGOS */}

        <div className="flex flex-col bg-main-white lg:hidden px-6 mt-12">
          <h1 className="text-[40px] font-semibold py-4">
            {t('trustedPartners')}
          </h1>
          <div className="partnersImages grid grid-cols-2 gap-x-5 justify-center items-center">
            {partner?.logos.map((img) => {
              const validWidth = img?.width !== null ? img?.width : undefined;
              const validHeight =
                img?.height !== null ? img?.height : undefined;

              return (
                <div key={`id:${img}`} className="py-4">
                  <Image
                    alt={img.fileName}
                    src={img.url}
                    width={validWidth}
                    height={validHeight}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/** DESKTOP LOGOS */}

        <div className="hidden lg:flex bg-main-white md:flex-col px-24 py-12 mt-12">
          <div className="partnersImages flex flex-row w-full justify-between">
            {partner?.logos.map((img) => {
              const validWidth = img?.width !== null ? img?.width : undefined;
              const validHeight =
                img?.height !== null ? img?.height : undefined;

              return (
                <div key={`id:${img}`} className="py-4 flex items-center">
                  <Image
                    alt={img.fileName}
                    src={img.url}
                    width={validWidth}
                    height={validHeight}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;