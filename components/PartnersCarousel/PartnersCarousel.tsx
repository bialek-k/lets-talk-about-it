import { PartnersDocument } from '@/graphql/generated';
import { request } from '@/lib/request';
import Marquee from '../Marquee/Marquee';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const PartnersCarousel = async ({
  locale,
  isMain,
  translation,
}: {
  locale: string;
  isMain?: boolean;
  translation: (key: string) => string;
}) => {
  const results = await request(PartnersDocument, { locale });
  const t = translation;
  return (
    <div className="flex flex-col items-center justify-center w-screen mx-auto">
      <h3
        className={`${
          isMain ? 'text-main-white' : 'text-main-black'
        } font-semibold text-[40px] leading-[52px] text-start self-start ml-4 lg:ml-[100px]`}
      >
        {t('partnerzy')}
      </h3>
      <Marquee>
        {results.allPartners[0].images.map((partner) => (
          <div className="mr-10 lg:mr-20" key={partner.responsiveImage?.title}>
            <Image
              className="w-full h-[77px] lg:h-[98px]"
              alt={partner.responsiveImage?.title ?? ''}
              src={partner.responsiveImage?.src ?? ''}
              width={partner.responsiveImage?.width}
              height={partner.responsiveImage?.height}
            ></Image>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default PartnersCarousel;
