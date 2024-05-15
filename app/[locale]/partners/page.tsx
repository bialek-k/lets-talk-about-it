import { Image } from '@/components/UI/ImageContainer';
import { PageTitle } from '@/components/UI/PageTitle';
import { TextHolder } from '@/components/UI/TextHolder';
import { PartnersPageDocument } from '@/graphql/generated';
import { request } from '@/lib/request';

import { Image as DatoImage } from 'react-datocms';

const Partners = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const results = await request(PartnersPageDocument, { locale });

  return (
    <section className="mt-16 md:mt-24 w-full min-h-screen ">
      <div className="bg-main-black px-4 flex flex-col h-full items-center justify-center pb-12 ">
        {results.partner?.title && (
          <PageTitle title={results.partner?.title} color="white" />
        )}
        {results.partner?.description && (
          <div className="md:max-w-lg">
            <TextHolder
              text={results.partner?.description}
              structuredText
              theme="light"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col px-4">
        <PageTitle title="zaufali nam:" />
        <div className="partnersImages flex flex-col md:grid md:grid-cols-3 md:gap-6 md:items-center">
          {results.partner?.images.map((img) => {
            return (
              <div key={`id:${img}`} className="py-4">
                <DatoImage data={img.responsiveImage!} className="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
