import { Header } from '@/components/Header/Header';

export const metadata = {
  title: 'LET’S TALK ABOUT IT - Regulamin Konkursu',
  openGraph: {
    url: 'https://letstalkaboutit.pl/konkurs',
    title:
      "Regulamin uczestniczenia w konkursie organizowanym przez LET'S TALK ABOUT IT",
  },
};

const TermsAndConditionsLayout = ({
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

export default TermsAndConditionsLayout;
