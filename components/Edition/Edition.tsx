import { request } from '@/lib/request';
import { EditionQueryDocument } from '@/graphql/generated';
import PartnersCarousel from '../PartnersCarousel/PartnersCarousel';
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
        {/* GALLERY */}
        {event?.gallery.length ? (
          <div
            id="gallery"
            className="bg-main-black px-4 py-10 w-full text-main-white"
          >
            <h2 className="font-semibold text-[40px] leading-[52px] text-start self-start w-full mb-5 lg:ml-[100px]">
              {t('gallery')}
            </h2>
            <Gallery id={event?.id} />
          </div>
        ) : (
          <div
            id="gallery"
            className=" font-semibold text-lg leading-6 px-[100px]"
          >
            {t('noGallery')}
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
