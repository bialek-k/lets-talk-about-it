import { Header } from '@/components/Header/Header';

const WorkshopsLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: 'pl' | 'en' };
}) => {
  return (
    <section className="overflow-x-hidden flex flex-col items-center">
      <Header locale={locale} />
      {children}
    </section>
  );
};

export default WorkshopsLayout;
