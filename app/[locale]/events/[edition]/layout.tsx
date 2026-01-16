import { Header } from '@/components/Header/Header';

export const metadata = {
  title: 'LET’S TALK ABOUT IT - Edycje',
  description: 'Zobacz nasze Edycje z Let’s Talk About IT',
  openGraph: {
    title: "Edycje Let's Talk About IT",
    description: 'Zobacz nasze Edycje z Let’s Talk About IT',
  },
};

const EventLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: 'pl' | 'en' };
}) => {
  return (
    <>
      <section className="overflow-x-hidden flex flex-col items-center">
        <Header locale={locale} />
        {children}
      </section>
    </>
  );
};

export default EventLayout;
