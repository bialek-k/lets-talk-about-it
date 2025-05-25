import { Header } from '@/components/Header/Header';

export const metadata = {
  title: 'LET’S TALK ABOUT IT - Warsztaty',
  description: 'Warsztaty i szkolenia dla społeczności IT',
  openGraph: {
    title: "Warsztaty Let's Talk About IT",
    description: 'Zobacz nasze warsztaty i szkolenia',
  },
};

const WorkshopsLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  return (
    <section className="overflow-x-hidden flex flex-col items-center">
      <Header locale={locale} />
      {children}
    </section>
  );
};

export default WorkshopsLayout;
