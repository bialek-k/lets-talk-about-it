import Header from '@/components/Header/Header';

export const metadata = {
  title: 'LET’S TALK ABOUT IT - www.letstalkaboutit.pl/partners',
  openGraph: {
    url: 'https://letstalkaboutit.pl/partners',
    title: "Partnerzy Let's Talk About IT",
    description: 'Zobacz naszych partnerów i sponsorów',
  },
};

const PartnersLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  return (
    <section className="overflow-x-hidden w-full flex flex-col items-center">
      <Header locale={locale} />
      {children}
    </section>
  );
};

export default PartnersLayout;
