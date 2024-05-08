import LinesPattern from '@/IconsSVG/LinesPattern';
import TextBorderLine from '@/IconsSVG/TextBorderLine';
import { EditionsDocument } from '@/graphql/generated';
import { request } from '@/lib/request';
import { Image } from '../UI/Image';
import Arrow from '@/IconsSVG/Arrow';
import Button from '../UI/Button';

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
    <div className="lg:w-full flex flex-col px-4 lg:px-[100px] justify-center items-center relative pb-10">
      <div className="self-end invisible lg:visible absolute top-0 right-0">
        <LinesPattern fill="#0C0C0C" />
      </div>
      {/* PROWADZĄCA */}

      <h2 className="my-10 flex w-full font-semibold text-lg lg:font-medium lg:text-5xl lg:leading-[62px] ">
        {t('lead')}
      </h2>
      <div className="lg:w-full flex flex-col lg:grid lg:grid-cols-2 lg:justify-items-start">
        {results.event?.lead.map((leader) => (
          <div
            className="lg:flex lg:flex-row-reverse items-center lg:self-start gap-6"
            key={leader.name}
          >
            <div className="w-max">
              <div className="relative w-max">
                <h3 className=" font-semibold text-lg w-max z-40 relative">
                  {leader.name}
                </h3>
                <TextBorderLine className="lg:visible invisible absolute top-5 z-1 w-full" />
              </div>
              <p className=" font-normal text-lg ">{leader.role}</p>
            </div>
            <div>
              <Image image={leader.image?.responsiveImage} alt={leader.name} />
            </div>
          </div>
        ))}
      </div>

      {/* PRELEGENCI */}

      <h2 className="my-10 flex w-full font-semibold text-lg lg:font-medium lg:text-5xl lg:leading-[62px] ">
        {t('speakers')}
      </h2>
      <div className="lg:w-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 lg:justify-items-start">
        {results.event?.speakers.map((speaker) => (
          <div
            className="lg:flex lg:flex-row-reverse lg:justify-end items-center lg:self-start gap-6 w-full"
            key={speaker.name}
          >
            <div className="w-max">
              <div className="relative w-max">
                <h3 className=" font-semibold text-lg w-max z-40 relative">
                  {speaker.name}
                </h3>
                <TextBorderLine className="lg:visible invisible absolute top-5 z-1 w-full" />
              </div>
              <p className=" font-normal text-lg ">{speaker.role}</p>
            </div>
            <div>
              <Image
                image={speaker.image?.responsiveImage}
                alt={speaker.name}
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
