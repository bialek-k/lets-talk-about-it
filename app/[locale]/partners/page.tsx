import EnvelopIconYellow from '@/IconsSVG/EnvelopIcon_yellow';
import EnvelopeIcon from '@/IconsSVG/EnvelopeIcon';
import LinesPattern from '@/IconsSVG/LinesPattern';
import { PageTitle } from '@/components/UI/PageTitle';
import { TextHolder } from '@/components/UI/TextHolder';
import { PartnersQueryDocument } from '@/graphql/generated';
import { request } from '@/lib/request';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';

const Partners = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { partner } = await request(PartnersQueryDocument, { locale });

  return (
    <section className="mt-16 md:mt-24 w-full">
      <div className="bg-main-black flex flex-col h-full md:px-24 justify-center md:pb-12 ">
        <div className="hidden md:flex justify-end w-full absolute top-24 right-0">
          <LinesPattern fill="white" />
        </div>
        <div className="px-6 md:px-0">
          {partner?.title && (
            <PageTitle title={partner?.title} small color="white" />
          )}
        </div>

        {/**MOBILE TEXT */}
        <div className="md:hidden px-6">
          {partner?.description && (
            <div className="md:max-w-lg">
              <TextHolder
                content={partner?.description?.raw}
                additionalContent={
                  <div className="flex gap-2 items-center ">
                    <EnvelopeIcon />
                    <p className="text-main-yellow">
                      <a
                        href="mailto:etstalkitpoland@gmail.com"
                        className="no-underline"
                      >
                        letstalkitpoland@gmail.com
                      </a>
                    </p>
                  </div>
                }
                theme="light"
              />
            </div>
          )}
        </div>

        {/** MOBILE LOGOS */}

        <div className="flex bg-main-white md:hidden px-6 mt-12">
          <div className="partnersImages flex flex-col ">
            <h1 className="text-[40px] font-semibold py-4">Zaufali nam:</h1>
            {partner?.logos.map((img) => {
              const validWidth = img?.width !== null ? img?.width : undefined;
              const validHeight =
                img?.height !== null ? img?.height : undefined;

              return (
                <div key={`id:${img}`} className="py-4">
                  <Image
                    alt={img.fileName}
                    src={img.url}
                    width={validWidth}
                    height={validHeight}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/** DESKTOP TEXT */}

        <div className="hidden md:flex">
          {partner?.description && (
            <div className="md:max-w-lg">
              <RichText
                content={partner?.description.raw}
                renderers={{
                  p: ({ children }) => (
                    <p className="m-0 text-main-white">{children}</p>
                  ),
                }}
              />
              <div className="pt-8 flex gap-2">
                <EnvelopIconYellow />
                <strong className="text-main-yellow">
                  <a href="mailto:etstalkitpoland@gmail.com">
                    letstalkitpoland@gmail.com
                  </a>
                </strong>
              </div>
            </div>
          )}
        </div>

        {/** DESKTOP LOGOS */}

        <div className="hidden md:flex bg-main-white md:flex-col px-24 py-12 mt-12">
          <div className="partnersImages flex flex-col md:grid md:grid-cols-3 md:gap-6 md:items-center">
            {partner?.logos.map((img) => {
              const validWidth = img?.width !== null ? img?.width : undefined;
              const validHeight =
                img?.height !== null ? img?.height : undefined;

              return (
                <div key={`id:${img}`} className="py-4">
                  <Image
                    alt={img.fileName}
                    src={img.url}
                    width={validWidth}
                    height={validHeight}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
