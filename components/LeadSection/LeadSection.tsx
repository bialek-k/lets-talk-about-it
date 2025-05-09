import LinesPattern from '@/IconsSVG/LinesPattern';
import TextBorderLine from '@/IconsSVG/TextBorderLine';
import Arrow from '@/IconsSVG/Arrow';
import Button from '../UI/Button';
import { ImageContainer } from '../UI/ImageContainer';

const LeadSection = async ({
  edition,
  translation,
}: {
  edition: {
    lead: {
      name: string;
      position: string[];
      photo: {
        url: string;
        width: number;
        height: number;
      };
      linkedIn: string;
    }[];
    speakers: {
      name: string;
      position: string[];
      photo: {
        url: string;
        width: number;
        height: number;
      };
      linkedIn: string;
    }[];

    singUpLink: string;
    new: boolean;
  };

  translation: (key: string) => string;
}) => {
  const t = translation;

  return (
    <div className="w-full mx-auto flex flex-col px-4 lg:px-[100px] justify-center items-center relative pb-10 max-w-[1440px]">
      <div className="self-end invisible lg:visible absolute top-0 right-0">
        <LinesPattern fill="#0C0C0C" />
      </div>

      {/* PROWADZĄCA */}

      <h2 className="my-10 mr-auto flex font-semibold text-lg lg:font-medium lg:text-5xl lg:leading-[62px]">
        {t('lead')}
      </h2>
      <div className="w-full grid place-items-center lg:grid lg:grid-cols-2 lg:gap-10">
        {edition?.lead.map((leader) => {
          return (
            <div
              className="lg:flex lg:flex-row-reverse items-center lg:self-start gap-6 lg:mr-auto w-min lg:w-fit"
              key={leader.name}
            >
              <div className="">
                <div className="relative w-fit">
                  <h3 className=" font-semibold text-lg z-40 relative">
                    {leader.name}
                  </h3>
                  <TextBorderLine
                    className="lg:visible invisible absolute 
                  -bottom-[2px] z-1 w-full"
                  />
                </div>

                {leader.position.map((pos, index) => (
                  <p key={index} className="font-normal text-lg leading-6">
                    {pos}
                  </p>
                ))}
              </div>
              <div>
                <ImageContainer
                  linkedin={leader.name}
                  alt={`zdjęcie ${leader.name}`}
                  image={leader.photo}
                  link={leader.linkedIn}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* PRELEGENCI */}

      <h2 className="mb-10 mr-auto flex font-semibold text-lg lg:font-medium lg:text-5xl lg:leading-[62px]">
        {t('speakers')}
      </h2>
      <div className="w-full grid place-items-center lg:grid lg:grid-cols-2 lg:gap-10">
        {edition?.speakers.map((speaker) => (
          <div
            className="lg:flex lg:flex-row-reverse items-center lg:self-start gap-6 lg:mr-auto w-min lg:w-fit"
            key={speaker.name}
          >
            <div className="">
              <div className="relative w-fit">
                <h3 className=" font-semibold text-lg z-40 relative">
                  {speaker.name}
                </h3>
                <TextBorderLine
                  className="lg:visible invisible absolute 
                -bottom-[2px] z-1 w-full"
                />
              </div>
              {speaker.position.map((pos, index) => (
                <p
                  key={index}
                  className=" font-normal text-lg leading-6 break-words"
                >
                  {pos}
                </p>
              ))}
            </div>
            <div>
              <ImageContainer
                linkedin={speaker.name}
                alt={`zdjęcie ${speaker.name}`}
                image={speaker.photo}
                link={speaker.linkedIn}
              />
            </div>
          </div>
        ))}
      </div>
      {edition?.singUpLink && (
        <div className="flex flex-col items-center">
          <Arrow />
          <div className="mt-5">
            <Button
              href={edition.singUpLink ?? '#'}
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
