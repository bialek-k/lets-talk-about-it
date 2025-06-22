import initTranslations from '@/app/i18n';
import Gallery from '@/components/Gallery/Gallery';
import PartnersCarousel from '@/components/PartnersCarousel/PartnersCarousel';
import WorkshopsHero from '@/components/WorkshopHero/WorkshopsHero';
import WorkshopsLead from '@/components/WorkshopsLead/WorkshopsLead';
import { WorkshopsQueryDocument } from '@/graphql/generated';
import { request } from '@/lib/request';
import { RichTextContent } from '@graphcms/rich-text-types';

type Workshop = {
  date: string;
  edition: string;
  location: string;
  new: boolean;
  signUp: string;
  slug: string;
  title: string;
  description: {
    raw: RichTextContent;
    html: string;
  };
  logo: {
    url: string;
    width: number;
    height: number;
    fileName: string;
  }[];
  lead: {
    name: string;
    position: string[];
    photo: {
      url: string;
      width: number;
      height: number;
      fileName: string;
    };
    linkedIn: string;
  }[];
} | null;
const Workshop = async ({
  params: { locale, workshop: slug },
}: {
  params: { locale: string; workshop: string };
}) => {
  const i18nNamespaces = ['workshops'];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const { workshop, assetsConnection } = await request(WorkshopsQueryDocument, {
    locale,
    slug,
  });

  const gallery = workshop?.gallery ?? [];

  return (
    <section className="bg-main-white w-screen flex flex-col justify-center">
      <div className="w-full bg-main-yellow flex justify-center">
        <WorkshopsHero
          locale={locale}
          edition={workshop as Workshop}
          translation={t}
        />
      </div>
      <div>
        <WorkshopsLead
          locale={locale}
          edition={workshop as Workshop}
          translation={t}
        />
      </div>
      {/* GALERIA */}
      <div
        className="w-full flex justify-center bg-main-black"
        aria-description={t('opisGalerii')}
      >
        {workshop?.gallery.length ? (
          <div
            id="gallery"
            className="px-4 py-10 w-full text-main-white max-w-[1440px]"
          >
            <h2 className="font-semibold text-[40px] lg:text-[48px] leading-[52px] lg:leading-[62px] text-start self-start w-full mb-5 lg:ml-[100px]">
              {t('gallery')}
            </h2>
            <h3 className=" font-semibold text-lg leading-6 lg:px-[100px] lg:mt-10 self-start mb-10">
              {t('galleryText')} {workshop?.title}
            </h3>
            <Gallery
              totalImages={assetsConnection.aggregate.count}
              gallery={gallery}
              label={t('kliknijAbyZobaczyc')}
            />
          </div>
        ) : (
          <div
            id="gallery"
            className="bg-main-black px-4 py-10 w-full text-main-white max-w-[1440px]"
          >
            <h2 className="font-semibold text-[40px] lg:text-[48px] leading-[52px] lg:leading-[62px] text-start self-start w-full mb-5 lg:ml-[100px]">
              {t('gallery')}
            </h2>
            <h3 className=" font-semibold text-lg leading-6 lg:px-[100px] lg:mt-10 self-start">
              {t('noGallery')}
            </h3>
          </div>
        )}
      </div>
      <div className="bg-main-white pt-20 overflow-hidden">
        <PartnersCarousel locale={locale} isMain translation={t} />
      </div>
    </section>
  );
};

export default Workshop;
