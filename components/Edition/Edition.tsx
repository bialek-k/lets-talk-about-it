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
  const data = await request(PartnersDocument, { locale });

  const eventDate = new Date(results.event?.date ?? '');
  const formattedDate = `${eventDate.getDate().toString().padStart(2, '0')}.${(
    eventDate.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}.${eventDate.getFullYear()}`;
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center ">
        <div className=" pt-20 lg:pt-24 pb-[60px] w-full pl-4 lg:px-[100px] flex flex-col items-center justify-center bg-main-yellow">
          <div className="mt-[4px] self-end hidden lg:inline ">
            <LinesPattern fill="#0C0C0C" />
          </div>
          <h1
            className=" self-start text-[40px] leading-[52px] 
           font-semibold mb-10"
          >
            events
          </h1>
          {results.event?.new ? (
            <h2 className="self-start text-lg font-normal ">
              {t('invite')} {toRoman(parseInt(results.event?.edition ?? ''))}{' '}
              {t('edition')} {t('event')}:
            </h2>
          ) : (
            <h2 className=" fill fill">
              {toRoman(parseInt(results.event?.edition ?? ''))} {t('Edition')}
            </h2>
          )}
          <MainTitle />
          <h2 className="font-semibold text-[40px] leading-[52px] text-center">
            {results.event?.title}
          </h2>
          <Arrow />
          {results.event?.new ? (
            <div className="mt-5">
              <Button
                content={t('sign')}
                buttonColor="text-main-white"
                backgroundColor="bg-main-black"
                buttonHover="#0C0C0C"
                backgroundHover="#F5F5F5"
              />
            </div>
          ) : (
            <div className="mt-5">
              <Button
                content={t('gallery')}
                buttonColor="text-main-white"
                backgroundColor="bg-main-black"
                buttonHover="#0C0C0C"
                backgroundHover="#F5F5F5"
              />
            </div>
          )}
          <div className="flex flex-row items-start justify-center w-full mt-6 lg:max-w-[936px]">
            <div className="flex flex-col items-center justify-center">
              <Calendar />
              <h3 className=" font-medium text-base mt-6 ">{formattedDate}</h3>
            </div>
            <div className="border-r-2 border-solid border-main-black bg-main-black  h-[79px] mx-[35px]"></div>
            <div className="flex flex-col items-center justify-center">
              <Location data={results.event?.location} />
              <h3 className=" font-medium text-base text-center mt-6 w-min ">
                {results.event?.location?.toLocaleUpperCase()}
              </h3>
            </div>
          </div>
        </div>
        <div className="lg:w-full flex flex-col pl-4 lg:px-[100px] justify-center items-center">
          <div className="self-end invisible lg:visible">
            <LinesPattern fill="#0C0C0C" />
          </div>
          {/* PROWADZĄCA */}

          <h2 className="my-10 flex w-full font-semibold text-lg lg:font-medium lg:text-5xl lg:leading-[62px] ">
            {t('lead')}
          </h2>
          <div className="lg:flex lg:flex-row-reverse items-center lg:self-start gap-6">
            <div>
              <div className="relative">
                <h3 className="font-semibold text-lg w-max z-40 relative">
                  {results.event?.lead[0].name}
                </h3>
                <TextBorderLine className="lg:visible invisible absolute top-5 z-1" />
              </div>
              <p className=" font-normal text-lg pr-[30%]">
                {results.event?.lead[0].role}
              </p>
            </div>
            <Image
              image={results.event?.lead[0].image?.responsiveImage}
              alt={results.event?.lead[0].name ?? ''}
            />
          </div>

          {/* PRELEGENCI */}

          <h2 className="my-10 flex w-full font-semibold text-lg lg:font-medium lg:text-5xl lg:leading-[62px] ">
            {t('speakers')}
          </h2>
          <div className="lg:w-full flex flex-col lg:flex-row lg:flex-wrap lg:items-start lg:justify-between">
            {results.event?.speakers.map((speaker) => (
              <div
                className="lg:flex lg:flex-row-reverse items-center lg:self-start gap-6"
                key={speaker.name}
              >
                <div>
                  <div className="relative w-max">
                    <h3 className=" font-semibold text-lg w-max z-40 relative">
                      {speaker.name}
                    </h3>
                    <TextBorderLine className="lg:visible invisible absolute top-5 z-1 w-full" />
                  </div>
                  <p className=" font-normal text-lg ">{speaker.role}</p>
                </div>
                <Image
                  image={speaker.image?.responsiveImage}
                  alt={speaker.name}
                />
              </div>
            ))}
          </div>
          {results.event?.new && (
            <div className="flex flex-col items-center">
              <Arrow />
              <div className="mt-5">
                <Button
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
        {/* GALERIA */}
        <div>
          <h2>{t('gallery')}</h2>
        </div>
        {/* PARTNERS */}
        <PartnersCarousel locale={locale} />
      </div>
    </section>
  );
};

export default Edition;
