import LinesPattern from '@/IconsSVG/LinesPattern';
import initTranslations from '@/app/i18n';
import { AssetsQueryDocument } from '@/graphql/generated';
import { request } from '@/lib/request';
import Image from 'next/image';
// import Link from 'next/link';

const Workshops = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const i18nNamespaces = ['workshops'];
  const { assets } = await request(AssetsQueryDocument);
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <section className="bg-main-black px-4 pt-[100px] w-screen pb-20 flex justify-center">
      <div className="w-full max-w-[1440px]">
        <div className="w-full hidden justify-end lg:flex">
          <LinesPattern fill="#F5F5F5" />
        </div>
        <div className="lg:px-[100px]">
          <h1 className=" font-semibold text-[40px] lg:text-[64px] leading-[52px] lg:leading-[83px] text-main-white">
            {t('title')}
          </h1>
          <p className="text-main-white mt-10 text-2xl text-center">
            Coming soon...
          </p>

          <div className="w-full py-10 flex items-center justify-center">
            <Image
              alt={assets[0].fileName}
              src={assets[0].url}
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
