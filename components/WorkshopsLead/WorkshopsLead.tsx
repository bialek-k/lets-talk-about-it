import LinesPattern from '@/IconsSVG/LinesPattern';
import { ImageContainer } from '../UI/ImageContainer';
import MainLogoIcon from '@/IconsSVG/MainLogoIcon';
import Image from 'next/image';
import { TextHolder } from '../UI/TextHolder';
import TextBorderLine from '@/IconsSVG/TextBorderLine';
import { RichTextContent } from '@graphcms/rich-text-types';

const WorkshopsLead = async ({
  locale,
  edition,
  translation,
}: {
  locale: string;
  edition?: {
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
  translation: (key: string) => string;
}) => {
  const t = translation;

  return (
    <div className="w-full mx-auto flex flex-col px-4 lg:px-[100px] justify-center items-center relative pb-10 max-w-[1440px]">
      <div className="self-end invisible lg:visible absolute top-0 right-0">
        <LinesPattern fill="#0C0C0C" />
      </div>
      <h2 className="my-10 mr-auto flex font-semibold text-lg lg:font-medium lg:text-5xl lg:leading-[62px]">
        {t('organizer')}
      </h2>

      {/* LOGO PROWADZĄCEGO */}

      <div className="flex flex-col lg:flex-row w-full justify-star items-center gap-6 lg:gap-10 mb-10 lg:mb-20">
        <div className="w-[150px] h-[135px]">
          <MainLogoIcon />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-10 w-full lg:w-auto lg:flex-row">
          {edition?.logo?.map((logo) => (
            <Image
              key={logo.fileName}
              src={logo.url}
              width={logo.width}
              height={logo.height}
              alt={logo.fileName}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col-reverse lg:flex-row lg:gap-[125px] items-start justify-center">
        {/* OPIS */}
        <div
          className="w-full hidden lg:flex tracking-tight
"
        >
          <TextHolder
            content={edition?.description.raw as RichTextContent}
            customClass={`text-base ${
              locale === 'en' ? 'mt-0 md:mb-1' : 'mt-1'
            }`}
            theme="dark"
            readMore={
              edition?.description.html &&
              edition.description.html.length > 5000
                ? true
                : false
            }
            customHight="360px"
            shortText={
              edition?.description.html &&
              edition.description.html.length > 5000
                ? false
                : true
            }
          />
        </div>
        <div className="w-full lg:hidden">
          <TextHolder
            content={edition?.description.raw as RichTextContent}
            customClass={`text-base ${
              locale === 'en' ? 'mt-0 md:mb-1' : 'mt-1'
            }`}
            theme="dark"
            readMore
            customHight="360px"
          />
        </div>
        {/* PROWADZĄCA */}
        <div className="w-full lg:w-auto flex items-center justify-center">
          <div className="flex flex-col w-full">
            <h2 className="flex font-semibold text-lg lg:font-medium lg:text-5xl lg:leading-[62px] mb-10 lg:mb-0">
              {t('lead')}
            </h2>
            {edition?.lead.map((leader) => {
              return (
                <div
                  className="lg:flex lg:flex-col items-center lg:self-start gap-6 lg:mr-auto w-full lg:w-fit"
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
                  <div className="w-full">
                    <ImageContainer
                      alt={leader.name}
                      image={leader.photo}
                      link={leader.linkedIn}
                      linkedin={leader.name}
                      background="bg-main-black"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopsLead;
