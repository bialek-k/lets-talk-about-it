import { type PartnersQueryQuery } from '@/graphql/generated';
import EnvelopeIcon from '@/IconsSVG/EnvelopeIcon';
import { RichText } from '@graphcms/rich-text-react-renderer';

export const BecomePartner = (partner: PartnersQueryQuery) => {
  return (
    <div className="border-b border-black border-solid pb-5 flex flex-col gap-5 desktop:border-b-0 desktop:pb-0 desktop:col-span-2">
      {partner?.partner?.title && (
        <h4 className="font-medium text-xl lg:mb-5">
          {partner?.partner?.title}
        </h4>
      )}

      <div className="flex">
        {partner?.partner?.description && (
          <div>
            <RichText
              content={partner?.partner?.description.raw}
              renderers={{
                p: ({ children }) => (
                  <p className="font-normal text-base ">{children}</p>
                ),
              }}
            />
            <div className="flex gap-2 pt-5">
              <EnvelopeIcon />
              <strong className="text-black font-normal">
                <a href="mailto:kontakt@letstalkaboutit.pl">
                  kontakt@letstalkaboutit.pl
                </a>
              </strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
