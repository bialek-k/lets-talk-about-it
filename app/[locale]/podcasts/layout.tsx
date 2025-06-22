import { Header } from '@/components/Header/Header';

export const metadata = {
  title: 'LET’S TALK ABOUT IT - Filmy',
  openGraph: {
    url: 'https://letstalkaboutit.pl/podcasts',
    title: "Podcasty z udziałem Let's Talk About IT",
  },
};

const FilmsLayout = ({
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

export default FilmsLayout;
