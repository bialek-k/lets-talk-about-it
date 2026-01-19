import { Header } from '@/components/Header/Header';

export const metadata = {
  title: 'LET’S TALK ABOUT IT - Gra memo',
  openGraph: {
    url: 'https://letstalkaboutit.pl/memo',
    title: "Gra Memo w Let's Talk About IT",
    description:
      "Baw się z nami i zagraj w naszą grę memo w let's talkowym stylu",
  },
};

const MemoLayout = ({
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

export default MemoLayout;
