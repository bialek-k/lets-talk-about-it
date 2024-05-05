import { graphqlClient } from '@/lib/graphqlClient';
import toRoman from '../UI/NumberToRoman';
import Pattern from '@/IconsSVG/Pattern';
import Arrow from '@/IconsSVG/Arrow';

const editionQuery = `
query MyQuery($locale: SiteLocale, $edition: String) {
  event(locale: $locale, filter: {edition: {eq: $edition}}) {
    id
    title
    edition
    new
    date
    sign
    location 
    lead {
        name
        role
        image {
            url
        }
    }
    speakers {
        name
        role
        image {
            url
        }
    }

  }
}`;

// interface EditionQuery {
//   event: {
//     id: string;
//     title: string;
//     edition: string;
//     new: boolean;
//     date: string;
//     sign: string;
//     location: string;
//     lead: {
//       name: string;
//       role: string;

//       image: {
//         url: string;
//       };
//     };
//   };
//   speakers: {
//     name: string;
//     role: string;
//     image: {
//       url: string;
//     };
//   }[];
// }

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
  const results = await graphqlClient.request<any>(editionQuery, {
    locale,
    edition,
  });

  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center ">
        <div className=" pt-20 w-full px-4 flex flex-col items-center justify-center bg-main-yellow">
          <h1
            className=" self-start text-[40px] leading-[52px] 
           font-semibold mb-10"
          >
            events
          </h1>
          {results.event.new ? (
            <h2 className="self-start text-lg font-normal ">
              {t('invite')} {toRoman(parseInt(results.event.edition))}{' '}
              {t('edition')} {t('event')}:
            </h2>
          ) : (
            <h2 className=" fill fill">
              {toRoman(parseInt(results.event.edition))} {t('Edition')}
            </h2>
          )}
          <div className="flex justify-center flex-col items-center mb-5">
            <h2 className=" font-medium text-[33px] leading-[43px] mt-5">
              LET’S TALK ABOUT IT
            </h2>
            <div className="relative flex justify-center">
              <div className="absolute top-[-5px] left-[-10px]">
                <Pattern fill="#0C0C0C" />
              </div>
              <h3>Join us to rock IT</h3>
            </div>
          </div>
          <h2 className="font-semibold text-[40px] leading-[52px] text-center">
            {results.event.title}
          </h2>
          <Arrow />
          {results.event.new ? (
            <button>{t('sign')}</button>
          ) : (
            <button>{t('gallery')}</button>
          )}
          <div>
            {/* <div>
            <CallendarIcon />
            <h3>{results.event.date}</h3>
            </div>
            <div>
            <LocationIcon />
            <h3>{results.event.location}</h3>
          </div> */}
          </div>
        </div>

        <h2>{t('lead')}</h2>
        <div>
          <h3>{results.event.lead[0].name}</h3>
          <p>{results.event.lead[0].role}</p>
          <img
            className="w-full"
            src={results.event.lead[0].image.url}
            alt={results.event.lead[0].name}
          />
        </div>
        <h2>{t('speakers')}</h2>
        {results.event.speakers.map((speaker) => (
          <div key={speaker.name}>
            <h3>{speaker.name}</h3>
            <p>{speaker.role}</p>
            <img
              className="w-full"
              src={speaker.image.url}
              alt={speaker.name}
            />
          </div>
        ))}
        {results.event.new && (
          <div>
            <Arrow />
            <button>{t('sign')}</button>
          </div>
        )}
        {/* GALERIA */}
        <div>
          <h2>{t('gallery')}</h2>
        </div>
        {/* PARTNERS */}
        {results.event.new && (
          <div>
            <h2>{t('partners')}</h2>
          </div>
        )}
      </div>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </section>
  );
};

export default Edition;
