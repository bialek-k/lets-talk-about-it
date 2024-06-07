import toRoman from '../UI/NumberToRoman';
import Arrow from '@/IconsSVG/Arrow';
import { request } from '@/lib/request';
import { EditionQueryDocument } from '@/graphql/generated';

import Button from '../UI/Button';
import Calendar from '@/IconsSVG/Calendar';
import Location from '../Location/Location';
import MainTitle from '../MainTitle/MainTitle';
import LinesPattern from '@/IconsSVG/LinesPattern';
import PartnersCarousel from '../PartnersCarousel/PartnersCarousel';
import TextBorderLine from '@/IconsSVG/TextBorderLine';
import Gallery from '../Gallery/Gallery';
import EditionHero from '../EditionHero/EditionHero';
import LeadSection from '../LeadSection/LeadSection';

const Edition = async ({
  locale,
  edition,
  translation,
}: {
  locale: string;
  edition: string;
  translation: (key: string) => string;
}) => {
  const t = translation;

  const { event } = await request(EditionQueryDocument, {
    locale,
    edition,
  });

  return (
    <section className="">
      <div className="">
        {/* HERO SECTION */}
        <EditionHero locale={locale} edition={event} translation={t} />
        {/* LEAD SECTION */}
        <LeadSection locale={locale} edition={event} translation={t} />
        {/* GALERIA */}
        {event?.gallery.length ? (
          <div
            id="gallery"
            className="bg-main-black px-4 py-10 w-full text-main-white"
          >
            <h2 className="font-semibold text-[40px] lg:text-[48px] leading-[52px] lg:leading-[62px] text-start self-start w-full mb-5 lg:ml-[100px]">
              {t('gallery')}
            </h2>
            <h3 className=" font-semibold text-lg leading-6 lg:px-[100px] lg:mt-10 self-start mb-10">
              {t('galleryText')} {toRoman(parseInt(event?.edition ?? ''))}{' '}
              {t('galleryText2')}
            </h3>
            <Gallery id={event?.id} />
          </div>
        ) : (
          <div
            id="gallery"
            className="bg-main-black px-4 py-10 w-full text-main-white"
          >
            <h2 className="font-semibold text-[40px] lg:text-[48px] leading-[52px] lg:leading-[62px] text-start self-start w-full mb-5 lg:ml-[100px]">
              {t('gallery')}
            </h2>
            <h3 className=" font-semibold text-lg leading-6 lg:px-[100px] lg:mt-10 self-start">
              {t('noGallery')}
            </h3>
          </div>
        )}
        {/* PARTNERS */}
        <div className="pt-20 w-full mx-auto">
          <PartnersCarousel locale={locale} translation={t} />
        </div>
      </div>
    </section>
  );
};

export default Edition;
