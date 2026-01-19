import initTranslations from '@/app/i18n';
import { Form } from '@/components/Form/Form';
import { RegulationsQueryDocument } from '@/graphql/generated';
import LinesPattern from '@/IconsSVG/LinesPattern';
import { request } from '@/lib/request';
import { RichText } from '@graphcms/rich-text-react-renderer';

const TermsAndConditions = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { regulation } = await request(RegulationsQueryDocument, {
    locale: locale as 'pl' | 'en',
  });

  return (
    <section className="pt-10 md:pt-20 lg:pt-24 w-full bg-main-black flex justify-center">
      <div className="bg-main-black flex flex-col h-full md:px-24 justify-center md:pb-12 w-full max-w-[1440px]">
        <div className="hidden md:flex justify-end w-full top-24 right-0">
          <LinesPattern fill="white" />
        </div>
        <div className="px-6 md:px-0">
          {
            <h1 className="text-main-white text-[32px] leading-[42px] font-semibold mb-5 mt-[30px]">
              {regulation?.title}
            </h1>
          }
        </div>

        <div className="flex">
          {regulation?.regulamin && (
            <div className="w-full flex flex-col gap-4 px-6 lg:px-0 text-main-white">
              <RichText
                content={regulation?.regulamin.raw}
                renderers={{
                  p: ({ children }) => (
                    <p className="m-0 lg:text-2xl text-main-white">
                      {children}
                    </p>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-6 lg:text-2xl flex flex-col gap-5 text-main-white text-wrap">
                      {children}
                    </ol>
                  ),
                }}
              />
            </div>
          )}
        </div>
        <Form />
      </div>
    </section>
  );
};

export default TermsAndConditions;
