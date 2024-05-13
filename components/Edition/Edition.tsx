import toRoman from '../UI/NumberToRoman';
import Arrow from '@/IconsSVG/Arrow';
import { request } from '@/lib/request';
import { EditionsDocument, PartnersDocument } from '@/graphql/generated';
import { Image } from '../UI/Image';
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
  const results = await request(EditionsDocument, {
    locale,
    edition,
  });

  return (
    <section className="w-full mx-auto">
      <div className="flex flex-col items-center justify-center ">
        {/* HERO SECTION */}
        <EditionHero locale={locale} edition={edition} translation={t} />
        {/* LEAD SECTION */}
        <LeadSection locale={locale} edition={edition} translation={t} />
        {/* GALERIA */}
        <div
          id="gallery"
          className="bg-main-black px-4 py-10 w-full text-main-white"
        >
          <h2 className="font-semibold text-[40px] leading-[52px] text-start self-start w-full mb-5 lg:ml-[100px]">
            {t('gallery')}
          </h2>
          {results.event?.images && results.event.images.length > 0 ? (
            <Gallery
              images={results.event.images.map((image) => ({
                basename: image.basename,
                responsiveImage: {
                  src: image.responsiveImage?.src ?? '',
                  base64: image.responsiveImage?.base64 ?? '',
                  height: image.responsiveImage?.height ?? 0,
                  width: image.responsiveImage?.width ?? 0,
                  aspectRatio: image.responsiveImage?.aspectRatio ?? 0,
                  sizes: image.responsiveImage?.sizes ?? '',
                  srcSet: image.responsiveImage?.srcSet ?? '',
                  webpSrcSet: image.responsiveImage?.webpSrcSet ?? '',
                  title: image.responsiveImage?.title ?? '',
                },
              }))}
            />
          ) : (
            <div className=" font-semibold text-lg leading-6">
              {t('noGallery')}
            </div>
          )}
        </div>
        {/* PARTNERS */}
        <div className="pt-20">
          <PartnersCarousel locale={locale} />
        </div>
      </div>
    </section>
  );
};

export default Edition;
