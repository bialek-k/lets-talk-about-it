import LinesPattern from '@/IconsSVG/LinesPattern';
import TextBorderLine from '@/IconsSVG/TextBorderLine';
import { EditionsDocument } from '@/graphql/generated';
import { request } from '@/lib/request';
// import { Image } from '../UI/Image';
import Arrow from '@/IconsSVG/Arrow';
import Button from '../UI/Button';
import { Image as DatoImage } from '../UI/ImageContainer';
import { ImageContainer } from '../UI/ImageGalleryItem';

interface ImageProps {
  image: {
    basename: string;
    responsiveImage: {
      src: string;
      base64: string;
      height: number;
      width: number;
      aspectRatio: number;
      sizes: string;
      srcSet: string;
      webpSrcSet?: any;
      title: string;
    };
  };
}

const LeadSection = async ({
  locale,
  edition,
  translation,
}: {
  locale: string;
  edition?: string | null;
  translation: (key: string) => string;
}) => {
  const t = translation;
  const results = await request(EditionsDocument, {
    locale,
    edition,
  });

  return (
    <div className="w-full mx-auto flex flex-col px-4 lg:px-[100px] justify-center items-center relative pb-10">
      <div className="self-end invisible lg:visible absolute top-0 right-0">
        <LinesPattern fill="#0C0C0C" />
      </div>
      {/* PROWADZĄCA */}

      <h2 className="my-10 mr-auto flex font-semibold text-lg lg:font-medium lg:text-5xl lg:leading-[62px]">
        {t('lead')}
      </h2>
      <div className="lg:w-full flex flex-col lg:grid lg:grid-cols-2 lg:justify-items-start mr-auto gap-10">
        {results.event?.lead.map((leader) => (
          <div
            className="lg:flex lg:flex-row-reverse items-center lg:self-start gap-6"
            key={leader.name}
          >
            <div className="pb-6">
              <div className="relative w-fit">
                <h3 className=" font-semibold text-lg w-max z-40 relative">
                  {leader.name}
                </h3>
                <TextBorderLine className="lg:visible invisible absolute top-5 z-1 w-full" />
              </div>
              <p className=" font-normal text-lg leading-6">{leader.role}</p>
              <p className=" font-normal text-lg leading-6">
                {leader.alternativeRole}
              </p>
            </div>
            <div>
              <ImageContainer
                image={{
                  basename: leader.image?.basename ?? '',
                  responsiveImage: {
                    src: leader.image?.responsiveImage?.src ?? '',
                    base64: leader.image?.responsiveImage?.base64 ?? '',
                    height: leader.image?.responsiveImage?.height ?? 0,
                    width: leader.image?.responsiveImage?.width ?? 0,
                    aspectRatio:
                      leader.image?.responsiveImage?.aspectRatio ?? 0,
                    sizes: leader.image?.responsiveImage?.sizes ?? '',
                    srcSet: leader.image?.responsiveImage?.srcSet ?? '',
                    title: leader.image?.responsiveImage?.title ?? '',
                    webpSrcSet: leader.image?.responsiveImage?.webpSrcSet ?? '',
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* PRELEGENCI */}

      <h2 className="my-10 mr-auto flex font-semibold text-lg lg:font-medium lg:text-5xl lg:leading-[62px]">
        {t('speakers')}
      </h2>
      <div className="lg:w-full flex flex-row flex-wrap lg:grid lg:grid-cols-2 lg:justify-items-start mr-auto gap-10">
        {results.event?.speakers.map((speaker) => (
          <div
            className="lg:flex lg:flex-row-reverse items-center lg:self-start gap-6"
            key={speaker.name}
          >
            <div className="pb-6">
              <div className="relative w-fit">
                <h3 className=" font-semibold text-lg w-max z-40 relative">
                  {speaker.name}
                </h3>
                <TextBorderLine className="lg:visible invisible absolute top-5 z-1 w-full" />
              </div>
              <p className=" font-normal text-lg leading-6">{speaker.role}</p>
              <p className=" font-normal text-lg leading-6">
                {speaker.alternativeRole}
              </p>
            </div>
            <div>
              <ImageContainer
                image={{
                  basename: speaker.image?.basename ?? '',
                  responsiveImage: {
                    src: speaker.image?.responsiveImage?.src ?? '',
                    base64: speaker.image?.responsiveImage?.base64 ?? '',
                    height: speaker.image?.responsiveImage?.height ?? 0,
                    width: speaker.image?.responsiveImage?.width ?? 0,
                    aspectRatio:
                      speaker.image?.responsiveImage?.aspectRatio ?? 0,
                    sizes: speaker.image?.responsiveImage?.sizes ?? '',
                    srcSet: speaker.image?.responsiveImage?.srcSet ?? '',
                    title: speaker.image?.responsiveImage?.title ?? '',
                    webpSrcSet:
                      speaker.image?.responsiveImage?.webpSrcSet ?? '',
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {results.event?.new && (
        <div className="flex flex-col items-center">
          <Arrow />
          <div className="mt-5">
            <Button
              href={results.event?.sign ?? '#'}
              target="_blank"
              content={t('sign')}
              buttonColor="text-main-black"
              backgroundColor="bg-main-yellow"
              buttonHover="#E2FF02"
              backgroundHover="#0C0C0C"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadSection;
