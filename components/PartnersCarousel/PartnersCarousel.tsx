import { PartnersQueryDocument } from '@/graphql/generated';
import { request } from '@/lib/request';
import Marquee from '../Marquee/Marquee';
import Image from 'next/image';

const PartnersCarousel = async ({
  locale,
  isMain,
  translation,
}: {
  locale: string;
  isMain?: boolean;
  translation: (key: string) => string;
}) => {
  const { partner } = await request(PartnersQueryDocument, { locale });
  const t = translation;

  return (
    <div className="flex flex-col items-center justify-center w-screen mx-auto">
      <h3
        className={`${
          isMain ? 'text-main-white' : 'text-main-black'
        } font-semibold text-[40px] leading-[52px] text-start self-start ml-4 lg:mx-auto lg:uppercase lg:mb-[25px]`}
      >
        {t('partnerzy')}
      </h3>

      <Marquee>
        {partner?.logos.map((partner) => {
          //consider usage of useMemo()
          const validWidth =
            partner?.width !== null ? partner?.width : undefined;
          const validHeight =
            partner?.height !== null ? partner?.height : undefined;

          return (
            <div className="mr-10 lg:mr-20" key={partner.id}>
              <Image
                alt={partner.fileName}
                src={partner.url}
                width={validWidth}
                height={validHeight}
                className="w-[100%] h-[60px]"
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default PartnersCarousel;
