import LinesPattern from '@/IconsSVG/LinesPattern';
import initTranslations from '@/app/i18n';
import { PartnersQueryDocument } from '@/graphql/generated';
import { request } from '@/lib/request';
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
    <section className="pt-10 md:pt-20 lg:pt-24 w-full bg-main-black flex justify-center">
      <div className="bg-main-black flex flex-col h-full md:px-24 justify-center md:pb-12 w-full max-w-[1440px]">
        <div className="hidden md:flex justify-end w-full top-24 right-0">
          <LinesPattern fill="white" />
        </div>

        {/** MOBILE LOGOS */}

        <div className="flex flex-col bg-main-white lg:hidden px-6 mt-12">
          <h1 className="text-[40px] font-semibold py-4">
            {t('trustedPartners')}
          </h1>
          <div className="partnersImages grid grid-cols-2 gap-x-5 justify-center items-center">
            {partner?.logos.map((img) => {
              return (
                <div key={`id:${img.fileName}`} className="py-4 relative">
                  <Image
                    alt={img.fileName}
                    src={img.url}
                    width={img?.width ?? 300}
                    height={img?.height ?? 300}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/** DESKTOP LOGOS */}

        <div className="hidden lg:flex bg-main-white md:flex-col  py-12 mt-12">
          <div className="partnersImages px-10 grid grid-cols-6 items-center gap-10 w-full justify-start">
            {partner?.logos.map((img) => {
              return (
                <div
                  key={`id:${img.fileName}`}
                  className="py-4 flex items-center justify-center relative aspect-square"
                >
                  <Image
                    alt={img.fileName}
                    src={img.url}
                    width={img?.width ?? 300}
                    height={img?.height ?? 300}
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
