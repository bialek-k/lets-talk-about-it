import Marquee from '../Marquee/Marquee';
const PartnersCarousel = async ({
  locale,
  isMain,
  translation,
}: {
  locale: string;
  isMain?: boolean;
  translation: (key: string) => string;
}) => {
  const t = translation;

  return (
    <div className="flex overflow-x-hidden w-screen max-w-1440px">
      <Marquee>
        <h3 className=" text-[40px] leading-[52px] font-bold w-max flex-shrink-0">
          {t('carousel')}
        </h3>
      </Marquee>
    </div>
  );
};

export default PartnersCarousel;
