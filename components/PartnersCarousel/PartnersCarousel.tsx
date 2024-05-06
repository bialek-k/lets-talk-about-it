import { PartnersDocument } from '@/graphql/generated';
import { request } from '@/lib/request';
import Marquee from '../Marquee/Marquee';
import Image from 'next/image';

const PartnersCarousel = async ({ locale }: { locale: string }) => {
  const results = await request(PartnersDocument, { locale });
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="font-semibold text-[40px] leading-[52px] text-start self-start w-full ml-4">
        {results.allPartners[0]?.title}
      </h3>
      <Marquee>
        {results.allPartners[0].images.map((partner) => (
          <div className="mr-10 lg:mr-20" key={partner.responsiveImage?.title}>
            <Image
              className="w-full h-[77px] lg:h-[98px]"
              alt={partner.responsiveImage?.title ?? ''}
              src={partner.responsiveImage?.src ?? ''}
              width={partner.responsiveImage?.width}
              height={partner.responsiveImage?.height}
            ></Image>
          </div>
        ))}
      </Marquee>
      <div className=" w-screen">
        {/* <pre>{JSON.stringify(results, null, 2)}</pre> */}
      </div>
    </div>
  );
};

export default PartnersCarousel;
