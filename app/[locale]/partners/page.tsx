import EnvelopIconYellow from '@/IconsSVG/EnvelopIcon_yellow';
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
    <section className="mt-16 md:mt-24 w-full min-h-screen ">
      <div className="bg-main-black flex flex-col h-full px-24 justify-center pb-12 ">
        {partner?.title && (
          <PageTitle title={partner?.title} small color="white" />
        )}
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
            <div className="pt-6 flex gap-2">
              <EnvelopIconYellow />
              <strong className="text-main-yellow">
                letstalkitpoland@gmail.com
              </strong>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col  px-24">
        <PageTitle title="zaufali nam:" />
        <div className="partnersImages flex flex-col md:grid md:grid-cols-3 md:gap-6 md:items-center">
          {partner?.logos.map((img) => {
            const validWidth = img?.width !== null ? img?.width : undefined;
            const validHeight = img?.height !== null ? img?.height : undefined;

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
    </section>
  );
};

export default Partners;
