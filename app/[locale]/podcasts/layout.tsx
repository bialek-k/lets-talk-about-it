import { Header } from '@/components/Header/Header';
import { getSeoLocale, getStaticPageMetadata } from '@/lib/seo';

export const generateMetadata = ({
  params: { locale },
}: {
  params: { locale: string };
}) => getStaticPageMetadata('podcasts', getSeoLocale(locale));

const FilmsLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: 'pl' | 'en' };
}) => {
  return (
    <section className="overflow-x-hidden w-full flex flex-col items-center">
      <Header locale={locale} />
      {children}
    </section>
  );
};

export default FilmsLayout;
